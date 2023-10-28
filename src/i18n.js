import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import resources from 'locales/translations.json';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
