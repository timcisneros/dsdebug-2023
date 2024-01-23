import { useState, useEffect, memo } from 'react';
import {
    Input,
    VStack,
    FormControl,
    FormLabel,
    Checkbox,
    Select,
    Box,
    Radio,
    FormErrorMessage,
    Textarea,
    Text,
    Flex,
    IconButton,
    Button,
    Badge,
    CloseButton,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNode } from '../../contexts/NodeContext';
import CustomCheckbox from './CustomInputs/CustomCheckbox';
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import TagInput from './CustomInputs/TagInput';
import { displayNameMapping } from './InputData';

const DeepFieldExplorer = ({ selectedNode }) => {
    const {
        handleUpdateNode,
        definedVariables,
        isVisible,
        handleToggleVisibility,
    } = useNode();
    const [fields, setFields] = useState([]);
    const [editedNode, setEditedNode] = useState(selectedNode);
    const [displayHiddenFields, setDisplayHiddenFields] = useState(false);
    const [displayJson, setDisplayJson] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(false);
    const [displayPaths, setDisplayPaths] = useState(false);
    const [displayIsArray, setDisplayIsArray] = useState(false);
    // const [displayOptions, setDisplayOptions] = useState({
    //     json: false, index: false, paths: false,
    // });

    const isFiltered = (key, currentPath) => {
        // Special handling for start activity or regular filter
        const usingFilter =
            editedNode.data?.activityName === 'StartActivity'
                ? startActivityFilterKeys
                : filterKeys;

        let obj = usingFilter;
        for (let part of currentPath) {
            if (obj[part]) {
                obj = obj[part];
            } else if (obj['*']) {
                // Check if wildcard exists at this level, if it does it will filter any property for all keys at this level
                obj = obj['*'];
            } else {
                obj = null;
                break;
            }
        }

        return obj && (obj[key] === true || obj === true);
    };

    // Set initial state when selectedNode changes
    useEffect(() => {
        // If selected node is not null
        if (selectedNode) {
            setEditedNode(selectedNode);
        }
        // console.log('dsdebug-log', 'useEffect run for selectedNode');
    }, [selectedNode]);

    const findDeepestFields = (obj, currentPath = []) => {
        console.log('dsdebug-log', '-dev', 'deepest fields run');
        let deepestFields = [];

        for (const key in obj) {
            if (!displayHiddenFields && isFiltered(key, currentPath)) {
                continue;
            }

            const newPath = currentPath.concat(key);

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (
                    obj[key].hasOwnProperty('value') &&
                    Array.isArray(obj[key].value) &&
                    obj[key].value.length === 0
                ) {
                    // Add a blank string value for the "value" key
                    deepestFields.push({
                        path: newPath.join('.') + '.value',
                        value: '', // Set a blank string as the default value
                    });
                } else {
                    // Continue exploring deeper fields
                    deepestFields = deepestFields.concat(
                        findDeepestFields(obj[key], newPath)
                    );
                }
            } else {
                const path = newPath.join('.');
                deepestFields.push({ path, value: obj[key] });
            }
        }

        return deepestFields;
    };

    const getDisplayName = (path, activityName) => {
        const activityFieldsConfig =
            displayNameMapping[activityName] || displayNameMapping['default'];

        // Find the first configuration that matches the path using the wildcard matcher
        const matchingConfig = activityFieldsConfig.find((config) =>
            doesPathMatchPattern(config.path, path)
        );

        // If a matching configuration is found, return its display name; otherwise, return the path
        return matchingConfig?.config?.displayName || path;
    };

    // Function to check if a path matches a pattern with wildcards
    const doesPathMatchPattern = (pattern, path) => {
        const patternParts = pattern.split('.');
        const pathParts = path.split('.');

        if (patternParts.length !== pathParts.length) {
            return false;
        }

        for (let i = 0; i < patternParts.length; i++) {
            if (patternParts[i] !== '*' && patternParts[i] !== pathParts[i]) {
                return false;
            }
        }
        return true;
    };

    const getNestedValue = (obj, path) => {
        const pathParts = path.split('.');
        let currentObj = obj;

        for (let i = 0; i < pathParts.length; i++) {
            if (pathParts[i] === '*') {
                // If a wildcard is encountered, iterate through all properties of the current object
                const keys = Object.keys(currentObj);
                for (let key of keys) {
                    // Recursively call getNestedValue for each key with the remaining path
                    const remainingPath = pathParts.slice(i + 1).join('.');
                    const result = getNestedValue(
                        currentObj[key],
                        remainingPath
                    );
                    if (result !== undefined) {
                        return result;
                    }
                }
                // If no match is found after checking all keys, return undefined
                return undefined;
            } else if (currentObj && currentObj.hasOwnProperty(pathParts[i])) {
                // Continue traversing the object structure if the current part matches
                currentObj = currentObj[pathParts[i]];
            } else {
                // If the current part does not exist in the object, return undefined
                return undefined;
            }
        }
        return currentObj;
    };

    // Get the configured fields for the current activity
    const currentActivityName = editedNode?.data?.activityName || 'default';
    const activityFieldsConfig =
        displayNameMapping[currentActivityName] ||
        displayNameMapping['default'];

    const checkDependenciesMet = (dependencies, editedNode) => {
        // Convert dependencies to an array if it's not already one
        const depsArray = Array.isArray(dependencies)
            ? dependencies
            : [dependencies];

        return depsArray.every((dependency) => {
            const actualValue = getNestedValue(
                editedNode,
                dependency.path
            )?.value;
            return actualValue === dependency.value;
        });
    };

    // Filter out hidden fields based on the activity type
    const visibleFields = activityFieldsConfig.filter((fieldConfig) => {
        // If there are dependencies, check if all are met
        if (fieldConfig.config && fieldConfig.config.dependsOn) {
            return checkDependenciesMet(
                fieldConfig.config.dependsOn,
                editedNode
            );
        }
        // No dependencies, include field
        return true;
    });

    const handleInputChange = (path, newValue) => {
        // Update only the relevant part of the node state to improve performance
        setEditedNode((prevNode) => {
            // Navigate to the correct property in the node
            const pathParts = path.split('.');
            let currentPart = { ...prevNode }; // Create a shallow copy of the node
            for (let i = 0; i < pathParts.length - 1; i++) {
                const part = pathParts[i];
                if (!currentPart[part]) currentPart[part] = {};
                currentPart[part] = { ...currentPart[part] }; // Shallow copy each nested level
                currentPart = currentPart[part];
            }

            // Update the value
            currentPart[pathParts[pathParts.length - 1]] = newValue;

            // Return the updated node
            return prevNode;
        });

        // Call updateNodeData to handle node update separately
        updateNodeData(path, newValue);
    };

    const updateNodeData = (path, newValue) => {
        // Create a copy of the current node
        const updatedNode = { ...editedNode };

        // Function to recursively update the value
        const updateNestedValue = (currentObj, pathParts, value) => {
            // Base case: If we're at the last part of the path
            if (pathParts.length === 1) {
                currentObj[pathParts[0]] = value;
                return;
            }

            // Handle wildcard
            if (pathParts[0] === '*') {
                // Iterate over all keys if the current part is a wildcard
                Object.keys(currentObj).forEach((key) => {
                    updateNestedValue(
                        currentObj[key],
                        pathParts.slice(1),
                        value
                    );
                });
            } else {
                // Make sure the next part of the path is an object
                if (
                    typeof currentObj[pathParts[0]] !== 'object' ||
                    currentObj[pathParts[0]] === null
                ) {
                    currentObj[pathParts[0]] = {};
                }
                // Recursive call for the next part of the path
                updateNestedValue(
                    currentObj[pathParts[0]],
                    pathParts.slice(1),
                    value
                );
            }
        };

        // Split the path and call the recursive function
        const pathParts = path.split('.');
        updateNestedValue(updatedNode, pathParts, newValue);

        // Perform validation (if necessary)
        const isValid = validateNode(updatedNode);
        updatedNode.errorState = !isValid;

        // Call handleUpdateNode to persist the changes
        handleUpdateNode(updatedNode);
    };

    const validateNode = (node) => {
        // Add your validation logic here
        // For example, checking if required fields are non-empty
        // Assuming 'fields' is an array of field configurations
        return fields.every((field) => {
            if (field.config.required) {
                const fieldValue = getNestedValue(node, field.path);
                return fieldValue && fieldValue.trim() !== '';
            }
            return true;
        });
    };

    // Function to render a single field
    const renderField = (field) => {
        const inputValue = getNestedValue(editedNode, field.path);
        const currentActivityName = editedNode?.data?.activityName || 'default';
        const isError = field.config?.required && inputValue === '';

        // console.log('dsdebug-log', field.path);

        return (
            <FormControl
                isRequired={field.config.required}
                key={field.path}
                isInvalid={isError}
            >
                {displayPaths && (
                    <Text color="blue.400" mb={2}>
                        {field.path}
                    </Text>
                )}
                {displayIsArray && field.config.isArray && (
                    <Badge color="blue.400" mb={2}>
                        isArray
                    </Badge>
                )}
                {field.config.displayName !== null &&
                    field.config.type !== 'Bool' && (
                        <FormLabel>
                            {getDisplayName(field.path, currentActivityName)}
                        </FormLabel>
                    )}
                {field.config.type === 'Bool' ? (
                    <CustomCheckbox
                        editedNode={editedNode}
                        handleInputChange={handleInputChange}
                        getNestedValue={getNestedValue}
                        field={field}
                        getDisplayName={getDisplayName}
                        currentActivityName={currentActivityName}
                        inputValue={inputValue}
                    />
                ) : field.config.type === 'Choice' ? (
                    <Select
                        value={inputValue}
                        onChange={(e) =>
                            handleInputChange(field.path, e.target.value)
                        }
                    >
                        {field.config.choices.map((choice) => (
                            <option key={choice.value} value={choice.value}>
                                {choice.displayName}
                            </option>
                        ))}
                    </Select>
                ) : field.config.type === 'Radio' ? (
                    <VStack align="start">
                        {field.config.choices.map((choice) => {
                            const isNumberValue =
                                typeof choice.value === 'number';
                            const checked = isNumberValue
                                ? Number(inputValue) === choice.value
                                : inputValue === choice.value.toString();

                            return (
                                <Radio
                                    key={choice.value}
                                    value={choice.value}
                                    isChecked={checked}
                                    onChange={(e) =>
                                        handleInputChange(
                                            field.path,
                                            isNumberValue
                                                ? Number(e.target.value)
                                                : e.target.value
                                        )
                                    }
                                >
                                    {choice.displayName}
                                </Radio>
                            );
                        })}
                    </VStack>
                ) : field.config.type === 'Textarea' ? (
                    <Textarea
                        placeholder={field.config.placeholder || ''}
                        onChange={(e) =>
                            handleInputChange(field.path, e.target.value)
                        }
                        value={inputValue}
                        size="md"
                    />
                ) : field.config.type === 'Variable' ? (
                    <>
                        <TagInput
                            field={field}
                            variableName={
                                inputValue?.[0]?.value?.value ||
                                inputValue?.value ||
                                inputValue?.[0]?.value
                            }
                            editedNode={editedNode}
                            setEditedNode={setEditedNode}
                            path={field.path}
                            definedVariables={definedVariables}
                            handleUpdateNode={handleUpdateNode}
                            isArray={field.config.isArray}
                            getNestedValue={getNestedValue}
                        />
                    </>
                ) : (
                    <Input
                        placeholder={field.config.placeholder || ''}
                        onChange={(e) =>
                            handleInputChange(field.path, e.target.value)
                        }
                        value={inputValue}
                        size="md"
                    />
                )}
                {isError && (
                    <FormErrorMessage>This field is required.</FormErrorMessage>
                )}
            </FormControl>
        );
    };

    return (
        <>
            <IconButton
                pos="absolute"
                right={5}
                top="64px"
                icon={isVisible ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handleToggleVisibility}
                variant="ghost"
                zIndex={1}
            />
            {isVisible && (
                <Box
                    w="20rem"
                    backgroundColor="#fff"
                    borderLeft="1px solid #ccc"
                    overflowY="auto"
                    paddingTop={50}
                >
                    <Box marginTop="-3rem">
                        <Flex direction="column" bg="#FAFAFA" p={4}>
                            <Text pb={4} fontWeight="bold">
                                Dev Tools
                            </Text>
                            <Checkbox
                                isChecked={displayJson}
                                onChange={() => setDisplayJson(!displayJson)}
                            >
                                Json
                            </Checkbox>
                            <Checkbox
                                isChecked={displayIndex}
                                onChange={() => setDisplayIndex(!displayIndex)}
                            >
                                Group Index
                            </Checkbox>
                            <Checkbox
                                isChecked={displayPaths}
                                onChange={() => setDisplayPaths(!displayPaths)}
                            >
                                Paths
                            </Checkbox>
                            <Checkbox
                                isChecked={displayIsArray}
                                onChange={() =>
                                    setDisplayIsArray(!displayIsArray)
                                }
                            >
                                isArray
                            </Checkbox>
                        </Flex>
                        <Box>
                            <Box p={4}>
                                <VStack spacing={4}>
                                    {visibleFields.map((field) => {
                                        return renderField(field);
                                    })}
                                </VStack>
                            </Box>
                        </Box>

                        {displayJson && (
                            <JsonView
                                data={{
                                    id: editedNode.id,
                                    ...editedNode.data,
                                }}
                                // data={editedNode}
                                shouldExpandNode={allExpanded}
                                style={defaultStyles}
                            />
                        )}
                    </Box>
                </Box>
            )}
        </>
    );
};

export default memo(DeepFieldExplorer);
