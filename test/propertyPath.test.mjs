import test from 'node:test';
import assert from 'node:assert/strict';
import {
    getPropertyPathValue,
    setPropertyPathValue,
} from '../src/components/ConsoleContainer/propertyPath.js';

test('reads the same nested and indexed paths used by console commands', () => {
    const cell = {
        name: { type: 'String', value: 'Review' },
        outputs: [{ value: { name: 'Approved' } }],
    };

    assert.equal(getPropertyPathValue(cell, 'name.value'), 'Review');
    assert.equal(
        getPropertyPathValue(cell, 'outputs[0].value.name'),
        'Approved'
    );
    assert.equal(getPropertyPathValue(cell, '.'), cell);
    assert.equal(
        getPropertyPathValue({ 'name.value': 'Projected Review' }, 'name.value'),
        'Projected Review'
    );
});

test('updates existing paths without creating or reshaping properties', () => {
    const cell = {
        name: { type: 'String', value: 'Review' },
        outputs: [{ value: { name: 'Approved' } }],
    };

    assert.deepEqual(
        setPropertyPathValue(cell, 'outputs[0].value.name', 'Rejected'),
        { ok: true }
    );
    assert.equal(cell.outputs[0].value.name, 'Rejected');

    const before = structuredClone(cell);
    const result = setPropertyPathValue(cell, 'outputs[1].value.name', 'Other');
    assert.equal(result.ok, false);
    assert.deepEqual(cell, before);
});
