import Icon from './Icon'
import ProjectStatusBadge from './ProjectStatusBadge'

/** Las capturas viven en public/, que se sirve bajo el base de Vite. */
function resolveImage(path) {
  if (!path) return null
  if (/^https?:\/\//.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

/**
 * Zona de imagen del proyecto en formato 16:9.
 * Si el proyecto todavía no tiene captura, muestra un marcador
 * en lugar de un hueco vacío.
 */
export default function ProjectMedia({ project, className = '' }) {
  const image = resolveImage(project.image)

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={project.imageAlt ?? ''}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(0,113,227,0.16),transparent_62%)]">
          <Icon name="deployed_code" className="text-[34px] text-meta" />
        </div>
      )}

      <div className="absolute top-3 right-3 rounded-full bg-neutral-900/70 backdrop-blur-md">
        <ProjectStatusBadge status={project.status} />
      </div>
    </div>
  )
}
