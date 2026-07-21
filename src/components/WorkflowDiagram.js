import React, {
    useState,
    useMemo,
    useRef,
    useCallback,
} from 'react';
import ReactFlow, {
    MarkerType,
    Controls,
    ControlButton,
    MiniMap,
    Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import StepNode from './NodeTypes/StepNode';
import GroupNode from './NodeTypes/GroupNode';
import CircleNode from './NodeTypes/CircleNode';
import DiamondNode from './NodeTypes/DiamondNode';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { toaster } from './ui/toaster';
import EdgeSettings from './NodeSettingsPanel/EdgeSettings';
import DefaultCustomEdge from './EdgeTypes/DefaultCustomEdge';
import { useNode } from '../contexts/NodeContext';
import SidePanel from './SidePanel';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 to generate unique IDs
import { SelectionChangeLogger } from './SelectionChangeLogger';
import LaneNode from './NodeTypes/LaneNode';
import { stepDataMapping } from './SidePanel/Steps/StepData';
import { templateDataMapping } from './SidePanel/Steps/templateData';
import ConsoleContainer from './ConsoleContainer';
import 'react-resizable/css/styles.css';
import DeepFieldExplorer from './NodeSettingsPanel';
import ConnectionLine from './EdgeTypes/ConnectionLine';

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

const getItemLabel = (itemLabel, sourceNodeId, nodes) => {
    if (itemLabel?.type !== 'Reference') {
        return itemLabel?.value
            ? itemLabel.value.charAt(0).toUpperCase() + itemLabel.value.slice(1)
            : '';
    }

    const sourceNode = nodes.find((node) => node.id === sourceNodeId);
    const decisions = sourceNode?.data?.decisions?.value?.decisions || [];
    const timerOutputs = sourceNode?.data?.timers?.value || [];
    const elseOutput =
        sourceNode?.data?.decisions?.value?.elseOutput?.value || [];
    const timeouts = sourceNode?.data?.timeout?.value || [];
    const outputs = sourceNode?.data?.outputs?.value || [];
    const referenceKey = itemLabel.value;

    return (
        decisions.find(
            (decision) => decision.output?.value?.referenceKey === referenceKey
        )?.output?.value?.name ||
        timerOutputs.find(
            (output) => output.output?.value?.referenceKey === referenceKey
        )?.output?.value?.name ||
        timeouts.find(
            (timeout) => timeout.output?.value?.referenceKey === referenceKey
        )?.output?.value?.name ||
        elseOutput.name ||
        outputs.find((output) => output.value?.referenceKey === referenceKey)
            ?.value?.name ||
        ''
    );
};

const createFlowNodes = (data, selectedNodes) => {
    const unwantedProperties = ['id', 'type', 'position', 'selected'];
    const customNodeTypes = {
        'springcm.Step': 'StepNode',
        'springcm.Group': 'GroupNode',
        'springcm.Circle': 'CircleNode',
        'springcm.Diamond': 'DiamondNode',
        'springcm.Lane': 'LaneNode',
    };

    return data.cells
        .filter((item) => item.type !== 'springcm.Link')
        .map((item) => ({
            id: item.id,
            style: {
                width: item.size?.width || item.data?.size.width,
                height: item.size?.height || item.data?.size.height,
                zIndex: ['springcm.Group', 'springcm.Lane'].includes(item.type)
                    ? 0
                    : 1,
            },
            data: Object.fromEntries(
                Object.entries(item).filter(
                    ([key]) => !unwantedProperties.includes(key)
                )
            ),
            position: item.position || { x: 0, y: 0 },
            type: customNodeTypes[item.type] || 'default',
            selectable: true,
            selected: !!selectedNodes?.some((node) => node.id === item.id),
        }));
};

const createFlowEdges = (data, nodes) =>
    data.cells
        .filter((item) => item.type === 'springcm.Link')
        .map((item) => ({
            id: item.id,
            source: item.source.id,
            target: item.target.id,
            label:
                getItemLabel(item.output, item.source.id, nodes) ||
                item.output?.value,
            type: 'defaultCustomEdge',
            animated: false,
            markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 20,
                height: 20,
            },
        }));

