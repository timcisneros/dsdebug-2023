import test from 'node:test';
import assert from 'node:assert/strict';
import {
    getActiveAliasEntries,
    getActiveAliasRecords,
    getAliasRecords,
    getAliasValidationError,
    getHistoryNavigation,
    getProtectedPropertyMessage,
    isUpdatablePropertyValue,
    parseFiniteNumberArgument,
    parsePropertyUpdateValue,
    resolveResourceReference,
    resolveUniqueResourceReferences,
    shouldNavigateHistoryWithArrow,
    snapCoordinateToGrid,
} from '../src/components/ConsoleContainer/commandConsistency.js';

test('snaps command coordinates to the canvas grid', () => {
    assert.equal(snapCoordinateToGrid(0), 0);
    assert.equal(snapCoordinateToGrid(12), 0);
    assert.equal(snapCoordinateToGrid(13), 25);
    assert.equal(snapCoordinateToGrid(63), 75);
});

test('accepts only complete finite numeric arguments', () => {
    assert.deepEqual(parseFiniteNumberArgument('25'), {
        ok: true,
        value: 25,
    });
    assert.deepEqual(parseFiniteNumberArgument('-1.5'), {
        ok: true,
        value: -1.5,
    });
    assert.deepEqual(parseFiniteNumberArgument('1e2'), {
        ok: true,
        value: 100,
    });
    for (const value of ['', '   ', '25px', 'NaN', 'Infinity']) {
        assert.equal(parseFiniteNumberArgument(value).ok, false);
    }
});

test('normalizes IDs and aliases to one resource reference', () => {
    const aliases = { first: 'node-1' };
    const resolved = resolveUniqueResourceReferences(
        ['first', 'node-1', 'node-2', 'node-2'],
        (reference) => aliases[reference] ?? reference
    );
    assert.deepEqual(resolved, ['node-1', 'node-2']);
});

test('uses arrow keys for multiline movement before history navigation', () => {
    const input = 'first line\nsecond line\nthird line';
    assert.equal(
        shouldNavigateHistoryWithArrow(input, 'ArrowUp', input.length),
        false
    );
    assert.equal(shouldNavigateHistoryWithArrow(input, 'ArrowUp', 5), true);
    assert.equal(
        shouldNavigateHistoryWithArrow(input, 'ArrowDown', 5),
        false
    );
    assert.equal(
        shouldNavigateHistoryWithArrow(input, 'ArrowDown', input.length),
        true
    );
});

test('restores the unfinished draft after browsing command history', () => {
    const history = ['node list', 'link list'];
    const previous = getHistoryNavigation({
        currentIndex: history.length,
        currentValue: 'node create SearchActivity',
        direction: -1,
        draft: '',
        history,
    });
    assert.deepEqual(previous, {
        draft: 'node create SearchActivity',
        index: 1,
        value: 'link list',
    });

    const restored = getHistoryNavigation({
        currentIndex: previous.index,
        currentValue: previous.value,
        direction: 1,
        draft: previous.draft,
        history,
    });
    assert.deepEqual(restored, {
        draft: 'node create SearchActivity',
        index: history.length,
        value: 'node create SearchActivity',
    });
});

test('only resolves aliases whose workflow items currently exist', () => {
    const aliases = {
        active: 'node-1',
        inactive: 'node-2',
        'node-1': 'node-3',
    };
    const itemIds = new Set(['node-1', 'node-3']);

    assert.deepEqual(getActiveAliasEntries(aliases, itemIds), [
        ['active', 'node-1'],
    ]);
    assert.deepEqual(getActiveAliasRecords(aliases, itemIds), [
        { name: 'active', id: 'node-1' },
    ]);
    assert.deepEqual(getAliasRecords(aliases, itemIds), [
        { name: 'active', id: 'node-1', active: true },
        { name: 'inactive', id: 'node-2', active: false },
        { name: 'node-1', id: 'node-3', active: true },
    ]);
    assert.equal(
        resolveResourceReference('active', aliases, itemIds),
        'node-1'
    );
    assert.equal(
        resolveResourceReference('inactive', aliases, itemIds),
        'inactive'
    );
    assert.equal(
        resolveResourceReference('node-1', aliases, itemIds),
        'node-1'
    );
});

test('parses updates without changing the existing JSON value type', () => {
    assert.deepEqual(parsePropertyUpdateValue('name', '123'), {
        ok: true,
        value: '123',
    });
    assert.deepEqual(parsePropertyUpdateValue(1, '2.5'), {
        ok: true,
        value: 2.5,
    });
    assert.deepEqual(parsePropertyUpdateValue(true, 'false'), {
        ok: true,
        value: false,
    });
    assert.equal(parsePropertyUpdateValue(1, 'text').ok, false);
    assert.equal(parsePropertyUpdateValue(1, '25px').ok, false);
    assert.equal(parsePropertyUpdateValue(1, '').ok, false);
    assert.equal(parsePropertyUpdateValue(1, '   ').ok, false);
    assert.equal(parsePropertyUpdateValue(null, 'null').ok, false);
    assert.equal(parsePropertyUpdateValue({}, 'text').ok, false);
    assert.equal(parsePropertyUpdateValue([], 'text').ok, false);
});

test('only treats scalar JSON leaves as directly updatable', () => {
    assert.equal(isUpdatablePropertyValue('value'), true);
    assert.equal(isUpdatablePropertyValue(1), true);
    assert.equal(isUpdatablePropertyValue(false), true);
    assert.equal(isUpdatablePropertyValue(null), false);
    assert.equal(isUpdatablePropertyValue({}), false);
    assert.equal(isUpdatablePropertyValue([]), false);
    assert.equal(isUpdatablePropertyValue(undefined), false);
});

test('protects identity and structural properties from generic updates', () => {
    assert.match(getProtectedPropertyMessage('node', 'id'), /cannot be changed/);
    assert.match(
        getProtectedPropertyMessage('node', 'name.type'),
        /type descriptors/
    );
    assert.match(getProtectedPropertyMessage('node', 'position.x'), /node move/);
    assert.match(
        getProtectedPropertyMessage('node', 'activityName'),
        /structural/
    );
    assert.match(
        getProtectedPropertyMessage(
            'node',
            'definedVariables.value[0].value.name'
        ),
        /structural/
    );
    assert.match(getProtectedPropertyMessage('link', 'source.port'), /endpoints/);
    assert.match(getProtectedPropertyMessage('link', 'target.id'), /endpoints/);
    assert.equal(getProtectedPropertyMessage('node', 'name.value'), null);
    assert.equal(getProtectedPropertyMessage('link', 'description.value'), null);
});

test('rejects aliases that would shadow aliases or item IDs', () => {
    const aliases = { first: 'node-1' };
    const itemIds = new Set(['node-1', 'node-2']);

    assert.match(
        getAliasValidationError({ alias: 'first', aliases, itemIds }),
        /already exists/
    );
    assert.match(
        getAliasValidationError({ alias: 'node-2', aliases, itemIds }),
        /item ID/
    );
    assert.equal(
        getAliasValidationError({ alias: 'second', aliases, itemIds }),
        null
    );
});
