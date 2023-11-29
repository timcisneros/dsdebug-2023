import { useState, useRef, useEffect, memo } from 'react';
import {
    Box,
    Input,
    IconButton,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import { Resizable } from 'react-resizable';
import { ReactSVG } from 'react-svg';
import LogsContainer from './LogsContainer';
import {
    ChevronDownIcon,
    ChevronRightIcon,
    ChevronUpIcon,
} from '@chakra-ui/icons';
import { useNode } from '../../contexts/NodeContext';
import { stepDataMapping } from '../SidePanel/Steps/StepData';

const ConsoleContainer = ({
    splitHeight,
    setSplitHeight,
    reactFlowWrapper,
    reactFlowInstance,
    nodes,
    edges,
    generateId,
    generateUniqueName,
}) => {
    const [logs, setLogs] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [commandHistory, setCommandHistory] = useState([]);
    const [commandIndex, setCommandIndex] = useState(-1); // -1 means no command is currently displayed
    const [inputVisible, setInputVisible] = useState(true); // Track input visibility
    const [isExpanded, setIsExpanded] = useState(true); // Track container expansion

    const {
        setNewNodesAdded,
        data,
        setData,
        setSelectedNodes,
        startActivity,
        definedVariables,
        workflowName,
    } = useNode();

    // Function to handle input submission
    // const handleInputSubmit = (event) => {
    //     event.preventDefault();
    //     if (inputValue.trim() !== '') {
    //         // Split the input into command and arguments (if any)
    //         const [command, ...args] = inputValue.trim().split(' ');

    //         // Check if the input is a command and execute the corresponding function
    //         const commandFunctions = {
    //             help: showHelp,
    //             clear: clearLogs,
    //             list: handleListCommand,
    //             create: handleCreateCommand,
    //             delete: handleDeleteCommand,
    //             move: handleMoveCommand,
    //             connect: handleConnectCommand,
    //             // Add more commands and their corresponding functions here
    //         };

    //         if (commandFunctions[command]) {
    //             commandFunctions[command](...args);
    //         } else {
    //             console.log(
    //                 'dsdebug-log',
    //                 'Invalid command. Type "help" for available commands.'
    //             );
    //         }

    //         // Clear the input value after submission
    //         setInputValue('');
    //     }
    // };

    const handleInputSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setCommandHistory((prevHistory) => [...prevHistory, inputValue]);
            setCommandIndex(commandHistory.length + 1); // Reset command index to the latest command (+ 1 to account for the blank input state)

            // Split the input into command and arguments (if any)
            const args = inputValue.trim().split(' ');

            // Function to check if a value is wrapped in quotes
            const isQuoted = (arg) => arg.startsWith('"') && arg.endsWith('"');

            // Function to remove quotes from a quoted value
            const removeQuotes = (arg) => arg.slice(1, -1);

            // Filter out empty arguments
            const filteredArgs = args.filter((arg) => arg.trim() !== '');

            // Initialize the command and arguments
            let command = '';
            let commandArgs = [];

            // Loop through the filtered arguments and handle quoted arguments
            for (let i = 0; i < filteredArgs.length; i++) {
                const arg = filteredArgs[i];
                if (arg.startsWith('"')) {
                    if (arg.endsWith('"')) {
                        // Quoted argument without spaces
                        commandArgs.push(removeQuotes(arg));
                    } else {
                        // Quoted argument with spaces
                        let combinedArg = arg;
                        for (let j = i + 1; j < filteredArgs.length; j++) {
                            const nextArg = filteredArgs[j];
                            combinedArg += ` ${nextArg}`;
                            i = j;
                            if (nextArg.endsWith('"')) {
                                commandArgs.push(removeQuotes(combinedArg));
                                break;
                            }
                        }
                    }
                } else {
                    commandArgs.push(arg);
                }
            }

            // The first argument is the command
            command = commandArgs[0];

            // The rest of the arguments are command arguments
            const argsWithoutCommand = commandArgs.slice(1);

            // Check if the input is a command and execute the corresponding function
            const commandFunctions = {
                help: showHelp,
                clear: clearLogs,
                create: handleCreateCommand,
                delete: handleDeleteCommand,
                list: handleListCommand,
                move: handleMoveCommand,
                connect: handleConnectCommand,
                update: handleUpdateCommand,
                steps: handleStepsCommand,
                alias: handleAliasCommand,
                unalias: handleDeleteAliasCommand,
                start: handleStartCommand,
                select: handleSelectCommand,
                // Add more commands and their corresponding functions here
            };

            if (commandFunctions[command]) {
                commandFunctions[command](...argsWithoutCommand);
            } else {
                console.log(
                    'dsdebug-log',
                    'Invalid command. Type "help" for available commands.'
                );
            }

            // Clear the input value after submission
            setInputValue('');
        }
    };

    // Helper function to resolve an alias to the actual itemId
    const resolveAlias = (itemId) => {
        return aliasMap[itemId] || itemId;
    };

    // Function to show help
    const showHelp = () => {
        console.log('dsdebug-log', 'Available commands:');
        console.log('dsdebug-log', 'help - Show available commands');
        console.log('dsdebug-log', 'clear - Clear console');
        console.log(
            'dsdebug-log',
            'list - List all nodes or edges (links) or specific properties'
        );
        console.log('dsdebug-log', 'create - Create step');
        console.log('dsdebug-log', 'delete - Delete step');
        console.log('dsdebug-log', 'move - Move step');
        console.log('dsdebug-log', 'select - Select step');
        console.log(
            'dsdebug-log',
            'connect - Add an edge (link) between two steps'
        );
        console.log('dsdebug-log', 'update - Update a step property');
        console.log(
            'dsdebug-log',
            'steps - List available activityNames in the stepDataMapping'
        );
        console.log(
            'dsdebug-log',
            "alias - Create alias (friendly name) to refer to a node's id"
        );
        console.log('dsdebug-log', 'unalias - Delete an alias');
        console.log(
            'dsdebug-log',
            'list nodes alias - List current alias names and values for nodes'
        );
        console.log(
            'dsdebug-log',
            'start - Recreate the start activity in case accidentally deleted'
        );
        // console.log(
        //     'dsdebug-log',
        //     'select <item> - Select items on the canvas'
        // );
        // Add more help information for other commands
    };

    // Function to clear all logs
    const clearLogs = () => {
        setLogs([]);
    };

    // Initialize an object to store aliases
    const [aliasMap, setAliasMap] = useState({});

    const handleAliasCommand = (itemId, alias) => {
        if (!itemId || !alias) {
            console.log(
                'dsdebug-log',
                'Invalid command. Usage: alias <itemId> <alias>'
            );
            return;
        }

        // Find the item based on the provided itemId
        const itemToUpdate = data.cells.find((item) => item.id === itemId);

        if (!itemToUpdate) {
            console.log('dsdebug-log', `Item with id '${itemId}' not found.`);
            return;
        }

        // Update the alias map with the provided alias for the itemId
        setAliasMap((prevAliasMap) => ({
            ...prevAliasMap,
            [alias]: itemId,
        }));

        console.log(
            'dsdebug-log',
            `Alias '${alias}' created for item with id '${itemId}'.`
        );
    };

    const handleDeleteAliasCommand = (aliasToDelete) => {
        if (!aliasToDelete) {
            console.log(
                'dsdebug-log',
                'Invalid command. Usage: delete alias <alias>'
            );
            return;
        }

        // Check if the alias exists in the alias map
        if (!aliasMap.hasOwnProperty(aliasToDelete)) {
            console.log('dsdebug-log', `Alias '${aliasToDelete}' not found.`);
            return;
        }

        // Remove the alias from the alias map
        const updatedAliasMap = { ...aliasMap };
        delete updatedAliasMap[aliasToDelete];

        setAliasMap(updatedAliasMap);

        console.log('dsdebug-log', `Alias '${aliasToDelete}' removed.`);
    };

    const handleStepsCommand = () => {
        const stepKeys = Object.keys(stepDataMapping);

        console.log('dsdebug-log', 'List of available steps:');
        console.log('dsdebug-log', stepKeys);
    };

    // Function to handle the "start" command
    const handleStartCommand = () => {
        // Check if the "StartActivity" already exists in the nodes array
        const startActivityNode = nodes.find(
            (node) =>
                node.type === 'StepNode' &&
                node.data.name?.value === 'StartActivity'
        );

        // If the "StartActivity" doesn't exist, create it directly in this function
        if (!startActivityNode) {
            // Update the state of the nodes array to include the newly created node
            setData((prevData) => ({
                cells: [
                    ...prevData.cells,
                    {
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
                            value: definedVariables,
                        },
                        workflowName,
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
                    },
                ],
            }));
        }
    };

    const handleConnectCommand = (sourceIdOrAlias, targetIdOrAlias) => {
        const sourceId = resolveAlias(sourceIdOrAlias);
        const targetId = resolveAlias(targetIdOrAlias);

        // Find the source and target nodes based on the provided ids
        const sourceNode = data.cells.find((node) => node.id === sourceId);
        const targetNode = data.cells.find((node) => node.id === targetId);

        if (!sourceNode || !targetNode) {
            if (sourceNode !== undefined) {
                console.log(
                    'dsdebug-log',
                    `Node with id '${
                        !sourceNode ? sourceId : targetId
                    }' not found.`
                );
                return;
            } else {
                console.log(
                    'dsdebug-log',
                    'Invalid usage. Example: connect <sourceId> <targetId>'
                );
                return;
            }
        }

        // Check if an edge already exists between the source and target nodes
        const existingEdge = data.cells.find(
            (cell) =>
                cell.type === 'springcm.Link' &&
                cell.source?.id === sourceId &&
                cell.target?.id === targetId
        );

        if (existingEdge) {
            console.log(
                'dsdebug-log',
                `An edge already exists between '${sourceId}' and '${targetId}'.`
            );
            return;
        }

        const linkId = generateId();

        // Create a new edge to connect the source and target nodes
        const newEdge = {
            type: 'springcm.Link', // Replace with the actual edge type
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
            cells: [...prevData.cells, newEdge],
        }));

        console.log('dsdebug-log', '- Link Added:', {
            source: sourceId,
            target: targetId,
        });
    };

    // Function to handle the select command
    const handleSelectCommand = (id) => {
        const itemId = resolveAlias(id);

        // Find the item based on the provided ID
        const selectedItem = data.cells.find((item) => item.id === itemId);

        if (!selectedItem) {
            console.log('dsdebug-log', `Item with id '${itemId}' not found.`);
            return;
        }

        // Create a new array with updated selected items
        const updatedItems = data.cells.map((item) =>
            item.id === itemId
                ? { ...item, selected: true }
                : { ...item, selected: false }
        );

        setData((prevData) => ({
            ...prevData,
            cells: updatedItems,
        }));

        // Set the selected nodes to the filtered array containing only the selected items
        setSelectedNodes(updatedItems.filter((item) => item.selected));

        console.log('dsdebug-log', `Item with id '${itemId}' selected.`);
    };

    // Initialize an array to store temporary step names
    let temporaryStepNames = [];

    // Function to handle the "create" command
    const handleCreateCommand = (...args) => {
        if (args.length === 0) {
            console.log(
                'dsdebug-log',
                'Invalid usage. Example: create <activityName> [x] [y] [alias]'
            );
            return;
        }

        const createStep = (activityName, x, y, alias, tempStepNames) => {
            if (!stepDataMapping[activityName]?.type) {
                console.log(
                    'dsdebug-log',
                    `Could not find valid activity name for: '${activityName}'. Type "steps" for available names.`
                );
                return;
            }

            const nodeId = generateId();
            const name =
                stepDataMapping[activityName]?.type?.name?.value ||
                activityName;

            const existingStepNames = nodes.map(
                (node) => node.data.name?.value
            );

            // Check if the name already exists in both temporary and existing step names, and if so, add a numeric suffix
            let uniqueName = name;
            let count = 1;
            while (
                temporaryStepNames.includes(uniqueName) ||
                existingStepNames.includes(uniqueName)
            ) {
                uniqueName = `${name} ${count}`;
                count++;
            }

            const newNode = {
                ...stepDataMapping[activityName].type,
                id: nodeId,
                size: { width: 100, height: 100 },
                position: { x: parseFloat(x), y: parseFloat(y) },
                selected: true,
                name: {
                    type: 'String',
                    value: uniqueName,
                },
            };

            if (alias) {
                // Update the alias map with the provided alias for the itemId
                setAliasMap((prevAliasMap) => ({
                    ...prevAliasMap,
                    [alias]: nodeId,
                }));
            }

            setData((prevData) => ({
                cells: [...prevData.cells, newNode],
            }));

            tempStepNames.push(newNode.name.value); // Add the new node name to the temp array
            console.log('dsdebug-log', '- Node Created:', newNode);
        };

        let currentChunk = [];
        const chunks = [];

        args.forEach((arg) => {
            if (arg === 'create') {
                if (currentChunk.length > 0) {
                    chunks.push(currentChunk);
                    currentChunk = [];
                }
            } else {
                currentChunk.push(arg);
            }
        });

        if (currentChunk.length > 0) {
            chunks.push(currentChunk);
        }

        for (const chunk of chunks) {
            const tempStepNames = []; // Temporary array for names in each chunk

            if (chunk.length === 3 || chunk.length === 4) {
                const [activityName, x, y, alias] = chunk;
                createStep(activityName, x, y, alias || null, tempStepNames);
            } else if (chunk.length === 1) {
                const [activityName] = chunk;
                createStep(activityName, 0, 0, null, tempStepNames); // Default coordinates: 0, 0, and null alias
            }

            // Merge the temporary array into the main temporaryStepNames array
            temporaryStepNames.push(...tempStepNames);
        }
    };

    const handleDeleteCommand = (nodeNameOrId) => {
        const alias = nodeNameOrId; // used to refer to the alias when deleting aliases
        const resolvedItemId = resolveAlias(nodeNameOrId);

        // Find the node based on the provided nodeNameOrId
        const nodeToDelete = data.cells.find((node) => {
            if (node.id === resolvedItemId) {
                return true;
            }

            // Check if the node has a 'data' property and 'name' property within it
            if (node.data && typeof node.data.name === 'string') {
                return (
                    node.data.name.toLowerCase() ===
                    resolvedItemId.toLowerCase()
                );
            }

            return false;
        });

        if (!nodeToDelete) {
            console.log(
                'dsdebug-log',
                'Node not found. The specified nodeNameOrId does not match any existing node.'
            );
            return;
        }

        // Filter out the selected node and its connected links from the data.cells array
        const linksToDelete = [];
        const filteredCells = data.cells.filter((cell) => {
            if (cell.type === 'springcm.Link') {
                if (
                    cell.source?.id === nodeToDelete.id ||
                    cell.target?.id === nodeToDelete.id
                ) {
                    linksToDelete.push(cell);
                    return false; // Exclude the link from filteredCells
                }
            }
            return cell.id !== nodeToDelete.id;
        });

        setData((prevData) => ({
            cells: filteredCells,
        }));

        // Remove the item from the aliasMap if it exists
        setAliasMap((prevAliasMap) => {
            const updatedAliasMap = { ...prevAliasMap };
            delete updatedAliasMap[alias];
            return updatedAliasMap;
        });

        if (nodeToDelete.type === 'springcm.Link') {
            console.log('dsdebug-log', '- Link Deleted:', nodeToDelete);
        } else {
            console.log('dsdebug-log', '- Node Deleted:', nodeToDelete);
        }
        if (linksToDelete.length > 0) {
            console.log('dsdebug-log', '- Link(s) Deleted:', linksToDelete);
        }
    };

    // Example of parsing the command and calling the appropriate function
    const handleListCommand = (itemType, ...propertyNames) => {
        const getProperty = (item, property) => {
            return property !== undefined ? item[property] : item;
        };

        try {
            if (itemType === 'nodes') {
                // Check if the 'alias' command is used
                if (propertyNames.length > 0 && propertyNames[0] === 'alias') {
                    console.log('dsdebug-log', 'List of aliases:');
                    console.log('dsdebug-log', aliasMap);
                    return;
                }
                const itemList = nodes;
                if (propertyNames.length === 0) {
                    console.log('dsdebug-log', 'List of all nodes:');
                    console.log(
                        'dsdebug-log',
                        // Using node.data to hide other values that shouldn't change and appending the id so that it can still be seen for reference
                        itemList.map((node) => ({ id: node.id, ...node.data }))
                    );
                } else {
                    console.log(
                        'dsdebug-log',
                        `List of nodes with the properties '${propertyNames.join(
                            ', '
                        )}':`
                    );
                    console.log(
                        'dsdebug-log',
                        itemList.map((node) => {
                            const properties = propertyNames.reduce(
                                (obj, propertyName) => {
                                    const propertyValue =
                                        getProperty(node.data, propertyName) ||
                                        getProperty(node, propertyName);
                                    if (propertyValue !== undefined) {
                                        obj[propertyName] = propertyValue;
                                    }
                                    return obj;
                                },
                                {}
                            );

                            return properties;
                        })
                    );
                }
            } else if (itemType === 'edges' || itemType === 'links') {
                const itemList = edges;
                if (propertyNames.length === 0) {
                    console.log('dsdebug-log', 'List of all edges (links):');
                    console.log(
                        'dsdebug-log',
                        itemList.map((edge) => edge)
                    );
                } else {
                    console.log(
                        'dsdebug-log',
                        `List of edges with the properties '${propertyNames.join(
                            ', '
                        )}':`
                    );
                    console.log(
                        'dsdebug-log',
                        itemList.map((edge) => {
                            const properties = propertyNames.reduce(
                                (obj, propertyName) => {
                                    const propertyValue = getProperty(
                                        edge,
                                        propertyName
                                    );
                                    if (propertyValue !== undefined) {
                                        obj[propertyName] = propertyValue;
                                    }
                                    return obj;
                                },
                                {}
                            );

                            return properties;
                        })
                    );
                }
            } else {
                console.log(
                    'dsdebug-log',
                    'Invalid usage. Example: list <nodes or edges> [propertyName1 propertyName2 ...]'
                );
            }
        } catch (error) {
            console.error('dsdebug-log', 'An error occurred:', error.message);
        }
    };

    const handleUpdateCommand = (itemId, propertyToUpdate, newValue) => {
        const resolvedItemId = resolveAlias(itemId);
        // If no propertyToUpdate is provided, return early
        if (!propertyToUpdate) {
            console.log(
                'dsdebug-log',
                'Invalid command. Usage: update <itemId> <propertyToUpdate> <newValue>'
            );
            return;
        }

        let parsedValue;
        // Parse newValue based on its type
        if (typeof newValue === 'string') {
            // Check for numeric strings
            if (!isNaN(newValue) && /^\d+$/.test(newValue)) {
                parsedValue = parseFloat(newValue);
            } else if (newValue.toLowerCase() === 'true') {
                // Check for 'true' string
                parsedValue = true;
            } else if (newValue.toLowerCase() === 'false') {
                // Check for 'false' string
                parsedValue = false;
            } else {
                // If it's a string that is neither a number nor a boolean, keep it as a string
                parsedValue = newValue;
            }
        } else {
            // If newValue is not a string (e.g., a number, boolean, etc.), use it as is
            parsedValue = newValue;
        }

        // Find the item based on the provided ID
        const itemToUpdate = data.cells.find(
            (item) => item.id === resolvedItemId
        );

        if (!itemToUpdate) {
            console.log(
                'dsdebug-log',
                `Item with id '${resolvedItemId}' not found.`
            );
            return;
        }

        const updateNestedProperty = (item, nestedPath, value) => {
            const path = nestedPath.split('.');
            let nestedItem = item;

            for (let i = 0; i < path.length - 1; i++) {
                const key = path[i];

                // Check if the key includes an array index
                if (key.includes('[') && key.includes(']')) {
                    // Extract the index and the actual key
                    const match = key.match(/([^\[\]]+)\[(\d+)\]/);
                    if (match) {
                        const arrayKey = match[1];
                        const index = parseInt(match[2]);

                        if (
                            !nestedItem.hasOwnProperty(arrayKey) ||
                            !(nestedItem[arrayKey] instanceof Array)
                        ) {
                            console.log(
                                'dsdebug-log',
                                `Property '${arrayKey}' not found or not an array in item with id '${resolvedItemId}'.`
                            );
                            return;
                        }

                        if (index >= nestedItem[arrayKey].length) {
                            console.log(
                                'dsdebug-log',
                                `Index ${index} out of bounds for array '${arrayKey}' in item with id '${resolvedItemId}'.`
                            );
                            return;
                        }

                        nestedItem = nestedItem[arrayKey][index];
                    } else {
                        console.log(
                            'dsdebug-log',
                            `Invalid array syntax in '${key}' for item with id '${resolvedItemId}'.`
                        );
                        return;
                    }
                } else {
                    if (!nestedItem.hasOwnProperty(key)) {
                        console.log(
                            'dsdebug-log',
                            `Property '${key}' not found in item with id '${resolvedItemId}'.`
                        );
                        return;
                    }
                    nestedItem = nestedItem[key];
                }
            }

            const lastKey = path[path.length - 1];
            if (!nestedItem.hasOwnProperty(lastKey)) {
                console.log(
                    'dsdebug-log',
                    `Property '${lastKey}' not found in item with id '${resolvedItemId}'.`
                );
                return;
            }

            nestedItem[lastKey] = value;
        };

        // Check if the propertyToUpdate exists in the item
        if (propertyToUpdate.indexOf('.') !== -1) {
            updateNestedProperty(itemToUpdate, propertyToUpdate, parsedValue);
        } else if (!itemToUpdate.hasOwnProperty(propertyToUpdate)) {
            console.log(
                'dsdebug-log',
                `Property '${propertyToUpdate}' not found in item with id '${resolvedItemId}'.`
            );
            return;
        } else {
            itemToUpdate[propertyToUpdate] = parsedValue;
        }

        setData((prevData) => ({
            cells: prevData.cells.map((item) =>
                item.id === resolvedItemId ? itemToUpdate : item
            ),
        }));

        console.log('dsdebug-log', `Item with id '${resolvedItemId}' updated.`);
    };

    const handleMoveCommand = (id, x, y) => {
        const resolvedItemId = resolveAlias(id);

        // Find the node based on the provided id
        const nodeToMove = data.cells.find(
            (node) => node.id === resolvedItemId
        );

        if (!nodeToMove) {
            if (resolvedItemId) {
                console.log(
                    'dsdebug-log',
                    `Node with id '${resolvedItemId}' not found.`
                );
                return;
            } else {
                console.log(
                    'dsdebug-log',
                    'Invalid usage. Example: move <id> <x> <y>'
                );
                return;
            }
        }

        // Update the position of the node based on the provided coordinates
        const newPosition = {
            x: parseFloat(x),
            y: parseFloat(y),
        };

        if (!isNaN(newPosition.x) && !isNaN(newPosition.y)) {
            nodeToMove.position = newPosition;
            setData((prevData) => ({
                cells: prevData.cells.map((cell) =>
                    cell.id === resolvedItemId ? nodeToMove : cell
                ),
            }));
            console.log(
                'dsdebug-log',
                `Node with id '${resolvedItemId}' moved to (${newPosition.x}, ${newPosition.y}).`
            );
        } else {
            console.log(
                'dsdebug-log',
                'Invalid coordinates provided. Usage: move <id> <x> <y>'
            );
        }
    };

    const logsEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        logsEndRef.current?.scrollIntoView({
            // behavior: 'smooth',
            block: 'end',
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [logs]);

    // Function to toggle the height of the resizable container
    const toggleContainerHeight = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
        setSplitHeight(isExpanded ? 24 : 300); // Set the height based on current state
        setInputVisible(isExpanded ? false : true);
    };

    // Function to update the width of ReactFlow when the Test div is resized
    const handleResize = (e, { size }) => {
        setSplitHeight(size.height); // Add "px" to the height value

        // Check if height is less than 100 and set input visibility accordingly
        setInputVisible(size.height >= 60);
        setIsExpanded(size.height > 24);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (event) => {
        // Handle up and down arrow key press for command history navigation
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            if (commandHistory.length > 0) {
                let newIndex;
                if (event.key === 'ArrowUp') {
                    newIndex = commandIndex > 0 ? commandIndex - 1 : 0;
                } else {
                    newIndex =
                        commandIndex < commandHistory.length - 1
                            ? commandIndex + 1
                            : commandHistory.length;
                }
                setCommandIndex(newIndex);
                setInputValue(commandHistory[newIndex] || '');
            }
        }
    };
    // console.log('running');
    return (
        <Resizable
            height={splitHeight}
            onResize={handleResize}
            minConstraints={[24, 24]}
            resizeHandles={['n']}
            axis="y"
        >
            <Box
                w="100%"
                h="100%"
                backgroundColor="#212121"
                style={{ minHeight: '0' }}
            >
                {/* Arrow icon button */}
                <IconButton
                    zIndex={1}
                    icon={isExpanded ? <ChevronDownIcon /> : <ChevronUpIcon />}
                    position="absolute"
                    top="0"
                    right="10px"
                    onClick={toggleContainerHeight}
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    variant="unstyled"
                    color="white"
                    size="xs"
                />
                {inputVisible && (
                    <>
                        <Box
                            position="relative"
                            borderTop="1px solid #2C2C2C"
                            marginTop="24px"
                            width="100%"
                            height="calc(100% - 60px)"
                            overflowY="scroll"
                            className="console"
                        >
                            <LogsContainer
                                ref={logsEndRef}
                                logs={logs}
                                setLogs={setLogs}
                            />
                        </Box>
                        <Box position="absolute" bottom="0" width="100%">
                            <form onSubmit={handleInputSubmit}>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <ChevronRightIcon color="gray.300" />
                                    </InputLeftElement>
                                    <Input
                                        spellCheck="false"
                                        placeholder="command line"
                                        fontFamily="Consolas,Lucida Console,Courier New,monospace"
                                        fontSize="12px"
                                        color="#fff"
                                        variant="unstyled"
                                        width="100%"
                                        px={35}
                                        py="10px"
                                        value={inputValue}
                                        onKeyDown={handleKeyDown}
                                        onChange={handleInputChange}
                                        onSubmit={handleInputSubmit}
                                    />
                                </InputGroup>
                            </form>
                        </Box>
                    </>
                )}
                {/* Resizing handle */}
                <Box
                    position="absolute"
                    top="0px"
                    left="50%"
                    w="24px"
                    h="24px"
                    background="none"
                >
                    <ReactSVG
                        className="console-handle"
                        src="step-images/more-horizontal.svg"
                        beforeInjection={(svg) => {
                            svg.setAttribute('width', '24px');
                            svg.setAttribute('height', '24px');
                            svg.setAttribute('color', '#fff');
                            svg.setAttribute('position', 'absolute');
                        }}
                    />
                </Box>
            </Box>
        </Resizable>
    );
};

export default memo(ConsoleContainer);
