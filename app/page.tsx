'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cases } from '@/lib/cases';

/* ─── AI session steps ─────────────────────────────── */
const AI_STEPS = [
  'Capture requirements',
  'Interview real users',
  'Wireframe the flows',
  'Design the system',
  'Prototype the flow',
  'Test with users',
  'Ship & hand off',
];

const PROC_CAPS = [
  'Capturing requirements',
  'Live user interview',
  'Low-fi wireframes',
  'Hi-fi visual design',
  'Prototype the flow',
  'Usability testing',
  'Ship & hand off',
];

/* ─── Reviews data ─────────────────────────────────── */
const REVIEWS = [
  {
    q: `"Who works with Nishan does not obtain only a good UX expert, but a really good partner for elevated results."`,
    name: 'Sabby Singh',
    role: 'Enterprise Web3 solutions',
  },
  {
    q: `"With very little direction other than showing a few examples and what I liked, Nishan turned those into an actual product."`,
    name: 'Patrick Spielmann',
    role: 'Founder, LeadMagic.io',
  },
  {
    q: `"The level of detail he puts in his work is astonishing and his work stands out from the rest of the team. A passionate, positive, humble, hard-working team player."`,
    name: 'Harpreet Singh Sidhu',
    role: 'Product Designer · Microsoft',
  },
  {
    q: `"He delivers peace of mind to clients and supervisors alike. Over the years and through a wide range of projects, Nishan has met every challenge face on."`,
    name: 'Gunjit Singh',
    role: 'Business Analyst & PM',
  },
  {
    q: `"Every time you can find some new and some creativity in his work — this is what makes him different from others."`,
    name: 'Swati Rana',
    role: 'Immersive tech · AR/VR/XR',
  },
  {
    q: `"Expert in creating stunning UI designs. Very good at giving suggestions to improve the user experience of any project."`,
    name: 'Tarandeep Singh',
    role: 'Ex-Nagarro · Same team',
  },
];

/* ─── Stats ────────────────────────────────────────── */
const STATS = [
  { n: 13, suffix: '+', label: 'Years designing enterprise software' },
  { n: 500, suffix: '+', label: 'Global organizations served across 50+ countries' },
  { n: 100, suffix: 'K+', label: `Daily active users across platforms I've shaped` },
];

/* ─── Case study cover images ──────────────────────── */
const COVERS: Record<string, string> = {
  lumen: '/assets/lumen/home-dark.png',
  pocial: '/assets/pocial-home.png',
  ebinaa: '/assets/ds-00-homepage.png',
};

/* ─── Arrow icons ──────────────────────────────────── */
function Arr() {
  return (
    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" aria-hidden="true" style={{ display: 'inline-block', flexShrink: 0 }}>
      <path d="M1 5.5H12M12 5.5L7.5 1M12 5.5L7.5 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrDiag() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" style={{ display: 'inline-block', flexShrink: 0 }}>
      <path d="M1 10L10 1M10 1H3.5M10 1V7.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Lo layout component ──────────────────────────── */
function Lo({ cls }: { cls: string }) {
  return (
    <div className={`lo ${cls}`}>
      <div className="lo__top lo__b" style={{ '--d': 0 } as React.CSSProperties} />
      <div className="lo__side lo__b" style={{ '--d': 1 } as React.CSSProperties}><i /><i /><i /><i /></div>
      <div className="lo__main">
        <div className="lo__cards">
          <div className="lo__card lo__b" style={{ '--d': 2 } as React.CSSProperties} />
          <div className="lo__card lo__b" style={{ '--d': 3 } as React.CSSProperties} />
          <div className="lo__card lo__b" style={{ '--d': 4 } as React.CSSProperties} />
        </div>
        <div className="lo__rows lo__b" style={{ '--d': 5 } as React.CSSProperties}><span /><span /><span /></div>
      </div>
    </div>
  );
}

/* ─── HeroNet canvas ───────────────────────────────── */
function HeroNet() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const rawCtx = cv.getContext('2d');
    if (!rawCtx) return;
    const ctx: CanvasRenderingContext2D = rawCtx;
    const canvas: HTMLCanvasElement = cv;
    const host = cv.parentElement!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let W = 0, H = 0;
    type Node = { bx: number; by: number; x: number; y: number; r: number; hub: boolean; ph: number; amp: number };
    type Edge = [number, number];
    type Pulse = { e: Edge; t: number; sp: number };
    let nodes: Node[] = [], edges: Edge[] = [], pulses: Pulse[] = [];
    const mouse = { x: -9999, y: -9999 };
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    function build() {
      W = host.clientWidth; H = host.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = []; edges = []; pulses = [];
      const hubCount = 5, hubs: number[] = [];
      for (let h = 0; h < hubCount; h++) {
        const hx = W * (0.12 + 0.76 * ((h + 0.5) / hubCount)) + rand(-W * 0.04, W * 0.04);
        const hy = rand(H * 0.16, H * 0.82);
        nodes.push({ bx: hx, by: hy, x: hx, y: hy, r: rand(2.4, 3.4), hub: true, ph: rand(0, 6.28), amp: rand(8, 15) });
        hubs.push(nodes.length - 1);
      }
      const leaves = Math.round(Math.min(46, Math.max(20, W * H / 24000)));
      for (let i = 0; i < leaves; i++) {
        const x = rand(W * 0.04, W * 0.96), y = rand(H * 0.08, H * 0.92);
        nodes.push({ bx: x, by: y, x, y, r: rand(1, 2), hub: false, ph: rand(0, 6.28), amp: rand(5, 11) });
        const idx = nodes.length - 1;
        let best = hubs[0], bd = 1e9;
        for (const k of hubs) { const hh = nodes[k]; const dx = hh.bx - x, dy = hh.by - y, d = dx * dx + dy * dy; if (d < bd) { bd = d; best = k; } }
        edges.push([idx, best]);
        if (Math.random() < 0.22) { const b2 = hubs[Math.floor(Math.random() * hubs.length)]; if (b2 !== best) edges.push([idx, b2]); }
      }
      for (let h = 0; h < hubs.length - 1; h++) edges.push([hubs[h], hubs[h + 1]]);
    }

    const spawnPulse = () => { if (edges.length) pulses.push({ e: edges[Math.floor(Math.random() * edges.length)], t: 0, sp: rand(0.004, 0.011) }); };
    const onMove = (ev: MouseEvent) => { const r = host.getBoundingClientRect(); mouse.x = ev.clientX - r.left; mouse.y = ev.clientY - r.top; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    host.addEventListener('mousemove', onMove, { passive: true });
    host.addEventListener('mouseleave', onLeave);

    let t = 0, pt = 0, raf = 0;
    function frame() {
      t += 0.016; ctx.clearRect(0, 0, W, H);
      for (const n of nodes) { n.x = n.bx + Math.cos(t * 0.4 + n.ph) * n.amp; n.y = n.by + Math.sin(t * 0.33 + n.ph) * n.amp; }
      ctx.lineWidth = 1;
      for (const [ai, bi] of edges) { const a = nodes[ai], b = nodes[bi]; ctx.strokeStyle = 'rgba(245,243,239,0.10)'; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      pt++; if (pt > 24) { pt = 0; if (pulses.length < 14) spawnPulse(); }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]; p.t += p.sp; if (p.t >= 1) { pulses.splice(i, 1); continue; }
        const a = nodes[p.e[0]], b = nodes[p.e[1]], px = a.x + (b.x - a.x) * p.t, py = a.y + (b.y - a.y) * p.t, g = Math.sin(p.t * Math.PI);
        ctx.beginPath(); ctx.arc(px, py, 1.9, 0, 6.283); ctx.fillStyle = `rgba(245,243,239,${(0.75 * g).toFixed(3)})`; ctx.fill();
      }
      for (const n of nodes) {
        const dx = n.x - mouse.x, dy = n.y - mouse.y, md = Math.sqrt(dx * dx + dy * dy), lit = md < 160;
        if (lit) { ctx.strokeStyle = `rgba(245,243,239,${((1 - md / 160) * 0.4).toFixed(3)})`; ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.283);
        ctx.fillStyle = n.hub ? `rgba(245,243,239,${lit ? 0.95 : 0.6})` : `rgba(245,243,239,${lit ? 0.85 : 0.4})`; ctx.fill();
        if (n.hub) { ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 3.5, 0, 6.283); ctx.strokeStyle = 'rgba(245,243,239,0.16)'; ctx.stroke(); }
      }
      raf = requestAnimationFrame(frame);
    }
    build(); frame();
    let rt = 0;
    const onResize = () => { clearTimeout(rt); rt = window.setTimeout(build, 200); };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); host.removeEventListener('mousemove', onMove); host.removeEventListener('mouseleave', onLeave); };
  }, []);

  return <canvas ref={canvasRef} className="hero__net" aria-hidden="true" />;
}

