import { useTranslation } from 'react-i18next'
import { INDUSTRIES } from '../data/content'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function IndustriesSection() {
  const { t } = useTranslation()

  return (
    <section id="industrias" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title={t('industries.title')}
          subtitle={t('industries.subtitle')}
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <article
              key={industry.id}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-xl transition-colors hover:bg-neutral-900/80"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5">
                <Icon name={industry.icon} className="text-[22px] text-white" />
              </div>
              <div>
                <h3 className="mb-1.5 text-base font-medium text-white">
                  {t(`industries.items.${industry.id}.title`)}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">
                  {t(`industries.items.${industry.id}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
