import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './translations/en.json'
import ptTranslation from './translations/pt.json'


i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: enTranslation,
        pt: ptTranslation 
    },
});

export default i18n;