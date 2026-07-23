export const workflowHistoryLimit = 100;

const createWorkflowIndex = (data) => {
    const nodeCells = [];
    const edgeCells = [];
    const cellsById = new Map();
    let startActivity = null;

    data.cells.forEach((cell) => {
        cellsById.set(cell.id, cell);
        if (cell.type === 'springcm.Link') edgeCells.push(cell);
        else nodeCells.push(cell);
        if (cell.activityName === 'StartActivity') startActivity = cell;
    });

    return { nodeCells, edgeCells, cellsById, startActivity };
};

const createPresent = (data, previousPresent) => {
    const index = createWorkflowIndex(data);
    return {
        data,
        index,
        lastWorkflowName:
            index.startActivity?.workflowName ??
            previousPresent?.lastWorkflowName,
        lastDefinedVariables:
            index.startActivity?.definedVariables?.value ??
            previousPresent?.lastDefinedVariables ??
            [],
    };
};

const hasEquivalentData = (currentData, nextData) => {
    if (currentData === nextData) return true;
    if (!currentData || !nextData) return false;

    const currentKeys = Object.keys(currentData);
    const nextKeys = Object.keys(nextData);
    if (
        currentKeys.length !== nextKeys.length ||
        currentKeys.some((key) => !Object.hasOwn(nextData, key))
    ) {
        return false;
    }

    for (const key of currentKeys) {
        if (key === 'cells') continue;
        if (!Object.is(currentData[key], nextData[key])) return false;
    }

    const currentCells = currentData.cells;
    const nextCells = nextData.cells;
    return (
        Array.isArray(currentCells) &&
        Array.isArray(nextCells) &&
        currentCells.length === nextCells.length &&
        currentCells.every((cell, index) => cell === nextCells[index])
    );
};

export const createWorkflowHistory = (
    data,
    fallbackWorkflowName,
    fallbackDefinedVariables
) => ({
    past: [],
    present: createPresent(data, {
        lastWorkflowName: fallbackWorkflowName,
        lastDefinedVariables: fallbackDefinedVariables,
    }),
    future: [],
});

export const workflowHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'apply': {
            const nextData =
                typeof action.dataOrUpdater === 'function'
                    ? action.dataOrUpdater(state.present.data)
                    : action.dataOrUpdater;
            if (hasEquivalentData(state.present.data, nextData)) return state;

            return {
                past: [...state.past, state.present].slice(
                    -workflowHistoryLimit
                ),
                present: createPresent(nextData, state.present),
                future: [],
            };
        }
        case 'replace':
            return {
                past: [],
                present: createPresent(action.data, state.present),
                future: [],
            };
        case 'undo': {
            if (state.past.length === 0) return state;
            const previous = state.past.at(-1);
            return {
                past: state.past.slice(0, -1),
                present: previous,
                future: [state.present, ...state.future].slice(
                    0,
                    workflowHistoryLimit
                ),
            };
        }
        case 'redo': {
            if (state.future.length === 0) return state;
            const [next, ...remainingFuture] = state.future;
            return {
                past: [...state.past, state.present].slice(
                    -workflowHistoryLimit
                ),
                present: next,
                future: remainingFuture,
            };
        }
        default:
            return state;
    }
};
