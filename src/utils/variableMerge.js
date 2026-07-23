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

const collectVariableNameInPayload = (
    payload,
    variableName,
    path,
    references
) => {
    if (typeof payload === 'string') {
        if (
            payload === variableName ||
            payload.startsWith(`${variableName}.`)
        ) {
            references.push({ path: path.join('.'), value: payload });
        }
        return;
    }

    if (Array.isArray(payload)) {
        payload.forEach((item, index) =>
            collectVariableNameInPayload(
                item,
                variableName,
                [...path, index],
                references
            )
        );
        return;
    }

    if (payload && typeof payload === 'object') {
        Object.entries(payload).forEach(([key, nestedValue]) =>
            collectVariableNameInPayload(
                nestedValue,
                variableName,
                [...path, key],
                references
            )
        );
    }
};

export const findVariableReferences = (
    value,
    variableName,
    path = [],
    references = []
) => {
    if (Array.isArray(value)) {
        value.forEach((item, index) =>
            findVariableReferences(
                item,
                variableName,
                [...path, index],
                references
            )
        );
        return references;
    }

    if (!value || typeof value !== 'object') return references;

    if (value.type === 'Variable') {
        collectVariableNameInPayload(
            value.value,
            variableName,
            [...path, 'value'],
            references
        );
        return references;
    }

    Object.entries(value).forEach(([key, nestedValue]) =>
        findVariableReferences(
            nestedValue,
            variableName,
            [...path, key],
            references
        )
    );
    return references;
};

export const findWorkflowVariableReferences = (data, variableName) =>
    (data?.cells ?? [])
        .filter((cell) => cell.activityName !== 'StartActivity')
        .flatMap((cell) =>
            findVariableReferences(cell, variableName).map((reference) => ({
                id: cell.id,
                name: cell.name?.value ?? cell.name ?? '',
                activityName: cell.activityName ?? '',
                ...reference,
            }))
        );

export const countVariableReferences = (value, variableName) =>
    findVariableReferences(value, variableName).length;
