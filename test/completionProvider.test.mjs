import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveConsoleCompletions } from '../src/components/ConsoleContainer/completionResolver.js';

const workflowIndex = {
    cellsById: new Map([
        ['node-1', { id: 'node-1', activityName: 'SearchActivity' }],
        [
            'link-1',
            {
                id: 'link-1',
                type: 'springcm.Link',
                source: { id: 'node-1' },
                target: { id: 'node-2' },
            },
        ],
    ]),
    nodeCells: [{ id: 'node-1', activityName: 'SearchActivity' }],
    edgeCells: [
        {
            id: 'link-1',
            type: 'springcm.Link',
            source: { id: 'node-1' },
            target: { id: 'node-2' },
        },
    ],
    startActivity: { definedVariables: { value: [] } },
};

const dependencies = {
    activityNames: ['SearchActivity'],
    aliases: { search: 'node-1', stale: 'missing' },
    getAvailableTemplates: () => ['Approval'],
    getWorkflowIndex: () => workflowIndex,
    resolveAlias: (value) => (value === 'search' ? 'node-1' : value),
    variableTemplates: [],
    variableTypes: ['Text'],
};

const completionContext = (overrides) => ({
    argumentIndex: 1,
    commandName: 'node',
    completingCommand: false,
    hasPipelineInput: false,
    inComment: false,
    pipelineCommands: [],
    token: '',
    words: ['node', 'select', ''],
    ...overrides,
});

test('completion provider returns only active references for the resource', () => {
    assert.deepEqual(
        resolveConsoleCompletions(completionContext(), dependencies),
        ['node-1', 'search']
    );
});

test('completion provider limits piped resources to compatible actions', () => {
    assert.deepEqual(
        resolveConsoleCompletions(
            completionContext({
                argumentIndex: 0,
                hasPipelineInput: true,
                words: ['node', ''],
            }),
            dependencies
        ),
        ['delete', 'select']
    );
});
