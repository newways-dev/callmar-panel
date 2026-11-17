import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales'

export type Language = 'en' | 'ru'

export const LANGUAGES: Language[] = ['en', 'ru']

const STORAGE_KEY = 'callmar-language'

/** A `?lng=ru` link wins over the saved choice, which wins over the default (English). */
export const resolveLanguage = (
  search: string,
  stored: string | null
): Language => {
  const fromUrl = new URLSearchParams(search).get('lng')

  if (fromUrl === 'ru' || fromUrl === 'en') return fromUrl

  return stored === 'ru' ? 'ru' : 'en'
}

const readInitialLanguage = (): Language => {
  let stored: string | null = null

  try {
    stored = window.localStorage.getItem(STORAGE_KEY)
  } catch {
    // storage can be unavailable (private mode)
  }

  return resolveLanguage(window.location.search, stored)
}

/**
 * The Russian texts are the original strings of the product and are used as keys
 * (`t('Звонки')`). Russian therefore needs no dictionary: a missing key renders
 * itself. English translations live in `./locales`.
 */
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: {} },
  },
  lng: readInitialLanguage(),
  fallbackLng: false,
  keySeparator: false,
  nsSeparator: false,
  returnEmptyString: false,
  returnNull: false,
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (language: string) => {
  document.documentElement.lang = language

  try {
    window.localStorage.setItem(STORAGE_KEY, language)
  } catch {
    // storage can be unavailable (private mode); the choice then lasts for the session
  }
})

document.documentElement.lang = i18n.language

/** Locale used for dates and times, matching the current language. */
export const getLocale = () => (i18n.language === 'ru' ? 'ru-RU' : 'en-GB')

export default i18n
