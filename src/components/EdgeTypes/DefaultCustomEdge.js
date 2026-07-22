// DefaultCustomEdge.js
import { memo } from 'react';
import {
    BaseEdge,
    EdgeLabelRenderer,
    Position,
    getSmoothStepPath,
} from '@xyflow/react';

const defaultEdgeOffset = 20;
const minimumEdgeOffset = 4;

const getEdgeOffset = ({
    sourceX,
    targetX,
    sourcePosition,
    targetPosition,
}) => {
    const usesFacingHorizontalHandles =
        sourcePosition === Position.Right &&
        targetPosition === Position.Left &&
        targetX > sourceX;
    if (!usesFacingHorizontalHandles) return defaultEdgeOffset;

    return Math.min(
        defaultEdgeOffset,
        Math.max(minimumEdgeOffset, (targetX - sourceX) / 4)
    );
};

const DefaultCustomEdge = ({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    label,
}) => {
    const edgeColor = '#f0f0f0'; // Customize the color here, or pass it as a prop to the component
    const offset = getEdgeOffset({
        sourceX,
        targetX,
        sourcePosition,
        targetPosition,
    });
    const [edgePath, labelX, labelY] = getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
        offset,
    });

    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
            <EdgeLabelRenderer>
                {label && (
                    <div
                        style={{
                            position: 'absolute',
                            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                            fontSize: 12,
                            // everything inside EdgeLabelRenderer has no pointer events by default
                            // if you have an interactive element, set pointer-events: all
                            pointerEvents: 'all',
                            backgroundColor: edgeColor,
                            padding: 5,
                            borderRadius: 3,
                            zIndex: 1000,
                            cursor: 'pointer',
                        }}
                        className="nodrag nopan"
                    >
                        {label}
                    </div>
                )}
            </EdgeLabelRenderer>
        </>
    );
};

export default memo(DefaultCustomEdge);
