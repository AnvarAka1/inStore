import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import uzk from './translations/uzk.json'
import ru from './translations/ru.json'
import uz from './translations/uz.json'

// the translations
const resources = {
  uzk: { translation: uzk },
  ru: { translation: ru },
  uz: { translation: uz }
}

i18n.use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
