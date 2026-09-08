import { useTranslation } from 'react-i18next'
import { PROFILE } from '../data/profile'
import ContactForm from './ContactForm'
import Icon from './Icon'
import Section from './Section'
import { GitHubIcon } from './icons'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <Section id="contacto">
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-xl sm:p-8 md:p-10">
          <h2 className="mb-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            {t('contact.title')}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted sm:mb-10 sm:text-lg">
            {t('contact.subtitle')}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-primary/90 active:scale-95 sm:px-8"
            >
              <Icon name="mail" />
              {t('contact.direct')}
            </a>
            <a
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5 active:scale-95 sm:px-8"
            >
              <Icon name="chat" />
              {t('contact.whatsapp')}
            </a>
          </div>

          <ul className="mt-8 divide-y divide-white/5 border-t border-white/5 sm:mt-10">
            <ContactRow label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
            <ContactRow
              label="WhatsApp"
              value={PROFILE.phoneDisplay}
              href={PROFILE.whatsappUrl}
            />
            <ContactRow
              label="GitHub"
              value={PROFILE.githubUrl.replace('https://', '')}
              href={PROFILE.githubUrl}
              icon={<GitHubIcon className="h-4 w-4" />}
            />
            <ContactRow
              label="LinkedIn"
              value={PROFILE.linkedinHandle}
              href={PROFILE.linkedinUrl}
            />
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  )
}

function ContactRow({ label, value, href, icon }) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel="noopener noreferrer"
        className="flex flex-col gap-1 rounded px-1 py-3 transition-colors hover:bg-white/5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
      >
        <span className="font-mono text-xs text-meta">{label}</span>
        <span className="flex min-w-0 items-center gap-2 text-[15px] break-words text-white">
          {icon}
          {value}
        </span>
      </a>
    </li>
  )
}
