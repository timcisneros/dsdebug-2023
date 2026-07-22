const createUniqueVariableName = (baseName, usedNames) => {
    let uniqueName = `${baseName}_1`;
    let suffix = 2;

    while (usedNames.has(uniqueName)) {
        uniqueName = `${baseName}_${suffix}`;
        suffix += 1;
    }

    return uniqueName;
};

export const mergeVariableDeclarations = (
    existingVariables,
    templateVariables,
    makeUnique
) => {
    const variables = [...existingVariables];
    const usedNames = new Set(
        existingVariables.map((variable) => variable.value.name)
    );
    const renamedVariables = new Map();

    templateVariables.forEach((templateVariable) => {
        if (!templateVariable.value.deletable) return;

        const originalName = templateVariable.value.name;
        if (!usedNames.has(originalName)) {
            variables.push(templateVariable);
            usedNames.add(originalName);
            return;
        }

        if (!makeUnique) return;

        const uniqueName = createUniqueVariableName(originalName, usedNames);
        renamedVariables.set(originalName, uniqueName);
        variables.push({
            ...templateVariable,
            value: {
                ...templateVariable.value,
                name: uniqueName,
                displayName: uniqueName,
            },
        });
        usedNames.add(uniqueName);
    });

    return { variables, renamedVariables };
};

const rewriteVariablePayload = (payload, renamedVariables) => {
    if (typeof payload === 'string') {
        for (const [oldName, newName] of renamedVariables) {
            if (payload === oldName) return newName;
            if (payload.startsWith(`${oldName}.`)) {
                return `${newName}${payload.slice(oldName.length)}`;
            }
        }
        return payload;
    }

    if (Array.isArray(payload)) {
        return payload.map((item) =>
            rewriteVariablePayload(item, renamedVariables)
        );
    }

    if (payload && typeof payload === 'object') {
        if (Object.hasOwn(payload, 'value')) {
            return {
                ...payload,
                value: rewriteVariablePayload(
                    payload.value,
                    renamedVariables
                ),
            };
        }

        return Object.fromEntries(
            Object.entries(payload).map(([key, value]) => [
                key,
                rewriteVariablePayload(value, renamedVariables),
            ])
        );
    }

    return payload;
};

export const rewriteVariableReferences = (value, renamedVariables) => {
    if (renamedVariables.size === 0) return value;

    if (Array.isArray(value)) {
        return value.map((item) =>
            rewriteVariableReferences(item, renamedVariables)
        );
    }

    if (!value || typeof value !== 'object') return value;

    if (value.type === 'Variable') {
        return {
            ...value,
            value: rewriteVariablePayload(value.value, renamedVariables),
        };
    }

    return Object.fromEntries(
        Object.entries(value).map(([key, nestedValue]) => [
            key,
            rewriteVariableReferences(nestedValue, renamedVariables),
        ])
    );
};

const countVariableNameInPayload = (payload, variableName) => {
    if (typeof payload === 'string') {
        return payload === variableName || payload.startsWith(`${variableName}.`)
            ? 1
            : 0;
    }

    if (Array.isArray(payload)) {
        return payload.reduce(
            (count, item) =>
                count + countVariableNameInPayload(item, variableName),
            0
        );
    }

    if (payload && typeof payload === 'object') {
        return Object.values(payload).reduce(
            (count, nestedValue) =>
                count +
                countVariableNameInPayload(nestedValue, variableName),
            0
        );
    }

    return 0;
};

export const countVariableReferences = (value, variableName) => {
    if (Array.isArray(value)) {
        return value.reduce(
            (count, item) =>
                count + countVariableReferences(item, variableName),
            0
        );
    }

    if (!value || typeof value !== 'object') return 0;

    if (value.type === 'Variable') {
        return countVariableNameInPayload(value.value, variableName);
    }

    return Object.values(value).reduce(
        (count, nestedValue) =>
            count + countVariableReferences(nestedValue, variableName),
        0
    );
};