const WorkflowDiagram = () => {
    const {
        data,
        setData,
        selectedNodes,
        setSelectedNodes,
        selectedEdge,
        setSelectedEdge,
        definedVariables,
        mergeDefinedVariables,
        startActivity,
        newNodesAdded,
        setNewNodesAdded,
        defaultNodePositions,
        generateUniqueName,
    } = useNode();

    const nodes = useMemo(
        () => createFlowNodes(data, selectedNodes),
        [data, selectedNodes]
    );
    const edges = useMemo(() => createFlowEdges(data, nodes), [data, nodes]);

    const onNodesChange = useCallback(
        (changes) => {
            const positions = new Map(
                changes
                    .filter((change) => change.type === 'position' && change.position)
                    .map((change) => [change.id, change.position])
            );
            if (positions.size === 0) return;
            setData((currentData) => ({
                ...currentData,
                cells: currentData.cells.map((cell) =>
                    positions.has(cell.id)
                        ? { ...cell, position: positions.get(cell.id) }
                        : cell
                ),
            }));
        },
        [setData]
    );

    const onEdgesChange = useCallback(() => {}, []);

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
            if (!toaster.isVisible(id)) {
                toaster.create({
                    id,
                    title: 'Action not allowed',
                    description: 'Reset is not allowed after adding new nodes.',
                    type: 'warning',
                    duration: 9000,
                    closable: true,
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

                position.x -= 50;
                position.y -= 50;

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

                    const mergedVariables = mergeDefinedVariables(
                        startActivity.definedVariables?.value ?? [],
                        templateStartActivity.definedVariables?.value ?? []
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
                                    vertices: [],
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
                        ...prevData,
                        cells: [
                            ...prevData.cells.map((cell) =>
                                cell.activityName === 'StartActivity'
                                    ? {
                                          ...cell,
                                          definedVariables: {
                                              ...cell.definedVariables,
                                              value: mergedVariables,
                                          },
                                      }
                                    : cell
                            ),
                            ...newNodes,
                            ...newLinks,
                        ],
                    }));

                    console.log('dsdebug-log', '- Template Added:', data.cells);
                }
            } else {
                console.log('dsdebug-log', 'Start activity missing.');
            }
        },
        [
            data,
            generateUniqueName,
            mergeDefinedVariables,
            reactFlowInstance,
            setData,
            setNewNodesAdded,
            startActivity,
        ]
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
            />
        ),
        [definedVariables, data, setData]
    );

    const [splitHeight, setSplitHeight] = useState(150); // Initial height of the bottom resizable box

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
    }, [setData]);

    const handleEdgesDelete = useCallback(
        (edges) => {
            // Create a Set to store the IDs of the edges to be deleted
            const edgesToDelete = new Set(edges.map((edge) => edge.id));

            setData((prevData) => ({
                ...prevData,
                cells: prevData.cells.filter(
                    (cell) =>
                        cell.type !== 'springcm.Link' ||
                        !edgesToDelete.has(cell.id)
                ),
            }));

            console.log('dsdebug-log', '- Link(s) Deleted:', edges);
        },
        [setData]
    );

    const onConnect = useCallback((params) => {
        const { source, target } = params;
        const linkId = uuidv4();

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
        setData((prevData) => {
            const linkExists = prevData.cells.some(
                (cell) =>
                    cell.type === 'springcm.Link' &&
                    cell.source?.id === source &&
                    cell.target?.id === target
            );
            if (linkExists) return prevData;
            return {
                ...prevData,
                cells: [...prevData.cells, newLink],
            };
        });

        console.log('dsdebug-log', '- Link Added:', { source, target });
    }, [setData]);

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
    }, [setSelectedEdge, setSelectedNodes]);

    const [minimapVisible, setMinimapVisible] = useState(false);

    const handleMinimapVisible = () => {
        setMinimapVisible((prevVisible) => !prevVisible);
    };

    return (
        <>
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
                                    nodes={nodes}
                                    edges={edges}
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
                                    onSelectionChange={handleSelectionChange}
                                    fitView
                                    elevateEdgesOnSelect
                                    nodesFocusable
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    snapToGrid
                                    snapGrid={snapGrid}
                                    connectionLineComponent={ConnectionLine}
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
                        </Grid>
                    </Flex>

                    {/* NodeSettingsPanel */}
                    {selectedNodes && (
                        <DeepFieldExplorer
                            key={selectedNodes[0]?.id}
                            selectedNode={selectedNodes[0]}
                        />
                    )}
                    {selectedEdge && !selectedNodes && (
                        <EdgeSettings key={selectedEdge.id} />
                    )}
                </Flex>
            </Box>
        </>
    );
};

export default WorkflowDiagram;
