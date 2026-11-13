
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ navItems }) {
  return (
    <>
      <section className="contact-banner">
        <div className="shell banner-inner">
          <div>
            <p className="eyebrow gold">LET'S CONNECT</p>

            <h2>
              Better financial decisions start with
              better questions.
            </h2>

            <p>
              Strategic finance, financial modeling,
              and thoughtful automation — applied
              to real business challenges.
            </p>
          </div>

          <Link to="/contact" className="btn btn-gold">
            Get in Touch
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-main">
          <Link className="footer-brand" to="/">
            <span className="brand-monogram">AM</span>
            <span>Strategic Finance & FP&A</span>
          </Link>

          <div className="footer-links">
            {navItems.map(item => (
              <Link key={item.path} to={item.path}>
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        <div className="shell footer-bottom">
          <span>
            © {new Date().getFullYear()} AM.
            All rights reserved.
          </span>

          <span>
            Finance • Strategy • Technology
          </span>
        </div>
      </footer>
    </>
  );
}