/* ─── useReveal ────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.rv, .scl');
    const groups = document.querySelectorAll<HTMLElement>('.rv-s');

    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            ob.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => ob.observe(el));
    groups.forEach((el) => ob.observe(el));

    return () => ob.disconnect();
  }, []);
}

/* ─── useFlowrail ──────────────────────────────────── */
function useFlowrail() {
  useEffect(() => {
    const railEl = document.getElementById('flowrail');
    const fill = document.getElementById('flowFill');
    if (!railEl || !fill) return;
    const rail: HTMLElement = railEl;

    const defs: [string, string][] = [
      ['#top', 'Start'],
      ['#services', 'Services'],
      ['#work', 'Work'],
      ['#approach', 'Approach'],
      ['#reviews', 'Reviews'],
      ['.cta', 'Connect'],
    ];

    const nodes: { el: HTMLElement; top: number; target: Element }[] = [];

    defs.forEach(([sel, label], idx) => {
      const target = document.querySelector(sel);
      if (!target) return;
      const nd = document.createElement('div');
      nd.className = 'flownode';
      nd.innerHTML = `<span class="flownode__lbl"><span class="flownode__n">0${idx + 1}</span>${label}</span>`;
      rail.appendChild(nd);
      nodes.push({ el: nd, top: 0, target });
    });

    function layout() {
      rail.style.height = document.documentElement.scrollHeight + 'px';
      nodes.forEach((n) => {
        n.top = n.target.getBoundingClientRect().top + window.scrollY;
        n.el.style.top = n.top + 'px';
      });
    }

    function upd() {
      const marker = window.scrollY + window.innerHeight * 0.5;
      (fill as HTMLElement).style.height = marker + 'px';
      nodes.forEach((n) => {
        n.el.classList.toggle('on', marker >= n.top - 4);
      });
    }

    layout(); upd();
    window.addEventListener('scroll', upd, { passive: true });
    window.addEventListener('resize', () => { layout(); upd(); });
    setTimeout(() => { layout(); upd(); }, 1200);

    return () => {
      window.removeEventListener('scroll', upd);
      nodes.forEach((n) => n.el.remove());
    };
  }, []);
}

/* ─── AiWidget ─────────────────────────────────────── */
const CURSOR_SVG = (
  <svg viewBox="0 0 24 24" fill="#fff"><path d="M5 3l14 7-6 1.5L9 18 5 3z"/></svg>
);

