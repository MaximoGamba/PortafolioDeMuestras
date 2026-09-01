import { createSelector, createSlice } from '@reduxjs/toolkit'
import { CATEGORIES, STATUS_ORDER, initialProjects } from './projectsData'

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: initialProjects,
    activeCategory: CATEGORIES.ALL,
    selectedProjectId: null,
  },
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload
    },
    openProject(state, action) {
      state.selectedProjectId = action.payload
    },
    closeProject(state) {
      state.selectedProjectId = null
    },
  },
})

export const { setActiveCategory, openProject, closeProject } = projectsSlice.actions

export const selectProjects = (state) => state.projects.items
export const selectActiveCategory = (state) => state.projects.activeCategory
export const selectSelectedProjectId = (state) => state.projects.selectedProjectId

export const selectFilteredProjects = createSelector(
  [selectProjects, selectActiveCategory],
  (items, activeCategory) => {
    const filtered =
      activeCategory === CATEGORIES.ALL
        ? items
        : items.filter((project) => project.category === activeCategory)

    return [...filtered].sort(
      (a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status],
    )
  },
)

export const selectSelectedProject = createSelector(
  [selectProjects, selectSelectedProjectId],
  (items, selectedId) => items.find((project) => project.id === selectedId) ?? null,
)

export default projectsSlice.reducer
