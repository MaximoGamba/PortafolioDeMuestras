import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PROFILE } from '../data/profile'
import useActiveSection from '../hooks/useActiveSection'
import BrandMark from './BrandMark'
import Icon from './Icon'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_LINKS = ['servicios', 'industrias', 'proyectos', 'tecnologias', 'contacto']

const NAV_LABEL_KEYS = {
  servicios: 'nav.services',
  industrias: 'nav.industries',
  proyectos: 'nav.projects',
  tecnologias: 'nav.tech',
  contacto: 'nav.contact',
}

export default function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(NAV_LINKS)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0D0D0E]/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a className="flex items-center gap-4" href="#inicio" onClick={() => setMenuOpen(false)}>
          <BrandMark />
          <span className="hidden font-mono text-sm font-medium text-white sm:block">
            {PROFILE.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? 'true' : undefined}
              className={`text-sm font-medium transition-colors ${
                activeSection === id ? 'text-white' : 'text-muted hover:text-white'
              }`}
            >
              {t(NAV_LABEL_KEYS[id])}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-primary/90 active:scale-95 sm:flex"
            href={PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="chat" />
            {t('nav.whatsapp')}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} className="text-[20px]" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#0D0D0E]/90 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeSection === id ? 'bg-white/5 text-white' : 'text-muted hover:bg-white/5 hover:text-white'
                }`}
              >
                {t(NAV_LABEL_KEYS[id])}
              </a>
            ))}
            <a
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-primary/90 active:scale-95 sm:hidden"
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="chat" />
              {t('nav.whatsapp')}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
