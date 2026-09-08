import { useTranslation } from 'react-i18next'
import { TECH_AREAS } from '../data/content'
import Icon from './Icon'
import Section from './Section'
import SectionHeading from './SectionHeading'

export default function TechStackSection() {
  const { t } = useTranslation()

  return (
    <Section id="tecnologias">
      <SectionHeading
        title={t('tech.title')}
        subtitle={t('tech.subtitle')}
        className="mb-10 md:mb-16"
      />

      {/* Franja abierta, sin tarjetas: aligera el bloque final antes del contacto. */}
      <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-0">
        {TECH_AREAS.map((area, index) => (
          <div
            key={area.id}
            className={
              index === 0
                ? 'md:pr-8'
                : 'md:border-l md:border-white/10 md:px-8 md:last:pr-0'
            }
          >
            <div className="mb-4 flex items-center gap-3">
              <Icon name={area.icon} className="text-[22px] text-meta" />
              <h3 className="text-base font-medium text-white">{t(`tech.areas.${area.id}`)}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {area.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
