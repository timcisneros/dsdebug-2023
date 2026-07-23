import {
    commandDefinitions,
    doesSubcommandAcceptPipelineInput,
    getCommandCompletionNames,
    getSubcommandCompletionNames,
} from './commandRegistry.js';
import {
    collectPropertyPaths,
    getDuplicableNodeIds,
    getPipelinePropertyCandidates,
    getResourceReferenceCandidates,
    getValidLinkEndpointIds,
    shouldCompleteLinkReference,
    shouldCompleteNodeReference,
} from './completionCandidates.js';
import {
    getActiveAliasEntries,
    getProtectedPropertyMessage,
    isUpdatablePropertyValue,
} from './commandConsistency.js';
import { getPropertyPathValue } from './propertyPath.js';

const filterOperators = [
    '=',
    '!=',
    '>',
    '>=',
    '<',
    '<=',
    'contains',
    'starts-with',
    'ends-with',
    'exists',
];
const nodeActions = getSubcommandCompletionNames('node');
const nodePipelineActions = getSubcommandCompletionNames('node', true);
const linkActions = getSubcommandCompletionNames('link');
const linkPipelineActions = getSubcommandCompletionNames('link', true);
const variableActions = getSubcommandCompletionNames('variable');
const templateActions = getSubcommandCompletionNames('template');
const templateVariableModes = ['merge', 'unique'];
const aliasActions = getSubcommandCompletionNames('alias');
const aliasPipelineActions = getSubcommandCompletionNames('alias', true);
const workflowActions = getSubcommandCompletionNames('workflow');
const canvasActions = getSubcommandCompletionNames('canvas');
const canvasZoomActions = ['in', 'out'];
const canvasMinimapActions = ['on', 'off', 'toggle'];

