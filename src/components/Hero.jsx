import { useTranslation } from 'react-i18next'
import { HERO_HIGHLIGHTS } from '../data/content'
import Icon from './Icon'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="inicio" className="relative pt-28 pb-20 sm:pt-32 md:pt-40 md:pb-32">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 text-center sm:px-6">
        <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-4 py-1.5 backdrop-blur-md sm:mb-8">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary motion-safe:animate-pulse" />
          <span className="font-mono text-xs text-muted">{t('hero.badge')}</span>
        </div>

        <h1 className="mx-auto mb-5 max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-white sm:mb-6 sm:text-4xl md:text-6xl">
          {t('hero.title')}
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted sm:mb-10 sm:text-lg">
          {t('hero.subtitle')}
        </p>

        <div className="mb-12 flex w-full flex-col justify-center gap-3 sm:mb-16 sm:flex-row sm:gap-4 md:mb-20">
          <a
            className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100 active:scale-95"
            href="#proyectos"
          >
            {t('hero.ctaPrimary')}
            <Icon name="arrow_forward" />
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5 active:scale-95"
            href="#contacto"
          >
            <Icon name="mail" />
            {t('hero.ctaSecondary')}
          </a>
        </div>

        <div className="flex w-full max-w-4xl flex-wrap justify-center gap-x-6 gap-y-4 border-t border-white/10 pt-8 sm:gap-8 sm:pt-10 md:gap-12">
          {HERO_HIGHLIGHTS.map((highlight) => (
            <div key={highlight.id} className="flex items-center gap-2">
              <Icon name={highlight.icon} className="shrink-0 text-[20px] text-meta" />
              <span className="font-mono text-xs text-meta">
                {t(`hero.highlights.${highlight.id}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
