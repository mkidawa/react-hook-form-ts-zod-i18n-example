import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./translations/translationEN.json";

const fallbackLng = ["en"];
const supportedLngs = ["en"];

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng,
  supportedLngs,
});

export default i18n;
