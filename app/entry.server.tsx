import i18next from "i18next";
import { renderToString } from "react-dom/server";
import { initReactI18next } from "react-i18next";
import {createCookie, EntryContext } from "remix";
import { RemixServer } from "remix";
import { RemixI18NextProvider } from "remix-i18next";
import { getRecommendedLocale } from "./helpers/i18n";

export default async function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext
) {
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

    // Here you also ned to initialize i18next using initReactI18next, you should
    // use the same configuration as in your client side.
    await i18next.use(initReactI18next).init({
        supportedLngs: ["en", "es"],
        defaultNS: "common",
        fallbackLng: "en",
        react: { useSuspense: false },
    });

    // Then you can render your app wrapped in the RemixI18NextProvider as in the
    // entry.client file
    let markup = renderToString(
        <RemixI18NextProvider i18n={i18next}>
            <RemixServer context={remixContext} url={request.url} />
        </RemixI18NextProvider>
    );

    responseHeaders.set("Content-Type", "text/html");

    return new Response("<!DOCTYPE html>" + markup, {
        status: responseStatusCode,
        headers: responseHeaders,
    });
}
