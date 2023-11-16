import { Checkbox } from '@chakra-ui/react';

const CustomCheckbox = ({
    editedNode,
    handleInputChange,
    getNestedValue,
    field,
    getDisplayName,
    currentActivityName,
}) => {
    // Function to interpret value as boolean
    function interpretAsBoolean(value, boolValues) {
        if (boolValues) {
            return value === boolValues[0];
        }
        return value === true || value === 'true'; // Handle standard boolean values
    }

    // Function to convert boolean back to value
    function convertToCustomValue(boolValue, boolValues) {
        if (boolValues) {
            return boolValue ? boolValues[0] : boolValues[1];
        }
        return boolValue; // Handle standard boolean values
    }

    // Check if field has custom boolean values defined
    const boolValues = field.config?.boolValues;

    // Interpret the current value as boolean for checkbox state
    const isChecked = interpretAsBoolean(
        getNestedValue(editedNode, field.path),
        boolValues
    );

    // Handle checkbox change
    const handleChange = (e) => {
        // Convert the new checkbox state back to value
        const newValue = convertToCustomValue(e.target.checked, boolValues);
        handleInputChange(field.path, newValue);
    };

    return (
        <Checkbox isChecked={isChecked} onChange={handleChange}>
            {getDisplayName(field.path, currentActivityName)}
        </Checkbox>
    );
};

export default CustomCheckbox;
