import { useState, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';
import {
    useSelection,
    useTemplateOptions,
    useWorkflowActions,
    useWorkflowHistory,
    useWorkflowMetadata,
} from '../../contexts/NodeContext';
import { stepDataMapping } from '../SidePanel/Steps/StepData';
import { varDataMapping } from '../SidePanel/Variables/varData';
import { getNodeValidationErrors } from '../NodeSettingsPanel';
import { findWorkflowVariableReferences } from '../../utils/variableMerge';
import {
    traceWorkflowGraph,
    validateWorkflowGraph,
} from '../../utils/workflowValidation';
import { parseCommandLine } from './commandParser';
import {
    commandExamples,
    commandDefinitions,
    commandHelpSections,
    createCommandRegistry,
    formatCommandHelp,
    getPipelineActionError,
    getPipelineArguments,
    getSubcommandCompletionNames,
} from './commandRegistry';
import { executeParsedCommands } from './commandExecutor';
import {
    countPipeline,
    filterPipeline,
    headPipeline,
    sortPipeline,
    tailPipeline,
    uniquePipeline,
} from './pipelineCommands';
import {
    beginCommandExecution,
    finishCommandExecution,
    setStdoutSuppressed,
    throwIfCommandAborted,
} from './commandRuntime';
import {
    getPropertyPathValue,
    setPropertyPathValue,
} from './propertyPath';
import { getConsoleCompletions } from './completionProvider';
import {
    CANVAS_GRID_SIZE,
    getAliasRecords,
    getAliasValidationError,
    getProtectedPropertyMessage,
    isUpdatablePropertyValue,
    parseFiniteNumberArgument,
    parsePropertyUpdateValue,
    resolveResourceReference,
    resolveUniqueResourceReferences,
    snapCoordinateToGrid,
} from './commandConsistency';

const getResourceActions = (resourceName) =>
    getSubcommandCompletionNames(resourceName);
const nodeActions = getResourceActions('node');
const linkActions = getResourceActions('link');
const templateVariableModes = ['merge', 'unique'];
const workflowActions = getResourceActions('workflow');
const canvasActions = getResourceActions('canvas');
const canvasZoomActions = ['in', 'out'];
const reportUnexpectedArguments = (usage) => {
    console.error('dsdebug-log', `Usage: ${usage}`);
    return { ok: false };
};

const useConsoleController = ({
    splitHeight,
    setSplitHeight,
    getWorkflowProjection,
    generateId,
    generateUniqueName,
    getAvailableTemplates,
    insertTemplate,
    runCanvasAction,
}) => {
    const [logs, setLogs] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [inputVisible, setInputVisible] = useState(true); // Track input visibility
    const [isExpanded, setIsExpanded] = useState(true); // Track container expansion
    const [maxConsoleHeight, setMaxConsoleHeight] = useState(720);
    const activeCommandControllerRef = useRef(null);
    const lastStatusRef = useRef(0);
    const pendingResizeHeightRef = useRef(null);
    const resizeFrameRef = useRef(null);
    const commandInputRef = useRef(null);

    const {
        createDefinedVariable,
        deleteDefinedVariable,
        getData,
        getWorkflowIndex,
        renameDefinedVariable,
        setData,
    } = useWorkflowActions();
    const { startActivity, definedVariables, workflowName } =
        useWorkflowMetadata();
    const { redo, undo } = useWorkflowHistory();
    const { setSelectedNodeIds, setSelectedEdgeId } = useSelection();
    const {
        getVariableMergeMode,
        setIterateVars,
    } = useTemplateOptions();

    const handleCommandSubmit = async (inputValue) => {
        if (!inputValue.trim()) return;

        let parsedCommands;
        try {
            parsedCommands = parseCommandLine(inputValue);
        } catch (error) {
            console.error('dsdebug-log', `Could not parse command: ${error.message}`);
            lastStatusRef.current = 2;
            return;
        }
        if (parsedCommands.length === 0) return;

        if (activeCommandControllerRef.current) {
            console.error(
                'dsdebug-log',
                'A command is already running. Press Ctrl+C to cancel it.'
            );
            lastStatusRef.current = 1;
            return;
        }

        const commandRegistry = createCommandRegistry({
                help: showHelp,
                clear: clearLogs,
                history: showHistory,
                status: handleStatusCommand,
                undo: handleUndoCommand,
                redo: handleRedoCommand,
                filter: filterPipeline,
                count: countPipeline,
                head: headPipeline,
                tail: tailPipeline,
                sort: sortPipeline,
                unique: uniquePipeline,
                node: handleNodeCommand,
                link: handleLinkCommand,
                variable: handleVariableCommand,
                template: handleTemplateCommand,
                alias: handleAliasResourceCommand,
                workflow: handleWorkflowCommand,
                canvas: handleCanvasCommand,
                true: handleTrueCommand,
                false: handleFalseCommand,
            });

        const controller = new AbortController();
        activeCommandControllerRef.current = controller;
        beginCommandExecution(controller.signal);
        let executionStatus = 0;

        try {
            executionStatus = await executeParsedCommands({
                commandRegistry,
                executeCommand: (command, args) => {
                    let commandResult;
                    flushSync(() => {
                        commandResult = command.execute(...args);
                    });
                    return commandResult;
                },
                onError: (message) => console.error('dsdebug-log', message),
                onStatus: (status) => {
                    lastStatusRef.current = status;
                },
                parsedCommands,
                setOutputSuppressed: setStdoutSuppressed,
                throwIfAborted: throwIfCommandAborted,
            });
        } catch (error) {
            if (error.name === 'AbortError') executionStatus = 130;
            else {
                console.error('dsdebug-log', error.message);
                executionStatus = 1;
            }
        } finally {
            lastStatusRef.current = executionStatus;
            finishCommandExecution();
            if (activeCommandControllerRef.current === controller) {
                activeCommandControllerRef.current = null;
            }
        }
    };

    const handleCancelCommand = () => {
        activeCommandControllerRef.current?.abort();
        lastStatusRef.current = 130;
    };

    // Helper function to resolve an alias to the actual itemId
    const resolveAlias = (itemId) => {
        return resolveResourceReference(
            itemId,
            aliasMapRef.current,
            new Set(getWorkflowIndex().cellsById.keys())
        );
    };

    // Function to show help
    const showHelp = (requestedCommand, requestedAction, ...extraArgs) => {
        if (extraArgs.length > 0) {
            return reportUnexpectedArguments('help [command [action]]');
        }
        const definitionsByName = new Map(
            commandDefinitions.map((definition) => [
                definition.name,
                definition,
            ])
        );
        const lines = [];

        if (requestedCommand) {
            const definition = definitionsByName.get(
                requestedCommand.toLowerCase()
            );
            if (!definition) {
                console.error(
                    'dsdebug-log',
                    `No help is available for '${requestedCommand}'.`
                );
                return { ok: false };
            }

            if (requestedAction) {
                const subcommand = definition.subcommands?.find(
                    ({ name }) => name === requestedAction.toLowerCase()
                );
                if (!subcommand) {
                    console.error(
                        'dsdebug-log',
                        `Unknown ${definition.name} action '${requestedAction}'. Use 'help ${definition.name}'.`
                    );
                    return { ok: false };
                }
                lines.push(
                    formatCommandHelp({
                        ...subcommand,
                        name: `${definition.name} ${subcommand.name}`,
                    })
                );
                if (subcommand.pipelineInput) {
                    lines.push(
                        '',
                        `Pipeline input: accepts ${subcommand.pipelineInput}.`
                    );
                } else {
                    lines.push('', 'Pipeline input: not accepted.');
                }
                console.log('dsdebug-log', lines.join('\n'));
                return { ok: true };
            }

            lines.push(
                formatCommandHelp(definition),
                ''
            );
            if (definition.subcommands?.length) {
                const commandWidth = Math.max(
                    ...definition.subcommands.map(({ name, usage }) =>
                        `${definition.name} ${name}${usage ? ` ${usage}` : ''}`.length
                    )
                );
                lines.push('Actions:');
                definition.subcommands.forEach((subcommand) => {
                    const { name, usage, description, pipelineInput } =
                        subcommand;
                    lines.push(
                        `  ${formatCommandHelp(
                            {
                                name: `${definition.name} ${name}`,
                                usage,
                                description: pipelineInput
                                    ? `${description} (accepts pipeline input)`
                                    : description,
                            },
                            commandWidth
                        )}`
                    );
                });
            }
            if (definition.requiresPipelineInput) {
                lines.push('', 'Pipeline input: required.');
            }
            console.log('dsdebug-log', lines.join('\n'));
            return { ok: true };
        }

        commandHelpSections.forEach(({ title, commands }) => {
            const definitions = commands
                .map((name) => definitionsByName.get(name))
                .filter(Boolean);
            const commandWidth = Math.max(
                ...definitions.map(({ name, usage }) =>
                    `${name}${usage ? ` ${usage}` : ''}`.length
                )
            );
            lines.push(`${title}:`);
            definitions.forEach((definition) => {
                lines.push(`  ${formatCommandHelp(definition, commandWidth)}`);
            });
            lines.push('');
        });

        lines.push(
            "Use 'help <command>' to list actions and 'help <command> <action>' for details.",
            '',
            'Syntax:',
            '  command ; command       Run commands in sequence',
            '  command && command      Continue after success',
            '  command || command      Continue after failure',
            '  command | command       Pass structured output forward',
            '  pipeline status         Stages continue; the final stage sets status',
            '  # comment               Ignore unquoted text through line end',
            "  'text' / \"text\"         Literal / backslash-escaped quoted text",
            '  filter operators        = != > >= < <= contains starts-with ends-with exists',
            '',
            'Keyboard:',
            '  Enter / Shift+Enter     Run command / add a line',
            '  Tab                     Complete commands and arguments',
            '  Up/Down, Ctrl+P/N       Move multiline cursor or browse history',
            '  Ctrl+A/E                Move to line start/end',
            '  Ctrl+U/K                Clear to line start/end',
            '  Ctrl+W, Ctrl/Alt+Backspace  Delete the previous word',
            '  Ctrl+C / Ctrl+L         Cancel command / clear console',
            '',
            'Examples:'
        );
        commandExamples.forEach(({ label, command }) => {
            lines.push(`  ${label.padEnd(12)} ${command}`);
        });

        console.log('dsdebug-log', lines.join('\n'));
        return { ok: true };
    };

    const reportUnknownResourceAction = (resource, action) => {
        console.error(
            'dsdebug-log',
            `Unknown ${resource} action '${action}'. Use 'help ${resource}'.`
        );
        return { ok: false };
    };

    // Function to clear all logs
    const clearLogs = (...args) => {
        if (args.length > 0) return reportUnexpectedArguments('clear');
        setLogs([]);
        return { ok: true };
    };

    const showHistory = (action) => {
        if (action?.toLowerCase() === 'clear') {
            setCommandHistory([]);
            console.log('dsdebug-log', 'Command history cleared.');
            return { ok: true, value: [] };
        }
        if (action) {
            console.error('dsdebug-log', 'Usage: history [clear]');
            return { ok: false };
        }
        console.log('dsdebug-log', commandHistory);
        return { ok: true, value: commandHistory };
    };

    const handleStatusCommand = (...args) => {
        if (args.length > 0) return reportUnexpectedArguments('status');
        const status = lastStatusRef.current;
        console.log('dsdebug-log', status);
        return { ok: true, value: status };
    };

    const handleUndoCommand = (...args) => {
        if (args.length > 0) return reportUnexpectedArguments('undo');
        if (!undo()) {
            console.error('dsdebug-log', 'Nothing to undo.');
            return { ok: false };
        }
        console.log('dsdebug-log', 'Workflow change undone.');
        return { ok: true };
    };

    const handleRedoCommand = (...args) => {
        if (args.length > 0) return reportUnexpectedArguments('redo');
        if (!redo()) {
            console.error('dsdebug-log', 'Nothing to redo.');
            return { ok: false };
        }
        console.log('dsdebug-log', 'Workflow change redone.');
        return { ok: true };
    };

    // Initialize an object to store aliases
    const [aliasMap, setAliasMap] = useState({});
    const aliasMapRef = useRef(aliasMap);
    const updateAliasMap = (aliasMapOrUpdater) => {
        const nextAliasMap =
            typeof aliasMapOrUpdater === 'function'
                ? aliasMapOrUpdater(aliasMapRef.current)
                : aliasMapOrUpdater;
        aliasMapRef.current = nextAliasMap;
        setAliasMap(nextAliasMap);
    };
    const getCompletions = (context) =>
        getConsoleCompletions(context, {
            aliases: aliasMapRef.current,
            getAvailableTemplates,
            getWorkflowIndex,
            resolveAlias,
        });
    const handleDeselectCommand = () => {
        setSelectedNodeIds(null);
        setSelectedEdgeId(null);
        console.log('dsdebug-log', 'Canvas selection cleared.');
        return { ok: true };
    };

    const handleValidateCommand = (idOrAlias) => {
        if (idOrAlias === 'graph') {
            const issues = validateWorkflowGraph(getData());
            if (issues.length === 0) {
                console.log('dsdebug-log', 'Graph validation passed.');
                return { ok: true, value: [] };
            }
            const errors = issues.filter(
                ({ severity }) => severity !== 'warning'
            );
            const warnings = issues.filter(
                ({ severity }) => severity === 'warning'
            );
            if (errors.length > 0) {
                console.error(
                    'dsdebug-log',
                    `${errors.length} graph validation error${
                        errors.length === 1 ? '' : 's'
                    }:`,
                    errors
                );
            }
            if (warnings.length > 0) {
                console.warn(
                    'dsdebug-log',
                    `${warnings.length} graph validation warning${
                        warnings.length === 1 ? '' : 's'
                    }:`,
                    warnings
                );
            }
            return { ok: errors.length === 0, value: issues };
        }

        const nodes = getWorkflowProjection().externalNodes;
        const targetId = idOrAlias ? resolveAlias(idOrAlias) : null;
        const nodesToValidate = targetId
            ? nodes.filter((node) => node.id === targetId)
            : nodes;

        if (targetId && nodesToValidate.length === 0) {
            console.error('dsdebug-log', `Node '${targetId}' was not found.`);
            return { ok: false };
        }

        const invalidNodes = nodesToValidate.flatMap((node) => {
            const missingFields = getNodeValidationErrors(node);
            return missingFields.length === 0
                ? []
                : [
                      {
                          id: node.id,
                          name: node.data?.name?.value ?? node.data?.name,
                          activityName: node.data?.activityName,
                          missingFields,
                      },
                  ];
        });

        if (invalidNodes.length === 0) {
            console.log('dsdebug-log', 'Validation passed.');
            return { ok: true, value: [] };
        }

        console.error(
            'dsdebug-log',
            `${invalidNodes.length} node${invalidNodes.length === 1 ? '' : 's'} have missing required fields:`,
            invalidNodes
        );
        return { ok: false, value: invalidNodes };
    };

    const handleTraceCommand = (idOrAlias, requestedDirection = 'both') => {
        const direction = requestedDirection.toLowerCase();
        if (
            !idOrAlias ||
            !['upstream', 'downstream', 'both'].includes(direction)
        ) {
            console.error(
                'dsdebug-log',
                'Usage: node trace <id|alias> [upstream|downstream|both]'
            );
            return { ok: false };
        }

        const nodeId = resolveAlias(idOrAlias);
        const trace = traceWorkflowGraph(getData(), nodeId, direction);
        if (!trace) {
            console.error('dsdebug-log', `Node '${nodeId}' was not found.`);
            return { ok: false };
        }

        console.log(
            'dsdebug-log',
            `${direction[0].toUpperCase()}${direction.slice(1)} trace for '${
                trace.root.name || trace.root.id
            }':`,
            trace
        );
        return { ok: true, value: trace };
    };

    const handleVariablesCommand = () => {
        const variables =
            getWorkflowIndex().startActivity?.definedVariables?.value ?? [];
        console.log('dsdebug-log', variables);
        return { ok: true, value: variables };
    };

    const handleVariableCommand = (action, ...args) => {
        if (!action) return showHelp('variable');
        action = action.toLowerCase();
        if (action === 'list') {
            if (args.length > 0) {
                return reportUnexpectedArguments('variable list');
            }
            return handleVariablesCommand();
        }

        if (action === 'references') {
            if (args.length !== 1) {
                return reportUnexpectedArguments(
                    'variable references <name>'
                );
            }
            const [name] = args;
            const variableExists =
                getWorkflowIndex().startActivity?.definedVariables?.value?.some(
                    (variable) => variable.value.name === name
                );
            if (!variableExists) {
                console.error(
                    'dsdebug-log',
                    `Variable '${name}' was not found.`
                );
                return { ok: false };
            }

            const references = findWorkflowVariableReferences(
                getData(),
                name
            );
            if (references.length === 0) {
                console.log(
                    'dsdebug-log',
                    `Variable '${name}' has no workflow references.`
                );
            } else {
                console.log(
                    'dsdebug-log',
                    `${references.length} reference${
                        references.length === 1 ? '' : 's'
                    } to '${name}':`,
                    references
                );
            }
            return { ok: true, value: references };
        }

        if (action === 'create') {
            if (![1, 2].includes(args.length)) {
                return reportUnexpectedArguments(
                    'variable create <name> [type]'
                );
            }
            const [name, requestedType = 'Text'] = args;
            const variableType = Object.keys(varDataMapping).find(
                (type) => type.toLowerCase() === requestedType.toLowerCase()
            );
            const variableTemplate = varDataMapping[variableType]?.value;
            if (!name || !variableTemplate) {
                console.error(
                    'dsdebug-log',
                    `Usage: variable create <name> [${Object.keys(
                        varDataMapping
                    )
                        .filter((type) => varDataMapping[type].value)
                        .join('|')}]. Type defaults to Text.`
                );
                return { ok: false };
            }

            const newVariable = {
                type: variableTemplate.type,
                value: {
                    name,
                    displayName: name,
                    displayType: variableType,
                    ...structuredClone(variableTemplate.value),
                },
            };
            const result = createDefinedVariable(newVariable);
            if (!result.ok) {
                console.error('dsdebug-log', result.error);
                return { ok: false };
            }
            console.log('dsdebug-log', '- Variable Created:', newVariable);
            return { ok: true, value: newVariable };
        }

        if (action === 'rename') {
            if (args.length !== 2) {
                return reportUnexpectedArguments(
                    'variable rename <oldName> <newName>'
                );
            }
            const [oldName, newName] = args;
            const result = renameDefinedVariable(oldName, newName);
            if (!result.ok) {
                console.error('dsdebug-log', result.error);
                return { ok: false };
            }
            console.log(
                'dsdebug-log',
                `Variable '${oldName}' renamed to '${newName}'.`
            );
            return { ok: true, value: newName };
        }

        if (action === 'delete') {
            if (args.length !== 1) {
                return reportUnexpectedArguments('variable delete <name>');
            }
            const [name] = args;
            const result = deleteDefinedVariable(name);
            if (!result.ok) {
                console.error(
                    'dsdebug-log',
                    result.error,
                    result.references ?? []
                );
                return { ok: false, value: result };
            }
            console.log('dsdebug-log', `Variable '${name}' deleted.`);
            return { ok: true, value: name };
        }

        return reportUnknownResourceAction('variable', action);
    };

    const handleDuplicateCommand = (idOrAlias, x, y) => {
        const itemId = resolveAlias(idOrAlias);
        const sourceItem = getWorkflowIndex().cellsById.get(itemId);
        if (!sourceItem || sourceItem.type === 'springcm.Link') {
            console.error(
                'dsdebug-log',
                `Node '${itemId ?? ''}' was not found.`
            );
            return { ok: false };
        }
        if (sourceItem.activityName === 'StartActivity') {
            console.error('dsdebug-log', 'The Start activity cannot be duplicated.');
            return { ok: false };
        }

        const hasExplicitPosition =
            typeof x !== 'undefined' || typeof y !== 'undefined';
        const parsedX = parseFiniteNumberArgument(x);
        const parsedY = parseFiniteNumberArgument(y);
        if (
            hasExplicitPosition &&
            (!parsedX.ok || !parsedY.ok)
        ) {
            console.error(
                'dsdebug-log',
                'Usage: node duplicate <id|alias> [x y]'
            );
            return { ok: false };
        }

        const sourcePosition = sourceItem.position ?? { x: 0, y: 0 };
        const duplicate = structuredClone(sourceItem);
        duplicate.id = generateId();
        duplicate.position = {
            x: snapCoordinateToGrid(
                hasExplicitPosition
                    ? parsedX.value
                    : sourcePosition.x + CANVAS_GRID_SIZE
            ),
            y: snapCoordinateToGrid(
                hasExplicitPosition
                    ? parsedY.value
                    : sourcePosition.y + CANVAS_GRID_SIZE
            ),
        };

        if (duplicate.name?.value) {
            const existingNames = new Set(
                getData().cells.map((cell) => cell.name?.value).filter(Boolean)
            );
            duplicate.name.value = generateUniqueName(
                duplicate.name.value,
                existingNames
            );
        }

        setData((currentData) => ({
            ...currentData,
            cells: [...currentData.cells, duplicate],
        }));
        console.log('dsdebug-log', '- Node Duplicated:', duplicate);
        return { ok: true, value: duplicate };
    };

    const handleTemplateCommand = (action, ...args) => {
        if (!action) return showHelp('template');
        action = action.toLowerCase();
        if (action === 'list') {
            if (args.length > 0) {
                return reportUnexpectedArguments('template list');
            }
            const templates = getAvailableTemplates();
            console.log('dsdebug-log', templates);
            return { ok: true, value: templates };
        }

        if (action === 'variable-mode') {
            if (args.length > 1) {
                return reportUnexpectedArguments(
                    'template variable-mode [merge|unique]'
                );
            }
            const [requestedMode] = args;
            if (typeof requestedMode === 'undefined') {
                const currentMode = getVariableMergeMode();
                console.log('dsdebug-log', currentMode);
                return { ok: true, value: currentMode };
            }
            const mode = requestedMode.toLowerCase();
            if (!templateVariableModes.includes(mode)) {
                console.error(
                    'dsdebug-log',
                    'Usage: template variable-mode [merge|unique]'
                );
                return { ok: false };
            }
            setIterateVars(mode === 'unique');
            console.log(
                'dsdebug-log',
                `Template variable mode set to '${mode}'.`
            );
            return { ok: true, value: mode };
        }

        if (action === 'apply') {
            if (![1, 3].includes(args.length)) {
                return reportUnexpectedArguments(
                    'template apply <name> [x y]'
                );
            }
            const [name, x = '0', y = '0'] = args;
            const parsedX = parseFiniteNumberArgument(x);
            const parsedY = parseFiniteNumberArgument(y);
            if (!name || !parsedX.ok || !parsedY.ok) {
                console.error(
                    'dsdebug-log',
                    'Usage: template apply <name> [x y]'
                );
                return { ok: false };
            }
            const position = { x: parsedX.value, y: parsedY.value };

            const result = insertTemplate(name, position);
            if (!result.ok) console.error('dsdebug-log', result.error);
            else console.log('dsdebug-log', '- Template Applied:', result.value);
            return result;
        }

        return reportUnknownResourceAction('template', action);
    };

    const handleCanvasCommand = (action, ...args) => {
        if (!action) return showHelp('canvas');
        action = action.toLowerCase();
        if (!canvasActions.includes(action)) {
            return reportUnknownResourceAction('canvas', action);
        }
        const expectedArgumentCount = ['zoom', 'minimap'].includes(action)
            ? 1
            : 0;
        if (args.length !== expectedArgumentCount) {
            const usages = {
                deselect: 'canvas deselect',
                fit: 'canvas fit',
                zoom: 'canvas zoom <in|out|0.1-2>',
                minimap: 'canvas minimap <on|off|toggle>',
                reset: 'canvas reset',
            };
            return reportUnexpectedArguments(usages[action]);
        }
        if (action === 'deselect') return handleDeselectCommand();
        const [rawValue] = args;
        let value = rawValue?.toLowerCase();
        if (action === 'zoom' && !canvasZoomActions.includes(value)) {
            const parsedZoom = parseFiniteNumberArgument(rawValue);
            if (!parsedZoom.ok) {
                return reportUnexpectedArguments(
                    'canvas zoom <in|out|0.1-2>'
                );
            }
            value = String(parsedZoom.value);
        }
        const result = runCanvasAction(action, value);
        if (!result.ok) console.error('dsdebug-log', result.error);
        else if (result.message) console.log('dsdebug-log', result.message);
        return result;
    };

    const handleTrueCommand = (...args) =>
        args.length > 0
            ? reportUnexpectedArguments('true')
            : { ok: true };
    const handleFalseCommand = (...args) =>
        args.length > 0
            ? reportUnexpectedArguments('false')
            : { ok: false };

    const handleAliasCommand = (itemId, alias) => {
        if (!itemId || !alias) {
            console.error(
                'dsdebug-log',
                'Usage: alias create <itemId> <name>'
            );
            return { ok: false };
        }

        // Find the item based on the provided itemId
        const itemToUpdate = getWorkflowIndex().cellsById.get(itemId);

        if (!itemToUpdate) {
            console.error('dsdebug-log', `Item with id '${itemId}' not found.`);
            return { ok: false };
        }

        const aliasError = getAliasValidationError({
            alias,
            aliases: aliasMapRef.current,
            itemIds: new Set(getWorkflowIndex().cellsById.keys()),
        });
        if (aliasError) {
            console.error('dsdebug-log', aliasError);
            return { ok: false };
        }

        // Update the alias map with the provided alias for the itemId
        updateAliasMap((prevAliasMap) => ({
            ...prevAliasMap,
            [alias]: itemId,
        }));

        console.log(
            'dsdebug-log',
            `Alias '${alias}' created for item with id '${itemId}'.`
        );
        return { ok: true, value: itemToUpdate };
    };

    const handleDeleteAliasCommand = (aliasToDelete) => {
        if (!aliasToDelete) {
            console.error(
                'dsdebug-log',
                'Usage: alias delete <name>'
            );
            return { ok: false };
        }

        // Check if the alias exists in the alias map
        if (!Object.hasOwn(aliasMapRef.current, aliasToDelete)) {
            console.error('dsdebug-log', `Alias '${aliasToDelete}' not found.`);
            return { ok: false };
        }

        // Remove the alias from the alias map
        const updatedAliasMap = { ...aliasMapRef.current };
        delete updatedAliasMap[aliasToDelete];

        updateAliasMap(updatedAliasMap);

        console.log('dsdebug-log', `Alias '${aliasToDelete}' removed.`);
        return { ok: true, value: aliasToDelete };
    };

    const handleStepsCommand = () => {
        const stepKeys = Object.keys(stepDataMapping);

        console.log('dsdebug-log', 'Available node activity types:');
        console.log('dsdebug-log', stepKeys);
        return { ok: true, value: stepKeys };
    };

    // Function to handle the "start" command
    const handleStartCommand = () => {
        const startActivityNode = getWorkflowIndex().startActivity;

        // If the "StartActivity" doesn't exist, create it directly in this function
        if (!startActivityNode) {
            const newStartActivity = {
                size: { width: 100, height: 100 },
                content: '',
                type: 'springcm.Circle',
                angle: 0,
                activityName: 'StartActivity',
                group: 'hidden',
                icon: { path: 'start.svg#Dark', color: 'white' },
                z: 2000001,
                id: generateId(),
                name: { type: 'String', value: 'Start' },
                definedVariables: {
                    type: 'Variable',
                    value: definedVariables ?? [],
                },
                workflowName:
                    workflowName ?? {
                        type: 'String',
                        value: 'New Workflow',
                    },
                sendNotification: { type: 'Bool', value: false },
                trackActivity: { type: 'Bool', value: true },
                attrs: {
                    '.steptext': {
                        'ref-y': '.66',
                        'y-alignment': 'middle',
                        text: 'Start',
                        lineHeight: '1.4em',
                    },
                    use: {
                        'xlink:href':
                            '/atlassupport/scripts/jointjs/svg/start.svg#Dark',
                    },
                    svg: { color: 'white' },
                    circle: { fill: '#A0CC23' },
                },
            };
            // Update the state of the nodes array to include the newly created node
            setData((prevData) => ({
                ...prevData,
                cells: [...prevData.cells, newStartActivity],
            }));
            console.log('dsdebug-log', '- Start Activity Recreated:', newStartActivity);
            return { ok: true, value: newStartActivity };
        }
        console.log('dsdebug-log', 'Start activity already exists.');
        return { ok: true, value: startActivityNode };
    };

    const handleConnectCommand = (sourceIdOrAlias, targetIdOrAlias) => {
        const sourceId = resolveAlias(sourceIdOrAlias);
        const targetId = resolveAlias(targetIdOrAlias);

        const workflowIndex = getWorkflowIndex();
        const sourceNode = workflowIndex.cellsById.get(sourceId);
        const targetNode = workflowIndex.cellsById.get(targetId);

        if (!sourceNode) {
            console.error('dsdebug-log', `Source node '${sourceId}' was not found.`);
            return { ok: false };
        }
        if (!targetNode) {
            console.error('dsdebug-log', `Target node '${targetId}' was not found.`);
            return { ok: false };
        }
        if (sourceNode.type === 'springcm.Link') {
            console.error('dsdebug-log', `'${sourceIdOrAlias}' is a link, not a node.`);
            return { ok: false };
        }
        if (targetNode.type === 'springcm.Link') {
            console.error('dsdebug-log', `'${targetIdOrAlias}' is a link, not a node.`);
            return { ok: false };
        }
        if (sourceNode.activityName === 'EndActivity') {
            console.error('dsdebug-log', 'An End activity cannot be a link source.');
            return { ok: false };
        }
        if (targetNode.activityName === 'StartActivity') {
            console.error('dsdebug-log', 'A Start activity cannot be a link target.');
            return { ok: false };
        }

        // Check if a link already exists between the source and target nodes
        const existingEdge = workflowIndex.edgeCells.find(
            (cell) =>
                cell.type === 'springcm.Link' &&
                cell.source?.id === sourceId &&
                cell.target?.id === targetId
        );

        if (existingEdge) {
            console.error(
                'dsdebug-log',
                `A link already exists between '${sourceId}' and '${targetId}'.`
            );
            return { ok: false };
        }

        const linkId = generateId();

        // Create a new edge to connect the source and target nodes
        const newEdge = {
            type: 'springcm.Link',
            source: { id: sourceId, port: 'e' },
            target: { id: targetId, port: 'w' },
            router: {
                name: 'manhattan',
                args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
            },
            id: linkId,
            z: 1000004,
            name: {
                type: 'String',
                value: `link-${linkId}`,
            },
            vertices: [],
            description: { type: 'String', value: '' },
            output: { type: 'String', value: '' },
            attrs: {},
        };

        setData((prevData) => ({
            ...prevData,
            cells: [...prevData.cells, newEdge],
        }));

        console.log('dsdebug-log', '- Link Added:', {
            source: sourceId,
            sourcePort: 'e',
            target: targetId,
            targetPort: 'w',
        });
        return { ok: true, value: newEdge };
    };

    // Function to handle the select command
    const handleSelectCommand = (resourceType, ...ids) => {
        const resourceLabel = resourceType === 'link' ? 'Link' : 'Node';
        const itemIds = resolveUniqueResourceReferences(ids, resolveAlias);
        const workflowIndex = getWorkflowIndex();
        const selectedItems = itemIds.map((id) =>
            workflowIndex.cellsById.get(id)
        );
        const missingIndex = selectedItems.findIndex((item) => !item);

        if (ids.length === 0 || missingIndex !== -1) {
            const missingId = itemIds[missingIndex] ?? '';
            console.error(
                'dsdebug-log',
                `${resourceLabel} '${missingId}' was not found.`
            );
            return { ok: false };
        }

        const selectedEdges = selectedItems.filter(
            (item) => item.type === 'springcm.Link'
        );
        if (selectedEdges.length > 0 && selectedItems.length > 1) {
            console.error(
                'dsdebug-log',
                'Select accepts multiple nodes or one link, but not a mixed selection.'
            );
            return { ok: false };
        }

        if (selectedEdges.length === 1) {
            setSelectedNodeIds(null);
            setSelectedEdgeId(selectedEdges[0].id);
        } else {
            setSelectedEdgeId(null);
            setSelectedNodeIds(itemIds);
        }

        console.log(
            'dsdebug-log',
            `${resourceLabel}${itemIds.length === 1 ? '' : 's'} selected: ${itemIds.join(', ')}.`
        );
        return { ok: true, value: selectedItems };
    };

    const handleCreateCommand = (...args) => {
        if (![1, 3].includes(args.length)) {
            console.error(
                'dsdebug-log',
                'Usage: node create <activityName> [x y]'
            );
            return { ok: false };
        }

        const [activityName, rawX = '0', rawY = '0'] = args;
        const canonicalActivityName = Object.keys(stepDataMapping).find(
            (name) => name.toLowerCase() === activityName.toLowerCase()
        );
        const stepDefinition = stepDataMapping[canonicalActivityName]?.type;
        if (!stepDefinition) {
            console.error(
                'dsdebug-log',
                `Unknown activity type '${activityName}'. Use 'node types' to list activity types.`
            );
            return { ok: false };
        }

        const parsedX = parseFiniteNumberArgument(rawX);
        const parsedY = parseFiniteNumberArgument(rawY);
        if (!parsedX.ok || !parsedY.ok) {
            console.error(
                'dsdebug-log',
                'Usage: node create <activityName> [x y]'
            );
            return { ok: false };
        }
        const x = parsedX.value;
        const y = parsedY.value;

        const nodeId = generateId();
        const existingNames = new Set(
            getWorkflowProjection().externalNodes
                .map((node) => node.data.name?.value)
                .filter(Boolean)
        );
        const newNode = {
            ...stepDefinition,
            id: nodeId,
            size: { width: 100, height: 100 },
            position: {
                x: snapCoordinateToGrid(x),
                y: snapCoordinateToGrid(y),
            },
            name: {
                type: 'String',
                value: generateUniqueName(
                    stepDefinition.name?.value ?? canonicalActivityName,
                    existingNames
                ),
            },
        };

        setData((currentData) => ({
            ...currentData,
            cells: [...currentData.cells, newNode],
        }));
        console.log('dsdebug-log', '- Node Created:', newNode);
        return {
            ok: true,
            value: newNode,
        };
    };

    const handleDeleteCommand = (resourceType, ...itemReferences) => {
        const resourceLabel = resourceType === 'link' ? 'Link' : 'Node';
        if (itemReferences.length === 0) {
            return reportUnexpectedArguments(
                `${resourceType} delete <id|alias> [...]`
            );
        }

        const currentData = getData();
        const uniqueItemIds = resolveUniqueResourceReferences(
            itemReferences,
            resolveAlias
        );
        const itemsToDelete = uniqueItemIds.map((itemId) =>
            getWorkflowIndex().cellsById.get(itemId)
        );
        const missingIndex = itemsToDelete.findIndex((item) => !item);

        if (missingIndex !== -1) {
            const missingId = uniqueItemIds[missingIndex];
            const missingReference = itemReferences.find(
                (reference) => resolveAlias(reference) === missingId
            );
            console.error(
                'dsdebug-log',
                `${resourceLabel} '${missingReference}' was not found.`
            );
            return { ok: false };
        }

        const deletedIds = new Set(itemsToDelete.map(({ id }) => id));
        const connectedLinks = [];
        const filteredCells = currentData.cells.filter((cell) => {
            if (deletedIds.has(cell.id)) return false;
            if (
                cell.type === 'springcm.Link' &&
                (deletedIds.has(cell.source?.id) ||
                    deletedIds.has(cell.target?.id))
            ) {
                connectedLinks.push(cell);
                return false;
            }
            return true;
        });

        setData((currentData) => ({
            ...currentData,
            cells: filteredCells,
        }));

        setSelectedNodeIds((currentSelection) => {
            const remainingSelection = (currentSelection ?? []).filter(
                (id) => !deletedIds.has(id)
            );
            return remainingSelection.length > 0
                ? remainingSelection
                : null;
        });
        const deletedLinkIds = new Set(
            connectedLinks.map(({ id }) => id)
        );
        itemsToDelete.forEach((item) => {
            if (item.type === 'springcm.Link') deletedLinkIds.add(item.id);
        });
        setSelectedEdgeId((currentSelection) =>
            deletedLinkIds.has(currentSelection) ? null : currentSelection
        );

        console.log(
            'dsdebug-log',
            `- ${resourceLabel}${itemsToDelete.length === 1 ? '' : 's'} Deleted:`,
            itemsToDelete
        );
        if (connectedLinks.length > 0) {
            console.log(
                'dsdebug-log',
                `- Link${connectedLinks.length === 1 ? '' : 's'} Deleted:`,
                connectedLinks
            );
        }
        return {
            ok: true,
            value: [...itemsToDelete, ...connectedLinks],
        };
    };

    const handleListCommand = (itemType, ...propertyNames) => {
        try {
            const workflowIndex = getWorkflowIndex();
            const isNodeList = itemType === 'nodes';
            const isLinkList = itemType === 'edges' || itemType === 'links';
            if (!isNodeList && !isLinkList) {
                console.error(
                    'dsdebug-log',
                    "Usage: 'node list [property ...]' or 'link list [property ...]'"
                );
                return { ok: false };
            }

            const items = isNodeList
                ? workflowIndex.nodeCells
                : workflowIndex.edgeCells;
            const output =
                propertyNames.length === 0
                    ? items
                    : items.map((item) =>
                          propertyNames.reduce((properties, propertyName) => {
                              const propertyValue = getPropertyPathValue(
                                  item,
                                  propertyName
                              );
                              if (typeof propertyValue !== 'undefined') {
                                  properties[propertyName] = propertyValue;
                              }
                              return properties;
                          }, {})
                      );
            const resourceName = isNodeList ? 'nodes' : 'links';
            console.log(
                'dsdebug-log',
                propertyNames.length === 0
                    ? `All workflow ${resourceName}:`
                    : `${resourceName[0].toUpperCase()}${resourceName.slice(
                          1
                      )} with properties '${propertyNames.join(', ')}':`
            );
            console.log('dsdebug-log', output);
            return { ok: true, value: output };
        } catch (error) {
            console.error('dsdebug-log', 'An error occurred:', error.message);
            return { ok: false };
        }
    };

    const handleUpdateCommand = (
        resourceType,
        itemId,
        propertyToUpdate,
        newValue
    ) => {
        const resourceLabel = resourceType === 'link' ? 'Link' : 'Node';
        const resolvedItemId = resolveAlias(itemId);

        if (!propertyToUpdate || typeof newValue === 'undefined') {
            console.error(
                'dsdebug-log',
                `Usage: ${resourceType} update <id|alias> <property> <value>`
            );
            return { ok: false };
        }

        // Find the item based on the provided ID
        const currentItem = getWorkflowIndex().cellsById.get(resolvedItemId);

        if (!currentItem) {
            console.error(
                'dsdebug-log',
                `${resourceLabel} '${resolvedItemId}' was not found.`
            );
            return { ok: false };
        }
        const protectedPropertyMessage = getProtectedPropertyMessage(
            resourceType,
            propertyToUpdate
        );
        if (protectedPropertyMessage) {
            console.error('dsdebug-log', protectedPropertyMessage);
            return { ok: false };
        }
        const valueResult = parsePropertyUpdateValue(
            getPropertyPathValue(currentItem, propertyToUpdate),
            newValue
        );
        if (!valueResult.ok) {
            console.error(
                'dsdebug-log',
                `${valueResult.error} ${resourceLabel} '${resolvedItemId}' was not changed.`
            );
            return { ok: false };
        }
        const itemToUpdate = structuredClone(currentItem);
        const updateResult = setPropertyPathValue(
            itemToUpdate,
            propertyToUpdate,
            valueResult.value
        );
        if (!updateResult.ok) {
            console.error(
                'dsdebug-log',
                `${updateResult.error} ${resourceLabel} '${resolvedItemId}' was not changed.`
            );
            return { ok: false };
        }

        setData((currentData) => ({
            ...currentData,
            cells: currentData.cells.map((item) =>
                item.id === resolvedItemId ? itemToUpdate : item
            ),
        }));

        console.log(
            'dsdebug-log',
            `${resourceLabel} '${resolvedItemId}' updated.`
        );
        return { ok: true, value: itemToUpdate };
    };

    const handleMoveCommand = (id, x, y) => {
        const resolvedItemId = resolveAlias(id);

        // Find the node based on the provided id
        const nodeToMove = getWorkflowIndex().cellsById.get(resolvedItemId);

        if (!nodeToMove) {
            if (resolvedItemId) {
                console.error(
                    'dsdebug-log',
                    `Node with id '${resolvedItemId}' not found.`
                );
                return { ok: false };
            } else {
                console.error(
                    'dsdebug-log',
                    'Usage: node move <id|alias> <x> <y>'
                );
                return { ok: false };
            }
        }

        // Update the position of the node based on the provided coordinates
        const parsedX = parseFiniteNumberArgument(x);
        const parsedY = parseFiniteNumberArgument(y);
        if (parsedX.ok && parsedY.ok) {
            const newPosition = {
                x: snapCoordinateToGrid(parsedX.value),
                y: snapCoordinateToGrid(parsedY.value),
            };
            const updatedNode = { ...nodeToMove, position: newPosition };
            setData((currentData) => ({
                ...currentData,
                cells: currentData.cells.map((cell) =>
                    cell.id === resolvedItemId ? updatedNode : cell
                ),
            }));
            console.log(
                'dsdebug-log',
                `Node with id '${resolvedItemId}' moved to (${newPosition.x}, ${newPosition.y}).`
            );
            return { ok: true, value: updatedNode };
        } else {
            console.error(
                'dsdebug-log',
                'Invalid coordinates. Usage: node move <id|alias> <x> <y>'
            );
            return { ok: false };
        }
    };

    const assertResourceType = (identifiers, expectedType) => {
        const workflowIndex = getWorkflowIndex();
        for (const identifier of identifiers) {
            if (typeof identifier !== 'string') continue;
            const resolvedIdentifier = resolveAlias(identifier);
            const item = workflowIndex.cellsById.get(resolvedIdentifier);
            if (!item) continue;

            const actualType =
                item.type === 'springcm.Link' ? 'link' : 'node';
            if (actualType !== expectedType) {
                console.error(
                    'dsdebug-log',
                    `'${identifier}' is a ${actualType}, not a ${expectedType}.`
                );
                return false;
            }
        }
        return true;
    };

    const handleNodeCommand = (pipelineInput, action, ...args) => {
        const pipelineActionError = getPipelineActionError(
            'node',
            action?.toLowerCase(),
            pipelineInput
        );
        if (pipelineActionError) {
            console.error('dsdebug-log', pipelineActionError);
            return { ok: false };
        }
        if (!action) return showHelp('node');
        action = action.toLowerCase();
        if (!nodeActions.includes(action)) {
            return reportUnknownResourceAction('node', action);
        }
        const pipelineArgs = getPipelineArguments(pipelineInput);
        const commandArgs = [...pipelineArgs, ...args];
        const validArgumentCount =
            action === 'types'
                ? commandArgs.length === 0
                : action === 'create'
                  ? [1, 3].includes(commandArgs.length)
                  : action === 'duplicate'
                    ? [1, 3].includes(commandArgs.length)
                    : action === 'update' || action === 'move'
                      ? commandArgs.length === 3
                      : action === 'validate'
                        ? commandArgs.length <= 1
                        : action === 'trace'
                          ? [1, 2].includes(commandArgs.length)
                          : ['delete', 'select'].includes(action)
                            ? commandArgs.length >= 1
                            : true;
        if (!validArgumentCount) {
            const usage = {
                types: 'node types',
                create: 'node create <activityName> [x y]',
                duplicate: 'node duplicate <id|alias> [x y]',
                delete: 'node delete <id|alias> [...]',
                update: 'node update <id|alias> <property> <value>',
                move: 'node move <id|alias> <x> <y>',
                select: 'node select <id|alias> [...]',
                validate: 'node validate [id|alias]',
                trace: 'node trace <id|alias> [upstream|downstream|both]',
            };
            return reportUnexpectedArguments(usage[action]);
        }
        const identifiersToCheck = ['delete', 'select'].includes(action)
            ? commandArgs
            : ['duplicate', 'update', 'move', 'validate', 'trace'].includes(
                    action
                )
              ? commandArgs.slice(0, 1)
              : [];
        if (!assertResourceType(identifiersToCheck, 'node')) {
            return { ok: false };
        }
        switch (action) {
            case 'types':
                return handleStepsCommand();
            case 'list':
                return handleListCommand('nodes', ...args);
            case 'create':
                return handleCreateCommand(...commandArgs);
            case 'duplicate':
                return handleDuplicateCommand(...commandArgs);
            case 'delete':
                return handleDeleteCommand('node', ...commandArgs);
            case 'update':
                return handleUpdateCommand('node', ...commandArgs);
            case 'move':
                return handleMoveCommand(...commandArgs);
            case 'select':
                return handleSelectCommand('node', ...commandArgs);
            case 'validate':
                return handleValidateCommand(...commandArgs);
            case 'trace':
                return handleTraceCommand(...commandArgs);
            default:
                return reportUnknownResourceAction('node', action);
        }
    };

    const handleLinkCommand = (pipelineInput, action, ...args) => {
        const pipelineActionError = getPipelineActionError(
            'link',
            action?.toLowerCase(),
            pipelineInput
        );
        if (pipelineActionError) {
            console.error('dsdebug-log', pipelineActionError);
            return { ok: false };
        }
        if (!action) return showHelp('link');
        action = action.toLowerCase();
        if (!linkActions.includes(action)) {
            return reportUnknownResourceAction('link', action);
        }
        const pipelineArgs = getPipelineArguments(pipelineInput);
        const commandArgs = [...pipelineArgs, ...args];
        const validArgumentCount =
            action === 'create'
                ? commandArgs.length === 2
                : action === 'update'
                  ? commandArgs.length === 3
                  : action === 'select'
                    ? commandArgs.length === 1
                    : action === 'delete'
                      ? commandArgs.length >= 1
                      : true;
        if (!validArgumentCount) {
            const usage = {
                create: 'link create <sourceId|alias> <targetId|alias>',
                delete: 'link delete <id|alias> [...]',
                update: 'link update <id|alias> <property> <value>',
                select: 'link select <id|alias>',
            };
            return reportUnexpectedArguments(usage[action]);
        }
        const identifiersToCheck = ['delete', 'select'].includes(action)
            ? commandArgs
            : action === 'update'
              ? commandArgs.slice(0, 1)
              : [];
        if (!assertResourceType(identifiersToCheck, 'link')) {
            return { ok: false };
        }
        switch (action) {
            case 'list':
                return handleListCommand('edges', ...args);
            case 'create':
                return handleConnectCommand(...commandArgs);
            case 'delete':
                return handleDeleteCommand('link', ...commandArgs);
            case 'update':
                return handleUpdateCommand('link', ...commandArgs);
            case 'select':
                return handleSelectCommand('link', ...commandArgs);
            default:
                return reportUnknownResourceAction('link', action);
        }
    };

    const handleAliasResourceCommand = (pipelineInput, action, ...args) => {
        const pipelineActionError = getPipelineActionError(
            'alias',
            action?.toLowerCase(),
            pipelineInput
        );
        if (pipelineActionError) {
            console.error('dsdebug-log', pipelineActionError);
            return { ok: false };
        }
        if (!action) return showHelp('alias');
        action = action.toLowerCase();
        const pipelineArgs = getPipelineArguments(pipelineInput);
        if (action === 'list') {
            if (args.length > 0) {
                return reportUnexpectedArguments('alias list');
            }
            const aliases = getAliasRecords(
                aliasMapRef.current,
                new Set(getWorkflowIndex().cellsById.keys())
            );
            console.log('dsdebug-log', aliases);
            return { ok: true, value: aliases };
        }
        if (action === 'create') {
            const commandArgs = [...pipelineArgs, ...args];
            if (commandArgs.length !== 2) {
                console.error(
                    'dsdebug-log',
                    'Usage: alias create <itemId> <name>'
                );
                return { ok: false };
            }
            return handleAliasCommand(...commandArgs);
        }
        if (action === 'delete') {
            if (args.length !== 1) {
                return reportUnexpectedArguments('alias delete <name>');
            }
            return handleDeleteAliasCommand(...args);
        }
        return reportUnknownResourceAction('alias', action);
    };

    const handleWorkflowCommand = (action, ...args) => {
        if (!action) return showHelp('workflow');
        action = action.toLowerCase();
        if (!workflowActions.includes(action)) {
            return reportUnknownResourceAction('workflow', action);
        }
        if (args.length > 0) {
            const usage =
                action === 'repair-start'
                    ? 'workflow repair-start'
                    : action === 'validate'
                      ? 'workflow validate'
                      : 'workflow <repair-start|validate>';
            return reportUnexpectedArguments(usage);
        }
        if (action === 'repair-start') return handleStartCommand();
        if (action === 'validate') return handleValidateCommand('graph');
        return { ok: false };
    };

    const logsEndRef = useRef(null);

    const scrollToBottom = () => {
        logsEndRef.current?.scrollIntoView({
            // behavior: 'smooth',
            block: 'end',
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [logs]);

    useEffect(() => {
        const updateMaximumHeight = () => {
            const nextMaximumHeight = Math.max(24, window.innerHeight - 48);
            setMaxConsoleHeight(nextMaximumHeight);
            setSplitHeight((currentHeight) =>
                Math.min(currentHeight, nextMaximumHeight)
            );
        };
        updateMaximumHeight();
        window.addEventListener('resize', updateMaximumHeight);
        return () => {
            window.removeEventListener('resize', updateMaximumHeight);
            if (resizeFrameRef.current !== null) {
                cancelAnimationFrame(resizeFrameRef.current);
            }
        };
    }, [setSplitHeight]);

    const focusCommandInput = () => {
        const input = commandInputRef.current;
        const inputRegion = input?.closest('[data-console-input-region]');
        if (
            !input ||
            !inputRegion ||
            window.getComputedStyle(inputRegion).visibility === 'hidden'
        ) {
            return;
        }
        input.focus({ preventScroll: true });
    };

    const scheduleCommandInputFocus = () => {
        requestAnimationFrame(focusCommandInput);
    };

    // Function to toggle the height of the resizable container
    const toggleContainerHeight = () => {
        const nextExpanded = !isExpanded;
        setIsExpanded(nextExpanded);
        setSplitHeight(nextExpanded ? Math.min(300, maxConsoleHeight) : 24);
        setInputVisible(nextExpanded);
        if (nextExpanded) scheduleCommandInputFocus();
    };

    // Keep the console controls in sync with the resized panel height.
    const handleResize = (_event, { size }) => {
        pendingResizeHeightRef.current = Math.round(size.height);
        if (resizeFrameRef.current !== null) return;

        resizeFrameRef.current = requestAnimationFrame(() => {
            resizeFrameRef.current = null;
            setSplitHeight(pendingResizeHeightRef.current);
        });
    };

    const handleResizeStop = (_event, { size }) => {
        if (resizeFrameRef.current !== null) {
            cancelAnimationFrame(resizeFrameRef.current);
            resizeFrameRef.current = null;
        }
        const resizedHeight = Math.round(size.height);
        const nextHeight = resizedHeight < 60 ? 24 : resizedHeight;
        pendingResizeHeightRef.current = nextHeight;
        setSplitHeight(nextHeight);
        setInputVisible(nextHeight >= 60);
        setIsExpanded(nextHeight > 24);
    };

    const panelActionImplementationsRef = useRef(null);
    panelActionImplementationsRef.current = {
        focusCommandInput,
        getCompletions,
        handleCancelCommand,
        handleCommandSubmit,
        handleResize,
        handleResizeStop,
        onClear: clearLogs,
        toggleContainerHeight,
    };
    const stablePanelActionsRef = useRef(null);
    stablePanelActionsRef.current ??= Object.fromEntries(
        Object.keys(panelActionImplementationsRef.current).map((name) => [
            name,
            (...args) =>
                panelActionImplementationsRef.current[name](...args),
        ])
    );

    return {
        ...stablePanelActionsRef.current,
        commandHistory,
        commandInputRef,
        inputVisible,
        isExpanded,
        logs,
        logsEndRef,
        maxConsoleHeight,
        setCommandHistory,
        setLogs,
        splitHeight,
    };
};

export default useConsoleController;
