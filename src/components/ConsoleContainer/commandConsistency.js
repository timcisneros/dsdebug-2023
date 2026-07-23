export const CANVAS_GRID_SIZE = 25;

export const snapCoordinateToGrid = (coordinate) =>
    Math.round(coordinate / CANVAS_GRID_SIZE) * CANVAS_GRID_SIZE;

export const parseFiniteNumberArgument = (rawValue) => {
    if (
        (typeof rawValue !== 'string' && typeof rawValue !== 'number') ||
        String(rawValue).trim() === ''
    ) {
        return { ok: false };
    }
    const value = Number(rawValue);
    return Number.isFinite(value)
        ? { ok: true, value }
        : { ok: false };
};

const getPropertyKeys = (propertyPath) =>
    String(propertyPath)
        .replace(/\[(\d+)\]/g, '.$1')
        .split('.')
        .filter(Boolean);

export const getProtectedPropertyMessage = (resourceType, propertyPath) => {
    const propertyKeys = getPropertyKeys(propertyPath);
    const root = propertyKeys[0];
    if (['id', 'type'].includes(root)) {
        return `The '${root}' property cannot be changed.`;
    }
    if (propertyKeys.at(-1) === 'type') {
        return 'JSON type descriptors cannot be changed.';
    }
    if (resourceType === 'node' && root === 'position') {
        return "Use 'node move' to change a node position.";
    }
    if (
        resourceType === 'node' &&
        ['activityName', 'definedVariables'].includes(root)
    ) {
        return `The structural '${root}' property cannot be changed with node update.`;
    }
    if (resourceType === 'link' && ['source', 'target'].includes(root)) {
        return 'Link endpoints cannot be changed; delete and recreate the link.';
    }
    return null;
};

export const parsePropertyUpdateValue = (currentValue, rawValue) => {
    if (typeof currentValue === 'string') {
        return { ok: true, value: rawValue };
    }
    if (typeof currentValue === 'number') {
        const result = parseFiniteNumberArgument(rawValue);
        return result.ok
            ? result
            : { ok: false, error: 'The new value must be a number.' };
    }
    if (typeof currentValue === 'boolean') {
        const value = rawValue.toLowerCase();
        return value === 'true' || value === 'false'
            ? { ok: true, value: value === 'true' }
            : { ok: false, error: "The new value must be 'true' or 'false'." };
    }
    return {
        ok: false,
        error: 'Only leaf string, number, or boolean properties can be updated.',
    };
};

export const isUpdatablePropertyValue = (value) =>
    ['string', 'number', 'boolean'].includes(typeof value);

export const getAliasValidationError = ({ alias, aliases, itemIds }) => {
    if (Object.hasOwn(aliases, alias)) {
        return `Alias '${alias}' already exists.`;
    }
    if (itemIds.has(alias)) {
        return `Alias '${alias}' conflicts with an existing item ID.`;
    }
    return null;
};

export const getActiveAliasEntries = (aliases, itemIds) =>
    Object.entries(aliases).filter(
        ([alias, itemId]) => itemIds.has(itemId) && !itemIds.has(alias)
    );

export const getActiveAliasRecords = (aliases, itemIds) =>
    getActiveAliasEntries(aliases, itemIds).map(([name, id]) => ({ name, id }));

export const getAliasRecords = (aliases, itemIds) =>
    Object.entries(aliases).map(([name, id]) => ({
        name,
        id,
        active: itemIds.has(id),
    }));

export const resolveResourceReference = (reference, aliases, itemIds) => {
    if (itemIds.has(reference)) return reference;
    if (!Object.hasOwn(aliases, reference)) return reference;
    const itemId = aliases[reference];
    return itemIds.has(itemId) ? itemId : reference;
};

export const shouldNavigateHistoryWithArrow = (input, key, cursor) => {
    if (key === 'ArrowUp') return input.lastIndexOf('\n', cursor - 1) === -1;
    if (key === 'ArrowDown') return input.indexOf('\n', cursor) === -1;
    return false;
};

export const getHistoryNavigation = ({
    currentIndex,
    currentValue,
    direction,
    draft,
    history,
}) => {
    if (history.length === 0) {
        return { draft, index: currentIndex, value: currentValue };
    }

    const normalizedIndex =
        currentIndex < 0 ? history.length : currentIndex;
    const nextDraft =
        direction < 0 && normalizedIndex === history.length
            ? currentValue
            : draft;
    const index =
        direction < 0
            ? Math.max(normalizedIndex - 1, 0)
            : Math.min(normalizedIndex + 1, history.length);

    return {
        draft: nextDraft,
        index,
        value: index === history.length ? nextDraft : history[index],
    };
};

export const resolveUniqueResourceReferences = (references, resolve) => [
    ...new Set(references.map(resolve)),
];
