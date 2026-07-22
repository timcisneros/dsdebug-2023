import { NodeResizer } from '@xyflow/react';
import { memo } from 'react';
import { useWorkflowActions } from '../../contexts/NodeContext';

const LaneNode = ({ id, data, selected }) => {
    const { name, size, attrs, color } = data;
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
            />
            <div
                style={{ width: '100%', height: '100%', position: 'relative' }}
            >
                <div
                    style={{
                        width: '25px',
                        height: '100%',
                        position: 'absolute',
                        backgroundColor: attrs.rect.fill,
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            color: '#fff',
                            transformOrigin: '0 0',
                            top: '50%',
                            transform:
                                'rotate(-90deg) translateY(0) translateX(-50%)',
                            whiteSpace: 'nowrap',
                            // transform: 'rotate(-90deg) translateX(-100%)',
                        }}
                    >
                        {displayName}
                    </div>
                </div>
                <div
                    style={{
                        border: `1px solid ${attrs.rect.fill}`,
                        height: '100%',
                    }}
                >
                    {/* <div
                    style={{
                        padding: '50% 0',
                        height: 0,
                    }}
                >
                    <div
                        id="testLabel"
                        style={{
                            display: 'block',
                            transformOrigin: '0 0',
                            transform: 'rotate(-90deg) translate(-100%)',
                            marginTop: '-50%',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Test Label that is very Long
                    </div>
                </div> */}
                </div>
            </div>
        </>
    );
};

export default memo(LaneNode);
