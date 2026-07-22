import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import SvgIcon from '../ui/SvgIcon';

const DiamondNode = ({ data, selected }) => {
    const { id, name, attrs, icon, errorState } = data;
    const svgPath = `step-images/${icon.path}`;

    // Default name value if it's not available
    const displayName = name?.value || '';

    // Step description value if it's available
    const stepDescription = data.stepDescription?.value || '';

    const diamondFill = selected ? '#FDFF6C' : attrs?.svg?.fill || '#fff';
    const diamondStroke = errorState ? '#ff4f19' : '#757575';

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                color: '#000',
                fontSize: attrs?.['.descriptiontext']?.['font-size'] || 11,
                textAlign: 'center',
                fontFamily: 'Indigo, Arial, sans-serif',
                cursor: 'move',
            }}
        >
            <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'visible',
                    pointerEvents: 'none',
                }}
            >
                <polygon
                    points="50,0 100,50 50,100 0,50"
                    fill={diamondFill}
                    stroke={diamondStroke}
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
            <Handle
                type="source"
                position={Position.Right}
                id={`${id}-right`}
                style={{ zIndex: 2 }}
            />
            <Handle
                type="target"
                position={Position.Left}
                id={`${id}-left`}
                style={{ zIndex: 2 }}
            />
            <div
                style={{
                    position: 'absolute',
                    inset: '18%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 1.2,
                    pointerEvents: 'none',
                }}
            >
                <SvgIcon
                    color={icon.color}
                    src={svgPath}
                    size="20px"
                />
                <div>{displayName}</div>
            </div>
            {stepDescription && (
                <div
                    style={{
                        position: 'absolute',
                        top: 'calc(100% + 10px)',
                        left: '50%',
                        padding: '5px',
                        backgroundColor: '#212121',
                        color: '#fff',
                        textAlign: 'center',
                        borderRadius: '5px',
                        transform: 'translateX(-50%)',
                        fontSize: 11,
                        width: '100%',
                    }}
                >
                    {stepDescription}
                </div>
            )}
        </div>
    );
};

export default memo(DiamondNode);
