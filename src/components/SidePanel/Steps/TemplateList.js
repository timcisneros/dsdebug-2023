import { useState, useEffect } from 'react';
import {
    Grid,
    GridItem,
    Flex,
    Text,
    Box,
    Checkbox,
    Tooltip,
    IconButton,
    CloseButton,
} from '@chakra-ui/react';
import Step from './Step';
import Search from '../Search';
import AddTemplateButton from './AddTemplateButton';
import { useNode } from '../../../contexts/NodeContext';
import { InfoIcon } from '@chakra-ui/icons';

const TemplateList = () => {
    const { iterateVars, setIterateVars } = useNode();
    const [templateLists, setTemplateLists] = useState([]);

    // Load items from local storage on page load
    useEffect(() => {
        const storedTemplates =
            JSON.parse(localStorage.getItem('templates')) || [];
        setTemplateLists(storedTemplates);
    }, []);

    // Function to remove a template by name from state and local storage
    const removeTemplate = (templateName) => {
        const updatedTemplates = templateLists.filter(
            (template) => template.name !== templateName
        );
        setTemplateLists(updatedTemplates);
        localStorage.setItem('templates', JSON.stringify(updatedTemplates));
    };

    const handleUpload = (jsonData, fileName) => {
        // Add the uploaded data to the template list
        setTemplateLists((prevList) => [
            ...prevList,
            { name: fileName, data: jsonData },
        ]);

        // Save the uploaded data to local storage
        const storedTemplates =
            JSON.parse(localStorage.getItem('templates')) || [];
        const updatedTemplates = [
            ...storedTemplates,
            { name: fileName, data: jsonData },
        ];
        localStorage.setItem('templates', JSON.stringify(updatedTemplates));
    };

    return (
        <Box pb={4}>
            <Flex p={2}>
                <Text fontSize="2xl" color="#212121" pr={4}>
                    Templates
                </Text>
            </Flex>
            <Grid
                marginTop={2}
                templateColumns="repeat(auto-fit, minmax(6rem, 1fr))"
                gap={1}
                autoFlow="row"
            >
                {templateLists.map((templateList) => (
                    <GridItem key={templateList.name} position="relative">
                        <CloseButton
                            position="absolute"
                            margin={1}
                            zIndex={1}
                            size="sm"
                            onClick={() => removeTemplate(templateList.name)}
                        />

                        <Step
                            stepName={templateList.name}
                            stepImage="basic-shape-ui.svg"
                            stepImageColor="#757575"
                            stepType="Template"
                            activityName="CaaSIndexing"
                            stepData={templateList.data}
                        />
                    </GridItem>
                ))}
                <GridItem>
                    <Step
                        stepName="CaaS Indexing"
                        stepImage="basic-shape-ui.svg"
                        stepImageColor="#757575"
                        stepType="Template"
                        activityName="CaaSIndexing"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="CaaS Routing"
                        stepImage="basic-shape-ui.svg"
                        stepImageColor="#757575"
                        stepType="Template"
                        activityName="CaaSRouting"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="XYZ Contract Management"
                        stepImage="basic-shape-ui.svg"
                        stepImageColor="#757575"
                        stepType="Template"
                        activityName="XyzContractManagement"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Internal Approval"
                        stepImage="basic-shape-ui.svg"
                        stepImageColor="#757575"
                        stepType="Template"
                        activityName="InternalApproval"
                    />
                </GridItem>
            </Grid>
            <Flex
                flexDirection="column"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <AddTemplateButton onUpload={handleUpload} />
                <Flex alignItems="center" mt={2}>
                    <Checkbox
                        name="iterateVars"
                        isChecked={iterateVars}
                        onChange={() => setIterateVars(!iterateVars)}
                    >
                        Unique Variables
                    </Checkbox>
                    <Tooltip
                        label="Make merged variable names unique"
                        placement="top"
                    >
                        <InfoIcon ml={2} cursor="help" />
                    </Tooltip>
                </Flex>
            </Flex>
        </Box>
    );
};

export default TemplateList;
