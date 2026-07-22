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
import { varDataMapping } from './varData';
import { useWorkflowActions } from '../../../contexts/NodeContext';
import { toaster } from '../../ui/toaster';

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
                    <Accordion.ItemTrigger
                        width="100%"
                        minHeight="36px"
                        px={2}
                        py={1.5}
                        paddingEnd={deletable ? 10 : 2}
                        gap={2}
                    >
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
                                        const renamed = onRename?.(
                                            label,
                                            newName
                                        );
                                        if (renamed !== false) {
                                            setIsEditing?.(false);
                                        }
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
                                    variant="ghost"
                                    color="gray.400"
                                    background="transparent"
                                    _hover={{ color: 'gray.600', background: 'gray.100' }}
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
                    <Accordion.ItemBody pl={3} pr={0} pb={1} width="100%">
                        {hasChildren && (
                            <Accordion.Root multiple width="100%">
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

const CollapsibleTree = ({ definedVariable }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const inputRef = useRef(null); // Create a ref for the Input element
    const { deleteDefinedVariable, renameDefinedVariable } =
        useWorkflowActions();

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
            const result = deleteDefinedVariable(variableName);
            if (!result.ok) {
                toaster.create({
                    title: 'Variable is still in use',
                    description: result.error,
                    type: 'warning',
                    duration: 7000,
                    closable: true,
                });
            }
        },
        [deleteDefinedVariable]
    );

    const handleRenameVariable = useCallback(
        (oldName, newName) => {
            const result = renameDefinedVariable(oldName, newName);
            if (!result.ok) {
                toaster.create({
                    title: 'Unable to rename variable',
                    description: result.error,
                    type: 'error',
                    duration: 5000,
                    closable: true,
                });
            }
            return result.ok;
        },
        [renameDefinedVariable]
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
                            <Accordion.ItemTrigger
                                width="100%"
                                minHeight="36px"
                                px={2}
                                py={1.5}
                                paddingEnd={
                                    definedVariable.value.deletable ? 10 : 2
                                }
                                gap={2}
                            >
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
                                                const renamed =
                                                    handleRenameVariable(
                                                    definedVariable.value.name,
                                                    newName
                                                );
                                                if (renamed) {
                                                    setIsEditing(false);
                                                }
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
                                            variant="ghost"
                                            color="gray.400"
                                            background="transparent"
                                            _hover={{ color: 'gray.600', background: 'gray.100' }}
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
