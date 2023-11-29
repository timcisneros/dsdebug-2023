import { useState, useEffect, useRef, memo, useCallback, useMemo } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Input,
    useClipboard,
    Flex,
} from '@chakra-ui/react';
import {
    ChevronUpIcon,
    ChevronRightIcon,
    SettingsIcon,
} from '@chakra-ui/icons';
import xmljs from 'xml-js';
import { useNode } from '../../../contexts/NodeContext';
import { varDataMapping } from './varData';

const TreeItem = memo(
    ({
        label,
        childNodes,
        icon,
        optionsMenu,
        onDelete,
        onRename,
        deletable,
        isEditing,
        setIsEditing,
        newName,
        setNewName,
        inputRef,
    }) => {
        // Check if the node has children
        const hasChildren = childNodes && childNodes.length > 0;
        const { hasCopied, onCopy, onPaste } = useClipboard();
        const handlePasteFromClipboard = () => {
            if (hasCopied) {
                const clipboardData = onPaste();
                // Validate the clipboard data as XML
                if (validateXml(clipboardData)) {
                    const parsedData = parseXml(clipboardData);
                    if (parsedData) {
                        // Update the current node with the new data down the tree
                        setNewNodeData(parsedData.nodes);
                    }
                } else {
                    // Show an error message when the XML data is invalid
                    alert('Invalid XML data in clipboard.');
                }
            }
        };

        // Function to validate XML data
        const validateXml = (xmlData) => {
            // Add your XML validation logic here
            // Return true if the XML is valid, otherwise return false
            return true;
        };

        // Function to parse the XML string
        const parseXml = (xmlData) => {
            try {
                const options = {
                    compact: true, // Convert XML to JavaScript object
                };
                const jsonData = xmljs.xml2js(xmlData, options);
                return jsonData;
            } catch (error) {
                console.error('Error parsing XML:', error);
                return null;
            }
        };
        // Function to set the new data for the current node
        const setNewNodeData = (newData) => {
            // Call the onRename function to set the new data for the current node
            onRename(label, newData);
        };

        return (
            <AccordionItem
                _active={{ backgroundColor: '#ffffff0a' }}
                border="none"
            >
                {({ isExpanded }) => (
                    <>
                        <Flex alignItems="center" position="relative">
                            <AccordionButton>
                                <AccordionIcon
                                    as={
                                        isExpanded
                                            ? ChevronUpIcon
                                            : ChevronRightIcon
                                    }
                                />
                                <Box>{icon}</Box>
                                {isEditing ? (
                                    <Input
                                        height="max-content"
                                        ref={inputRef}
                                        ml={1}
                                        mr={3}
                                        spellCheck="false"
                                        variant="flushed"
                                        value={newName}
                                        onChange={(e) =>
                                            setNewName(e.target.value)
                                        }
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                onRename(label, newName); // Pass the previous name and the new name
                                                setIsEditing(false);
                                            }
                                        }}
                                    />
                                ) : (
                                    <Box
                                        pl={1}
                                        whiteSpace="nowrap"
                                        overflow="hidden"
                                        textOverflow="ellipsis"
                                    >
                                        {label}
                                    </Box>
                                )}
                            </AccordionButton>
                            {deletable && (
                                <Menu>
                                    <MenuButton
                                        position="absolute"
                                        right="0"
                                        size="xs"
                                        mx={2}
                                        as={SettingsIcon}
                                        cursor="pointer"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent the click event from bubbling up to the AccordionButton
                                        }}
                                    />
                                    <MenuList>
                                        <MenuItem
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDelete(label);
                                            }}
                                        >
                                            Delete
                                        </MenuItem>
                                        <MenuItem
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsEditing(!isEditing);
                                                // If renaming is toggled off, set the Input value back to the original name
                                                if (!isEditing) {
                                                    setNewName(label);
                                                }
                                            }}
                                        >
                                            Rename
                                        </MenuItem>
                                        {/* <MenuItem
                                        onClick={handlePasteFromClipboard}
                                    >
                                        XML from clipboard
                                    </MenuItem> */}
                                    </MenuList>
                                </Menu>
                            )}
                        </Flex>

                        <AccordionPanel
                            pl={4}
                            pb={2}
                            display={isExpanded ? 'block' : 'none'}
                            minWidth="200px"
                        >
                            {hasChildren && (
                                <Accordion allowMultiple>
                                    {childNodes.map((child) => (
                                        <TreeItem
                                            key={`child-${child.name}`}
                                            label={child.name}
                                            childNodes={child.nodes}
                                            optionsMenu={optionsMenu}
                                            onDelete={onDelete}
                                            deletable={child.deletable}
                                        />
                                    ))}
                                </Accordion>
                            )}
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        );
    }
);

