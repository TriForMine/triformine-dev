import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
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
    .use(initReactI18next)
    .init({
        supportedLngs: ["en", "fr"],
        defaultNS: "common",
        fallbackLng: "en",
        // I recommend you to always disable react.useSuspense for i18next
        react: { useSuspense: false },
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
