export const STEP_DRAG_DATA_TYPE = 'application/x-dsdebug-step+json';

export const readStepDragData = (dataTransfer) => {
    const serializedData = dataTransfer.getData(STEP_DRAG_DATA_TYPE);
    if (!serializedData) return null;

    try {
        const dragData = JSON.parse(serializedData);
        if (
            !dragData ||
            typeof dragData !== 'object' ||
            typeof dragData.stepType !== 'string' ||
            typeof dragData.activityName !== 'string'
        ) {
            return null;
        }
        return dragData;
    } catch {
        return null;
    }
};
