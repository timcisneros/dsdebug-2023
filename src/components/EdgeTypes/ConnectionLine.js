import { Position, getSmoothStepPath } from '@xyflow/react';

const ConnectionLine = ({ fromX, fromY, toX, toY }) => {
    const [path] = getSmoothStepPath({
        sourceX: fromX,
        sourceY: fromY,
        sourcePosition: Position.Right,
        targetX: toX,
        targetY: toY,
        targetPosition: Position.Left,
        offset: 0,
    });

    return (
        <g>
            <path
                fill="none"
                stroke="#959595"
                strokeWidth={0.5}
                // className="animated"
                d={path}
            />
            {/* <circle
                cx={toX}
                cy={toY}
                fill="none"
                r={3}
                stroke="#959595"
                strokeWidth={1.5}
            /> */}
        </g>
    );
};

export default ConnectionLine;
