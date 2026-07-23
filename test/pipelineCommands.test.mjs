import test from 'node:test';
import assert from 'node:assert/strict';
import {
    filterPipeline,
    headPipeline,
    parsePipelineValue,
    tailPipeline,
} from '../src/components/ConsoleContainer/pipelineCommands.js';

test("filters primitive pipeline values with the '.' property", async () => {
    const originalLog = console.log;
    console.log = () => {};

    try {
        const result = await filterPipeline(
            ['DecisionActivity', 'SearchActivity', 'DecisionTableActivity'],
            '.',
            'contains',
            'Decision'
        );

        assert.equal(result.ok, true);
        assert.deepEqual(result.value, [
            'DecisionActivity',
            'DecisionTableActivity',
        ]);
    } finally {
        console.log = originalLog;
    }
});

test('only coerces complete numeric filter literals', () => {
    assert.equal(parsePipelineValue('25'), 25);
    assert.equal(parsePipelineValue('-1.5'), -1.5);
    assert.equal(parsePipelineValue('25px'), '25px');
    assert.equal(parsePipelineValue('   '), '   ');
    assert.equal(parsePipelineValue(''), '');
});

test('preserves whitespace-only filter comparisons as text', async () => {
    const originalLog = console.log;
    console.log = () => {};

    try {
        const result = await filterPipeline(
            [{ value: '   ' }, { value: 0 }],
            'value',
            '=',
            '   '
        );
        assert.deepEqual(result.value, [{ value: '   ' }]);
    } finally {
        console.log = originalLog;
    }
});

test('compares numeric-looking strings using the property type', async () => {
    const originalLog = console.log;
    console.log = () => {};

    try {
        const result = await filterPipeline(
            [{ value: '25' }, { value: 25 }],
            'value',
            '=',
            '25'
        );
        assert.deepEqual(result.value, [
            { value: '25' },
            { value: 25 },
        ]);
    } finally {
        console.log = originalLog;
    }
});

test("requires no value for the 'exists' filter operator", async () => {
    const originalLog = console.log;
    const originalError = console.error;
    console.log = () => {};
    console.error = () => {};

    try {
        const result = await filterPipeline(
            [{ id: 'one' }, { name: 'two' }],
            'id',
            'exists'
        );
        const invalidResult = await filterPipeline(
            [{ id: 'one' }],
            'id',
            'exists',
            'true'
        );

        assert.equal(result.ok, true);
        assert.deepEqual(result.value, [{ id: 'one' }]);
        assert.equal(invalidResult.ok, false);
    } finally {
        console.log = originalLog;
        console.error = originalError;
    }
});

test('rejects a missing value for comparison filter operators', async () => {
    const originalError = console.error;
    console.error = () => {};

    try {
        const result = await filterPipeline([{ id: 'one' }], 'id', '=');
        assert.equal(result.ok, false);
    } finally {
        console.error = originalError;
    }
});

test('requires complete non-negative integers for pipeline limits', () => {
    const originalError = console.error;
    const originalLog = console.log;
    console.error = () => {};
    console.log = () => {};

    try {
        for (const value of ['', '25px', '-1', '1.5']) {
            assert.equal(headPipeline([1, 2, 3], value).ok, false);
            assert.equal(tailPipeline([1, 2, 3], value).ok, false);
        }
        assert.deepEqual(headPipeline([1, 2, 3], '2').value, [1, 2]);
        assert.deepEqual(tailPipeline([1, 2, 3], '2').value, [2, 3]);
    } finally {
        console.error = originalError;
        console.log = originalLog;
    }
});
