
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Zap,
  Layers3,
  UsersRound
} from 'lucide-react';

// Components
import PageHero from '../components/PageHero.jsx';
import SectionLead from '../components/SectionLead.jsx';
import { Visual } from '../components/CaseCard.jsx';
import Icon from '../components/Icon.jsx';

// Data
import { expertise } from '../data.js';


export default function Expertise() {
  return <>
    <PageHero eyebrow="EXPERTISE" title="Strategic Finance & FP&A" subtitle={<em>Financial strategy, analytical rigor, and intelligent automation to drive growth, efficiency, and long-term value.</em>} />
    <section className="light-band pillars"><div className="shell pillar-grid">
      {[
        ['Plan','Build financial plans that align resources with strategy.','chart'],
        ['Analyze','Turn financial and operational data into actionable insights.','layers'],
        ['Automate','Design AI-enabled workflows that scale FP&A.','gear'],
        ['Optimize','Improve unit economics, profitability, and capital efficiency.','target'],
        ['Drive Impact','Support investment, partnerships, and M&A decisions.','trending'],
      ].map(([title,detail,icon]) => <div className="pillar" key={title}><Icon name={icon} size={32}/><h3>{title}</h3><p>{detail}</p></div>)}
    </div></section>
    <section className="dark-section expertise-cards"><div className="shell four-cards">
      {expertise.map(e => <article className="expertise-card" key={e.title}><Visual type={e.image} /><div className="expertise-card-inner"><span className="expertise-icon"><Icon name={e.icon}/></span><h2>{e.title}</h2>
        {e.items ? <ul>{e.items.map(item=><li key={item}>{item}</li>)}</ul> : <div className="tech-tags">{e.tags.map(t=><span key={t}>{t}</span>)}</div>}
        <Link className="text-link" to={e.title.includes('AI') ? '/ai-automation' : e.title.includes('Tools') ? '/about' : '/impact'}>View Examples <ArrowRight size={17}/></Link>
      </div></article>)}
    </div></section>
    <section className="light-band differentiate"><div className="shell differentiate-grid">
      <SectionLead eyebrow="WHAT SETS ME APART" title={<>A Finance Partner for<br/>a More Automated Future</>} />
      {[
        ['End-to-End Ownership','From data and models to insights and executive decisions.',Target],
        ['Business Impact','Focus on measurable financial outcomes and decisions.',Zap],
        ['Finance × Technology','Combining FP&A depth with automation and emerging AI workflows.',Layers3],
        ['Strategic Partnership','Working across Product, GTM, R&D, and Operations.',UsersRound],
      ].map(([title,description,C]) => <div key={title} className="differentiator"><C size={33} strokeWidth={1.5}/><h3>{title}</h3><p>{description}</p></div>)}
    </div></section>
  </>;
}