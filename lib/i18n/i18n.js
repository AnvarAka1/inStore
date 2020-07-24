import i18n from "i18next";
import en from "./translations/en.json";
import ru from "./translations/ru.json";
import uz from "./translations/uz.json";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    },
    uz: {
        translation: uz
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;