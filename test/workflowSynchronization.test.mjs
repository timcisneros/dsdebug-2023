import test from 'node:test';
import assert from 'node:assert/strict';
import {
    getActiveSelectedEdgeId,
    getActiveSelectedNodeIds,
    updateWorkflowNameInData,
} from '../src/utils/workflowSynchronization.js';

test('workflow renaming preserves the existing title structure', () => {
    const start = {
        id: 'start',
        activityName: 'StartActivity',
        workflowName: {
            type: 'String',
            value: 'Old Name',
            templateTag: '#workflowName',
        },
    };
    const step = { id: 'step', activityName: 'SearchActivity' };
    const data = { version: 1, cells: [start, step] };
    const updated = updateWorkflowNameInData(data, 'New Name');

    assert.deepEqual(updated.cells[0].workflowName, {
        type: 'String',
        value: 'New Name',
        templateTag: '#workflowName',
    });
    assert.equal(updated.cells[1], step);
    assert.equal(updated.version, 1);
});

test('selection derives only active items of the requested resource type', () => {
    const cellsById = new Map([
        ['node', { id: 'node', type: 'springcm.Step' }],
        ['link', { id: 'link', type: 'springcm.Link' }],
    ]);

    assert.deepEqual(
        getActiveSelectedNodeIds(['missing', 'link', 'node'], cellsById),
        ['node']
    );
    assert.equal(getActiveSelectedNodeIds(['missing'], cellsById), null);
    assert.equal(getActiveSelectedEdgeId('link', cellsById), 'link');
    assert.equal(getActiveSelectedEdgeId('node', cellsById), null);
});
