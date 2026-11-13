import { Link } from 'react-router-dom';

import {
  ArrowRight,
  Database,
  Layers3,
  Sparkles,
  Workflow,
  BarChart3,
  Target,
  Zap,
  Compass,
  TrendingUp,
  UsersRound
} from 'lucide-react';

import PageHero from '../components/PageHero.jsx';
import SectionLead from '../components/SectionLead.jsx';

export default function Approach() {
  return <>
    <PageHero eyebrow="APPROACH" title="My Approach" subtitle={<em>A structured, business-partner approach that combines financial rigor, commercial insight, and thoughtful automation to drive measurable results.</em>}
      actions={<><a href="#process" className="btn btn-gold">See the Process <ArrowRight size={18}/></a><Link to="/impact" className="btn btn-outline">Case Studies</Link></>}/>
    <section className="light-band approach-process" id="process"><div className="shell">
      <SectionLead eyebrow="THE FRAMEWORK" title={<>From Complexity<br/>to Action</>}>A repeatable approach to addressing strategic finance and operational challenges, from data to business impact.</SectionLead>
      <div className="approach-steps">{[
        ['Understand','Align on business goals, context, and the critical questions.',Database],
        ['Build','Integrate data, develop driver-based models, and define scenarios.',Layers3],
        ['Analyze','Quantify drivers, evaluate options, and uncover meaningful insight.',Sparkles],
        ['Recommend','Translate analysis into focused, actionable recommendations.',Workflow],
        ['Execute & Measure','Support implementation, track results, and adapt.',BarChart3],
      ].map(([title,subtitle,C],index)=><div className="approach-step" key={title}><span className="step-number">{index+1}</span><C size={39} strokeWidth={1.45}/><h3>{title}</h3><p>{subtitle}</p></div>)}
      </div>
    </div></section>
    <section className="dark-section principles"><div className="shell principles-grid"><SectionLead eyebrow="KEY PRINCIPLES" title={<>How I Create<br/>Lasting Impact</>}/>
      {[[Target,'Business Partnership','Collaborative, commercially aware, and solutions-oriented.'],[Layers3,'Data-Driven Rigor','Analytics and modeling built for informed decisions.'],[Zap,'Automation & Leverage','Purposeful automation to increase speed and consistency.'],[Compass,'Measurable Outcomes','Focus on financial impact and lasting value creation.']].map(([C,t,d])=><div className="principle" key={t}><C size={34} strokeWidth={1.5}/><h3>{t}</h3><p>{d}</p></div>)}
    </div></section>
    <section className="light-band outcomes"><div className="shell outcomes-grid"><SectionLead eyebrow="THE OUTCOME" title={<>Decisions That<br/>Drive Growth</>}/>
      {[[BarChart3,'Higher Profitability','Payments margin and monetization improvements'],[Layers3,'Greater Efficiency','Reduced manual finance reporting'],[TrendingUp,'Informed Investment','Revenue risk identification and portfolio decisions'],[UsersRound,'Impact at Scale','Enterprise planning and executive decision support']].map(([C,t,d])=><div className="outcome" key={t}><C size={36} strokeWidth={1.5}/><h3>{t}</h3><p>{d}</p></div>)}
    </div></section>
  </>;
}