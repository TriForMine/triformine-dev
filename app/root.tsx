import {
    Links,
    LiveReload,
    LoaderFunction,
    json,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useCatch, useLoaderData, MetaFunction,
} from "remix";
import { useRemixI18Next } from "remix-i18next";

import {ColorModeScript, ChakraProvider, Box, Heading, Flex, extendTheme, ThemeConfig} from "@chakra-ui/react";
import {i18n} from "~/i18n.server";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export let loader: LoaderFunction = async ({ request }) => {
    let locale = await i18n.getLocale(request);
    return json({ locale });
};

export const meta: MetaFunction = () => {
    const description = "Welcome, I'm TriForMine and I'm an independent programmer. Creator of the discord bot Isekai Maid and much more!";
    return {
        "opengraph:type": "website",
        "opengraph:locale": "en_US",
        "opengraph:site_name": "TriForMine",
        "opengraph:description": description,
        description,
        keywords: "TriForMine, Developer",
        "twitter:creator": "@TriForMine",
        "twitter:site": "@TriForMine",
        "twitter:card": "summary",
        "twitter:description": description,
    };
};

function Document({
                      children,
                      title = "App title",
                  }: {
    children: React.ReactNode;
    title?: string;
}) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="alternate" hrefLang="en" href="https://www.triformine.dev/en" />
            <link rel="alternate" hrefLang="fr" href="https://www.triformine.dev/fr" />
            <Meta />
            <title>{title}</title>
            <Links />
        </head>
        <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        </body>
        </html>
    );
}

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({config})

export default function App() {
    let { locale } = useLoaderData<{ locale: string }>();
    useRemixI18Next(locale);

    return (
        <Document>
            <ChakraProvider theme={theme}>
                <Flex pos="relative" alignItems="center" justifyContent="center">
                    <Navbar />
                    <Box pt="70px" pb={["400px", "365px", "365px","365px"]} width="100vw" minHeight="100vh">
                        <ColorModeScript  />
                        <Outlet />
                    </Box>
                    <Footer />
                </Flex>
            </ChakraProvider>
        </Document>
    )
}

// How ChakraProvider should be used on CatchBoundary
export function CatchBoundary() {
    const caught = useCatch();

    return (
        <Document title={`${caught.status} ${caught.statusText}`}>
            <ChakraProvider>
                <Box>
                    <Heading as="h1" bg="purple.600">
                        [CatchBoundary]: {caught.status} {caught.statusText}
                    </Heading>
                </Box>
            </ChakraProvider>
        </Document>
    );
}

// How ChakraProvider should be used on ErrorBoundary
export function ErrorBoundary({ error }: { error: Error }) {
    return (
        <Document title="Error!">
            <ChakraProvider>
                <Box>
                    <Heading as="h1" bg="blue.500">
                        [ErrorBoundary]: There was an error: {error.message}
                    </Heading>
                </Box>
            </ChakraProvider>
        </Document>
    );
}
