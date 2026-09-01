import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectFilteredProjects } from '../features/projects/projectsSlice'
import CategoryFilters from './CategoryFilters'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function ProjectsGrid() {
  const { t } = useTranslation()
  const projects = useSelector(selectFilteredProjects)

  return (
    <section id="proyectos" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading title={t('projects.title')} subtitle={t('projects.subtitle')} />
          <div className="flex flex-col items-center gap-3 lg:items-end">
            <CategoryFilters />
            <span className="font-mono text-xs text-meta">
              {t('projects.count', { count: projects.length })}
            </span>
          </div>
        </div>

        {projects.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-white/10 px-6 py-20 text-center text-muted">
            {t('projects.empty')}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
