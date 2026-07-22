import { useOnSelectionChange } from '@xyflow/react';
import { useSelection } from '../contexts/NodeContext';

export function SelectionChangeLogger() {
    const { setSelectedNodes } = useSelection();
    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            // Check if nodes array is empty
            if (nodes.length === 0) {
                setSelectedNodes(null); // Set selectedNodes to null when nothing is selected
            } else {
                setSelectedNodes(nodes);
            }
        },
    });

    return null;
}

// export function ViewportChangeLogger() {
//     useOnViewportChange({
//         onStart: useCallback((viewport) => console.log('start', viewport), []),
//         onChange: useCallback(
//             (viewport) => console.log('change', viewport),
//             []
//         ),
//         onEnd: useCallback((viewport) => console.log('end', viewport), []),
//     });

//     return null;
// }
