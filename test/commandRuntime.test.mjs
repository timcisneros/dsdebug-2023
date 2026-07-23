import test from 'node:test';
import assert from 'node:assert/strict';
import {
    readConsoleEntry,
    writeExpandedConsoleControl,
} from '../src/components/ConsoleContainer/commandRuntime.js';

test('leaves ordinary console values collapsed by default', () => {
    const values = [['first', 'second']];
    assert.deepEqual(readConsoleEntry(values), {
        values,
        initiallyExpandedValueIndexes: [],
    });
});

test('writes expanded arrays with explicit display metadata', () => {
    const originalLog = console.log;
    let loggedArguments;
    console.log = (...args) => {
        loggedArguments = args;
    };

    try {
        const completions = ['first', 'second'];
        writeExpandedConsoleControl(completions);
        const entry = readConsoleEntry(loggedArguments.slice(1));

        assert.equal(loggedArguments[0], 'dsdebug-log');
        assert.equal(entry.values[0], completions);
        assert.equal(Array.isArray(entry.values[0]), true);
        assert.deepEqual(entry.initiallyExpandedValueIndexes, [0]);
    } finally {
        console.log = originalLog;
    }
});
