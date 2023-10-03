import { Grid, GridItem, Flex, Text, Box } from '@chakra-ui/react';
import Step from './Step';
import Search from '../Search';

const StepList = () => {
    return (
        <Box pb={4}>
            <Flex p={2}>
                <Text fontSize="2xl" color="#212121" pr={4}>
                    Steps
                </Text>
            </Flex>
            <Grid
                marginTop={2}
                templateColumns="repeat(auto-fit, minmax(6rem, 1fr))"
                gap={1}
                autoFlow="row"
            >
                <GridItem>
                    <Step
                        stepName="Add Documents to Watched Documents List"
                        stepImage="add_documents_to_watchlist.svg"
                        stepImageColor="#757575"
                        stepType="StepNode"
                        activityName="AddWatchedDocumentsActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Add Salesforce Activity History"
                        stepImage="add_salesforce_activity_history.svg"
                        stepImageColor="#212121"
                        stepType="StepNode"
                        activityName="AddSalesForceActivityHistoryActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Add Salesforce Task"
                        stepImage="create_new_salesforce_object.svg"
                        stepImageColor="#212121"
                        stepType="StepNode"
                        activityName="AddSalesForceTaskActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Append Text Document"
                        stepImage="generic.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="AppendTextDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Approve"
                        stepImage="approve_documents.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="ApproveDocumentsActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Cancel Electronic Signature"
                        stepImage="cancel_electronic_signature.svg"
                        stepImageColor="#ca2d2e"
                        stepType="StepNode"
                        activityName="CancelElectronicSignatureActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Check In Document"
                        stepImage="check_in_document.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="CheckInDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Check Out Document"
                        stepImage="check_out_document.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="CheckOutDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Check Out Document Cancellation"
                        stepImage="check_out_document_cancellation.svg"
                        stepImageColor="#ca2d2e"
                        stepType="StepNode"
                        activityName="CheckOutDocumentCancelActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Choice"
                        stepImage="approve_documents.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="ChoiceActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Choose Documents"
                        stepImage="choose_documents.svg"
                        stepImageColor="#ecb900"
                        stepType="StepNode"
                        activityName="ChooseDocumentsActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Choose Users"
                        stepImage="choose_users.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="ChooseUsersActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Combine Documents"
                        stepImage="merge_pdf_document.svg"
                        stepImageColor="#3366cc"
                        stepType="StepNode"
                        activityName="MergePdfDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Compare Document Versions"
                        stepImage="compare_document_versions.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="CompareDocumentVersionsActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Compare Documents"
                        stepImage="compare_document_versions.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="CompareDocumentsActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Compare Tracked Content"
                        stepImage="compare_document_versions.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="CompareTrackedContentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Convert Json to Xml"
                        stepImage="generic.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="ConvertJsonToXmlActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Copy or Move Document"
                        stepImage="copy_move_document.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="CopyMoveDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Copy or Move Folder"
                        stepImage="copy_folder.svg"
                        stepImageColor="#d13393"
                        stepType="StepNode"
                        activityName="CopyFolderActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Create Folder"
                        stepImage="create_folder.svg"
                        stepImageColor="#e98824"
                        stepType="StepNode"
                        activityName="CreateFolderActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Create Link"
                        stepImage="create_link.svg"
                        stepImageColor="#d13393"
                        stepType="StepNode"
                        activityName="CreateLinkActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Create New Salesforce Object"
                        stepImage="create_new_salesforce_object.svg"
                        stepImageColor="#212121"
                        stepType="StepNode"
                        activityName="InsertSalesforceActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Create Salesforce Folder"
                        stepImage="create_salesforce_folder.svg"
                        stepImageColor="#212121"
                        stepType="StepNode"
                        activityName="FindOrCreateSalesForceFolderActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Create Variable from CSV"
                        stepImage="update_xml_variable_from_csv.svg"
                        stepImageColor="#e78926"
                        stepType="StepNode"
                        activityName="UpdateXMLVariableFromCSVActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Create or Upload Doc"
                        stepImage="generic.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="CreateDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Data Reconciliation"
                        stepImage="xml_merge_doc.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="DataReconciliationActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Decision"
                        stepImage="rule.svg"
                        stepImageColor="#29bdbe"
                        stepType="DiamondNode"
                        activityName="DecisionActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Delete Document Reminder"
                        stepImage="generic.svg"
                        stepImageColor="#99ca3c"
                        stepType="StepNode"
                        activityName="DeleteDocumentReminderActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Document Generation"
                        stepImage="doc_launcher.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="DocLauncherActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Edit Document"
                        stepImage="edit_document.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="EditDocumentsActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Edit Form"
                        stepImage="edit_form.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="EditFormActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Email"
                        stepImage="email.svg"
                        stepImageColor="#f15a22"
                        stepType="StepNode"
                        activityName="SendEmailActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Email Document"
                        stepImage="email_document.svg"
                        stepImageColor="#E06109"
                        stepType="StepNode"
                        activityName="EmailDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Evaluate Document Text"
                        stepImage="evaluate_text.svg"
                        stepImageColor="#d13393"
                        stepType="StepNode"
                        activityName="EvaluateDocumentText"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Evaluate an XPath"
                        stepImage="evaluate_xpath.svg"
                        stepImageColor="#d13393"
                        stepType="StepNode"
                        activityName="EvaluateXPathActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Excel ETL"
                        stepImage="excel_etl.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="ExcelEtlActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Extract PDF Fields"
                        stepImage="extract_pdf_fields.svg"
                        stepImageColor="#511e36"
                        stepType="StepNode"
                        activityName="ExtractPdfFieldsActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Fax Document"
                        stepImage="copy_move_document.svg"
                        stepImageColor="#99ca3c"
                        stepType="StepNode"
                        activityName="FaxDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Fax Document and Wait"
                        stepImage="copy_move_document.svg"
                        stepImageColor="#99ca3c"
                        stepType="StepNode"
                        activityName="FaxDocumentAndWaitActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Fill Form"
                        stepImage="fill_form.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="FillFormActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Find Attachments"
                        stepImage="find_attachments.svg"
                        stepImageColor="#e98824"
                        stepType="StepNode"
                        activityName="GetDocumentAttachmentsActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Find Document"
                        stepImage="find_document.svg"
                        stepImageColor="#2BBCB6"
                        stepType="StepNode"
                        activityName="FindDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Find Documents by Folder"
                        stepImage="find_documents_by_folder.svg"
                        stepImageColor="#e98824"
                        stepType="StepNode"
                        activityName="Find Documents by Folder"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Find Documents by Metadata"
                        stepImage="find_documents_by_metadata.svg"
                        stepImageColor="#e98824"
                        stepType="StepNode"
                        activityName="FindDocumentsByMetadataActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Find EOS Parent Folder"
                        stepImage="find_eos_parent_folder.svg"
                        stepImageColor="#e98824"
                        stepType="StepNode"
                        activityName="FindEOSParentFolderActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Find Folder"
                        stepImage="find_folder.svg"
                        stepImageColor="#e98824"
                        stepType="StepNode"
                        activityName="FindFolderActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Find User"
                        stepImage="find_user.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="FindUserActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Find or Create EOS Parent Folder"
                        stepImage="find_or_create_eos_folder.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="FindOrCreateEOSFolderActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Finish"
                        stepImage="finish.svg"
                        stepImageColor="#000"
                        stepType="CircleNode"
                        activityName="EndActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="For Loop"
                        stepImage="for_each_loop.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="ForLoopActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="For-Each Loop"
                        stepImage="for_each_loop.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="XPathForEachLoopActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Full Page Edit Form"
                        stepImage="edit_form.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="FullPageEditFormActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Full Page Fill Form"
                        stepImage="fill_form.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="FullPageFillFormActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Get Next Autonumber Value"
                        stepImage="generic.svg"
                        stepImageColor="#3366cc"
                        stepType="StepNode"
                        activityName="GetNextAutoNumberValueActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Get Path"
                        stepImage="get_path.svg"
                        stepImageColor="#3366cc"
                        stepType="StepNode"
                        activityName="GetPathActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Get Tracked Content"
                        stepImage="compare_document_versions.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="GetTrackedContentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Group"
                        stepImage="generic.svg"
                        stepImageColor="#d13393"
                        stepType="GroupNode"
                        activityName="GroupBoxActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Http Client"
                        stepImage="http_client.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="HttpClientActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Invoke Web Service"
                        stepImage="invoke_web_service.svg"
                        stepImageColor="#99ca3c"
                        stepType="StepNode"
                        activityName="WebServiceActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Lane"
                        stepImage="lane.svg"
                        stepImageColor="#d13393"
                        stepType="LaneNode"
                        activityName="LaneActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Logger"
                        stepImage="logger.svg"
                        stepImageColor="#e0e0e0"
                        stepType="StepNode"
                        activityName="LogActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Merge Tracked Content"
                        stepImage="xml_merge_doc.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="MergeTrackedContentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Next Loop"
                        stepImage="next_loop.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="NextLoopActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Pool"
                        stepImage="generic.svg"
                        stepImageColor="#d13393"
                        stepType="LaneNode"
                        activityName="PoolActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Remove Documents from Watched Documents List"
                        stepImage="generic.svg"
                        stepImageColor="#757575"
                        stepType="StepNode"
                        activityName="RemoveWatchedDocumentsActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Rename Document"
                        stepImage="generic.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="RenameDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Resource Variable"
                        stepImage="resource_variable.svg"
                        stepImageColor="#3366cc"
                        stepType="StepNode"
                        activityName="ResourceVariableActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Review Data"
                        stepImage="find_documents_by_metadata.svg"
                        stepImageColor="#e98824"
                        stepType="StepNode"
                        activityName="DataReviewActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Review and Send for External Review"
                        stepImage="generic.svg"
                        stepImageColor="#1b9d1d"
                        stepType="StepNode"
                        activityName="ReviewAndSendForExternalReviewActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Review and Send for Signature"
                        stepImage="review_and_send_for_signature.svg"
                        stepImageColor="#ecb900"
                        stepType="StepNode"
                        activityName="ReviewAndSendForSignatureActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Routing"
                        stepImage="approve_documents.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="RoutingActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Rule"
                        stepImage="rule.svg"
                        stepImageColor="#29bdbe"
                        stepType="DiamondNode"
                        activityName="RuleActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Salesforce ETL"
                        stepImage="salesforce_etl.svg"
                        stepImageColor="#212121"
                        stepType="StepNode"
                        activityName="SalesforceEtlActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Schedule Document Reminder"
                        stepImage="schedule_doc_reminder.svg"
                        stepImageColor="#99ca3c"
                        stepType="StepNode"
                        activityName="ScheduleDocumentReminderActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Search"
                        stepImage="search.svg"
                        stepImageColor="#607D8B"
                        stepType="StepNode"
                        activityName="SearchActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Send for External Review"
                        stepImage="send_for_external_review.svg"
                        stepImageColor="#1b9d1d"
                        stepType="StepNode"
                        activityName="SendForExternalReviewNewActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Send for Signature"
                        stepImage="send_for_signature.svg"
                        stepImageColor="#1b9d1d"
                        stepType="StepNode"
                        activityName="SendForSignatureActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Set Workflow Output"
                        stepImage="update_variable_value.svg"
                        stepImageColor="#757575"
                        stepType="StepNode"
                        activityName="UpdateWorkflowOutputActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Set Workflow Process Name"
                        stepImage="set_workflow_process_name.svg"
                        stepImageColor="#e98824"
                        stepType="StepNode"
                        activityName="SetWorkflowScopeNameActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Split Document"
                        stepImage="split_document.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="SplitDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Timer Trigger"
                        stepImage="generic.svg"
                        stepImageColor="#99ca3c"
                        stepType="StepNode"
                        activityName="SimpleDelayActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Document Keywords"
                        stepImage="copy_move_document.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="UpdateDocumentKeywordActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Document Metadata Value"
                        stepImage="update_metadata.svg"
                        stepImageColor="#cc3791"
                        stepType="StepNode"
                        activityName="UpdateDocumentMetadataActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Folder Description"
                        stepImage="update_folder_description.svg"
                        stepImageColor="#e98824"
                        stepType="StepNode"
                        activityName="UpdateFolderDescriptionActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Folder Metadata Value"
                        stepImage="update_folder_metadata_value.svg"
                        stepImageColor="#e78926"
                        stepType="StepNode"
                        activityName="UpdateFolderMetadataActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Information"
                        stepImage="status_change.svg"
                        stepImageColor="#e98824"
                        stepType="StepNode"
                        activityName="UpdateStatusActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Parent Variable"
                        stepImage="update_parent_variable.svg"
                        stepImageColor="#d13393"
                        stepType="StepNode"
                        activityName="UpdateParentVariableActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Salesforce"
                        stepImage="update_salesforce.svg"
                        stepImageColor="#212121"
                        stepType="StepNode"
                        activityName="UpdateSalesForceActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Security"
                        stepImage="update_security.svg"
                        stepImageColor="#1A237E"
                        stepType="StepNode"
                        activityName="UpdateSecurityActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Variable From CSV"
                        stepImage="update_xml_variable_from_csv.svg"
                        stepImageColor="#d13393"
                        stepType="StepNode"
                        activityName="UpdateVariableFromCSVActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Variable From XML"
                        stepImage="update_xml_variable_from_csv.svg"
                        stepImageColor="#d13393"
                        stepType="StepNode"
                        activityName="UpdateVariableFromXMLActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Update Variable Value"
                        stepImage="update_variable_value.svg"
                        stepImageColor="#d13393"
                        stepType="StepNode"
                        activityName="UpdateVariableActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Wait for External Review"
                        stepImage="wait_for_external_review.svg"
                        stepImageColor="#1b9d1d"
                        stepType="StepNode"
                        activityName="WaitForExternalReviewActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Wait for Signal"
                        stepImage="wait_for_signal.svg"
                        stepImageColor="#99ca3c"
                        stepType="StepNode"
                        activityName="WaitForSignal"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Wait for Signature"
                        stepImage="wait_for_signature.svg"
                        stepImageColor="#1b9d1d"
                        stepType="StepNode"
                        activityName="WaitForSignatureActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Watermark Document"
                        stepImage="generic.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="WatermarkDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Workflow"
                        stepImage="generic.svg"
                        stepImageColor="#757575"
                        stepType="StepNode"
                        activityName="WorkflowActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="Write Text Document"
                        stepImage="write_text_doc.svg"
                        stepImageColor="#f7b618"
                        stepType="StepNode"
                        activityName="WriteTextDocumentActivity"
                    />
                </GridItem>
                <GridItem>
                    <Step
                        stepName="XML Merge Document"
                        stepImage="xml_merge_doc.svg"
                        stepImageColor="#29bdbe"
                        stepType="StepNode"
                        activityName="XmlMergeDocumentActivity"
                    />
                </GridItem>
            </Grid>
        </Box>
    );
};

export default StepList;
