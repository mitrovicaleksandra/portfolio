
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data.js';

export default function Header({ navItems }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="nav-inner shell">

        {/* Logo and Name */}
        <Link
          className="brand"
          to="/"
          aria-label="Aleksandra Mitrović home"
        >
          <span className="brand-monogram">AM</span>
          <span className="brand-separator" />
          <span className="brand-name">
  Strategic Finance & FP&A
</span>
        </Link>

        {/* Navigation */}
        <nav
          className={`main-nav ${mobileOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
            >
              {item.text}
            </NavLink>
          ))}

          <Link className="mobile-contact" to="/contact">
            Contact <ArrowUpRight size={16} />
          </Link>
        </nav>

        {/* Contact Button */}
        <Link className="btn btn-gold header-contact" to="/contact">
          Contact <ArrowUpRight size={17} />
        </Link>

        {/* Mobile Menu */}
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(v => !v)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}
