import { useTranslation } from 'react-i18next'
import { SERVICES } from '../data/content'
import Icon from './Icon'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function ServicesSection() {
  const { t } = useTranslation()

  return (
    <Section id="servicios">
      <SectionHeading
        title={t('services.title')}
        subtitle={t('services.subtitle')}
        className="mb-10 md:mb-16"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className="rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-xl transition-colors hover:bg-neutral-900/80 sm:p-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 sm:mb-6">
              <Icon name={service.icon} className="text-[24px] text-white" />
            </div>
            <h3 className="mb-3 text-lg font-medium text-white sm:text-xl">
              {t(`services.items.${service.id}.title`)}
            </h3>
            <p className="text-[15px] leading-relaxed text-muted">
              {t(`services.items.${service.id}.description`)}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
