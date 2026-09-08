import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useLocalize } from '../i18n/localize'
import { openProject } from '../features/projects/projectsSlice'
import Icon from './Icon'
import ProjectMedia from './ProjectMedia'
import { GitHubIcon } from './icons'

export default function ProjectCard({ project }) {
  const { t } = useTranslation()
  const localize = useLocalize()
  const dispatch = useDispatch()

  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur-xl transition-colors hover:bg-neutral-900/80 sm:p-6">
      <ProjectMedia project={project} className="mb-5" />

      {project.industry && (
        <p className="mb-2 font-mono text-xs text-meta">
          {t(`industries.items.${project.industry}.title`)}
        </p>
      )}

      <h3 className="mb-3 text-lg font-medium text-white sm:text-xl">
        {localize(project.title)}
      </h3>
      <p className="flex-1 text-[15px] leading-relaxed text-muted">
        {localize(project.description)}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-meta"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={() => dispatch(openProject(project.id))}
          className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100 active:scale-95"
        >
          {t('projects.actions.details')}
          <Icon name="arrow_forward" />
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5 active:scale-95"
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
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5 active:scale-95"
          >
            <GitHubIcon />
            {t('projects.actions.repository')}
          </a>
        )}

        {!project.liveUrl && !project.githubUrl && (
          <a
            href="#contacto"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/5 active:scale-95"
          >
            <Icon name="mail" />
            {t('projects.actions.request')}
          </a>
        )}
      </div>
    </article>
  )
}
