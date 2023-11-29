import React, { useEffect } from 'react';
import WorkflowDiagram from '../src/components/WorkflowDiagram';
import Header from '../src/components/Header';
import Head from 'next/head';

const myApp = {};

myApp.myFunction = function () {
    console.log('Hello from myFunction in myApp!');
};

export default function Home() {
    useEffect(() => {
        // Attach the function to the global scope (window object)
        window.myFunction = myApp.myFunction;
    }, []);

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
