import { useState, useEffect, useRef } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import {
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon,
    List,
    ListItem,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    FormControl,
    Text,
} from '@chakra-ui/react';
import { varDataMapping } from './Variables/varData';
import { useNode } from '../../contexts/NodeContext';
import { ReactSVG } from 'react-svg';

const Search = ({ definedVariables }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [variableType, setVariableType] = useState('Text');
    const [variableTypeImage, setVariableTypeImage] = useState(
        varDataMapping['Text'].icon
    );
    const [error, setError] = useState('');
    const [submittedAfterSelect, setSubmittedAfterSelect] = useState(false);

    const { data, setData } = useNode();

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
                        setSearchTerm('');
                        setError(''); // Clear the error message

                        // Find the cell with activityName 'StartActivity'
                        const startActivityCellIndex = data.cells.findIndex(
                            (cell) => cell.activityName === 'StartActivity'
                        );

                        if (startActivityCellIndex !== -1) {
                            // Create a new definedVariables array with the existing variables and add the new variable to it
                            const newVariable = {
                                type: varDataMapping[variableType].value.type,
                                value: {
                                    name: searchTerm,
                                    displayName: searchTerm,
                                    displayType: variableType,
                                    ...varDataMapping[variableType].value.value,
                                },
                            };

                            // Create a new definedVariables array with the existing variables and add the new variable to it
                            const newDefinedVariables = [
                                ...data.cells[startActivityCellIndex]
                                    .definedVariables.value,
                                newVariable,
                            ];

                            // Create a new cell object with the updated definedVariables array
                            const updatedCell = {
                                ...data.cells[startActivityCellIndex],
                                definedVariables: {
                                    type: 'Variable',
                                    value: newDefinedVariables,
                                },
                            };

                            // Create a new array of cells with the updated cell object
                            const updatedCells = data.cells.map((cell, index) =>
                                index === startActivityCellIndex
                                    ? updatedCell
                                    : cell
                            );

                            // Create the final updatedData object
                            const updatedData = {
                                ...data,
                                cells: updatedCells,
                            };

                            console.log(
                                'dsdebug-log',
                                '- Variable Created:',
                                newVariable
                            );

                            // Use setData to update the data object in the context
                            setData(updatedData);
                        }
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

    return (
        <Flex flexDirection="column" position="relative" pb={4}>
            <form onSubmit={handleSubmit}>
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
                    <InputGroup zIndex={1}>
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
                                <SearchIcon color="gray.300" />
                            )}
                        </InputLeftElement>
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
                        {definedVariables && (
                            <InputRightAddon padding={0}>
                                <Menu>
                                    <MenuButton
                                        variant="outline"
                                        borderLeft={0}
                                        borderLeftRadius={0}
                                        as={IconButton}
                                        icon={variableTypeImage}
                                        aria-label="Variable Type"
                                    />
                                    <MenuList>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType('Actor')
                                            }
                                            icon={varDataMapping['Actor'].icon}
                                        >
                                            Actor
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType(
                                                    'CustomXml'
                                                )
                                            }
                                            icon={
                                                varDataMapping['CustomXml'].icon
                                            }
                                        >
                                            Custom XML
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType('Date')
                                            }
                                            icon={varDataMapping['Date'].icon}
                                        >
                                            Date
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType(
                                                    'Document'
                                                )
                                            }
                                            icon={
                                                varDataMapping['Document'].icon
                                            }
                                        >
                                            Document
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType('Folder')
                                            }
                                            icon={varDataMapping['Folder'].icon}
                                        >
                                            Folder
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType('IdList')
                                            }
                                            icon={varDataMapping['IdList'].icon}
                                        >
                                            ID List
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType(
                                                    'Iterator'
                                                )
                                            }
                                            icon={
                                                varDataMapping['Iterator'].icon
                                            }
                                        >
                                            Iterator
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType('Number')
                                            }
                                            icon={varDataMapping['Number'].icon}
                                        >
                                            Number
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() =>
                                                handleSetVariableType('Text')
                                            }
                                            icon={varDataMapping['Text'].icon}
                                        >
                                            Text
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </InputRightAddon>
                        )}
                    </InputGroup>
                </FormControl>
            </form>
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
                                    onClick={() => handleListItemClick(index)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            handleListItemClick(index, 'key');
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
        </Flex>
    );
};

export default Search;
