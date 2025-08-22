import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

// Import English resources
import translation from '../locales/en/translation.json';
import navigation from '../locales/en/navigation.json';
import wallet from '../locales/en/wallet.json';
import auth from '../locales/en/auth.json';
import settings from '../locales/en/settings.json';
import user from '../locales/en/user.json';

const resources = {
  en: {
    translation,
    navigation,
    wallet,
    auth,
    settings,
    user,
  },
};

export const initializeI18n = async () => {
  // Detect language
  let language = 'en';
  try {
    // Try to get language from AsyncStorage
    const storedLanguage = await AsyncStorage.getItem('user-language');
    if (storedLanguage) {
      language = storedLanguage;
    } else {
      // Fall back to device language
      const locales = RNLocalize.getLocales();
      const deviceLanguage = locales[0]?.languageCode || 'en';

      // Check if we support this language, otherwise default to English
      const supportedLanguages = ['en'];
      language = supportedLanguages.includes(deviceLanguage)
        ? deviceLanguage
        : 'en';
    }
  } catch (error) {
    console.error('Error detecting language:', error);
    language = 'en';
  }

  await i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: 'en',
    debug: __DEV__,

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    react: {
      useSuspense: false, // React Native doesn't support Suspense yet
    },

    // Namespace configuration
    ns: ['translation', 'navigation', 'wallet', 'auth', 'settings', 'user'],
    defaultNS: 'translation',
  });

  return i18n;
};

export const changeLanguage = async (language: string) => {
  try {
    await i18n.changeLanguage(language);
    await AsyncStorage.setItem('user-language', language);
  } catch (error) {
    console.error('Error changing language:', error);
  }
};

export const getCurrentLanguage = () => {
  return i18n.language;
};

export const getSupportedLanguages = () => {
  return Object.keys(resources);
};

export default i18n;
