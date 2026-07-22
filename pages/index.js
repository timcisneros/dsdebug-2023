import WorkflowDiagram from '../src/components/WorkflowDiagram';
import Header from '../src/components/Header';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>DSDebug</title>
            </Head>
            <div>
                <Header />
                <WorkflowDiagram />
            </div>
        </>
    );
}
