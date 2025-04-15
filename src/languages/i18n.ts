import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_US from './en_US';

const resources = {
  en_US: {
    translation: en_US,
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en_US',
      fallbackLng: 'en_US',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
