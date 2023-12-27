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

function TagInput({
    variableName,
    editedNode,
    setEditedNode,
    path,
    definedVariables,
    handleUpdateNode,
    isArray,
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [tags, setTags] = useState([]);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef(null);
    const [error, setError] = useState('');

    const updatedProperty = path.split('.')[1];

    // Update tags when editedNode or variableName changes
    useEffect(() => {
        let newTags = [];
        if (variableName && variableName.trim() !== '') {
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
    }, [editedNode, updatedProperty, isArray]);

    const handleSearch = (event) => {
        const inputText = event.target.value;
        if (!/\s/.test(inputText)) {
            setSearchTerm(inputText);
            setSelectedIndex(-1);
        } else {
            setError('Spaces in variable names are not allowed.');
        }
    };

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
        setSearchTerm(filteredVariables[index].value.name);
        handleTagSubmit(null, filteredVariables[index].value.name);
    };

    const handleTagSubmit = (event, passedSearchTerm) => {
        if (event) {
            event.preventDefault();
        }

        const isTagValid = definedVariables.some(
            (variable) =>
                variable.value.name.toLowerCase() ===
                passedSearchTerm.toLowerCase()
        );

        if (isTagValid) {
            const newTags = [...tags, passedSearchTerm];
            setTags(newTags);
            setInputDisabled(true);
            setSearchTerm('');
            setError('');
            updateEditedNode(newTags);
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

    const updateEditedNode = (newTags) => {
        const updatedNodeValue = newTags.map((tag) => ({
            type: 'Variable',
            value: tag,
            // Additional properties if needed
        }));

        const updatedNode = {
            ...editedNode,
            data: {
                ...editedNode.data,
                [updatedProperty]: isArray
                    ? updatedNodeValue
                    : updatedNodeValue[0],
            },
        };

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
