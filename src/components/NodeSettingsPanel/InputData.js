export const displayNameMapping = {
    StartActivity: [
        {
            path: 'data.workflowName.value',
            config: {
                displayName: 'Workflow Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.sendNotification.value',
            config: {
                displayName: 'Send Notification',
                type: 'Bool',
            },
        },
        {
            path: 'data.notifiers.value',
            config: {
                displayName: 'Users To Receive Notification',
                type: 'Variable',
                dependsOn: {
                    path: 'data.sendNotification',
                    value: true, // This field is visible only if the path value returns `true`
                },
            },
        },
        {
            path: 'data.trackActivity.value',
            config: {
                displayName: 'Track Activity',
                type: 'Bool',
            },
        },
    ],
    AddWatchedDocumentsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.users.value',
            config: {
                displayName: 'User(s)',
                type: 'Variable',
                required: true,
            },
        },
    ],
    AddSalesForceActivityHistoryActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.whatId.value',
            config: {
                displayName: 'Salesforce Object Id',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.subject.value',
            config: {
                displayName: 'Activity History Subject',
                type: 'String',
            },
        },
        {
            path: 'data.description.value',
            config: {
                displayName: 'Activity History Description',
                type: 'String',
            },
        },
    ],
    AddSalesForceTaskActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.whatId.value',
            config: {
                displayName: 'Salesforce Object Id',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.ownerId.value',
            config: {
                displayName: 'Salesforce Object Owner Id',
                type: 'String',
            },
        },
        {
            path: 'data.contactId.value',
            config: {
                displayName: 'Salesforce Object Contact Id',
                type: 'String',
            },
        },
        {
            path: 'data.subject.value',
            config: {
                displayName: 'Activity History Subject',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.description.value',
            config: {
                displayName: 'Activity History Description',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.dueDate.value',
            config: {
                displayName: 'Task Due Date',
                type: 'String',
            },
        },
        {
            path: 'data.status.value',
            config: {
                displayName: 'Status',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'In Progress', value: 'In Progress' },
                    { displayName: 'Not Started', value: 'Not Started' },
                    { displayName: 'Completed', value: 'Completed' },
                    {
                        displayName: 'Waiting on someone else',
                        value: 'Waiting on someone else',
                    },
                    { displayName: 'Deferred', value: 'Deferred' },
                ],
            },
        },
    ],
    AppendTextDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.targetDocument.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.textSourceType.value',
            config: {
                displayName: 'Select Text Source',
                type: 'Radio',
                choices: [
                    { displayName: 'Text', value: 'text' },
                    { displayName: 'Variable', value: 'variable' },
                ],
            },
        },
        {
            path: 'data.sourceText.value',
            config: {
                displayName: 'Text',
                required: true,
            },
        },
        {
            path: 'data.outputXml.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    ApproveDocumentsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.checkoutDocuments.value',
            config: {
                displayName: 'Checkout the document?',
                type: 'Bool',
            },
        },
        {
            path: 'data.compareVersion.value',
            config: {
                displayName: 'Compare this document with another version',
                type: 'Bool',
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.assignedUsersInOrder.value',
            config: {
                displayName: 'Assign tasks in order?',
                type: 'Bool',
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.approveText.value',
            config: {
                displayName: 'Approve Button Text',
                type: 'String',
            },
        },
        {
            path: 'data.rejectText.value',
            config: {
                displayName: 'Reject Button Text',
                type: 'String',
            },
        },
        {
            path: 'data.addCustomAction.value',
            config: {
                displayName: 'Add a custom action',
                type: 'Bool',
            },
        },
        {
            path: 'data.allowComment.value',
            config: {
                displayName: 'Comments',
                type: 'Choice',
                choices: [
                    { displayName: 'Comments are required', value: 'Required' },
                    { displayName: 'Comments are optional', value: 'Yes' },
                    {
                        displayName: "Don't show the comment field",
                        value: 'No',
                    },
                ],
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        // REMOVE LATER
        {
            path: 'data.timeout.value.*.initial.value.months',
            config: {
                displayName: 'Months',
                type: 'String',
            },
        },
        {
            path: 'data.timeout.value.*.initial.value.weeks',
            config: {
                displayName: 'Weeks',
                type: 'String',
            },
        },
        {
            path: 'data.timeout.value.*.initial.value.days',
            config: {
                displayName: 'Days',
                type: 'String',
            },
        },
        {
            path: 'data.timeout.value.*.initial.value.hours',
            config: {
                displayName: 'Hours',
                type: 'String',
            },
        },
        {
            path: 'data.timeout.value.*.initial.value.minutes',
            config: {
                displayName: 'Minutes',
                type: 'String',
            },
        },
        {
            path: 'data.timeout.value.*.initial.value.seconds',
            config: {
                displayName: 'Seconds',
                type: 'String',
            },
        },
        {
            path: 'data.timeout.value.*.calendar.value',
            config: {
                displayName: 'Use business days only',
                type: 'Bool',
                boolValues: ['Business Hour', ''],
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.requiredApprovalCount.value',
            config: {
                displayName: "What should trigger an 'approved' output?",
                type: 'Radio',
                choices: [
                    {
                        displayName: 'If any of the respondents approve',
                        value: 1,
                    },
                    {
                        displayName: 'If all of the respondents approve',
                        value: 100,
                    },
                ],
            },
        },
    ],
    CancelElectronicSignatureActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document(s)',
                type: 'Variable',
                required: true,
            },
        },
    ],
    CheckInDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.checkedOutDocument.value',
            config: {
                displayName: 'Checked Out Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.revisionDocument.value',
            config: {
                displayName: 'Document to Check In',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.users.value',
            config: {
                displayName: 'Check in user',
                type: 'Variable',
                required: true,
            },
        },
    ],
    CheckOutDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Checkout Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.users.value',
            config: {
                displayName: 'Checkout User',
                type: 'Variable',
                required: true,
            },
        },
    ],
    CheckOutDocumentCancelActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document checkout cancellation',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.users.value',
            config: {
                displayName: 'Cancellation user',
                type: 'Variable',
                required: true,
            },
        },
    ],
    ChoiceActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
            },
        },
        {
            path: 'data.compareVersion.value',
            config: {
                displayName: 'Compare this document with another version',
                type: 'Bool',
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.addCustomAction.value',
            config: {
                displayName: 'Add a custom action',
                type: 'Bool',
            },
        },
        {
            path: 'data.allowComment.value',
            config: {
                displayName: 'Comments',
                type: 'Choice',
                choices: [
                    { displayName: 'Comments are required', value: 'Required' },
                    { displayName: 'Comments are optional', value: 'Yes' },
                    {
                        displayName: "Don't show the comment field",
                        value: 'No',
                    },
                ],
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    ChooseDocumentsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Reference Document',
                type: 'Variable',
            },
        },
        {
            path: 'data.inputdocuments.value',
            config: {
                displayName: 'Suggested Document(s)',
                type: 'Variable',
            },
        },
        {
            path: 'data.folders.value',
            config: {
                displayName: 'Default Folder',
                type: 'Variable',
            },
        },
        {
            path: 'data.resultlimit.value',
            config: {
                displayName: 'Number of documents allowed for selection',
                type: 'String',
            },
        },
        {
            path: 'data.allowedchoices.value',
            config: {
                displayName: 'Documents for Successful Completion',
                type: 'Radio',
                choices: [
                    {
                        displayName: 'Any number of documents',
                        value: 'ZeroOrMore',
                    },
                    { displayName: 'Only one document', value: 'One' },
                    {
                        displayName: 'At least one document',
                        value: 'OneOrMore',
                    },
                ],
            },
        },
        {
            path: 'data.enableActionRejectedButton.value',
            config: {
                displayName: 'Enable ActionRejected button',
                type: 'Bool',
            },
        },
        {
            path: 'data.addCustomAction.value',
            config: {
                displayName: 'Add a custom action',
                type: 'Bool',
            },
        },
        {
            path: 'data.allowComment.value',
            config: {
                displayName: 'Comments',
                type: 'Choice',
                choices: [
                    { displayName: 'Comments are required', value: 'Required' },
                    { displayName: 'Comments are optional', value: 'Yes' },
                    {
                        displayName: "Don't show the comment field",
                        value: 'No',
                    },
                ],
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.compareVersion.value',
            config: {
                displayName: 'Compare reference document with another version',
                type: 'Bool',
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output (Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output (Comments)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    ChooseUsersActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who should complete this step?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Reference Document',
                type: 'Variable',
            },
        },
        {
            path: 'data.limittogroups.value',
            config: {
                displayName: 'User Group',
                type: 'Variable',
            },
        },
        {
            path: 'data.allowedchoices.value',
            config: {
                displayName: 'Documents for Successful Completion',
                type: 'Radio',
                choices: [
                    {
                        displayName: 'Any number of documents',
                        value: 'ZeroOrMore',
                    },
                    { displayName: 'Only one document', value: 'One' },
                    {
                        displayName: 'At least one document',
                        value: 'OneOrMore',
                    },
                ],
            },
        },
        {
            path: 'data.enableActionRejectedButton.value',
            config: {
                displayName: 'Enable ActionRejected button',
                type: 'Bool',
            },
        },
        {
            path: 'data.addCustomAction.value',
            config: {
                displayName: 'Add a custom action',
                type: 'Bool',
            },
        },
        {
            path: 'data.allowComment.value',
            config: {
                displayName: 'Comments',
                type: 'Choice',
                choices: [
                    { displayName: 'Comments are required', value: 'Required' },
                    { displayName: 'Comments are optional', value: 'Yes' },
                    {
                        displayName: "Don't show the comment field",
                        value: 'No',
                    },
                ],
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.compareVersion.value',
            config: {
                displayName: 'Compare reference document with another version',
                type: 'Bool',
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputUsers.value',
            config: {
                displayName: 'Output (Users)',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output (Comments)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    MergePdfDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documentName.value',
            config: {
                displayName: 'Document Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.sourceDocument.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.targetFolder.value',
            config: {
                displayName: 'Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.outputType.value',
            config: {
                displayName: 'Output combined documents as...',
                type: 'Radio',
                choices: [
                    { displayName: 'PDF', value: 'Pdf' },
                    { displayName: 'Word (.docx)', value: 'Word' },
                ],
                required: true,
            },
        },
        {
            path: 'data.deleteOriginals.value',
            config: {
                displayName:
                    'Delete the original documents after combining them.',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    CompareDocumentVersionsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.revisedDocumentProperty.value.*.value.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.sourceDocumentCompareProperty.value',
            config: {
                displayName: 'Compare Current Document Version With',
                type: 'Radio',
                choices: [
                    { displayName: 'Previous Version', value: 1 },
                    { displayName: 'First Version', value: 0 },
                ],
                required: true,
            },
        },
        {
            path: 'data.resultDocumentTypeProperty.value',
            config: {
                displayName: 'Save new document as',
                type: 'Radio',
                choices: [
                    { displayName: 'New Version', value: 'New Version' },
                    { displayName: 'New Document', value: 'New Document' },
                ],
                required: true,
            },
        },
        {
            path: 'data.resultDocumentNameProperty.value',
            config: {
                displayName: 'New Document Name',
                type: 'String',
            },
        },
        {
            path: 'data.resultDocumentFolderProperty.value',
            config: {
                displayName: 'Folder Destination',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.outputDocumentsProperty.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    CompareDocumentsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.originalDocumentProperty.value',
            config: {
                displayName: 'Original Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.revisedDocumentProperty.value',
            config: {
                displayName: 'Revised Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.resultDocumentTypeProperty.value',
            config: {
                displayName: 'Save new document as',
                type: 'Radio',
                choices: [
                    { displayName: 'New Version', value: 'Version' },
                    { displayName: 'New Document', value: 'Document' },
                ],
                required: true,
            },
        },
        {
            path: 'data.outputDocumentsProperty.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    CompareTrackedContentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.sourceDocument.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.sourceDocumentCompareProperty.value',
            config: {
                displayName: 'Compare Current Document Version With',
                type: 'Radio',
                choices: [
                    { displayName: 'Previous Version', value: 1 },
                    { displayName: 'First Version', value: 0 },
                ],
                required: true,
            },
        },
        {
            path: 'data.outputXml.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    ConvertJsonToXmlActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.conversionType.value',
            config: {
                displayName: 'Conversion Type',
                type: 'Radio',
                choices: [
                    { displayName: 'JSON to XML', value: 'jsonToXml' },
                    { displayName: 'XML to JSON', value: 'xmlToJson' },
                ],
            },
        },
        {
            path: 'data.jsonToXmlVariable.value',
            config: {
                displayName: 'Variable',
                type: 'Variable',
            },
        },
        {
            path: 'data.outputVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    CopyMoveDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.action.value',
            config: {
                displayName: 'Select an action',
                type: 'Radio',
                choices: [
                    { displayName: 'Move', value: 'move' },
                    { displayName: 'Make a Copy', value: 'copy' },
                ],
            },
        },
        {
            path: 'data.sourceDocument.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.targetFolder.value',
            config: {
                displayName: 'Destination Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    CopyFolderActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.action.value',
            config: {
                displayName: 'Select an action',
                type: 'Radio',
                choices: [
                    { displayName: 'Move', value: 'move' },
                    { displayName: 'Make a Copy', value: 'copy' },
                ],
            },
        },
        {
            path: 'data.sourceFolder.value',
            config: {
                displayName: 'Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.parentFolder.value',
            config: {
                displayName: 'Destination Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.newFolderName.value',
            config: {
                displayName: 'Folder name',
                type: 'String',
            },
        },
        {
            path: 'data.outputFolders.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    CreateFolderActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.newFolder.value',
            config: {
                displayName: 'New Folder Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.description.value',
            config: {
                displayName: 'New Folder Description',
                type: 'String',
            },
        },
        {
            path: 'data.parentFolder.value',
            config: {
                displayName: 'Parent Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.returnExisting.value',
            config: {
                displayName: 'Use the folder if it already exists',
                type: 'Bool',
            },
        },
        {
            path: 'data.inheritLimitedAttributeGroups.value',
            config: {
                displayName: "Inherit the parent folder's attribute groups",
                type: 'Bool',
            },
        },
        {
            path: 'data.limitedAttributeGroups.value',
            config: {
                displayName: 'Add Attribute Groups',
                type: 'String',
            },
        },
        {
            path: 'data.outputFolders.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    CreateLinkActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.parentFolder.value',
            config: {
                displayName: 'Folder Destination',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.linkName.value',
            config: {
                displayName: 'Link Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.linkURL.value',
            config: {
                displayName: 'Link URL',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.linkDescription.value',
            config: {
                displayName: 'Link Description',
                type: 'String',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    InsertSalesforceActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.salesForceObjectType.value',
            config: {
                displayName: 'Salesforce Object Type',
                type: 'String',
            },
        },
        {
            path: 'data.outputIdVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    FindOrCreateSalesForceFolderActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.sfdcAccountId.value',
            config: {
                displayName: 'Salesforce Account Id',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.sfdcAccountName.value',
            config: {
                displayName: 'Salesforce Account Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.sfdcObjectId.value',
            config: {
                displayName: 'Salesforce Object Id',
                type: 'String',
            },
        },
        {
            path: 'data.sfdcObjectName.value',
            config: {
                displayName: 'Salesforce Object Name',
                type: 'String',
            },
        },
        {
            path: 'data.sfdcObjectType.value',
            config: {
                displayName: 'Salesforce Object Type',
                type: 'String',
            },
        },
        {
            path: 'data.outputFolders.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    UpdateXMLVariableFromCSVActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.sourceDocument.value',
            config: {
                displayName: 'Upload CSV',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.delimiter.value',
            config: {
                displayName: 'Delimiter',
                type: 'String',
            },
        },
        {
            path: 'data.selectConfigurationDocument.value',
            config: {
                displayName: 'Select a Configuration Document?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputXml.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    CreateDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.configurationName.value',
            config: {
                displayName: 'Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.configTemplateName.value',
            config: {
                displayName: 'Document Template Name',
                type: 'String',
            },
        },
        {
            path: 'data.sourceType.value',
            config: {
                displayName: 'Source',
                type: 'Choice',
                choices: [
                    { displayName: 'Salesforce', value: 'Salesforce' },
                    { displayName: 'SpringCM', value: 'SpringCM' },
                ],
                required: true,
            },
        },
        {
            path: 'data.objectType.value',
            config: {
                displayName: 'Salesforce Object Type',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.objectId.value',
            config: {
                displayName: 'Salesforce Object ID',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.objectName.value',
            config: {
                displayName: 'Salesforce Folder Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.trackingDocuments.value',
            config: {
                displayName: 'Tracking Document(s)',
                type: 'Variable',
            },
        },
        {
            path: 'data.sfPath.value',
            config: {
                displayName: 'Salesforce Folder Path',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    DataReconciliationActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.trackedNames.value',
            config: {
                displayName: 'Tracked Names',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.recipients.value',
            config: {
                displayName: 'To',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputXML.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    DecisionActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.decisions.value.decisions.*.output.value.name',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.outputDecision.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    DeleteDocumentReminderActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.reminderName.value',
            config: {
                displayName: 'Reminder Name',
                required: true,
            },
        },
        {
            path: 'data.reminderDate.value',
            config: {
                displayName: 'Reminder Date',
                required: true,
            },
        },
        {
            path: 'data.reminderTime.value',
            config: {
                displayName: 'Reminder Hour',
                required: true,
            },
        },
    ],
    DocLauncherActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.docLauncherConfigName.value',
            config: {
                displayName: 'Document Generation Configuration Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.configTemplateName.value',
            config: {
                displayName: 'Document Generation Configuration Template Name',
                type: 'String',
            },
        },
        {
            path: 'data.objectId.value',
            config: {
                displayName: 'Salesforce Object Id',
                type: 'String',
            },
        },
        {
            path: 'data.entityType.value',
            config: {
                displayName: 'Select Input Variable',
                type: 'Radio',
                choices: [
                    { displayName: 'Update Value(s)', value: 'variable' },
                    { displayName: 'Variable', value: 'xml' },
                ],
                required: true,
            },
        },
        {
            path: 'data.updateValues.value.*.inputName',
            config: {
                displayName: 'Target Identifier',
                type: 'String',
            },
        },
        {
            path: 'data.updateValues.value.*.inputValue',
            config: {
                displayName: 'Value',
                type: 'String',
            },
        },
        {
            path: 'data.outputXmlDocument.value',
            config: {
                displayName: 'Output (Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputXmlVariable.value',
            config: {
                displayName: 'Output (Configuration)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    EditDocumentsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.compareVersion.value',
            config: {
                displayName: 'Compare this document with another version',
                type: 'Bool',
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.addCustomAction.value',
            config: {
                displayName: 'Add a custom action',
                type: 'Bool',
            },
        },
        {
            path: 'data.allowComment.value',
            config: {
                displayName: 'Comments',
                type: 'Choice',
                choices: [
                    { displayName: 'Comments are required', value: 'Required' },
                    { displayName: 'Comments are optional', value: 'Yes' },
                    {
                        displayName: "Don't show the comment field",
                        value: 'No',
                    },
                ],
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    EditFormActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.formdocument.value',
            config: {
                displayName: 'Form Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Reference Document(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.addCustomAction.value',
            config: {
                displayName: 'Add a custom action',
                type: 'Bool',
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output (Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output (Comments)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    SendEmailActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.from.value',
            config: {
                displayName: 'From',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.bcclink.value',
            config: {
                displayName: 'BCC',
                type: 'Variable',
            },
        },
        {
            path: 'data.cclink.value',
            config: {
                displayName: 'CC',
                type: 'Variable',
            },
        },
        {
            path: 'data.to.value',
            config: {
                displayName: 'To',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.subject.value',
            config: {
                displayName: 'Subject',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.body.value',
            config: {
                displayName: 'Body',
                type: 'Textarea',
                required: true,
            },
        },
    ],
    EmailDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.format.value',
            config: {
                displayName: 'Format',
                type: 'Radio',
                choices: [
                    { displayName: 'Native', value: 'native' },
                    { displayName: 'PDF', value: 'pdf' },
                    {
                        displayName: 'PDF (if possible) or Native',
                        value: 'pdfornative',
                    },
                ],
            },
        },
        {
            path: 'data.fromDisplayName.value',
            config: {
                displayName: 'From',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.bcclink.value',
            config: {
                displayName: 'BCC',
                type: 'Variable',
            },
        },
        {
            path: 'data.cclink.value',
            config: {
                displayName: 'CC',
                type: 'Variable',
            },
        },
        {
            path: 'data.to.value',
            config: {
                displayName: 'To',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.replyTo.value',
            config: {
                displayName: 'Reply To',
                type: 'Variable',
            },
        },
        {
            path: 'data.subject.value',
            config: {
                displayName: 'Subject',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.note.value',
            config: {
                displayName: 'Body',
                type: 'Textarea',
                required: true,
            },
        },
        {
            path: 'data.includeSignature.value',
            config: {
                displayName: 'Include Signature to Email?',
                type: 'Bool',
                required: true,
            },
        },
    ],
    EvaluateDocumentText: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.query.value',
            config: {
                displayName: 'Search Text',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.exactMatch.value',
            config: {
                displayName: 'Exact Match?',
                type: 'Bool',
            },
        },
        {
            path: 'data.timeout.value',
            config: {
                displayName: 'Time Out',
                type: 'String',
            },
        },
    ],
    EvaluateXPathActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.inputXMLVariable.value',
            config: {
                displayName: 'Variable',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
        {
            path: 'data.xPath.value',
            config: {
                displayName: 'XPath',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.outputXmlVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    ExcelEtlActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.sourceDocument.value',
            config: {
                displayName: 'Document(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.configurationType.value',
            config: {
                displayName: null,
                type: 'Radio',
                choices: [
                    {
                        displayName: 'Configuration Document',
                        value: 'document',
                    },
                    {
                        displayName: 'Configuration Variable',
                        value: 'variable',
                    },
                ],
            },
        },
        {
            path: 'data.etlConfigDocument.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.outputXml.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    ExtractPdfFieldsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.sourceDocument.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.fieldXmlVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    FaxDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.note.value',
            config: {
                displayName: 'Note',
                type: 'String',
            },
        },
        {
            path: 'data.to.value',
            config: {
                displayName: 'Fax Recipients',
                type: 'Variable',
            },
        },
        {
            path: 'data.toFaxNumber.value',
            config: {
                displayName: 'Fax Number(s)',
                type: 'String',
            },
        },
    ],
    FaxDocumentAndWaitActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.note.value',
            config: {
                displayName: 'Note',
                type: 'String',
            },
        },
        {
            path: 'data.to.value',
            config: {
                displayName: 'Fax Recipients',
                type: 'Variable',
            },
        },
        {
            path: 'data.toFaxNumber.value',
            config: {
                displayName: 'Fax Number(s)',
                type: 'String',
            },
        },
    ],
    FillFormActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.formId.value',
            config: {
                displayName: 'Form',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Reference Document(s)',
                type: 'Variable',
            },
        },
        {
            path: 'data.addCustomAction.value',
            config: {
                displayName: 'Add a custom action',
                type: 'Bool',
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output (Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output (Comments)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    GetDocumentAttachmentsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.resultLimit.value',
            config: {
                displayName: 'Number of documents to be returned',
                type: 'String',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    FindDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    FindDocumentsByFolderActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.folder.value',
            config: {
                displayName: 'Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.includeSubfolders.value',
            config: {
                displayName: 'Include documents from Subfolders?',
                type: 'Bool',
            },
        },
        {
            path: 'data.resultLimit.value',
            config: {
                displayName: 'Number of documents to be returned',
                type: 'String',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    FindDocumentsByMetadataActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.folders.value',
            config: {
                displayName: 'Folder',
                type: 'Variable',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Ignored Document(s)',
                type: 'Variable',
            },
        },
        {
            path: 'data.resultLimit.value',
            config: {
                displayName: 'Number of documents to be returned',
                type: 'String',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    FindEOSParentFolderActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.entityType.value',
            config: {
                displayName: 'Select a document or a folder?',
                type: 'Radio',
                choices: [
                    { displayName: 'Select a document', value: 'document' },
                    { displayName: 'Select a folder', value: 'folder' },
                ],
                required: true,
            },
        },
        {
            path: 'data.document.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.objectType.value',
            config: {
                displayName: 'EOS Object Type',
                type: 'String',
            },
        },
        {
            path: 'data.outputXmlVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    FindFolderActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.folders.value',
            config: {
                displayName: 'Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.outputFolders.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    FindUserActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.searchField.value',
            config: {
                displayName: 'Field',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'UID', value: 'uid' },
                    { displayName: 'Salesforce UID', value: 'salesforce uid' },
                    { displayName: 'Login Name', value: 'login name' },
                    { displayName: 'Email', value: 'email' },
                ],
                required: true,
            },
        },
        {
            path: 'data.searchValue.value',
            config: {
                displayName: 'Value',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.outputActorVariableName.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    FindOrCreateEOSFolderActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.folderId.value',
            config: {
                displayName: 'Folder Id',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.objectType.value',
            config: {
                displayName: 'Type',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.folderName.value',
            config: {
                displayName: 'Folder Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.path.value',
            config: {
                displayName: 'Folder Path',
                type: 'String',
            },
        },
        {
            path: 'data.outputFolders.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    EndActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
    ],
    ForLoopActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.loopVariable.value',
            config: {
                displayName: 'Variable',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
        {
            path: 'data.loopMax.value',
            config: {
                displayName: 'Number of loops',
                type: 'String',
                required: true,
            },
        },
    ],
    XPathForEachLoopActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.xmlIterator.value',
            config: {
                displayName: 'Iterator',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
        {
            path: 'data.execution.value',
            config: {
                displayName: 'Execution Method',
                type: 'Radio',
                choices: [
                    { displayName: 'Serial', value: 'serial' },
                    { displayName: 'Parallel', value: 'parallel' },
                ],
            },
        },
    ],
    FullPageEditFormActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.addCustomAction.value',
            config: {
                displayName: 'Add a custom action',
                type: 'Bool',
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output (Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output (Comments)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    FullPageFillFormActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.formId.value',
            config: {
                displayName: 'Form',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Reference Document(s)',
                type: 'Variable',
            },
        },
        {
            path: 'data.addCustomAction.value',
            config: {
                displayName: 'Add a custom action',
                type: 'Bool',
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output (Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output (Comments)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    GetNextAutoNumberValueActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.autoNumberName.value',
            config: {
                displayName: 'Name',
                type: 'String',
            },
        },
        {
            path: 'data.valueVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    GetPathActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.entityType.value',
            config: {
                displayName: 'Select a document or a folder?',
                type: 'Radio',
                choices: [
                    { displayName: 'Select a document', value: 'document' },
                    { displayName: 'Select a folder', value: 'folder' },
                ],
                required: true,
            },
        },
        {
            path: 'data.document.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.outputVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    GetTrackedContentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.sourceDocument.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.outputXml.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    GroupBoxActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Group Name',
                type: 'String',
                required: true,
            },
        },
    ],
    HttpClientActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.requestContent.value',
            config: {
                displayName: 'Content',
                type: 'String',
            },
        },
        {
            path: 'data.contentEncoding.value',
            config: {
                displayName: 'Encoding',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'ASCII', value: 'us-ascii' },
                    { displayName: 'UTF-7', value: '1' },
                    { displayName: 'UTF-8', value: '2' },
                    { displayName: 'UTF-16', value: '3' },
                    { displayName: 'UTF-16 Big Endian', value: '4' },
                    { displayName: 'UTF-32 Little Endian', value: '5' },
                ],
            },
        },
        {
            path: 'data.protocolVersion.value',
            config: {
                displayName: 'Protocol Version',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.method.value',
            config: {
                displayName: 'Method',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.url.value',
            config: {
                displayName: 'Endpoint URL',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.responseEncoding.value',
            config: {
                displayName: 'Encoding',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'Auto', value: 'Auto' },
                    { displayName: 'ASCII', value: 'us-ascii' },
                    { displayName: 'UTF-7', value: '1' },
                    { displayName: 'UTF-8', value: '2' },
                    { displayName: 'UTF-16', value: '3' },
                    { displayName: 'UTF-16 Big Endian', value: '4' },
                    { displayName: 'UTF-32 Little Endian', value: '5' },
                ],
            },
        },
        {
            path: 'data.responseVariable.value',
            config: {
                displayName: 'Output (Response)',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
        {
            path: 'data.responseStatusCodeVariable.value',
            config: {
                displayName: 'Output (Status Code)',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
        {
            path: 'data.responseHeadersXmlVariable.value',
            config: {
                displayName: 'Output (Headers)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    WebServiceActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.retryOnFailure.value',
            config: {
                displayName: 'Retry on Failure',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    LaneActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Lane Name',
                type: 'String',
                required: true,
            },
        },
    ],
    LogActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.message.value',
            config: {
                displayName: 'Message',
                type: 'String',
                required: true,
            },
        },
    ],
    MergeTrackedContentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.sourceDocument.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.resultDocumentTypeProperty.value',
            config: {
                displayName: 'Save new document as',
                type: 'Radio',
                choices: [
                    { displayName: 'New Version', value: 'Version' },
                    { displayName: 'New Document', value: 'Document' },
                ],
                required: true,
            },
        },
        {
            path: 'data.outputDocumentsProperty.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    NextLoopActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
    ],
    PoolActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Pool Name',
                type: 'String',
                required: true,
            },
        },
    ],
    RemoveWatchedDocumentsActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.users.value',
            config: {
                displayName: 'User(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.unsubscribeAll.value',
            config: {
                displayName: 'Remove from all watchlists',
                type: 'Bool',
            },
        },
    ],
    RenameDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document to Rename',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.newDocumentName.value',
            config: {
                displayName: 'New Document Name',
                type: 'String',
                required: true,
            },
        },
    ],
    ResourceVariableActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.to.value',
            config: {
                displayName: 'User',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.expandGroups.value',
            config: {
                displayName: 'Expand Groups',
                type: 'Bool',
                required: true,
            },
        },
        {
            path: 'data.setVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    DataReviewActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.documentAttributes.value',
            config: {
                displayName: 'Data to be reviewed',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.allowComment.value',
            config: {
                displayName: 'Comments',
                type: 'Choice',
                choices: [
                    { displayName: 'Comments are required', value: 'Required' },
                    { displayName: 'Comments are optional', value: 'Yes' },
                    {
                        displayName: "Don't show the comment field",
                        value: 'No',
                    },
                ],
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputXML.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    ReviewAndSendForExternalReviewActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.recipient.value',
            config: {
                displayName: 'To',
                type: 'Variable',
            },
        },
        {
            path: 'data.emailSubject.value',
            config: {
                displayName: 'Subject',
                type: 'String',
            },
        },
        {
            path: 'data.emailMessage.value',
            config: {
                displayName: 'Body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.hideDueDateFromEmail.value',
            config: {
                displayName: 'Hide due date from recipient',
                type: 'Bool',
            },
        },
        {
            path: 'data.sendOutNotifications.value',
            config: {
                displayName: 'Send out Notifications?',
                type: 'Bool',
            },
        },
        {
            path: 'data.emailAppearance.value',
            config: {
                displayName: 'Email Appearance',
                type: 'Radio',
                choices: [
                    {
                        displayName: 'Use branded HTML email template',
                        value: 0,
                    },
                    { displayName: 'Use standard text email', value: 1 },
                ],
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.expirationDays.value',
            config: {
                displayName: 'Expiration Days',
                type: 'String',
            },
        },
        {
            path: 'data.rejectText.value',
            config: {
                displayName: 'Reject Button Text',
                type: 'String',
            },
        },
        {
            path: 'data.suppressSenderEmails.value',
            config: {
                displayName: 'Supress emails to sender on completion?',
                type: 'Bool',
            },
        },
        {
            path: 'data.allowComment.value',
            config: {
                displayName: 'Comments',
                type: 'Choice',
                choices: [
                    { displayName: 'Comments are required', value: 'Required' },
                    { displayName: 'Comments are optional', value: 'Yes' },
                    {
                        displayName: "Don't show the comment field",
                        value: 'No',
                    },
                ],
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    ReviewAndSendForSignatureActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.sender.value',
            config: {
                displayName: 'From',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.esignatureRecipients.value',
            config: {
                displayName: 'To',
                type: 'Variable',
            },
        },
        {
            path: 'data.signatureSubject.value',
            config: {
                displayName: 'Subject',
                type: 'String',
            },
        },
        {
            path: 'data.message.value',
            config: {
                displayName: 'Message',
                type: 'String',
            },
        },
        {
            path: 'data.useDSTemplates.value',
            config: {
                displayName: null,
                type: 'Radio',
                choices: [
                    {
                        displayName: 'Documents',
                        value: 'document',
                    },
                    {
                        displayName: 'Documents and Templates',
                        value: 'esignatureDocuments',
                    },
                ],
            },
        },
        {
            path: 'data.esignatureDocuments.value',
            config: {
                displayName: 'DS Templates',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.esignatureTemplates.value',
            config: {
                displayName: 'Envelope Template',
                type: 'String',
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.expirationDays.value',
            config: {
                displayName: 'Expiration Days',
                type: 'String',
            },
        },
        {
            path: 'data.password.value',
            config: {
                displayName: 'Signer Password',
                type: 'String',
            },
        },
        {
            path: 'data.rejectText.value',
            config: {
                displayName: 'Reject Button Text',
                type: 'String',
            },
        },
        {
            path: 'data.signaturesOrdered.value',
            config: {
                displayName: 'Signatures Ordered?',
                type: 'Bool',
            },
        },
        {
            path: 'data.writtenRequired.value',
            config: {
                displayName: 'Written Signature Required?',
                type: 'Bool',
            },
        },
        {
            path: 'data.allowComment.value',
            config: {
                displayName: 'Comments',
                type: 'Choice',
                choices: [
                    { displayName: 'Comments are required', value: 'Required' },
                    { displayName: 'Comments are optional', value: 'Yes' },
                    {
                        displayName: "Don't show the comment field",
                        value: 'No',
                    },
                ],
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    RoutingActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.activityDisplayName.value',
            config: {
                displayName: 'Display Name',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.compareVersion.value',
            config: {
                displayName: 'Compare this document with another version',
                type: 'Bool',
            },
        },
        {
            path: 'data.assigneeType.value',
            config: {
                displayName: 'Assign to a user or task group?',
                type: 'Radio',
                choices: [
                    { displayName: 'Assign to a user', value: 'user' },
                    {
                        displayName: 'Assign to a task group',
                        value: 'workerpool',
                    },
                ],
                required: true,
            },
        },
        {
            path: 'data.assignedUsers.value.*.value.value',
            config: {
                displayName: 'Assignee(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.requiredCompletion.value',
            config: {
                displayName: 'Who needs to respond?',
                type: 'Radio',
                choices: [
                    { displayName: 'Any one assignee', value: 1 },
                    { displayName: 'All of the assignees', value: 100 },
                ],
            },
        },
        {
            path: 'data.instructions.value',
            config: {
                displayName: 'Instructions',
                type: 'String',
            },
        },
        {
            path: 'data.addCustomAction.value',
            config: {
                displayName: 'Add a custom action',
                type: 'Bool',
            },
        },
        {
            path: 'data.allowComment.value',
            config: {
                displayName: 'Comments',
                type: 'Choice',
                choices: [
                    { displayName: 'Comments are required', value: 'Required' },
                    { displayName: 'Comments are optional', value: 'Yes' },
                    {
                        displayName: "Don't show the comment field",
                        value: 'No',
                    },
                ],
            },
        },
        {
            path: 'data.waitForNextStep.value',
            config: {
                displayName: 'Link to next step',
                type: 'Bool',
            },
        },
        {
            path: 'data.notificationFromAddress.value',
            config: {
                displayName: 'Email sender',
                type: 'Variable',
            },
        },
        {
            path: 'data.notificationSubject.value',
            config: {
                displayName: 'Email subject',
                type: 'String',
            },
        },
        {
            path: 'data.notificationBody.value',
            config: {
                displayName: 'Email body',
                type: 'Textarea',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputRoute.value',
            config: {
                displayName: 'Output (Route)',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output (Comments)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    RuleActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
    ],
    SalesforceEtlActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.objectType.value',
            config: {
                displayName: 'Salesforce Object Type',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.objectId.value',
            config: {
                displayName: 'Salesforce Object Id',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.configurationType.value',
            config: {
                displayName: null,
                type: 'Radio',
                choices: [
                    {
                        displayName: 'Configuration Document',
                        value: 'document',
                    },
                    {
                        displayName: 'Configuration Variable',
                        value: 'variable',
                    },
                    {
                        displayName: 'Configuration Document Generation Form',
                        value: 'docLauncherForm',
                    },
                ],
            },
        },
        // Not a variable field
        // {
        //     path: 'data.configDocument.value',
        //     config: {
        //         displayName: 'Document Generation Form',
        //         type: 'Variable',
        //         required: true,
        //     },
        // },
        {
            path: 'data.outputXmlVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    ScheduleDocumentReminderActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.reminderName.value',
            config: {
                displayName: 'Reminder Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.reminderDate.value',
            config: {
                displayName: 'Reminder Date',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.reminderTime.value',
            config: {
                displayName: 'Reminder Hour',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.sender.value',
            config: {
                displayName: 'From',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.recipients.value',
            config: {
                displayName: 'To',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.subject.value',
            config: {
                displayName: 'Subject',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.body.value',
            config: {
                displayName: 'Body',
                type: 'Textarea',
            },
        },
    ],
    SearchActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.withAllWords.value',
            config: {
                displayName: 'With All Words',
                type: 'String',
            },
        },
        {
            path: 'data.withAnyWords.value',
            config: {
                displayName: 'With Any Words',
                type: 'String',
            },
        },
        {
            path: 'data.withoutWords.value',
            config: {
                displayName: 'Without Words',
                type: 'String',
            },
        },
        {
            path: 'data.withPhrase.value',
            config: {
                displayName: 'With Exact Phrase',
                type: 'String',
            },
        },
        {
            path: 'data.title.value',
            config: {
                displayName: 'Title',
                type: 'String',
            },
        },
        {
            path: 'data.searchContent.value',
            config: {
                displayName: 'Content',
                type: 'String',
            },
        },
        {
            path: 'data.description.value',
            config: {
                displayName: 'Description',
                type: 'String',
            },
        },
        {
            path: 'data.attribute.value',
            config: {
                displayName: 'Attribute',
                type: 'String',
            },
        },
        {
            path: 'data.searchType.value',
            config: {
                displayName: 'Search Type',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'Documents', value: 'Documents' },
                    { displayName: 'Folders', value: 'Folders' },
                    {
                        displayName: 'Documents and Folders',
                        value: 'Documents and Folders',
                    },
                ],
            },
        },
        {
            path: 'data.folders.value',
            config: {
                displayName: 'Folder',
                type: 'Variable',
            },
        },
        {
            path: 'data.includeSubFolders.value',
            config: {
                displayName: 'Include Subfolders',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputFolders.value',
            config: {
                displayName: 'Output (Folder(s))',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output (Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    SendForExternalReviewNewActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.sender.value',
            config: {
                displayName: 'From',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.recipient.value',
            config: {
                displayName: 'To',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.subject.value',
            config: {
                displayName: 'Subject',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.notes.value',
            config: {
                displayName: 'Body',
                type: 'Textarea',
                required: true,
            },
        },
        {
            path: 'data.hideDueDateFromEmail.value',
            config: {
                displayName: 'Hide due date from recipient',
                type: 'Bool',
            },
        },
        {
            path: 'data.addMySignatureToThisEmail.value',
            config: {
                displayName: 'Add signature to email?',
                type: 'Bool',
            },
        },
        {
            path: 'data.sendOutNotifications.value',
            config: {
                displayName: 'Send out Notifications?',
                type: 'Bool',
            },
        },
        {
            path: 'data.emailAppearance.value',
            config: {
                displayName: 'Email Appearance',
                type: 'Radio',
                choices: [
                    {
                        displayName: 'Use branded HTML email template',
                        value: 0,
                    },
                    {
                        displayName: 'Use standard text email',
                        value: 1,
                    },
                ],
            },
        },
        {
            path: 'data.expirationDays.value',
            config: {
                displayName: 'Expiration Days',
                type: 'String',
            },
        },
        // EDIT LATER, Languages may not be correct
        {
            path: 'data.dateFormat.value',
            config: {
                displayName: 'Date Format',
                type: 'Choice',
                choices: [
                    { value: '', displayName: '' },
                    { value: 'en-US', displayName: 'English (United States)' },
                    { value: 'af-ZA', displayName: 'Afrikaans (South Africa)' },
                    { value: 'sq-AL', displayName: 'Albanian (Albania)' },
                    { value: 'gsw-FR', displayName: 'Alsatian (France)' },
                    { value: 'am-ET', displayName: 'Amharic (Ethiopia)' },
                    { value: 'ar-DZ', displayName: 'Arabic (Algeria)' },
                    { value: 'ar-BH', displayName: 'Arabic (Bahrain)' },
                    { value: 'ar-EG', displayName: 'Arabic (Egypt)' },
                    { value: 'ar-IQ', displayName: 'Arabic (Iraq)' },
                    { value: 'ar-JO', displayName: 'Arabic (Jordan)' },
                    { value: 'ar-KW', displayName: 'Arabic (Kuwait)' },
                    { value: 'ar-LB', displayName: 'Arabic (Lebanon)' },
                    { value: 'ar-LY', displayName: 'Arabic (Libya)' },
                    { value: 'ar-MA', displayName: 'Arabic (Morocco)' },
                    { value: 'ar-OM', displayName: 'Arabic (Oman)' },
                    { value: 'ar-QA', displayName: 'Arabic (Qatar)' },
                    { value: 'ar-SA', displayName: 'Arabic (Saudi Arabia)' },
                    { value: 'ar-SY', displayName: 'Arabic (Syria)' },
                    { value: 'ar-TN', displayName: 'Arabic (Tunisia)' },
                    { value: 'ar-AE', displayName: 'Arabic (U.A.E.)' },
                    { value: 'ar-YE', displayName: 'Arabic (Yemen)' },
                    { value: 'hy-AM', displayName: 'Armenian (Armenia)' },
                    { value: 'as-IN', displayName: 'Assamese (India)' },
                    {
                        value: 'az-Cyrl-AZ',
                        displayName: 'Azerbaijani (Cyrillic, Azerbaijan)',
                    },
                    {
                        value: 'az-Latn-AZ',
                        displayName: 'Azerbaijani (Latin, Azerbaijan)',
                    },
                    { value: 'bn-BD', displayName: 'Bangla (Bangladesh)' },
                    { value: 'bn-IN', displayName: 'Bangla (India)' },
                    { value: 'ba-RU', displayName: 'Bashkir (Russia)' },
                    { value: 'eu-ES', displayName: 'Basque (Basque)' },
                    { value: 'be-BY', displayName: 'Belarusian (Belarus)' },
                    {
                        value: 'bs-Cyrl-BA',
                        displayName:
                            'Bosnian (Cyrillic, Bosnia and Herzegovina)',
                    },
                    {
                        value: 'bs-Latn-BA',
                        displayName: 'Bosnian (Latin, Bosnia and Herzegovina)',
                    },
                    { value: 'br-FR', displayName: 'Breton (France)' },
                    { value: 'bg-BG', displayName: 'Bulgarian (Bulgaria)' },
                    { value: 'my-MM', displayName: 'Burmese (Myanmar)' },
                    { value: 'ca-ES', displayName: 'Catalan (Catalan)' },
                    {
                        value: 'tzm-Tfng-MA',
                        displayName:
                            'Central Atlas Tamazight (Tifinagh, Morocco)',
                    },
                    {
                        value: 'ku-Arab-IQ',
                        displayName: 'Central Kurdish (Iraq)',
                    },
                    {
                        value: 'chr-Cher-US',
                        displayName: 'Cherokee (Cherokee)',
                    },
                    {
                        value: 'zh-CN',
                        displayName: 'Chinese (Simplified, PRC)',
                    },
                    {
                        value: 'zh-SG',
                        displayName: 'Chinese (Simplified, Singapore)',
                    },
                    {
                        value: 'zh-HK',
                        displayName: 'Chinese (Traditional, Hong Kong S.A.R.)',
                    },
                    {
                        value: 'zh-MO',
                        displayName: 'Chinese (Traditional, Macao S.A.R.)',
                    },
                    {
                        value: 'zh-TW',
                        displayName: 'Chinese (Traditional, Taiwan)',
                    },
                    { value: 'co-FR', displayName: 'Corsican (France)' },
                    { value: 'hr-HR', displayName: 'Croatian (Croatia)' },
                    { value: 'cs-CZ', displayName: 'Czech (Czech Republic)' },
                    { value: 'da-DK', displayName: 'Danish (Denmark)' },
                    { value: 'prs-AF', displayName: 'Dari (Afghanistan)' },
                    { value: 'dv-MV', displayName: 'Divehi (Maldives)' },
                    { value: 'nl-BE', displayName: 'Dutch (Belgium)' },
                    { value: 'nl-NL', displayName: 'Dutch (Netherlands)' },
                    { value: 'en-AU', displayName: 'English (Australia)' },
                    { value: 'en-BZ', displayName: 'English (Belize)' },
                    { value: 'en-CA', displayName: 'English (Canada)' },
                    { value: 'en-IN', displayName: 'English (India)' },
                    { value: 'en-IE', displayName: 'English (Ireland)' },
                    { value: 'en-JM', displayName: 'English (Jamaica)' },
                    { value: 'en-MY', displayName: 'English (Malaysia)' },
                    { value: 'en-NZ', displayName: 'English (New Zealand)' },
                    { value: 'en-PH', displayName: 'English (Philippines)' },
                    { value: 'en-SG', displayName: 'English (Singapore)' },
                    { value: 'en-ZA', displayName: 'English (South Africa)' },
                    {
                        value: 'en-TT',
                        displayName: 'English (Trinidad and Tobago)',
                    },
                    { value: 'en-GB', displayName: 'English (United Kingdom)' },
                    { value: 'en-ZW', displayName: 'English (Zimbabwe)' },
                    { value: 'et-EE', displayName: 'Estonian (Estonia)' },
                    { value: 'fo-FO', displayName: 'Faroese (Faroe Islands)' },
                    { value: 'fil-PH', displayName: 'Filipino (Philippines)' },
                    { value: 'fi-FI', displayName: 'Finnish (Finland)' },
                    { value: 'fr-BE', displayName: 'French (Belgium)' },
                    { value: 'fr-CA', displayName: 'French (Canada)' },
                    { value: 'fr-FR', displayName: 'French (France)' },
                    { value: 'fr-LU', displayName: 'French (Luxembourg)' },
                    { value: 'fr-MC', displayName: 'French (Monaco)' },
                    { value: 'fr-CH', displayName: 'French (Switzerland)' },
                    { value: 'fy-NL', displayName: 'Frisian (Netherlands)' },
                    { value: 'gl-ES', displayName: 'Galician (Galician)' },
                    { value: 'ka-GE', displayName: 'Georgian (Georgia)' },
                    { value: 'de-AT', displayName: 'German (Austria)' },
                    { value: 'de-DE', displayName: 'German (Germany)' },
                    { value: 'de-LI', displayName: 'German (Liechtenstein)' },
                    { value: 'de-LU', displayName: 'German (Luxembourg)' },
                    { value: 'de-CH', displayName: 'German (Switzerland)' },
                    { value: 'el-GR', displayName: 'Greek (Greece)' },
                    { value: 'kl-GL', displayName: 'Greenlandic (Greenland)' },
                    { value: 'gu-IN', displayName: 'Gujarati (India)' },
                    {
                        value: 'ha-Latn-NG',
                        displayName: 'Hausa (Latin, Nigeria)',
                    },
                    { value: 'he-IL', displayName: 'Hebrew (Israel)' },
                    { value: 'hi-IN', displayName: 'Hindi (India)' },
                    { value: 'hu-HU', displayName: 'Hungarian (Hungary)' },
                    { value: 'is-IS', displayName: 'Icelandic (Iceland)' },
                    { value: 'ig-NG', displayName: 'Igbo (Nigeria)' },
                    { value: 'id-ID', displayName: 'Indonesian (Indonesia)' },
                    {
                        value: 'iu-Cans-CA',
                        displayName: 'Inuktitut (Syllabics, Canada)',
                    },
                    {
                        value: 'iu-Latn-CA',
                        displayName: 'Inuktitut (Latin, Canada)',
                    },
                    { value: 'ga-IE', displayName: 'Irish (Ireland)' },
                    { value: 'it-IT', displayName: 'Italian (Italy)' },
                    { value: 'it-CH', displayName: 'Italian (Switzerland)' },
                    { value: 'ja-JP', displayName: 'Japanese (Japan)' },
                    { value: 'sw-KE', displayName: 'Kiswahili (Kenya)' },
                    { value: 'rw-RW', displayName: 'Kinyarwanda (Rwanda)' },
                    { value: 'kok-IN', displayName: 'Konkani (India)' },
                    { value: 'ko-KR', displayName: 'Korean (Korea)' },
                    { value: 'ky-KG', displayName: 'Kyrgyz (Kyrgyzstan)' },
                    { value: 'lo-LA', displayName: 'Lao (Laos)' },
                    { value: 'lv-LV', displayName: 'Latvian (Latvia)' },
                    { value: 'lt-LT', displayName: 'Lithuanian (Lithuania)' },
                    { value: 'dsb-DE', displayName: 'Lower Sorbian (Germany)' },
                    {
                        value: 'lb-LU',
                        displayName: 'Luxembourgish (Luxembourg)',
                    },
                    {
                        value: 'mk-MK',
                        displayName: 'Macedonian (North Macedonia)',
                    },
                    { value: 'sq-MK', displayName: 'Macedonian (Albania)' },
                    { value: 'mi-NZ', displayName: 'Maori (New Zealand)' },
                    { value: 'arn-CL', displayName: 'Mapudungun (Chile)' },
                    { value: 'mr-IN', displayName: 'Marathi (India)' },
                    { value: 'mr-IN', displayName: 'Marathi (India)' },
                    { value: 'moh-CA', displayName: 'Mohawk (Canada)' },
                    {
                        value: 'mn-Cyrl-MN',
                        displayName: 'Mongolian (Cyrillic, Mongolia)',
                    },
                    {
                        value: 'mn-Mong-CN',
                        displayName: 'Mongolian (Traditional Mongolian, China)',
                    },
                    { value: 'ne-NP', displayName: 'Nepali (Nepal)' },
                    { value: 'se-FI', displayName: 'Northern Sami (Finland)' },
                    { value: 'se-NO', displayName: 'Northern Sami (Norway)' },
                    { value: 'se-SE', displayName: 'Northern Sami (Sweden)' },
                    {
                        value: 'nb-NO',
                        displayName: 'Norwegian Bokmål (Norway)',
                    },
                    {
                        value: 'nn-NO',
                        displayName: 'Norwegian Nynorsk (Norway)',
                    },
                    { value: 'oc-FR', displayName: 'Occitan (France)' },
                    { value: 'or-IN', displayName: 'Odia (India)' },
                    { value: 'ps-AF', displayName: 'Pashto (Afghanistan)' },
                    { value: 'fa-IR', displayName: 'Persian (Iran)' },
                    { value: 'pl-PL', displayName: 'Polish (Poland)' },
                    { value: 'pt-BR', displayName: 'Portuguese (Brazil)' },
                    { value: 'pt-PT', displayName: 'Portuguese (Portugal)' },
                    {
                        value: 'pa-Arab-PK',
                        displayName: 'Punjabi (Arabic, Pakistan)',
                    },
                    {
                        value: 'pa-IN',
                        displayName: 'Punjabi (Gurmukhi, India)',
                    },
                    { value: 'quz-BO', displayName: 'Quechua (Bolivia)' },
                    { value: 'quz-EC', displayName: 'Quechua (Ecuador)' },
                    { value: 'quz-PE', displayName: 'Quechua (Peru)' },
                    { value: 'ro-RO', displayName: 'Romanian (Romania)' },
                    { value: 'rm-CH', displayName: 'Romansh (Switzerland)' },
                    { value: 'ru-RU', displayName: 'Russian (Russia)' },
                    { value: 'smn-FI', displayName: 'Sami (Inari, Finland)' },
                    { value: 'smj-NO', displayName: 'Sami (Lule, Norway)' },
                    { value: 'smj-SE', displayName: 'Sami (Lule, Sweden)' },
                    { value: 'se-NO', displayName: 'Sami (Northern, Norway)' },
                    { value: 'se-SE', displayName: 'Sami (Northern, Sweden)' },
                    { value: 'sms-FI', displayName: 'Sami (Skolt, Finland)' },
                    { value: 'sma-NO', displayName: 'Sami (Southern, Norway)' },
                    { value: 'sma-SE', displayName: 'Sami (Southern, Sweden)' },
                    { value: 'sa-IN', displayName: 'Sanskrit (India)' },
                    {
                        value: 'sr-Cyrl-BA',
                        displayName:
                            'Serbian (Cyrillic, Bosnia and Herzegovina)',
                    },
                    {
                        value: 'sr-Cyrl-ME',
                        displayName: 'Serbian (Cyrillic, Montenegro)',
                    },
                    {
                        value: 'sr-Cyrl-RS',
                        displayName: 'Serbian (Cyrillic, Serbia)',
                    },
                    {
                        value: 'sr-Latn-BA',
                        displayName: 'Serbian (Latin, Bosnia and Herzegovina)',
                    },
                    {
                        value: 'sr-Latn-ME',
                        displayName: 'Serbian (Latin, Montenegro)',
                    },
                    {
                        value: 'sr-Latn-RS',
                        displayName: 'Serbian (Latin, Serbia)',
                    },
                    {
                        value: 'nso-ZA',
                        displayName: 'Sesotho sa Leboa (South Africa)',
                    },
                    { value: 'tn-ZA', displayName: 'Setswana (South Africa)' },
                    { value: 'si-LK', displayName: 'Sinhala (Sri Lanka)' },
                    { value: 'sk-SK', displayName: 'Slovak (Slovakia)' },
                    { value: 'sl-SI', displayName: 'Slovenian (Slovenia)' },
                    { value: 'es-AR', displayName: 'Spanish (Argentina)' },
                    { value: 'es-BO', displayName: 'Spanish (Bolivia)' },
                    { value: 'es-CL', displayName: 'Spanish (Chile)' },
                    { value: 'es-CO', displayName: 'Spanish (Colombia)' },
                    { value: 'es-CR', displayName: 'Spanish (Costa Rica)' },
                    {
                        value: 'es-DO',
                        displayName: 'Spanish (Dominican Republic)',
                    },
                    { value: 'es-EC', displayName: 'Spanish (Ecuador)' },
                    { value: 'es-SV', displayName: 'Spanish (El Salvador)' },
                    {
                        value: 'es-GQ',
                        displayName: 'Spanish (Equatorial Guinea)',
                    },
                    { value: 'es-GT', displayName: 'Spanish (Guatemala)' },
                    { value: 'es-HN', displayName: 'Spanish (Honduras)' },
                    { value: 'es-MX', displayName: 'Spanish (Mexico)' },
                    { value: 'es-NI', displayName: 'Spanish (Nicaragua)' },
                    { value: 'es-PA', displayName: 'Spanish (Panama)' },
                    { value: 'es-PY', displayName: 'Spanish (Paraguay)' },
                    { value: 'es-PE', displayName: 'Spanish (Peru)' },
                    { value: 'es-PR', displayName: 'Spanish (Puerto Rico)' },
                    { value: 'es-ES', displayName: 'Spanish (Spain)' },
                    { value: 'es-US', displayName: 'Spanish (United States)' },
                    { value: 'es-UY', displayName: 'Spanish (Uruguay)' },
                    { value: 'es-VE', displayName: 'Spanish (Venezuela)' },
                    { value: 'sv-FI', displayName: 'Swedish (Finland)' },
                    { value: 'sv-SE', displayName: 'Swedish (Sweden)' },
                    { value: 'syr-SY', displayName: 'Syriac (Syria)' },
                    {
                        value: 'tg-Cyrl-TJ',
                        displayName: 'Tajik (Cyrillic, Tajikistan)',
                    },
                    {
                        value: 'tzm-Latn-DZ',
                        displayName: 'Tamazight (Latin, Algeria)',
                    },
                    { value: 'ta-IN', displayName: 'Tamil (India)' },
                    { value: 'tt-RU', displayName: 'Tatar (Russia)' },
                    { value: 'te-IN', displayName: 'Telugu (India)' },
                    { value: 'th-TH', displayName: 'Thai (Thailand)' },
                    { value: 'bo-CN', displayName: 'Tibetan (China)' },
                    { value: 'tr-TR', displayName: 'Turkish (Turkey)' },
                    { value: 'tk-TM', displayName: 'Turkmen (Turkmenistan)' },
                    { value: 'ug-CN', displayName: 'Uighur (China)' },
                    { value: 'uk-UA', displayName: 'Ukrainian (Ukraine)' },
                    { value: 'wen-DE', displayName: 'Upper Sorbian (Germany)' },
                    { value: 'ur-IN', displayName: 'Urdu (India)' },
                    { value: 'ur-PK', displayName: 'Urdu (Pakistan)' },
                    {
                        value: 'uz-Cyrl-UZ',
                        displayName: 'Uzbek (Cyrillic, Uzbekistan)',
                    },
                    {
                        value: 'uz-Latn-UZ',
                        displayName: 'Uzbek (Latin, Uzbekistan)',
                    },
                    { value: 'vi-VN', displayName: 'Vietnamese (Vietnam)' },
                    { value: 'cy-GB', displayName: 'Welsh (United Kingdom)' },
                    { value: 'wo-SN', displayName: 'Wolof (Senegal)' },
                    { value: 'xh-ZA', displayName: 'Xhosa (South Africa)' },
                    { value: 'sah-RU', displayName: 'Yakut (Russia)' },
                    { value: 'ii-CN', displayName: 'Yi (China)' },
                    { value: 'yo-NG', displayName: 'Yoruba (Nigeria)' },
                    { value: 'dje-NE', displayName: 'Zarma (Niger)' },
                    { value: 'zu-ZA', displayName: 'Zulu (South Africa)' },
                ],
            },
        },
        {
            path: 'data.suppressSenderEmails.value',
            config: {
                displayName: 'Supress emails to sender on completion?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output (Comments)',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output (Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.UpdatedDocuments.value',
            config: {
                displayName: 'Output (Updated Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    SendForSignatureActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.sender.value',
            config: {
                displayName: 'From',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.esignatureRecipients.value',
            config: {
                displayName: 'To',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.signatureSubject.value',
            config: {
                displayName: 'Subject',
                type: 'String',
            },
        },
        {
            path: 'data.message.value',
            config: {
                displayName: 'Message',
                type: 'String',
            },
        },
        {
            path: 'data.useDSTemplates.value',
            config: {
                displayName: null,
                type: 'Radio',
                choices: [
                    {
                        displayName: 'Documents',
                        value: 'document',
                    },
                    {
                        displayName: 'Documents and Templates',
                        value: 'esignatureDocuments',
                    },
                ],
            },
        },
        {
            path: 'data.document.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.esignatureTemplates.value',
            config: {
                displayName: 'Envelope Template',
                type: 'String',
            },
        },
        {
            path: 'data.expirationDays.value',
            config: {
                displayName: 'Expiration Days',
                type: 'String',
            },
        },
        {
            path: 'data.password.value',
            config: {
                displayName: 'Signer Password',
                type: 'String',
            },
        },
        {
            path: 'data.signaturesOrdered.value',
            config: {
                displayName: 'Signatures Ordered?',
                type: 'Bool',
            },
        },
        {
            path: 'data.writtenRequired.value',
            config: {
                displayName: 'Written Signature Required?',
                type: 'Bool',
            },
        },
        {
            path: 'data.senderSignsToo.value',
            config: {
                displayName: 'Sender signature required?',
                type: 'Bool',
            },
        },
        {
            path: 'data.signatureAuditEventsText.value',
            config: {
                displayName: 'Signature Audit Events',
                type: 'String',
            },
        },
        {
            path: 'data.timeoutWarningFromStepExecution.value',
            config: {
                displayName: 'Send reminder after execution?',
                type: 'Bool',
            },
        },
        {
            path: 'data.signatureAuditInfoXmlVariable.value',
            config: {
                displayName: 'Output (Audit Info)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    UpdateWorkflowOutputActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.outputProperty.value',
            config: {
                displayName: 'Workflow Output',
                type: 'String',
                required: true,
            },
        },
    ],
    SetWorkflowScopeNameActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.scopeName.value',
            config: {
                displayName: 'Process Name',
                type: 'String',
            },
        },
    ],
    SplitDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.sourceDocument.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.targetFolder.value',
            config: {
                displayName: 'Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.splitMethod.value',
            config: {
                displayName: 'Select the split method',
                type: 'Radio',
                choices: [
                    { displayName: 'Split via Page(s)', value: 'pages' },
                    { displayName: 'Split via XML', value: 'xml' },
                ],
                required: true,
            },
        },
        {
            path: 'data.newFileName.value',
            config: {
                displayName: 'New File Name',
                type: 'String',
            },
        },
        {
            path: 'data.pageRanges.value',
            config: {
                displayName: 'Page(s)',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.deleteOriginalDocument.value',
            config: {
                displayName: 'Delete source document?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    SimpleDelayActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
    ],
    UpdateDocumentKeywordActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.keywords.value',
            config: {
                displayName: 'Document Keywords',
                type: 'String',
                required: true,
            },
        },
    ],
    UpdateDocumentMetadataActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
    ],
    UpdateFolderDescriptionActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.folders.value',
            config: {
                displayName: 'Folder(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.description.value',
            config: {
                displayName: 'Folder Description',
                type: 'String',
                required: true,
            },
        },
    ],
    UpdateFolderMetadataActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.folders.value',
            config: {
                displayName: 'Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.propagateToChildren.value',
            config: {
                displayName: 'Update children',
                type: 'Bool',
            },
        },
    ],
    UpdateStatusActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.status.value',
            config: {
                displayName: 'Information',
                type: 'String',
                required: true,
            },
        },
    ],
    UpdateParentVariableActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
    ],
    UpdateSalesForceActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.salesForceObjectType.value',
            config: {
                displayName: 'Object Type',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.salesForceFindField.value',
            config: {
                displayName: 'Search Field',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.salesForceFindValue.value',
            config: {
                displayName: 'Search Value',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.SalesForceUpdateField.value',
            config: {
                displayName: 'Update Field',
                type: 'String',
            },
        },
        {
            path: 'data.SalesForceUpdateValue.value',
            config: {
                displayName: 'Update Value',
                type: 'String',
            },
        },
    ],
    UpdateSecurityActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document(s)',
                type: 'Variable',
            },
        },
        {
            path: 'data.folders.value',
            config: {
                displayName: 'Folder(s)',
                type: 'Variable',
            },
        },
        {
            path: 'data.users.value',
            config: {
                displayName: 'User(s)',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.recalculate.value',
            config: {
                displayName: 'Wait for the update to complete?',
                type: 'Bool',
            },
        },
        {
            path: 'data.security.value',
            config: {
                displayName: 'Security',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'Inherit from Parent Folder', value: '1' },
                    { displayName: 'No Access', value: '2' },
                    { displayName: 'View', value: '3' },
                    { displayName: 'View & Create', value: '4' },
                    { displayName: 'View & Edit', value: '5' },
                    { displayName: 'View, Edit & Delete', value: '6' },
                    {
                        displayName: 'View, Edit, Delete & Set Access',
                        value: '7',
                    },
                    { displayName: 'Security Variable', value: '8' },
                ],
                required: true,
            },
        },
    ],
    UpdateVariableFromCSVActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Upload CSV',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.fieldId.value',
            config: {
                displayName: 'Field Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.fieldValue.value',
            config: {
                displayName: 'Search Field Value',
                type: 'String',
                required: true,
            },
        },
    ],
    UpdateVariableFromXMLActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Upload XML',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.xpath.value',
            config: {
                displayName: 'XPath',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.outputXmlVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    UpdateVariableActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.notifyOnException.value',
            config: {
                displayName: 'Notify on error',
                type: 'Bool',
            },
        },
    ],
    WaitForExternalReviewActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.documents.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output (Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.UpdatedDocuments.value',
            config: {
                displayName: 'Output (Updated Document(s))',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.outputComments.value',
            config: {
                displayName: 'Output (Comments)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    WaitForSignal: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.outputVariable.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    WaitForSignatureActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.stageName.value',
            config: {
                displayName: 'Stage Name',
                type: 'String',
            },
        },
        {
            path: 'data.sender.value',
            config: {
                displayName: 'Sender',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.document.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.signatureAuditEventsText.value',
            config: {
                displayName: 'Signature Audit Events',
                type: 'Textarea',
            },
        },
        {
            path: 'data.signatureAuditInfoXmlVariable.value',
            config: {
                displayName: 'Output (Audit Info)',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    WatermarkDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.sourceDocument.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.targetFolder.value',
            config: {
                displayName: 'Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.documentName.value',
            config: {
                displayName: 'Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.watermarkPages.value',
            config: {
                displayName: 'Page(s)',
                type: 'String',
            },
        },
        {
            path: 'data.watermarkPosition.value',
            config: {
                displayName: 'Watermark Position',
                type: 'String',
            },
        },
        {
            path: 'data.watermarkType.value',
            config: {
                displayName: 'Watermark Type',
                type: 'Radio',
                choices: [
                    { displayName: 'Text', value: 'text' },
                    { displayName: 'Image', value: 'image' },
                ],
            },
        },
        {
            path: 'data.watermarkText.value',
            config: {
                displayName: 'Watermark Text',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.watermarkTextColor.value',
            config: {
                displayName: 'Text Color',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'Black', value: 'black' },
                    { displayName: 'Blue', value: 'blue' },
                    { displayName: 'Green', value: 'green' },
                    { displayName: 'Aqua', value: 'aqua' },
                    { displayName: 'Red', value: 'red' },
                    { displayName: 'Purple', value: 'purple' },
                    { displayName: 'Yellow', value: 'yellow' },
                    { displayName: 'White', value: 'white' },
                    { displayName: 'Gray', value: 'gray' },
                ],
            },
        },
        {
            path: 'data.watermarkTextFont.value',
            config: {
                displayName: 'Text Font',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'Times Roman', value: 'Times-Roman' },
                    {
                        displayName: 'Times Roman Italic',
                        value: 'Times-Roman-Italic',
                    },
                    {
                        displayName: 'Times Roman Bold',
                        value: 'Times-Roman-Bold',
                    },
                    {
                        displayName: 'Times Roman Bold & Italic',
                        value: 'Times-BoldItalic',
                    },
                    { displayName: 'Helvetica', value: 'Helvetica' },
                    {
                        displayName: 'Helvetica Oblique',
                        value: 'Helvetica-Oblique',
                    },
                    { displayName: 'Hevetica Bold', value: 'Helvetica-Bold' },
                    {
                        displayName: 'Helvetica Bold & Oblique',
                        value: 'Helvetica-BoldOblique',
                    },
                    { displayName: 'Courier', value: 'Courier' },
                    {
                        displayName: 'Courier Oblique',
                        value: 'Courier-Oblique',
                    },
                    { displayName: 'Courier Bold', value: 'Courier-Bold' },
                    {
                        displayName: 'Courier Bold & Oblique',
                        value: 'Courier-BoldOblique',
                    },
                    { displayName: 'Symbol', value: 'Symbol' },
                ],
            },
        },
        {
            path: 'data.watermarkTextFontSize.value',
            config: {
                displayName: 'Text Font Size',
                type: 'String',
            },
        },
        {
            path: 'data.watermarkAlign.value',
            config: {
                displayName: 'Alignment',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'Left', value: 'left' },
                    { displayName: 'Center', value: 'center' },
                    { displayName: 'Right', value: 'right' },
                ],
            },
        },
        {
            path: 'data.watermarkOpacity.value',
            config: {
                displayName: 'Opacity',
                type: 'String',
            },
        },
        {
            path: 'data.watermarkPadding.value',
            config: {
                displayName: 'Padding',
                type: 'String',
            },
        },
        {
            path: 'data.watermarkRotation.value',
            config: {
                displayName: 'Rotation',
                type: 'String',
            },
        },
        {
            path: 'data.resizeDirection.value',
            config: {
                displayName: 'Resize to accommodate',
                type: 'Choice',
                choices: [
                    { displayName: '', value: '' },
                    { displayName: 'None', value: 'None' },
                    { displayName: 'Horizontal', value: 'Horizontal' },
                    { displayName: 'Vertical', value: 'Vertical' },
                ],
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    WorkflowActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.variables.value',
            config: {
                displayName: 'Variables',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.parameterVariableName.value',
            config: {
                displayName: 'Kickoff Variable',
                type: 'Variable',
                isArray: false,
            },
        },
        {
            path: 'data.waitForChildWorkflow.value',
            config: {
                displayName: 'Wait for the sub-workflow',
                type: 'Bool',
            },
        },
    ],
    WriteTextDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.textSourceType.value',
            config: {
                displayName: 'Select Text Source',
                type: 'Radio',
                choices: [
                    { displayName: 'Text', value: 'text' },
                    { displayName: 'Variable', value: 'variable' },
                ],
            },
        },
        {
            path: 'data.sourceText.value',
            config: {
                displayName: 'Text',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.targetDocumentName.value',
            config: {
                displayName: 'Document Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.targetFolder.value',
            config: {
                displayName: 'Folder Destination',
                type: 'Variable',
                required: true,
            },
        },
        // {
        //     path: 'data.selectConfigurationDocument.value',
        //     config: {
        //         displayName: 'Select a Configuration Document?',
        //         type: 'Bool',
        //     },
        // },
        {
            path: 'data.outputXml.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                isArray: false,
            },
        },
    ],
    XmlMergeDocumentActivity: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
            },
        },
        {
            path: 'data.documentName.value',
            config: {
                displayName: 'Document Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.dataSource.value',
            config: {
                displayName: 'Variable',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.selectTemplate.value',
            config: {
                displayName: 'Document',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.targetFolder.value',
            config: {
                displayName: 'Folder',
                type: 'Variable',
                required: true,
            },
        },
        {
            path: 'data.waitForPdf.value',
            config: {
                displayName: 'Wait for the PDF version to be created?',
                type: 'Bool',
            },
        },
        {
            path: 'data.outputDocuments.value',
            config: {
                displayName: 'Output',
                type: 'Variable',
                required: true,
                isArray: false,
            },
        },
    ],
    default: [
        {
            path: 'data.name.value',
            config: {
                displayName: 'Step Name',
                type: 'String',
                required: true,
            },
        },
        {
            path: 'data.stepDescription.value',
            config: {
                displayName: 'Step Description',
                type: 'String',
                placeholder: 'Enter a description for this step',
            },
        },
    ],
    // Add other mappings as needed
};
