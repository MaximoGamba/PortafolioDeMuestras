import { useTranslation } from 'react-i18next'
import { DEFAULT_LANGUAGE } from './index'

/**
 * Resuelve un campo del catálogo que puede venir como string plano
 * o como diccionario por idioma: { es: '...', en: '...' }.
 */
export function localize(value, language) {
  if (value == null) return ''
  if (typeof value === 'string') return value
  if (Array.isArray(value)) return value
  return value[language] ?? value[DEFAULT_LANGUAGE] ?? Object.values(value)[0] ?? ''
}

export function useLocalize() {
  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage ?? DEFAULT_LANGUAGE
  return (value) => localize(value, language)
}
