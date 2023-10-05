import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Box, IconButton, Input } from '@chakra-ui/react';
import { AiOutlineUpload, AiOutlineDownload } from 'react-icons/ai';
import { useNode } from '../contexts/NodeContext';

const Header = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const {
        data,
        setData,
        workflowName,
        setWorkflowName,
        setNewNodesAdded,
        setSelectedNodes,
        setDefaultNodePositions,
    } = useNode();
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
                    setData(jsonData);
                    setErrorMessage(null);
                    setNewNodesAdded(false);
                    setDefaultNodePositions(null);
                    setSelectedNodes(null);
                } catch (error) {
                    setErrorMessage('Error parsing JSON file.');
                }
            };
            reader.readAsText(file);
        }
    };

    const handleDownload = () => {
        // Convert the data state to JSON string
        const jsonDataString = JSON.stringify(data);

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
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleRenameWorkflow = useCallback(
        (oldName, newName) => {
            // Validate the new name to disallow spaces and symbols other than underscores
            // const isValidName = /^[A-Za-z0-9_]+$/.test(newName);

            // if (!isValidName) {
            //     // Show an error message or handle the validation error in your preferred way
            //     console.error(
            //         'Invalid variable name. Only letters, numbers, and underscores are allowed.'
            //     );
            //     return;
            // }

            // Find the cell with activityName 'StartActivity'
            const startActivityCellIndex = data.cells.findIndex(
                (cell) => cell.activityName === 'StartActivity'
            );

            if (startActivityCellIndex !== -1) {
                // Create a new data object with the updated list of variables
                const updatedData = {
                    ...data,
                    cells: data.cells.map((cell, index) =>
                        index === startActivityCellIndex
                            ? {
                                  ...cell,
                                  workflowName: {
                                      type: 'String',
                                      value: newName,
                                  },
                              }
                            : cell
                    ),
                };

                // Update the definedVariables array in the context
                // setWorkflowName({
                //     type: 'String',
                //     value: newName,
                // });

                // Use setData to update the data object in the context
                setData(updatedData);
            }
        },
        [data, setData, workflowName, setWorkflowName]
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
                onClick={(e) => {
                    setIsEditing(true);
                    // If renaming is toggled off, set the Input value back to the original name
                    if (!isEditing) {
                        setNewName(workflowName.value);
                    }
                }}
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
                                    handleRenameWorkflow(
                                        workflowName.value,
                                        newName
                                    ); // Pass the previous name and the new name
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
                    <Box>{workflowName?.value || 'Workflow'}</Box>
                )}
            </Box>

            <Box>
                <span style={{ color: 'red', marginRight: '10px' }}>
                    {errorMessage}
                </span>
                <label htmlFor="upload-input">
                    <IconButton
                        isRound={true}
                        backgroundColor="transparent"
                        color="#fff"
                        as="span"
                        aria-label="Upload JSON File"
                        icon={<AiOutlineUpload />}
                        variant="solid"
                        size="md"
                        cursor="pointer"
                        _hover={{
                            backgroundColor: 'white',
                            color: '#000',
                        }}
                    />
                    <input
                        id="upload-input"
                        type="file"
                        accept=".json"
                        style={{ display: 'none' }}
                        onChange={handleFileUpload}
                    />
                </label>
                <IconButton
                    isRound={true}
                    backgroundColor="transparent"
                    color="#fff"
                    as="span"
                    aria-label="Download JSON File"
                    icon={<AiOutlineDownload />}
                    variant="solid"
                    size="md"
                    cursor="pointer"
                    ml={1}
                    _hover={{
                        backgroundColor: 'white',
                        color: '#000',
                    }}
                    onClick={handleDownload}
                />
            </Box>
        </Box>
    );
};

export default Header;
