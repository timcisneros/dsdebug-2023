import test from 'node:test';
import assert from 'node:assert/strict';
import {
    getActiveCommand,
    parseCommandLine,
} from '../src/components/ConsoleContainer/commandParser.js';

test('identifies whether the active command receives pipeline input', () => {
    assert.equal(
        getActiveCommand('node create SearchActivity | alias create ').hasPipelineInput,
        true
    );
    assert.equal(
        getActiveCommand('node types; alias create ').hasPipelineInput,
        false
    );
    assert.equal(
        getActiveCommand('node types && alias create ').hasPipelineInput,
        false
    );
});

test('preserves pipeline context across continuation lines', () => {
    const activeCommand = getActiveCommand(
        'node list id |\n alias create '
    );

    assert.equal(activeCommand.hasPipelineInput, true);
    assert.deepEqual(activeCommand.pipelineCommands, [
        { name: 'node', args: ['list', 'id'] },
    ]);

    const afterCompletedCommand = getActiveCommand(
        'node list | filter id exists\nnode '
    );
    assert.equal(afterCompletedCommand.hasPipelineInput, false);
    assert.deepEqual(afterCompletedCommand.pipelineCommands, []);
});

test('preserves pipeline context across a comment-only continuation line', () => {
    const activeCommand = getActiveCommand(
        'node list | # describe the next stage\n filter '
    );

    assert.equal(activeCommand.hasPipelineInput, true);
    assert.deepEqual(activeCommand.pipelineCommands, [
        { name: 'node', args: ['list'] },
    ]);
});

test('does not interpret separators inside comments for completion', () => {
    const activeComment = getActiveCommand('node list # ignored | link create');
    assert.equal(activeComment.inComment, true);
    assert.equal(activeComment.hasPipelineInput, false);

    const nextLine = getActiveCommand(
        'node list # ignored | link create\nvariable '
    );
    assert.equal(nextLine.inComment, false);
    assert.equal(nextLine.commandName, 'variable');
});

test('uses Unix-style single and double quote escaping', () => {
    const singleQuoted = parseCommandLine(
        String.raw`node update node-1 name.value 'a\b'`
    );
    assert.equal(singleQuoted[0].pipeline[0].args.at(-1), String.raw`a\b`);

    const doubleQuoted = parseCommandLine(
        String.raw`node update node-1 name.value "a\q"`
    );
    assert.equal(doubleQuoted[0].pipeline[0].args.at(-1), String.raw`a\q`);

    const escapedQuote = parseCommandLine(
        String.raw`node update node-1 name.value "a\"b"`
    );
    assert.equal(escapedQuote[0].pipeline[0].args.at(-1), 'a"b');

    const continued = getActiveCommand('node up\\\ndate ');
    assert.deepEqual(continued.words, ['node', 'update', '']);

    const continuedBetweenWords = parseCommandLine('node \\\n update');
    assert.deepEqual(continuedBetweenWords[0].pipeline[0].args, ['update']);
});
