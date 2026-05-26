'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCursorStore } from '@/lib/cursor-store';

const socialLinks = [
  { label: 'Dribbble', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
];

const indexLinks = [
  { label: 'Index', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const setVariant = useCursorStore((s) => s.setVariant);

  return (
    <footer
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--line)',
      }}
    >
      {/* CTA section */}
      <div
        style={{
          padding: '8rem 2rem',
          maxWidth: 1400,
          margin: '0 auto',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <Link
          href="/contact"
          data-magnetic
          onMouseEnter={() => setVariant('hover')}
          onMouseLeave={() => setVariant('default')}
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 10vw, 12rem)',
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
            }}
          >
            Let&apos;s{' '}
            <em
              className="font-accent"
              style={{ fontStyle: 'italic', color: 'var(--accent)' }}
            >
              build
            </em>{' '}
            something real.
          </h2>
        </Link>
        <p
          className="font-mono-style"
          style={{ color: 'var(--dim)', fontSize: 13, marginTop: '2rem', letterSpacing: '0.06em' }}
        >
          nishansinghkaler786@gmail.com · Dubai, UAE (GMT+4) · +91 84375 96666
        </p>
      </div>

      {/* 4-col footer links */}
      <div
        style={{
          padding: '3rem 2rem',
          maxWidth: 1400,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
        }}
      >
        <div>
          <h3
            className="font-mono-style"
            style={{ fontSize: 10, color: 'var(--dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            Contact
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { label: 'nishansinghkaler786@gmail.com', href: 'mailto:nishansinghkaler786@gmail.com' },
              { label: '+91 84375 96666', href: 'tel:+918437596666' },
              { label: 'Dubai, UAE', href: '#' },
            ].map(({ label, href }) => (
              <li key={label} style={{ marginBottom: 8 }}>
                <a
                  href={href}
                  onMouseEnter={() => setVariant('hover')}
                  onMouseLeave={() => setVariant('default')}
                  style={{ color: 'var(--dim)', fontSize: 12, textDecoration: 'none', fontFamily: 'var(--font-inter-tight)' }}
                  className="hover:text-[var(--ink)] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="font-mono-style"
            style={{ fontSize: 10, color: 'var(--dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            Social
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {socialLinks.map(({ label, href }) => (
              <li key={label} style={{ marginBottom: 8 }}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setVariant('hover')}
                  onMouseLeave={() => setVariant('default')}
                  style={{ color: 'var(--dim)', fontSize: 12, textDecoration: 'none', fontFamily: 'var(--font-inter-tight)' }}
                  className="hover:text-[var(--ink)] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="font-mono-style"
            style={{ fontSize: 10, color: 'var(--dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            Index
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {indexLinks.map(({ label, href }) => (
              <li key={label} style={{ marginBottom: 8 }}>
                <Link
                  href={href}
                  onMouseEnter={() => setVariant('hover')}
                  onMouseLeave={() => setVariant('default')}
                  style={{ color: 'var(--dim)', fontSize: 12, textDecoration: 'none', fontFamily: 'var(--font-inter-tight)' }}
                  className="hover:text-[var(--ink)] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="font-mono-style"
            style={{ fontSize: 10, color: 'var(--dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}
          >
            Currently
          </h3>
          <p style={{ fontSize: 12, color: 'var(--dim)', lineHeight: 1.6, fontFamily: 'var(--font-inter-tight)' }}>
            Senior UX Designer at Mercer Talent Enterprise (Marsh McLennan). Open to senior and principal UX roles globally.
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div
        style={{
          padding: '1.5rem 2rem',
          maxWidth: 1400,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 24, height: 24, position: 'relative' }}>
            <Image
              src="/logo.png"
              alt="nishan space"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span
            className="font-mono-style"
            style={{ fontSize: 11, color: 'var(--faint)', letterSpacing: '0.06em' }}
          >
            © {new Date().getFullYear()} Nishan Singh
          </span>
        </div>
        <span
          className="font-mono-style"
          style={{ fontSize: 11, color: 'var(--faint)', letterSpacing: '0.06em' }}
        >
          v1.0 · Built in Next.js
        </span>
      </div>
    </footer>
  );
}
