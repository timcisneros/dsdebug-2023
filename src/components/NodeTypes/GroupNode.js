import { Box } from '@chakra-ui/react';
import { memo } from 'react';
import { NodeResizer } from '@xyflow/react';
import { useWorkflowActions } from '../../contexts/NodeContext';

const resizeHandleStyle = { pointerEvents: 'all', zIndex: 1001 };
const resizeLineStyle = { pointerEvents: 'all', zIndex: 1000 };

const GroupNode = ({ id, data, selected }) => {
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
            <Box
                background="none"
                position="relative"
                width="100%"
                height="100%"
                border="2px dashed"
                borderColor={selected ? 'black' : '#757575'}
                cursor="move"
                pointerEvents="none"
            >
                <div
                    title={displayName}
                    style={{
                        position: 'absolute',
                        top: -25,
                        left: '50%',
                        width: 'calc(100% - 32px)',
                        maxWidth: 'calc(100% - 32px)',
                        height: 25,
                        transform: 'translateX(-50%)',
                        boxSizing: 'border-box',
                        fontSize: attrs.text['font-size'] || 14,
                        color: attrs.text.fill || '#000',
                        fontFamily: 'Indigo, Arial, sans-serif',
                        textAlign: 'center',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'all',
                        lineHeight: '20px',
                        padding: '2px 8px',
                        contain: 'paint',
                    }}
                >
                    {displayName} {/* Use the displayName variable */}
                </div>
                <Box
                    position="absolute"
                    top="-6px"
                    left="0"
                    right="0"
                    height="12px"
                    pointerEvents="all"
                />
                <Box
                    position="absolute"
                    bottom="-6px"
                    left="0"
                    right="0"
                    height="12px"
                    pointerEvents="all"
                />
                <Box
                    position="absolute"
                    top="0"
                    bottom="0"
                    left="-6px"
                    width="12px"
                    pointerEvents="all"
                />
                <Box
                    position="absolute"
                    top="0"
                    bottom="0"
                    right="-6px"
                    width="12px"
                    pointerEvents="all"
                />
            </Box>
        </>
    );
};

export default memo(GroupNode);
