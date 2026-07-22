import { useCallback, useEffect, useRef, useState, memo } from 'react';
import {
    Input,
    VStack,
    Field,
    Checkbox,
    NativeSelect,
    Box,
    RadioGroup,
    Textarea,
    Text,
    Flex,
    IconButton,
    Badge,
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import {
    usePanelVisibility,
    useWorkflowActions,
    useWorkflowMetadata,
} from '../../contexts/NodeContext';
import CustomCheckbox from './CustomInputs/CustomCheckbox';
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import TagInput from './CustomInputs/TagInput';
import { displayNameMapping } from './InputData';

const updateValueAtPath = (currentValue, pathParts, newValue) => {
    if (pathParts.length === 0) return newValue;

    const [currentPart, ...remainingParts] = pathParts;
    if (currentPart === '*') {
        if (Array.isArray(currentValue)) {
            return currentValue.map((item) =>
                updateValueAtPath(item, remainingParts, newValue)
            );
        }

        return Object.fromEntries(
            Object.entries(currentValue ?? {}).map(([key, item]) => [
                key,
                updateValueAtPath(item, remainingParts, newValue),
            ])
        );
    }

    const source = currentValue ?? {};
    const updatedValue = Array.isArray(source) ? [...source] : { ...source };
    updatedValue[currentPart] = updateValueAtPath(
        source[currentPart],
        remainingParts,
        newValue
    );
    return updatedValue;
};

const getValueAtPath = (currentValue, pathParts) => {
    if (pathParts.length === 0) return currentValue;
    if (currentValue === null || currentValue === undefined) return undefined;

    const [currentPart, ...remainingParts] = pathParts;
    if (currentPart === '*') {
        const values = Array.isArray(currentValue)
            ? currentValue
            : Object.values(currentValue);
        for (const value of values) {
            const result = getValueAtPath(value, remainingParts);
            if (result !== undefined) return result;
        }
        return undefined;
    }

    return getValueAtPath(currentValue[currentPart], remainingParts);
};

const hasRequiredValue = (value) => {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    if (Array.isArray(value)) {
        return value.length > 0 && value.some(hasRequiredValue);
    }
    if (typeof value === 'object') {
        if (Object.hasOwn(value, 'value')) {
            return hasRequiredValue(value.value);
        }
        return Object.values(value).some(hasRequiredValue);
    }
    return true;
};

const getVisibleFieldConfigs = (node) => {
    const activityName = node?.data?.activityName || 'default';
    const fieldConfigs =
        displayNameMapping[activityName] || displayNameMapping.default;

    return fieldConfigs.filter((fieldConfig) => {
        const dependencies = fieldConfig.config?.dependsOn;
        if (!dependencies) return true;

        const dependencyList = Array.isArray(dependencies)
            ? dependencies
            : [dependencies];
        return dependencyList.every((dependency) => {
            const dependencyValue = getValueAtPath(
                node,
                dependency.path.split('.')
            );
            const actualValue = dependencyValue?.value ?? dependencyValue;
            return actualValue === dependency.value;
        });
    });
};

const withValidationState = (node) => {
    const hasMissingRequiredField = getVisibleFieldConfigs(node).some(
        (field) =>
            field.config?.required &&
            !hasRequiredValue(
                getValueAtPath(node, field.path.split('.'))
            )
    );

    return {
        ...node,
        data: {
            ...node.data,
            errorState: hasMissingRequiredField,
        },
    };
};

const SettingsCheckbox = ({ checked, onCheckedChange, children }) => (
    <Checkbox.Root
        checked={checked}
        onCheckedChange={({ checked: nextChecked }) =>
            onCheckedChange(nextChecked === true)
        }
    >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>{children}</Checkbox.Label>
    </Checkbox.Root>
);

const DeepFieldExplorer = ({ selectedNode }) => {
    const { handleUpdateNode } = useWorkflowActions();
    const { definedVariables } = useWorkflowMetadata();
    const { isVisible, handleToggleVisibility } = usePanelVisibility();
    const [editedNode, setEditedNode] = useState(() =>
        withValidationState(selectedNode)
    );
    const editedNodeRef = useRef(withValidationState(selectedNode));
    const pendingNodeRef = useRef(null);
    const persistenceTimerRef = useRef(null);
    const [displayHiddenFields, setDisplayHiddenFields] = useState(false);
    const [displayJson, setDisplayJson] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(false);
    const [displayPaths, setDisplayPaths] = useState(false);
    const [displayIsArray, setDisplayIsArray] = useState(false);
    const [fieldsReady, setFieldsReady] = useState(false);

    useEffect(() => {
        editedNodeRef.current = editedNode;
    }, [editedNode]);

    useEffect(() => {
        const frameId = requestAnimationFrame(() => setFieldsReady(true));
        return () => cancelAnimationFrame(frameId);
    }, []);

    useEffect(() => {
        if (selectedNode.data.errorState !== editedNode.data.errorState) {
            const frameId = requestAnimationFrame(() =>
                handleUpdateNode(editedNode)
            );
            return () => cancelAnimationFrame(frameId);
        }
    }, [editedNode, handleUpdateNode, selectedNode]);
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

    const visibleFields = getVisibleFieldConfigs(editedNode);

    const scheduleNodePersistence = useCallback(
        (updatedNode) => {
            pendingNodeRef.current = updatedNode;
            clearTimeout(persistenceTimerRef.current);
            persistenceTimerRef.current = setTimeout(() => {
                pendingNodeRef.current = null;
                setEditedNode(updatedNode);
                handleUpdateNode(updatedNode);
            }, 180);
        },
        [handleUpdateNode]
    );

    useEffect(
        () => () => {
            clearTimeout(persistenceTimerRef.current);
            if (pendingNodeRef.current) {
                handleUpdateNode(pendingNodeRef.current);
            }
        },
        [handleUpdateNode]
    );

    const handleInputChange = useCallback(
        (path, newValue, { deferRender = false } = {}) => {
            const updatedNode = withValidationState(
                updateValueAtPath(
                    editedNodeRef.current,
                    path.split('.'),
                    newValue
                )
            );
            editedNodeRef.current = updatedNode;

            if (!deferRender) setEditedNode(updatedNode);
            scheduleNodePersistence(updatedNode);
        },
        [scheduleNodePersistence]
    );

    const handleStructuredNodeUpdate = useCallback(
        (updatedNode) => {
            const validatedNode = withValidationState(updatedNode);
            editedNodeRef.current = validatedNode;
            setEditedNode(validatedNode);
            scheduleNodePersistence(validatedNode);
        },
        [scheduleNodePersistence]
    );

    // Function to render a single field
    const renderField = (field) => {
        const inputValue = getNestedValue(editedNode, field.path);
        const currentActivityName = editedNode?.data?.activityName || 'default';
        const isError =
            field.config?.required && !hasRequiredValue(inputValue);

        // console.log('dsdebug-log', field.path);

        return (
            <Field.Root
                required={field.config.required}
                key={field.path}
                invalid={isError}
                width="100%"
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
                        <Field.Label>
                            {getDisplayName(field.path, currentActivityName)}
                            {field.config.required && (
                                <Field.RequiredIndicator />
                            )}
                        </Field.Label>
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
                    <NativeSelect.Root width="100%">
                        <NativeSelect.Field
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
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>
                ) : field.config.type === 'Radio' ? (
                    <RadioGroup.Root
                        value={String(inputValue)}
                        onValueChange={({ value }) => {
                            const choice = field.config.choices.find(
                                (item) => String(item.value) === value
                            );
                            handleInputChange(field.path, choice?.value ?? value);
                        }}
                    >
                    <VStack align="start" gap={2}>
                        {field.config.choices.map((choice) => {
                            return (
                                <RadioGroup.Item
                                    key={choice.value}
                                    value={String(choice.value)}
                                >
                                    <RadioGroup.ItemHiddenInput />
                                    <RadioGroup.ItemIndicator />
                                    <RadioGroup.ItemText>
                                        {choice.displayName}
                                    </RadioGroup.ItemText>
                                </RadioGroup.Item>
                            );
                        })}
                    </VStack>
                    </RadioGroup.Root>
                ) : field.config.type === 'Textarea' ? (
                    <Textarea
                        placeholder={field.config.placeholder || ''}
                        onChange={(e) =>
                            handleInputChange(field.path, e.target.value, {
                                deferRender: true,
                            })
                        }
                        defaultValue={inputValue}
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
                            path={field.path}
                            definedVariables={definedVariables}
                            handleUpdateNode={handleStructuredNodeUpdate}
                            isArray={field.config.isArray}
                            getNestedValue={getNestedValue}
                        />
                    </>
                ) : (
                    <Input
                        placeholder={field.config.placeholder || ''}
                        onChange={(e) =>
                            handleInputChange(field.path, e.target.value, {
                                deferRender: true,
                            })
                        }
                        defaultValue={inputValue}
                        size="md"
                    />
                )}
                {isError && (
                    <Field.ErrorText>This field is required.</Field.ErrorText>
                )}
            </Field.Root>
        );
    };

    return (
        <>
            <IconButton
                pos="absolute"
                right={5}
                top="64px"
                onClick={handleToggleVisibility}
                variant="ghost"
                zIndex={1}
            >
                {isVisible ? <FiEyeOff /> : <FiEye />}
            </IconButton>
            {isVisible && (
                <Box
                    w="20rem"
                    backgroundColor="#fff"
                    borderLeft="1px solid #ccc"
                    overflowY="auto"
                    paddingTop={50}
                >
                    <Box marginTop="-3rem">
                        <Flex direction="column" gap={3} bg="#FAFAFA" p={4}>
                            <Text pb={1} fontWeight="bold">
                                Dev Tools
                            </Text>
                            <SettingsCheckbox checked={displayJson} onCheckedChange={setDisplayJson}>
                                Json
                            </SettingsCheckbox>
                            <SettingsCheckbox checked={displayIndex} onCheckedChange={setDisplayIndex}>
                                Group Index
                            </SettingsCheckbox>
                            <SettingsCheckbox checked={displayPaths} onCheckedChange={setDisplayPaths}>
                                Paths
                            </SettingsCheckbox>
                            <SettingsCheckbox checked={displayIsArray} onCheckedChange={setDisplayIsArray}>
                                isArray
                            </SettingsCheckbox>
                        </Flex>
                        <Box>
                            <Box p={4}>
                                <VStack gap={4}>
                                    {fieldsReady &&
                                        visibleFields.map((field) => {
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