export const resolveConsoleCompletions = (
    {
        argumentIndex,
        commandName,
        completingCommand,
        hasPipelineInput,
        inComment,
        pipelineCommands,
        token,
        words,
    },
    {
        activityNames,
        aliases: aliasMap,
        getAvailableTemplates,
        getWorkflowIndex,
        resolveAlias,
        variableTemplates,
        variableTypes,
    }
) => {
    if (inComment) return [];
    const workflowIndex = getWorkflowIndex();
    const activeAliasEntries = getActiveAliasEntries(
        aliasMap,
        new Set(workflowIndex.cellsById.keys())
    );
    const allAliasNames = Object.keys(aliasMap);
    const allIds = [...workflowIndex.cellsById.keys()];
    const nodeIds = workflowIndex.nodeCells.map(({ id }) => id);
    const edgeIds = workflowIndex.edgeCells.map(({ id }) => id);
    const nodeIdSet = new Set(nodeIds);
    const edgeIdSet = new Set(edgeIds);
    const nodeAliases = activeAliasEntries
        .filter(([, id]) => nodeIdSet.has(id))
        .map(([alias]) => alias);
    const linkAliases = activeAliasEntries
        .filter(([, id]) => edgeIdSet.has(id))
        .map(([alias]) => alias);
    const variableNames =
        workflowIndex.startActivity?.definedVariables?.value?.map(
            (variable) => variable.value.name
        ) ?? [];
    let nodeProperties;
    let edgeProperties;
    let variableProperties;
    const getNodeProperties = () => {
        nodeProperties ??= workflowIndex.nodeCells.reduce(
            (paths, cell) => collectPropertyPaths(cell, '', paths),
            new Set(['id'])
        );
        return nodeProperties;
    };
    const getEdgeProperties = () => {
        edgeProperties ??= workflowIndex.edgeCells.reduce(
            (paths, cell) => collectPropertyPaths(cell, '', paths),
            new Set(['id'])
        );
        return edgeProperties;
    };
    const getAllProperties = () => [
        ...new Set([...getNodeProperties(), ...getEdgeProperties()]),
    ];
    const getVariableProperties = () => {
        variableProperties ??= [
            ...(workflowIndex.startActivity?.definedVariables?.value ?? []),
            ...variableTemplates,
        ].reduce(
            (paths, variable) => collectPropertyPaths(variable, '', paths),
            new Set()
        );
        return variableProperties;
    };
    const getUpstreamProperties = () =>
        getPipelinePropertyCandidates(pipelineCommands ?? [], {
            allProperties: getAllProperties(),
            itemPropertiesById: new Map([
                ...workflowIndex.nodeCells.map((cell) => [
                    cell.id,
                    collectPropertyPaths(cell, '', new Set(['id'])),
                ]),
                ...workflowIndex.edgeCells.map((cell) => [
                    cell.id,
                    collectPropertyPaths(cell, '', new Set(['id'])),
                ]),
            ]),
            linkProperties: getEdgeProperties(),
            nodeProperties: getNodeProperties(),
            variableProperties: getVariableProperties(),
        });
    const actionName = words[1]?.toLowerCase();
    const activeDefinition = commandDefinitions.find(
        ({ name }) => name === commandName
    );

    if (
        hasPipelineInput &&
        !completingCommand &&
        activeDefinition &&
        !activeDefinition.acceptsInput &&
        !activeDefinition.acceptsStructuredInput
    ) {
        return [];
    }
    if (
        !hasPipelineInput &&
        !completingCommand &&
        activeDefinition?.requiresPipelineInput
    ) {
        return [];
    }
    if (
        hasPipelineInput &&
        argumentIndex >= 1 &&
        activeDefinition?.subcommands?.length &&
        !doesSubcommandAcceptPipelineInput(commandName, actionName)
    ) {
        return [];
    }

    let candidates = [];
    if (completingCommand) {
        candidates = getCommandCompletionNames(hasPipelineInput);
    } else {
        switch (commandName) {
            case 'history':
                if (argumentIndex === 0) candidates = ['clear'];
                break;
            case 'help':
                if (argumentIndex === 0) {
                    candidates = getCommandCompletionNames(false, true);
                } else if (argumentIndex === 1) {
                    candidates =
                        commandDefinitions
                            .find(({ name }) => name === actionName)
                            ?.subcommands?.map(({ name }) => name) ?? [];
                }
                break;
            case 'filter':
                if (argumentIndex === 0) {
                    candidates = hasPipelineInput
                        ? getUpstreamProperties()
                        : [];
                } else if (argumentIndex === 1) {
                    candidates = filterOperators;
                }
                break;
            case 'sort':
            case 'unique':
                if (argumentIndex === 0) {
                    candidates = hasPipelineInput
                        ? getUpstreamProperties()
                        : [];
                }
                break;
            case 'node':
                if (argumentIndex === 0) {
                    candidates = hasPipelineInput
                        ? nodePipelineActions
                        : nodeActions;
                } else if (actionName === 'create' && argumentIndex === 1) {
                    candidates = activityNames;
                } else if (actionName === 'list' && argumentIndex >= 1) {
                    candidates = getNodeProperties();
                } else if (
                    actionName === 'trace' &&
                    argumentIndex === 2
                ) {
                    candidates = ['upstream', 'downstream', 'both'];
                } else if (
                    actionName === 'duplicate' &&
                    argumentIndex === 1
                ) {
                    const duplicableIds = getDuplicableNodeIds(
                        workflowIndex.nodeCells
                    );
                    const duplicableIdSet = new Set(duplicableIds);
                    const duplicableAliases = activeAliasEntries
                        .filter(([, id]) => duplicableIdSet.has(id))
                        .map(([alias]) => alias);
                    candidates = [...duplicableAliases, ...duplicableIds];
                } else if (
                    shouldCompleteNodeReference(actionName, argumentIndex)
                ) {
                    candidates = getResourceReferenceCandidates({
                        aliases: nodeAliases,
                        ids: nodeIds,
                    });
                } else if (
                    actionName === 'update' &&
                    argumentIndex === 2
                ) {
                    const item = workflowIndex.cellsById.get(
                        resolveAlias(words[2])
                    );
                    const propertyCandidates = item
                        ? [...collectPropertyPaths(item)]
                        : [];
                    candidates = propertyCandidates.filter(
                        (propertyPath) =>
                            !getProtectedPropertyMessage(
                                'node',
                                propertyPath
                            ) &&
                            isUpdatablePropertyValue(
                                getPropertyPathValue(item, propertyPath)
                            )
                    );
                }
                break;
            case 'link':
                if (argumentIndex === 0) {
                    candidates = hasPipelineInput
                        ? linkPipelineActions
                        : linkActions;
                } else if (actionName === 'list' && argumentIndex >= 1) {
                    candidates = getEdgeProperties();
                } else if (
                    shouldCompleteLinkReference(actionName, argumentIndex) &&
                    (actionName !== 'select' || !hasPipelineInput)
                ) {
                    candidates = getResourceReferenceCandidates({
                        aliases: linkAliases,
                        ids: edgeIds,
                    });
                } else if (
                    actionName === 'create' &&
                    argumentIndex >= 1 &&
                    argumentIndex <= 2
                ) {
                    const endpoint =
                        argumentIndex === 1 ? 'source' : 'target';
                    const endpointIds = getValidLinkEndpointIds(
                        workflowIndex.nodeCells,
                        endpoint,
                        {
                            links: workflowIndex.edgeCells,
                            sourceId:
                                endpoint === 'target'
                                    ? resolveAlias(words[2])
                                    : undefined,
                        }
                    );
                    const endpointIdSet = new Set(endpointIds);
                    const endpointAliases = activeAliasEntries
                        .filter(([, id]) => endpointIdSet.has(id))
                        .map(([alias]) => alias);
                    candidates = [...endpointAliases, ...endpointIds];
                } else if (
                    actionName === 'update' &&
                    argumentIndex === 2
                ) {
                    const item = workflowIndex.cellsById.get(
                        resolveAlias(words[2])
                    );
                    const propertyCandidates = item
                        ? [...collectPropertyPaths(item)]
                        : [];
                    candidates = propertyCandidates.filter(
                        (propertyPath) =>
                            !getProtectedPropertyMessage(
                                'link',
                                propertyPath
                            ) &&
                            isUpdatablePropertyValue(
                                getPropertyPathValue(item, propertyPath)
                            )
                    );
                }
                break;
            case 'variable':
                if (argumentIndex === 0) candidates = variableActions;
                else if (
                    argumentIndex === 1 &&
                    ['rename', 'delete', 'references'].includes(actionName)
                ) {
                    candidates = variableNames;
                } else if (argumentIndex === 2 && actionName === 'create') {
                    candidates = variableTypes;
                }
                break;
            case 'template':
                if (argumentIndex === 0) candidates = templateActions;
                else if (argumentIndex === 1 && actionName === 'apply') {
                    candidates = getAvailableTemplates();
                } else if (
                    argumentIndex === 1 &&
                    actionName === 'variable-mode'
                ) {
                    candidates = templateVariableModes;
                }
                break;
            case 'alias':
                if (argumentIndex === 0) {
                    candidates = hasPipelineInput
                        ? aliasPipelineActions
                        : aliasActions;
                } else if (
                    argumentIndex === 1 &&
                    actionName === 'create' &&
                    !hasPipelineInput
                ) {
                    candidates = allIds;
                } else if (
                    argumentIndex === 1 &&
                    actionName === 'delete'
                ) {
                    candidates = allAliasNames;
                }
                break;
            case 'workflow':
                if (argumentIndex === 0) candidates = workflowActions;
                break;
            case 'canvas':
                if (argumentIndex === 0) candidates = canvasActions;
                else if (argumentIndex === 1 && actionName === 'zoom') {
                    candidates = canvasZoomActions;
                } else if (
                    argumentIndex === 1 &&
                    actionName === 'minimap'
                ) {
                    candidates = canvasMinimapActions;
                }
                break;
        }
    }
    const normalizedToken = token.replace(/^["']/, '').toLowerCase();

    return [...new Set(candidates.map(String))]
        .filter((candidate) =>
            candidate.toLowerCase().startsWith(normalizedToken)
        )
        .sort((left, right) => left.localeCompare(right));
};
