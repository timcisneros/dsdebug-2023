// DefaultCustomEdge.js
import React from 'react';
import { BaseEdge, EdgeLabelRenderer, getStraightPath } from 'reactflow';

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
    const [edgePath, labelX, labelY] = getStraightPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
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

export default DefaultCustomEdge;
