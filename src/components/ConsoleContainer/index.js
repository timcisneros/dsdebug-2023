import { memo } from 'react';
import ConsolePanel from './ConsolePanel';
import useConsoleController from './useConsoleController';

const ConsoleContainer = (props) => {
    const panelProps = useConsoleController(props);
    return <ConsolePanel {...panelProps} />;
};

export default memo(ConsoleContainer);
