import * as React from 'react';
import { renderToString } from 'react-dom/server';
import {createCookie, RemixServer } from 'remix';
import type { EntryContext } from 'remix';

import createEmotionCache from './src/createEmotionCache';
import theme from './src/theme';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import {getRecommendedLocale} from "~/helpers/i18n";
import {createInstance} from "i18next";
import {initReactI18next, I18nextProvider} from "react-i18next";
import {i18next} from "~/i18n.server";
import Backend from "i18next-fs-backend";
import i18n from "~/i18n";
import {resolve} from "node:path";

export default async function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext
) {
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    const url = new URL(request.url);
    const cookie = createCookie("triformine_locale", {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
    });

    if (
        !['en', 'fr']
            .some((locale) => url.pathname.startsWith(`/${locale}/`))
    ) {
        const data = await cookie.parse(request.headers.get("Cookie"));
        const locale = data ?? (await getRecommendedLocale(request));
        return new Response(`/${locale}${url.pathname}`, {
            status: 302,
            headers: {
                Location: `/${locale}${url.pathname}`,
                "Set-Cookie": await cookie.serialize(locale),
            },
        });
    }

    // First, we create a new instance of i18next so every request will have a
    // completely unique instance and not share any state
    let instance = createInstance();

    // Then we could detect locale from the request
    const lng = url.pathname.split("/")[1];
    // And here we detect what namespaces the routes about to render want to use
    let ns = i18next.getRouteNamespaces(remixContext);

    await instance
        .use(initReactI18next) // Tell our instance to use react-i18next
        .use(Backend) // Setup our backend
        .init({
            ...i18n, // spread the configuration
            lng, // The locale we detected above
            ns, // The namespaces the routes about to render wants to use
            backend: {
                loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
            },
        });

    const MuiRemixServer = () => (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <I18nextProvider i18n={instance}>
                    <RemixServer context={remixContext} url={request.url} />
                </I18nextProvider>
            </ThemeProvider>
        </CacheProvider>
    );

    // Render the component to a string.
    const html = renderToString(<MuiRemixServer />);

    // Grab the CSS from emotion
    const { styles } = extractCriticalToChunks(html);

    let stylesHTML = '';

    styles.forEach(({ key, ids, css }) => {
        const emotionKey = `${key} ${ids.join(' ')}`;
        const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
        stylesHTML = `${stylesHTML}${newStyleTag}`;
    });

    // Add the emotion style tags after the insertion point meta tag
    const markup = html.replace(
        /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
        `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`,
    );

    responseHeaders.set('Content-Type', 'text/html');

    return new Response(`<!DOCTYPE html>${markup}`, {
        status: responseStatusCode,
        headers: responseHeaders,
    });
}
