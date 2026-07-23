import test from 'node:test';
import assert from 'node:assert/strict';
import {
    collectPropertyPaths,
    getDuplicableNodeIds,
    getPipelinePropertyCandidates,
    getResourceReferenceCandidates,
    getValidLinkEndpointIds,
    shouldCompleteLinkReference,
    shouldCompleteNodeReference,
} from '../src/components/ConsoleContainer/completionCandidates.js';

test('collects deep object and array property paths', () => {
    const value = {
        data: {
            settings: {
                choices: [{ label: 'one', details: { enabled: true } }],
            },
        },
    };
    const paths = collectPropertyPaths(value);

    assert.equal(paths.has('data.settings.choices.0.label'), true);
    assert.equal(
        paths.has('data.settings.choices.0.details.enabled'),
        true
    );
});

test('only offers IDs and aliases as resource references', () => {
    const references = {
        aliases: ['start_alias'],
        ids: ['5b10d9fd-d7f5-4892-9954-4db387131806'],
    };

    assert.deepEqual(getResourceReferenceCandidates(references), [
        'start_alias',
        '5b10d9fd-d7f5-4892-9954-4db387131806',
    ]);
});

test('offers node references only in arguments that accept them', () => {
    assert.equal(shouldCompleteNodeReference('move', 1), true);
    assert.equal(shouldCompleteNodeReference('move', 2), false);
    assert.equal(shouldCompleteNodeReference('duplicate', 1), true);
    assert.equal(shouldCompleteNodeReference('duplicate', 2), false);
    assert.equal(shouldCompleteNodeReference('validate', 1), true);
    assert.equal(shouldCompleteNodeReference('validate', 2), false);
    assert.equal(shouldCompleteNodeReference('trace', 1), true);
    assert.equal(shouldCompleteNodeReference('trace', 2), false);
    assert.equal(shouldCompleteNodeReference('select', 4), true);
    assert.equal(shouldCompleteNodeReference('delete', 4), true);
});

test('offers link references only in arguments that accept them', () => {
    assert.equal(shouldCompleteLinkReference('select', 1), true);
    assert.equal(shouldCompleteLinkReference('select', 2), false);
    assert.equal(shouldCompleteLinkReference('update', 1), true);
    assert.equal(shouldCompleteLinkReference('update', 2), false);
    assert.equal(shouldCompleteLinkReference('delete', 3), true);
});

test('only offers nodes with a compatible link endpoint', () => {
    const nodes = [
        { id: 'start', activityName: 'StartActivity' },
        { id: 'step', activityName: 'SearchActivity' },
        { id: 'end', activityName: 'EndActivity' },
    ];

    assert.deepEqual(getValidLinkEndpointIds(nodes, 'source'), [
        'start',
        'step',
    ]);
    assert.deepEqual(getValidLinkEndpointIds(nodes, 'target'), [
        'step',
        'end',
    ]);
    assert.deepEqual(
        getValidLinkEndpointIds(nodes, 'target', {
            sourceId: 'start',
            links: [{ source: { id: 'start' }, target: { id: 'step' } }],
        }),
        ['end']
    );
});

test('does not offer Start for node duplication', () => {
    assert.deepEqual(
        getDuplicableNodeIds([
            { id: 'start', activityName: 'StartActivity' },
            { id: 'step', activityName: 'SearchActivity' },
        ]),
        ['step']
    );
});

test('derives property completion from the upstream command output', () => {
    const catalogs = {
        allProperties: ['id', 'source.id', 'activityName'],
        linkProperties: ['id', 'source.id'],
        nodeProperties: ['id', 'activityName'],
        variableProperties: ['type', 'value.name'],
    };

    assert.deepEqual(
        getPipelinePropertyCandidates(
            [{ name: 'node', args: ['types'] }],
            catalogs
        ),
        ['.']
    );
    assert.deepEqual(
        getPipelinePropertyCandidates(
            [{ name: 'node', args: ['list', 'id'] }],
            catalogs
        ),
        ['id']
    );
    assert.deepEqual(
        getPipelinePropertyCandidates([], catalogs),
        []
    );
});

test('retains upstream properties through pass-through pipeline stages', () => {
    const properties = getPipelinePropertyCandidates(
        [
            { name: 'variable', args: ['list'] },
            { name: 'filter', args: ['value.name', 'exists'] },
            { name: 'head', args: ['5'] },
        ],
        { variableProperties: ['type', 'value.name'] }
    );

    assert.deepEqual(properties, ['type', 'value.name']);
});

test('describes trace and workflow command output properties', () => {
    const traceProperties = getPipelinePropertyCandidates(
        [{ name: 'node', args: ['trace', 'step-1'] }]
    );
    assert.equal(traceProperties.includes('root.id'), true);
    assert.equal(traceProperties.includes('downstream.nodes'), true);

    const upstreamProperties = getPipelinePropertyCandidates([
        { name: 'node', args: ['trace', 'step-1', 'upstream'] },
    ]);
    assert.equal(upstreamProperties.includes('upstream.nodes'), true);
    assert.equal(upstreamProperties.includes('downstream.nodes'), false);

    const downstreamProperties = getPipelinePropertyCandidates([
        { name: 'node', args: ['trace', 'step-1', 'downstream'] },
    ]);
    assert.equal(downstreamProperties.includes('upstream.nodes'), false);
    assert.equal(downstreamProperties.includes('downstream.nodes'), true);

    const validationProperties = getPipelinePropertyCandidates(
        [{ name: 'workflow', args: ['validate'] }]
    );
    assert.equal(validationProperties.includes('code'), true);
    assert.equal(validationProperties.includes('severity'), true);

    assert.deepEqual(
        getPipelinePropertyCandidates(
            [{ name: 'workflow', args: ['repair-start'] }],
            { nodeProperties: ['id', 'activityName'] }
        ),
        ['id', 'activityName']
    );
});

test('describes the complete item returned by alias creation', () => {
    const catalogs = {
        allProperties: ['id', 'activityName', 'source.id'],
        itemPropertiesById: new Map([
            ['node-1', ['id', 'activityName']],
        ]),
        linkProperties: ['id', 'source.id'],
        nodeProperties: ['id', 'activityName'],
    };

    assert.deepEqual(
        getPipelinePropertyCandidates(
            [{ name: 'alias', args: ['create', 'node-1', 'first'] }],
            catalogs
        ),
        ['id', 'activityName']
    );
    assert.deepEqual(
        getPipelinePropertyCandidates(
            [
                { name: 'node', args: ['list', 'id'] },
                { name: 'head', args: ['1'] },
                { name: 'alias', args: ['create', 'first'] },
            ],
            catalogs
        ),
        ['id', 'activityName']
    );
    assert.deepEqual(
        getPipelinePropertyCandidates(
            [
                { name: 'alias', args: ['list'] },
                { name: 'head', args: ['1'] },
                { name: 'alias', args: ['create', 'copy'] },
            ],
            catalogs
        ),
        catalogs.allProperties
    );
});

test('includes active state in alias list output properties', () => {
    assert.deepEqual(
        getPipelinePropertyCandidates([
            { name: 'alias', args: ['list'] },
        ]),
        ['id', 'name', 'active']
    );
});
