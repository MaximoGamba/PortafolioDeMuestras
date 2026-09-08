import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { CATEGORIES } from '../features/projects/projectsData'
import {
  selectActiveCategory,
  setActiveCategory,
} from '../features/projects/projectsSlice'

const FILTERS = [
  CATEGORIES.ALL,
  CATEGORIES.FULLSTACK,
  CATEGORIES.BACKEND,
  CATEGORIES.FRONTEND,
]

export default function CategoryFilters() {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const activeCategory = useSelector(selectActiveCategory)

  return (
    <div
      role="group"
      aria-label={t('projects.filtersLabel')}
      className="flex flex-wrap justify-center gap-1 rounded-3xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl sm:rounded-full"
    >
      {FILTERS.map((category) => {
        const isActive = category === activeCategory
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => dispatch(setActiveCategory(category))}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 sm:px-5 ${
              isActive
                ? 'bg-white text-black'
                : 'text-muted hover:bg-white/5 hover:text-white'
            }`}
          >
            {t(`projects.filters.${category}`)}
          </button>
        )
      })}
    </div>
  )
}
