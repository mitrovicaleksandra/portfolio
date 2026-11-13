
import { ArrowUpRight } from 'lucide-react';

export function Visual({ type }) {
  return (
    <div
      className={`card-visual ${type || 'visual-waves'}`}
      aria-hidden="true"
    >
      <span className="visual-glow" />
    </div>
  );
}

export default function CaseCard({
  item,
  onSelect,
  horizontal = false
}) {
  return (
    <button
      type="button"
      className={`case-card ${horizontal ? 'case-horizontal' : ''}`}
      onClick={() => onSelect(item)}
      aria-label={`Read case study: ${item.title}`}
    >
      <Visual type={item.image} />

      <div className="case-content">
        <h3>
          {item.title}
          <ArrowUpRight className="case-arrow" size={20} />
        </h3>

        <p>{item.short}</p>

        <div className="case-bottom">
          <strong>{item.value}</strong>
          <span>{item.result}</span>
        </div>
      </div>
    </button>
  );
}
