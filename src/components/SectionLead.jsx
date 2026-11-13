
export default function SectionLead({
  eyebrow,
  title,
  children,
  dark = false
}) {
  return (
    <div className={`section-lead ${dark ? 'dark-lead' : ''}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      {children && (
        <div className="lead-detail">{children}</div>
      )}
    </div>
  );
}
