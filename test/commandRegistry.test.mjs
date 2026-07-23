import test from 'node:test';
import assert from 'node:assert/strict';
import {
    commandExamples,
    commandDefinitions,
    commandHelpSections,
    doesSubcommandAcceptPipelineInput,
    getCommandCompletionNames,
    getPipelineActionError,
    getSubcommandCompletionNames,
    isPipelineInputPresent,
} from '../src/components/ConsoleContainer/commandRegistry.js';
import { parseCommandLine } from '../src/components/ConsoleContainer/commandParser.js';

test('registers every command in exactly one help section', () => {
    const commandNames = commandDefinitions.map(({ name }) => name);
    const helpNames = commandHelpSections.flatMap(({ commands }) => commands);

    assert.equal(new Set(commandNames).size, commandNames.length);
    assert.equal(new Set(helpNames).size, helpNames.length);
    assert.deepEqual(new Set(helpNames), new Set(commandNames));
});

test('documents resource command trees', () => {
    const definitions = new Map(
        commandDefinitions.map((definition) => [definition.name, definition])
    );

    assert.equal(definitions.has('undo'), true);
    assert.equal(definitions.has('redo'), true);
    assert.equal(definitions.has('template'), true);
    assert.equal(definitions.has('canvas'), true);
    assert.equal(definitions.has('node'), true);
    assert.equal(definitions.has('link'), true);
    assert.equal(definitions.has('workflow'), true);

    const actionNames = (command) =>
        definitions.get(command).subcommands.map(({ name }) => name);
    assert.equal(actionNames('node').includes('trace'), true);
    assert.equal(actionNames('variable').includes('references'), true);
    assert.equal(actionNames('workflow').includes('validate'), true);
    assert.equal(actionNames('template').includes('apply'), true);
    assert.equal(actionNames('template').includes('create'), false);
    assert.equal(actionNames('template').includes('add'), false);
    assert.equal(actionNames('workflow').includes('repair-start'), true);
    assert.equal(actionNames('template').includes('variable-mode'), true);

    const linkCreate = definitions
        .get('link')
        .subcommands.find(({ name }) => name === 'create');
    assert.equal(
        linkCreate.usage,
        '<sourceId|alias> <targetId|alias>'
    );

    const nodeSelect = definitions
        .get('node')
        .subcommands.find(({ name }) => name === 'select');
    assert.equal(nodeSelect.pipelineInput, 'node collections containing id');

    const nodeCreate = definitions
        .get('node')
        .subcommands.find(({ name }) => name === 'create');
    assert.doesNotMatch(nodeCreate.usage, /alias/);
    assert.equal(nodeCreate.usage, '<activityName> [x y]');

    const variableCreate = definitions
        .get('variable')
        .subcommands.find(({ name }) => name === 'create');
    assert.match(variableCreate.usage, /\[type\]/);

    const variableRename = definitions
        .get('variable')
        .subcommands.find(({ name }) => name === 'rename');
    assert.equal(variableRename.usage, '<oldName> <newName>');

    const aliasCreate = definitions
        .get('alias')
        .subcommands.find(({ name }) => name === 'create');
    assert.equal(aliasCreate.pipelineInput, 'a single item containing id');
});

test("documents primitive pipeline values with '.'", () => {
    const definitions = new Map(
        commandDefinitions.map((definition) => [definition.name, definition])
    );

    for (const command of ['filter', 'sort', 'unique']) {
        assert.match(definitions.get(command).usage, /\./);
    }
});

test('does not retain superseded duplicate command spellings', () => {
    const names = new Set(commandDefinitions.map(({ name }) => name));
    for (const superseded of [
        'create',
        'delete',
        'list',
        'connect',
        'steps',
        'variables',
        'unalias',
        'deselect',
    ]) {
        assert.equal(names.has(superseded), false);
    }
});

test('marks every pipeline utility as requiring pipeline input', () => {
    const definitions = new Map(
        commandDefinitions.map((definition) => [definition.name, definition])
    );

    for (const command of ['filter', 'count', 'head', 'tail', 'sort', 'unique']) {
        assert.equal(definitions.get(command).acceptsStructuredInput, true);
        assert.equal(definitions.get(command).requiresPipelineInput, true);
    }
});

test('only completes commands and actions that accept pipeline input', () => {
    assert.deepEqual(
        getCommandCompletionNames(),
        commandDefinitions
            .filter(({ requiresPipelineInput }) => !requiresPipelineInput)
            .map(({ name }) => name)
    );
    assert.deepEqual(
        getCommandCompletionNames(false, true),
        commandDefinitions.map(({ name }) => name)
    );
    assert.deepEqual(getCommandCompletionNames(true), [
        'filter',
        'count',
        'head',
        'tail',
        'sort',
        'unique',
        'node',
        'link',
        'alias',
    ]);
    assert.deepEqual(getSubcommandCompletionNames('node', true), [
        'delete',
        'select',
    ]);
    assert.deepEqual(getSubcommandCompletionNames('link', true), [
        'delete',
        'select',
    ]);
    assert.deepEqual(getSubcommandCompletionNames('alias', true), [
        'create',
    ]);
    assert.deepEqual(getSubcommandCompletionNames('variable', true), []);
    assert.equal(
        doesSubcommandAcceptPipelineInput('node', 'select'),
        true
    );
    assert.equal(
        doesSubcommandAcceptPipelineInput('node', 'create'),
        false
    );
    assert.equal(
        doesSubcommandAcceptPipelineInput('link', 'create'),
        false
    );
    assert.equal(
        doesSubcommandAcceptPipelineInput('alias', 'delete'),
        false
    );

    for (const definition of commandDefinitions) {
        if (definition.subcommands?.some(({ pipelineInput }) => pipelineInput)) {
            assert.equal(definition.acceptsStructuredInput, true);
        }
    }
});

test('treats empty pipelines as present when validating resource actions', () => {
    assert.equal(isPipelineInputPresent(undefined), false);
    assert.equal(isPipelineInputPresent([]), true);
    assert.equal(isPipelineInputPresent([1]), true);

    assert.equal(getPipelineActionError('node', 'select', []), null);
    assert.match(
        getPipelineActionError('node', 'create', []),
        /does not accept pipeline input/
    );
    assert.match(
        getPipelineActionError('link', undefined, []),
        /requires an action/
    );
    assert.match(
        getPipelineActionError('alias', 'delete', []),
        /does not accept pipeline input/
    );
    assert.equal(getPipelineActionError('node', 'create', undefined), null);
    assert.equal(getPipelineActionError('node', 'unknown', []), null);
});

test('keeps documented examples inside the command tree', () => {
    const definitions = new Map(
        commandDefinitions.map((definition) => [definition.name, definition])
    );

    for (const { command } of commandExamples) {
        for (const group of parseCommandLine(command)) {
            for (const parsedCommand of group.pipeline) {
                const definition = definitions.get(parsedCommand.name);
                assert.ok(definition, `Unknown command: ${parsedCommand.name}`);
                if (definition.subcommands?.length) {
                    const actions = definition.subcommands.map(
                        ({ name }) => name
                    );
                    assert.ok(
                        actions.includes(parsedCommand.args[0]),
                        `Unknown ${parsedCommand.name} action: ${parsedCommand.args[0]}`
                    );
                }
            }
        }
    }
});
