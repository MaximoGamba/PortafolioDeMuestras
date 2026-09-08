import { useTranslation } from 'react-i18next'
import { INDUSTRIES } from '../data/content'
import Icon from './Icon'
import Section from './Section'
import SectionHeading from './SectionHeading'

const HALF = Math.ceil(INDUSTRIES.length / 2)
const COLUMNS = [INDUSTRIES.slice(0, HALF), INDUSTRIES.slice(HALF)]

export default function IndustriesSection() {
  const { t } = useTranslation()

  return (
    <Section id="industrias">
      <SectionHeading
        title={t('industries.title')}
        subtitle={t('industries.subtitle')}
        className="mb-10 md:mb-16"
      />

      {/* Lista dentro de un solo panel: rompe la repetición de tarjetas del resto de la página. */}
      <div className="grid rounded-3xl border border-white/10 bg-neutral-900/60 p-2 backdrop-blur-xl sm:p-4 lg:grid-cols-2 lg:gap-x-10">
        {COLUMNS.map((column, index) => (
          <ul key={index} className="divide-y divide-white/5">
            {column.map((industry) => (
              <li
                key={industry.id}
                className="flex items-start gap-4 rounded-2xl p-4 transition-colors hover:bg-white/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <Icon name={industry.icon} className="text-[20px] text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 text-base font-medium text-white">
                    {t(`industries.items.${industry.id}.title`)}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {t(`industries.items.${industry.id}.description`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Section>
  )
}
