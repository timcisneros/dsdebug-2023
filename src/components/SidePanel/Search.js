import { useState, useEffect, useRef } from 'react';
import {
    Box,
    Field,
    Flex,
    Input,
    InputGroup,
    List,
    Menu,
    IconButton,
    Portal,
    Text,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { varDataMapping } from './Variables/varData';
import { useWorkflowActions } from '../../contexts/NodeContext';
import SvgIcon from '../ui/SvgIcon';

const Search = ({ definedVariables }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [variableType, setVariableType] = useState('Text');
    const [variableTypeImage, setVariableTypeImage] = useState(
        varDataMapping['Text'].icon
    );
    const [error, setError] = useState('');
    const [submittedAfterSelect, setSubmittedAfterSelect] = useState(false);

    const { createDefinedVariable } = useWorkflowActions();

    const [selectedIndex, setSelectedIndex] = useState(-1); // To keep track of the selected ListItem index
    const inputRef = useRef(null); // Ref for the Input element

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

    useEffect(() => {
        // Focus the Input element when the selectedIndex changes
        if (selectedIndex !== -1 && inputRef.current) {
            inputRef.current.focus();
        }
    }, [selectedIndex]);

    const filteredVariables =
        definedVariables?.length > 0 &&
        definedVariables.filter((variable) => {
            // Convert the variable value to a string (if it's not already) and perform a case-insensitive search
            const stringValue = String(variable.value.name).toLowerCase();
            return stringValue.includes(searchTerm?.toLowerCase());
        });

    const handleSetVariableType = (varType) => {
        setVariableType(varType);
        setVariableTypeImage(varDataMapping[varType].icon);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            // Check if the searchTerm contains any symbols using a regular expression
            if (/^[a-zA-Z0-9_]+$/.test(searchTerm)) {
                const searchTermLowerCase = searchTerm.toLowerCase();
                const existingVariable = definedVariables.find(
                    (variable) =>
                        variable.value.name.toLowerCase() ===
                        searchTermLowerCase
                );

                if (!submittedAfterSelect) {
                    if (existingVariable) {
                        setError('Variable already exists.'); // Display an error message if the variable already exists
                        return; // Return early to prevent further execution
                    } else {
                        const newVariable = {
                            type: varDataMapping[variableType].value.type,
                            value: {
                                name: searchTerm,
                                displayName: searchTerm,
                                displayType: variableType,
                                ...varDataMapping[variableType].value.value,
                            },
                        };

                        console.log(
                            'dsdebug-log',
                            '- Variable Created:',
                            newVariable
                        );
                        const result = createDefinedVariable(newVariable);
                        if (!result.ok) {
                            setError(result.error);
                            return;
                        }

                        setSearchTerm('');
                        setError('');
                    }
                }
                setSubmittedAfterSelect(false);
            } else {
                setError(
                    submittedAfterSelect
                        ? 'Search term cannot contain symbols.'
                        : 'Symbols are not allowed in a variable name.'
                ); // Display an error message if the search term contains symbols
            }
        } else {
            setError(
                submittedAfterSelect ? 'Search term cannot be empty.' : ''
            ); // Display an error message if the search term is empty
        }
    };

    const variableTypes = [
        ['Actor', 'Actor'],
        ['CustomXml', 'Custom XML'],
        ['Date', 'Date'],
        ['Document', 'Document'],
        ['Folder', 'Folder'],
        ['IdList', 'ID List'],
        ['Iterator', 'Iterator'],
        ['Number', 'Number'],
        ['Text', 'Text'],
    ];

    const variableTypeMenu = definedVariables ? (
        <Menu.Root>
            <Menu.Trigger asChild>
                <IconButton
                    variant="outline"
                    borderLeft={0}
                    borderLeftRadius={0}
                    aria-label="Variable Type"
                >
                    {variableTypeImage}
                </IconButton>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {variableTypes.map(([type, label]) => (
                            <Menu.Item
                                key={type}
                                value={type}
                                onClick={() => handleSetVariableType(type)}
                            >
                                <Box>{varDataMapping[type].icon}</Box>
                                {label}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    ) : null;

    return (
        <Flex flexDirection="column" position="relative" pb={4}>
            <form onSubmit={handleSubmit}>
                <Field.Root invalid={!!error}>
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
                        zIndex={1}
                        startElement={
                            definedVariables ? (
                                <SvgIcon color="#ccc" src="var.svg" />
                            ) : (
                                <FiSearch color="var(--chakra-colors-gray-300)" />
                            )
                        }
                        endElement={variableTypeMenu}
                        endElementProps={{ padding: 0 }}
                    >
                        <Input
                            spellCheck="false"
                            disabled={definedVariables ? false : true}
                            autoComplete="off"
                            variant="outline"
                            backgroundColor="white"
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            ref={inputRef}
                            placeholder={
                                definedVariables ? 'Create Variable' : 'Search'
                            }
                        />
                    </InputGroup>
                </Field.Root>
            </form>
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
                                    onClick={() => handleListItemClick(index)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            handleListItemClick(index, 'key');
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
        </Flex>
    );
};

export default Search;
