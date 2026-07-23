import {
    createContext,
    useCallback,
    useContext,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
} from 'react';
import initialData from '../../data/New Workflow.json';
import {
    findWorkflowVariableReferences,
    mergeVariableDeclarations,
    rewriteVariableReferences,
} from '../utils/variableMerge';
import {
    createWorkflowHistory,
    workflowHistoryReducer,
} from '../utils/workflowHistory';
import {
    getActiveSelectedEdgeId,
    getActiveSelectedNodeIds,
    updateWorkflowNameInData,
} from '../utils/workflowSynchronization';

const getNodePositions = (data) =>
    Object.fromEntries(
        data.cells
            .filter((cell) => cell.type !== 'springcm.Link')
            .map((cell) => [cell.id, cell.position ?? { x: 0, y: 0 }])
    );

const WorkflowDataContext = createContext();
const WorkflowActionsContext = createContext();
const WorkflowIndexContext = createContext();
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
export const useWorkflowIndex = () => useContext(WorkflowIndexContext);
export const useWorkflowMetadata = () => useContext(WorkflowMetadataContext);
export const useTemplateOptions = () => useContext(TemplateOptionsContext);
export const useWorkflowHistory = () => useContext(WorkflowHistoryContext);
export const usePanelVisibility = () => useContext(PanelVisibilityContext);
export const useSelection = () => useContext(SelectionContext);

