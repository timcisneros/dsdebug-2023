import { useState, useEffect, useRef, memo, useCallback } from 'react';
import {
    Accordion,
    Box,
    Menu,
    Input,
    Flex,
    IconButton,
    Portal,
} from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';
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
        return (
            <Accordion.Item
                value={label}
                _active={{ backgroundColor: '#ffffff0a' }}
                border="none"
            >
                <Flex alignItems="center" position="relative">
                    <Accordion.ItemTrigger>
                        <Accordion.ItemIndicator />
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
                                onChange={(e) => setNewName(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        onRename?.(label, newName);
                                        setIsEditing?.(false);
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
                    </Accordion.ItemTrigger>
                    {deletable && (
                        <Menu.Root>
                            <Menu.Trigger asChild>
                                <IconButton
                                    position="absolute"
                                    right="0"
                                    size="xs"
                                    mx={2}
                                    cursor="pointer"
                                    aria-label={`Options for ${label}`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <FiSettings />
                                </IconButton>
                            </Menu.Trigger>
                            <Portal>
                                <Menu.Positioner>
                                    <Menu.Content>
                                        <Menu.Item
                                            value="delete"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDelete?.(label);
                                            }}
                                        >
                                            Delete
                                        </Menu.Item>
                                        <Menu.Item
                                            value="rename"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsEditing?.(!isEditing);
                                                if (!isEditing) setNewName?.(label);
                                            }}
                                        >
                                            Rename
                                        </Menu.Item>
                                    </Menu.Content>
                                </Menu.Positioner>
                            </Portal>
                        </Menu.Root>
                    )}
                </Flex>
                <Accordion.ItemContent>
                    <Accordion.ItemBody pl={4} pb={2} minWidth="200px">
                        {hasChildren && (
                            <Accordion.Root multiple>
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
                            </Accordion.Root>
                        )}
                    </Accordion.ItemBody>
                </Accordion.ItemContent>
            </Accordion.Item>
        );
    }
);

TreeItem.displayName = 'TreeItem';

const CollapsibleTree = ({
    definedVariable,
    data,
    setData,
    definedVariables,
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

            }
        },
        [definedVariables, data, setData]
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

            }
        },
        [definedVariables, data, setData]
    );

    const treeItemComponent = (
        <TreeItem
            key={`parent-${definedVariable.value.name}`}
            label={definedVariable.value.name}
            childNodes={definedVariable.value.schema.nodes}
            icon={icon}
            onDelete={handleDeleteVariable}
            onRename={handleRenameVariable}
            deletable={definedVariable.value.deletable}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            newName={newName}
            setNewName={setNewName}
            inputRef={inputRef}
        />
    );

    return (
        <>
            <Accordion.Root multiple>
                {Object.keys(definedVariable.value.schema).length !== 0 ? (
                    <Box background="#fff" my={2}>
                        {treeItemComponent}
                    </Box>
                ) : (
                    <Accordion.Item
                        value={definedVariable.value.name}
                        cursor="pointer"
                        border="none"
                        background="#fff"
                        my={2}
                        width="100%"
                    >
                        <Flex alignItems="center" position="relative">
                            <Accordion.ItemTrigger>
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
                            </Accordion.ItemTrigger>
                            {definedVariable.value.deletable && (
                                <Menu.Root>
                                    <Menu.Trigger asChild>
                                        <IconButton
                                            position="absolute"
                                            right="0"
                                            mx={2}
                                            size="xs"
                                            aria-label={`Options for ${definedVariable.value.name}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FiSettings />
                                        </IconButton>
                                    </Menu.Trigger>
                                    <Portal>
                                        <Menu.Positioner>
                                            <Menu.Content>
                                                <Menu.Item
                                                    value="delete"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDeleteVariable(
                                                            definedVariable.value.name
                                                        );
                                                    }}
                                                >
                                                    Delete
                                                </Menu.Item>
                                                <Menu.Item
                                                    value="rename"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setIsEditing(!isEditing);
                                                        if (!isEditing) {
                                                            setNewName(
                                                                definedVariable.value.name
                                                            );
                                                        }
                                                    }}
                                                >
                                                    Rename
                                                </Menu.Item>
                                            </Menu.Content>
                                        </Menu.Positioner>
                                    </Portal>
                                </Menu.Root>
                            )}
                        </Flex>
                    </Accordion.Item>
                )}
            </Accordion.Root>
        </>
    );
};

export default memo(CollapsibleTree);
