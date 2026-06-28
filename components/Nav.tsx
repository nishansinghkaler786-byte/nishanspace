'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const anbarRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);
  const [anbarHidden, setAnbarHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const anbarH = anbarRef.current?.offsetHeight ?? 36;
      const isStuck = y > 40;
      setStuck(isStuck);
      setAnbarHidden(isStuck);
      if (navRef.current) {
        navRef.current.style.setProperty('--nav-top', isStuck ? '14px' : `${anbarH + 14}px`);
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const close = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMobileOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [mobileOpen]);

  return (
    <>
      <div ref={anbarRef} className={`anbar${anbarHidden ? ' is-hidden' : ''}`}>
        Quality matters — open to collaboration, consulting &amp; speaking
      </div>

      <nav
        ref={navRef}
        className={`nv${stuck ? ' stuck' : ''}`}
        style={{ '--nav-top': '50px' } as React.CSSProperties}
      >
        <Link href="/" className="nv__logo" aria-label="nishan.space home">
          <Image src="/assets/wordmark-light.svg" alt="nishan.space" width={120} height={21} priority />
        </Link>

        <div className="nv__links">
          <Link href="/#work">Work</Link>
          <Link href="/#approach">Approach</Link>
          <Link href="/#reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="nv__right">
          <Link href="/contact" className="nv__cta">Let&apos;s build →</Link>
          <button
            className={`nv__burger${mobileOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        {mobileOpen && (
          <div className="nv__mobile open">
            {[
              { href: '/#work', n: '01', label: 'Work' },
              { href: '/#approach', n: '02', label: 'Approach' },
              { href: '/#reviews', n: '03', label: 'Reviews' },
              { href: '/contact', n: '04', label: 'Contact' },
            ].map(({ href, n, label }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)}>
                <span className="nvm__n">{n}</span>
                <span className="nvm__t">{label}</span>
                <span className="nvm__a">→</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
