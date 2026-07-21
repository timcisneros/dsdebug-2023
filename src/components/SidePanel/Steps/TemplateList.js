import { useSyncExternalStore, memo } from 'react';
import {
    Grid,
    GridItem,
    Flex,
    Text,
    Box,
    Checkbox,
    IconButton,
    CloseButton,
    Tooltip,
} from '@chakra-ui/react';
import Step from './Step';
import Search from '../Search';
import AddTemplateButton from './AddTemplateButton';
import { useNode } from '../../../contexts/NodeContext';
import { FiInfo } from 'react-icons/fi';

const templateStorageKey = 'templates';
const templateChangeEvent = 'templates-changed';
const getTemplatesSnapshot = () =>
    localStorage.getItem(templateStorageKey) ?? '[]';
const getServerTemplatesSnapshot = () => '[]';
const subscribeToTemplates = (callback) => {
    window.addEventListener('storage', callback);
    window.addEventListener(templateChangeEvent, callback);
    return () => {
        window.removeEventListener('storage', callback);
        window.removeEventListener(templateChangeEvent, callback);
    };
};

const TemplateList = () => {
    const { iterateVars, setIterateVars } = useNode();
    const storedTemplates = useSyncExternalStore(
        subscribeToTemplates,
        getTemplatesSnapshot,
        getServerTemplatesSnapshot
    );
    const templateLists = JSON.parse(storedTemplates);

    const saveTemplates = (templates) => {
        localStorage.setItem(templateStorageKey, JSON.stringify(templates));
        window.dispatchEvent(new Event(templateChangeEvent));
    };

    // Function to remove a template by name from state and local storage
    const removeTemplate = (templateName) => {
        const updatedTemplates = templateLists.filter(
            (template) => template.name !== templateName
        );
        saveTemplates(updatedTemplates);
    };

    const handleUpload = (jsonData, fileName) => {
        const updatedTemplates = [
            ...templateLists,
            { name: fileName, data: jsonData },
        ];
        saveTemplates(updatedTemplates);
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
                <GridItem>
                    <Step
                        stepName="Start Another Process"
                        stepImage="basic-shape-ui.svg"
                        stepImageColor="#757575"
                        stepType="Template"
                        activityName="StartAnotherProcess"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Edit Document"
                        stepImage="basic-shape-ui.svg"
                        stepImageColor="#757575"
                        stepType="Template"
                        activityName="EditDocument"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Negotiation"
                        stepImage="basic-shape-ui.svg"
                        stepImageColor="#757575"
                        stepType="Template"
                        activityName="Negotiation"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Routing"
                        stepImage="basic-shape-ui.svg"
                        stepImageColor="#757575"
                        stepType="Template"
                        activityName="Routing"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Signature"
                        stepImage="basic-shape-ui.svg"
                        stepImageColor="#757575"
                        stepType="Template"
                        activityName="Signature"
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
                    <Checkbox.Root
                        name="iterateVars"
                        checked={iterateVars}
                        onCheckedChange={({ checked }) =>
                            setIterateVars(checked === true)
                        }
                    >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label>Unique Variables</Checkbox.Label>
                    </Checkbox.Root>
                    <Tooltip.Root positioning={{ placement: 'top' }}>
                        <Tooltip.Trigger asChild>
                            <IconButton ml={2} cursor="help" variant="ghost" size="xs">
                                <FiInfo />
                            </IconButton>
                        </Tooltip.Trigger>
                        <Tooltip.Positioner>
                            <Tooltip.Content>
                                Make merged variable names unique
                            </Tooltip.Content>
                        </Tooltip.Positioner>
                    </Tooltip.Root>
                </Flex>
            </Flex>
        </Box>
    );
};

export default memo(TemplateList);
