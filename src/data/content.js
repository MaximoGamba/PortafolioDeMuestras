/**
 * Contenido estructural del sitio: sólo ids e íconos.
 * Los textos viven en src/i18n/locales/*.json bajo la misma clave.
 */

export const HERO_HIGHLIGHTS = [
  { id: 'pricing', icon: 'request_quote' },
  { id: 'availability', icon: 'bolt' },
  { id: 'progress', icon: 'visibility' },
  { id: 'global', icon: 'language' },
]

export const SERVICES = [
  { id: 'fullstack', icon: 'layers' },
  { id: 'management', icon: 'dataset' },
  { id: 'apis', icon: 'api' },
  { id: 'frontend', icon: 'web' },
]

export const INDUSTRIES = [
  { id: 'retail', icon: 'storefront' },
  { id: 'logistics', icon: 'local_shipping' },
  { id: 'health', icon: 'stethoscope' },
  { id: 'education', icon: 'school' },
  { id: 'hospitality', icon: 'restaurant' },
  { id: 'professional', icon: 'work' },
]

export const TECH_AREAS = [
  {
    id: 'backend',
    icon: 'dns',
    items: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs'],
  },
  {
    id: 'frontend',
    icon: 'code',
    items: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'data',
    icon: 'database',
    items: ['MySQL', 'JPA / Hibernate', 'Git & GitHub'],
  },
]
