import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Box, IconButton, Input } from '@chakra-ui/react';
import { AiOutlineUpload, AiOutlineDownload } from 'react-icons/ai';
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi';
import {
    useSelection,
    useWorkflowActions,
    useWorkflowHistory,
    useWorkflowMetadata,
} from '../contexts/NodeContext';

const Header = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const { getData, replaceData, setData } = useWorkflowActions();
    const { workflowName } = useWorkflowMetadata();
    const {
        canRedo,
        canUndo,
        redo,
        setDefaultNodePositions,
        undo,
    } = useWorkflowHistory();
    const { setSelectedNodeIds, setSelectedEdgeId } = useSelection();
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');

    const inputRef = useRef(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    if (!jsonData || !Array.isArray(jsonData.cells)) {
                        throw new Error('Workflow JSON must contain cells.');
                    }
                    const importedNodePositions = Object.fromEntries(
                        jsonData.cells
                            .filter((cell) => cell.type !== 'springcm.Link')
                            .map((cell) => [
                                cell.id,
                                cell.position ?? { x: 0, y: 0 },
                            ])
                    );
                    replaceData(jsonData);
                    setErrorMessage(null);
                    setDefaultNodePositions(importedNodePositions);
                    setSelectedNodeIds(null);
                    setSelectedEdgeId(null);
                } catch (error) {
                    setErrorMessage('Error parsing JSON file.');
                }
            };
            reader.readAsText(file);
        }
    };

    const handleDownload = () => {
        // Convert the data state to JSON string
        const jsonDataString = JSON.stringify(getData());

        // Create a Blob with the JSON data
        const blob = new Blob([jsonDataString], { type: 'application/json' });

        // Create a download link and trigger the download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${workflowName?.value}.json`;
        a.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        const handleDocumentClick = (e) => {
            // Check if the click target is outside the input element
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setIsEditing(false);
            }
        };

        // Add event listener to the mousedown event on the document
        document.addEventListener('mousedown', handleDocumentClick);

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, []);

    // useEffect to focus the Input when isEditing is set to true
    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing]);

    useEffect(() => {
        const handleHistoryShortcut = (event) => {
            const target = event.target;
            const isEditableTarget =
                target instanceof HTMLElement &&
                (target.isContentEditable ||
                    ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
            if (isEditableTarget || (!event.ctrlKey && !event.metaKey)) return;

            const key = event.key.toLowerCase();
            const shouldRedo =
                (key === 'z' && event.shiftKey) ||
                (key === 'y' && !event.shiftKey);
            const shouldUndo = key === 'z' && !event.shiftKey;
            if (!shouldUndo && !shouldRedo) return;

            const changed = shouldRedo ? redo() : undo();
            if (changed) event.preventDefault();
        };

        window.addEventListener('keydown', handleHistoryShortcut);
        return () =>
            window.removeEventListener('keydown', handleHistoryShortcut);
    }, [redo, undo]);

    const handleRenameWorkflow = useCallback(
        (nextName) => {
            // Find the cell with activityName 'StartActivity'
            setData((currentData) => ({
                ...currentData,
                cells: currentData.cells.map((cell) =>
                    cell.activityName === 'StartActivity'
                        ? {
                              ...cell,
                              workflowName: {
                                  type: 'String',
                                  value: nextName,
                              },
                          }
                        : cell
                ),
            }));
        },
        [setData]
    );

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            height="3rem"
            backgroundColor="#212121"
            color="#fff"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            paddingX={5}
            fontSize="1.2rem"
            zIndex={1}
        >
            <Box
                onClick={() => {
                    // Always set the Input value back to the original name when Box is clicked
                    setNewName(workflowName?.value ?? '');
                    setIsEditing(true);
                }}
                width="100%"
                maxWidth="85vw"
            >
                {isEditing ? (
                    <div position="relative">
                        <Input
                            maxLength={200}
                            fontSize="1.2rem"
                            height="max-content"
                            ref={inputRef}
                            spellCheck="false"
                            variant="flushed"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleRenameWorkflow(newName);
                                    setIsEditing(false);
                                }
                            }}
                        />
                        <Box
                            position="absolute"
                            top={0}
                            right={0}
                            mt="48px"
                            width="100vw"
                            height="calc(100vh - 48px)"
                        />
                    </div>
                ) : (
                    <Box
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                    >
                        {workflowName?.value || '[Unnamed Workflow]'}
                    </Box>
                )}
            </Box>

            <Box display="flex" alignItems="center" flexShrink={0}>
                <span style={{ color: 'red', marginRight: '10px' }}>
                    {errorMessage}
                </span>
                <IconButton
                    rounded="full"
                    backgroundColor="transparent"
                    color="#fff"
                    aria-label="Undo workflow change"
                    title="Undo (Ctrl/Cmd+Z)"
                    variant="solid"
                    size="md"
                    disabled={!canUndo}
                    onClick={undo}
                    _hover={{ backgroundColor: 'white', color: '#000' }}
                    _disabled={{ opacity: 0.35, cursor: 'not-allowed' }}
                >
                    <FiRotateCcw />
                </IconButton>
                <IconButton
                    rounded="full"
                    backgroundColor="transparent"
                    color="#fff"
                    aria-label="Redo workflow change"
                    title="Redo (Ctrl/Cmd+Shift+Z or Ctrl/Cmd+Y)"
                    variant="solid"
                    size="md"
                    disabled={!canRedo}
                    onClick={redo}
                    ml={1}
                    _hover={{ backgroundColor: 'white', color: '#000' }}
                    _disabled={{ opacity: 0.35, cursor: 'not-allowed' }}
                >
                    <FiRotateCw />
                </IconButton>
                <label htmlFor="upload-input">
                    <IconButton
                        rounded="full"
                        backgroundColor="transparent"
                        color="#fff"
                        as="span"
                        aria-label="Upload JSON File"
                        variant="solid"
                        size="md"
                        cursor="pointer"
                        _hover={{
                            backgroundColor: 'white',
                            color: '#000',
                        }}
                    >
                        <AiOutlineUpload />
                    </IconButton>
                    <input
                        id="upload-input"
                        type="file"
                        accept=".json"
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                    />
                </label>
                <IconButton
                    rounded="full"
                    backgroundColor="transparent"
                    color="#fff"
                    as="span"
                    aria-label="Download JSON File"
                    variant="solid"
                    size="md"
                    cursor="pointer"
                    ml={1}
                    _hover={{
                        backgroundColor: 'white',
                        color: '#000',
                    }}
                    onClick={handleDownload}
                >
                    <AiOutlineDownload />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Header;
