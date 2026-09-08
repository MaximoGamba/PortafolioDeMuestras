import { useTranslation } from 'react-i18next'
import { PROFILE } from '../data/profile'
import Icon from './Icon'

/**
 * Botón flotante de WhatsApp. Sólo aparece en móvil, donde el botón
 * de la barra superior queda oculto detrás del menú.
 */
export default function WhatsAppFab() {
  const { t } = useTranslation()

  return (
    <a
      href={PROFILE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('nav.whatsapp')}
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-transform active:scale-95 sm:hidden"
    >
      <Icon name="chat" className="text-[26px]" />
    </a>
  )
}
