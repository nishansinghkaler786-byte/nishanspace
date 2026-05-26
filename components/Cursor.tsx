'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useCursorStore } from '@/lib/cursor-store';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const variant = useCursorStore((s) => s.variant);
  const xTo = useRef<((v: number) => void) | null>(null);
  const yTo = useRef<((v: number) => void) | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || isCoarse) return;

    const dot = dotRef.current;
    if (!dot) return;

    xTo.current = gsap.quickTo(dot, 'x', { duration: 0.3, ease: 'power3.out' });
    yTo.current = gsap.quickTo(dot, 'y', { duration: 0.3, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      xTo.current?.(e.clientX);
      yTo.current?.(e.clientY);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    switch (variant) {
      case 'hover':
        gsap.to(dot, { width: 60, height: 60, opacity: 0.4, duration: 0.3, ease: 'power2.out' });
        break;
      case 'text':
        gsap.to(dot, { width: 2, height: 28, borderRadius: 1, opacity: 1, duration: 0.2 });
        break;
      case 'hidden':
        gsap.to(dot, { opacity: 0, duration: 0.2 });
        break;
      default:
        gsap.to(dot, { width: 10, height: 10, opacity: 1, borderRadius: '50%', duration: 0.3, ease: 'power2.out' });
    }
  }, [variant]);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: 'var(--accent)',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference',
      }}
    />
  );
}
