import test from 'node:test';
import assert from 'node:assert/strict';
import { executeParsedCommands } from '../src/components/ConsoleContainer/commandExecutor.js';
import { parseCommandLine } from '../src/components/ConsoleContainer/commandParser.js';

const runCommands = async (input, handlers) => {
    let currentStatus = 0;
    const errors = [];
    const registry = new Map(
        Object.entries(handlers).map(([name, definition]) => [
            name,
            { name, ...definition },
        ])
    );
    const status = await executeParsedCommands({
        commandRegistry: registry,
        executeCommand: (command, args) => command.execute(...args),
        onError: (error) => errors.push(error),
        onStatus: (nextStatus) => {
            currentStatus = nextStatus;
        },
        parsedCommands: parseCommandLine(input),
        setOutputSuppressed: () => {},
        throwIfAborted: () => {},
    });
    return { currentStatus, errors, status };
};

test('continues pipelines after failure and uses the final stage status', async () => {
    let receivedInput;
    const result = await runCommands('false | count', {
        false: { execute: () => ({ ok: false }) },
        count: {
            acceptsStructuredInput: true,
            execute: (input) => {
                receivedInput = input;
                return { ok: true, value: input.length };
            },
        },
    });

    assert.deepEqual(receivedInput, []);
    assert.equal(result.status, 0);
    assert.equal(result.currentStatus, 0);
});

test('makes each command status visible to the next command in a sequence', async () => {
    let currentStatus = 0;
    let observedStatus;
    const registry = new Map([
        ['false', { execute: () => ({ ok: false }) }],
        [
            'status',
            {
                execute: () => {
                    observedStatus = currentStatus;
                    return { ok: true, value: observedStatus };
                },
            },
        ],
    ]);

    const status = await executeParsedCommands({
        commandRegistry: registry,
        executeCommand: (command, args) => command.execute(...args),
        onError: () => {},
        onStatus: (nextStatus) => {
            currentStatus = nextStatus;
        },
        parsedCommands: parseCommandLine('false; status'),
        setOutputSuppressed: () => {},
        throwIfAborted: () => {},
    });

    assert.equal(observedStatus, 1);
    assert.equal(status, 0);
});
