import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data';
import { useActiveSection } from '../hooks';
import { motion, AnimatePresence } from './motion';
import './Navbar.css';

function scrollTo(item) {
  const id = item.toLowerCase().replace(/\s/g, '-');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (item) => {
    setMobileOpen(false);
    scrollTo(item);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container-x nav-inner">
          <button className="nav-logo" onClick={() => scrollTo('Home')}>
            AS<span>.</span>dev
          </button>

          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                className={`nav-link${active === item ? ' active' : ''}`}
                onClick={() => handleNav(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="btn btn-primary btn-sm nav-cta" onClick={() => handleNav('Contact')}>
            Let's Talk
          </button>

          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_ITEMS.map((item) => (
              <button key={item} className="nav-link mobile-nav-link" onClick={() => handleNav(item)}>
                {item}
              </button>
            ))}
            <button
              className="btn btn-primary"
              style={{ marginTop: '8px' }}
              onClick={() => handleNav('Contact')}
            >
              Let's Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
