let templateDataPromise;

export const loadTemplateDataMapping = () => {
    if (!templateDataPromise) {
        templateDataPromise = import(
            '../components/SidePanel/Steps/templateData'
        ).then((module) => module.templateDataMapping);
    }

    return templateDataPromise;
};

export const preloadTemplateData = () => {
    void loadTemplateDataMapping();
};
