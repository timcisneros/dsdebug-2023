import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import SvgIcon from '../ui/SvgIcon';

const DiamondNode = ({ data, selected }) => {
    const { id, name, size, attrs, icon, errorState } = data;
    const svgPath = `step-images/${icon.path}`;

    // Default name value if it's not available
    const displayName = name?.value || '';

    // Step description value if it's available
    const stepDescription = data.stepDescription?.value || '';

    // Calculate the translateY value to align the description box at the bottom of the DiamondNode
    const translateYValue = size.height ? size.height + 10 : 70; // You can adjust the offset (10) as needed

    return (
        <>
            <div
                style={{
                    position: 'relative',
                    width: 93,
                    height: 93,
                    background: selected ? '#FDFF6C' : attrs?.svg?.fill,
                    border: errorState
                        ? '2px solid #ff4f19'
                        : '2px solid #757575',
                    color: '##000',
                    fontSize: attrs?.['.descriptiontext']?.['font-size'] || 11,
                    borderRadius: 3,
                    textAlign: 'center',
                    fontFamily: 'Indigo, Arial, sans-serif',
                    transform: 'rotate(45deg)', // Rotate the diamond shape
                    cursor: 'move',
                }}
            >
                <Handle
                    type="source"
                    position={Position.Right}
                    id={`${id}-right`}
                />
                <Handle
                    type="target"
                    position={Position.Left}
                    id={`${id}-left`}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%', // Center the text horizontally
                        transform: 'translate(-50%, -50%) rotate(-45deg)', // Rotate the text back to its original position
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <SvgIcon
                        color={icon.color}
                        src={svgPath}
                    />
                    {displayName} {/* Use the displayName variable */}
                </div>
            </div>
            {stepDescription && (
                <div
                    style={{
                        position: 'absolute',
                        top: '15px',
                        padding: '5px',
                        backgroundColor: '#212121',
                        color: '#fff',
                        textAlign: 'center',
                        borderRadius: '5px',
                        transformOrigin: '0 0',
                        transform: `translateY(${translateYValue}px)`, // Use the calculated translateY value
                        fontSize: 11,
                        width: '100%',
                    }}
                >
                    {stepDescription}
                </div>
            )}
        </>
    );
};

export default memo(DiamondNode);
