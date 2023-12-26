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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNode } from '../../contexts/NodeContext';
import CustomCheckbox from './CustomInputs/CustomCheckbox';
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import TagInput from './CustomInputs/TagInput';
import { displayNameMapping } from './InputData';

const startActivityFilterKeys = {
    width: true,
    height: true,
    id: true,
    style: true,
    data: {
        name: true,
        workflowName: false,
        definedVariables: true,
        size: true,
        content: true,
        angle: true,
        activityName: true,
        group: true,
        icon: true,
        z: true,
        attrs: true,
        '*': {
            type: true,
            '*': {
                '*': {
                    type: true,
                    '*': {
                        type: true,
                    },
                },
            },
        },
    },
    position: true,
    type: true,
    selectable: true,
    selected: true,
    positionAbsolute: true,
};

const filterKeys = {
    width: true,
    height: true,
    id: true,
    style: true,
    data: {
        icon: true,
        color: true,
        attrs: true,
        size: true,
        content: true,
        angle: true,
        activityName: true,
        group: true,
        z: true,
        // variableUpdates: true,
        errorState: true,
        // definedVariables: true,
        // workflowName: true,
        '*': {
            type: true,
            '*': {
                type: true,
                returnType: true,
                additionalCode: true,
                '*': {
                    type: true,
                    '*': {
                        type: true,
                        '*': {
                            type: true,
                            returnType: true,
                            additionalCode: true,
                            '*': {
                                type: true,
                                '*': {
                                    // For metadata (attributes) steps
                                    setName: true,
                                    groupName: true,
                                    '*': {
                                        type: true,
                                        '*': {
                                            returnType: true,
                                            additionalCode: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    position: true,
    type: true,
    selectable: true,
    selected: true,
    positionAbsolute: true,
};

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

    const isFiltered = (key, currentPath) => {
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

    // Persist changes when editedNode updates
    useEffect(() => {
        handleUpdateNode(editedNode);
    }, [editedNode]);

    // Set initial state when selectedNode changes
    useEffect(() => {
        setEditedNode(selectedNode);
    }, [selectedNode]);

    // useEffect(() => {
    //     const findDeepestFields = (obj, currentPath = []) => {
    //         let deepestFields = [];

    //         for (const key in obj) {
    //             if (!displayHiddenFields && isFiltered(key, currentPath)) {
    //                 continue;
    //             }

    //             const newPath = currentPath.concat(key);

    //             if (typeof obj[key] === 'object' && obj[key] !== null) {
    //                 // Special handling for the "type" and "value" structure
    //                 if (
    //                     1 === 2
    //                     // obj[key].hasOwnProperty('type') &&
    //                     // obj[key].hasOwnProperty('value')
    //                 ) {
    //                     deepestFields.push({
    //                         path: newPath.join('.') + '.value',
    //                         value: obj[key].value,
    //                     });
    //                     // We've added the ".value", so continue to next key
    //                     continue;
    //                 }
    //                 // If not a special "type" & "value" structure, continue exploring deeper fields
    //                 deepestFields = deepestFields.concat(
    //                     findDeepestFields(obj[key], newPath)
    //                 );
    //             } else {
    //                 const path = newPath.join('.');
    //                 deepestFields.push({ path, value: obj[key] });
    //             }
    //         }

    //         return deepestFields;
    //     };

    //     const deepestFields = findDeepestFields(selectedNode);
    //     setFields(deepestFields);
    // }, [selectedNode, displayHiddenFields]);

    const findDeepestFields = (obj, currentPath = []) => {
        console.log('dsdebug-log', '-dev', 'deepest fields run');
        let deepestFields = [];

        for (const key in obj) {
            if (!displayHiddenFields && isFiltered(key, currentPath)) {
                continue;
            }

            const newPath = currentPath.concat(key);

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                // Check if the object has a "type" but no "value"
                // if (
                //     obj[key].hasOwnProperty('type') &&
                //     !obj[key].hasOwnProperty('value')
                // ) {
                //     // Assign an empty array to the "value" key
                //     obj[key].value = [];
                //     deepestFields.push({
                //         path: newPath.join('.') + '.value',
                //         value: [], // Assign an empty array as the default value
                //     });
                // }
                // Check if the object has a "value" key that is an empty array
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

    // useEffect(() => {
    //     // Update editedNode whenever selectedNode changes
    //     setEditedNode(selectedNode);

    //     const currentActivityName =
    //         selectedNode.data?.activityName || 'default';
    //     const activityFieldsConfig =
    //         displayNameMapping[currentActivityName] ||
    //         displayNameMapping['default'];

    //     const deepestFields = findDeepestFields(selectedNode);

    //     // Apply activity-specific configurations to deepestFields
    //     const fieldsForActivity = deepestFields.map((field) => {
    //         try {
    //             const fieldConfig = activityFieldsConfig.find((config) =>
    //                 matchPathWithWildcard(config.path, field.path)
    //             );
    //             return {
    //                 ...field,
    //                 config: fieldConfig ? fieldConfig.config : {},
    //             };
    //         } catch (err) {
    //             console.log('dsdebug-log', err.message);
    //         }
    //     });

    //     setFields(fieldsForActivity);
    //     // console.log(
    //     //     'dsdebug-log',
    //     //     '-dev',
    //     //     'useEffect triggered, selected node for settings changed'
    //     // );
    // }, [selectedNode]);

    const getDisplayName = (path, activityName) => {
        const activityFieldsConfig =
            displayNameMapping[activityName] || displayNameMapping['default'];

        const fieldConfig = activityFieldsConfig.find((config) =>
            matchPathWithWildcard(config.path, path)
        );
        return fieldConfig &&
            fieldConfig.config &&
            fieldConfig.config.displayName
            ? fieldConfig.config.displayName
            : path;
    };

    const matchPathWithWildcard = (pattern, path) => {
        // Check if pattern is undefined
        if (!pattern) return false;

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
        for (let part of pathParts) {
            if (obj && obj.hasOwnProperty(part)) {
                obj = obj[part];
            } else {
                return undefined;
            }
        }
        return obj;
    };

    // Get the configured fields for the current activity
    const currentActivityName = editedNode.data?.activityName || 'default';
    const activityFieldsConfig =
        displayNameMapping[currentActivityName] ||
        displayNameMapping['default'];

    // Filter out hidden fields based on the activity type
    const visibleFields = activityFieldsConfig.filter((fieldConfig) => {
        const pathParts = fieldConfig.path.split('.');
        let obj = editedNode;

        // Check if this field has a dependency and if it's met
        if (fieldConfig.config.dependsOn) {
            const dependencyValue = getNestedValue(
                editedNode,
                fieldConfig.config.dependsOn.path
            );
            if (dependencyValue !== fieldConfig.config.dependsOn.value) {
                return false; // Do not include this field if the dependency condition is not met
            }
        }

        for (let part of pathParts) {
            if (obj && obj.hasOwnProperty(part)) {
                obj = obj[part];
            } else {
                return fieldConfig; // Return fieldConfig if the field is not in the JSON object but no dependencies
            }
        }

        return true; // Field is in the JSON object and all dependencies are met
    });

    const handleInputChange = (path, newValue) => {
        setEditedNode((prevNode) => {
            // Creating a shallow copy of the node
            const updatedNode = { ...prevNode };

            // Splitting the path and initializing a reference to the updatedNode
            const pathParts = path.split('.');
            let currentPart = updatedNode;

            // Iterating over the path parts to reach the target value
            for (let i = 0; i < pathParts.length - 1; i++) {
                const part = pathParts[i];
                // Shallow copy each nested level
                currentPart[part] = { ...currentPart[part] };
                currentPart = currentPart[part];
            }

            // Setting the new value at the target
            currentPart[pathParts[pathParts.length - 1]] = newValue;

            // Perform your validation logic here
            const isValid = validateNode(updatedNode);

            // Update errorState based on validation
            updatedNode.errorState = !isValid;

            // Returning the updated node
            return updatedNode;
        });
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
                            {/* <Checkbox
                    isChecked={displayHiddenFields}
                    onChange={(e) =>
                        setDisplayHiddenFields(!displayHiddenFields)
                    }
                    pb={4}
                >
                    Hidden Fields
                </Checkbox> */}
                            <Checkbox
                                isChecked={displayJson}
                                onChange={(e) => setDisplayJson(!displayJson)}
                            >
                                Json
                            </Checkbox>
                        </Flex>
                        <Box px={4} py={4}>
                            <VStack spacing={4}>
                                {visibleFields.map((field) => {
                                    const { config, value } = field;
                                    const fieldType = config.type;
                                    const inputValue = getNestedValue(
                                        editedNode,
                                        field.path
                                    );
                                    const currentActivityName =
                                        editedNode.data?.activityName ||
                                        'default';

                                    const isError =
                                        config.required && inputValue === '';

                                    return (
                                        <FormControl
                                            isRequired={config.required}
                                            key={field.path}
                                            isInvalid={isError}
                                        >
                                            {config.displayName !== null &&
                                                config.type !== 'Bool' && (
                                                    <FormLabel>
                                                        {getDisplayName(
                                                            field.path,
                                                            currentActivityName
                                                        )}
                                                    </FormLabel>
                                                )}
                                            {fieldType === 'Bool' ? (
                                                <CustomCheckbox
                                                    editedNode={editedNode}
                                                    handleInputChange={
                                                        handleInputChange
                                                    }
                                                    getNestedValue={
                                                        getNestedValue
                                                    }
                                                    field={field}
                                                    getDisplayName={
                                                        getDisplayName
                                                    }
                                                    currentActivityName={
                                                        currentActivityName
                                                    }
                                                    inputValue={inputValue}
                                                />
                                            ) : fieldType === 'Choice' ? (
                                                <Select
                                                    value={inputValue}
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            field.path,
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    {config.choices.map(
                                                        (choice) => (
                                                            <option
                                                                key={
                                                                    choice.value
                                                                }
                                                                value={
                                                                    choice.value
                                                                }
                                                            >
                                                                {
                                                                    choice.displayName
                                                                }
                                                            </option>
                                                        )
                                                    )}
                                                </Select>
                                            ) : fieldType === 'Radio' ? (
                                                <VStack align="start">
                                                    {config.choices.map(
                                                        (choice) => (
                                                            <Radio
                                                                key={
                                                                    choice.value
                                                                }
                                                                value={
                                                                    choice.value
                                                                }
                                                                isChecked={
                                                                    inputValue ===
                                                                    choice.value
                                                                }
                                                                onChange={(e) =>
                                                                    handleInputChange(
                                                                        field.path,
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            >
                                                                {
                                                                    choice.displayName
                                                                }
                                                            </Radio>
                                                        )
                                                    )}
                                                </VStack>
                                            ) : fieldType === 'Textarea' ? (
                                                <Textarea
                                                    placeholder={
                                                        config?.placeholder ||
                                                        ''
                                                    }
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            field.path,
                                                            e.target.value
                                                        )
                                                    }
                                                    value={inputValue}
                                                    size="md"
                                                />
                                            ) : fieldType === 'Variable' ? (
                                                <>
                                                    <TagInput
                                                        variableName={
                                                            inputValue?.[0]
                                                                ?.value
                                                                ?.value ||
                                                            inputValue?.value ||
                                                            inputValue?.[0]
                                                                ?.value
                                                        }
                                                        editedNode={editedNode}
                                                        setEditedNode={
                                                            setEditedNode
                                                        }
                                                        path={field.path}
                                                        definedVariables={
                                                            definedVariables
                                                        }
                                                        handleUpdateNode={
                                                            handleUpdateNode
                                                        }
                                                        isArray={config.isArray}
                                                    />
                                                </>
                                            ) : (
                                                <Input
                                                    placeholder={
                                                        config?.placeholder ||
                                                        ''
                                                    }
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            field.path,
                                                            e.target.value
                                                        )
                                                    }
                                                    value={inputValue}
                                                    size="md"
                                                />
                                            )}
                                            {isError && (
                                                <FormErrorMessage>
                                                    This field is required.
                                                </FormErrorMessage>
                                            )}
                                        </FormControl>
                                    );
                                })}
                                {displayJson && (
                                    <JsonView
                                        data={{
                                            id: editedNode.id,
                                            ...editedNode.data,
                                        }}
                                        shouldExpandNode={allExpanded}
                                        style={defaultStyles}
                                    />
                                )}
                            </VStack>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
};

const getNestedValue = (obj, path) => {
    const pathParts = path.split('.');
    for (let part of pathParts) {
        if (obj && obj.hasOwnProperty(part)) {
            obj = obj[part];
        } else {
            return undefined;
        }
    }
    return obj;
};

export default memo(DeepFieldExplorer);
