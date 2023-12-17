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
} from '@chakra-ui/react';
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

const DeepFieldExplorer = ({ data }) => {
    const { handleUpdateNode, definedVariables } = useNode();
    const [fields, setFields] = useState([]);
    const [editedNode, setEditedNode] = useState(data);
    const [displayHiddenFields, setDisplayHiddenFields] = useState(false);
    const [displayJson, setDisplayJson] = useState(false);

    const isFiltered = (key, currentPath) => {
        const usingFilter =
            data.data?.activityName === 'StartActivity'
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

    //     const deepestFields = findDeepestFields(data);
    //     setFields(deepestFields);
    // }, [data, displayHiddenFields]);

    const findDeepestFields = (obj, currentPath = []) => {
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

    useEffect(() => {
        const currentActivityName = data.data?.activityName || 'default';
        const activityFieldsConfig =
            displayNameMapping[currentActivityName] ||
            displayNameMapping['default'];

        let deepestFields = findDeepestFields(data);

        // Apply activity-specific configurations to deepestFields
        const fieldsForActivity = deepestFields.map((field) => {
            try {
                const fieldConfig = activityFieldsConfig.find((config) =>
                    matchPathWithWildcard(config.path, field.path)
                );
                return {
                    ...field,
                    config: fieldConfig ? fieldConfig.config : {},
                };
            } catch (err) {
                console.log('dsdebug-log', err.message);
            }
        });

        setFields(fieldsForActivity);
    }, [data, displayHiddenFields]);

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

    useEffect(() => {
        setEditedNode(data); // Whenever the data prop changes, set it to editedNode
    }, [data]);

    // Get the configured fields for the current activity
    const currentActivityName = data.data?.activityName || 'default';
    const activityFieldsConfig =
        displayNameMapping[currentActivityName] ||
        displayNameMapping['default'];

    // Filter out hidden fields based on the activity type
    const visibleFields = activityFieldsConfig.filter((field) => {
        const pathParts = field.path.split('.');
        let obj = data;

        for (let part of pathParts) {
            if (obj && obj.hasOwnProperty(part)) {
                obj = obj[part];
            } else {
                // Return false if wanting to hide fields not already in the JSON data object
                return field;
            }
        }

        return true;
    });

    console.log('dsdebug-log', activityFieldsConfig);

    const handleInputChange = (path, newValue) => {
        let updatedNode = JSON.parse(JSON.stringify(editedNode)); // Deep clone editedNode

        const setValueAtPath = (obj, path, value) => {
            const pathParts = path.split('.');
            for (let i = 0; i < pathParts.length - 1; i++) {
                const part = pathParts[i];
                if (!obj[part]) obj[part] = {}; // Create nested object if it doesn't exist
                obj = obj[part];
            }
            obj[pathParts[pathParts.length - 1]] = value;
        };

        setValueAtPath(updatedNode, path, newValue);

        const pathParts = path.split('.');
        let obj = updatedNode;

        // Traverse to the parent object of the value we want to change
        for (let i = 0; i < pathParts.length - 1; i++) {
            obj = obj[pathParts[i]];
        }

        // Change the value
        obj[pathParts[pathParts.length - 1]] = newValue;

        // Perform validation check
        const allFilled = fields.every((field) => {
            try {
                if (field.config.required) {
                    const fieldValue =
                        field.path === path
                            ? newValue
                            : getNestedValue(updatedNode, field.path);
                    return fieldValue.trim() !== '';
                }
                return true;
            } catch (error) {
                // console.error('dsdebug-log', `Error - ${error.message}`);
            }
        });

        const errorState = !allFilled;

        // Update the errorState based on form validity
        if (
            updatedNode.type === 'StepNode' ||
            updatedNode.type === 'DiamondNode'
        ) {
            if (Object.hasOwn(updatedNode.data, 'errorState')) {
                updatedNode.data.errorState = errorState;
            }
            if (
                Object.hasOwn(updatedNode.data.attrs.rect, 'data-error-state')
            ) {
                updatedNode.data.attrs.rect['data-error-state'] =
                    errorState.toString();
            }
            if (
                Object.hasOwn(
                    updatedNode.data.attrs['.step-container'],
                    'data-error-state'
                )
            ) {
                updatedNode.data.attrs['.step-container']['data-error-state'] =
                    errorState;
            }
        }

        // Update the editedNode state
        setEditedNode(updatedNode);

        // Update the node immediately without waiting for a save action
        handleUpdateNode(updatedNode);
    };

    return (
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
                            data.data.activityName || 'default';

                        const isError = config.required && inputValue === '';

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
                                        handleInputChange={handleInputChange}
                                        getNestedValue={getNestedValue}
                                        field={field}
                                        getDisplayName={getDisplayName}
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
                                        {config.choices.map((choice) => (
                                            <option
                                                key={choice.value}
                                                value={choice.value}
                                            >
                                                {choice.displayName}
                                            </option>
                                        ))}
                                    </Select>
                                ) : fieldType === 'Radio' ? (
                                    <VStack align="start">
                                        {config.choices.map((choice) => (
                                            <Radio
                                                key={choice.value}
                                                value={choice.value}
                                                isChecked={
                                                    inputValue === choice.value
                                                }
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        field.path,
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                {choice.displayName}
                                            </Radio>
                                        ))}
                                    </VStack>
                                ) : fieldType === 'Textarea' ? (
                                    <Textarea
                                        placeholder={config?.placeholder || ''}
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
                                        {console.log('dsdebug-log', field)}
                                        <TagInput
                                            variableName={
                                                inputValue?.[0]?.value?.value
                                            }
                                            editedNode={editedNode}
                                            setEditedNode={setEditedNode}
                                            path={field.path}
                                            definedVariables={definedVariables}
                                            handleUpdateNode={handleUpdateNode}
                                        />
                                    </>
                                ) : (
                                    <Input
                                        placeholder={config?.placeholder || ''}
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
                            data={{ id: data.id, ...data.data }}
                            shouldExpandNode={allExpanded}
                            style={defaultStyles}
                        />
                    )}
                </VStack>
            </Box>
        </Box>
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
