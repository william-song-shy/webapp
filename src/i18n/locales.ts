export const SUPPORTED_LANGUAGES = [
  {
    locale: 'en',
    name: 'English',
    default: true,
  },
  {
    locale: 'de',
    name: 'Deutsch'
  }
]

export const SUPPORTED_LOCALES = SUPPORTED_LANGUAGES.map((l) => l.locale)

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.find((l) => l.default)

export const DEFAULT_LOCALE = DEFAULT_LANGUAGE?.locale as string

export function extractLocaleFromPath(path = '') {
  const [_, maybeLocale] = path.split('/')
  return SUPPORTED_LOCALES.includes(maybeLocale) ? maybeLocale : DEFAULT_LOCALE
}