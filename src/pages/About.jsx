import {
  CalendarCheck,
  Layers3,
  TrendingUp,
  Cpu
} from 'lucide-react';

import Icon from '../components/Icon.jsx';

export default function About() {
  return <>
    <section className="about-hero"><div className="shell about-hero-grid">
      <div className="portrait-placeholder"><div className="portrait-monogram">AM</div><span>Portrait placeholder — replace with your own image</span></div>
      <div className="about-intro"><p className="eyebrow gold">ABOUT ME</p><h1>Strategic Finance,<br/>Technology &amp; Impact</h1>
        <p className="about-statement">A finance professional with a passion for turning data, strategy, and AI into real business impact.</p>
        <p>I'm a Senior FP&A and Strategic Finance professional with 8+ years of experience in SaaS and technology. I combine financial rigor, commercial insight, and an interest in agentic AI and automation to improve decision-making, scale operations, and drive measurable growth.</p>
      </div>
      <div className="about-focus">{[['chart','FP&A & Strategic Finance'],['layers','AI & Automation in Finance'],['target','Commercial & Growth Strategy'],['users','Business Partner & Advisor']].map(([i,t])=><div key={t}><Icon name={i} size={28}/><span>{t}</span></div>)}</div>
    </div></section>
    <section className="light-band background"><div className="shell background-grid"><div><h2>My Background</h2><p>I've built my career at the intersection of finance, strategy, and technology, supporting executive teams on planning, performance, investments, and commercial decisions. I'm particularly interested in the next chapter of finance — where automation simplifies repetitive work and creates more time for high-value decision support.</p></div>
      <div className="about-glance"><p className="eyebrow">AT A GLANCE</p><div className="glance-grid">
        {[[CalendarCheck,'8+','Years in FP&A / Strategic Finance'],[Layers3,'$200M+','AOP & P&L ownership'],[TrendingUp,'First','Positive EBITDA milestone supported'],[Cpu,'AI & Automation','Exploring intelligent finance workflows']].map(([C,value,label])=><div key={label}><C size={30} strokeWidth={1.5}/><strong>{value}</strong><span>{label}</span></div>)}
      </div></div></div>
      <div className="shell skills-row"><h2>Core Expertise</h2><div className="skills-pills">{['Financial Planning & Analysis','Operating & Long-Range Planning','Commercial & Partner Economics','Payments & Monetization','Financial Modeling (3-Statement, DCF)','AI Agents & Workflow Automation','Business Cases & Investment Analysis','M&A & Strategic Projects'].map(t=><span key={t}>{t}</span>)}</div></div>
    </section>
    <section className="dark-section personal"><div className="shell personal-grid"><div><p className="eyebrow gold">LOCATION & WORK STYLE</p><h2>Global & Remote</h2><p>Experience working across Canada and Europe, with an international perspective and remote-first mindset.</p></div>
      <div><p className="eyebrow gold">BEYOND WORK</p><h2>What Drives Me</h2><p>Curiosity, continuous learning, building new things, and an active life that includes teaching, travel, and swimming.</p></div>
      <div className="personal-cards">{[['Teaching','✦'],['Travel','↗'],['Wellness','◌']].map(([t,s])=><div key={t}><span>{s}</span><strong>{t}</strong></div>)}</div>
    </div></section>
  </>;
}