import { RemixI18Next } from "remix-i18next";
import FileSystemBackend from 'i18next-fs-backend';
import i18n from '~/i18n';

export let i18next = new RemixI18Next({
    detection: {
        fallbackLanguage: i18n.fallbackLng, // here configure your default (fallback) language
        supportedLanguages: i18n.supportedLngs, // here configure your supported languages
    },
    i18next: {
      ...i18n,
      backend: {
          loadPath: './public/locales/{{lng}}/{{ns}}.json',
      }
    },
    backend: FileSystemBackend
});
