import { Flex, Button } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
import { useRef } from 'react'; // Import useRef to access the input element

const AddTemplateButton = ({ onUpload }) => {
    const fileInputRef = useRef(null);

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const jsonData = JSON.parse(e.target.result);

                    // Get the file name without extension
                    const fileNameWithoutExtension =
                        getFileNameWithoutExtension(file.name);

                    // Call the onUpload callback with the uploaded JSON data
                    onUpload(jsonData, fileNameWithoutExtension);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            };
            reader.readAsText(file);
        }
    };

    const getFileNameWithoutExtension = (fileName) => {
        return fileName.slice(0, fileName.lastIndexOf('.'));
    };

    return (
        <Flex pt="4" justifyContent="center">
            <label>
                <Button
                    as="div"
                    size="sm"
                    borderRadius="50"
                    color="#fff"
                    backgroundColor="#757575"
                    _hover={{ backgroundColor: '#2d2d2d' }}
                    cursor="pointer"
                >
                    <SmallAddIcon /> Upload Template
                </Button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    style={{ display: 'none' }}
                    onChange={handleFileInputChange}
                />
            </label>
        </Flex>
    );
};

export default AddTemplateButton;
