import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    memo,
} from 'react';
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
} from '../../contexts/NodeContext';
import CustomCheckbox from './CustomInputs/CustomCheckbox';
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import TagInput from './CustomInputs/TagInput';
import { displayNameMapping } from './InputData';
import {
    applyDraftValues,
    updateValueAtPath,
} from '../../utils/nodeDraft';

const pathPartsCache = new Map();
const getPathParts = (path) => {
    let pathParts = pathPartsCache.get(path);
    if (!pathParts) {
        pathParts = path.split('.');
        pathPartsCache.set(path, pathParts);
    }
    return pathParts;
};

const compiledDisplayNameMapping = Object.fromEntries(
    Object.entries(displayNameMapping).map(([activityName, fieldConfigs]) => [
        activityName,
        fieldConfigs.map((fieldConfig) => ({
            ...fieldConfig,
            pathParts: getPathParts(fieldConfig.path),
            dependencyConfigs: (
                Array.isArray(fieldConfig.config?.dependsOn)
                    ? fieldConfig.config.dependsOn
                    : fieldConfig.config?.dependsOn
                      ? [fieldConfig.config.dependsOn]
                      : []
            ).map((dependency) => ({
                ...dependency,
                pathParts: getPathParts(dependency.path),
            })),
        })),
    ])
);

const getActivityFieldConfigs = (activityName) =>
    compiledDisplayNameMapping[activityName] ||
    compiledDisplayNameMapping.default;

const doesPathMatchPattern = (patternParts, pathParts) =>
    patternParts.length === pathParts.length &&
    patternParts.every(
        (patternPart, index) =>
            patternPart === '*' || patternPart === pathParts[index]
    );

const getDisplayName = (path, activityName) => {
    const pathParts = getPathParts(path);
    const matchingConfig = getActivityFieldConfigs(activityName).find(
        (config) => doesPathMatchPattern(config.pathParts, pathParts)
    );
    return matchingConfig?.config?.displayName || path;
};

const getValueAtPath = (currentValue, pathParts, pathIndex = 0) => {
    if (pathIndex === pathParts.length) return currentValue;
    if (currentValue === null || currentValue === undefined) return undefined;

    const currentPart = pathParts[pathIndex];
    if (currentPart === '*') {
        const values = Array.isArray(currentValue)
            ? currentValue
            : Object.values(currentValue);
        for (const value of values) {
            const result = getValueAtPath(value, pathParts, pathIndex + 1);
            if (result !== undefined) return result;
        }
        return undefined;
    }

    return getValueAtPath(
        currentValue[currentPart],
        pathParts,
        pathIndex + 1
    );
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
    const fieldConfigs = getActivityFieldConfigs(activityName);

    return fieldConfigs.filter((fieldConfig) => {
        return fieldConfig.dependencyConfigs.every((dependency) => {
            const dependencyValue = getValueAtPath(node, dependency.pathParts);
            const actualValue = dependencyValue?.value ?? dependencyValue;
            return actualValue === dependency.value;
        });
    });
};

export const getNodeValidationErrors = (node) =>
    getVisibleFieldConfigs(node)
        .filter(
            (field) =>
                field.config?.required &&
                !hasRequiredValue(getValueAtPath(node, field.pathParts))
        )
        .map((field) => ({
            path: field.path,
            displayName: getDisplayName(
                field.path,
                node?.data?.activityName || 'default'
            ),
        }));

const withValidationState = (node) => {
    const hasMissingRequiredField = getNodeValidationErrors(node).length > 0;

    return {
        ...node,
        data: {
            ...node.data,
            errorState: hasMissingRequiredField,
        },
    };
};

const applyNodeDraftValues = (node, draftValues) =>
    draftValues.size === 0
        ? node
        : withValidationState(
              applyDraftValues(node, draftValues, getPathParts)
          );

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

const SettingsField = memo(function SettingsField({
    field,
    inputValue,
    editedNode,
    currentActivityName,
    displayPaths,
    displayIsArray,
    handleInputChange,
    handleInputBlur,
    handleStructuredNodeUpdate,
    getNestedValue,
}) {
    const isError =
        field.config?.required && !hasRequiredValue(inputValue);

    return (
        <Field.Root
            required={field.config.required}
            invalid={isError}
            width="100%"
            onBlur={handleInputBlur}
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
                        onChange={(event) =>
                            handleInputChange(field.path, event.target.value)
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
                        handleInputChange(
                            field.path,
                            choice?.value ?? value
                        );
                    }}
                >
                    <VStack align="start" gap={2}>
                        {field.config.choices.map((choice) => (
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
                        ))}
                    </VStack>
                </RadioGroup.Root>
            ) : field.config.type === 'Textarea' ? (
                <Textarea
                    placeholder={field.config.placeholder || ''}
                    onChange={(event) =>
                        handleInputChange(field.path, event.target.value)
                    }
                    value={inputValue ?? ''}
                    size="md"
                />
            ) : field.config.type === 'Variable' ? (
                <TagInput
                    key={JSON.stringify(inputValue)}
                    field={field}
                    variableName={
                        inputValue?.[0]?.value?.value ||
                        inputValue?.value ||
                        inputValue?.[0]?.value
                    }
                    editedNode={editedNode}
                    path={field.path}
                    handleUpdateNode={handleStructuredNodeUpdate}
                    isArray={field.config.isArray}
                    getNestedValue={getNestedValue}
                />
            ) : (
                <Input
                    placeholder={field.config.placeholder || ''}
                    onChange={(event) =>
                        handleInputChange(field.path, event.target.value)
                    }
                    value={inputValue ?? ''}
                    size="md"
                />
            )}
            {isError && (
                <Field.ErrorText>This field is required.</Field.ErrorText>
            )}
        </Field.Root>
    );
}, (previousProps, nextProps) => {
    const fieldType = nextProps.field.config.type;
    const needsCompleteNode = fieldType === 'Bool' || fieldType === 'Variable';

    return (
        previousProps.field === nextProps.field &&
        previousProps.inputValue === nextProps.inputValue &&
        previousProps.currentActivityName === nextProps.currentActivityName &&
        previousProps.displayPaths === nextProps.displayPaths &&
        previousProps.displayIsArray === nextProps.displayIsArray &&
        previousProps.handleInputChange === nextProps.handleInputChange &&
        previousProps.handleInputBlur === nextProps.handleInputBlur &&
        previousProps.handleStructuredNodeUpdate ===
            nextProps.handleStructuredNodeUpdate &&
        previousProps.getNestedValue === nextProps.getNestedValue &&
        (!needsCompleteNode ||
            previousProps.editedNode === nextProps.editedNode)
    );
});

