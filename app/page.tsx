'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import WordmarkBand from '@/components/WordmarkBand';
import SectionHeader from '@/components/SectionHeader';
import ProjectRow from '@/components/ProjectRow';
import ProjectPreview from '@/components/ProjectPreview';
import { cases } from '@/lib/cases';

gsap.registerPlugin(ScrollTrigger, SplitText);

const DATA_BLOCK = [
  { label: 'Who', value: 'Nishan Singh' },
  { label: 'What', value: 'Senior UX Designer' },
  { label: 'Where', value: 'Dubai, UAE (GMT+4)' },
  { label: 'When', value: 'Available now' },
  { label: 'How', value: 'Research-driven, metrics-obsessed' },
];

const STATEMENTS = [
  { text: 'Asking questions', accent: 'is the work.' },
  { text: 'Reliability comes from consistency.', accent: 'Consistency comes from clarity.' },
  { text: "Pretty doesn't ship.", accent: 'Measurable does.' },
  { text: 'Anything that survives a tired user', accent: 'survives everything.' },
];

const STATS = [
  { value: 13, suffix: '+', label: 'Years designing enterprise software' },
  { value: 500, suffix: '+', label: 'Global organizations served' },
  { value: 2, prefix: '$', suffix: 'B+', label: 'Annual hiring decisions influenced' },
  { value: 100, suffix: 'K+', label: 'Daily active users' },
];

const INDUSTRIES = [
  {
    num: '01',
    title: 'Enterprise SaaS',
    italic: '& Psychometric Assessment',
    desc: 'Designing platforms that scale across 50+ countries with white-label fidelity and sub-1-week implementation.',
  },
  {
    num: '02',
    title: 'Healthcare',
    italic: 'EMR / EHR',
    desc: 'High-stakes clinical documentation where errors have patient-safety consequences. 200+ practices deployed.',
  },
  {
    num: '03',
    title: 'Blockchain',
    italic: '/ Web3',
    desc: 'Pioneered Web3 UX patterns before they existed. 91% reduction in transaction errors across enterprise wallets.',
  },
  {
    num: '04',
    title: 'AI/ML',
    italic: 'Interfaces',
    desc: 'Making model outputs legible to the clinicians and operators who must trust—and be accountable for—them.',
  },
];

