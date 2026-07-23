import test from 'node:test';
import assert from 'node:assert/strict';
import { applyDraftValues } from '../src/utils/nodeDraft.js';

test('pending pane fields are rebased onto the latest external node', () => {
    const latestNode = {
        id: 'start',
        data: {
            workflowName: { type: 'String', value: 'Renamed Workflow' },
            sendNotification: { type: 'Bool', value: false },
            trackActivity: { type: 'Bool', value: true },
        },
    };
    const drafts = new Map([
        ['data.sendNotification.value', true],
    ]);

    const updatedNode = applyDraftValues(latestNode, drafts);

    assert.equal(
        updatedNode.data.workflowName.value,
        'Renamed Workflow'
    );
    assert.equal(updatedNode.data.sendNotification.value, true);
    assert.equal(updatedNode.data.trackActivity.value, true);
    assert.equal(latestNode.data.sendNotification.value, false);
});

test('an empty pane draft preserves the latest node identity', () => {
    const latestNode = { id: 'step', data: { name: { value: 'Search' } } };
    assert.equal(applyDraftValues(latestNode, new Map()), latestNode);
});
