import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import SvgIcon from '../ui/SvgIcon';

const StepNode = ({ data, selected }) => {
    const { id, name, size, attrs, icon, errorState } = data;
    const svgPath = `step-images/${icon.path}`;

    // Default name value if it's not available
    const displayName = name?.value || '';

    // Step description value if it's available
    const stepDescription = data.stepDescription?.value || '';

    // Calculate the translateY value to align the description box at the bottom of the StepNode
    const translateYValue = size?.height ? size?.height + 10 : 70; // You can adjust the offset (10) as needed

    // State to keep track of the background color

    return (
        <div key={id}>
            <div
                className={selected ? 'selected' : ''}
                style={{
                    position: 'relative', // Set position to relative
                    width: size?.width || 100,
                    height: size?.height || 100,
                    borderRadius: 3,
                    border: errorState
                        ? '2px solid #ff4f19'
                        : '2px solid #757575',
                    color: '#000',
                    fontSize: attrs?.['.descriptiontext']?.['font-size'] || 11,
                    lineHeight: 1.5,
                    textAlign: 'center',
                    fontFamily: 'Indigo,Arial,sans-serif',
                    display: 'flex', // Use flex layout to position elements vertically
                    flexDirection: 'column', // Stack elements vertically
                    alignItems: 'center', // Center elements horizontally
                    justifyContent: 'space-around', // Center elements vertically
                    cursor: 'move', // Add a cursor move on hover to indicate it's movable
                    backgroundColor: selected ? '#FDFF6C' : '#fff',
                }}
            >
                <div>
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
                </div>
                <SvgIcon
                    color={icon.color}
                    src={svgPath}
                />
                <div>{displayName}</div> {/* Use the displayName variable */}
                {stepDescription && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '-5px',
                            padding: '5px',
                            backgroundColor: '#212121',
                            color: '#fff',
                            textAlign: 'center',
                            borderRadius: '5px',
                            transformOrigin: '0 0',
                            transform: `translateY(${translateYValue}px)`, // Use the calculated translateY value
                        }}
                    >
                        {stepDescription}
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(StepNode);
