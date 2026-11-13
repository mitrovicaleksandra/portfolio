
import { useState } from 'react';

import {
  Target,
  Database,
  Workflow,
  BarChart3,
  Sparkles
} from 'lucide-react';

// Shared components
import PageHero from '../components/PageHero.jsx';
import CaseCard from '../components/CaseCard.jsx';
import CaseDialog from '../components/CaseDialog.jsx';
import Icon from '../components/Icon.jsx';

// Data
import {
  cases,
  categories,
  highlights
} from '../data.js';

export default function Impact() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === 'All'
      ? cases
      : cases.filter(item => item.category === filter);

  return (
    <>
      {/* PAGE HERO */}
      <PageHero
        eyebrow="IMPACT"
        title="Measurable Business Impact"
        subtitle={
          <em>
            Real-world examples of how strategic finance,
            commercial insight, and automation drive growth,
            efficiency, and value.
          </em>
        }
      />

      {/* IMPACT METRICS */}
      <section className="light-band impact-metrics">
        <div className="shell highlight-grid">
          {highlights.map(h => (
            <div className="highlight" key={h.label}>
              <Icon name={h.icon} size={32} />

              <div>
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="dark-section impact-catalog">
        <div className="shell">
          <div className="filter-head">
            <h2>Case Studies</h2>

            <div
              className="filter-list"
              role="group"
              aria-label="Filter case studies"
            >
              {categories.map(c => (
                <button
                  key={c}
                  aria-pressed={filter === c}
                  className={`filter-pill ${filter === c ? 'active' : ''}`}
                  onClick={() => setFilter(c)}
                >
                  {c === 'All' ? `All (${cases.length})` : c}
                </button>
              ))}
            </div>
          </div>

          <div className="case-grid">
            {filtered.map(c => (
              <CaseCard
                key={c.slug}
                item={c}
                onSelect={setSelected}
                horizontal
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p>No case studies in this category yet.</p>
          )}
        </div>
      </section>

      {/* END-TO-END IMPACT */}
      <section className="light-band process-summary">
        <div className="shell summary-grid">
          <div>
            <p className="eyebrow">THE BIGGER PICTURE</p>
            <h2>End-to-End Impact</h2>
          </div>

          {[
            ['Plan', 'Set goals and targets', Target],
            ['Model', 'Build driver-based scenarios', Database],
            ['Execute', 'Partner and allocate capital', Workflow],
            ['Measure', 'Track and quantify outcomes', BarChart3],
            ['Scale', 'Institutionalize what works', Sparkles]
          ].map(([title, detail, Component]) => (
            <div className="summary-step" key={title}>
              <Component size={31} strokeWidth={1.5} />
              <strong>{title}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY POP-UP */}
      <CaseDialog
        selected={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
