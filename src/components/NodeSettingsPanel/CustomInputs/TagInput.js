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
import { useNode } from '../../../contexts/NodeContext';
import { ReactSVG } from 'react-svg';
import { ChevronDownIcon } from '@chakra-ui/icons';

function TagInput({
    variableName,
    editedNode,
    setEditedNode,
    path,
    definedVariables,
    handleUpdateNode,
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [tags, setTags] = useState([]);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef(null);
    const [error, setError] = useState('');
    const [submittedAfterSelect, setSubmittedAfterSelect] = useState(false);

    const updatedProperty = path.split('.')[1];

    useEffect(() => {
        if (variableName) {
            setTags([variableName]);
            setInputDisabled(true);
        }
    }, [variableName]);

    const handleSearch = (event) => {
        const inputText = event.target.value;
        if (!/\s/.test(inputText)) {
            setSearchTerm(inputText);
            setSelectedIndex(-1);
        } else {
            setError('Spaces in variable names are not allowed.');
        }
    };

    const handleListItemClick = (index, type) => {
        setSelectedIndex(index);
        setSearchTerm(filteredVariables[index].value.name);
        handleTagSubmit(null, filteredVariables[index].value.name);
        if (type) {
            setSubmittedAfterSelect(true);
        }
    };

    const handleTagSubmit = (event, passedSearchTerm) => {
        let isTagValid;
        if (event) {
            event.preventDefault();
        }

        isTagValid = definedVariables.some(
            (variable) =>
                variable.value.name.toLowerCase() ===
                passedSearchTerm.toLowerCase()
        );

        if (isTagValid) {
            setTags([...tags, passedSearchTerm]);
            setInputDisabled(true);
            setSearchTerm('');
            setError('');

            const definedVariableType = definedVariables.find(
                (definedVariable) =>
                    definedVariable.value.name === passedSearchTerm
            ).type;

            try {
                const updatedNodeValue = [
                    {
                        type: 'Variable',
                        value: {
                            type: definedVariableType,
                            value: passedSearchTerm,
                        },
                    },
                ];

                const updatedNode = (prevEditedNode) => ({
                    ...prevEditedNode,
                    data: {
                        ...prevEditedNode.data,
                        [updatedProperty]: {
                            type: 'Document',
                            value: updatedNodeValue,
                        },
                    },
                });

                setEditedNode(updatedNode);
                handleUpdateNode(updatedNode);
            } catch (error) {
                console.error('dsdebug-log', `Error - ${error.message}`);
            }
        } else {
            setError('Variable does not exist.');
        }
    };

    useEffect(() => {
        handleUpdateNode(editedNode);
    }, [editedNode]);

    const handleTagRemove = (tagToRemove) => {
        const updatedTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(updatedTags);
        setInputDisabled(false);

        const updatedNode = (prevEditedNode) => {
            return {
                ...prevEditedNode,
                data: {
                    ...prevEditedNode.data,
                    [updatedProperty]: {
                        ...prevEditedNode.data[updatedProperty],
                        value: [],
                    },
                },
            };
        };

        setEditedNode(updatedNode);
        handleUpdateNode(updatedNode);
    };

    const filteredVariables =
        definedVariables?.length > 0 &&
        definedVariables.filter((variable) => {
            const variableType = variable.value.displayType;
            return String(variable.value.name)
                .toLowerCase()
                .includes(searchTerm?.toLowerCase());
        });

    useEffect(() => {
        if (selectedIndex !== -1 && inputRef.current) {
            inputRef.current.focus();
        }
    }, [selectedIndex]);

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
                            {definedVariables ? (
                                <ReactSVG
                                    beforeInjection={(svg) => {
                                        svg.setAttribute('width', '24px');
                                        svg.setAttribute('height', '24px');
                                        svg.setAttribute('color', '#ccc');
                                    }}
                                    src="var.svg"
                                />
                            ) : (
                                // Placeholder for your search icon
                                <div></div>
                            )}
                        </InputLeftElement>
                        <Input
                            position="relative"
                            value={searchTerm}
                            onChange={handleSearch}
                            backgroundColor="#fff"
                            disabled={inputDisabled}
                            ref={inputRef}
                            spellCheck="false"
                            autoComplete="off"
                        />
                    </InputGroup>
                    <div className="tag-container">
                        {tags.map((tag, index) => (
                            <Tag
                                top={0}
                                width="100%"
                                height="100%"
                                position="absolute"
                                key={index}
                                size="md"
                                variant="solid"
                                colorScheme="gray"
                                paddingX={5}
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
                    {!tags.length && !searchTerm && (
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<ChevronDownIcon />}
                                aria-label="Search Options"
                                variant="ghost"
                                position="absolute"
                                right={0}
                                top={0}
                            />
                            <MenuList
                                zIndex={1}
                                mt={-1}
                                borderWidth={1}
                                borderColor="gray.200"
                                borderRadius="0 0 0"
                                bg="white"
                                position="relative"
                                p={0}
                            >
                                {filteredVariables?.map((variable, index) => (
                                    <MenuItem
                                        p={2}
                                        key={index}
                                        onClick={() =>
                                            handleListItemClick(index)
                                        }
                                    >
                                        {variable.value.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    )}
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
