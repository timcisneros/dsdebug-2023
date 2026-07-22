import React, { useState, useRef, memo } from 'react';
import {
    Box,
    Field,
    Input,
    Tag,
    List,
    Text,
    InputGroup,
    Menu,
    IconButton,
    Portal,
} from '@chakra-ui/react';
import SvgIcon from '../../ui/SvgIcon';
import { FiChevronDown } from 'react-icons/fi';
import { useWorkflowMetadata } from '../../../contexts/NodeContext';

const updateValueAtPath = (currentValue, pathParts, newValue) => {
    if (pathParts.length === 0) return newValue;

    const [currentPart, ...remainingParts] = pathParts;
    const source = currentValue ?? {};
    const updatedValue = Array.isArray(source) ? [...source] : { ...source };
    updatedValue[currentPart] = updateValueAtPath(
        source[currentPart],
        remainingParts,
        newValue
    );
    return updatedValue;
};

function TagInput({
    field,
    variableName,
    editedNode,
    path,
    handleUpdateNode,
    isArray,
    getNestedValue,
}) {
    const updatedProperty = path.split('.')[1];
    const getInitialTags = () => {
        if (typeof variableName === 'string' && variableName.trim() !== '') {
            return [variableName];
        }
        const propertyValue = editedNode.data[updatedProperty]?.value;
        if (isArray && Array.isArray(propertyValue)) {
            return propertyValue
                .map((tagObject) => tagObject.value)
                .filter((tag) => tag && tag.trim() !== '');
        }
        return typeof propertyValue === 'string' && propertyValue.trim() !== ''
            ? [propertyValue]
            : [];
    };
    const [searchTerm, setSearchTerm] = useState('');
    const [tags, setTags] = useState(getInitialTags);
    const [inputDisabled, setInputDisabled] = useState(
        () => getInitialTags().length > 0
    );
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef(null);
    const controlRef = useRef(null);
    const [error, setError] = useState('');

    const { definedVariables } = useWorkflowMetadata();

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
        const matchingVariable = definedVariables.find(
            (variable) =>
                variable.value.name.toLowerCase() ===
                termToCheck.toLowerCase()
        );
        const isTagValid = isFolderPathTag || Boolean(matchingVariable);

        if (isTagValid) {
            const normalizedTag = isFolderPathTag
                ? termToCheck
                : matchingVariable.value.name;
            const newTags = [normalizedTag];
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
        return definedVariables?.find(
            (definedVariable) =>
                definedVariable.value.name.toLowerCase() === tag.toLowerCase()
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

        const updatedNode = updateValueAtPath(
            editedNode,
            currentPath.split('.'),
            updatedNodeValue
        );
        handleUpdateNode(updatedNode);
    };

    const filteredVariables = definedVariables?.filter((variable) =>
        variable.value.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box position="relative" width="100%">
            <Box as="form" width="100%" onSubmit={handleTagSubmit}>
                <Field.Root invalid={!!error} width="100%">
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
                    <InputGroup
                        ref={controlRef}
                        width="100%"
                        startElement={
                            <SvgIcon color="#ccc" src="var.svg" />
                        }
                    >
                        <Input
                            width="100%"
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
                            <Tag.Root
                                key={index}
                                size="md"
                                variant="solid"
                                colorPalette="gray"
                                paddingX={5}
                                position="absolute"
                                top={0}
                                width="100%"
                                height="100%"
                            >
                                <Tag.Label>{tag}</Tag.Label>
                                <Tag.EndElement position="absolute" right={5}>
                                    <Tag.CloseTrigger
                                        onClick={() => handleTagRemove(tag)}
                                    />
                                </Tag.EndElement>
                            </Tag.Root>
                        ))}
                    </div>
                    {/* Dropdown menu */}
                    <Menu.Root
                        lazyMount
                        positioning={{
                            gutter: 5,
                            placement: 'bottom-start',
                            sameWidth: true,
                            getAnchorElement: () => controlRef.current,
                        }}
                    >
                        {!tags.length && !searchTerm && (
                            <Menu.Trigger asChild>
                                <IconButton
                                    aria-label="Search Options"
                                    variant="ghost"
                                    position="absolute"
                                    right={0}
                                    top={0}
                                    borderLeftRadius="0"
                                >
                                    <FiChevronDown />
                                </IconButton>
                            </Menu.Trigger>
                        )}
                        <Portal>
                            <Menu.Positioner>
                                <Menu.Content
                                    width="100%"
                                    zIndex={1}
                                    p={0}
                                    maxH="20rem"
                                    overflowY="auto"
                                >
                                    {filteredVariables?.map((variable, index) => (
                                        <Menu.Item
                                            key={variable.value.name}
                                            value={variable.value.name}
                                            p={2}
                                            onClick={() => handleListItemClick(index)}
                                        >
                                            {variable.value.name}
                                        </Menu.Item>
                                    ))}
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root>
                    {searchTerm && (
                        <List.Root
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
                                        <List.Item
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
                                        </List.Item>
                                    )}
                                </div>
                            ))}
                        </List.Root>
                    )}
                </Field.Root>
            </Box>
        </Box>
    );
}

export default memo(TagInput);