export const NodeProvider = ({ children }) => {
    const [selectedNodeIds, setSelectedNodeIds] = useState(null);
    const [selectedEdgeId, setSelectedEdgeId] = useState(null);
    const [selectionRevision, setSelectionRevision] = useState(0);
    const [workflowHistory, dispatchWorkflowHistory] = useReducer(
        workflowHistoryReducer,
        null,
        () =>
            createWorkflowHistory(
                initialData,
                defaultWorkflowName,
                defaultDefinedVariables
            )
    );
    const { present, past, future } = workflowHistory;
    const { data, index, lastWorkflowName, lastDefinedVariables } = present;
    const workflowDataRef = useRef(data);
    const workflowIndexRef = useRef(index);
    const workflowHistoryRef = useRef(workflowHistory);
    const variableRenamesRef = useRef(new Map());
    const reconcileSelection = useCallback((nextIndex) => {
        setSelectedNodeIds((currentSelection) => {
            const nextSelection = getActiveSelectedNodeIds(
                currentSelection,
                nextIndex.cellsById
            );
            if (!nextSelection) return null;
            if (
                currentSelection?.length === nextSelection.length &&
                currentSelection.every(
                    (id, index) => id === nextSelection[index]
                )
            ) {
                return currentSelection;
            }
            return nextSelection;
        });
        setSelectedEdgeId((currentSelection) =>
            getActiveSelectedEdgeId(
                currentSelection,
                nextIndex.cellsById
            )
        );
    }, []);
    useLayoutEffect(() => {
        workflowDataRef.current = data;
        workflowIndexRef.current = index;
        workflowHistoryRef.current = workflowHistory;
    }, [data, index, workflowHistory]);
    const setData = useCallback((dataOrUpdater) => {
        if (typeof dataOrUpdater !== 'function') {
            variableRenamesRef.current.clear();
        }
        dispatchWorkflowHistory({
            type: 'apply',
            dataOrUpdater,
        });
    }, []);
    const replaceData = useCallback((nextData) => {
        variableRenamesRef.current.clear();
        dispatchWorkflowHistory({ type: 'replace', data: nextData });
    }, []);
    const undo = useCallback(() => {
        const previous = workflowHistoryRef.current.past.at(-1);
        if (!previous) return false;
        variableRenamesRef.current.clear();
        reconcileSelection(previous.index);
        dispatchWorkflowHistory({ type: 'undo' });
        setSelectionRevision((currentRevision) => currentRevision + 1);
        return true;
    }, [reconcileSelection]);
    const redo = useCallback(() => {
        const next = workflowHistoryRef.current.future[0];
        if (!next) return false;
        variableRenamesRef.current.clear();
        reconcileSelection(next.index);
        dispatchWorkflowHistory({ type: 'redo' });
        setSelectionRevision((currentRevision) => currentRevision + 1);
        return true;
    }, [reconcileSelection]);
    const getData = useCallback(() => workflowDataRef.current, []);
    const getWorkflowIndex = useCallback(() => workflowIndexRef.current, []);
    const [iterateVars, setIterateVarsState] = useState(false);
    const iterateVarsRef = useRef(false);
    const setIterateVars = useCallback((valueOrUpdater) => {
        const nextValue =
            typeof valueOrUpdater === 'function'
                ? valueOrUpdater(iterateVarsRef.current)
                : valueOrUpdater;
        iterateVarsRef.current = nextValue === true;
        setIterateVarsState(iterateVarsRef.current);
    }, []);
    const getVariableMergeMode = useCallback(
        () => (iterateVarsRef.current ? 'unique' : 'merge'),
        []
    );
    const [defaultNodePositions, setDefaultNodePositions] = useState(() =>
        getNodePositions(initialData)
    );
    const [isVisible, setIsVisible] = useState(true);
    const newNodesAdded = index.nodeCells.some(
        (cell) => !Object.hasOwn(defaultNodePositions, cell.id)
    );

    const handleToggleVisibility = useCallback(() => {
        setIsVisible((currentVisibility) => !currentVisibility);
    }, []);

    const startActivity = index.startActivity;

    const definedVariables =
        startActivity?.definedVariables?.value ?? lastDefinedVariables;
    const workflowName = startActivity?.workflowName ?? lastWorkflowName;

    const generateUniqueName = useCallback((baseName, existingNames) => {
        let newName = baseName;
        let iterator = 1;
        const nameExists = (name) =>
            existingNames instanceof Set
                ? existingNames.has(name)
                : existingNames.includes(name);
        while (nameExists(newName)) {
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
                iterateVarsRef.current
            ),
        []
    );

    const handleUpdateNode = useCallback(
        (editedNode) => {
            if (!editedNode?.id) return;

            const normalizedNodeData = rewriteVariableReferences(
                editedNode.data,
                variableRenamesRef.current
            );

            setData((currentData) => ({
                ...currentData,
                cells: currentData.cells.map((cell) =>
                    cell.id === editedNode.id
                        ? { ...cell, ...normalizedNodeData }
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

    const updateWorkflowName = useCallback(
        (nextName) => {
            if (!workflowIndexRef.current.startActivity) {
                return {
                    ok: false,
                    error: 'A Start activity is required to rename the workflow.',
                };
            }

            setData((currentData) =>
                updateWorkflowNameInData(currentData, nextName)
            );
            return { ok: true };
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

            const currentStartActivity =
                workflowIndexRef.current.startActivity;
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

            variableRenamesRef.current.delete(variableName);
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

            const currentStartActivity =
                workflowIndexRef.current.startActivity;
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
            for (const [sourceName, targetName] of variableRenamesRef.current) {
                if (targetName === oldName) {
                    variableRenamesRef.current.set(sourceName, newName);
                }
            }
            variableRenamesRef.current.set(oldName, newName);
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

            setSelectionRevision((currentRevision) => currentRevision + 1);

            return { ok: true };
        },
        [setData]
    );

    const deleteDefinedVariable = useCallback(
        (variableName) => {
            const currentStartActivity =
                workflowIndexRef.current.startActivity;
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

            const references = findWorkflowVariableReferences(
                workflowDataRef.current,
                variableName
            );
            const referenceCount = references.length;

            if (referenceCount > 0) {
                return {
                    ok: false,
                    referenceCount,
                    references,
                    error: `This variable is used by ${referenceCount} workflow field${referenceCount === 1 ? '' : 's'}. Remove those references before deleting it.`,
                };
            }

            setData((currentData) => {
                const hasCurrentReferences =
                    findWorkflowVariableReferences(
                        currentData,
                        variableName
                    ).length > 0;
                if (hasCurrentReferences) return currentData;

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
            return { ok: true, referenceCount: 0, references: [] };
        },
        [setData]
    );

    const dataValue = useMemo(() => ({ data }), [data]);
    const actionsValue = useMemo(
        () => ({
            setData,
            replaceData,
            getData,
            getWorkflowIndex,
            handleUpdateNode,
            generateUniqueName,
            updateWorkflowName,
            updateDefinedVariables,
            createDefinedVariable,
            renameDefinedVariable,
            deleteDefinedVariable,
        }),
        [
            createDefinedVariable,
            deleteDefinedVariable,
            generateUniqueName,
            getData,
            getWorkflowIndex,
            handleUpdateNode,
            renameDefinedVariable,
            replaceData,
            setData,
            updateWorkflowName,
            updateDefinedVariables,
        ]
    );
    const metadataValue = useMemo(
        () => ({ workflowName, definedVariables, startActivity }),
        [definedVariables, startActivity, workflowName]
    );
    const templateOptionsValue = useMemo(
        () => ({
            iterateVars,
            setIterateVars,
            getVariableMergeMode,
            mergeDefinedVariables,
        }),
        [getVariableMergeMode, iterateVars, mergeDefinedVariables, setIterateVars]
    );
    const historyValue = useMemo(
        () => ({
            newNodesAdded,
            defaultNodePositions,
            setDefaultNodePositions,
            canUndo: past.length > 0,
            canRedo: future.length > 0,
            undo,
            redo,
        }),
        [
            defaultNodePositions,
            future.length,
            newNodesAdded,
            past.length,
            redo,
            undo,
        ]
    );
    const panelVisibilityValue = useMemo(
        () => ({ isVisible, handleToggleVisibility }),
        [handleToggleVisibility, isVisible]
    );

    const activeSelectedNodeIds = useMemo(() => {
        return getActiveSelectedNodeIds(
            selectedNodeIds,
            index.cellsById
        );
    }, [index.cellsById, selectedNodeIds]);
    const activeSelectedEdgeId = getActiveSelectedEdgeId(
        selectedEdgeId,
        index.cellsById
    );
    const selectionValue = useMemo(
        () => ({
            selectedNodeIds: activeSelectedNodeIds,
            setSelectedNodeIds,
            selectedEdgeId: activeSelectedEdgeId,
            setSelectedEdgeId,
            selectionRevision,
        }),
        [activeSelectedEdgeId, activeSelectedNodeIds, selectionRevision]
    );

    return (
        <WorkflowDataContext.Provider value={dataValue}>
            <WorkflowIndexContext.Provider value={index}>
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
            </WorkflowIndexContext.Provider>
        </WorkflowDataContext.Provider>
    );
};
