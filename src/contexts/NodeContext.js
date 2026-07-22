import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import initialData from '../../data/New Workflow.json';
import {
    countVariableReferences,
    mergeVariableDeclarations,
    rewriteVariableReferences,
} from '../utils/variableMerge';

const getNodePositions = (data) =>
    Object.fromEntries(
        data.cells
            .filter((cell) => cell.type !== 'springcm.Link')
            .map((cell) => [cell.id, cell.position ?? { x: 0, y: 0 }])
    );

const WorkflowDataContext = createContext();
const WorkflowActionsContext = createContext();
const WorkflowMetadataContext = createContext();
const TemplateOptionsContext = createContext();
const WorkflowHistoryContext = createContext();
const PanelVisibilityContext = createContext();
const SelectionContext = createContext();
const initialStartActivity = initialData.cells.find(
    (cell) => cell.activityName === 'StartActivity'
);
const defaultWorkflowName =
    initialStartActivity?.workflowName ?? {
        type: 'String',
        value: 'New Workflow',
    };
const defaultDefinedVariables =
    initialStartActivity?.definedVariables?.value ?? [];

export const useWorkflowData = () => useContext(WorkflowDataContext);
export const useWorkflowActions = () => useContext(WorkflowActionsContext);
export const useWorkflowMetadata = () => useContext(WorkflowMetadataContext);
export const useTemplateOptions = () => useContext(TemplateOptionsContext);
export const useWorkflowHistory = () => useContext(WorkflowHistoryContext);
export const usePanelVisibility = () => useContext(PanelVisibilityContext);
export const useSelection = () => useContext(SelectionContext);

