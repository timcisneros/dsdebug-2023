import test from 'node:test';
import assert from 'node:assert/strict';
import { findWorkflowVariableReferences } from '../src/utils/variableMerge.js';
import {
    traceWorkflowGraph,
    validateWorkflowGraph,
} from '../src/utils/workflowValidation.js';

const start = {
    id: 'start',
    type: 'springcm.Step',
    activityName: 'StartActivity',
    name: { value: 'Start' },
};
const usedStep = {
    id: 'used',
    type: 'springcm.Step',
    activityName: 'Task',
    name: { value: 'Used' },
    input: { type: 'Variable', value: 'customer.name' },
};
const unreachableStep = {
    id: 'unreachable',
    type: 'springcm.Step',
    activityName: 'Task',
    name: { value: 'Unreachable' },
};
const validLink = {
    id: 'link',
    type: 'springcm.Link',
    source: { id: 'start' },
    target: { id: 'used' },
};

test('reports exact workflow variable reference paths', () => {
    const references = findWorkflowVariableReferences(
        { cells: [start, usedStep, validLink] },
        'customer'
    );

    assert.deepEqual(references, [
        {
            id: 'used',
            name: 'Used',
            activityName: 'Task',
            path: 'input.value',
            value: 'customer.name',
        },
    ]);
});

test('reports unreachable steps without flagging reachable steps', () => {
    const issues = validateWorkflowGraph({
        cells: [start, usedStep, unreachableStep, validLink],
    });

    assert.equal(
        issues.some(
            ({ code, id }) =>
                code === 'unreachable-step' && id === 'unreachable'
        ),
        true
    );
    assert.equal(
        issues.some(
            ({ code, id }) => code === 'unreachable-step' && id === 'used'
        ),
        false
    );
});

test('reports missing starts, duplicate ids, and dangling links', () => {
    const issues = validateWorkflowGraph({
        cells: [
            usedStep,
            { ...unreachableStep, id: 'used' },
            { ...validLink, target: { id: 'missing' } },
        ],
    });

    assert.equal(issues.some(({ code }) => code === 'missing-start'), true);
    assert.equal(issues.some(({ code }) => code === 'duplicate-id'), true);
    assert.equal(issues.some(({ code }) => code === 'dangling-link'), true);
});

test('traces upstream and downstream branches without looping on cycles', () => {
    const returnLink = {
        id: 'return-link',
        type: 'springcm.Link',
        source: { id: 'used' },
        target: { id: 'start' },
    };
    const trace = traceWorkflowGraph(
        { cells: [start, usedStep, validLink, returnLink] },
        'used',
        'both'
    );

    assert.equal(trace.root.id, 'used');
    assert.deepEqual(
        new Set(trace.upstream.nodes.map(({ id }) => id)),
        new Set(['used', 'start'])
    );
    assert.deepEqual(
        new Set(trace.downstream.nodes.map(({ id }) => id)),
        new Set(['used', 'start'])
    );
    assert.equal(trace.upstream.links.length, 2);
    assert.equal(trace.downstream.links.length, 2);
});

test('reports execution cycles as warnings', () => {
    const returnLink = {
        id: 'return-link',
        type: 'springcm.Link',
        source: { id: 'used' },
        target: { id: 'start' },
    };
    const issues = validateWorkflowGraph({
        cells: [start, usedStep, validLink, returnLink],
    });
    const cycle = issues.find(({ code }) => code === 'execution-cycle');

    assert.equal(cycle?.severity, 'warning');
    assert.deepEqual(new Set(cycle?.ids), new Set(['start', 'used']));
});
