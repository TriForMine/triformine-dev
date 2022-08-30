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
import Layout from './src/Layout';
import {withEmotionCache} from "@emotion/react";
import ClientStyleContext from "~/src/ClientStyleContext";
import React from "react";
import {useMediaQuery, unstable_useEnhancedEffect as useEnhancedEffect} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import {i18next} from "~/i18n.server";

type LoaderData = {
    locale: string,
    home: string,
    projects: string,
    contact: string
};

export let loader: LoaderFunction = async ({ request: {url} }) => {
    const locale = url.split("/")[3];
    const t = await i18next.getFixedT(locale, 'navbar');

    return json<LoaderData>({
        locale,
        home: t('home'),
        projects: t('projects'),
        contact: t('contact'),
    });
};

export let handle = {
    // In the handle export, we can add a i18n key with namespaces our route
    // will need to load. This key can be a single string or an array of strings.
    // TIP: In most cases, you should set this to your defaultNS from your i18n config
    // or if you did not set one, set it to the i18next default namespace "translation"
    i18n: "common",
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

interface DocumentProps {
    children: React.ReactNode;
    title?: string;
}

const Document = withEmotionCache(({ children, title, locale, i18n }: DocumentProps & { locale?: any, i18n?: any}, emotionCache) => {
    const clientStyleData = React.useContext(ClientStyleContext);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    // Only executed on client
    useEnhancedEffect(() => {
        // re-link sheet container
        emotionCache.sheet.container = document.head;
        // re-inject tags
        const tags = emotionCache.sheet.tags;
        emotionCache.sheet.flush();
        tags.forEach((tag) => {
            // eslint-disable-next-line no-underscore-dangle
            (emotionCache.sheet as any)._insertTag(tag);
        });
        // reset cache to reapply global styles
        clientStyleData.reset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <html lang={locale || "en"} dir={i18n?.dir() || "ltr"}>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="alternate" hrefLang="en" href="https://www.triformine.dev/en" />
            <link rel="alternate" hrefLang="fr" href="https://www.triformine.dev/fr" />
            <meta name="theme-color" content={theme.palette.primary.main} />
            {title ? <title>{title}</title> : null}
            <Meta />
            <Links />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <meta name="emotion-insertion-point" content="emotion-insertion-point" />
	    <script async defer data-website-id="a595c156-ce6d-4045-a0d9-22c5b4c8eeb7" src="https://umami.triformine.dev/triformine-track.js"></script>
        </head>
        <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
        </html>
    );
});

export default function App() {
    let { locale } = useLoaderData<LoaderData>();
    let { i18n } = useTranslation();

    // This hook will change the i18n instance language to the current locale
    // detected by the loader, this way, when we do something to change the
    // language, this locale will change and i18next will load the correct
    // translation files
    useChangeLanguage(locale);

    return (
        <Document locale={locale} i18n={i18n}>
            <Layout>
                <Outlet />
            </Layout>
        </Document>
    )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
    console.error(error);

    return (
        <Document title="Error!">
            <Layout>
                <div>
                    <h1>There was an error</h1>
                    <p>{error.message}</p>
                </div>
            </Layout>
        </Document>
    );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
    const caught = useCatch();

    let message;
    switch (caught.status) {
        case 401:
            message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>;
            break;
        case 404:
            message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>;
            break;

        default:
            throw new Error(caught.data || caught.statusText);
    }

    return (
        <Document title={`${caught.status} ${caught.statusText}`}>
            <Layout>
                <h1>
                    {caught.status}: {caught.statusText}
                </h1>
                {message}
            </Layout>
        </Document>
    );
}
