import { Box } from '@chakra-ui/react';
import { memo } from 'react';
import { NodeResizer } from '@xyflow/react';
import { useWorkflowActions } from '../../contexts/NodeContext';

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
            />
            <Box
                background="none"
                position="relative"
                width="100%"
                height="100%"
                border={selected ? '3px dashed black' : '2px dashed #757575'}
                cursor="move"
            >
                <div
                    style={{
                        position: 'absolute',
                        top: -25,
                        left: '50%', // Center the text horizontally
                        transform: 'translateX(-50%)', // Translate the text back by half of its own width
                        fontSize: attrs.text['font-size'] || 14,
                        color: attrs.text.fill || '#000',
                        fontFamily: 'Indigo, Arial, sans-serif',
                        textAlign: 'center',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {displayName} {/* Use the displayName variable */}
                </div>
            </Box>
        </>
    );
};

export default memo(GroupNode);
