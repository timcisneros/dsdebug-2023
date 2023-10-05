import { useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

const Step = ({
    stepName,
    stepImage,
    stepImageColor,
    stepType,
    activityName,
    stepData,
}) => {
    const dragImageRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragImageX, setDragImageX] = useState(0);
    const [dragImageY, setDragImageY] = useState(0);

    const onDragStart = (event) => {
        event.dataTransfer.setData(
            'application/json',
            JSON.stringify({
                stepType,
                activityName,
                stepData,
            })
        ); // Use 'application/json' as the data type
        setIsDragging(true);
    };

    const onDragEnd = () => {
        setIsDragging(false);
        setDragImageX(0);
        setDragImageY(0);
    };

    const onDrag = (event) => {
        setDragImageX(event.clientX - 50); // Adjust the offset here if necessary
        setDragImageY(event.clientY - 50); // Adjust the offset here if necessary
    };

    return (
        <>
            <div
                draggable
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDrag={onDrag}
                ref={dragImageRef}
                style={{
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                    borderRadius: '3px',
                    border:
                        stepType === 'Template'
                            ? '2px dashed #757575'
                            : '2px solid #757575',
                    color: '#000',
                    fontSize: '11px',
                    lineHeight: '1.5',
                    textAlign: 'center',
                    fontFamily: 'Indigo, Arial, sans-serif',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    cursor: 'move', // Add a cursor move on hover to indicate it's movable
                    backgroundColor: '#fff',
                    opacity: isDragging ? 0 : 1, // Hide the original component during drag
                }}
            >
                <ReactSVG
                    beforeInjection={(svg) => {
                        svg.setAttribute('width', '24px');
                        svg.setAttribute('height', '24px');
                        svg.setAttribute('color', stepImageColor);
                    }}
                    src={`step-images/${stepImage}`}
                />
                <div>{stepName}</div>
            </div>

            {/* Create the custom drag image */}
            {isDragging && dragImageX && dragImageY ? (
                <>
                    <div
                        style={{
                            zIndex: 1,
                            position: 'fixed',
                            top: dragImageY,
                            left: dragImageX,
                            width: '100px',
                            height: '100px',
                            borderRadius: '3px',
                            border:
                                stepType === 'Template'
                                    ? '2px dashed #757575'
                                    : '2px solid #757575',
                            color: '#000',
                            fontSize: '11px',
                            lineHeight: '1.5',
                            textAlign: 'center',
                            fontFamily: 'Indigo, Arial, sans-serif',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            backgroundColor: '#fff',
                            pointerEvents: 'none', // Disable pointer events for the custom drag image
                        }}
                    >
                        <ReactSVG
                            beforeInjection={(svg) => {
                                svg.setAttribute('width', '24px');
                                svg.setAttribute('height', '24px');
                                svg.setAttribute('color', stepImageColor);
                            }}
                            src={`step-images/${stepImage}`}
                        />
                        <div>{stepName}</div>
                    </div>
                    {/* <div
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                        onDrag={onDrag}
                        ref={dragImageRef}
                        style={{
                            position: 'relative',
                            transform: 'translateY(-100%)',
                            width: '100px',
                            height: '100px',
                            borderRadius: '3px',
                            border:
                                stepType === 'Template'
                                    ? '2px dashed #757575'
                                    : '2px solid #757575',
                            color: '#000',
                            fontSize: '11px',
                            lineHeight: '1.5',
                            textAlign: 'center',
                            fontFamily: 'Indigo, Arial, sans-serif',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            cursor: 'move', // Add a cursor move on hover to indicate it's movable
                            backgroundColor: '#fff',
                        }}
                    >
                        <ReactSVG
                            beforeInjection={(svg) => {
                                svg.setAttribute('width', '24px');
                                svg.setAttribute('height', '24px');
                                svg.setAttribute('color', stepImageColor);
                            }}
                            src={`step-images/${stepImage}`}
                        />
                        <div>{stepName}</div>
                    </div> */}
                </>
            ) : (
                <div />
            )}
        </>
    );
};

export default Step;
