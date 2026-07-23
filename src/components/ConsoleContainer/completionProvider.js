import { stepDataMapping } from '../SidePanel/Steps/StepData';
import { varDataMapping } from '../SidePanel/Variables/varData';
import { resolveConsoleCompletions } from './completionResolver';

const activityNames = Object.keys(stepDataMapping);
const variableEntries = Object.entries(varDataMapping).filter(
    ([, definition]) => definition.value
);
const variableTypes = variableEntries.map(([type]) => type);
const variableTemplates = variableEntries.map(([, definition]) =>
    definition.value
);

export const getConsoleCompletions = (context, dependencies) =>
    resolveConsoleCompletions(context, {
        ...dependencies,
        activityNames,
        variableTemplates,
        variableTypes,
    });
