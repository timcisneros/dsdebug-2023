import React, {
    useState,
    useMemo,
    useEffect,
    useRef,
    useCallback,
} from 'react';
import ReactFlow, {
    MarkerType,
    Controls,
    ControlButton,
    MiniMap,
    applyNodeChanges,
    applyEdgeChanges,
    Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import StepNode from './NodeTypes/StepNode';
import GroupNode from './NodeTypes/GroupNode';
import CircleNode from './NodeTypes/CircleNode';
import DiamondNode from './NodeTypes/DiamondNode';
import { Box, Flex, useToast, IconButton, Grid, Input } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import NodeSettingsPanel from './NodeSettingsPanel';
import EdgeSettings from './NodeSettingsPanel/EdgeSettings';
import DefaultCustomEdge from './EdgeTypes/DefaultCustomEdge';
import { useNode } from '../contexts/NodeContext';
import Header from './Header';
import SidePanel from './SidePanel';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 to generate unique IDs
import { SelectionChangeLogger } from './SelectionChangeLogger';
import LaneNode from './NodeTypes/LaneNode';
import { stepDataMapping } from './SidePanel/Steps/StepData';
import { templateDataMapping } from './SidePanel/Steps/templateData';
import ConsoleContainer from './ConsoleContainer';
import 'react-resizable/css/styles.css';
import Panel from './NodeSettingsPanel/Panel';
import DeepFieldExplorer from './NodeSettingsPanel/DeepFieldExplorer';

const proOptions = { hideAttribution: true };

// Define nodeTypes and edgeTypes outside the component and memoize them
const nodeTypes = {
    StepNode: StepNode,
    GroupNode: GroupNode,
    CircleNode: CircleNode,
    DiamondNode: DiamondNode,
    LaneNode: LaneNode,
};

const edgeTypes = {
    defaultCustomEdge: DefaultCustomEdge,
}; // Define the edge types as strings

const snapGrid = [25, 25];

const deleteKeyCode = ['Backspace', 'Delete'];

const WorkflowDiagram = () => {
    const {
        data,
        setData,
        selectedNodes,
        setSelectedNodes,
        selectedEdge,
        setSelectedEdge,
        handleUpdateNode,
        definedVariables,
        setDefinedVariables,
        mergeDefinedVariables,
        startActivity,
        newNodesAdded,
        setNewNodesAdded,
        defaultNodePositions,
        setDefaultNodePositions,
        setStartActivity,
        generateUniqueName,
    } = useNode();

    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    const memoizedNodes = useMemo(() => nodes, [nodes]);
    const memoizedEdges = useMemo(() => edges, [edges]);

    const onNodesChange = useCallback(
        (changes) =>
            setNodes((nds) => {
                return applyNodeChanges(changes, nds);
            }),
        []
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );

    const unwantedProperties = [
        'id',
        'type',
        'position',
        // ... any other properties you don't want in `data`
    ];

    useEffect(() => {
        if (data) {
            setStartActivity(
                data.cells.find((cell) => cell.activityName === 'StartActivity')
            );

            const customNodeTypes = {
                'springcm.Step': 'StepNode',
                'springcm.Group': 'GroupNode',
                'springcm.Circle': 'CircleNode',
                'springcm.Diamond': 'DiamondNode',
                'springcm.Lane': 'LaneNode',
            };
            // console.log('running');
            const updatedNodes = data.cells
                .filter((item) => item.type !== 'springcm.Link')
                .map((item) => {
                    // Dynamically create the data object by filtering out unwanted properties
                    const dataProps = Object.keys(item)
                        .filter((key) => !unwantedProperties.includes(key))
                        .reduce((obj, key) => {
                            obj[key] = item[key];
                            return obj;
                        }, {});

                    return {
                        id: item.id,
                        style: {
                            width:
                                item.size?.width !== undefined
                                    ? item.size.width
                                    : item.data?.size.width,
                            height:
                                item.size?.height !== undefined
                                    ? item.size.height
                                    : item.data?.size.height,
                            zIndex:
                                item.type === 'springcm.Group' ||
                                item.type === 'springcm.Lane'
                                    ? 0
                                    : 1,
                        },
                        data: dataProps,
                        position: item.position || { x: 0, y: 0 },
                        type: customNodeTypes[item.type] || 'default',
                        selectable: true,
                        selected:
                            selectedNodes &&
                            selectedNodes.find(
                                (selectedNode) => selectedNode.id === item.id
                            )
                                ? true
                                : false,
                    };
                });
            setNodes(updatedNodes);

            // TODO: update this so node reference labels are not lost on refresh
            const addItemLabel = (itemLabel, sourceNodeId) => {
                if (itemLabel?.type === 'Reference') {
                    const sourceNode = nodes.find(
                        (node) => node.id === sourceNodeId
                    );

                    const decisions =
                        sourceNode?.data?.decisions?.value?.decisions || [];
                    const referenceKey = itemLabel?.value;

                    // Find the correct decision based on the referenceKey
                    const matchedDecision = decisions.find(
                        (decision) =>
                            decision.output?.value?.referenceKey ===
                            referenceKey
                    );

                    const outputs = sourceNode?.data?.outputs?.value || [];

                    // Find the correct decision based on the referenceKey
                    const matchedOutput = outputs.find(
                        (output) => output.value?.referenceKey === referenceKey
                    );

                    // Return the label if the decision was found, otherwise check the elseOutput
                    if (matchedDecision) {
                        return matchedDecision.output?.value?.name || '';
                    } else if (matchedOutput) {
                        return matchedOutput.value.name || '';
                    } else {
                        // Check elseOutput if referenceKey doesn't match any decision
                        const elseOutput =
                            sourceNode?.data?.decisions?.value?.elseOutput;
                        return elseOutput?.value?.name || '';
                    }
                } else {
                    return (
                        itemLabel?.value.charAt(0).toUpperCase() +
                        itemLabel?.value.slice(1)
                    );
                }
            };

            const updatedEdges = data.cells
                .filter((item) => item.type === 'springcm.Link')
                .map((item) => ({
                    id: item.id,
                    source: item.source.id,
                    target: item.target.id,
                    label:
                        addItemLabel(item.output, item.source.id) ||
                        item.output?.value,
                    type: 'defaultCustomEdge',
                    animated: true,
                    markerEnd: {
                        type: MarkerType.ArrowClosed,
                    },
                }));
            setEdges(updatedEdges);

            if (defaultNodePositions === null) {
                const defaultPositions = updatedNodes.reduce((acc, node) => {
                    acc[node.id] = node.position;
                    return acc;
                }, {});
                setDefaultNodePositions(defaultPositions);
            }
        }
    }, [data]);

    const toast = useToast();

    const handleNodeDragStop = useCallback((event, draggedNode) => {
        // Update the position, width, and height properties of the dragged node in the data before setting it
        setData((prevData) => ({
            ...prevData,
            cells: prevData.cells.map((cell) =>
                cell.id === draggedNode?.id
                    ? {
                          ...cell,
                          position: draggedNode.position,
                      }
                    : cell
            ),
        }));
        // console.log('dsdebug-log', '- Node Drag End', draggedNode);
    }, []);

    const handleSelectionDragStop = useCallback((event, draggedNodes) => {
        // Update the position property of the dragged nodes (selection) in the data before setting it
        setData((prevData) => ({
            ...prevData,
            cells: prevData.cells.map((cell) => {
                const draggedNode = draggedNodes.find(
                    (node) => node.id === cell.id
                );
                return draggedNode
                    ? {
                          ...cell,
                          position: draggedNode.position,
                      }
                    : cell;
            }),
        }));
        console.log('dsdebug-log', 'run');
    }, []);

    const handleReset = () => {
        const id = 'not allowed';
        // Check if new nodes have been added
        if (!newNodesAdded) {
            // Reset the positions of all nodes to their default values
            setData((prevData) => ({
                ...prevData,
                cells: prevData.cells.map((node) => ({
                    ...node,
                    position: defaultNodePositions[node.id],
                })),
            }));
        } else {
            if (!toast.isActive(id)) {
                toast({
                    id,
                    position: 'top-right',
                    title: 'Action not allowed',
                    description: 'Reset is not allowed after adding new nodes.',
                    status: 'warning',
                    duration: 9000,
                    isClosable: true,
                    containerStyle: {
                        marginTop: '55px',
                    },
                });
            }
        }
    };

    const generateId = () => {
        return uuidv4(); // Generate a random UUID as the node ID
    };

    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const handleDragOver = useCallback((event) => {
        event.preventDefault(); // Prevent default behavior to allow drop
    }, []);

    const [templateDefinedVariables, setTemplateDefinedVariables] =
        useState(null);

    // Watch for changes in the templateDefinedVariables state
    useEffect(() => {
        if (templateDefinedVariables !== null) {
            // Existing definedVariables
            const existingDefinedVariables =
                startActivity.definedVariables?.value?.slice();

            // Merge the variables
            const mergedVars = mergeDefinedVariables(
                existingDefinedVariables,
                templateDefinedVariables
            );

            // // Update the definedVariables state with the merged variables
            // setDefinedVariables(mergedVars);

            // Find the index of the StartActivity node in data.cells
            const startActivityIndex = data.cells.findIndex(
                (cell) => cell.activityName === 'StartActivity'
            );

            // Update the definedVariables of the StartActivity node in data.cells
            if (startActivityIndex !== -1) {
                const updatedDataCells = [...data.cells];
                updatedDataCells[startActivityIndex].definedVariables.value =
                    mergedVars;

                // Update the data with the updated cells
                setData((prevData) => ({
                    ...prevData,
                    cells: updatedDataCells,
                }));

                console.log('dsdebug-log', '- Variables Merged:', mergedVars);
            }
        }
    }, [templateDefinedVariables]);

    const handleDrop = useCallback(
        (event) => {
            if (data) {
                event.preventDefault();
                const reactFlowBounds =
                    reactFlowWrapper.current.getBoundingClientRect();
                const nodeData = JSON.parse(
                    event.dataTransfer.getData('application/json')
                );

                // const zoomLevel = reactFlowInstance.getZoom();
                // console.log('dsdebug-log', zoomLevel);

                const position = reactFlowInstance.project({
                    x: event.clientX - reactFlowBounds.left,
                    y: event.clientY - reactFlowBounds.top,
                });

                const existingStepNames = data.cells.map(
                    (node) => node.name.value
                );

                // Check if the data dropped is a value that exists in nodeTypes
                if (nodeData.stepType in nodeTypes) {
                    setNewNodesAdded(true);
                    // Add a new StepNode to the nodes state
                    const nodeId = generateId();
                    const newNode = {
                        ...stepDataMapping[nodeData.activityName].type,
                        id: nodeId,
                        size: { width: 100, height: 100 },
                        position,
                        name: {
                            type: 'String',
                            value: generateUniqueName(
                                stepDataMapping[nodeData.activityName].type.name
                                    .value,
                                existingStepNames
                            ),
                        },
                    };

                    console.log('dsdebug-log', '- Node Created:', newNode);

                    // Update the JSON data object with the new node
                    setData((prevData) => ({
                        cells: [...prevData.cells, newNode],
                    }));
                }

                if (
                    (nodeData.stepType === 'Template' &&
                        nodeData.activityName in templateDataMapping) ||
                    (nodeData.stepType === 'Template' &&
                        typeof nodeData.stepData === 'object')
                ) {
                    setNewNodesAdded(true);

                    // Get the drop position
                    const dropPosition = reactFlowInstance.project({
                        x: event.clientX - reactFlowBounds.left,
                        y: event.clientY - reactFlowBounds.top,
                    });

                    const newNodes = [];
                    const newLinks = [];
                    const stepIdMapping = {};

                    let templateData = [];

                    // Check if this is an imported template, it will have the JSON data directly added to nodeData.stepData instead of referencing templateDataMapping
                    if (typeof nodeData.stepData === 'object') {
                        templateData = nodeData.stepData.cells;
                    } else {
                        templateData =
                            templateDataMapping[nodeData.activityName];
                    }

                    const templateStartActivity = templateData.find(
                        (step) => step.activityName === 'StartActivity'
                    );

                    setTemplateDefinedVariables(
                        templateStartActivity.definedVariables.value
                    );

                    templateData.forEach((step) => {
                        if (
                            step.type !== 'springcm.Link' &&
                            step.activityName !== 'StartActivity'
                        ) {
                            // Handle step nodes
                            const oldStepId = step.id;
                            const newStepId = generateId();
                            stepIdMapping[oldStepId] = newStepId;

                            newNodes.push({
                                ...step,
                                id: newStepId,
                                size: {
                                    width: step.size?.width,
                                    height: step.size?.height,
                                },
                                position: {
                                    x: dropPosition.x + (step.position?.x || 0),
                                    y: dropPosition.y + (step.position?.y || 0),
                                },
                                name: {
                                    type: 'String',
                                    value: generateUniqueName(
                                        step.name.value,
                                        existingStepNames
                                    ),
                                },
                            });
                        }
                    });

                    templateData.forEach((step) => {
                        if (step.type === 'springcm.Link') {
                            step.vertices = []; // Set vertices to an empty array

                            // Handle link nodes
                            const oldSourceStepId = step.source.id;
                            const oldTargetStepId = step.target.id;

                            const newSourceStepId =
                                stepIdMapping[oldSourceStepId];
                            const newTargetStepId =
                                stepIdMapping[oldTargetStepId];

                            if (newSourceStepId && newTargetStepId) {
                                newLinks.push({
                                    ...step,
                                    id: generateId(),
                                    name: generateUniqueName(
                                        step.name?.value,
                                        existingStepNames
                                    ),
                                    source: {
                                        ...step.source,
                                        id: newSourceStepId,
                                    },
                                    target: {
                                        ...step.target,
                                        id: newTargetStepId,
                                    },
                                });
                            }
                        }
                    });

                    setData((prevData) => ({
                        cells: [...prevData.cells, ...newNodes, ...newLinks],
                    }));

                    console.log('dsdebug-log', '- Template Added:', data.cells);
                }
            } else {
                console.log('dsdebug-log', 'Start activity missing.');
            }
        },
        [reactFlowInstance]
    );

    // const memoizedDefinedVariables = useMemo(
    //     () => definedVariables,
    //     [definedVariables]
    // );

    const sidePanelComponent = useMemo(
        () => (
            <SidePanel
                definedVariables={definedVariables}
                data={data}
                setData={setData}
                setDefinedVariables={setDefinedVariables}
            />
        ),
        [definedVariables, data]
    );

    const [isVisible, setIsVisible] = useState(true);

    const handleToggleVisibility = () => {
        setIsVisible((prevVisible) => !prevVisible); // Toggle the isVisible state
    };

    const nodeSettingsPanelComponent = useMemo(
        () => (
            <>
                <IconButton
                    pos="absolute"
                    right={5}
                    top="64px"
                    icon={isVisible ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={handleToggleVisibility}
                    variant="ghost"
                    zIndex={1}
                />
                {isVisible && ( // Use curly braces here
                    <Box
                        w="20rem"
                        backgroundColor="#fff"
                        borderLeft="1px solid #ccc"
                        overflowY="auto"
                        paddingTop={50}
                    >
                        {/* Set a fixed height to enable scrolling */}
                        {/* <NodeSettingsPanel
                            selectedNodes={selectedNodes}
                            handleUpdateNode={handleUpdateNode}
                            definedVariables={definedVariables}
                        /> */}
                        {/* <Panel /> */}
                        {selectedNodes && (
                            <DeepFieldExplorer data={selectedNodes[0]} />
                        )}
                    </Box>
                )}
            </>
        ),
        [isVisible, selectedNodes, definedVariables] // Add isVisible as a dependency to useMemo
    );

    const [splitHeight, setSplitHeight] = useState(150); // Initial height of the bottom resizable box

    // const handleNodeDelete = useCallback((nodes) => {
    //     setData((prevData) => {
    //         // Filter out the selected nodes and their connected links
    //         const filteredCells = prevData.cells.filter(
    //             (cell) =>
    //                 !selectedNodes.some(
    //                     (selectedNode) => cell.id === selectedNode.id
    //                 ) &&
    //                 !(
    //                     cell.type === 'springcm.Link' &&
    //                     selectedNodes.some(
    //                         (selectedNode) =>
    //                             cell.source?.id === selectedNode.id ||
    //                             cell.target?.id === selectedNode.id
    //                     )
    //                 )
    //         );

    //         return {
    //             ...prevData,
    //             cells: filteredCells,
    //         };
    //     });

    //     console.log('dsdebug-log', '- Node(s) Deleted:', nodes);
    // }, []);

    const handleNodeDelete = useCallback((nodes) => {
        const isNodeSelected = (cell) =>
            nodes.some((node) => cell.id === node.id);
        const isLinkConnectedToSelectedNode = (cell) =>
            cell.type === 'springcm.Link' &&
            nodes.some(
                (node) =>
                    cell.source?.id === node.id || cell.target?.id === node.id
            );
        setData((prevData) => ({
            ...prevData,
            cells: prevData.cells.filter(
                (cell) =>
                    !isNodeSelected(cell) &&
                    !isLinkConnectedToSelectedNode(cell)
            ),
        }));

        console.log('dsdebug-log', '- Node(s) Deleted:', nodes);
    }, []);

    const handleEdgesDelete = useCallback(
        (edges) => {
            // Create a Set to store the IDs of the edges to be deleted
            const edgesToDelete = new Set(edges.map((edge) => edge.id));

            // Filter out the edges that are not in the edgesToDelete set
            const updatedEdges = data.cells.filter(
                (cell) =>
                    cell.type !== 'springcm.Link' || !edgesToDelete.has(cell.id)
            );

            // Update the data with the updated edges
            setData((prevData) => ({
                ...prevData,
                cells: updatedEdges,
            }));

            console.log('dsdebug-log', '- Link(s) Deleted:', edges);
        },
        [data]
    );

    const onConnect = useCallback((params) => {
        const { source, target, type } = params;

        // Check if the connection is allowed based on your business logic (if needed)

        // Check if a link already exists with the same source and target IDs
        const existingLink = data.cells.find(
            (cell) =>
                cell.type === 'springcm.Link' &&
                cell.source?.id === source &&
                cell.target?.id === target
        );

        if (existingLink) {
            console.log(
                'dsdebug-log',
                '- Link already exists between source and target nodes:',
                { source, target }
            );
            return;
        }

        const linkId = generateId();

        // Create a new link object for the connection
        const newLink = {
            type: 'springcm.Link',
            source: {
                id: source,
                port: 'e', // Assuming the source port is always 'e'
            },
            target: {
                id: target,
                port: 'w', // Assuming the target port is always 'w'
                // selector:
                //     '> g:nth-child(1) > g:nth-child(3) > circle:nth-child(5)', // Replace this with the actual selector if needed
            },
            router: {
                name: 'manhattan',
                args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
            },
            id: linkId, // Generate a unique ID for the new link (you can use your own method for generating IDs)
            z: 1000004,
            name: { type: 'String', value: `link-${linkId}` }, // Replace with the desired name value
            vertices: [], // You can add vertices if needed
            description: { type: 'String', value: '' }, // Replace with the desired description value
            output: { type: 'String', value: '' }, // Replace with the desired output value
            attrs: {}, // You can add attributes if needed
        };

        // Update the data with the new link
        setData((prevData) => ({
            ...prevData,
            cells: [...prevData.cells, newLink], // Add the new link to the existing cells array
        }));

        console.log('dsdebug-log', '- Link Added:', { source, target });
    }, []);

    const handleSelectionChange = useCallback((params) => {
        if (params.nodes.length === 0) {
            setSelectedNodes(null);
        } else {
            setSelectedNodes(params.nodes);
        }
        if (params.edges.length === 0) {
            setSelectedEdge(null);
        } else {
            setSelectedEdge(params.edges[0]);
        }
    }, []);

    const [minimapVisible, setMinimapVisible] = useState(false);

    const handleMinimapVisible = () => {
        setMinimapVisible((prevVisible) => !prevVisible);
    };

    return (
        <>
            <Header />
            <Box position="fixed" top="0" left="0" right="0" bottom="0">
                {/* Set position and dimensions */}
                <Flex
                    h={`calc(100vh - 3rem)`}
                    marginTop="3rem"
                    backgroundColor="#f0f0f0"
                    flexDir="row"
                >
                    {/* SidePanel */}
                    {sidePanelComponent}

                    {/* Flex container for ReactFlow and Test div */}
                    <Flex
                        flex="1"
                        position="relative"
                        overflow="hidden"
                        flexDir="column"
                    >
                        <Grid
                            h="100%" // Use Grid to divide the space vertically
                            templateRows={`1fr 
                                ${splitHeight}px`} // Set two rows, the first will adjust automatically, and the second will be controlled by the splitHeight state
                        >
                            {/* ReactFlow */}
                            <Flex h="100%" ref={reactFlowWrapper}>
                                <ReactFlow
                                    deleteKeyCode={deleteKeyCode}
                                    proOptions={proOptions}
                                    minZoom={0.1}
                                    nodes={memoizedNodes}
                                    edges={memoizedEdges}
                                    nodeTypes={nodeTypes}
                                    edgeTypes={edgeTypes}
                                    onNodesChange={onNodesChange}
                                    onEdgesChange={onEdgesChange}
                                    onInit={setReactFlowInstance}
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                    onConnect={onConnect}
                                    onNodesDelete={handleNodeDelete}
                                    onEdgesDelete={handleEdgesDelete}
                                    onNodeDragStop={handleNodeDragStop}
                                    onSelectionDragStop={
                                        handleSelectionDragStop
                                    }
                                    onSelectionChange={handleSelectionChange}
                                    fitView
                                    elevateEdgesOnSelect
                                    nodesFocusable
                                    style={{ width: '100%', height: '100%' }}
                                    snapToGrid
                                    snapGrid={snapGrid}
                                >
                                    <Background variant="cross" gap={25} />
                                    <Controls>
                                        <ControlButton
                                            onClick={handleReset}
                                            title="reset node positions"
                                        >
                                            <div>⟳</div>
                                        </ControlButton>
                                        <ControlButton
                                            title="toggle minimap"
                                            onClick={handleMinimapVisible}
                                        >
                                            <svg
                                                className="icon"
                                                focusable="false"
                                                viewBox="0 0 24 24"
                                                icon="map"
                                                namespace="ux"
                                            >
                                                <g
                                                    fillRule="evenodd"
                                                    transform="translate(6 1)"
                                                >
                                                    <path d="M10.678 9.757L6.001 20.67 1.328 9.765a6 6 0 119.35-.008z"></path>
                                                    <circle
                                                        fill="#FFF"
                                                        cx="6"
                                                        cy="6"
                                                        r="3"
                                                    ></circle>
                                                </g>
                                            </svg>
                                        </ControlButton>
                                    </Controls>
                                    {/* <SelectionChangeLogger /> */}
                                    {minimapVisible && <MiniMap />}
                                </ReactFlow>
                            </Flex>

                            {useMemo(
                                () => (
                                    <ConsoleContainer
                                        splitHeight={splitHeight}
                                        setSplitHeight={setSplitHeight}
                                        reactFlowWrapper={reactFlowWrapper}
                                        reactFlowInstance={reactFlowInstance}
                                        nodes={nodes}
                                        edges={edges}
                                        generateId={generateId}
                                        generateUniqueName={generateUniqueName}
                                    />
                                ),
                                [splitHeight, nodes.length, edges.length]
                            )}
                        </Grid>
                    </Flex>

                    {/* NodeSettingsPanel */}
                    {selectedNodes && nodeSettingsPanelComponent}
                    {selectedEdge && !selectedNodes && <EdgeSettings />}
                </Flex>
            </Box>
        </>
    );
};

export default WorkflowDiagram;