TreeItem.displayName = 'TreeItem';

const CollapsibleTree = ({
    definedVariable,
    data,
    setData,
    definedVariables,
    setDefinedVariables,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const inputRef = useRef(null); // Create a ref for the Input element

    const icon = varDataMapping[definedVariable.value.displayType].icon;

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
            //Optional added to current to prevent crash for XML var types
            inputRef.current?.focus();
        }
    }, [isEditing]);

    // Function to handle variable deletion
    const handleDeleteVariable = useCallback(
        (variableName) => {
            const updatedVariables = definedVariables.filter(
                (variable) => variable.value.name !== variableName
            );

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
                                  definedVariables: {
                                      type: 'Variable',
                                      value: updatedVariables,
                                  },
                              }
                            : cell
                    ),
                };

                // Use setData to update the data object in the context
                setData(updatedData);

                // Update the definedVariables array in the context
                setDefinedVariables(updatedVariables);
            }
        },
        [definedVariables, data]
    );

    const handleRenameVariable = useCallback(
        (oldName, newName) => {
            // Validate the new name to disallow spaces and symbols other than underscores
            const isValidName = /^[A-Za-z0-9_]+$/.test(newName);

            if (!isValidName) {
                // Show an error message or handle the validation error in your preferred way
                console.error(
                    'Invalid variable name. Only letters, numbers, and underscores are allowed.'
                );
                return;
            }

            // Update the variable name in the definedVariables array
            const updatedVariables = definedVariables.map((variable) =>
                variable.value.name === oldName
                    ? {
                          ...variable,
                          value: {
                              ...variable.value,
                              name: newName,
                              displayName: newName,
                          },
                      }
                    : variable
            );

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
                                  definedVariables: {
                                      type: 'Variable',
                                      value: updatedVariables,
                                  },
                              }
                            : cell
                    ),
                };

                // Use setData to update the data object in the context
                setData(updatedData);

                // Update the definedVariables array in the context
                setDefinedVariables(updatedVariables);
            }
        },
        [definedVariables, data]
    );

    const treeItemComponent = useMemo(
        () => (
            <TreeItem
                key={`parent-${definedVariable.value.name}`}
                label={definedVariable.value.name}
                childNodes={definedVariable.value.schema.nodes}
                icon={icon}
                onDelete={handleDeleteVariable}
                onRename={handleRenameVariable} // Pass the handleRenameVariable function
                deletable={definedVariable.value.deletable}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                newName={newName}
                setNewName={setNewName}
                inputRef={inputRef}
            />
        ),
        [definedVariables, data]
    );

    return (
        <>
            <Accordion allowMultiple>
                {Object.keys(definedVariable.value.schema).length !== 0 ? (
                    <Box background="#fff" my={2}>
                        {treeItemComponent}
                    </Box>
                ) : (
                    <AccordionItem
                        cursor="pointer"
                        border="none"
                        background="#fff"
                        my={2}
                        width="100%"
                    >
                        <Flex alignItems="center" position="relative">
                            <AccordionButton>
                                <Box>{icon}</Box>
                                {isEditing ? (
                                    <Input
                                        height="max-content"
                                        ref={inputRef}
                                        ml={1}
                                        mr={3}
                                        spellCheck="false"
                                        variant="flushed"
                                        value={newName}
                                        onChange={(e) =>
                                            setNewName(e.target.value)
                                        }
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleRenameVariable(
                                                    definedVariable.value.name,
                                                    newName
                                                ); // Pass the previous name and the new name
                                                setIsEditing(false);
                                            }
                                        }}
                                    />
                                ) : (
                                    <Box
                                        pl={1}
                                        whiteSpace="nowrap"
                                        overflow="hidden"
                                        textOverflow="ellipsis"
                                    >
                                        {definedVariable.value.displayName}
                                    </Box>
                                )}
                            </AccordionButton>
                            {definedVariable.value.deletable && (
                                <Menu>
                                    <MenuButton
                                        position="absolute"
                                        right="0"
                                        mx={2}
                                        size="xs"
                                        as={SettingsIcon}
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent the click event from bubbling up to the AccordionButton
                                        }}
                                    />
                                    <MenuList>
                                        <MenuItem
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDeleteVariable(
                                                    definedVariable.value.name
                                                );
                                            }}
                                        >
                                            Delete
                                        </MenuItem>
                                        <MenuItem
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsEditing(!isEditing);
                                                // If renaming is toggled off, set the Input value back to the original name
                                                if (!isEditing) {
                                                    setNewName(
                                                        definedVariable.value
                                                            .name
                                                    );
                                                }
                                            }}
                                        >
                                            Rename
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            )}
                        </Flex>
                    </AccordionItem>
                )}
            </Accordion>
        </>
    );
};

export default memo(CollapsibleTree);
