import React, { useMemo } from 'react';
import './Background.css';

function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2.5 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 10 + 14,
      })),
    []
  );

  return (
    <div className="bg-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animation: `particle-drift ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-fixed">
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />
      <div className="bg-grid" />
      <ParticleField />
    </div>
  );
}
