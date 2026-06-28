'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CaseStudy } from '@/lib/cases';

/* ─── per-case content maps ─────────────────────────── */

const LUMEN_SCREENS = [
  { src: '/assets/lumen/home-dark.png', lightSrc: '/assets/lumen/home-light.png', label: 'Home', sub: 'Portfolio overview' },
  { src: '/assets/lumen/proAnalysis-dark.png', lightSrc: '/assets/lumen/proAnalysis-light.png', label: 'AI Analysis', sub: 'Pro market intelligence' },
  { src: '/assets/lumen/feeBreakdown-dark.png', lightSrc: '/assets/lumen/feeBreakdown-light.png', label: 'Fee Breakdown', sub: 'Transparent costs' },
  { src: '/assets/lumen/explore-dark.png', lightSrc: '/assets/lumen/explore-light.png', label: 'Explore', sub: 'Asset discovery' },
  { src: '/assets/lumen/askLumi-dark.png', lightSrc: '/assets/lumen/askLumi-light.png', label: 'Ask Lumi', sub: 'AI companion' },
  { src: '/assets/lumen/coinDetail-dark.png', lightSrc: '/assets/lumen/coinDetail-light.png', label: 'Coin Detail', sub: 'Deep dive' },
  { src: '/assets/lumen/tradeAmount-dark.png', lightSrc: '/assets/lumen/tradeAmount-light.png', label: 'Trade', sub: 'Buy/sell flow' },
  { src: '/assets/lumen/confirm-dark.png', lightSrc: '/assets/lumen/confirm-light.png', label: 'Confirm', sub: 'Review & confirm' },
];

const POCIAL_SCREENS = [
  { src: '/assets/pocial-home.png', label: 'Dashboard', sub: 'Content overview' },
  { src: '/assets/pocial-calendar.png', label: 'Calendar', sub: 'Scheduled posts' },
  { src: '/assets/pocial-macbook.png', label: 'Macbook view', sub: 'Desktop experience' },
  { src: '/assets/po-composer.png', label: 'Composer', sub: 'AI content creation' },
  { src: '/assets/po-ai.png', label: 'AI Assist', sub: 'Smart suggestions' },
  { src: '/assets/po-campaign.png', label: 'Campaigns', sub: 'Campaign management' },
  { src: '/assets/po-performance.png', label: 'Analytics', sub: 'Performance metrics' },
  { src: '/assets/po-schedule.png', label: 'Schedule', sub: 'Optimal timing' },
];

const EBINAA_WEB = [
  { src: '/assets/ds-00-homepage.png', label: 'Homepage', sub: 'Platform landing' },
  { src: '/assets/ds-01-opportunities.png', label: 'Opportunities', sub: 'Active tenders' },
  { src: '/assets/ds-02-pending.png', label: 'Pending', sub: 'Bid management' },
  { src: '/assets/ds-03-pending-ar.png', label: 'Arabic view', sub: 'RTL layout' },
  { src: '/assets/ds-04-awarded-card.png', label: 'Awarded', sub: 'Won contracts' },
  { src: '/assets/ds-07-profile.png', label: 'Profile', sub: 'Contractor profile' },
];

const EBINAA_APP = [
  { src: '/assets/app-01-home.png', label: 'Home', sub: 'Dashboard' },
  { src: '/assets/app-02-design.png', label: 'Design', sub: 'Project design' },
  { src: '/assets/app-07-consultant.png', label: 'Consultant', sub: 'Expert view' },
  { src: '/assets/app-08-contractor.png', label: 'Contractor', sub: 'Contractor portal' },
  { src: '/assets/app-11-buy.png', label: 'Buy', sub: 'Property purchase' },
  { src: '/assets/app-13-property.png', label: 'Property', sub: 'Listing detail' },
  { src: '/assets/app-15-build-ar.png', label: 'Build (AR)', sub: 'Arabic interface' },
];

