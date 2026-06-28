import { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS } from '../data';

/* Active nav section based on scroll position */
export function useActiveSection() {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.toLowerCase().replace(/\s/g, '-'));

    const onScroll = () => {
      let current = 'Home';
      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = NAV_ITEMS[i];
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return active;
}

/* Count-up animation */
export function useCountUp(target, duration = 1500, start = false) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let raf;

    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setVal(target);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return val;
}

/* Intersection observer — fires once when element enters viewport */
export function useInView(ref, options = { threshold: 0.3 }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []); // eslint-disable-line

  return inView;
}

/* Scroll-triggered fade/slide wrapper */
export function useFadeIn(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2, ...options }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []); // eslint-disable-line

  return [ref, visible];
}
