'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useCursorStore } from '@/lib/cursor-store';

const links = [
  { href: '/', label: 'Index' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const setVariant = useCursorStore((s) => s.setVariant);

  return (
    <>
      <a href="#main-content" className="skip-link font-mono-style">
        Skip to content
      </a>

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          padding: '0 2rem',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--line)',
          backdropFilter: 'blur(12px)',
          background: 'rgba(10, 10, 15, 0.8)',
        }}
      >
        {/* Left — logo + wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 no-underline"
          onMouseEnter={() => setVariant('hover')}
          onMouseLeave={() => setVariant('default')}
          aria-label="Nishan Space — Home"
        >
          <div style={{ width: 32, height: 32, position: 'relative', flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="nishan space logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span
            className="font-display"
            style={{ fontSize: 18, fontWeight: 400, letterSpacing: '-0.02em', color: 'var(--ink)' }}
          >
            nishan
            <em
              className="font-accent"
              style={{
                fontStyle: 'italic',
                color: 'var(--accent)',
                marginLeft: 1,
              }}
            >
              space
            </em>
          </span>
        </Link>

        {/* Center — availability */}
        <div
          className="font-mono-style hidden md:block"
          style={{ fontSize: 11, color: 'var(--dim)', letterSpacing: '0.08em' }}
        >
          <span style={{ color: '#22c55e', marginRight: 6 }}>●</span>
          Available for senior roles
        </div>

        {/* Right — nav links + toggle */}
        <nav aria-label="Primary navigation" className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onMouseEnter={() => setVariant('hover')}
                onMouseLeave={() => setVariant('default')}
                style={{
                  fontFamily: 'var(--font-inter-tight)',
                  fontSize: 13,
                  fontWeight: active ? 500 : 400,
                  color: active ? 'var(--ink)' : 'var(--dim)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.02em',
                }}
                className="hidden sm:block hover:text-[var(--ink)] transition-colors"
              >
                {label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </header>
    </>
  );
}
