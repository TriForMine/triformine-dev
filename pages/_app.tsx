import { AppProps } from 'next/app';
import Head from 'next/head';
import {AppShell, Text, MantineProvider, createStyles} from '@mantine/core';
import { emotionCache } from '../src/emotion-cache';
import {RouterTransition} from "../components/RouterTransition";
import {ModalsProvider} from "@mantine/modals";
import Header from "../components/Header";
import Footer from "../components/Footer";

const useStyles = createStyles((theme) => ({
    container: {
        paddingTop: 80,
        minHeight: `calc(100vh - ${60 + 80 + 55}px)`,
        zIndex: 0,
    },
}));

export default function App(props: AppProps) {
    const { classes } = useStyles();
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>TriForMine</title>
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
                    <AppShell
                        fixed={false}
                        header={<Header links={[
                            { "link": "/", "label": "Home" },
                            { "link": "/projects", "label": "Projects" },
                            { "link": "/contact", "label": "Contact" }
                        ]} />}
                        footer={<Footer />}
                        styles={(theme) => ({
                            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                        })}
                    >
                        <div className={classes.container}>
                            <Component {...pageProps} />
                        </div>
                    </AppShell>
                </ModalsProvider>
            </MantineProvider>
        </>
    );
}
