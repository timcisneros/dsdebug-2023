import React, { useState, useEffect } from 'react';
import {
    Box,
    Input,
    Flex,
    Tag,
    TagLabel,
    TagCloseButton,
} from '@chakra-ui/react';

function TagInput({ variable }) {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [inputDisabled, setInputDisabled] = useState(false);

    useEffect(() => {
        // Add the prop variable as a tag when it's provided
        if (variable) {
            setTags([variable]);
            setInputDisabled(true);
        }
    }, [variable]);

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setTags([...tags, inputValue]);
            setInputValue(''); // Clear the input
            setInputDisabled(true); // Disable the input when a tag exists
        }
    };

    const handleTagRemove = (tagToRemove) => {
        const updatedTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(updatedTags);
        setInputDisabled(false); // Re-enable the input when a tag is deleted
    };

    return (
        <Box position="relative">
            <Input
                position="relative"
                placeholder="Add Variable"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleInputKeyPress}
                backgroundColor="#fff"
                disabled={inputDisabled}
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
        </Box>
    );
}

export default TagInput;
