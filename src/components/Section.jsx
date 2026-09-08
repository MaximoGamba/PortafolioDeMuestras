/**
 * Contenedor de sección: unifica el ancho máximo y el ritmo vertical.
 * El espaciado se reduce en móvil (80px) frente a escritorio (128px).
 */
export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">{children}</div>
    </section>
  )
}
