import { AppProps } from 'next/app';
import Head from 'next/head';
import {AppShell, MantineProvider} from '@mantine/core';
import { emotionCache } from '../src/emotion-cache';
import {RouterTransition} from "../components/RouterTransition";
import {ModalsProvider} from "@mantine/modals";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    colorScheme: 'dark'
                }}
                emotionCache={emotionCache}
            >

                <RouterTransition />
                <ModalsProvider>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <AppShell
                        header={<Header links={[
                            { "link": "/", "label": "Home" },
                            { "link": "/projects", "label": "Projects" },
                            { "link": "/contact", "label": "Contact" }
                        ]} />}
                        footer={<Footer />}
                    >
                        <Component {...pageProps} />
                    </AppShell>
                </ModalsProvider>
            </MantineProvider>
        </>
    );
}
