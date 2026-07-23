export const updateValueAtPath = (
    currentValue,
    pathParts,
    newValue,
    pathIndex = 0
) => {
    if (pathIndex === pathParts.length) return newValue;

    const currentPart = pathParts[pathIndex];
    if (currentPart === '*') {
        if (Array.isArray(currentValue)) {
            return currentValue.map((item) =>
                updateValueAtPath(
                    item,
                    pathParts,
                    newValue,
                    pathIndex + 1
                )
            );
        }

        return Object.fromEntries(
            Object.entries(currentValue ?? {}).map(([key, item]) => [
                key,
                updateValueAtPath(
                    item,
                    pathParts,
                    newValue,
                    pathIndex + 1
                ),
            ])
        );
    }

    const source = currentValue ?? {};
    const updatedValue = Array.isArray(source) ? [...source] : { ...source };
    updatedValue[currentPart] = updateValueAtPath(
        source[currentPart],
        pathParts,
        newValue,
        pathIndex + 1
    );
    return updatedValue;
};

export const applyDraftValues = (
    currentValue,
    draftValues,
    getPathParts = (path) => String(path).split('.')
) => {
    if (draftValues.size === 0) return currentValue;

    return [...draftValues].reduce(
        (updatedValue, [path, value]) =>
            updateValueAtPath(
                updatedValue,
                getPathParts(path),
                value
            ),
        currentValue
    );
};
