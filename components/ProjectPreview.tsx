'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { mockupMap } from './MockupSVGs';

interface ProjectPreviewProps {
  activeSlug: string | null;
}

export default function ProjectPreview({ activeSlug }: ProjectPreviewProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<((v: number) => void) | null>(null);
  const yTo = useRef<((v: number) => void) | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    xTo.current = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'power3.out' });
    yTo.current = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      xTo.current?.(e.clientX + 24);
      yTo.current?.(e.clientY - 100);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    if (activeSlug) {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        pointerEvents: 'none',
      });
    } else {
      gsap.to(el, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        ease: 'power2.in',
      });
    }
  }, [activeSlug]);

  const MockupComponent = activeSlug ? mockupMap[activeSlug] : null;

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 320,
        height: 200,
        pointerEvents: 'none',
        zIndex: 800,
        borderRadius: 6,
        overflow: 'hidden',
        opacity: 0,
        scale: '0.9',
        border: '1px solid var(--line-strong)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
        transform: 'translate(0,0)',
      }}
    >
      {MockupComponent && <MockupComponent />}
    </div>
  );
}
