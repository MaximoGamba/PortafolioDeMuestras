import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/** Mantiene el título y la meta description sincronizados con el idioma activo. */
export default function useDocumentMeta() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('meta.title')

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t('meta.description'))
  }, [t, i18n.resolvedLanguage])
}
