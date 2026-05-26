'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import type { CaseStudy } from '@/lib/cases';
import { useCursorStore } from '@/lib/cursor-store';

interface ProjectRowProps {
  caseStudy: CaseStudy;
  onHoverStart: (slug: string) => void;
  onHoverEnd: () => void;
}

export default function ProjectRow({ caseStudy, onHoverStart, onHoverEnd }: ProjectRowProps) {
  const rowRef = useRef<HTMLAnchorElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const setVariant = useCursorStore((s) => s.setVariant);

  const handleEnter = () => {
    const row = rowRef.current;
    const title = titleRef.current;
    const arrow = arrowRef.current;
    if (!row || !title || !arrow) return;

    gsap.to(row, {
      backgroundColor: 'rgba(79, 79, 232, 0.06)',
      paddingTop: 28,
      paddingBottom: 28,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(title, {
      x: 20,
      color: 'var(--accent)',
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(arrow, {
      rotation: -30,
      x: -6,
      color: 'var(--accent)',
      duration: 0.4,
      ease: 'power2.out',
    });

    setVariant('hover');
    onHoverStart(caseStudy.slug);
  };

  const handleLeave = () => {
    const row = rowRef.current;
    const title = titleRef.current;
    const arrow = arrowRef.current;
    if (!row || !title || !arrow) return;

    gsap.to(row, {
      backgroundColor: 'transparent',
      paddingTop: 20,
      paddingBottom: 20,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(title, {
      x: 0,
      color: 'var(--ink)',
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(arrow, {
      rotation: 0,
      x: 0,
      color: 'var(--dim)',
      duration: 0.4,
      ease: 'power2.out',
    });

    setVariant('default');
    onHoverEnd();
  };

  return (
    <Link
      ref={rowRef}
      href={`/case-studies/${caseStudy.slug}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        display: 'grid',
        gridTemplateColumns: '3rem 1fr auto auto auto 2.5rem',
        alignItems: 'center',
        gap: '0 1.5rem',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: '2rem',
        paddingRight: '2rem',
        borderBottom: '1px solid var(--line)',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        transition: 'none',
      }}
      className="project-row-link"
    >
      {/* Number */}
      <span
        className="font-mono-style"
        style={{ fontSize: 12, color: 'var(--faint)', letterSpacing: '0.06em' }}
      >
        {caseStudy.number}
      </span>

      {/* Title + subtitle */}
      <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span
          ref={titleRef}
          className="font-display"
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 2.25rem)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            color: 'var(--ink)',
            lineHeight: 1.1,
            display: 'inline-block',
          }}
        >
          {caseStudy.title}
        </span>
        <span
          style={{
            fontSize: 12,
            color: 'var(--dim)',
            fontFamily: 'var(--font-inter-tight)',
          }}
        >
          {caseStudy.subtitle} · {caseStudy.client.split(' (')[0]}
        </span>
      </span>

      {/* Tag */}
      <span
        className="font-mono-style hidden md:block"
        style={{
          fontSize: 11,
          color: 'var(--dim)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {caseStudy.tag}
      </span>

      {/* Industry */}
      <span
        className="font-mono-style hidden lg:block"
        style={{ fontSize: 11, color: 'var(--faint)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}
      >
        {caseStudy.industry}
      </span>

      {/* Year */}
      <span
        className="font-mono-style hidden sm:block"
        style={{ fontSize: 11, color: 'var(--dim)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}
      >
        {caseStudy.year}
      </span>

      {/* Arrow */}
      <span
        ref={arrowRef}
        style={{
          fontSize: 20,
          color: 'var(--dim)',
          display: 'inline-block',
          textAlign: 'right',
          lineHeight: 1,
        }}
      >
        ↗
      </span>
    </Link>
  );
}
