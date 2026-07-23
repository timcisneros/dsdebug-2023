export const getActiveSelectedNodeIds = (selectedNodeIds, cellsById) => {
    const activeIds = (selectedNodeIds ?? []).filter((id) => {
        const cell = cellsById.get(id);
        return cell && cell.type !== 'springcm.Link';
    });
    return activeIds.length > 0 ? activeIds : null;
};

export const getActiveSelectedEdgeId = (selectedEdgeId, cellsById) =>
    selectedEdgeId &&
    cellsById.get(selectedEdgeId)?.type === 'springcm.Link'
        ? selectedEdgeId
        : null;

export const updateWorkflowNameInData = (data, nextName) => ({
    ...data,
    cells: data.cells.map((cell) =>
        cell.activityName === 'StartActivity'
            ? {
                  ...cell,
                  workflowName: {
                      ...cell.workflowName,
                      type: cell.workflowName?.type ?? 'String',
                      value: nextName,
                  },
              }
            : cell
    ),
});
