import test from 'node:test';
import assert from 'node:assert/strict';
import {
    createWorkflowHistory,
    workflowHistoryLimit,
    workflowHistoryReducer,
} from '../src/utils/workflowHistory.js';

const createWorkflow = (name) => ({
    cells: [
        {
            id: 'start',
            type: 'springcm.Step',
            activityName: 'StartActivity',
            workflowName: { type: 'String', value: name },
            definedVariables: { type: 'Variable', value: [] },
        },
    ],
});

const createHistory = () =>
    createWorkflowHistory(
        createWorkflow('Original'),
        { type: 'String', value: 'Fallback' },
        []
    );

test('records edits and restores exact snapshots with undo and redo', () => {
    let history = createHistory();
    const originalData = history.present.data;
    history = workflowHistoryReducer(history, {
        type: 'apply',
        dataOrUpdater: createWorkflow('Edited'),
    });

    assert.equal(history.past.length, 1);
    assert.equal(
        history.present.data.cells[0].workflowName.value,
        'Edited'
    );

    history = workflowHistoryReducer(history, { type: 'undo' });
    assert.equal(history.present.data, originalData);
    assert.equal(history.future.length, 1);

    history = workflowHistoryReducer(history, { type: 'redo' });
    assert.equal(
        history.present.data.cells[0].workflowName.value,
        'Edited'
    );
    assert.equal(history.future.length, 0);
});

test('clears redo after branching from an undone state', () => {
    let history = createHistory();
    history = workflowHistoryReducer(history, {
        type: 'apply',
        dataOrUpdater: createWorkflow('First edit'),
    });
    history = workflowHistoryReducer(history, { type: 'undo' });
    history = workflowHistoryReducer(history, {
        type: 'apply',
        dataOrUpdater: createWorkflow('Branched edit'),
    });

    assert.equal(history.future.length, 0);
    assert.equal(
        history.present.data.cells[0].workflowName.value,
        'Branched edit'
    );
});

test('ignores structural no-ops and bounds retained snapshots', () => {
    let history = createHistory();
    const unchangedHistory = workflowHistoryReducer(history, {
        type: 'apply',
        dataOrUpdater: (data) => ({ ...data, cells: [...data.cells] }),
    });
    assert.equal(unchangedHistory, history);

    for (let index = 0; index < workflowHistoryLimit + 5; index++) {
        history = workflowHistoryReducer(history, {
            type: 'apply',
            dataOrUpdater: createWorkflow(`Edit ${index}`),
        });
    }
    assert.equal(history.past.length, workflowHistoryLimit);
});

test('replacing an imported workflow starts a fresh history', () => {
    let history = createHistory();
    history = workflowHistoryReducer(history, {
        type: 'apply',
        dataOrUpdater: createWorkflow('Edited'),
    });
    history = workflowHistoryReducer(history, {
        type: 'replace',
        data: createWorkflow('Imported'),
    });

    assert.equal(history.past.length, 0);
    assert.equal(history.future.length, 0);
    assert.equal(
        history.present.data.cells[0].workflowName.value,
        'Imported'
    );
});
