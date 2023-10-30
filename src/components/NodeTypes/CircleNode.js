import { Box } from '@chakra-ui/react';
import React from 'react';
import { Handle, Position } from 'reactflow';
import { ReactSVG } from 'react-svg';

const CircleNode = ({ data, selected }) => {
    const { id, name, size, attrs, icon, activityName } = data;
    const svgPath = `step-images/${icon.path}`;

    // Default name value if it's not available
    const displayName = name?.value || '';

    // Step description value if it's available
    const stepDescription = data.stepDescription?.value || '';

    // Calculate the translateY value to align the description box at the bottom of the StepNode
    const translateYValue = size?.height ? size?.height + 10 : 70; // You can adjust the offset (10) as needed

    const backgroundColor =
        activityName === 'StartActivity' ? '#f7b618' : '#29bdbe';

    return (
        <>
            <div
                style={{
                    position: 'relative',
                    width: size?.width || 100,
                    height: size?.height || 100,
                    borderRadius: '50%', // Set borderRadius to create a circle
                    backgroundColor,
                    filter: selected ? 'brightness(110%)' : 'none',
                    color: '#fff',
                    fontSize: attrs?.['.descriptiontext']?.['font-size'] || 11,
                    textAlign: 'center',
                    fontFamily: 'Indigo, Arial, sans-serif',
                    cursor: 'move',
                }}
            >
                {activityName !== 'EndActivity' && (
                    <Handle
                        type="source"
                        position={Position.Right}
                        id={`${id}-right`}
                    />
                )}
                {activityName !== 'StartActivity' && (
                    <Handle
                        type="target"
                        position={Position.Left}
                        id={`${id}-left`}
                    />
                )}
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    height="100%"
                >
                    <ReactSVG
                        beforeInjection={(svg) => {
                            svg.setAttribute('width', '24px');
                            svg.setAttribute('height', '24px');
                            svg.setAttribute('color', icon.color);
                        }}
                        src={svgPath}
                    />
                    {displayName} {/* Use the displayName variable */}
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
                </Box>
            </div>
        </>
    );
};

export default CircleNode;
