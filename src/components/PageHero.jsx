export default function PageHero({
  eyebrow,
  title,
  subtitle,
  large = false,
  actions,
  children
}) {
  return (
    <section className={`hero ${large ? 'hero-large' : ''}`}>
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-shadow" aria-hidden="true" />

      <div className="shell hero-inner">
        <div className="hero-copy">
          <p className="eyebrow gold">{eyebrow}</p>
          <h1>{title}</h1>

          {subtitle && (
            <p className="hero-subtitle">{subtitle}</p>
          )}

          {actions && (
            <div className="hero-actions">{actions}</div>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
