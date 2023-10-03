import { useOnSelectionChange } from 'reactflow';
import { useNode } from '../contexts/NodeContext';

export function SelectionChangeLogger() {
    const { setSelectedNodes } = useNode();
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
