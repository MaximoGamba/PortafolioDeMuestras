import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { PROJECT_STATUS } from '../features/projects/projectsData'
import { closeProject, selectSelectedProject } from '../features/projects/projectsSlice'
import { useLocalize } from '../i18n/localize'
import Icon from './Icon'
import ProjectStatusBadge from './ProjectStatusBadge'
import { GitHubIcon } from './icons'

export default function ProjectModal() {
  const { t } = useTranslation()
  const localize = useLocalize()
  const dispatch = useDispatch()
  const project = useSelector(selectSelectedProject)

  useEffect(() => {
    if (!project) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') dispatch(closeProject())
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, dispatch])

  if (!project) return null

  const scope = localize(project.scope) ?? []

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={() => dispatch(closeProject())}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={localize(project.title)}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85svh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-900/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.6)] backdrop-blur-xl md:p-10"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <ProjectStatusBadge status={project.status} />
          <button
            type="button"
            onClick={() => dispatch(closeProject())}
            aria-label={t('projects.actions.close')}
            className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10"
          >
            <Icon name="close" className="text-[20px]" />
          </button>
        </div>

        {project.industry && (
          <p className="mb-2 font-mono text-xs text-meta">
            {t('projects.labels.industry')} · {t(`industries.items.${project.industry}.title`)}
          </p>
        )}

        <h2 className="mb-4 font-display text-3xl font-semibold text-white">
          {localize(project.title)}
        </h2>
        <p className="text-lg leading-relaxed text-muted">{localize(project.description)}</p>

        {scope.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wide text-meta">
              {t('projects.labels.scope')}
            </h3>
            <ul className="divide-y divide-white/5 border-t border-white/5">
              {scope.map((item) => (
                <li key={item} className="flex items-start gap-3 py-3">
                  <Icon name="check_small" className="mt-0.5 text-[20px] text-primary" />
                  <span className="text-[15px] text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8">
          <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-meta">
            {t('projects.labels.stack')}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {project.status !== PROJECT_STATUS.LIVE && (
          <p className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-[15px] leading-relaxed text-muted">
            {t('projects.roadmapNote')}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100 active:scale-95"
            >
              {t('projects.actions.demo')}
              <Icon name="arrow_outward" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5 active:scale-95"
            >
              <GitHubIcon />
              {t('projects.actions.repository')}
            </a>
          )}
          <a
            href="#contacto"
            onClick={() => dispatch(closeProject())}
            className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-primary/90 active:scale-95"
          >
            <Icon name="mail" />
            {t('contact.direct')}
          </a>
        </div>
      </div>
    </div>
  )
}