function AiWidget() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % AI_STEPS.length), 3000);
    return () => clearInterval(id);
  }, []);

  const screens = ['rq', 'iv', 'wf', 'dz', 'pt', 'ts', 'sh'] as const;

  return (
    <div className="aiproc hero__session rv">
      <div className="agent__frame">
        <div className="agent__bar">
          <div className="agent__dots"><i /><i /><i /></div>
          <span className="agent__title">
            nishan<span className="n">space</span> — design session
          </span>
          <span className="agent__live">
            <span className="d" /> Live
          </span>
        </div>
        <div className="agent__body">
          {/* Left: steps */}
          <div className="agent__chat">
            <div className="agent__prompt">
              <span className="who">— The brief</span>
              Take our tangled internal dashboard and make it something the whole team actually wants to open.
            </div>
            <div className="agent__steps">
              {AI_STEPS.map((step, i) => (
                <div
                  key={step}
                  className={[
                    'agent__step',
                    i <= active ? 'is-on' : '',
                    i < active ? 'is-done' : '',
                    i === active ? 'is-live' : '',
                  ].join(' ').trim()}
                >
                  <span className="ic" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: process canvas */}
          <div className="agent__canvas">
            <div className="proc">
              <div className="proc__bar">
                <span className="proc__hint">
                  <span className="sx">✦</span> {PROC_CAPS[active]}
                </span>
                <span className="proc__dots">
                  {AI_STEPS.map((_, i) => (
                    <i key={i} className={i === active ? 'on' : ''} />
                  ))}
                </span>
              </div>
              <div className="proc__win">
                {screens[active] === 'rq' && (
                  <div className="proc__screen">
                    <div className="rq">
                      <div className="rq__h">Project brief</div>
                      {[
                        'Multi-tenant SaaS dashboard',
                        'Role-based access · 4 user types',
                        'Cut time-to-task by 40%',
                        'WCAG AA accessible',
                        'Ship in six weeks',
                      ].map((t, i) => (
                        <div key={t} className="rq__l" style={{ '--d': i } as React.CSSProperties}>
                          <span className="ck" /> {t}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {screens[active] === 'iv' && (
                  <div className="proc__screen">
                    <div className="iv">
                      <div className="iv__b iv__b--them" style={{ '--d': 0 } as React.CSSProperties}>&ldquo;What slows the team down most?&rdquo;</div>
                      <div className="iv__b iv__b--me" style={{ '--d': 1 } as React.CSSProperties}>&ldquo;Too many clicks just to publish.&rdquo;</div>
                      <div className="iv__b iv__b--them" style={{ '--d': 2 } as React.CSSProperties}>&ldquo;And digging up past reports.&rdquo;</div>
                      <div className="iv__b iv__b--me" style={{ '--d': 3 } as React.CSSProperties}>&ldquo;Got it — one-click, with history.&rdquo;</div>
                      <div className="iv__wave">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <i key={i} style={{ animationDelay: `${(Math.random() * 0.9).toFixed(2)}s` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {(screens[active] === 'wf' || screens[active] === 'dz') && (
                  <div className="proc__screen">
                    <Lo cls={screens[active] === 'wf' ? 'wf' : 'dz'} />
                  </div>
                )}
                {screens[active] === 'pt' && (
                  <div className="proc__screen">
                    <div className="pt">
                      <div className="pt__f pt__b" style={{ '--d': 0 } as React.CSSProperties}><i /><i /></div>
                      <div className="pt__a pt__b" style={{ '--d': 1 } as React.CSSProperties} />
                      <div className="pt__f pt__b" style={{ '--d': 2 } as React.CSSProperties}><i /><i /></div>
                      <div className="pt__a pt__b" style={{ '--d': 3 } as React.CSSProperties} />
                      <div className="pt__f pt__f--hi pt__b" style={{ '--d': 4 } as React.CSSProperties}><i /><i /></div>
                      <div className="pt__cursor">{CURSOR_SVG}</div>
                    </div>
                  </div>
                )}
                {screens[active] === 'ts' && (
                  <div className="proc__screen">
                    <div className="ts">
                      <Lo cls="dz" />
                      <div className="ts__dot" style={{ left: '30%', top: '46%' }} />
                      <div className="ts__dot" style={{ left: '62%', top: '36%' }} />
                      <div className="ts__dot" style={{ left: '48%', top: '64%' }} />
                      <div className="ts__ring" />
                      <div className="ts__cursor">{CURSOR_SVG}</div>
                      <div className="ts__metric"><b>98%</b> success · <b>&#8722;42%</b> time-on-task</div>
                    </div>
                  </div>
                )}
                {screens[active] === 'sh' && (
                  <div className="proc__screen">
                    <div className="sh">
                      <div className="sh__badge sh__b" style={{ '--d': 0 } as React.CSSProperties}>
                        <span className="sh__tick">✓</span> Shipped to production
                      </div>
                      <div className="sh__b" style={{ '--d': 1 } as React.CSSProperties}>
                        <div className="sh__h">Design tokens</div>
                        <div className="sh__sw">
                          <span style={{ background: '#ecebe6' }} />
                          <span style={{ background: '#9b9893' }} />
                          <span style={{ background: '#171717' }} />
                          <span style={{ background: '#5c5a55' }} />
                          <span style={{ background: '#3ddc84' }} />
                        </div>
                      </div>
                      <div className="sh__b" style={{ '--d': 2 } as React.CSSProperties}>
                        <div className="sh__h">Components handed off</div>
                        <div className="sh__chips">
                          {['Button','Table','Modal','Nav','Form','Toast'].map((c) => (
                            <span key={c}>{c}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── StatsSection ─────────────────────────────────── */
function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const counters = useRef<{ el: HTMLElement | null; target: number }[]>([]);
  const fired = useRef(false);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !fired.current) {
          fired.current = true;
          counters.current.forEach(({ el, target }) => {
            if (!el) return;
            const dur = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / dur, 1);
              const ease = 1 - Math.pow(1 - t, 3);
              el.textContent = String(Math.round(ease * target));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  return (
    <div ref={ref} className="hero__stats rv-s">
      {STATS.map((s, i) => (
        <div key={i}>
          <div className="stat__n">
            <span
              ref={(el) => { counters.current[i] = { el, target: s.n }; }}
            >0</span>{s.suffix}
          </div>
          <p className="stat__l">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── ReviewsCarousel ──────────────────────────────── */
function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);
  const drag = useRef({ active: false, startX: 0, scrollX: 0 });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const step = () => {
      if (!drag.current.active) el.scrollLeft += 0.4;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);

    const onDown = (e: PointerEvent) => {
      drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollX: el.scrollLeft };
      el.classList.add('drag');
      el.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!drag.current.active) return;
      el.scrollLeft = drag.current.scrollX - (e.pageX - el.offsetLeft - drag.current.startX);
    };
    const onUp = () => { drag.current.active = false; el.classList.remove('drag'); };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointerleave', onUp);

    return () => {
      cancelAnimationFrame(raf.current);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointerleave', onUp);
    };
  }, []);

  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section className="rev" id="reviews">
      <div className="inner" style={{ marginBottom: 32 }}>
        <h2 className="sec__h rv">
          Six perspectives, thirteen years.
        </h2>
      </div>
      <div className="rev__wrap">
        <div ref={scrollRef} className="rev__scroll">
          <div className="rev__track">
            {doubled.map((r, i) => (
              <div key={i} className="rev__c">
                <p className="rev__q">{r.q}</p>
                <div className="rev__a">
                  <div className="rev__av">{r.name[0]}</div>
                  <div className="rev__m">
                    <b>{r.name}</b>
                    <span>{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────── */
export default function HomePage() {
  useReveal();
  useFlowrail();

  return (
    <div style={{ position: 'relative' }}>
      {/* Flowrail */}
      <div id="flowrail" className="flowrail" aria-hidden="true">
        <div className="flowrail__line" />
        <div id="flowFill" className="flowrail__fill" />
      </div>

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="hero" id="top">
        <div className="hero__halo" aria-hidden="true" />
        <HeroNet />

        <h1 className="hero__h hero__h--punch rv" style={{ transitionDelay: '0.1s' }}>
          Most enterprise software fails because users can&apos;t figure out how to use it.{' '}
          <em className="hero__fix">I fix that.</em>
        </h1>

        <p className="hero__sub rv" style={{ transitionDelay: '0.2s' }}>
          Your imagination, my solution. I help teams turn complex enterprise systems — psychometric assessments, healthcare EMRs, blockchain platforms — into software users actually want to use.
        </p>

        <div className="hero__act rv" style={{ transitionDelay: '0.3s' }}>
          <Link href="/lets-build" className="pill">
            Build together <span className="a"><Arr /></span>
          </Link>
          <a href="/assets/Nishan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="pill pill--ghost">
            My UX talent profile <span className="a"><ArrDiag /></span>
          </a>
        </div>

        <p className="hero__scroll">↓ scroll</p>

        <AiWidget />
        <StatsSection />
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section className="sec" id="services">
        <div className="inner">
          <h2 className="sec__h rv">
            How I can help.
          </h2>
          <p className="sec__lead rv" style={{ transitionDelay: '0.15s' }}>
            I take on a small number of engagements at a time. Here are the four ways we usually work together.
          </p>

          <div className="svc rv-s" style={{ transitionDelay: '0.1s' }}>
            {/* Card 1 — UX Consulting */}
            <div className="svc__c">
              <div className="svc__anim rj rj--consult" aria-hidden="true">
                <svg viewBox="0 0 400 190" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <line x1="200" y1="95" x2="60" y2="40"/><line x1="200" y1="95" x2="50" y2="150"/><line x1="200" y1="95" x2="350" y2="44"/><line x1="200" y1="95" x2="352" y2="150"/>
                  <rect x="150" y="48" width="100" height="94" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/>
                  <rect x="160" y="58" width="80" height="11" fill="rgba(245,243,239,.3)"/><rect x="160" y="76" width="54" height="7" fill="rgba(245,243,239,.16)"/>
                  <rect x="160" y="98" width="80" height="10" fill="rgba(74,86,246,.2)"/><rect className="rjfill" x="160" y="98" width="80" height="10" style={{'--d':'.3s'} as React.CSSProperties}/>
                  <rect x="160" y="116" width="80" height="10" fill="rgba(74,86,246,.2)"/><rect className="rjfill" x="160" y="116" width="58" height="10" style={{'--d':'.7s'} as React.CSSProperties}/>
                  <circle className="rjnode rjblink" cx="60" cy="40" r="11" style={{'--d':'0s'} as React.CSSProperties}/><circle className="rjnode rjblink" cx="50" cy="150" r="11" style={{'--d':'.4s'} as React.CSSProperties}/><circle className="rjnode rjblink" cx="350" cy="44" r="11" style={{'--d':'.8s'} as React.CSSProperties}/>
                  <circle cx="352" cy="150" r="15" fill="#0f0e0c" stroke="rgba(245,243,239,.2)"/><image href="/assets/icon.svg" x="341" y="139" width="22" height="22"/>
                  <circle className="rjpulse" style={{'--tx':'138px'} as React.CSSProperties} cx="60" cy="40" r="3.5"/><circle className="rjpulse" style={{'--tx':'-148px','--d':'.6s'} as React.CSSProperties} cx="352" cy="150" r="3.5"/>
                  <circle className="rjfloat" cx="108" cy="40" r="4" style={{'--d':'.6s'} as React.CSSProperties}/><circle className="rjfloat" cx="292" cy="150" r="4" style={{'--d':'1.3s'} as React.CSSProperties}/>
                </svg>
              </div>
              <div className="svc__in">
                <p className="svc__n">— 01</p>
                <h3 className="svc__h">Enterprise UX consulting</h3>
                <p className="svc__b">I join your team to redesign a product, build a design system, or unblock a stalled redesign. <b>Best for:</b> enterprise companies with one product, real users, and UX debt slowing them down.</p>
              </div>
            </div>

            {/* Card 2 — Design Systems */}
            <div className="svc__c">
              <div className="svc__anim rj rj--system" aria-hidden="true">
                <svg viewBox="0 0 400 190" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <line x1="100" y1="100" x2="182" y2="56"/><line x1="100" y1="100" x2="182" y2="100"/><line x1="100" y1="100" x2="182" y2="144"/>
                  <rect className="rjtile" x="34" y="40" width="58" height="34" style={{'--d':'0s'} as React.CSSProperties}/><rect className="rjtileax" x="34" y="82" width="58" height="34" style={{'--d':'.3s'} as React.CSSProperties}/><rect className="rjtile" x="34" y="124" width="58" height="34" style={{'--d':'.6s'} as React.CSSProperties}/>
                  <circle className="rjpulse" style={{'--tx':'82px'} as React.CSSProperties} cx="100" cy="56" r="3.4"/><circle className="rjpulse" style={{'--tx':'82px','--d':'.5s'} as React.CSSProperties} cx="100" cy="100" r="3.4"/><circle className="rjpulse" style={{'--tx':'82px','--d':'1s'} as React.CSSProperties} cx="100" cy="144" r="3.4"/>
                  <g className="rjpop" style={{'--d':'.4s'} as React.CSSProperties}><rect x="184" y="40" width="72" height="34" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/><rect x="190" y="46" width="30" height="6" fill="#4a56f6"/><rect x="190" y="58" width="50" height="5" fill="rgba(245,243,239,.18)"/></g>
                  <g className="rjpop" style={{'--d':'.9s'} as React.CSSProperties}><rect x="184" y="83" width="72" height="34" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/><rect x="190" y="89" width="30" height="6" fill="#4a56f6"/><rect x="190" y="101" width="50" height="5" fill="rgba(245,243,239,.18)"/></g>
                  <g className="rjpop" style={{'--d':'1.4s'} as React.CSSProperties}><rect x="184" y="126" width="72" height="34" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/><rect x="190" y="132" width="30" height="6" fill="#4a56f6"/><rect x="190" y="144" width="50" height="5" fill="rgba(245,243,239,.18)"/></g>
                  <circle className="rjsw" cx="298" cy="58" r="9" fill="#4a56f6" style={{'--d':'0s'} as React.CSSProperties}/><circle className="rjsw" cx="324" cy="58" r="9" fill="#838bff" style={{'--d':'.2s'} as React.CSSProperties}/><circle className="rjsw" cx="350" cy="58" r="9" fill="#cfccc6" style={{'--d':'.4s'} as React.CSSProperties}/>
                  <text x="288" y="122" fontFamily="Geist, sans-serif" fontSize="26" fontWeight="700" fill="rgba(245,243,239,.5)" className="rjblink">Aa</text>
                  <circle className="rjfloat" cx="322" cy="150" r="4" style={{'--d':'.8s'} as React.CSSProperties}/>
                </svg>
              </div>
              <div className="svc__in">
                <p className="svc__n">— 02</p>
                <h3 className="svc__h">Design system architecture</h3>
                <p className="svc__b">White-label, multi-tenant, scalable. The kind of system that cuts client implementation from a drawn-out build to a fraction of the effort — <b>proven across 500+ organizations.</b></p>
              </div>
            </div>

            {/* Card 3 — UX Audit */}
            <div className="svc__c">
              <div className="svc__anim rj rj--audit" aria-hidden="true">
                <svg viewBox="0 0 400 190" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <rect x="32" y="28" width="178" height="134" fill="#1c1a16" stroke="rgba(245,243,239,.18)"/>
                  <rect x="44" y="40" width="118" height="12" fill="rgba(245,243,239,.28)"/><rect x="44" y="60" width="80" height="8" fill="rgba(245,243,239,.16)"/><rect x="44" y="76" width="146" height="8" fill="rgba(245,243,239,.12)"/><rect x="44" y="100" width="58" height="30" fill="rgba(245,243,239,.1)"/>
                  <g className="rjflag" style={{'--d':'.3s'} as React.CSSProperties}><line x1="124" y1="64" x2="124" y2="48" stroke="#4a56f6" strokeWidth="1.5"/><path d="M124 48 l14 5 l-14 5 z" fill="#4a56f6"/></g>
                  <g className="rjflag" style={{'--d':'1s'} as React.CSSProperties}><line x1="172" y1="84" x2="172" y2="68" stroke="#4a56f6" strokeWidth="1.5"/><path d="M172 68 l14 5 l-14 5 z" fill="#4a56f6"/></g>
                  <g className="rjflag" style={{'--d':'1.7s'} as React.CSSProperties}><line x1="80" y1="118" x2="80" y2="102" stroke="#4a56f6" strokeWidth="1.5"/><path d="M80 102 l14 5 l-14 5 z" fill="#4a56f6"/></g>
                  <g className="rjmag" style={{'--mx':'118px'} as React.CSSProperties}><circle cx="66" cy="94" r="17" fill="none" stroke="#fff" strokeWidth="2.5"/><line x1="78" y1="106" x2="90" y2="118" stroke="#fff" strokeWidth="3"/></g>
                  <rect x="242" y="44" width="14" height="14" fill="none" stroke="#4a56f6" strokeWidth="1.5"/><path className="rjcheck" pathLength={1} d="M245 51 l3 4 l6 -8"/><rect className="rjfill" x="264" y="48" width="92" height="7" style={{'--d':'.4s'} as React.CSSProperties}/>
                  <rect x="242" y="76" width="14" height="14" fill="none" stroke="#4a56f6" strokeWidth="1.5"/><rect className="rjfill" x="264" y="80" width="70" height="7" style={{'--d':'.8s'} as React.CSSProperties}/>
                  <rect x="242" y="108" width="14" height="14" fill="none" stroke="#4a56f6" strokeWidth="1.5"/><rect className="rjfill" x="264" y="112" width="84" height="7" style={{'--d':'1.2s'} as React.CSSProperties}/>
                  <circle className="rjfloat" cx="300" cy="150" r="4" style={{'--d':'.6s'} as React.CSSProperties}/>
                </svg>
              </div>
              <div className="svc__in">
                <p className="svc__n">— 03</p>
                <h3 className="svc__h">UX audit & strategy</h3>
                <p className="svc__b">A deep dive into your current product. Concrete findings, prioritized roadmap, decisions you can act on. <b>Best when</b> you have a product live and need to know what to fix first.</p>
              </div>
            </div>

            {/* Card 4 — Speaking */}
            <div className="svc__c">
              <div className="svc__anim rj rj--speak" aria-hidden="true">
                <svg viewBox="0 0 400 190" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <rect x="36" y="32" width="150" height="100" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/>
                  <rect x="48" y="44" width="88" height="12" fill="#4a56f6"/><rect x="48" y="64" width="120" height="7" fill="rgba(245,243,239,.18)"/><rect x="48" y="78" width="96" height="7" fill="rgba(245,243,239,.14)"/><rect x="48" y="98" width="58" height="22" fill="rgba(245,243,239,.1)"/>
                  <circle className="rjping" style={{'--ox':'186px','--oy':'82px'} as React.CSSProperties} cx="186" cy="82" r="14"/><circle className="rjping rjping2" style={{'--ox':'186px','--oy':'82px'} as React.CSSProperties} cx="186" cy="82" r="14"/>
                  <rect className="rjbar" x="214" y="64" width="9" height="36" style={{'--d':'0s'} as React.CSSProperties}/><rect className="rjbar" x="230" y="64" width="9" height="36" style={{'--d':'.12s'} as React.CSSProperties}/><rect className="rjbar" x="246" y="64" width="9" height="36" style={{'--d':'.05s'} as React.CSSProperties}/><rect className="rjbar" x="262" y="64" width="9" height="36" style={{'--d':'.18s'} as React.CSSProperties}/><rect className="rjbar" x="278" y="64" width="9" height="36" style={{'--d':'.08s'} as React.CSSProperties}/>
                  <circle className="rjnode rjblink" cx="300" cy="148" r="9" style={{'--d':'0s'} as React.CSSProperties}/><circle className="rjnode rjblink" cx="328" cy="148" r="9" style={{'--d':'.3s'} as React.CSSProperties}/><circle className="rjnode rjblink" cx="356" cy="148" r="9" style={{'--d':'.6s'} as React.CSSProperties}/>
                  <circle className="rjfloat" cx="250" cy="150" r="4" style={{'--d':'.7s'} as React.CSSProperties}/>
                </svg>
              </div>
              <div className="svc__in">
                <p className="svc__n">— 04</p>
                <h3 className="svc__h">Speaking & workshops</h3>
                <p className="svc__b">Enterprise UX, designing for high-stakes domains (healthcare, finance, talent), building design systems that scale. <b>Conferences,</b> internal team workshops, design-org coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────── */}
      <section className="sec" id="work">
        <div className="inner">
          <h2 className="sec__h rv">
            Selected case studies.
          </h2>
          <p className="sec__lead rv" style={{ transitionDelay: '0.15s' }}>
            Thirteen years across psychometrics, healthcare and Web3 — complex systems made obvious.
          </p>

          <div className="cs rv-s" style={{ marginTop: 54, transitionDelay: '0.15s' }}>
            {[
              {
                slug: 'lumen',
                barText: 'lumen · ios & android',
                number: '001',
                tag: 'Consumer Crypto · iOS & Android',
                title: 'Lumen — AI-guided crypto',
                desc: 'Calm crypto app for first-timers · light & dark · AI guide',
                img: '/assets/lumen/home-dark.png',
                alt: 'Lumen — AI-guided crypto',
              },
              {
                slug: 'pocial',
                barText: 'pocial.com',
                number: '002',
                tag: 'SaaS / MarTech',
                title: 'Pocial — AI Marketing',
                desc: 'AI marketing-automation platform · 20+ tools in four hubs',
                img: '/assets/pocial-home.png',
                alt: 'Pocial — AI Marketing',
              },
              {
                slug: 'ebinaa',
                barText: 'ebinaa.info',
                number: '003',
                tag: 'Construction-tech',
                title: 'eBinaa',
                desc: 'Contractor portal · Oman · bilingual RTL',
                img: '/assets/ds-01-opportunities.png',
                alt: 'eBinaa — Contractor Portal',
              },
            ].map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="cs__card">
                <div className="cs__win">
                  <div className="cs__bar">
                    <span /><span /><span />
                    <i>{c.barText}</i>
                  </div>
                  <div className="cs__view">
                    <Image
                      src={c.img}
                      alt={c.alt}
                      fill
                      className="cs__shot"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                </div>
                <div className="cs__body">
                  <div className="cs__top">
                    <span className="cs__num">{c.number}</span>
                    <span className="cs__tag">{c.tag}</span>
                  </div>
                  <h3 className="cs__h">{c.title}</h3>
                  <p className="cs__d">{c.desc}</p>
                  <span className="cs__link">
                    View case study <span className="cs__arr"><ArrDiag /></span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ──────────────────────────────────── */}
      <section className="sec" id="approach">
        <div className="inner">
          <h2 className="sec__h rv">
            My approach.
          </h2>
          <p className="sec__lead rv" style={{ transitionDelay: '0.15s' }}>
            The principles behind every product I&apos;ve shipped.
          </p>

          {/* Research */}
          <div className="feat">
            <div className="feat__txt rv">
              <p className="feat__n">01 — Research</p>
              <h3 className="feat__h">Start with real users.</h3>
              <p className="feat__b">I watch people use the product before I touch a pixel. Their constraints shape the design — not my assumptions.</p>
              <div className="feat__tags">
                {['Interviews','Journey mapping','Synthesis'].map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className="feat__media scl amini">
              <div className="amini__bar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="amini__n" src="/assets/icon.svg" alt="" />
                <span>Observing users</span>
                <span className="amini__live">Live</span>
              </div>
              <div className="amini__stage rj">
                <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="56" width="150" height="184" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/>
                  <rect x="54" y="70" width="100" height="14" fill="rgba(245,243,239,.28)"/><rect x="54" y="94" width="70" height="9" fill="rgba(245,243,239,.16)"/><rect x="54" y="112" width="120" height="9" fill="rgba(245,243,239,.12)"/><rect x="54" y="150" width="62" height="34" fill="rgba(74,86,246,.25)"/>
                  <circle className="rjheat" cx="86" cy="166" r="22" style={{'--d':'0s'} as React.CSSProperties}/><circle className="rjheat" cx="142" cy="108" r="16" style={{'--d':'.7s'} as React.CSSProperties}/>
                  <circle cx="72" cy="266" r="16" fill="#0f0e0c" stroke="rgba(245,243,239,.3)"/><circle cx="72" cy="260" r="6" fill="rgba(245,243,239,.5)"/><path d="M60 274 q12 -13 24 0" fill="rgba(245,243,239,.3)"/>
                  <circle cx="302" cy="78" r="22" fill="#0f0e0c" stroke="rgba(245,243,239,.2)"/><image href="/assets/icon.svg" x="286" y="62" width="32" height="32"/>
                  <line x1="282" y1="92" x2="160" y2="150" strokeDasharray="3 5"/>
                  <line className="rjwire" x1="296" y1="98" x2="244" y2="140"/><line className="rjwire" x1="244" y1="140" x2="244" y2="241"/>
                  <circle className="rjax rjblink" cx="244" cy="149" r="3.6" style={{'--d':'0s'} as React.CSSProperties}/><circle className="rjax rjblink" cx="244" cy="195" r="3.6" style={{'--d':'.35s'} as React.CSSProperties}/><circle className="rjax rjblink" cx="244" cy="241" r="3.6" style={{'--d':'.7s'} as React.CSSProperties}/>
                  <g className="rjpop" style={{'--d':'.3s'} as React.CSSProperties}><rect x="248" y="132" width="116" height="34" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/><rect x="256" y="142" width="58" height="6" fill="#4a56f6"/><rect x="256" y="154" width="84" height="5" fill="rgba(245,243,239,.2)"/></g>
                  <g className="rjpop" style={{'--d':'1.2s'} as React.CSSProperties}><rect x="248" y="178" width="116" height="34" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/><rect x="256" y="188" width="48" height="6" fill="#4a56f6"/><rect x="256" y="200" width="90" height="5" fill="rgba(245,243,239,.2)"/></g>
                  <g className="rjpop" style={{'--d':'2.1s'} as React.CSSProperties}><rect x="248" y="224" width="116" height="34" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/><rect x="256" y="234" width="66" height="6" fill="#4a56f6"/><rect x="256" y="246" width="74" height="5" fill="rgba(245,243,239,.2)"/></g>
                  <circle className="rjfloat" cx="216" cy="58" r="5" style={{'--d':'.5s'} as React.CSSProperties}/><circle className="rjfloat" cx="210" cy="256" r="4" style={{'--d':'1.5s'} as React.CSSProperties}/>
                </svg>
              </div>
            </div>
          </div>

          {/* Wireframing */}
          <div className="feat">
            <div className="feat__txt rv">
              <p className="feat__n">02 — Wireframing</p>
              <h3 className="feat__h">Cut the complexity.</h3>
              <p className="feat__b">If it needs a manual, I haven&apos;t finished. The best interfaces feel obvious the first time you see them.</p>
              <div className="feat__tags">
                {['Flows','Low-fi','IA'].map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className="feat__media scl amini">
              <div className="amini__bar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="amini__n" src="/assets/icon.svg" alt="" />
                <span>Simplifying</span>
                <span className="amini__live">Live</span>
              </div>
              <div className="amini__stage rj">
                <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <line x1="50" y1="80" x2="150" y2="220"/><line x1="150" y1="70" x2="46" y2="226"/><line x1="40" y1="150" x2="160" y2="150"/><line x1="92" y1="56" x2="116" y2="244"/><line x1="36" y1="200" x2="166" y2="96"/><line x1="60" y1="100" x2="158" y2="200"/>
                    <circle className="rjnode rjblink" cx="50" cy="80" r="8" style={{'--d':'0s'} as React.CSSProperties}/><circle className="rjnode rjblink" cx="150" cy="70" r="8" style={{'--d':'.2s'} as React.CSSProperties}/><circle className="rjnode rjblink" cx="160" cy="150" r="8" style={{'--d':'.4s'} as React.CSSProperties}/><circle className="rjnode rjblink" cx="46" cy="226" r="8" style={{'--d':'.6s'} as React.CSSProperties}/><circle className="rjnode rjblink" cx="116" cy="244" r="8" style={{'--d':'.3s'} as React.CSSProperties}/><circle className="rjnode rjblink" cx="40" cy="150" r="8" style={{'--d':'.5s'} as React.CSSProperties}/>
                  </g>
                  <path d="M186 150 l34 0 m-9 -8 l9 8 l-9 8" stroke="#4a56f6" strokeWidth="2.5" fill="none"/>
                  <line x1="248" y1="150" x2="312" y2="150"/><line x1="312" y1="150" x2="360" y2="96"/><line x1="312" y1="150" x2="360" y2="204"/>
                  <circle className="rjnode" cx="248" cy="150" r="10"/><circle className="rjax" cx="312" cy="150" r="11"/><circle className="rjnode" cx="360" cy="96" r="10"/><circle className="rjnode" cx="360" cy="204" r="10"/>
                  <circle className="rjpulse" style={{'--tx':'64px'} as React.CSSProperties} cx="248" cy="150" r="4.5"/>
                  <circle className="rjfloat" cx="290" cy="70" r="5" style={{'--d':'.6s'} as React.CSSProperties}/><circle className="rjfloat" cx="300" cy="240" r="4" style={{'--d':'1.4s'} as React.CSSProperties}/>
                </svg>
              </div>
            </div>
          </div>

          {/* Visual Design */}
          <div className="feat">
            <div className="feat__txt rv">
              <p className="feat__n">03 — Visual Design</p>
              <h3 className="feat__h">Design to scale.</h3>
              <p className="feat__b">Systems, not screens. Every decision has to hold up across products, platforms, and the next hundred edge cases.</p>
              <div className="feat__tags">
                {['Design systems','Components','Tokens'].map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className="feat__media scl amini">
              <div className="amini__bar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="amini__n" src="/assets/icon.svg" alt="" />
                <span>Scaling design</span>
                <span className="amini__live">Live</span>
              </div>
              <div className="amini__stage rj">
                <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <line className="rjwire" x1="106" y1="150" x2="180" y2="72"/><line className="rjwire" x1="106" y1="150" x2="180" y2="152"/><line className="rjwire" x1="106" y1="150" x2="180" y2="247"/>
                  <rect className="rjtileax" x="34" y="118" width="72" height="64"/>
                  <text x="44" y="206" fontFamily="Geist Mono, monospace" fontSize="11" fill="rgba(245,243,239,.4)">SOURCE</text>
                  <circle className="rjax rjblink" cx="180" cy="72" r="4" style={{'--d':'0s'} as React.CSSProperties}/><circle className="rjax rjblink" cx="180" cy="152" r="4" style={{'--d':'.3s'} as React.CSSProperties}/><circle className="rjax rjblink" cx="180" cy="247" r="4" style={{'--d':'.6s'} as React.CSSProperties}/>
                  <g className="rjpop" style={{'--d':'.4s'} as React.CSSProperties}><rect x="180" y="40" width="182" height="64" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/><rect x="190" y="50" width="40" height="8" fill="#4a56f6"/><rect x="190" y="64" width="120" height="6" fill="rgba(245,243,239,.16)"/><rect x="190" y="76" width="90" height="6" fill="rgba(245,243,239,.12)"/></g>
                  <g className="rjpop" style={{'--d':'.9s'} as React.CSSProperties}><rect x="180" y="124" width="120" height="56" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/><rect x="190" y="132" width="30" height="7" fill="#4a56f6"/><rect x="190" y="146" width="70" height="5" fill="rgba(245,243,239,.16)"/></g>
                  <g className="rjpop" style={{'--d':'1.4s'} as React.CSSProperties}><rect x="180" y="210" width="52" height="74" fill="#1c1a16" stroke="rgba(245,243,239,.2)"/><rect x="188" y="218" width="22" height="6" fill="#4a56f6"/><rect x="188" y="230" width="34" height="5" fill="rgba(245,243,239,.16)"/></g>
                  <circle className="rjfloat" cx="330" cy="190" r="5" style={{'--d':'.7s'} as React.CSSProperties}/>
                </svg>
              </div>
            </div>
          </div>

          {/* Prototyping */}
          <div className="feat">
            <div className="feat__txt rv">
              <p className="feat__n">04 — Prototyping</p>
              <h3 className="feat__h">Prove it worked.</h3>
              <p className="feat__b">Completion rates, time-on-task, support load, revenue. I ship outcomes I can measure — not opinions.</p>
              <div className="feat__tags">
                {['Prototypes','Usability testing','Metrics'].map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className="feat__media scl amini">
              <div className="amini__bar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="amini__n" src="/assets/icon.svg" alt="" />
                <span>Measuring impact</span>
                <span className="amini__live">Live</span>
              </div>
              <div className="amini__stage rj">
                <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                  <rect x="34" y="36" width="332" height="228" fill="#1c1a16" stroke="rgba(245,243,239,.18)"/>
                  <rect x="50" y="50" width="92" height="11" fill="rgba(245,243,239,.3)"/>
                  <polyline className="rjdraw" pathLength={1} points="54,206 110,186 168,156 226,120 322,76" fill="none" stroke="#4a56f6" strokeWidth="2.5" style={{'--d':'.3s'} as React.CSSProperties}/>
                  <circle className="rjax" cx="322" cy="76" r="4.5"/>
                  <circle cx="318" cy="96" r="18" fill="none" stroke="rgba(245,243,239,.16)"/><path className="rjcheck" pathLength={1} d="M307 96 l7 8 l15 -18"/>
                  <rect x="50" y="222" width="130" height="9" fill="rgba(245,243,239,.1)"/><rect className="rjfill" x="50" y="222" width="118" height="9" style={{'--d':'.5s'} as React.CSSProperties}/>
                  <rect x="50" y="240" width="130" height="9" fill="rgba(245,243,239,.1)"/><rect className="rjfill" x="50" y="240" width="86" height="9" style={{'--d':'.9s'} as React.CSSProperties}/>
                  <rect x="200" y="222" width="150" height="9" fill="rgba(245,243,239,.1)"/><rect className="rjfill" x="200" y="222" width="120" height="9" style={{'--d':'.7s'} as React.CSSProperties}/>
                  <rect x="200" y="240" width="150" height="9" fill="rgba(245,243,239,.1)"/><rect className="rjfill" x="200" y="240" width="96" height="9" style={{'--d':'1.1s'} as React.CSSProperties}/>
                  <circle className="rjfloat" cx="200" cy="60" r="5" style={{'--d':'.6s'} as React.CSSProperties}/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────── */}
      <ReviewsCarousel />

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="cta">
        <div className="cta__glow" aria-hidden="true" />
        <span className="ey rv">— Quality matters</span>
        <h2 className="cta__h rv" style={{ marginTop: 24 }}>
          Quality matters.<br /><em style={{ fontStyle: 'italic' }}>Let&apos;s talk.</em>
        </h2>
        <div className="cta__act rv" style={{ transitionDelay: '0.15s' }}>
          <Link href="/lets-build" className="pill">
            Build together <span className="a"><Arr /></span>
          </Link>
          <a href="/assets/Nishan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="pill pill--ghost">
            My UX talent profile <span className="a"><ArrDiag /></span>
          </a>
        </div>
      </section>
    </div>
  );
}
