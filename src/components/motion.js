/**
 * motion.js
 * Lightweight framer-motion-like API using CSS transitions + IntersectionObserver.
 * Supports: initial, animate, whileInView, exit, transition { duration, delay, repeat, ease }
 */
import { useState, useEffect, useRef } from 'react';

function toCss(state) {
  if (!state) return {};
  const css = {};

  if ('opacity' in state)
    css.opacity = Array.isArray(state.opacity)
      ? state.opacity[state.opacity.length - 1]
      : state.opacity;

  const tx = [];
  if ('x' in state)
    tx.push(`translateX(${Array.isArray(state.x) ? state.x[state.x.length - 1] : state.x}px)`);
  if ('y' in state)
    tx.push(`translateY(${Array.isArray(state.y) ? state.y[state.y.length - 1] : state.y}px)`);
  if ('scale' in state)
    tx.push(`scale(${Array.isArray(state.scale) ? state.scale[state.scale.length - 1] : state.scale})`);
  if ('rotate' in state)
    tx.push(`rotate(${Array.isArray(state.rotate) ? state.rotate[state.rotate.length - 1] : state.rotate}deg)`);
  if (tx.length) css.transform = tx.join(' ');

  return css;
}

function makeMotionTag(Tag) {
  return function MotionTag({
    initial,
    animate,
    whileInView,
    exit,
    viewport,
    transition,
    style,
    className,
    onClick,
    children,
    ...rest
  }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    const target = whileInView || animate;
    const usesViewport = !!whileInView;

    useEffect(() => {
      if (!usesViewport) { setInView(true); return; }
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
              if (viewport && viewport.once) obs.disconnect();
            } else if (!(viewport && viewport.once)) {
              setInView(false);
            }
          });
        },
        { threshold: (viewport && viewport.amount) || 0.2 }
      );
      obs.observe(ref.current);
      return () => obs.disconnect();
    }, [usesViewport]); // eslint-disable-line

    const baseCss   = toCss(initial);
    const targetCss = toCss(target);
    const dur   = (transition && transition.duration) || 0.6;
    const delay = (transition && transition.delay)    || 0;

    const isLooping = transition && transition.repeat === Infinity;
    let animStyle = {};

    if (isLooping && animate) {
      if ('rotate' in animate) {
        const deg = Array.isArray(animate.rotate) ? animate.rotate[1] : animate.rotate;
        animStyle.animation = `spin-${deg < 0 ? 'rev' : 'fwd'} ${transition.duration}s linear infinite`;
      } else if ('y' in animate && Array.isArray(animate.y)) {
        animStyle.animation = `float-y ${transition.duration}s ease-in-out infinite`;
        animStyle.animationDelay = `${delay}s`;
      } else if ('opacity' in animate && Array.isArray(animate.opacity)) {
        animStyle.animation = `fade-pulse ${transition.duration}s ease-in-out infinite`;
        animStyle.animationDelay = `${delay}s`;
      }
    }

    const combinedStyle = {
      ...style,
      ...(isLooping
        ? {}
        : {
            ...baseCss,
            ...(inView ? targetCss : baseCss),
            transition: `opacity ${dur}s cubic-bezier(.2,.8,.2,1) ${delay}s, transform ${dur}s cubic-bezier(.2,.8,.2,1) ${delay}s`,
          }),
      ...animStyle,
    };

    return (
      <Tag ref={ref} className={className} style={combinedStyle} onClick={onClick} {...rest}>
        {children}
      </Tag>
    );
  };
}

export const motion = {
  div: makeMotionTag('div'),
  p:   makeMotionTag('p'),
  h1:  makeMotionTag('h1'),
  h2:  makeMotionTag('h2'),
};

export function AnimatePresence({ children }) {
  return <>{children}</>;
}
