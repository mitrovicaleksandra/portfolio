import {
  Mail,
  Linkedin,
  ExternalLink,
  Sparkles
} from 'lucide-react';

import PageHero from '../components/PageHero.jsx';
import { profile } from '../data.js';

export default function Contact() {
  const emailReady = Boolean(profile.contactEmail);
  return <>
    <PageHero eyebrow="CONTACT" title="Let's Connect" subtitle={<em>Let's explore how finance, data, and smart workflows can support the next business decision.</em>} />
    <section className="light-band contact-page"><div className="shell contact-page-grid"><div><p className="eyebrow">GET IN TOUCH</p><h2>Interested in working together?</h2><p>Reach out to discuss strategic finance, FP&A, commercial modeling, or practical applications of AI in finance.</p>
      <div className="contact-actions">
        {emailReady ? <a className="btn btn-dark" href={`mailto:${profile.contactEmail}`}><Mail size={18}/> Email Me</a> : <div className="setup-message"><Mail size={20}/><div><strong>Contact email not configured</strong><span>Add your preferred email in <code>src/data.js</code> before publishing.</span></div></div>}
        {profile.linkedinUrl && <a className="btn btn-outline-dark" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer"><Linkedin size={18}/> LinkedIn <ExternalLink size={14}/></a>}
      </div></div><div className="contact-aside"><span className="contact-aside-icon"><Sparkles size={38}/></span><h3>From financial data to confident decisions.</h3><p>Financial planning • Business cases • Investment decisions • Automation strategy</p></div></div></section>
  </>;
}