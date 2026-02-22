import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import sv from "./sv.json";
import en from "./en.json";
import ar from "./ar.json";
import es from "./es.json";
import fi from "./fi.json";
import no from "./no.json";
import is from "./is.json";
import ku from "./ku.json";
import so from "./so.json";
import fa from "./fa.json";

const savedLang = localStorage.getItem("lang") || "sv";

const rtlLanguages = ["ar", "fa"];

i18n.use(initReactI18next).init({
  resources: {
    sv: { translation: sv },
    en: { translation: en },
    ar: { translation: ar },
    es: { translation: es },
    fi: { translation: fi },
    no: { translation: no },
    is: { translation: is },
    ku: { translation: ku },
    so: { translation: so },
    fa: { translation: fa },
  },
  lng: savedLang,
  fallbackLng: "sv",
  interpolation: { escapeValue: false },
});

document.documentElement.dir = rtlLanguages.includes(savedLang) ? "rtl" : "ltr";
document.documentElement.lang = savedLang;

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
  document.documentElement.dir = rtlLanguages.includes(lng) ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

export default i18n;
