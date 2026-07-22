import React, {
    useEffect,
    useState,
    useMemo,
    useRef,
    useCallback,
} from 'react';
import {
    ReactFlow,
    MarkerType,
    Controls,
    ControlButton,
    MiniMap,
    Background,
    useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import StepNode from './NodeTypes/StepNode';
import GroupNode from './NodeTypes/GroupNode';
import CircleNode from './NodeTypes/CircleNode';
import DiamondNode from './NodeTypes/DiamondNode';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { toaster } from './ui/toaster';
import DefaultCustomEdge from './EdgeTypes/DefaultCustomEdge';
import {
    useSelection,
    useTemplateOptions,
    useWorkflowActions,
    useWorkflowData,
    useWorkflowHistory,
    useWorkflowIndex,
    useWorkflowMetadata,
} from '../contexts/NodeContext';
import SidePanel from './SidePanel';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 to generate unique IDs
import LaneNode from './NodeTypes/LaneNode';
import ConsoleContainer from './ConsoleContainer';
import 'react-resizable/css/styles.css';
import ConnectionLine from './EdgeTypes/ConnectionLine';
import { rewriteVariableReferences } from '../utils/variableMerge';
import DeepFieldExplorer from './NodeSettingsPanel';
import EdgeSettings from './NodeSettingsPanel/EdgeSettings';
import { stepDataMapping } from './SidePanel/Steps/StepData';
import { templateDataMapping } from './SidePanel/Steps/templateData';

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
const snapToCanvasGrid = ({ x, y }) => ({
    x: Math.round(x / snapGrid[0]) * snapGrid[0],
    y: Math.round(y / snapGrid[1]) * snapGrid[1],
});

const deleteKeyCode = ['Backspace', 'Delete'];
const flowStyle = { width: '100%', height: '100%' };
const flowNodeCache = new WeakMap();
const flowEdgeCache = new WeakMap();
const edgeMarker = {
    type: MarkerType.ArrowClosed,
    width: 20,
    height: 20,
};
const getItemLabel = (itemLabel, sourceNode) => {
    if (itemLabel?.type !== 'Reference') {
        return itemLabel?.value
            ? itemLabel.value.charAt(0).toUpperCase() + itemLabel.value.slice(1)
            : '';
    }

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

const unwantedNodeProperties = new Set([
    'id',
    'type',
    'position',
    'selected',
]);
const customNodeTypes = {
    'springcm.Step': 'StepNode',
    'springcm.Group': 'GroupNode',
    'springcm.Circle': 'CircleNode',
    'springcm.Diamond': 'DiamondNode',
    'springcm.Lane': 'LaneNode',
};

const createFlowNode = (item) => {
    const cachedNode = flowNodeCache.get(item);
    if (cachedNode) return cachedNode;

    const isContainerNode = ['springcm.Group', 'springcm.Lane'].includes(
        item.type
    );
    const configuredWidth = item.size?.width || item.data?.size?.width;
    const configuredHeight = item.size?.height || item.data?.size?.height;
    const node = {
        id: item.id,
        style: {
            width: configuredWidth,
            height: configuredHeight,
            pointerEvents: isContainerNode ? 'none' : 'all',
            cursor: isContainerNode ? 'move' : undefined,
        },
        data: Object.fromEntries(
            Object.entries(item).filter(
                ([key]) => !unwantedNodeProperties.has(key)
            )
        ),
        position: item.position || { x: 0, y: 0 },
        type: customNodeTypes[item.type] || 'default',
        selectable: true,
        zIndex: isContainerNode ? 0 : 1,
    };
    flowNodeCache.set(item, node);
    return node;
};

const createFlowEdge = (item, sourceNode, selectedEdgeId) => {
    let cacheEntry = flowEdgeCache.get(item);
    if (!cacheEntry || cacheEntry.sourceNode !== sourceNode) {
        cacheEntry = {
            sourceNode,
            variants: new Map(),
            base: {
                id: item.id,
                source: item.source.id,
                target: item.target.id,
                label:
                    getItemLabel(item.output, sourceNode) ||
                    item.output?.value,
                type: 'defaultCustomEdge',
                animated: false,
                markerEnd: edgeMarker,
            },
        };
        flowEdgeCache.set(item, cacheEntry);
    }

    const selected = selectedEdgeId === item.id;
    if (!cacheEntry.variants.has(selected)) {
        cacheEntry.variants.set(selected, { ...cacheEntry.base, selected });
    }
    return cacheEntry.variants.get(selected);
};

const FlowCanvas = React.memo(
    ({
        externalNodes,
        edges,
        onNodeSelectionChanges,
        onNodeDragStop,
        onEdgesChange,
        onEdgeClick,
        onInit,
        onDragOver,
        onDrop,
        onConnect,
        onNodesDelete,
        onEdgesDelete,
        onPaneClick,
        onReset,
        minimapVisible,
        onMinimapVisible,
        reactFlowWrapper,
    }) => {
        const [nodes, setNodes, applyNodesChange] = useNodesState(externalNodes);
        const previousExternalNodesRef = useRef(
            new Map(externalNodes.map((node) => [node.id, node]))
        );

        useEffect(() => {
            setNodes((currentNodes) => {
                const currentNodesById = new Map(
                    currentNodes.map((node) => [node.id, node])
                );
                const previousExternalNodes = previousExternalNodesRef.current;

                return externalNodes.map((externalNode) => {
                    const currentNode = currentNodesById.get(externalNode.id);
                    if (
                        currentNode &&
                        previousExternalNodes.get(externalNode.id) ===
                            externalNode
                    ) {
                        return currentNode;
                    }

                    return { ...currentNode, ...externalNode };
                });
            });
            previousExternalNodesRef.current = new Map(
                externalNodes.map((node) => [node.id, node])
            );
        }, [externalNodes, setNodes]);

        const handleNodesChange = useCallback(
            (changes) => {
                applyNodesChange(changes);

                const selectionChanges = changes.filter(
                    (change) => change.type === 'select'
                );
                if (selectionChanges.length === 0) return;

                onNodeSelectionChanges(selectionChanges);
            },
            [applyNodesChange, onNodeSelectionChanges]
        );

        const handleCanvasPaneClick = useCallback(
            (event) => {
                setNodes((currentNodes) =>
                    currentNodes.map((node) =>
                        node.selected ? { ...node, selected: false } : node
                    )
                );
                onPaneClick(event);
            },
            [onPaneClick, setNodes]
        );

        return (
            <Flex h="100%" ref={reactFlowWrapper}>
                <ReactFlow
                    deleteKeyCode={deleteKeyCode}
                    proOptions={proOptions}
                    minZoom={0.1}
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    onNodesChange={handleNodesChange}
                    onNodeDragStop={onNodeDragStop}
                    onEdgesChange={onEdgesChange}
                    onEdgeClick={onEdgeClick}
                    onInit={onInit}
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    onConnect={onConnect}
                    onNodesDelete={onNodesDelete}
                    onEdgesDelete={onEdgesDelete}
                    onPaneClick={handleCanvasPaneClick}
                    fitView
                    elevateEdgesOnSelect
                    nodesFocusable
                    onlyRenderVisibleElements
                    style={flowStyle}
                    snapToGrid
                    snapGrid={snapGrid}
                    connectionLineComponent={ConnectionLine}
                >
                    <Background variant="cross" gap={25} />
                    <Controls>
                        <ControlButton
                            onClick={onReset}
                            title="reset node positions"
                        >
                            <div>⟳</div>
                        </ControlButton>
                        <ControlButton
                            title="toggle minimap"
                            onClick={onMinimapVisible}
                        >
                            <svg
                                className="icon"
                                focusable="false"
                                viewBox="0 0 24 24"
                                icon="map"
                                namespace="ux"
                            >
                                <g fillRule="evenodd" transform="translate(6 1)">
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
                    {minimapVisible && <MiniMap />}
                </ReactFlow>
            </Flex>
        );
    }
);

FlowCanvas.displayName = 'FlowCanvas';

const WorkflowDiagram = () => {
    const { data } = useWorkflowData();
    const workflowIndex = useWorkflowIndex();
    const { setData, generateUniqueName } = useWorkflowActions();
    const { definedVariables, startActivity } = useWorkflowMetadata();
    const { mergeDefinedVariables } = useTemplateOptions();
    const {
        newNodesAdded,
        setNewNodesAdded,
        defaultNodePositions,
    } = useWorkflowHistory();
    const {
        selectedNodeIds,
        setSelectedNodeIds,
        selectedEdgeId,
        setSelectedEdgeId,
        selectionRevision,
    } = useSelection();

    const externalNodes = useMemo(
        () => workflowIndex.nodeCells.map(createFlowNode),
        [workflowIndex.nodeCells]
    );
    const flowNodesById = useMemo(
        () => new Map(externalNodes.map((node) => [node.id, node])),
        [externalNodes]
    );
    const edges = useMemo(
        () =>
            workflowIndex.edgeCells.map((cell) =>
                createFlowEdge(
                    cell,
                    flowNodesById.get(cell.source.id),
                    selectedEdgeId
                )
            ),
        [flowNodesById, selectedEdgeId, workflowIndex.edgeCells]
    );
    const edgesById = useMemo(
        () => new Map(edges.map((edge) => [edge.id, edge])),
        [edges]
    );
    const projectedItemsRef = useRef({ externalNodes, edges });
    useEffect(() => {
        projectedItemsRef.current = { externalNodes, edges };
    }, [edges, externalNodes]);
    const getWorkflowProjection = useCallback(
        () => projectedItemsRef.current,
        []
    );
    const selectedNodes = useMemo(() => {
        const matchingNodes =
            selectedNodeIds
                ?.map((id) => flowNodesById.get(id))
                .filter(Boolean) ?? [];

        return matchingNodes.length > 0 ? matchingNodes : null;
    }, [flowNodesById, selectedNodeIds]);
    const selectedEdge = selectedEdgeId
        ? edgesById.get(selectedEdgeId) ?? null
        : null;
    const selectedEdgeSourceNode = selectedEdge
        ? flowNodesById.get(selectedEdge.source) ?? null
        : null;

    const handleNodeSelectionChanges = useCallback(
        (changes) => {
            const selectionChanges = changes.filter(
                (change) => change.type === 'select'
            );
            if (selectionChanges.length > 0) {
                if (selectionChanges.some((change) => change.selected)) {
                    setSelectedEdgeId(null);
                }

                setSelectedNodeIds((currentSelection) => {
                    const selectedIds = new Set(
                        currentSelection ?? []
                    );
                    selectionChanges.forEach(({ id, selected }) => {
                        if (selected) selectedIds.add(id);
                        else selectedIds.delete(id);
                    });

                    const nextSelection = [...selectedIds].filter((id) =>
                        flowNodesById.has(id)
                    );
                    return nextSelection.length > 0 ? nextSelection : null;
                });
            }

        },
        [flowNodesById, setSelectedEdgeId, setSelectedNodeIds]
    );

    const handleNodeDragStop = useCallback(
        (_event, draggedNode, draggedNodes = [draggedNode]) => {
            const finalPositions = new Map(
                draggedNodes.map((node) => [
                    node.id,
                    snapToCanvasGrid(node.position),
                ])
            );
            finalPositions.set(
                draggedNode.id,
                snapToCanvasGrid(draggedNode.position)
            );

            setData((currentData) => ({
                ...currentData,
                cells: currentData.cells.map((cell) =>
                    finalPositions.has(cell.id)
                        ? { ...cell, position: finalPositions.get(cell.id) }
                        : cell
                ),
            }));
        },
        [setData]
    );

    const onEdgesChange = useCallback(
        (changes) => {
            const selectionChanges = changes.filter(
                (change) => change.type === 'select'
            );
            if (selectionChanges.length === 0) return;

            if (selectionChanges.some((change) => change.selected)) {
                setSelectedNodeIds(null);
            }

            setSelectedEdgeId((currentSelection) => {
                let nextSelection = currentSelection;
                selectionChanges.forEach(({ id, selected }) => {
                    if (selected) {
                        nextSelection = edgesById.has(id) ? id : null;
                    } else if (nextSelection === id) {
                        nextSelection = null;
                    }
                });
                return nextSelection;
            });
        },
        [edgesById, setSelectedEdgeId, setSelectedNodeIds]
    );

    const handlePaneClick = useCallback(() => {
        setSelectedNodeIds(null);
        setSelectedEdgeId(null);
    }, [setSelectedEdgeId, setSelectedNodeIds]);

    const handleEdgeClick = useCallback(
        (event, edge) => {
            event.stopPropagation();
            setSelectedNodeIds(null);
            setSelectedEdgeId(edge.id);
        },
        [setSelectedEdgeId, setSelectedNodeIds]
    );

    const handleReset = useCallback(() => {
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
    }, [defaultNodePositions, newNodesAdded, setData]);

    const generateId = useCallback(() => {
        return uuidv4(); // Generate a random UUID as the node ID
    }, []);

    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const handleDragOver = useCallback((event) => {
        event.preventDefault(); // Prevent default behavior to allow drop
    }, []);

    const handleDrop = useCallback(
        async (event) => {
            if (data) {
                event.preventDefault();
                const nodeData = JSON.parse(
                    event.dataTransfer.getData('application/json')
                );

                const flowPosition = reactFlowInstance.screenToFlowPosition({
                    x: event.clientX,
                    y: event.clientY,
                });
                const position = snapToCanvasGrid({
                    x: flowPosition.x - 50,
                    y: flowPosition.y - 50,
                });

                const existingStepNames = new Set(
                    data.cells
                        .map((node) => node.name?.value)
                        .filter(Boolean)
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

                if (nodeData.stepType === 'Template') {
                    setNewNodesAdded(true);

                    // Get the drop position
                    const dropPosition = snapToCanvasGrid(
                        reactFlowInstance.screenToFlowPosition({
                            x: event.clientX,
                            y: event.clientY,
                        })
                    );

                    const newNodes = [];
                    const newLinks = [];
                    const stepIdMapping = {};

                    let templateData = [];

                    // Check if this is an imported template, it will have the JSON data directly added to nodeData.stepData instead of referencing templateDataMapping
                    if (typeof nodeData.stepData === 'object') {
                        templateData = nodeData.stepData.cells;
                    } else {
                        templateData = templateDataMapping[nodeData.activityName];
                    }

                    if (!templateData) return;

                    const templateStartActivity = templateData.find(
                        (step) => step.activityName === 'StartActivity'
                    );

                    const { variables: mergedVariables, renamedVariables } =
                        mergeDefinedVariables(
                            startActivity.definedVariables?.value ?? [],
                            templateStartActivity.definedVariables?.value ?? []
                        );

                    const rewrittenTemplateData = templateData.map((cell) =>
                        cell.activityName === 'StartActivity'
                            ? cell
                            : rewriteVariableReferences(
                                  cell,
                                  renamedVariables
                              )
                    );

                    rewrittenTemplateData.forEach((step) => {
                        if (
                            step.type !== 'springcm.Link' &&
                            step.activityName !== 'StartActivity'
                        ) {
                            // Handle step nodes
                            const oldStepId = step.id;
                            const newStepId = generateId();
                            stepIdMapping[oldStepId] = newStepId;

                            const uniqueStepName = generateUniqueName(
                                step.name.value,
                                existingStepNames
                            );
                            existingStepNames.add(uniqueStepName);
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
                                    value: uniqueStepName,
                                },
                            });
                        }
                    });

                    rewrittenTemplateData.forEach((step) => {
                        if (step.type === 'springcm.Link') {
                            // Handle link nodes
                            const oldSourceStepId = step.source.id;
                            const oldTargetStepId = step.target.id;

                            const newSourceStepId =
                                stepIdMapping[oldSourceStepId];
                            const newTargetStepId =
                                stepIdMapping[oldTargetStepId];

                            if (newSourceStepId && newTargetStepId) {
                                const uniqueLinkName = generateUniqueName(
                                    step.name?.value,
                                    existingStepNames
                                );
                                existingStepNames.add(uniqueLinkName);
                                newLinks.push({
                                    ...step,
                                    vertices: [],
                                    id: generateId(),
                                    name: uniqueLinkName,
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
            generateId,
            generateUniqueName,
            mergeDefinedVariables,
            reactFlowInstance,
            setData,
            setNewNodesAdded,
            startActivity,
        ]
    );

    const sidePanelComponent = useMemo(
        () => <SidePanel definedVariables={definedVariables} />,
        [definedVariables]
    );

    const [splitHeight, setSplitHeight] = useState(150); // Initial height of the bottom resizable box

    const settingsPanelComponent = useMemo(() => {
        if (selectedNodes) {
            return (
                <DeepFieldExplorer
                    key={`${selectedNodes[0]?.id}:${selectionRevision}`}
                    selectedNode={selectedNodes[0]}
                />
            );
        }

        return selectedEdge ? (
            <EdgeSettings
                key={`${selectedEdge.id}:${selectionRevision}`}
                selectedEdge={selectedEdge}
                sourceNode={selectedEdgeSourceNode}
            />
        ) : null;
    }, [
        selectedEdge,
        selectedEdgeSourceNode,
        selectedNodes,
        selectionRevision,
    ]);

    const handleNodeDelete = useCallback(
        (nodes) => {
            const nodeIdsToDelete = new Set(nodes.map((node) => node.id));
            const isNodeSelected = (cell) => nodeIdsToDelete.has(cell.id);
            const isLinkConnectedToSelectedNode = (cell) =>
                cell.type === 'springcm.Link' &&
                (nodeIdsToDelete.has(cell.source?.id) ||
                    nodeIdsToDelete.has(cell.target?.id));

            setSelectedNodeIds((currentSelection) => {
                const remainingSelection = (currentSelection ?? []).filter(
                    (id) => !nodeIdsToDelete.has(id)
                );
                return remainingSelection.length > 0
                    ? remainingSelection
                    : null;
            });
            setSelectedEdgeId((currentSelection) => {
                const selectedLink = currentSelection
                    ? edgesById.get(currentSelection)
                    : null;
                return selectedLink &&
                    (nodeIdsToDelete.has(selectedLink.source) ||
                        nodeIdsToDelete.has(selectedLink.target))
                    ? null
                    : currentSelection;
            });
            setData((prevData) => ({
                ...prevData,
                cells: prevData.cells.filter(
                    (cell) =>
                        !isNodeSelected(cell) &&
                        !isLinkConnectedToSelectedNode(cell)
                ),
            }));

            console.log('dsdebug-log', '- Node(s) Deleted:', nodes);
        },
        [
            edgesById,
            setData,
            setSelectedEdgeId,
            setSelectedNodeIds,
        ]
    );

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

            setSelectedEdgeId((currentSelection) =>
                edgesToDelete.has(currentSelection)
                    ? null
                    : currentSelection
            );

            console.log('dsdebug-log', '- Link(s) Deleted:', edges);
        },
        [setData, setSelectedEdgeId]
    );

    const onConnect = useCallback((params) => {
        const { source, target } = params;
        const linkId = uuidv4();

        // Create a new link object for the connection
        const newLink = {
            type: 'springcm.Link',
            source: {
                id: source,
                port: 'e',
            },
            target: {
                id: target,
                port: 'w',
            },
            router: {
                name: 'manhattan',
                args: { excludeTypes: ['springcm.Group', 'springcm.Lane'] },
            },
            id: linkId,
            z: 1000004,
            name: { type: 'String', value: `link-${linkId}` },
            vertices: [],
            description: { type: 'String', value: '' },
            output: { type: 'String', value: '' },
            attrs: {},
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

    const [minimapVisible, setMinimapVisible] = useState(false);

    const handleMinimapVisible = useCallback(() => {
        setMinimapVisible((prevVisible) => !prevVisible);
    }, []);

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

                    {/* Workflow canvas and resizable console */}
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
                            <FlowCanvas
                                externalNodes={externalNodes}
                                edges={edges}
                                onNodeSelectionChanges={
                                    handleNodeSelectionChanges
                                }
                                onNodeDragStop={handleNodeDragStop}
                                onEdgesChange={onEdgesChange}
                                onEdgeClick={handleEdgeClick}
                                onInit={setReactFlowInstance}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                onConnect={onConnect}
                                onNodesDelete={handleNodeDelete}
                                onEdgesDelete={handleEdgesDelete}
                                onPaneClick={handlePaneClick}
                                onReset={handleReset}
                                minimapVisible={minimapVisible}
                                onMinimapVisible={handleMinimapVisible}
                                reactFlowWrapper={reactFlowWrapper}
                            />

                            <ConsoleContainer
                                splitHeight={splitHeight}
                                setSplitHeight={setSplitHeight}
                                getWorkflowProjection={getWorkflowProjection}
                                generateId={generateId}
                                generateUniqueName={generateUniqueName}
                            />
                        </Grid>
                    </Flex>

                    {/* NodeSettingsPanel */}
                    {settingsPanelComponent}
                </Flex>
            </Box>
        </>
    );
};

export default WorkflowDiagram;
