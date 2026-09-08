import { useTranslation } from 'react-i18next'
import { PROFILE } from '../data/profile'

const FOOTER_LINKS = [
  { label: 'GitHub', href: PROFILE.githubUrl },
  { label: 'LinkedIn', href: PROFILE.linkedinUrl },
  { label: 'WhatsApp', href: PROFILE.whatsappUrl },
  { label: 'Email', href: `mailto:${PROFILE.email}` },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="w-full border-t border-white/10 bg-transparent">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 sm:px-6 md:flex-row">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <span className="font-mono text-xs text-meta">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </span>
          {PROFILE.available && (
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs text-meta">{t('footer.available')}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-xs text-meta transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
