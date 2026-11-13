
import { useEffect } from 'react';
import {
  Link,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

// Shared components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Pages
import Home from './pages/Home.jsx';
import Expertise from './pages/Expertise.jsx';
import Impact from './pages/Impact.jsx';
import Automation from './pages/Automation.jsx';
import Approach from './pages/Approach.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Navigation
const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Expertise', path: '/expertise' },
  { text: 'Impact', path: '/impact' },
  { text: 'AI & Automation', path: '/ai-automation' },
  { text: 'Approach', path: '/approach' },
  { text: 'About', path: '/about' },
];

// Scroll management
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() =>
        document
          .querySelector(location.hash)
          ?.scrollIntoView({ behavior: 'smooth' })
      );
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }
  }, [location.pathname, location.hash]);

  return null;
}

// 404 page
function NotFound() {
  return (
    <section className="not-found shell">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>This page doesn't exist.</p>

      <Link className="btn btn-gold" to="/">
        Back Home
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}

// Main application
export default function App() {
  return (
    <>
      <ScrollManager />

      <Header navItems={navItems} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/ai-automation" element={<Automation />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer navItems={navItems} />
    </>
  );
}