export const NodeProvider = ({ children }) => {
    const [selectedNodes, setSelectedNodes] = useState(null);
    const [selectedEdge, setSelectedEdge] = useState(null);
    const [workflowState, setWorkflowState] = useState(() => ({
        data: initialData,
        lastWorkflowName: defaultWorkflowName,
        lastDefinedVariables: defaultDefinedVariables,
    }));
    const { data, lastWorkflowName, lastDefinedVariables } = workflowState;
    const workflowDataRef = useRef(data);
    useEffect(() => {
        workflowDataRef.current = data;
    }, [data]);
    const setData = useCallback((dataOrUpdater) => {
        setWorkflowState((currentState) => {
            const nextData =
                typeof dataOrUpdater === 'function'
                    ? dataOrUpdater(currentState.data)
                    : dataOrUpdater;
            const nextStartActivity = nextData.cells.find(
                (cell) => cell.activityName === 'StartActivity'
            );

            return {
                data: nextData,
                lastWorkflowName:
                    nextStartActivity?.workflowName ??
                    currentState.lastWorkflowName,
                lastDefinedVariables:
                    nextStartActivity?.definedVariables?.value ??
                    currentState.lastDefinedVariables,
            };
        });
    }, []);
    const [newNodesAdded, setNewNodesAdded] = useState(false);
    const [iterateVars, setIterateVars] = useState(false);
    const [defaultNodePositions, setDefaultNodePositions] = useState(() =>
        getNodePositions(initialData)
    );
    const [isVisible, setIsVisible] = useState(true);

    const handleToggleVisibility = useCallback(() => {
        setIsVisible((currentVisibility) => !currentVisibility);
    }, []);

    const startActivity = useMemo(
        () =>
            data.cells.find(
                (cell) => cell.activityName === 'StartActivity'
            ),
        [data]
    );

    const definedVariables =
        startActivity?.definedVariables?.value ?? lastDefinedVariables;
    const workflowName = startActivity?.workflowName ?? lastWorkflowName;

    const generateUniqueName = useCallback((baseName, existingNames) => {
        let newName = baseName;
        let iterator = 1;
        while (existingNames.includes(newName)) {
            newName = `${baseName} ${iterator}`;
            iterator++;
        }
        return newName;
    }, []);

    const mergeDefinedVariables = useCallback(
        (existingVariables, templateVariables) =>
            mergeVariableDeclarations(
                existingVariables,
                templateVariables,
                iterateVars
            ),
        [iterateVars]
    );

    const handleUpdateNode = useCallback(
        (editedNode) => {
            if (!editedNode?.id) return;

            setData((currentData) => ({
                ...currentData,
                cells: currentData.cells.map((cell) =>
                    cell.id === editedNode.id
                        ? { ...cell, ...editedNode.data }
                        : cell
                ),
            }));
        },
        [setData]
    );

    const updateDefinedVariables = useCallback(
        (variablesOrUpdater) => {
            setData((currentData) => ({
                ...currentData,
                cells: currentData.cells.map((cell) => {
                    if (cell.activityName !== 'StartActivity') return cell;

                    const currentVariables =
                        cell.definedVariables?.value ?? [];
                    const nextVariables =
                        typeof variablesOrUpdater === 'function'
                            ? variablesOrUpdater(currentVariables)
                            : variablesOrUpdater;

                    return {
                        ...cell,
                        definedVariables: {
                            ...cell.definedVariables,
                            type: 'Variable',
                            value: nextVariables,
                        },
                    };
                }),
            }));
        },
        [setData]
    );

    const createDefinedVariable = useCallback(
        (newVariable) => {
            const variableName = newVariable?.value?.name ?? '';
            if (!/^[A-Za-z0-9_]+$/.test(variableName)) {
                return {
                    ok: false,
                    error: 'Only letters, numbers, and underscores are allowed.',
                };
            }

            const currentStartActivity = workflowDataRef.current.cells.find(
                (cell) => cell.activityName === 'StartActivity'
            );
            const currentVariables =
                currentStartActivity?.definedVariables?.value ?? [];
            if (!currentStartActivity) {
                return {
                    ok: false,
                    error: 'A Start activity is required to create variables.',
                };
            }
            const duplicateExists = currentVariables.some(
                (variable) =>
                    variable.value.name.toLowerCase() ===
                    variableName.toLowerCase()
            );

            if (duplicateExists) {
                return { ok: false, error: 'Variable already exists.' };
            }

            updateDefinedVariables((variables) =>
                variables.some(
                    (variable) =>
                        variable.value.name.toLowerCase() ===
                        variableName.toLowerCase()
                )
                    ? variables
                    : [...variables, newVariable]
            );
            return { ok: true };
        },
        [updateDefinedVariables]
    );

    const renameDefinedVariable = useCallback(
        (oldName, newName) => {
            if (!/^[A-Za-z0-9_]+$/.test(newName)) {
                return {
                    ok: false,
                    error: 'Only letters, numbers, and underscores are allowed.',
                };
            }

            const currentStartActivity = workflowDataRef.current.cells.find(
                (cell) => cell.activityName === 'StartActivity'
            );
            const currentVariables =
                currentStartActivity?.definedVariables?.value ?? [];
            const existingVariable = currentVariables.find(
                (variable) => variable.value.name === oldName
            );

            if (!existingVariable) {
                return { ok: false, error: 'Variable no longer exists.' };
            }

            if (!existingVariable.value.deletable) {
                return {
                    ok: false,
                    error: 'System variables cannot be renamed.',
                };
            }

            if (oldName === newName) return { ok: true };
            const duplicateExists = currentVariables.some(
                (variable) =>
                    variable.value.name !== oldName &&
                    variable.value.name.toLowerCase() === newName.toLowerCase()
            );

            if (duplicateExists) {
                return { ok: false, error: 'Variable already exists.' };
            }

            const renamedVariables = new Map([[oldName, newName]]);
            setData((currentData) => ({
                ...currentData,
                cells: currentData.cells.map((cell) => {
                    if (cell.activityName !== 'StartActivity') {
                        return rewriteVariableReferences(
                            cell,
                            renamedVariables
                        );
                    }

                    return {
                        ...cell,
                        definedVariables: {
                            ...cell.definedVariables,
                            value: (cell.definedVariables?.value ?? []).map(
                                (variable) =>
                                    variable.value.name === oldName
                                        ? {
                                              ...variable,
                                              value: {
                                                  ...variable.value,
                                                  name: newName,
                                                  displayName: newName,
                                              },
                                          }
                                        : variable
                            ),
                        },
                    };
                }),
            }));

            setSelectedNodes((currentSelection) =>
                currentSelection?.map((node) => ({
                    ...node,
                    variableRevision: (node.variableRevision ?? 0) + 1,
                    data: rewriteVariableReferences(
                        node.data,
                        renamedVariables
                    ),
                })) ?? null
            );
            setSelectedEdge((currentEdge) =>
                currentEdge
                    ? {
                          ...rewriteVariableReferences(
                              currentEdge,
                              renamedVariables
                          ),
                          variableRevision:
                              (currentEdge.variableRevision ?? 0) + 1,
                      }
                    : null
            );

            return { ok: true };
        },
        [setData]
    );

    const deleteDefinedVariable = useCallback(
        (variableName) => {
            const currentStartActivity = workflowDataRef.current.cells.find(
                (cell) => cell.activityName === 'StartActivity'
            );
            const existingVariable =
                currentStartActivity?.definedVariables?.value?.find(
                    (variable) => variable.value.name === variableName
                );

            if (!existingVariable) {
                return { ok: false, error: 'Variable no longer exists.' };
            }

            if (!existingVariable.value.deletable) {
                return {
                    ok: false,
                    error: 'System variables cannot be deleted.',
                };
            }

            const referenceCount = workflowDataRef.current.cells
                .filter((cell) => cell.activityName !== 'StartActivity')
                .reduce(
                    (count, cell) =>
                        count + countVariableReferences(cell, variableName),
                    0
                );

            if (referenceCount > 0) {
                return {
                    ok: false,
                    referenceCount,
                    error: `This variable is used by ${referenceCount} workflow field${referenceCount === 1 ? '' : 's'}. Remove those references before deleting it.`,
                };
            }

            setData((currentData) => {
                const currentReferenceCount = currentData.cells
                    .filter((cell) => cell.activityName !== 'StartActivity')
                    .reduce(
                        (count, cell) =>
                            count +
                            countVariableReferences(cell, variableName),
                        0
                    );
                if (currentReferenceCount > 0) return currentData;

                return {
                    ...currentData,
                    cells: currentData.cells.map((cell) =>
                        cell.activityName === 'StartActivity'
                            ? {
                                  ...cell,
                                  definedVariables: {
                                      ...cell.definedVariables,
                                      value: (
                                          cell.definedVariables?.value ?? []
                                      ).filter(
                                          (variable) =>
                                              variable.value.name !==
                                              variableName
                                      ),
                                  },
                              }
                            : cell
                    ),
                };
            });
            return { ok: true, referenceCount: 0 };
        },
        [setData]
    );

    const dataValue = useMemo(() => ({ data }), [data]);
    const actionsValue = useMemo(
        () => ({
            setData,
            handleUpdateNode,
            generateUniqueName,
            updateDefinedVariables,
            createDefinedVariable,
            renameDefinedVariable,
            deleteDefinedVariable,
        }),
        [
            createDefinedVariable,
            deleteDefinedVariable,
            generateUniqueName,
            handleUpdateNode,
            renameDefinedVariable,
            setData,
            updateDefinedVariables,
        ]
    );
    const metadataValue = useMemo(
        () => ({ workflowName, definedVariables, startActivity }),
        [definedVariables, startActivity, workflowName]
    );
    const templateOptionsValue = useMemo(
        () => ({ iterateVars, setIterateVars, mergeDefinedVariables }),
        [iterateVars, mergeDefinedVariables]
    );
    const historyValue = useMemo(
        () => ({
            newNodesAdded,
            setNewNodesAdded,
            defaultNodePositions,
            setDefaultNodePositions,
        }),
        [defaultNodePositions, newNodesAdded]
    );
    const panelVisibilityValue = useMemo(
        () => ({ isVisible, handleToggleVisibility }),
        [handleToggleVisibility, isVisible]
    );

    const selectionValue = useMemo(
        () => ({
            selectedNodes,
            setSelectedNodes,
            selectedEdge,
            setSelectedEdge,
        }),
        [selectedEdge, selectedNodes]
    );

    return (
        <WorkflowDataContext.Provider value={dataValue}>
            <WorkflowActionsContext.Provider value={actionsValue}>
                <WorkflowMetadataContext.Provider value={metadataValue}>
                    <TemplateOptionsContext.Provider
                        value={templateOptionsValue}
                    >
                        <WorkflowHistoryContext.Provider value={historyValue}>
                            <PanelVisibilityContext.Provider
                                value={panelVisibilityValue}
                            >
                                <SelectionContext.Provider
                                    value={selectionValue}
                                >
                                    {children}
                                </SelectionContext.Provider>
                            </PanelVisibilityContext.Provider>
                        </WorkflowHistoryContext.Provider>
                    </TemplateOptionsContext.Provider>
                </WorkflowMetadataContext.Provider>
            </WorkflowActionsContext.Provider>
        </WorkflowDataContext.Provider>
    );
};
