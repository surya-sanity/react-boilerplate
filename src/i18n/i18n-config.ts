import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enGB from "./locales/en-GB.json";

export const defaultNamespace = "default";

export const resources = {
  "en-GB": {
    [defaultNamespace]: enGB,
  },
};

export const RTL_LOCALES = ["ar-AE"];

export const defaultLanguage: keyof typeof resources = (localStorage.getItem("lang") as keyof typeof resources) || "en-GB";

i18n.use(initReactI18next).init({
  defaultNS: defaultNamespace,
  ns: [defaultNamespace],
  resources,
  lng: defaultLanguage,
  fallbackLng: "en-GB",
  interpolation: {
    escapeValue: false,
  },
});
