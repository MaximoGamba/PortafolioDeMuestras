import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from '../i18n'
import Icon from './Icon'

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  const current =
    SUPPORTED_LANGUAGES.find((language) => language.code === i18n.resolvedLanguage) ??
    SUPPORTED_LANGUAGES[0]

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('language.select')}
        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 active:scale-95"
      >
        <Icon name="language" />
        <span className="font-mono text-xs">{current.short}</span>
        <Icon name="expand_more" className="text-[16px] text-meta" />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('language.label')}
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 p-1 backdrop-blur-xl"
        >
          {SUPPORTED_LANGUAGES.map((language) => {
            const isActive = language.code === current.code
            return (
              <li key={language.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => changeLanguage(language.code)}
                  className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'text-muted hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{language.label}</span>
                  <span className="font-mono text-xs text-meta">{language.short}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
