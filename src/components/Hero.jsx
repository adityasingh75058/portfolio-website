import { useState, useEffect } from 'react';
import { HERO_ROLES, TECH_BADGES_HERO } from '../data';
import { motion } from './motion';
import './Hero.css';

function TypingRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText]       = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = HERO_ROLES[roleIdx];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1700);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 28);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % HERO_ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <div className="hero-role-row">
      <span>{text}</span>
      <span className="cursor" />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="orbit-ring r1" />
      <motion.div
        className="orbit-ring r2"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="orbit-ring r3"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="core-node"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <div className="core-hex" />
      </motion.div>
      <div className="core-label">{'</>'}</div>

      {TECH_BADGES_HERO.map((b, i) => (
        <div
          key={b.label}
          className="tech-badge"
          style={{
            position: 'absolute',
            ...b.style,
            opacity: 0,
            animation: `badge-in 0.6s cubic-bezier(.2,.8,.2,1) ${0.4 + i * 0.12}s forwards, float-y ${3.5 + i * 0.3}s ease-in-out ${1 + i * 0.2}s infinite`,
          }}
        >
          {b.label}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container-x hero-grid">
        <div>
          <motion.p
            className="hero-greet"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hey there! I'm 👋
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="gold-text">Aditya Singh</span>
          </motion.h1>

          <TypingRole />

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I build scalable backend systems and modern web applications with clean architecture
            and production-ready engineering practices.
          </motion.p>

          <motion.div
            className="hero-btn-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work →
            </button>
            <a className="btn btn-ghost" href="./Aditya_Singh_Resume.pdf" download>
              Download Resume
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/adityasingh75058"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </motion.div>

          <motion.div
            className="badge-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <span className="status-badge"><span className="status-dot" />MCA 2026</span>
            <span className="status-badge"><span className="status-dot live" />Open to Work</span>
            <span className="status-badge"><span className="status-dot" />Noida, India</span>
            <span className="status-badge"><span className="status-dot" />Open to Relocation</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
