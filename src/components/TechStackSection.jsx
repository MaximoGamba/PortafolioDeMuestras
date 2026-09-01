import { useTranslation } from 'react-i18next'
import { TECH_AREAS } from '../data/content'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

export default function TechStackSection() {
  const { t } = useTranslation()

  return (
    <section id="tecnologias" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title={t('tech.title')} subtitle={t('tech.subtitle')} className="mb-16" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TECH_AREAS.map((area) => (
            <div
              key={area.id}
              className="rounded-3xl border border-white/10 bg-neutral-900/60 p-8 backdrop-blur-xl transition-colors hover:bg-neutral-900/80"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                <Icon name={area.icon} className="text-[24px] text-white" />
              </div>
              <h3 className="mb-4 text-xl font-medium text-white">{t(`tech.areas.${area.id}`)}</h3>
              <ul className="divide-y divide-white/5">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-4 rounded px-1 py-3 transition-colors hover:bg-white/5"
                  >
                    <span className="text-[15px] text-muted">{item}</span>
                    <Icon name="check_small" className="text-[20px] text-meta" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