/* ─── Lumen page ────────────────────────────────────── */
function LumenPage({ c }: { c: CaseStudy }) {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  return (
    <>
      <div className="cwrap">
        {/* Hero phones */}
        <div className="lstage">
          <figure className="side">
            <Image src={mode === 'dark' ? '/assets/lumen/proAnalysis-dark.png' : '/assets/lumen/proAnalysis-light.png'} alt="Lumen AI analysis" width={238} height={515} className="lumen-phone" />
          </figure>
          <figure className="mid">
            <Image src={mode === 'dark' ? '/assets/lumen/home-dark.png' : '/assets/lumen/home-light.png'} alt="Lumen home" width={300} height={648} className="lumen-phone" />
          </figure>
          <figure className="side">
            <Image src={mode === 'dark' ? '/assets/lumen/feeBreakdown-dark.png' : '/assets/lumen/feeBreakdown-light.png'} alt="Lumen fee breakdown" width={238} height={515} className="lumen-phone" />
          </figure>
        </div>

        {/* Mode toggle */}
        <div className="lmodebar" style={{ marginTop: 32 }}>
          <span className="lmodebar__k">Appearance</span>
          <div className="lmode">
            <button className={mode === 'dark' ? 'on' : ''} onClick={() => setMode('dark')}>Dark</button>
            <button className={mode === 'light' ? 'on' : ''} onClick={() => setMode('light')}>Light</button>
          </div>
        </div>

        {/* Facts */}
        <div className="cfacts rv">
          {c.facts.map((f) => (
            <div key={f.label} className="cfact">
              <p className="cfact__l">{f.label}</p>
              <p className="cfact__v">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">Overview</aside>
            <div>
              <h2 className="csec__title rv">Crypto investing has a trust problem</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                <p>First-time crypto investors face two compounding problems: the technology is genuinely complex, and the interfaces built on top of it tend to amplify rather than reduce that complexity. The result is high abandonment, low engagement, and a user base that never gets past their first transaction.</p>
                <p>Lumen's premise is that AI can bridge this gap — not as a gimmick, but as a genuine companion that explains every market movement, every fee, every decision point in plain language. <b>The product goal was to make crypto feel calm.</b></p>
              </div>
              <div className="cimpact rv" style={{ transitionDelay: '0.2s' }}>
                {[
                  { n: '78%', l: 'Task completion rate on first trade flow' },
                  { n: '4.8★', l: 'App Store target rating' },
                  { n: '3min', l: 'Median time from sign-up to first trade' },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="cnum__n">{m.n}</div>
                    <p className="cnum__l">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen tour */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">Screens</aside>
            <div>
              <h2 className="csec__title rv">Full app walkthrough</h2>
              <p className="lmodebar__k" style={{ margin: '16px 0 24px' }}>Toggle between dark and light themes above</p>

              <p className="lstripcap">Onboarding & Home</p>
              <div className="lstrip">
                {LUMEN_SCREENS.slice(0, 4).map((s) => (
                  <figure key={s.label} className="lshot">
                    <Image src={mode === 'dark' ? s.src : s.lightSrc} alt={s.label} width={228} height={492} />
                    <figcaption><b>{s.label}</b><br />{s.sub}</figcaption>
                  </figure>
                ))}
              </div>

              <p className="lstripcap" style={{ marginTop: 40 }}>AI & Trading Flows</p>
              <div className="lstrip">
                {LUMEN_SCREENS.slice(4).map((s) => (
                  <figure key={s.label} className="lshot">
                    <Image src={mode === 'dark' ? s.src : s.lightSrc} alt={s.label} width={228} height={492} />
                    <figcaption><b>{s.label}</b><br />{s.sub}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">Design decisions</aside>
            <div>
              <h2 className="csec__title rv">Key design decisions</h2>
              <div className="ldiff rv" style={{ transitionDelay: '0.1s' }}>
                <div className="ldiff__c">
                  <p className="ldiff__k">Before</p>
                  <p className="ldiff__t">Raw market data</p>
                  <p className="ldiff__d">Price charts, percentage swings, and technical indicators presented without context — leaving users to interpret the signals themselves.</p>
                </div>
                <div className="ldiff__c">
                  <p className="ldiff__k">After</p>
                  <p className="ldiff__t">AI-narrated insights</p>
                  <p className="ldiff__d">Lumi, the AI companion, contextualises every data point — explaining why prices moved, what it means for the portfolio, and what actions make sense.</p>
                </div>
              </div>
              <div className="ldiff rv" style={{ transitionDelay: '0.15s', marginTop: 18 }}>
                <div className="ldiff__c">
                  <p className="ldiff__k">Before</p>
                  <p className="ldiff__t">Hidden fees</p>
                  <p className="ldiff__d">Fee structures buried in small print — users discovered the true cost only after committing to a trade.</p>
                </div>
                <div className="ldiff__c">
                  <p className="ldiff__k">After</p>
                  <p className="ldiff__t">Transparent breakdown</p>
                  <p className="ldiff__d">A dedicated fee breakdown screen surfaces every cost — network fee, platform fee, spread — before confirmation, with plain-English explanations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Pocial page ───────────────────────────────────── */
function PocialPage({ c }: { c: CaseStudy }) {
  return (
    <>
      <div className="cwrap">
        {/* Hero image */}
        <div className="scl rv" style={{ marginTop: 40 }}>
          <Image src="/assets/pocial-macbook.png" alt="Pocial on MacBook" width={1180} height={700} style={{ width: '100%', height: 'auto', borderRadius: 0 }} priority />
        </div>

        {/* Facts */}
        <div className="cfacts rv" style={{ transitionDelay: '0.15s' }}>
          {c.facts.map((f) => (
            <div key={f.label} className="cfact">
              <p className="cfact__l">{f.label}</p>
              <p className="cfact__v">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">Overview</aside>
            <div>
              <h2 className="csec__title rv">Social media management for lean teams</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                <p>Growing brands and lean marketing teams face an impossible content demand: post consistently across 5+ channels, maintain brand voice, optimise for each platform's algorithm, and somehow find time to actually run the business.</p>
                <p>Pocial's answer is AI that learns your brand and writes in your voice — generating on-brand posts, scheduling for optimal engagement, and surfacing the insights that matter. <b>The design challenge was making powerful AI feel approachable.</b></p>
              </div>
              <div className="cimpact rv" style={{ transitionDelay: '0.2s' }}>
                {[
                  { n: '6x', l: 'Content output vs manual workflow' },
                  { n: '40%', l: 'Increase in average engagement rate' },
                  { n: '8hrs', l: 'Saved per week per marketer' },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="cnum__n">{m.n}</div>
                    <p className="cnum__l">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard screens */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">Screens</aside>
            <div>
              <h2 className="csec__title rv">Web platform</h2>
              <div className="cgal rv" style={{ transitionDelay: '0.1s', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                {POCIAL_SCREENS.slice(0, 4).map((s) => (
                  <figure key={s.label} className="cshot">
                    <Image src={s.src} alt={s.label} width={600} height={380} style={{ width: '100%', height: 'auto' }} />
                    <figcaption>{s.label} — {s.sub}</figcaption>
                  </figure>
                ))}
              </div>

              <h2 className="csec__title rv" style={{ marginTop: 48, transitionDelay: '0.05s' }}>Mobile app</h2>
              <div className="cmob rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { src: '/assets/pocial-mob-ai-overview.png', label: 'AI Overview' },
                  { src: '/assets/pocial-mob-ai-vault.png', label: 'AI Vault' },
                  { src: '/assets/pocial-mob-post.png', label: 'Post creation' },
                  { src: '/assets/pocial-mob-ugc.png', label: 'UGC tools' },
                ].map((s) => (
                  <figure key={s.label} className="cphone">
                    <Image src={s.src} alt={s.label} width={200} height={432} style={{ width: '100%', height: 'auto', borderRadius: 18 }} />
                    <figcaption>{s.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="csec">
        <div className="cwrap cwrap--narrow">
          <div className="cpull rv">
            <p className="cpull__q">"The challenge wasn't building an AI that could write — it was building one that could write <em>as your brand</em>. The design had to make that distinction visible and controllable."</p>
            <p className="cpull__a">Nishan Singh, Lead Product Designer</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── eBinaa page ───────────────────────────────────── */
function EBinaaPage({ c }: { c: CaseStudy }) {
  return (
    <>
      <div className="cwrap">
        {/* Hero desktop screenshot */}
        <div className="scl rv" style={{ marginTop: 40 }}>
          <Image src="/assets/ds-00-homepage.png" alt="eBinaa homepage" width={1180} height={700} style={{ width: '100%', height: 'auto' }} priority />
        </div>

        {/* Facts */}
        <div className="cfacts rv" style={{ transitionDelay: '0.15s' }}>
          {c.facts.map((f) => (
            <div key={f.label} className="cfact">
              <p className="cfact__l">{f.label}</p>
              <p className="cfact__v">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">Overview</aside>
            <div>
              <h2 className="csec__title rv">Building Oman's construction marketplace</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                <p>Oman's construction sector runs on relationships and phone calls. Property owners struggle to find vetted contractors; contractors have no digital presence or lead pipeline. eBinaa sets out to fix this — a bilingual platform where both groups can find, evaluate, and work together with confidence.</p>
                <p>The design challenge was multilayered: <b>bilingual Arabic/English with full RTL support</b>, three distinct user personas (property owners, contractors, consultants), and complex project workflows in a low-digital-literacy market.</p>
              </div>
              <div className="cimpact rv" style={{ transitionDelay: '0.2s' }}>
                {[
                  { n: '100%', l: 'RTL/LTR parity across all screens' },
                  { n: '3', l: 'Distinct user personas with unique flows' },
                  { n: '2', l: 'Languages — Arabic and English, feature-complete' },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="cnum__n">{m.n}</div>
                    <p className="cnum__l">{m.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web screens */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">Web portal</aside>
            <div>
              <h2 className="csec__title rv">Contractor portal — web</h2>
              <div className="cgal rv" style={{ transitionDelay: '0.1s', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                {EBINAA_WEB.map((s) => (
                  <figure key={s.label} className="cshot">
                    <Image src={s.src} alt={s.label} width={580} height={380} style={{ width: '100%', height: 'auto' }} />
                    <figcaption>{s.label} — {s.sub}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile app screens */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">Mobile app</aside>
            <div>
              <h2 className="csec__title rv">Mobile experience</h2>
              <div className="cmob rv" style={{ transitionDelay: '0.1s' }}>
                {EBINAA_APP.map((s) => (
                  <figure key={s.label} className="cphone">
                    <Image src={s.src} alt={s.label} width={200} height={432} style={{ width: '100%', height: 'auto', borderRadius: 18 }} />
                    <figcaption>{s.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="csec">
        <div className="cwrap cwrap--narrow">
          <div className="cpull rv">
            <p className="cpull__q">"Designing RTL isn't a checkbox — it's a completely different spatial logic. Every layout decision made for LTR had to be interrogated for RTL. Some patterns need to mirror; some don't. Learning which is which took real time with Arabic-first users."</p>
            <p className="cpull__a">Nishan Singh, Lead Product Designer</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Main client component ─────────────────────────── */
export default function CaseStudyClient({ caseStudy: c }: { caseStudy: CaseStudy }) {
  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); ob.unobserve(e.target); }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.rv, .scl, .rv-s').forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, []);

  return (
    <article style={{ paddingBottom: 'clamp(60px,8vw,120px)' }}>
      {/* Breadcrumb */}
      <div className="cback">
        <Link href="/#work">← Work</Link>
        <span className="sep">/</span>
        <b>{c.title}</b>
      </div>

      {/* Hero */}
      <header className="chero cwrap" style={{ paddingBottom: 0 }}>
        <div className="chero__ey">
          <span className="dot" />
          <span className="nm">{c.title}</span>
          <span className="sep">·</span>
          <span>Case Study</span>
          <span className="sep">·</span>
          <span>{c.tagline}</span>
        </div>
        <h1 className="chero__title rv">
          {c.heroTitle} <em className="ax">{c.heroTitleAccent}</em>
        </h1>
        <p className="chero__lede rv" style={{ transitionDelay: '0.1s' }}>{c.lede}</p>
      </header>

      {/* Per-case content */}
      {c.slug === 'lumen' && <LumenPage c={c} />}
      {c.slug === 'pocial' && <PocialPage c={c} />}
      {c.slug === 'ebinaa' && <EBinaaPage c={c} />}

      {/* Next case */}
      <div className="cwrap">
        <div className="cnext rv">
          <p className="cnext__l">Next case study</p>
          <Link href={`/case-studies/${c.nextSlug}`}>
            <h2 className="cnext__title">
              {c.nextTitle} <span className="cnext__sub">— {c.nextSub}</span>
            </h2>
            <span className="cnext__link">View case study →</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
