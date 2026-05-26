'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const ITEMS = ['NISHAN', 'space', 'UX', 'DESIGN', '2026'];

export default function WordmarkBand() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const totalWidth = track.scrollWidth / 2;

    gsap.to(track, {
      x: -totalWidth,
      duration: 18,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });
  }, []);

  const items = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden="true"
      style={{
        background: 'var(--accent)',
        overflow: 'hidden',
        padding: '1.25rem 0',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div ref={trackRef} className="marquee-inner" style={{ display: 'flex', gap: 0 }}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              paddingRight: 48,
              flexShrink: 0,
            }}
          >
            <span
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {item === 'space' ? (
                <em className="font-accent" style={{ fontStyle: 'italic' }}>
                  space
                </em>
              ) : (
                item
              )}
            </span>
            <span
              className="font-accent"
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                marginLeft: 24,
                fontStyle: 'italic',
              }}
            >
              *
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
