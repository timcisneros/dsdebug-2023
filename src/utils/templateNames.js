export const getAvailableTemplateNames = (
    builtInTemplateNames,
    storedTemplates
) => {
    const seenNames = new Set(
        builtInTemplateNames.map((name) => name.toLowerCase())
    );
    const storedNames = [];

    storedTemplates.forEach((template) => {
        const name = template?.name;
        if (typeof name !== 'string') return;
        const normalizedName = name.toLowerCase();
        if (seenNames.has(normalizedName)) return;
        seenNames.add(normalizedName);
        storedNames.push(name);
    });

    return [...builtInTemplateNames, ...storedNames];
};
