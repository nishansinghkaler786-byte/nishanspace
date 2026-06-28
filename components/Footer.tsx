'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function FooterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(245,243,239,0.35)';
        ctx.fill();

        for (const q of particles) {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(245,243,239,${0.04 * (1 - d / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="ft__net"
      aria-hidden="true"
    />
  );
}

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__row">
        {/* Brand */}
        <div className="ft__logo">
          <Image src="/assets/wordmark-light.svg" alt="nishan.space" width={110} height={24} />
          <p>Currently leading UX at Mercer Talent Enterprise. Open to collaboration, consulting, and speaking.</p>
          <span className="ft__copy">© 2026 nishanspace · Quality matters.</span>
        </div>

        {/* Link columns */}
        <div className="ft__links">
          <div className="ft__col">
            <h4>Explore</h4>
            <Link href="/#work">Work</Link>
            <Link href="/#approach">Approach</Link>
            <Link href="/#reviews">Reviews</Link>
            <a href="https://www.linkedin.com/in/ux-specialist-nishan/" target="_blank" rel="noopener noreferrer">UX Profile ↗</a>
          </div>
          <div className="ft__col">
            <h4>Social</h4>
            <a href="https://dribbble.com/nishan_UX_Design" target="_blank" rel="noopener noreferrer">Dribbble</a>
            <a href="https://www.behance.net/nishansing21ef" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://www.linkedin.com/in/ux-specialist-nishan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/nishanspace.coom?igsh=MWI1eWx5c29iZXdtcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="ft__col">
            <h4>Status</h4>
            <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>Dubai, UAE (Remote)</span>
            <span style={{ fontSize: 14, color: 'var(--ink-soft)', display: 'block', marginTop: 8 }}>GMT+4</span>
            <span style={{ fontSize: 14, color: 'var(--ink-soft)', display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3ddc84', boxShadow: '0 0 8px rgba(61,220,132,.55)', display: 'inline-block' }} />
              Available
            </span>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="ft__giant">
        <FooterCanvas />
        <div className="ft__word">
          <svg viewBox="0 0 1180 230" preserveAspectRatio="xMidYMid meet" role="img" aria-label="nishanspace" style={{ width: '100%', height: 'auto' }}>
            <defs>
              <linearGradient id="ftg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#9a9384" />
                <stop offset="1" stopColor="#403b32" />
              </linearGradient>
            </defs>
            <image href="/assets/icon.svg" x="6" y="34" width="160" height="160" style={{ filter: 'grayscale(1) brightness(.5) sepia(.35)', opacity: 0.92 }} />
            <text x="196" y="172" fontFamily="Geist, sans-serif" fontWeight="600" fontSize="210" letterSpacing="-6" fill="url(#ftg)">nishanspace</text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
