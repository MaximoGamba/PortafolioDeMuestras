import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { INDUSTRIES } from '../data/content'
import { PROFILE } from '../data/profile'
import Icon from './Icon'
import { GitHubIcon } from './icons'

const FIELD_CLASSES =
  'w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-[15px] text-white placeholder:text-meta transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'

const EMPTY_FORM = { name: '', email: '', industry: '', message: '' }

export default function ContactSection() {
  const { t } = useTranslation()
  const [form, setForm] = useState(EMPTY_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(t('contact.form.subject', { name: form.name }))
    const body = encodeURIComponent(
      [
        form.message,
        '',
        `${t('contact.form.name')}: ${form.name}`,
        `${t('contact.form.email')}: ${form.email}`,
        `${t('contact.form.industry')}: ${form.industry}`,
      ].join('\n'),
    )
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl md:p-10">
            <h2 className="mb-3 font-display text-3xl font-semibold text-white">
              {t('contact.title')}
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted">{t('contact.subtitle')}</p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-primary/90 active:scale-95"
              >
                <Icon name="mail" />
                {t('contact.direct')}
              </a>
              <a
                href={PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5 active:scale-95"
              >
                <Icon name="chat" />
                {t('contact.whatsapp')}
              </a>
            </div>

            <ul className="mt-10 divide-y divide-white/5 border-t border-white/5">
              <ContactRow label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
              <ContactRow
                label="GitHub"
                value={PROFILE.githubUrl.replace('https://', '')}
                href={PROFILE.githubUrl}
                icon={<GitHubIcon className="h-4 w-4" />}
              />
              <ContactRow
                label="LinkedIn"
                value={PROFILE.linkedinUrl.replace('https://www.', '')}
                href={PROFILE.linkedinUrl}
              />
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl md:p-10"
          >
            <div className="flex flex-col gap-5">
              <Field label={t('contact.form.name')}>
                <input
                  className={FIELD_CLASSES}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                />
              </Field>
              <Field label={t('contact.form.email')}>
                <input
                  className={FIELD_CLASSES}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </Field>
              <Field label={t('contact.form.industry')}>
                <select
                  className={`${FIELD_CLASSES} appearance-none [&>option]:bg-neutral-900 [&>option]:text-white`}
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    {t('contact.form.industryPlaceholder')}
                  </option>
                  {INDUSTRIES.map((industry) => (
                    <option key={industry.id} value={t(`industries.items.${industry.id}.title`)}>
                      {t(`industries.items.${industry.id}.title`)}
                    </option>
                  ))}
                  <option value={t('contact.form.industryOther')}>
                    {t('contact.form.industryOther')}
                  </option>
                </select>
              </Field>
              <Field label={t('contact.form.message')}>
                <textarea
                  className={`${FIELD_CLASSES} min-h-32 resize-y`}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
              </Field>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100 active:scale-95"
              >
                {t('contact.form.submit')}
                <Icon name="arrow_forward" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs text-meta">{label}</span>
      {children}
    </label>
  )
}

function ContactRow({ label, value, href, icon }) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 rounded px-1 py-3 transition-colors hover:bg-white/5"
      >
        <span className="font-mono text-xs text-meta">{label}</span>
        <span className="flex items-center gap-2 text-[15px] text-white">
          {icon}
          {value}
        </span>
      </a>
    </li>
  )
}
