import { useState, useEffect, useRef } from 'react';
import {
  STATS, EXPERIENCE, PROJECTS, TECH_STACK,
  CERTIFICATES, LEARNING, CONTACT_INFO,
} from '../data';
import { useCountUp, useInView } from '../hooks';
import { motion, AnimatePresence } from './motion';
import './Sections.css';

/* ===== STATS ===== */
function StatItem({ stat }) {
  const ref    = useRef(null);
  const inView = useInView(ref);
  const val    = useCountUp(parseInt(stat.n), 1600, inView);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{val}<span className="accent-dot">{stat.suffix}</span></div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="stats-section">
      <div className="container-x">
        <motion.div
          className="stats-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {STATS.map((s, i) => <StatItem key={i} stat={s} />)}
        </motion.div>
      </div>
    </section>
  );
}

/* ===== ABOUT ===== */
export function About() {
  return (
    <section className="section" id="about">
      <div className="container-x">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">// 01 — about</div>
            <h2 className="section-title">
              Passionate about<br />building &amp; <span className="gold-text">solving</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="section-sub" style={{ marginBottom: '10px' }}>
              Results-driven Java Backend and Full-Stack Developer with hands-on experience in Spring Boot,
              REST APIs, Docker, and React.js. I enjoy turning complex problems into simple, intuitive,
              production-ready solutions.
            </p>
            <p className="section-sub">
              Currently completing my MCA at Galgotias University, with two internships behind me and a
              growing portfolio of backend-first projects built around clean architecture and real deployment
              practices.
            </p>
            <div className="feature-row">
              <div className="feature-card">
                <div className="feature-icon">🧩</div>
                <div>
                  <div className="feature-title">Clean Code</div>
                  <div className="feature-desc">Layered MVC architecture, separation of concerns, and maintainable Java/Spring patterns.</div>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚙️</div>
                <div>
                  <div className="feature-title">Problem Solver</div>
                  <div className="feature-desc">Strong DSA foundation applied to real systems — from concurrency to data pipelines.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ===== EXPERIENCE ===== */
export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">// 02 — experience</div>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-sub" style={{ marginBottom: '50px' }}>
            Hands-on roles building real backend systems and shipping production code.
          </p>
        </motion.div>

        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="tl-head">
                  <div>
                    <div className="tl-role">{exp.role}</div>
                    <div className="tl-company">{exp.company}</div>
                  </div>
                  <div className="tl-date">{exp.date}</div>
                </div>
                <div className="tl-points">
                  {exp.points.map((p, j) => <div className="tl-point" key={j}>{p}</div>)}
                </div>
                <div className="tl-stack">
                  {exp.stack.map((s) => <span className="stack-chip" key={s}>{s}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== PROJECTS ===== */
function ProjectCard({ p, index }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <div className="project-top">
        <span className="project-tag">{p.tag}</span>
        <div className="project-name">{p.name}</div>
        <p className="project-desc">{p.desc}</p>
        <div className="project-stack">
          {p.stack.map((s) => <span className="stack-chip" key={s}>{s}</span>)}
        </div>
      </div>
      <div className="project-actions">
        <a className="project-link" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        {p.demo && (
          <a className="project-link primary" href={p.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">// 03 — projects</div>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub" style={{ marginBottom: '50px' }}>
            A selection of backend-first and full-stack projects, from REST APIs to applied ML.
          </p>
        </motion.div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ===== TECH STACK ===== */
export function TechStack() {
  return (
    <section className="section" id="tech-stack">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">// 04 — stack</div>
          <h2 className="section-title">Tools of the trade</h2>
          <p className="section-sub" style={{ marginBottom: '50px' }}>
            The languages, frameworks, and tools I reach for most.
          </p>
        </motion.div>
        <div className="tech-grid">
          {TECH_STACK.map((t, i) => (
            <motion.div
              key={t.title}
              className="glass-card tech-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="tech-card-head">
                <div className="tech-card-icon">{t.icon}</div>
                <div className="tech-card-title">{t.title}</div>
              </div>
              <div className="tech-pill-row">
                {t.items.map((it) => <span className="tech-pill" key={it}>{it}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== CERTIFICATES ===== */
function CertModal({ cert, onClose }) {
  if (!cert) return null;
  return (
    <motion.div className="modal-overlay" onClick={onClose}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="modal-box" onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25 }}
      >
        <button className="modal-close" onClick={onClose}>✕</button>
        <div style={{ fontSize: '40px', marginBottom: '18px' }}>{cert.icon}</div>
        <h3 className="modal-title">{cert.name}</h3>
        <p className="modal-issuer">{cert.issuer}</p>
        <p className="modal-body">
          Certificate preview placeholder — connect an actual image or PDF asset to display the full
          credential here.
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Certificates() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="certificates">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">// 05 — certificates</div>
          <h2 className="section-title">Credentials</h2>
          <p className="section-sub" style={{ marginBottom: '50px' }}>Click any card to preview.</p>
        </motion.div>

        <div className="cert-grid">
          {CERTIFICATES.map((c, i) => (
            <motion.div
              key={c.name}
              className="glass-card cert-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setActive(c)}
            >
              <div className="cert-icon">{c.icon}</div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer-text">{c.issuer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <CertModal cert={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* ===== LEARNING ===== */
export function Learning() {
  return (
    <section className="section learning-section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">// 06 — currently learning</div>
          <h2 className="section-title learning-title">Sharpening the saw</h2>
        </motion.div>

        <motion.div
          className="learning-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {LEARNING.map((l) => (
            <div className="learning-chip" key={l}>
              <span className="learning-pulse" />
              {l}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ===== CONTACT ===== */
export function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast(true);
    setTimeout(() => setToast(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section" id="contact">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <div className="eyebrow" style={{ justifyContent: 'center' }}>// 07 — contact</div>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Open to full-time roles and internships. Reach out — I usually reply within a day.
          </p>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            {[
              { icon: '📱', label: 'Phone',    value: CONTACT_INFO.phone,    href: `tel:${CONTACT_INFO.phone}` },
              { icon: '✉️', label: 'Email',    value: CONTACT_INFO.email,    href: `mailto:${CONTACT_INFO.email}` },
              { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/contact-aditya-singh75', href: CONTACT_INFO.linkedin },
              { icon: '🐙', label: 'GitHub',   value: 'github.com/adityasingh75058',            href: CONTACT_INFO.github },
            ].map(({ icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" style={{ display: 'block' }}>
                <div className="contact-item">
                  <div className="contact-icon">{icon}</div>
                  <div>
                    <div className="contact-label">{label}</div>
                    <div className="contact-value">{value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {[
              { label: 'Name',  key: 'name',  type: 'text',  placeholder: 'Your name' },
              { label: 'Email', key: 'email', type: 'email', placeholder: 'you@example.com' },
            ].map(({ label, key, type, placeholder }) => (
              <div className="form-group" key={key}>
                <label className="form-label">{label}</label>
                <input
                  className="form-input"
                  type={type}
                  placeholder={placeholder}
                  required
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                />
              </div>
            ))}
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                placeholder="Tell me about the opportunity..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Message →
            </button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast-msg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            Message captured — connect this form to an email service (e.g. Formspree) to receive it.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ===== FOOTER ===== */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container-x">
        <p className="footer-text">
          Designed &amp; built by <span className="accent">Aditya Singh</span> · © 2026
        </p>
      </div>
    </footer>
  );
}

/* ===== SCROLL TO TOP ===== */
export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="scroll-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}
