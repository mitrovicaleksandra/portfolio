import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowRight,
  Layers3,
  TrendingUp,
  Cpu,
  Zap,
  Database,
  Workflow,
  BarChart3,
  FileText,
  CalendarCheck
} from 'lucide-react';

import PageHero from '../components/PageHero.jsx';
import SectionLead from '../components/SectionLead.jsx';
import Icon from '../components/Icon.jsx';

import { agents } from '../data.js';

export default function Automation() {
  const [activeAgent, setActiveAgent] = useState(null);
  return <>
    <PageHero eyebrow="AI & AUTOMATION" title={<>Finance Workflows with<br/>Agentic AI</>}
      subtitle={<em>Practical applications of AI and automation to streamline FP&A, improve insight quality, and support faster decisions.</em>}
      actions={<><a className="btn btn-gold" href="#use-cases">See Use Cases <ArrowRight size={18}/></a><a className="btn btn-outline" href="#agents">Explore the Agents</a></>}>
      <div className="hero-benefits">
        {[[Layers3,'Automate Repetitive Work'],[TrendingUp,'Accelerate Analysis & Insights'],[Cpu,'Design AI Agents for FP&A'],[Zap,'Turn Data into Action']].map(([C,t])=><div key={t}><C size={27}/><span>{t}</span></div>)}
      </div>
    </PageHero>
    <section className="light-band focus"><div className="shell focus-grid"><SectionLead eyebrow="FOCUS AREAS" title={<>Where AI Creates<br/>Finance Leverage</>}/>
      {[
        ['Data & Reporting Automation','Prepare and validate data for recurring financial reporting.',Layers3],
        ['Forecasting & Scenario Analysis','Use AI to help frame assumptions, drivers, and scenarios.',BarChart3],
        ['FP&A Agents','Specialized instruction-driven agents for business analysis and CFO reporting.',Cpu],
        ['Productivity & Scale','Design repeatable workflows that save time and improve consistency.',Workflow],
      ].map(([title,text,C])=><div className="focus-item" key={title}><C size={31} strokeWidth={1.5}/><h3>{title}</h3><p>{text}</p></div>)}
    </div></section>
    <section className="dark-section ai-core" id="agents"><div className="shell ai-panels">
      <div className="ai-panel"><h2>Agentic Finance Workflow</h2><p>An illustrative end-to-end process connecting trusted financial data with specialized AI analysis.</p>
        <div className="workflow-steps">{[
          ['Ingest Actuals','NetSuite / CSV / SQL',Database],['Prepare & Model','Power Query / Python',Workflow],
          ['Analyze','Variance & scenarios',Cpu],['Generate Narrative','CFO-ready insights',FileText],['Review & Deliver','Excel / BI / Email',CalendarCheck],
        ].map(([title,subtitle,C],index)=><div key={title} className="workflow-step"><C size={28}/><strong>{title}</strong><span>{subtitle}</span>{index<4&&<ArrowRight className="workflow-arrow" size={17}/>}</div>)}
        </div><p className="note">Architecture concept — integrations and automated actions require development, credentials, validation, and approval controls.</p>
      </div>
      <div className="ai-panel"><div className="panel-head"><div><h2>FP&A Agent Library</h2><p>Examples of specialized agents for planning, analysis, and decision support.</p></div><span className="status-pill">Concepts</span></div>
        <div className="agent-grid">{agents.map(a=><button className={`agent-tile ${activeAgent?.name===a.name?'selected':''}`} key={a.name} onClick={()=>setActiveAgent(activeAgent?.name===a.name?null:a)} aria-pressed={activeAgent?.name===a.name}><Icon name={a.icon} size={25}/><span>{a.name}</span></button>)}</div>
        <div className="agent-description" aria-live="polite">{activeAgent ? <><strong>{activeAgent.name}</strong><p>{activeAgent.description}</p></> : <p>Select an agent to see what it could do.</p>}</div>
      </div>
    </div></section>
    <section className="light-band featured-ai" id="use-cases"><div className="shell featured-ai-grid">
      <div className="ai-feature-copy"><p className="eyebrow">FEATURED EXPERIENCE</p><h2>Financial Reporting Automation</h2><p>Applied SQL, BigQuery, and AI-assisted workflows to streamline recurring reporting, variance analysis, and KPI monitoring.</p><Link to="/impact" className="text-link dark-link">View Impact <ArrowRight size={17}/></Link></div>
      <div className="ai-feature-visual" aria-hidden="true"><BarChart3 size={75} strokeWidth={1}/></div>
      <div className="ai-outcomes"><p className="eyebrow">DOCUMENTED OUTCOME</p><div><strong>−30%</strong><span>Manual reporting effort</span></div><p>Agentic orchestration is a separate area of current exploration; this result is from earlier automation work.</p></div>
      <div className="ai-tools"><p className="eyebrow">TECHNOLOGY & TOOLS</p><div>{['Excel','Power Query','Python','SQL / BigQuery','Power BI','Claude','GPT','NetSuite','APIs & Automation'].map(t=><span key={t}>{t}</span>)}</div></div>
    </div></section>
  </>;
}