
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  Layers3,
  BarChart3,
  Workflow,
  Database,
  Sparkles,
  Zap
} from 'lucide-react';

// Shared components
import PageHero from '../components/PageHero.jsx';
import SectionLead from '../components/SectionLead.jsx';
import CaseCard from '../components/CaseCard.jsx';
import CaseDialog from '../components/CaseDialog.jsx';

// Data
import { profile, metrics, cases } from '../data.js';

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* HERO SECTION */}
      <PageHero
        eyebrow="STRATEGIC FINANCE & FP&A"
        title={
          <>
            Senior FP&A &amp; Strategic
            <br />
            Finance Professional
          </>
        }
        large
        subtitle={
          <>
            <em>Bridging Finance, Strategy &amp; Agentic AI</em>
            <span className="hero-description">
              {profile.intro}
            </span>
          </>
        }
        actions={
          <>
            <Link className="btn btn-gold" to="/impact">
              Explore My Work <ArrowRight size={18} />
            </Link>

            <Link className="btn btn-outline" to="/about">
              About Me
            </Link>
          </>
        }
      >
        <div className="hero-stats">
          {metrics.map((metric) => (
            <div className="hero-stat" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* EXPERTISE OVERVIEW */}
      <section className="light-band expertise-overview">
        <div className="shell overview-inner">
          <SectionLead
            eyebrow="EXPERTISE"
            title={
              <>
                Where Finance Creates
                <br />
                Business Value
              </>
            }
          />

          {[
            [
              'Strategic Finance & Planning',
              'AOP, long-range plan, resource allocation & investment analysis',
              Layers3
            ],
            [
              'FP&A & Performance',
              'Forecasting, variance analysis, master P&L & board reporting',
              BarChart3
            ],
            [
              'Agentic AI & Automation',
              'Finance agents, data workflows, reporting & productivity',
              Workflow
            ],
            [
              'Commercial & Growth',
              'Partner economics, payments, pricing, unit economics & M&A',
              Database
            ]
          ].map(([title, description, Icon]) => (
            <div className="overview-item" key={title}>
              <Icon size={30} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED IMPACT */}
      <section className="dark-section home-impact">
        <div className="shell home-impact-grid">
          <div className="impact-intro">
            <p className="eyebrow gold">IMPACT</p>
            <h2>Selected Results</h2>

            <p>
              Examples of how strategic finance, commercial insight,
              and data-driven analysis create growth and efficiency.
            </p>

            <Link className="text-link" to="/impact">
              View All Case Studies
              <ArrowRight size={18} />
            </Link>
          </div>

          {cases.slice(0, 3).map((item) => (
            <CaseCard
              key={item.slug}
              item={item}
              onSelect={setSelected}
            />
          ))}
        </div>
      </section>

      {/* AI & AUTOMATION */}
      <section className="light-band home-automation">
        <div className="shell automation-home-grid">
          <div>
            <p className="eyebrow">AI & AUTOMATION</p>

            <h2>Finance Workflows with Agentic AI</h2>

            <p>
              Exploring practical ways to combine reliable financial
              models with intelligent, repeatable finance workflows.
            </p>

            <Link
              className="text-link dark-link"
              to="/ai-automation"
            >
              Explore AI & Automation
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mini-process">
            {[
              ['Ingest', 'Actuals & forecasts', Database],
              ['Analyze', 'Variances & drivers', BarChart3],
              ['Generate', 'Insights & narratives', Sparkles],
              ['Act', 'Reports & next steps', Zap]
            ].map(([title, description, Icon], index) => (
              <React.Fragment key={title}>
                <div className="mini-step">
                  <Icon size={26} strokeWidth={1.5} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                {index < 3 && (
                  <ArrowRight className="mini-arrow" size={23} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* APPROACH PREVIEW */}
          <div className="approach-peek">
            <p className="eyebrow">APPROACH</p>

            <h2>From Analysis to Action</h2>

            <p>
              A business-partner approach that combines financial
              rigor, commercial context, and practical technology.
            </p>

            <Link className="text-link dark-link" to="/approach">
              My Approach
              <ArrowRight size={18} />
            </Link>
          </div>
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
