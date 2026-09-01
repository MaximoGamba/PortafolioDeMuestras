import { useTranslation } from 'react-i18next'
import { SERVICES } from '../data/content'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="servicios" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl transition-colors hover:bg-neutral-900/80"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                <Icon name={service.icon} className="text-[24px] text-white" />
              </div>
              <h3 className="mb-3 text-xl font-medium text-white">
                {t(`services.items.${service.id}.title`)}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">
                {t(`services.items.${service.id}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
