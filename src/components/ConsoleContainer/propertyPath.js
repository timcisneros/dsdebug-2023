const normalizePropertyPath = (path) =>
    String(path)
        .replace(/\[(\d+)\]/g, '.$1')
        .split('.')
        .filter(Boolean);

export const getPropertyPathValue = (value, path) => {
    if (path === '.') return value;
    if (
        value !== null &&
        typeof value === 'object' &&
        Object.hasOwn(value, path)
    ) {
        return value[path];
    }
    return normalizePropertyPath(path).reduce(
        (currentValue, key) => currentValue?.[key],
        value
    );
};

export const setPropertyPathValue = (value, path, nextValue) => {
    const keys = normalizePropertyPath(path);
    if (keys.length === 0) {
        return { ok: false, error: 'A property path is required.' };
    }

    let target = value;
    for (const key of keys.slice(0, -1)) {
        if (
            target === null ||
            typeof target !== 'object' ||
            !Object.hasOwn(target, key)
        ) {
            return {
                ok: false,
                error: `Property '${key}' was not found in '${path}'.`,
            };
        }
        target = target[key];
    }

    const finalKey = keys.at(-1);
    if (
        target === null ||
        typeof target !== 'object' ||
        !Object.hasOwn(target, finalKey)
    ) {
        return {
            ok: false,
            error: `Property '${finalKey}' was not found in '${path}'.`,
        };
    }

    target[finalKey] = nextValue;
    return { ok: true };
};
