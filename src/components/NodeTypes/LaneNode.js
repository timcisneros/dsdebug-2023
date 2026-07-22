import { NodeResizer } from '@xyflow/react';
import { memo } from 'react';
import { useWorkflowActions } from '../../contexts/NodeContext';

const resizeHandleStyle = { pointerEvents: 'all', zIndex: 1001 };
const resizeLineStyle = { pointerEvents: 'all', zIndex: 1000 };
const laneRootStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
    pointerEvents: 'none',
};
const laneLabelStyle = {
    position: 'absolute',
    color: '#fff',
    inset: '14px 0',
    width: 25,
    maxHeight: 'calc(100% - 28px)',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    lineHeight: '25px',
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    transform: 'rotate(180deg)',
};
const topResizeTargetStyle = {
    position: 'absolute',
    top: -6,
    left: 25,
    right: 0,
    height: 12,
    pointerEvents: 'all',
};
const bottomResizeTargetStyle = {
    ...topResizeTargetStyle,
    top: undefined,
    bottom: -6,
};
const rightResizeTargetStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: -6,
    width: 12,
    pointerEvents: 'all',
};

const LaneNode = ({ id, data, selected }) => {
    const { name, attrs } = data;
    const displayName = name?.value || '';
    const { setData } = useWorkflowActions();

    const handleResizeEnd = (event, params) => {
        setData((prevData) => ({
            ...prevData,
            cells: prevData.cells.map((cell) =>
                cell.id === id
                    ? {
                          ...cell,
                          position: { x: params.x, y: params.y },
                          size: {
                              width: params.width,
                              height: params.height,
                          },
                      }
                    : cell
            ),
        }));
    };

    return (
        <>
            <NodeResizer
                isVisible={selected}
                minWidth={100}
                minHeight={100}
                onResizeEnd={handleResizeEnd}
                handleClassName="node-resizer-handle"
                lineClassName="node-resizer-line"
                handleStyle={resizeHandleStyle}
                lineStyle={resizeLineStyle}
            />
            <div style={laneRootStyle}>
                <div
                    style={{
                        width: '25px',
                        height: '100%',
                        position: 'absolute',
                        backgroundColor: attrs.rect.fill,
                        pointerEvents: 'all',
                        overflow: 'hidden',
                        contain: 'paint',
                    }}
                >
                    <div
                        title={displayName}
                        style={laneLabelStyle}
                    >
                        {displayName}
                    </div>
                </div>
                <div
                    style={{
                        border: `1px solid ${attrs.rect.fill}`,
                        height: '100%',
                        pointerEvents: 'none',
                    }}
                >
                </div>
                <div style={topResizeTargetStyle} />
                <div style={bottomResizeTargetStyle} />
                <div style={rightResizeTargetStyle} />
            </div>
        </>
    );
};

export default memo(LaneNode);
