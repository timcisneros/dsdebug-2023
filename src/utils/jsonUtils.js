// jsonUtils.js

import { JSONPath } from 'jsonpath-plus';

export function findVariables(data) {
    let variables = [];

    const searchVariables = (obj) => {
        if (obj && typeof obj === 'object') {
            if (obj.type === 'Variable') {
                variables.push(obj);
            }

            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    searchVariables(obj[key]);
                }
            }
        } else if (Array.isArray(obj)) {
            obj.forEach((item) => {
                searchVariables(item);
            });
        }
    };

    searchVariables(data);
    return variables;
}

// export function findVariables(data) {
//     // Check if data is null or undefined
//     if (!data) {
//         return [];
//     }

//     const variableInstances = JSONPath({
//         json: data,
//         path: '$..[?(@?.type=="Variable")]',
//     });

//     return variableInstances || [];
// }
