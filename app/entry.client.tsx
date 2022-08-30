import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import * as React from 'react';
import { useState } from 'react';
import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import ClientStyleContext from './src/ClientStyleContext';
import createEmotionCache from './src/createEmotionCache';
import theme from './src/theme';
import {getInitialNamespaces} from "remix-i18next";
import i18n from "~/i18n";
import Backend from "i18next-http-backend";

interface ClientCacheProviderProps {
    children: React.ReactNode;
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
    const [cache, setCache] = useState(createEmotionCache());

    function reset() {
        setCache(createEmotionCache());
    }

    return (
        <ClientStyleContext.Provider value={{ reset }}>
            <CacheProvider value={cache}>{children}</CacheProvider>
        </ClientStyleContext.Provider>
    );
}

// initialize i18next using initReactI18next and configuring it
i18next
    .use(initReactI18next) // Tell i18next to use the react-i18next plugin
    .use(LanguageDetector) // Setup a client-side language detector
    .use(Backend) // Setup your backend
    .init({
        ...i18n, // spread the configuration
        // This function detects the namespaces your routes rendered while SSR use
        ns: getInitialNamespaces(),
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        detection: {
            // Here only enable htmlTag detection, we'll detect the language only
            // server-side with remix-i18next, by using the `<html lang>` attribute
            // we can communicate to the client the language detected server-side
            order: ["htmlTag"],
            // Because we only use htmlTag, there's no reason to cache the language
            // on the browser, so we disable it
            caches: [],
        },
    })
    .then(() => {
        return hydrate(
            <I18nextProvider i18n={i18next}>
                <ClientCacheProvider>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline/>
                        <RemixBrowser/>
                    </ThemeProvider>
                </ClientCacheProvider>
            </I18nextProvider>,
            document,
        );
    })