const DeepFieldExplorer = ({ selectedNode }) => {
    const { handleUpdateNode } = useWorkflowActions();
    const { isVisible, handleToggleVisibility } = usePanelVisibility();
    const synchronizedNode = useMemo(
        () => withValidationState(selectedNode),
        [selectedNode]
    );
    const [draftValues, setDraftValues] = useState(() => new Map());
    const editedNode = useMemo(
        () => applyNodeDraftValues(synchronizedNode, draftValues),
        [draftValues, synchronizedNode]
    );
    const synchronizedNodeRef = useRef(synchronizedNode);
    const pendingDraftValuesRef = useRef(null);
    const persistenceTimerRef = useRef(null);
    const [displayHiddenFields, setDisplayHiddenFields] = useState(false);
    const [displayJson, setDisplayJson] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(false);
    const [displayPaths, setDisplayPaths] = useState(false);
    const [displayIsArray, setDisplayIsArray] = useState(false);

    useEffect(() => {
        synchronizedNodeRef.current = synchronizedNode;
    }, [synchronizedNode]);

    useEffect(() => {
        if (draftValues.size > 0) return;
        if (selectedNode.data.errorState !== editedNode.data.errorState) {
            const frameId = requestAnimationFrame(() =>
                handleUpdateNode(editedNode)
            );
            return () => cancelAnimationFrame(frameId);
        }
    }, [draftValues.size, editedNode, handleUpdateNode, selectedNode]);
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

    const getNestedValue = useCallback(
        (object, path) => getValueAtPath(object, getPathParts(path)),
        []
    );

    const visibleFields = useMemo(
        () => getVisibleFieldConfigs(editedNode),
        [editedNode]
    );

    const scheduleNodePersistence = useCallback(
        (nextDraftValues) => {
            pendingDraftValuesRef.current = nextDraftValues;
            clearTimeout(persistenceTimerRef.current);
            persistenceTimerRef.current = setTimeout(() => {
                if (pendingDraftValuesRef.current !== nextDraftValues) return;
                pendingDraftValuesRef.current = null;
                const updatedNode = applyNodeDraftValues(
                    synchronizedNodeRef.current,
                    nextDraftValues
                );
                handleUpdateNode(updatedNode);
                setDraftValues((currentDraftValues) =>
                    currentDraftValues === nextDraftValues
                        ? new Map()
                        : currentDraftValues
                );
            }, 180);
        },
        [handleUpdateNode]
    );

    const persistPendingNode = useCallback((clearDraft) => {
        clearTimeout(persistenceTimerRef.current);
        const pendingDraftValues = pendingDraftValuesRef.current;
        if (!pendingDraftValues) return;
        pendingDraftValuesRef.current = null;
        handleUpdateNode(
            applyNodeDraftValues(
                synchronizedNodeRef.current,
                pendingDraftValues
            )
        );
        if (clearDraft) setDraftValues(new Map());
    }, [handleUpdateNode]);

    const flushNodePersistence = useCallback(
        () => persistPendingNode(true),
        [persistPendingNode]
    );

    useEffect(
        () => () => {
            persistPendingNode(false);
        },
        [persistPendingNode]
    );

    const handleInputChange = useCallback(
        (path, newValue) => {
            const nextDraftValues = new Map(
                pendingDraftValuesRef.current ?? draftValues
            );
            nextDraftValues.set(path, newValue);
            pendingDraftValuesRef.current = nextDraftValues;
            setDraftValues(nextDraftValues);
            scheduleNodePersistence(nextDraftValues);
        },
        [draftValues, scheduleNodePersistence]
    );

    const handleStructuredNodeUpdate = useCallback(
        (updatedNode) => {
            const validatedNode = withValidationState(updatedNode);
            clearTimeout(persistenceTimerRef.current);
            pendingDraftValuesRef.current = null;
            setDraftValues(new Map());
            handleUpdateNode(validatedNode);
        },
        [handleUpdateNode]
    );

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
                                    {visibleFields.map((field) => (
                                            <SettingsField
                                                key={field.path}
                                                field={field}
                                                inputValue={getValueAtPath(
                                                    editedNode,
                                                    field.pathParts
                                                )}
                                                editedNode={editedNode}
                                                currentActivityName={
                                                    editedNode?.data
                                                        ?.activityName ||
                                                    'default'
                                                }
                                                displayPaths={displayPaths}
                                                displayIsArray={
                                                    displayIsArray
                                                }
                                                handleInputChange={
                                                    handleInputChange
                                                }
                                                handleInputBlur={
                                                    flushNodePersistence
                                                }
                                                handleStructuredNodeUpdate={
                                                    handleStructuredNodeUpdate
                                                }
                                                getNestedValue={
                                                    getNestedValue
                                                }
                                            />
                                        ))}
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
