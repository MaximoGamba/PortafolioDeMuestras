export default function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center md:text-left ${className}`}>
      <h2 className="mb-3 font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      <p className="text-base text-muted sm:text-lg">{subtitle}</p>
    </div>
  )
}
