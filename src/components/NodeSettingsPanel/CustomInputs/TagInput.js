import React, { useState, useEffect, useRef, memo } from 'react';
import {
    Box,
    Input,
    Tag,
    TagLabel,
    TagCloseButton,
    List,
    ListItem,
    FormControl,
    Text,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react';
import { ReactSVG } from 'react-svg';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useNode } from '../../../contexts/NodeContext';

function TagInput({
    field,
    variableName,
    editedNode,
    setEditedNode,
    path,
    handleUpdateNode,
    isArray,
    getNestedValue,
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [tags, setTags] = useState([]);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef(null);
    const [error, setError] = useState('');

    const updatedProperty = path.split('.')[1];

    const { definedVariables } = useNode();

    // Update tags when editedNode or variableName changes
    useEffect(() => {
        let newTags = [];
        if (typeof variableName === 'string' && variableName.trim() !== '') {
            newTags = [variableName];
        } else if (isArray) {
            const propertyArray = editedNode.data[updatedProperty]?.value;
            if (Array.isArray(propertyArray) && propertyArray.length > 0) {
                // Extract non-empty string values from the array
                newTags = propertyArray
                    .map((tagObj) => tagObj.value)
                    .filter((tag) => tag && tag.trim() !== '');
            }
        } else {
            const singleTag = editedNode.data[updatedProperty]?.value;
            if (typeof singleTag === 'string' && singleTag.trim() !== '') {
                // Add non-empty string as a tag
                newTags = [singleTag];
            }
        }
        setTags(newTags);
        // console.log('dsdebug-log', 'useEffect run for Tag Input');
    }, [editedNode, updatedProperty, isArray]);

    const handleSearch = (event) => {
        const inputText = event.target.value;
        const isFolderPathTag = inputText.startsWith('/');

        // If it's a custom tag (starts with '/'), allow spaces
        if (isFolderPathTag || !/\s/.test(inputText)) {
            setSearchTerm(inputText);
            setSelectedIndex(-1);
            setError('');
        } else {
            // Only set an error if the tag isn't a custom tag and contains spaces
            setError('Spaces in variable names are not allowed.');
        }
    };

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
        setSearchTerm(filteredVariables[index].value.name);
        handleTagSubmit(null, filteredVariables[index].value.name);
    };

    const handleTagSubmit = (event, passedSearchTerm = '') => {
        if (event) {
            event.preventDefault();
        }

        // Use passedSearchTerm if provided, else fall back to searchTerm
        const termToCheck = passedSearchTerm || searchTerm;

        // Check if termToCheck is a custom tag (starts with '/')
        const isFolderPathTag = termToCheck.startsWith('/');

        // If it's a custom tag or an existing variable, process it
        const isTagValid =
            isFolderPathTag ||
            definedVariables.some(
                (variable) =>
                    variable.value.name.toLowerCase() ===
                    termToCheck.toLowerCase()
            );

        if (isTagValid) {
            // Replace existing tag with the new one
            const newTags = [termToCheck];
            setTags(newTags);
            setInputDisabled(true); // Disable input after adding a tag
            setSearchTerm('');
            setError('');
            updateEditedNode(newTags, isFolderPathTag);
        } else {
            setError('Variable does not exist.');
        }
    };
    const handleTagRemove = (tagToRemove) => {
        const newTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(newTags);
        setInputDisabled(false);
        updateEditedNode(newTags);
    };

    const findVariableType = (tag) => {
        // TODO: make sure this matches variable types coming out of ds
        return definedVariables?.find(
            (definedVariable) => definedVariable.value.name === tag
        )?.type;
    };

    const updateEditedNode = (newTags, isFolderPathTag) => {
        const currentPath = path;

        let updatedNodeValue;
        if (isArray) {
            updatedNodeValue = newTags.map((tag) => {
                // For array tags
                return {
                    type: 'Variable',
                    value: { type: findVariableType(tag), value: tag },
                };
            });
        } else {
            if (newTags.length > 0) {
                if (isFolderPathTag) {
                    // For a single custom tag
                    updatedNodeValue = [{ type: 'String', value: newTags[0] }];
                } else {
                    // For a single regular tag
                    updatedNodeValue = { type: 'Variable', value: newTags[0] };
                }
            } else {
                updatedNodeValue = null;
            }
        }

        // Update the editedNode with the new value
        let updatedNode = { ...editedNode };
        const pathParts = currentPath.split('.');
        let target = updatedNode;
        for (let i = 0; i < pathParts.length - 1; i++) {
            if (!target[pathParts[i]]) target[pathParts[i]] = {};
            target = target[pathParts[i]];
        }

        target[pathParts[pathParts.length - 1]] = updatedNodeValue;

        setEditedNode(updatedNode);
        handleUpdateNode(updatedNode);
    };

    const filteredVariables = definedVariables?.filter((variable) =>
        variable.value.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box position="relative">
            <form onSubmit={handleTagSubmit}>
                <FormControl isInvalid={!!error}>
                    {error && (
                        <Text
                            position="absolute"
                            top="-17px"
                            fontSize="xs"
                            color="red"
                        >
                            {error}
                        </Text>
                    )}
                    <InputGroup>
                        <InputLeftElement pointerEvents="none">
                            <ReactSVG
                                beforeInjection={(svg) => {
                                    svg.setAttribute('width', '24px');
                                    svg.setAttribute('height', '24px');
                                    svg.setAttribute('color', '#ccc');
                                }}
                                src="var.svg"
                            />
                        </InputLeftElement>
                        <Input
                            value={searchTerm}
                            onChange={handleSearch}
                            backgroundColor="#fff"
                            disabled={inputDisabled}
                            ref={inputRef}
                            spellCheck="false"
                            autoComplete="off"
                        />
                    </InputGroup>
                    {/* Tags display */}
                    <div className="tag-container">
                        {tags.map((tag, index) => (
                            <Tag
                                key={index}
                                size="md"
                                variant="solid"
                                colorScheme="gray"
                                paddingX={5}
                                position="absolute"
                                top={0}
                                width="100%"
                                height="100%"
                            >
                                <TagLabel>{tag}</TagLabel>
                                <TagCloseButton
                                    position="absolute"
                                    right={5}
                                    onClick={() => handleTagRemove(tag)}
                                />
                            </Tag>
                        ))}
                    </div>
                    {/* Dropdown menu */}
                    <Menu isLazy gutter={5}>
                        {!tags.length && !searchTerm && (
                            <MenuButton
                                as={IconButton}
                                icon={<ChevronDownIcon />}
                                aria-label="Search Options"
                                variant="ghost"
                                position="absolute"
                                right={0}
                                top={0}
                                borderLeftRadius="0"
                            />
                        )}
                        <MenuList
                            zIndex={1}
                            borderWidth={1}
                            borderColor="gray.200"
                            bg="white"
                            position="relative"
                            p={0}
                            maxH="20rem"
                            overflowY="auto"
                        >
                            {filteredVariables?.map((variable, index) => (
                                <MenuItem
                                    key={index}
                                    p={2}
                                    onClick={() => handleListItemClick(index)}
                                >
                                    {variable.value.name}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                    {searchTerm && (
                        <List
                            zIndex={1}
                            mt={1}
                            borderWidth={1}
                            borderColor="gray.200"
                            borderRadius="0 0 0"
                            bg="white"
                            position="absolute"
                            top="40px"
                            width="100%"
                            maxH="20rem"
                            overflowY="auto"
                        >
                            {filteredVariables?.map((variable, index) => (
                                <div key={index}>
                                    {searchTerm.toLowerCase() !==
                                        variable.value.name.toLowerCase() && (
                                        <ListItem
                                            p={2}
                                            tabIndex={0} // Set the tabIndex attribute to enable keyboard focus
                                            outline="none"
                                            _focus={{
                                                backgroundColor: '#f0f0f0',
                                            }}
                                            _hover={{
                                                cursor: 'pointer',
                                            }}
                                            onClick={() =>
                                                handleListItemClick(index)
                                            }
                                            onKeyDown={(event) => {
                                                if (event.key === 'Enter') {
                                                    handleListItemClick(
                                                        index,
                                                        'key'
                                                    );
                                                }
                                            }}
                                        >
                                            {variable.value.name}
                                        </ListItem>
                                    )}
                                </div>
                            ))}
                        </List>
                    )}
                </FormControl>
            </form>
        </Box>
    );
}

export default memo(TagInput);
