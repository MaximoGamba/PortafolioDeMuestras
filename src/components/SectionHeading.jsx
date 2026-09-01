export default function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center md:text-left ${className}`}>
      <h2 className="mb-3 font-display text-3xl font-semibold text-white">{title}</h2>
      <p className="text-lg text-muted">{subtitle}</p>
    </div>
  )
}
