export const getResourceReferenceCandidates = ({
    aliases,
    ids,
}) => [
    ...aliases,
    ...ids,
];

export const getDuplicableNodeIds = (nodes) =>
    nodes
        .filter((node) => node.activityName !== 'StartActivity')
        .map(({ id }) => id);

export const getValidLinkEndpointIds = (
    nodes,
    endpoint,
    { links = [], sourceId } = {}
) =>
    nodes
        .filter((node) =>
            endpoint === 'source'
                ? node.activityName !== 'EndActivity'
                : node.activityName !== 'StartActivity'
        )
        .filter(
            ({ id }) =>
                endpoint !== 'target' ||
                !sourceId ||
                !links.some(
                    (link) =>
                        link.source?.id === sourceId &&
                        link.target?.id === id
                )
        )
        .map(({ id }) => id);

const uniqueCandidates = (values) => [...new Set(values)];
const traceRootProperties = [
    'root',
    'root.id',
    'root.name',
    'root.activityName',
    'root.depth',
];
const traceDirectionProperties = {
    upstream: ['upstream', 'upstream.nodes', 'upstream.links'],
    downstream: ['downstream', 'downstream.nodes', 'downstream.links'],
};
const getTraceProperties = (direction = 'both') => [
    ...traceRootProperties,
    ...(direction === 'downstream'
        ? []
        : traceDirectionProperties.upstream),
    ...(direction === 'upstream'
        ? []
        : traceDirectionProperties.downstream),
];
const workflowValidationProperties = [
    'code',
    'severity',
    'message',
    'id',
    'ids',
    'source',
    'target',
    'name',
    'names',
    'activityName',
];

export const getPipelinePropertyCandidates = (
    pipelineCommands,
    {
        allProperties = [],
        itemPropertiesById = new Map(),
        linkProperties = [],
        nodeProperties = [],
        variableProperties = [],
    } = {}
) => {
    let resolveAliasedItem = false;
    for (let index = pipelineCommands.length - 1; index >= 0; index--) {
        const { name, args = [] } = pipelineCommands[index];
        const action = args[0]?.toLowerCase();

        if (
            ['filter', 'head', 'tail', 'sort', 'unique'].includes(name)
        ) {
            continue;
        }

        if (name === 'alias' && action === 'create') {
            const explicitItemId = args.length >= 3 ? args[1] : null;
            if (explicitItemId) {
                return uniqueCandidates(
                    itemPropertiesById.get(explicitItemId) ?? allProperties
                );
            }
            resolveAliasedItem = true;
            continue;
        }

        if (name === 'node') {
            if (resolveAliasedItem) {
                return uniqueCandidates(nodeProperties);
            }
            if (action === 'types') return ['.'];
            if (action === 'list') {
                return uniqueCandidates(
                    args.length > 1 ? args.slice(1) : nodeProperties
                );
            }
            if (['create', 'duplicate', 'select', 'update', 'move'].includes(action)) {
                return uniqueCandidates(nodeProperties);
            }
            if (action === 'delete') return uniqueCandidates(allProperties);
            if (action === 'validate') {
                return ['id', 'name', 'activityName', 'missingFields'];
            }
            if (action === 'trace') {
                return getTraceProperties(args[2]?.toLowerCase());
            }
            return [];
        }

        if (name === 'link') {
            if (resolveAliasedItem) {
                return uniqueCandidates(linkProperties);
            }
            if (action === 'list') {
                return uniqueCandidates(
                    args.length > 1 ? args.slice(1) : linkProperties
                );
            }
            if (['create', 'delete', 'select', 'update'].includes(action)) {
                return uniqueCandidates(linkProperties);
            }
            return [];
        }

        if (name === 'variable') {
            if (resolveAliasedItem && action === 'references') {
                return uniqueCandidates(nodeProperties);
            }
            if (['list', 'create'].includes(action)) {
                return uniqueCandidates(variableProperties);
            }
            if (action === 'references') {
                return ['id', 'name', 'activityName', 'path', 'value'];
            }
            if (['rename', 'delete'].includes(action)) return ['.'];
            return [];
        }

        if (name === 'template') {
            if (resolveAliasedItem && action === 'apply') {
                return uniqueCandidates(allProperties);
            }
            if (['list', 'variable-mode'].includes(action)) return ['.'];
            if (action === 'apply') return uniqueCandidates(allProperties);
            return [];
        }

        if (name === 'alias') {
            if (action === 'list') {
                return resolveAliasedItem
                    ? uniqueCandidates(allProperties)
                    : ['id', 'name', 'active'];
            }
            if (action === 'delete') return ['.'];
            return [];
        }

        if (name === 'workflow') {
            if (action === 'repair-start') {
                return uniqueCandidates(nodeProperties);
            }
            if (action === 'validate') {
                return resolveAliasedItem
                    ? uniqueCandidates(allProperties)
                    : workflowValidationProperties;
            }
            return [];
        }

        if (['count', 'history', 'status'].includes(name)) return ['.'];
        if (name === 'canvas' && ['zoom', 'minimap'].includes(action)) {
            return ['.'];
        }
        return [];
    }

    return [];
};

export const shouldCompleteNodeReference = (action, argumentIndex) => {
    if (['delete', 'select'].includes(action)) return argumentIndex >= 1;
    return (
        ['duplicate', 'update', 'move', 'validate', 'trace'].includes(action) &&
        argumentIndex === 1
    );
};

export const shouldCompleteLinkReference = (action, argumentIndex) => {
    if (action === 'delete') return argumentIndex >= 1;
    return ['update', 'select'].includes(action) && argumentIndex === 1;
};

export const collectPropertyPaths = (
    value,
    prefix = '',
    paths = new Set()
) => {
    const pendingValues = [{ value, prefix }];
    const visitedValues = new WeakSet();

    while (pendingValues.length > 0) {
        const current = pendingValues.pop();
        if (!current.value || typeof current.value !== 'object') continue;
        if (visitedValues.has(current.value)) continue;
        visitedValues.add(current.value);

        Object.entries(current.value).forEach(([key, nestedValue]) => {
            const path = current.prefix
                ? `${current.prefix}.${key}`
                : key;
            paths.add(path);
            if (nestedValue && typeof nestedValue === 'object') {
                pendingValues.push({ value: nestedValue, prefix: path });
            }
        });
    }

    return paths;
};
