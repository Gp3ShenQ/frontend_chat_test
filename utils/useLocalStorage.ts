// locale
const DATA_LOCALE = 'locale'
export const func_getLocalStorageLocale = () => localStorage.getItem(DATA_LOCALE)
export const func_setLocalStorageLocale = (locale: string) => localStorage.setItem(DATA_LOCALE, locale)
export const func_setLocalStorageLocaleRemove = () => localStorage.removeItem(DATA_LOCALE)
