import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import SvgIcon from '../../ui/SvgIcon';
import { preloadTemplateData } from '../../../utils/templateLoader';

const Step = ({
    stepName,
    stepImage,
    stepImageColor,
    stepType,
    activityName,
    stepData,
}) => {
    const dragImageRef = useRef(null);
    const dragPreviewRef = useRef(null);
    const animationFrameRef = useRef(null);
    const dragPositionRef = useRef({ x: 0, y: 0 });
    const nativeDragImageRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const updateDragPreviewPosition = () => {
        animationFrameRef.current = null;
        if (!dragPreviewRef.current) return;

        const { x, y } = dragPositionRef.current;
        dragPreviewRef.current.style.transform = `translate3d(${x - 50}px, ${y - 50}px, 0)`;
    };

    const scheduleDragPreviewPosition = (x, y) => {
        if (x === 0 && y === 0) return;
        dragPositionRef.current = { x, y };
        if (animationFrameRef.current === null) {
            animationFrameRef.current = requestAnimationFrame(
                updateDragPreviewPosition
            );
        }
    };

    useEffect(() => {
        if (isDragging) {
            updateDragPreviewPosition();
        }

        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };
    }, [isDragging]);

    const onDragStart = (event) => {
        if (stepType === 'Template' && typeof stepData !== 'object') {
            preloadTemplateData();
        }
        event.dataTransfer.setData(
            'application/json',
            JSON.stringify({
                stepType,
                activityName,
                stepData,
            })
        ); // Use 'application/json' as the data type
        if (!nativeDragImageRef.current) {
            const transparentImage = document.createElement('canvas');
            transparentImage.width = 1;
            transparentImage.height = 1;
            nativeDragImageRef.current = transparentImage;
        }
        event.dataTransfer.setDragImage(nativeDragImageRef.current, 0, 0);
        scheduleDragPreviewPosition(event.clientX, event.clientY);
        setIsDragging(true);
    };

    const onDragEnd = () => {
        setIsDragging(false);
        if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
    };

    const onDrag = (event) => {
        scheduleDragPreviewPosition(event.clientX, event.clientY);
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
                <SvgIcon
                    color={stepImageColor}
                    src={`step-images/${stepImage}`}
                />
                <div>{stepName}</div>
            </div>

            {/* Create the custom drag image */}
            {isDragging &&
                typeof document !== 'undefined' &&
                createPortal(
                    <div
                        ref={dragPreviewRef}
                        style={{
                            zIndex: 2147483647,
                            position: 'fixed',
                            top: 0,
                            left: 0,
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
                            willChange: 'transform',
                        }}
                    >
                        <SvgIcon
                            color={stepImageColor}
                            src={`step-images/${stepImage}`}
                        />
                        <div>{stepName}</div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default Step;
