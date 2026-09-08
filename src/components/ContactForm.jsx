import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { INDUSTRIES } from '../data/content'
import { PROFILE } from '../data/profile'
import Icon from './Icon'

const FIELD_CLASSES =
  'w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-base text-white placeholder:text-meta transition-all duration-200 focus:border-primary-text focus:outline-none focus:ring-2 focus:ring-primary/20'

const EMPTY_FORM = { name: '', email: '', industry: '', message: '' }

/** Clave pública de Web3Forms. Sin ella, el formulario cae al modo mailto. */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function ContactForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const sendByEmailClient = () => {
    const subject = encodeURIComponent(t('contact.form.subject', { name: form.name }))
    const body = encodeURIComponent(
      [
        form.message,
        '',
        `${t('contact.form.name')}: ${form.name}`,
        `${t('contact.form.email')}: ${form.email}`,
        `${t('contact.form.industry')}: ${form.industry || '-'}`,
      ].join('\n'),
    )
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!ACCESS_KEY) {
      sendByEmailClient()
      return
    }

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: t('contact.form.subject', { name: form.name }),
          from_name: form.name,
          name: form.name,
          email: form.email,
          industry: form.industry || '-',
          message: form.message,
        }),
      })

      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.message ?? 'submission rejected')

      setStatus('success')
      setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start justify-center rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-xl sm:p-8 md:p-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
          <Icon name="check_circle" className="text-[24px] text-primary-text" />
        </div>
        <h3 className="mb-3 font-display text-2xl font-semibold text-white">
          {t('contact.form.successTitle')}
        </h3>
        <p className="mb-8 text-base leading-relaxed text-muted">
          {t('contact.form.successBody')}
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5 active:scale-95"
        >
          {t('contact.form.sendAnother')}
        </button>
      </div>
    )
  }

  const isSending = status === 'sending'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-xl sm:p-8 md:p-10"
    >
      <div className="flex flex-col gap-5">
        <Field label={t('contact.form.name')}>
          <input
            className={FIELD_CLASSES}
            name="name"
            autoComplete="name"
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
            autoComplete="email"
            inputMode="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('contact.form.emailPlaceholder')}
            required
          />
        </Field>

        <Field label={t('contact.form.industry')} hint={t('contact.form.optional')}>
          <select
            className={`${FIELD_CLASSES} appearance-none [&>option]:bg-neutral-900 [&>option]:text-white`}
            name="industry"
            value={form.industry}
            onChange={handleChange}
          >
            <option value="">{t('contact.form.industryPlaceholder')}</option>
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

        {status === 'error' && (
          <div
            role="alert"
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-[15px] leading-relaxed"
          >
            <p className="mb-1 font-medium text-white">{t('contact.form.errorTitle')}</p>
            <p className="text-muted">{t('contact.form.errorBody')}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSending}
          className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:px-8"
        >
          {isSending ? (
            <>
              <Icon name="progress_activity" className="text-[18px] motion-safe:animate-spin" />
              {t('contact.form.sending')}
            </>
          ) : (
            <>
              {status === 'error' ? t('contact.form.retry') : t('contact.form.submit')}
              <Icon name="arrow_forward" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

function Field({ label, hint, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-2 font-mono text-xs text-meta">
        {label}
        {hint && <span className="text-meta/70">({hint})</span>}
      </span>
      {children}
    </label>
  )
}
