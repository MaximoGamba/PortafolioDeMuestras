import { useTranslation } from 'react-i18next'
import { PROJECT_STATUS } from '../features/projects/projectsData'

const STATUS_STYLES = {
  [PROJECT_STATUS.LIVE]: { chip: 'bg-primary/10 text-primary', dot: 'bg-primary' },
  [PROJECT_STATUS.IN_PROGRESS]: { chip: 'bg-white/5 text-white', dot: 'bg-white/60' },
  [PROJECT_STATUS.PLANNED]: { chip: 'bg-white/5 text-meta', dot: 'bg-meta' },
}

export default function ProjectStatusBadge({ status }) {
  const { t } = useTranslation()
  const styles = STATUS_STYLES[status] ?? STATUS_STYLES[PROJECT_STATUS.PLANNED]

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs ${styles.chip}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
      {t(`projects.status.${status}`)}
    </span>
  )
}
