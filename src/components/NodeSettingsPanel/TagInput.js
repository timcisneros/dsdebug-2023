import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Input,
    Flex,
    Tag,
    TagLabel,
    TagCloseButton,
    List,
    ListItem,
    FormControl,
    Text,
} from '@chakra-ui/react';
import { useNode } from '../../contexts/NodeContext';

function TagInput({ variable, variableName, setEditedNode, name }) {
    const [searchTerm, setSearchTerm] = useState('');
    const { definedVariables } = useNode();
    const [tags, setTags] = useState([]);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1); // To keep track of the selected ListItem index
    const inputRef = useRef(null); // Ref for the Input element
    const [error, setError] = useState('');
    const [submittedAfterSelect, setSubmittedAfterSelect] = useState(false);

    useEffect(() => {
        // Add the prop variable as a tag when it's provided
        if (variableName) {
            setTags([variableName]);
            setInputDisabled(true);
        }
    }, [variableName]);

    const handleSearch = (event) => {
        const inputText = event.target.value;
        // Check if the input contains any whitespace characters (spaces)
        if (!/\s/.test(inputText)) {
            setSearchTerm(inputText);
            setSelectedIndex(-1); // Reset the selected index when the user types in the input field
        } else {
            // Display an error message or handle the invalid input as desired
            setError('Spaces in variable names are not allowed.');
        }
    };

    const handleListItemClick = (index, type) => {
        setSelectedIndex(index); // Set the selected index when a ListItem is clicked
        setSearchTerm(filteredVariables[index].value.name); // Set the Input value to the clicked ListItem value
        if (type) {
            setSubmittedAfterSelect(true); // Set the flag to true indicating that the form has been submitted after selecting an item
        }
    };

    const handleTagSubmit = (event) => {
        event.preventDefault();

        // Check if the submitted tag matches a variable name in definedVariables
        const isTagValid = definedVariables.some(
            (variable) =>
                variable.value.name.toLowerCase() === searchTerm.toLowerCase()
        );

        if (isTagValid) {
            setTags([...tags, searchTerm]);
            setSearchTerm(''); // Clear the input
            setInputDisabled(true); // Disable the input when a tag exists
            setError(''); // Clear the error message

            // setEditedNode((prevEditedNode) => ({
            //     ...prevEditedNode,
            //     data: {
            //         ...prevEditedNode.data,
            //         [name]: {
            //             ...prevEditedNode.data[name],
            //             value: searchTerm,
            //         },
            //     },
            // }));
        } else {
            setError('Variable does not exist.');
        }
    };

    const handleTagRemove = (tagToRemove) => {
        const updatedTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(updatedTags);
        setInputDisabled(false); // Re-enable the input when a tag is deleted
    };

    const filteredVariables =
        definedVariables?.length > 0 &&
        definedVariables.filter((variable) => {
            // Convert the variable value to a string (if it's not already) and perform a case-insensitive search
            const stringValue = String(variable.value.name).toLowerCase();
            return stringValue.includes(searchTerm?.toLowerCase());
        });

    useEffect(() => {
        // Focus the Input element when the selectedIndex changes
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
                    <Input
                        position="relative"
                        placeholder="Add Variable"
                        value={searchTerm}
                        onChange={handleSearch}
                        backgroundColor="#fff"
                        disabled={inputDisabled}
                        ref={inputRef}
                        spellCheck="false"
                        autoComplete="off"
                    />
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

export default TagInput;