export default function HomePage() {
  const heroTitleRef = useRef<HTMLDivElement>(null);
  const dataBlockRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const statementsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const statCounters = useRef<{ el: HTMLSpanElement | null; target: number; prefix?: string; suffix: string }[]>([]);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Hero title animation
  useEffect(() => {
    const container = heroTitleRef.current;
    const dataBlock = dataBlockRef.current;
    const tagline = taglineRef.current;
    if (!container || prefersReduced.current) return;

    const lines = container.querySelectorAll('.hero-line');
    const splits: SplitText[] = [];

    lines.forEach((line) => {
      const split = new SplitText(line as HTMLElement, { type: 'chars' });
      splits.push(split);
      gsap.set(split.chars, { y: '110%', opacity: 0 });
    });

    const tl = gsap.timeline({ delay: 0.2 });

    lines.forEach((line, i) => {
      const split = splits[i];
      tl.to(
        split.chars,
        {
          y: '0%',
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.03,
        },
        i * 0.15
      );
    });

    if (dataBlock) {
      gsap.set(dataBlock, { opacity: 0, y: 16 });
      tl.to(dataBlock, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.3');
    }

    if (tagline) {
      gsap.set(tagline, { opacity: 0, y: 12 });
      tl.to(tagline, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5');
    }

    return () => {
      splits.forEach((s) => s.revert());
      tl.kill();
    };
  }, []);

  // Statement scroll animations
  useEffect(() => {
    const container = statementsRef.current;
    if (!container || prefersReduced.current) return;

    const stmts = container.querySelectorAll('.statement-item');

    stmts.forEach((stmt) => {
      gsap.set(stmt, { opacity: 0, y: 40 });

      ScrollTrigger.create({
        trigger: stmt,
        start: 'top 75%',
        end: 'bottom 25%',
        onEnter: () => gsap.to(stmt, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }),
        onLeave: () => gsap.to(stmt, { opacity: 0, y: -40, duration: 0.6, ease: 'power3.in' }),
        onEnterBack: () => gsap.to(stmt, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }),
        onLeaveBack: () => gsap.to(stmt, { opacity: 0, y: 40, duration: 0.6, ease: 'power3.in' }),
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // Stats count-up
  useEffect(() => {
    const container = statsRef.current;
    if (!container || prefersReduced.current) return;

    ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        statCounters.current.forEach(({ el, target, prefix = '', suffix }) => {
          if (!el) return;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = prefix + Math.round(obj.val).toLocaleString() + suffix;
            },
          });
        });
      },
    });
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: '5rem',
          overflow: 'hidden',
        }}
      >
        {/* Data block — top right */}
        <div
          ref={dataBlockRef}
          style={{
            position: 'absolute',
            top: '6rem',
            right: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            textAlign: 'right',
          }}
        >
          {DATA_BLOCK.map(({ label, value }) => (
            <div key={label} className="font-mono-style" style={{ fontSize: 11, lineHeight: 1.5 }}>
              <span style={{ color: 'var(--faint)', letterSpacing: '0.1em', marginRight: 8 }}>
                {label}:
              </span>
              <span style={{ color: 'var(--dim)' }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Massive title */}
        <div
          ref={heroTitleRef}
          style={{ padding: '0 2rem', marginBottom: '2.5rem' }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
            }}
          >
            <div
              className="hero-line"
              style={{
                display: 'block',
                fontSize: 'clamp(4rem, 11vw, 13rem)',
                overflow: 'hidden',
                color: 'var(--ink)',
              }}
            >
              Design
            </div>
            <div
              className="hero-line"
              style={{
                display: 'block',
                fontSize: 'clamp(4rem, 11vw, 13rem)',
                paddingLeft: '14vw',
                overflow: 'hidden',
                color: 'var(--ink)',
              }}
            >
              for systems
            </div>
            <div
              className="hero-line"
              style={{
                display: 'block',
                fontSize: 'clamp(4rem, 11vw, 13rem)',
                paddingLeft: '28vw',
                overflow: 'hidden',
                color: 'var(--ink)',
              }}
            >
              that{' '}
              <em
                className="font-accent"
                style={{ fontStyle: 'italic', color: 'var(--accent)' }}
              >
                matter.
              </em>
            </div>
          </h1>
        </div>

        {/* Tagline + scroll hint */}
        <div
          style={{
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            gap: '2rem',
          }}
        >
          <p
            ref={taglineRef}
            style={{
              maxWidth: 480,
              textAlign: 'right',
              fontFamily: 'var(--font-inter-tight)',
              fontSize: 14,
              lineHeight: 1.75,
              color: 'var(--dim)',
              margin: 0,
            }}
          >
            Senior UX Designer with 13 years designing enterprise products at scale.
            Specialized in psychometric platforms, healthcare EMR, and blockchain.
            Track record of 60–80% improvements in task completion and 40–70% reduction
            in support costs.
          </p>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            className="font-mono-style"
            style={{ fontSize: 11, color: 'var(--faint)', letterSpacing: '0.1em' }}
          >
            ↓ scroll · selected work
          </span>
          <span
            className="font-mono-style"
            style={{ fontSize: 11, color: 'var(--faint)', letterSpacing: '0.1em' }}
          >
            2019 — Present
          </span>
        </div>

        {/* Horizontal rule */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background: 'var(--line)',
          }}
        />
      </section>

      {/* ── WORDMARK BAND ────────────────────────────────────── */}
      <WordmarkBand />

      {/* ── SELECTED WORK ────────────────────────────────────── */}
      <section
        style={{ padding: '6rem 0', borderBottom: '1px solid var(--line)' }}
      >
        <div style={{ padding: '0 2rem', marginBottom: '3rem' }}>
          <SectionHeader
            chapter="01"
            label="Work"
            title="Selected"
            italicTitle="case studies."
            meta="Six of twenty-four"
          />
        </div>

        {/* First row border top */}
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {cases.map((c) => (
            <ProjectRow
              key={c.slug}
              caseStudy={c}
              onHoverStart={(slug) => setActivePreview(slug)}
              onHoverEnd={() => setActivePreview(null)}
            />
          ))}
        </div>

        <ProjectPreview activeSlug={activePreview} />
      </section>

      {/* ── STATEMENT SCROLL ─────────────────────────────────── */}
      <section ref={statementsRef} style={{ background: 'var(--bg)' }}>
        {STATEMENTS.map((s, i) => (
          <div
            key={i}
            className="statement-item"
            style={{
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4rem 2rem',
              borderBottom: i < STATEMENTS.length - 1 ? '1px solid var(--line)' : 'none',
            }}
          >
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 5.5vw, 6rem)',
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                color: 'var(--ink)',
                maxWidth: '18ch',
                textAlign: 'center',
                margin: 0,
              }}
            >
              {s.text}{' '}
              <em
                className="font-accent"
                style={{ fontStyle: 'italic', color: 'var(--accent)' }}
              >
                {s.accent}
              </em>
            </p>
          </div>
        ))}
      </section>

      {/* ── CREDIBILITY STRIP ────────────────────────────────── */}
      <section
        ref={statsRef}
        style={{
          padding: '6rem 2rem',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          background: 'var(--surface)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            maxWidth: 1400,
            margin: '0 auto',
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '0 2rem',
                borderLeft: i > 0 ? '1px solid var(--line)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: 'var(--ink)',
                }}
              >
                <span
                  ref={(el) => {
                    statCounters.current[i] = {
                      el,
                      target: stat.value,
                      prefix: stat.prefix,
                      suffix: stat.suffix,
                    };
                  }}
                  style={{ color: 'var(--accent)' }}
                >
                  {stat.prefix ?? ''}{0}{stat.suffix}
                </span>
              </div>
              <p
                className="font-mono-style"
                style={{ fontSize: 11, color: 'var(--dim)', letterSpacing: '0.06em', margin: 0, lineHeight: 1.5 }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES GRID ──────────────────────────────────── */}
      <section
        style={{
          padding: '6rem 2rem',
          borderBottom: '1px solid var(--line)',
          maxWidth: 1400,
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ marginBottom: '3rem' }}>
          <SectionHeader
            chapter="02"
            label="Industries"
            title="Where I've"
            italicTitle="shipped."
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
          }}
        >
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.num}
              style={{
                padding: '2rem',
                borderLeft: i > 0 ? '1px solid var(--line)' : 'none',
                borderTop: '1px solid var(--line)',
              }}
            >
              <div
                className="font-mono-style"
                style={{ fontSize: 10, color: 'var(--faint)', letterSpacing: '0.12em', marginBottom: 12 }}
              >
                {ind.num}
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  margin: '0 0 4px',
                }}
              >
                {ind.title}
              </h3>
              <em
                className="font-accent"
                style={{ fontStyle: 'italic', color: 'var(--accent)', fontSize: 'clamp(0.9rem, 1.4vw, 1.2rem)', display: 'block', marginBottom: 12 }}
              >
                {ind.italic}
              </em>
              <p
                style={{
                  fontSize: 13,
                  color: 'var(--dim)',
                  lineHeight: 1.65,
                  margin: 0,
                  fontFamily: 'var(--font-inter-tight)',
                }}
              >
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── AWARDS STRIP ─────────────────────────────────────── */}
      <section
        style={{
          padding: '2rem',
          borderBottom: '1px solid var(--line)',
          borderTop: '1px solid var(--line)',
          background: 'var(--surface)',
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            className="font-mono-style"
            style={{ fontSize: 10, color: 'var(--faint)', letterSpacing: '0.12em', textTransform: 'uppercase', flexShrink: 0 }}
          >
            Awards
          </span>
          <div
            className="font-mono-style"
            style={{ fontSize: 12, color: 'var(--dim)', letterSpacing: '0.05em', lineHeight: 1.8 }}
          >
            2023 — Mercer Excellence Award for Design Innovation
            <span style={{ margin: '0 1rem', color: 'var(--faint)' }}>·</span>
            2022 — Top 50 UX Designers in UAE · Design Council Middle East
            <span style={{ margin: '0 1rem', color: 'var(--faint)' }}>·</span>
            2018 — Healthcare Design Excellence Award · smartData Enterprises
          </div>
        </div>
      </section>
    </>
  );
}
