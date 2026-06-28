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
function AiWidget() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % AI_STEPS.length), 3000);
    return () => clearInterval(id);
  }, []);

  const screens = ['rq', 'iv', 'wf', 'dz', 'pt', 'ts', 'sh'] as const;

  return (
    <div className="hero__session rv">
      <div className="agent__frame">
        <div className="agent__bar">
          <div className="agent__dots"><i /><i /><i /></div>
          <span className="agent__title">
            <span className="n">nishan</span> space — design session
          </span>
          <span className="agent__live">
            <span className="d" /> Active
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
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Right: process canvas */}
          <div className="agent__canvas">
            <div className="proc">
              <div className="proc__bar">
                <span className="proc__hint">
                  <span className="sx">●</span> {AI_STEPS[active]}
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
                      <p className="rq__h">Project Requirements</p>
                      {['10+ user roles defined','3-month delivery timeline','Complex data visualisation','Accessibility AA compliant','Mobile responsive'].map((t, i) => (
                        <div key={t} className="rq__l" style={{ '--d': i } as React.CSSProperties}>
                          <span className="ck" />{t}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {screens[active] === 'iv' && (
                  <div className="proc__screen">
                    <div className="iv">
                      <div className="iv__b iv__b--them" style={{ '--d': 0 } as React.CSSProperties}>What's your biggest pain point with the current workflow?</div>
                      <div className="iv__b iv__b--me" style={{ '--d': 1 } as React.CSSProperties}>I lose hours just finding the right report.</div>
                      <div className="iv__b iv__b--them" style={{ '--d': 2 } as React.CSSProperties}>How often does that happen in a typical week?</div>
                      <div className="iv__b iv__b--me" style={{ '--d': 3 } as React.CSSProperties}>Every single day, at least 3-4 times.</div>
                      <div className="iv__wave">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <i key={i} style={{ animationDelay: `${i * 0.08}s` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {(screens[active] === 'wf' || screens[active] === 'dz') && (
                  <div className="proc__screen" style={{ position: 'relative', height: '100%' }}>
                    <div className={`lo ${screens[active] === 'wf' ? 'wf' : 'dz'}`}>
                      <div className="lo__b lo__top" style={{ '--d': 0 } as React.CSSProperties} />
                      <div className="lo__b lo__side" style={{ '--d': 1 } as React.CSSProperties}>
                        <i /><i /><i /><i />
                      </div>
                      <div className="lo__b lo__main" style={{ '--d': 2 } as React.CSSProperties}>
                        <div className="lo__cards">
                          <div className="lo__card" /><div className="lo__card" /><div className="lo__card" />
                        </div>
                        <div className="lo__rows">
                          <span /><span /><span />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {screens[active] === 'pt' && (
                  <div className="proc__screen">
                    <div className="pt">
                      {[0,1,2].map((i) => (
                        <div key={i} className={`pt__b pt__f${i === 1 ? ' pt__f--hi' : ''}`} style={{ '--d': i } as React.CSSProperties}>
                          <i /><i />
                        </div>
                      ))}
                      <div className="pt__a" style={{ position: 'static' }} />
                    </div>
                  </div>
                )}
                {screens[active] === 'ts' && (
                  <div className="proc__screen">
                    <div className="ts" style={{ position: 'relative', height: 280 }}>
                      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-3)' }} />
                      <div className="ts__cursor">
                        <svg viewBox="0 0 18 18" fill="none"><path d="M2 2l14 6-6 2-2 6L2 2z" fill="white" stroke="rgba(0,0,0,.3)" strokeWidth=".5"/></svg>
                      </div>
                      <div className="ts__ring" />
                      <div className="ts__metric"><b>Task completion</b> 94%</div>
                    </div>
                  </div>
                )}
                {screens[active] === 'sh' && (
                  <div className="proc__screen">
                    <div className="sh">
                      <div className="sh__b" style={{ '--d': 0 } as React.CSSProperties}><div className="sh__badge">v1.0 Shipped ✓</div></div>
                      <div className="sh__b" style={{ '--d': 1 } as React.CSSProperties}>
                        <p className="sh__h">Design Handoff</p>
                        <div className="sh__sw"><span /><span /><span /><span /></div>
                      </div>
                      <div className="sh__b" style={{ '--d': 2 } as React.CSSProperties}>
                        <p className="sh__h">Delivery Package</p>
                        <div className="sh__chips">
                          {['Figma source','Design tokens','Component docs','Motion spec'].map((c) => (
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
        <span className="ey rv">What collaborators say</span>
        <h2 className="sec__h rv" style={{ transitionDelay: '0.1s' }}>
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
        <div className="hero__ring hero__ring--1" aria-hidden="true" />
        <div className="hero__ring hero__ring--2" aria-hidden="true" />

        <p className="ey rv" style={{ transitionDelay: '0s' }}>
          Senior UX Designer · Dubai, UAE
        </p>

        <h1 className="hero__h hero__h--punch rv" style={{ transitionDelay: '0.1s' }}>
          Most enterprise software fails because users can&apos;t figure out how to use it.{' '}
          <em className="hero__fix">I fix that.</em>
        </h1>

        <p className="hero__sub rv" style={{ transitionDelay: '0.2s' }}>
          Your imagination, my solution. I help teams turn complex enterprise systems — psychometric assessments, healthcare EMRs, blockchain platforms — into software users actually want to use.
        </p>

        <div className="hero__act rv" style={{ transitionDelay: '0.3s' }}>
          <Link href="/contact" className="pill">
            Build together <span className="a">→</span>
          </Link>
          <a href="/assets/Nishan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="pill pill--ghost">
            My UX talent profile <span className="a">↗</span>
          </a>
        </div>

        <AiWidget />
        <StatsSection />

        <p className="hero__scroll">↓ scroll</p>
      </section>

      {/* ── SERVICES ──────────────────────────────────── */}
      <section className="sec" id="services">
        <div className="inner">
          <div className="sec__eyrow rv">
            <span className="ey">Services</span>
            <span className="ln" />
          </div>
          <h2 className="sec__h rv" style={{ transitionDelay: '0.1s' }}>
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
                  <circle cx="352" cy="150" r="15" fill="#0f0e0c" stroke="rgba(245,243,239,.2)"/>
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
          <div className="sec__eyrow rv">
            <span className="ey">Work</span>
            <span className="ln" />
          </div>
          <h2 className="sec__h rv" style={{ transitionDelay: '0.1s' }}>
            Selected case studies.
          </h2>
          <p className="sec__lead rv" style={{ transitionDelay: '0.15s' }}>
            Thirteen years across psychometrics, healthcare and Web3 — complex systems made obvious.
          </p>

          <div className="cs rv-s" style={{ marginTop: 54, transitionDelay: '0.15s' }}>
            {cases.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="cs__card">
                <div className="cs__bar">
                  <span /><span /><span />
                  <i>nishan.space/work/{c.slug}</i>
                </div>
                <div className="cs__view">
                  <Image
                    src={COVERS[c.slug] || c.coverImage}
                    alt={c.coverAlt}
                    fill
                    className="cs__shot"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div className="cs__body">
                  <div className="cs__top">
                    <span className="cs__num">{c.number}</span>
                    <span className="cs__tag">{c.tagline.split(' · ')[0]}</span>
                  </div>
                  <h3 className="cs__h">{c.title}</h3>
                  <p className="cs__d">{c.tagline}</p>
                  <span className="cs__link">
                    View case study <span className="cs__arr">→</span>
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
          <div className="sec__eyrow rv">
            <span className="ey">Approach</span>
            <span className="ln" />
          </div>
          <h2 className="sec__h rv" style={{ transitionDelay: '0.1s' }}>
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
            <div className="feat__media scl">
              <div className="amini">
                <div className="amini__bar">
                  <svg className="amini__n" viewBox="0 0 15 15" fill="none"><rect x="1" y="1" width="13" height="13" rx="2" stroke="rgba(245,243,239,.3)" strokeWidth="1"/></svg>
                  Research Session
                  <span className="amini__live">Recording</span>
                </div>
                <div className="amini__stage" style={{ minHeight: 240 }}>
                  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="280" height="40" fill="rgba(245,243,239,.03)" stroke="rgba(245,243,239,.08)" strokeWidth="1"/>
                    <text x="30" y="46" fontFamily="monospace" fontSize="11" fill="rgba(245,243,239,.35)">User Interview · Session 3</text>
                    {[0,1,2,3,4].map((i) => (
                      <rect key={i} x="20" y={74 + i * 28} width={160 + (i % 3) * 40} height="14" rx="0" fill="rgba(245,243,239,.06)" className="rjblink" style={{ '--d': `${i * 0.3}s` } as React.CSSProperties}/>
                    ))}
                    <circle cx="260" cy="150" r="40" fill="none" stroke="rgba(74,86,246,.25)" strokeWidth="1" className="rjping" style={{ '--ox': '260px', '--oy': '150px' } as React.CSSProperties}/>
                    <circle cx="260" cy="150" r="8" fill="#4a56f6" />
                    <text x="238" y="154" fontFamily="monospace" fontSize="9" fill="white">Finding</text>
                  </svg>
                </div>
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
            <div className="feat__media scl">
              <div className="amini">
                <div className="amini__bar">
                  <svg className="amini__n" viewBox="0 0 15 15" fill="none"><rect x="1" y="1" width="13" height="13" rx="2" stroke="rgba(245,243,239,.3)" strokeWidth="1"/></svg>
                  Wireframe · Dashboard v3
                  <span className="amini__live">Live</span>
                </div>
                <div className="amini__stage" style={{ minHeight: 240 }}>
                  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="280" height="24" fill="rgba(245,243,239,.04)" stroke="rgba(245,243,239,.08)" strokeWidth="1"/>
                    <rect x="20" y="56" width="60" height="164" fill="rgba(245,243,239,.03)" stroke="rgba(245,243,239,.06)" strokeWidth="1"/>
                    {[0,1,2,3,4].map((i) => <rect key={i} x="28" y={68+i*24} width="44" height="14" rx="0" fill={i===0?"rgba(74,86,246,.35)":"rgba(245,243,239,.05)"} className="rjblink" style={{ '--d': `${i*0.2}s` } as React.CSSProperties}/>)}
                    <rect x="90" y="56" width="210" height="74" fill="rgba(245,243,239,.02)" stroke="rgba(245,243,239,.07)" strokeWidth="1"/>
                    <rect x="90" y="140" width="100" height="80" fill="rgba(245,243,239,.02)" stroke="rgba(245,243,239,.07)" strokeWidth="1"/>
                    <rect x="200" y="140" width="100" height="80" fill="rgba(245,243,239,.02)" stroke="rgba(245,243,239,.07)" strokeWidth="1"/>
                  </svg>
                </div>
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
            <div className="feat__media scl">
              <div className="amini">
                <div className="amini__bar">
                  <svg className="amini__n" viewBox="0 0 15 15" fill="none"><rect x="1" y="1" width="13" height="13" rx="2" stroke="rgba(245,243,239,.3)" strokeWidth="1"/></svg>
                  Design System · Tokens
                  <span className="amini__live">v4.2</span>
                </div>
                <div className="amini__stage" style={{ minHeight: 240 }}>
                  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
                    {[0,1,2,3,4,5,6,7].map((i) => {
                      const col = i % 4; const row = Math.floor(i / 4);
                      return <rect key={i} x={20+col*76} y={20+row*100} width="64" height="86" rx="0" fill={i===5?"rgba(74,86,246,.2)":"rgba(245,243,239,.03)"} stroke="rgba(245,243,239,.09)" strokeWidth="1" className="rjtile" style={{ '--d': `${i*0.2}s` } as React.CSSProperties}/>;
                    })}
                    <rect x="96" y="120" width="64" height="86" className="rjtileax" style={{ '--d': '1s' } as React.CSSProperties}/>
                  </svg>
                </div>
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
            <div className="feat__media scl">
              <div className="amini">
                <div className="amini__bar">
                  <svg className="amini__n" viewBox="0 0 15 15" fill="none"><rect x="1" y="1" width="13" height="13" rx="2" stroke="rgba(245,243,239,.3)" strokeWidth="1"/></svg>
                  Prototype · Mobile Flow
                  <span className="amini__live">Testing</span>
                </div>
                <div className="amini__stage" style={{ minHeight: 240 }}>
                  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
                    {[0,1,2].map((i) => (
                      <rect key={i} x={60+i*76} y="30" width="60" height="108" rx="8" fill="rgba(245,243,239,.04)" stroke={i===1?"rgba(74,86,246,.6)":"rgba(245,243,239,.1)"} strokeWidth="1.5"/>
                    ))}
                    <line x1="120" y1="84" x2="136" y2="84" stroke="rgba(74,86,246,.7)" strokeWidth="1.5" markerEnd="url(#arr)"/>
                    <line x1="196" y1="84" x2="212" y2="84" stroke="rgba(74,86,246,.7)" strokeWidth="1.5"/>
                    <circle cx="160" cy="168" r="18" fill="none" stroke="rgba(74,86,246,.4)" strokeWidth="1.5" className="rjtap" style={{ '--d': '0.2s' } as React.CSSProperties}/>
                    <circle cx="160" cy="168" r="5" fill="#4a56f6" />
                    <text x="136" y="210" fontFamily="monospace" fontSize="9" fill="rgba(245,243,239,.3)">Tap to advance</text>
                  </svg>
                </div>
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
          <Link href="/contact" className="pill">
            Start a conversation <span className="a">→</span>
          </Link>
          <a href="mailto:hello@nishan.space" className="pill pill--ghost">
            hello@nishan.space
          </a>
        </div>
      </section>
    </div>
  );
}
