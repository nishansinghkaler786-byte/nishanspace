'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CaseStudy } from '@/lib/cases';

/* ─── per-case screen data ──────────────────────────── */

const LUMEN_ONBOARDING = [
  { src: '/assets/lumen/splash-dark.png', lightSrc: '/assets/lumen/splash-light.png', label: 'Splash', sub: 'Launch screen' },
  { src: '/assets/lumen/welcome-dark.png', lightSrc: '/assets/lumen/welcome-light.png', label: 'Welcome', sub: 'Onboarding intro' },
  { src: '/assets/lumen/signup-dark.png', lightSrc: '/assets/lumen/signup-light.png', label: 'Sign Up', sub: 'Account creation' },
  { src: '/assets/lumen/login-dark.png', lightSrc: '/assets/lumen/login-light.png', label: 'Login', sub: 'Secure entry' },
  { src: '/assets/lumen/verifyIntro-dark.png', lightSrc: '/assets/lumen/verifyIntro-light.png', label: 'Verify Intro', sub: 'KYC start' },
  { src: '/assets/lumen/verifyCapture-dark.png', lightSrc: '/assets/lumen/verifyCapture-light.png', label: 'Verify Capture', sub: 'ID capture' },
  { src: '/assets/lumen/verifyStatus-dark.png', lightSrc: '/assets/lumen/verifyStatus-light.png', label: 'Verify Status', sub: 'Pending review' },
];

const LUMEN_CORE = [
  { src: '/assets/lumen/home-dark.png', lightSrc: '/assets/lumen/home-light.png', label: 'Home', sub: 'Portfolio overview' },
  { src: '/assets/lumen/explore-dark.png', lightSrc: '/assets/lumen/explore-light.png', label: 'Explore', sub: 'Asset discovery' },
  { src: '/assets/lumen/coinDetail-dark.png', lightSrc: '/assets/lumen/coinDetail-light.png', label: 'Coin Detail', sub: 'Deep dive' },
  { src: '/assets/lumen/news-dark.png', lightSrc: '/assets/lumen/news-light.png', label: 'News', sub: 'Market updates' },
  { src: '/assets/lumen/proAnalysis-dark.png', lightSrc: '/assets/lumen/proAnalysis-light.png', label: 'AI Analysis', sub: 'Pro market intelligence' },
  { src: '/assets/lumen/askLumi-dark.png', lightSrc: '/assets/lumen/askLumi-light.png', label: 'Ask Lumi', sub: 'AI companion' },
  { src: '/assets/lumen/profile-dark.png', lightSrc: '/assets/lumen/profile-light.png', label: 'Profile', sub: 'Account settings' },
  { src: '/assets/lumen/card-dark.png', lightSrc: '/assets/lumen/card-light.png', label: 'Card', sub: 'Payment card' },
];

const LUMEN_TRADING = [
  { src: '/assets/lumen/tradeCoin-dark.png', lightSrc: '/assets/lumen/tradeCoin-light.png', label: 'Trade Coin', sub: 'Asset selection' },
  { src: '/assets/lumen/tradeAmount-dark.png', lightSrc: '/assets/lumen/tradeAmount-light.png', label: 'Trade Amount', sub: 'Buy/sell flow' },
  { src: '/assets/lumen/feeBreakdown-dark.png', lightSrc: '/assets/lumen/feeBreakdown-light.png', label: 'Fee Breakdown', sub: 'Transparent costs' },
  { src: '/assets/lumen/confirm-dark.png', lightSrc: '/assets/lumen/confirm-light.png', label: 'Confirm', sub: 'Review & confirm' },
  { src: '/assets/lumen/success-dark.png', lightSrc: '/assets/lumen/success-light.png', label: 'Success', sub: 'Trade complete' },
  { src: '/assets/lumen/recurring-dark.png', lightSrc: '/assets/lumen/recurring-light.png', label: 'Recurring', sub: 'Auto-invest' },
  { src: '/assets/lumen/addMoney-dark.png', lightSrc: '/assets/lumen/addMoney-light.png', label: 'Add Money', sub: 'Fund wallet' },
  { src: '/assets/lumen/withdrawLock-dark.png', lightSrc: '/assets/lumen/withdrawLock-light.png', label: 'Withdraw', sub: 'Withdraw funds' },
];

const POCIAL_DESKTOP = [
  { src: '/assets/pocial-home.png', label: 'Dashboard', sub: 'Content overview' },
  { src: '/assets/pocial-calendar.png', label: 'Calendar', sub: 'Scheduled posts' },
  { src: '/assets/po-composer.png', label: 'Composer', sub: 'AI content creation' },
  { src: '/assets/po-ai.png', label: 'AI Assist', sub: 'Smart suggestions' },
  { src: '/assets/po-campaign.png', label: 'Campaigns', sub: 'Campaign management' },
  { src: '/assets/po-performance.png', label: 'Analytics', sub: 'Performance metrics' },
  { src: '/assets/po-schedule.png', label: 'Schedule', sub: 'Optimal timing' },
  { src: '/assets/po-engagement.png', label: 'Engagement', sub: 'Audience insights' },
  { src: '/assets/po-ugc.png', label: 'UGC', sub: 'User-generated content' },
  { src: '/assets/po-newsletter.png', label: 'Newsletter', sub: 'Email campaigns' },
  { src: '/assets/po-segment.png', label: 'Segments', sub: 'Audience targeting' },
  { src: '/assets/po-accounts.png', label: 'Accounts', sub: 'Connected channels' },
  { src: '/assets/po-create.png', label: 'Create', sub: 'New post flow' },
  { src: '/assets/po-login.png', label: 'Login', sub: 'Onboarding' },
];

const POCIAL_MOBILE = [
  { src: '/assets/pocial-mob-ai-overview.png', label: 'AI Overview', sub: 'Insights feed' },
  { src: '/assets/pocial-mob-ai-vault.png', label: 'AI Vault', sub: 'Content library' },
  { src: '/assets/pocial-mob-post.png', label: 'Post creation', sub: 'Quick compose' },
  { src: '/assets/pocial-mob-ugc.png', label: 'UGC tools', sub: 'User content' },
];

const EBINAA_WEB = [
  { src: '/assets/ds-00-homepage.png', label: 'Homepage', sub: 'Platform landing' },
  { src: '/assets/ds-01-opportunities.png', label: 'Opportunities', sub: 'Active tenders' },
  { src: '/assets/ds-02-pending.png', label: 'Pending', sub: 'Bid management' },
  { src: '/assets/ds-03-pending-ar.png', label: 'Arabic view', sub: 'RTL layout' },
  { src: '/assets/ds-04-awarded-card.png', label: 'Awarded (Card)', sub: 'Won contracts' },
  { src: '/assets/ds-05-awarded-list.png', label: 'Awarded (List)', sub: 'List view' },
  { src: '/assets/ds-06-listed.png', label: 'Listed', sub: 'Published project' },
  { src: '/assets/ds-07-profile.png', label: 'Profile', sub: 'Contractor profile' },
  { src: '/assets/ds-08-public-profile.png', label: 'Public Profile', sub: 'Visible to owners' },
  { src: '/assets/ds-09-public-projects.png', label: 'Public Projects', sub: 'Portfolio display' },
  { src: '/assets/ds-10-public-projects2.png', label: 'Projects Alt', sub: 'Secondary view' },
  { src: '/assets/ds-11-employees.png', label: 'Employees', sub: 'Team management' },
  { src: '/assets/ds-12-services.png', label: 'Services', sub: 'Service catalogue' },
  { src: '/assets/ds-13-reviews.png', label: 'Reviews', sub: 'Ratings & feedback' },
];

const EBINAA_APP = [
  { src: '/assets/app-01-home.png', label: 'Home', sub: 'Dashboard' },
  { src: '/assets/app-02-design.png', label: 'Design', sub: 'Project design' },
  { src: '/assets/app-03-design.png', label: 'Design Detail', sub: 'Design specs' },
  { src: '/assets/app-04-build.png', label: 'Build', sub: 'Construction phase' },
  { src: '/assets/app-05-build.png', label: 'Build Detail', sub: 'Progress tracking' },
  { src: '/assets/app-06-build.png', label: 'Build Alt', sub: 'Alternative view' },
  { src: '/assets/app-07-consultant.png', label: 'Consultant', sub: 'Expert view' },
  { src: '/assets/app-08-contractor.png', label: 'Contractor', sub: 'Contractor portal' },
  { src: '/assets/app-09-contractor.png', label: 'Contractor Alt', sub: 'Secondary view' },
  { src: '/assets/app-10-contract.png', label: 'Contract', sub: 'Agreement flow' },
  { src: '/assets/app-11-buy.png', label: 'Buy', sub: 'Property purchase' },
  { src: '/assets/app-12-buy.png', label: 'Buy Detail', sub: 'Purchase detail' },
  { src: '/assets/app-13-property.png', label: 'Property', sub: 'Listing detail' },
  { src: '/assets/app-14-profile.png', label: 'Profile', sub: 'User profile' },
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
            <aside className="csplit__aside">01 / Overview</aside>
            <div>
              <h2 className="csec__title rv">A first crypto app that explains itself.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                <p>Lumen helps a cautious first-timer buy and hold crypto without the usual anxiety. The product is built around one promise: you should never tap a button you don&apos;t understand. Lumi — an AI guide — sits one tap away on every screen to explain spreads, fees, holds and signals in human language.</p>
                <p>The whole experience was designed as a system: onboarding and KYC, a three-tap buy, a wallet, an explore surface, market news, and a pro charting mode — each shipped in a full light and dark theme so it feels native on any phone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">02 / Challenge</aside>
            <div>
              <h2 className="csec__title rv">For most people, buying crypto feels like a trap.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '01', t: 'Hidden costs.', d: 'Spreads and network fees are buried, so people never know what a trade actually costs until it\'s done.' },
                  { n: '02', t: 'Fear of a wrong move.', d: 'The vocabulary is hostile and irreversible-feeling — one tap and your money is gone into something you don\'t understand.' },
                  { n: '03', t: 'No one to ask.', d: 'When something looks wrong — a withdrawal on hold, a confusing chart — there\'s no calm, trustworthy voice to explain what\'s happening.' },
                ].map((item) => (
                  <div key={item.n} style={{ marginBottom: 20 }}>
                    <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: '#4a56f6', letterSpacing: '.06em', marginBottom: 6 }}>{item.n}</p>
                    <p><b>{item.t}</b> {item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">03 / Research</aside>
            <div>
              <h2 className="csec__title rv">I designed for the cautious first-timer.</h2>
              <div className="cpgrid rv" style={{ transitionDelay: '0.1s' }}>
                {/* Dami */}
                <div className="cper">
                  <div className="cper__head">
                    <div className="cper__av">D</div>
                    <div>
                      <p className="cper__name">Dami Paswani</p>
                      <p className="cper__role">First-time crypto buyer</p>
                      <p className="cper__ctx">Wants to start small · risk-aware · time-poor</p>
                    </div>
                  </div>
                  <div className="cper__cols">
                    <div>
                      <h5>Goals</h5>
                      <ul>
                        <li>Buy a little, safely, without studying</li>
                        <li>Know the full cost before confirming</li>
                        <li>Get a plain answer when confused</li>
                      </ul>
                    </div>
                    <div className="cper__col--pain">
                      <h5>Pain Points</h5>
                      <ul>
                        <li>Distrusts hidden fees and spreads</li>
                        <li>Scared of an irreversible mistake</li>
                        <li>Jargon makes them feel out of place</li>
                      </ul>
                    </div>
                  </div>
                  <p className="cper__quote">&ldquo;I just want to know exactly what it costs and that I didn&apos;t mess anything up.&rdquo;</p>
                </div>
                {/* Lumi */}
                <div className="cper">
                  <div className="cper__head">
                    <div className="cper__av" style={{ background: '#4a56f6' }}>L</div>
                    <div>
                      <p className="cper__name">Lumi · the AI guide</p>
                      <p className="cper__role">The product&apos;s point of view</p>
                      <p className="cper__ctx">Explain · reassure · never oversell</p>
                    </div>
                  </div>
                  <div className="cper__cols">
                    <div>
                      <h5>What it does</h5>
                      <ul>
                        <li>Translates fees, spreads &amp; holds</li>
                        <li>Reads charts into a plain signal</li>
                        <li>Reassures during waits &amp; locks</li>
                      </ul>
                    </div>
                    <div className="cper__col--pain">
                      <h5>What it never does</h5>
                      <ul>
                        <li>Push a trade or hype a coin</li>
                        <li>Hide a cost or bury a risk</li>
                        <li>Leave a dead end with no answer</li>
                      </ul>
                    </div>
                  </div>
                  <p className="cper__quote">&ldquo;I&apos;ll show you exactly what every trade costs before you tap buy — and explain anything confusing.&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Definition */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">04 / Problem</aside>
            <div>
              <h2 className="csec__title rv">It came down to one question.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Lumen wouldn&apos;t win on coin selection or trading power — bigger apps own that. It would win or lose on whether a nervous beginner felt safe, informed and in control at every step.</p>
              </div>
              <div className="chmw rv" style={{ transitionDelay: '0.12s' }}>
                <span className="lead">How might we</span>
                Let someone who finds crypto intimidating buy and hold it with total confidence — where every cost is shown upfront, every step is reversible-feeling, and an honest AI guide is always one tap away?
              </div>
              <div className="cprins rv-s" style={{ transitionDelay: '0.15s' }}>
                {[
                  { n: '01', t: 'Cost before commitment.', d: 'No fee is ever a surprise. The full breakdown is shown — and explained — before the buy.' },
                  { n: '02', t: 'An honest guide, not a salesman.', d: 'Lumi clarifies and reassures. It never hypes a coin or pushes a trade.' },
                  { n: '03', t: 'Calm in both modes.', d: 'A full light and dark theme, each tuned so the product feels quiet, never frantic.' },
                ].map((p) => (
                  <div key={p.n} className="cprin">
                    <p className="cprin__n">{p.n}</p>
                    <h3 className="cprin__t">{p.t}</h3>
                    <p className="cprin__d">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Idea */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">05 / Big Idea</aside>
            <div>
              <h2 className="csec__title rv">Lumi — trust, built into the product.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Rather than reassure with marketing copy, Lumen builds trust into the mechanics. Three promises — made on the first screen and kept on every screen after it — carry the entire product.</p>
              </div>
              <div className="cpaths rv" style={{ transitionDelay: '0.12s' }}>
                {[
                  { tag: 'Pillar 01', t: 'Buy in seconds.', b: 'Three taps to your first coin — choose, enter an amount, confirm. No order book to decode.' },
                  { tag: 'Pillar 02', t: 'Fees shown upfront.', b: 'Coin amount, spread, network and platform fees — the total cost, itemised, before you confirm.' },
                  { tag: 'Pillar 03', t: 'Your funds are protected.', b: 'Insured, audited and status-tracked — with security holds that explain themselves instead of alarming you.' },
                ].map((p) => (
                  <div key={p.tag} className="cpath">
                    <p className="cpath__tag">{p.tag}</p>
                    <h3 className="cpath__t">{p.t}</h3>
                    <p className="cpath__b">{p.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">06 / Architecture</aside>
            <div>
              <h2 className="csec__title rv">One map a beginner can hold in their head.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>The product is organised around six surfaces — onboarding, home, trade, markets, wallet and profile. Lumi reaches across all of them; there&apos;s no separate &ldquo;AI section,&rdquo; just a guide you can summon anywhere.</p>
              </div>
              <div className="cmap rv" style={{ transitionDelay: '0.12s' }}>
                <div className="cmap__root"><span className="d" />Lumen App</div>
                <div className="cmap__cols" style={{ gridTemplateColumns: 'repeat(6,1fr)' }}>
                  {[
                    { node: 'A. Onboarding', leaves: ['Splash', 'Log in', 'Sign up', 'Meet Lumi', 'Verify (KYC)', 'Status'] },
                    { node: 'B. Home', leaves: ['Total balance', 'Quick buy / sell', 'Lumi nudge', 'Starter coins'] },
                    { node: 'C. Trade', leaves: ['Choose coin', 'Amount → fees', 'Recurring buys', 'Add money'] },
                    { node: 'D. Markets', leaves: ['Coin detail', 'Pro analysis', 'Signal', 'News', 'Report'] },
                    { node: 'E. Wallet', leaves: ['Balances', 'Card', 'Withdrawal lock'] },
                    { node: 'F. Profile', leaves: ['Security', '2FA', 'Payment methods', 'Verification', 'Ask Lumi'] },
                  ].map((col) => (
                    <div key={col.node}>
                      <div className="cmap__node">{col.node}</div>
                      <ul className="cmap__leaves">
                        {col.leaves.map((l) => <li key={l}>{l}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">07 / User Flow</aside>
            <div>
              <h2 className="csec__title rv">From splash to a first confident trade.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>The happy path is seven honest states — trust, identity, then a buy where nothing is hidden. Verification never dead-ends: a live status tracker keeps the anxious moment legible, and news or any coin can jump you straight into an action.</p>
              </div>
              <div className="cloop rv" style={{ transitionDelay: '0.12s', gridTemplateColumns: 'repeat(4,1fr)' }}>
                {[
                  { n: '01', t: 'Splash', d: 'Trust + one CTA' },
                  { n: '02', t: 'Log in', d: 'Or sign up' },
                  { n: '03', t: 'Meet Lumi', d: 'Set expectations' },
                  { n: '04', t: 'Verify (KYC)', d: 'KYC + live status' },
                  { n: '05', t: 'Home', d: 'Balance + Buy' },
                  { n: '06', t: 'Review fees', d: 'Nothing hidden' },
                  { n: '07', t: 'Success', d: 'You own crypto' },
                ].map((s) => (
                  <div key={s.n} className="cloopstep">
                    <p className="cloopstep__n">{s.n}</p>
                    <p className="cloopstep__t">{s.t}</p>
                    <p className="cloopstep__d">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">08 / Wireframes</aside>
            <div>
              <h2 className="csec__title rv">Structure first, in grayscale.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Before any colour, I blocked out the riskiest screens as low-fidelity wireframes — proving the layout and hierarchy of the buy flow, verification and the Pro chart while they were still cheap to change.</p>
              </div>
              <div className="cwires rv" style={{ transitionDelay: '0.12s' }}>
                {[
                  { tag: 'A. Home', h: 'Balance, quick buy/sell, starter coins.' },
                  { tag: 'B. Pro analysis', h: 'Chart, indicators, Lumi signal card.' },
                  { tag: 'C. Verify (KYC)', h: 'Doc type, scan frame, capture CTA.' },
                  { tag: 'D. Fees & confirm', h: 'Itemised costs, total, slide-to-confirm.' },
                ].map((w) => (
                  <div key={w.tag} className="cwire">
                    <p className="cwire__tag">{w.tag}</p>
                    <p className="cwire__h">{w.h}</p>
                    <div className="cwb cwb--bar" style={{ width: '70%' }} />
                    <div style={{ display: 'flex', gap: 8 }}>
                      <div className="cwb cwb--block" style={{ flex: 1 }} />
                      <div className="cwb cwb--block" style={{ flex: 1 }} />
                    </div>
                    <div className="cwb cwb--line" />
                    <div className="cwb cwb--line s" />
                    <div className="cwb cwb--btn" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">09 / Design System</aside>
            <div>
              <h2 className="csec__title rv">One system, two modes.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Lumen runs on an electric-indigo primary with a calm violet atmosphere, green for gains and red for losses — defined once as shared tokens so the entire product holds together in both a deep dark theme and a bright light one.</p>
              </div>
              <div className="cds rv" style={{ transitionDelay: '0.12s' }}>
                <div className="cds__card">
                  <p className="cds__h">Palette</p>
                  <div className="cds__swatches">
                    {[['#4a56f6','Indigo'],['#7b5cf0','Violet'],['#3ddc84','Gain'],['#f0556b','Loss'],['#0c0e1a','Dark']].map(([c,n]) => (
                      <span key={n} style={{ background: c, flex: 1, height: 54, display: 'block', position: 'relative' }}>
                        <span style={{ position: 'absolute', bottom: -18, left: 0, fontSize: 10, color: 'var(--ink-faint)', fontFamily: 'var(--f-mono)', whiteSpace: 'nowrap' }}>{n}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="cds__card">
                  <p className="cds__h">Type & Components</p>
                  <div className="cds__type">
                    <p className="serif">Aa Balance</p>
                    <p className="mono">One clean sans</p>
                  </div>
                  <p className="cds__principle">Quiet by default, clear where it counts. Colour signals gains and losses; the real trust is carried by upfront costs, honest status and Lumi&apos;s plain language.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screens */}
      <section className="csec csec--wide">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">10 / Screens</aside>
            <div>
              <h2 className="csec__title rv">Every screen, in light and dark.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Real, mobile-first product end to end — onboarding and verification, the core tabs, the three-tap buy, and the wallet. Flip the toggle to see every screen redraw in the other theme; both were designed in parallel, never auto-generated.</p>
              </div>
              <div className="lmodebar" style={{ marginTop: 28, marginBottom: 32 }}>
                <span className="lmodebar__k">Theme</span>
                <div className="lmode">
                  <button className={mode === 'dark' ? 'on' : ''} onClick={() => setMode('dark')}>Dark</button>
                  <button className={mode === 'light' ? 'on' : ''} onClick={() => setMode('light')}>Light</button>
                </div>
              </div>

              <p className="lstripcap">Onboarding &amp; Verification</p>
              <div className="lstrip">
                {LUMEN_ONBOARDING.map((s) => (
                  <figure key={s.label} className="lshot">
                    <Image src={mode === 'dark' ? s.src : s.lightSrc} alt={s.label} width={228} height={492} />
                    <figcaption><b>{s.label}</b><br />{s.sub}</figcaption>
                  </figure>
                ))}
              </div>

              <p className="lstripcap" style={{ marginTop: 40 }}>Core &amp; Discovery</p>
              <div className="lstrip">
                {LUMEN_CORE.map((s) => (
                  <figure key={s.label} className="lshot">
                    <Image src={mode === 'dark' ? s.src : s.lightSrc} alt={s.label} width={228} height={492} />
                    <figcaption><b>{s.label}</b><br />{s.sub}</figcaption>
                  </figure>
                ))}
              </div>

              <p className="lstripcap" style={{ marginTop: 40 }}>The Three-Tap Buy</p>
              <div className="lstrip">
                {LUMEN_TRADING.map((s) => (
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

      {/* Validation */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">11 / Validation</aside>
            <div>
              <h2 className="csec__title rv">How I&apos;d prove the bets actually work.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Live metrics sit outside this brief, so I won&apos;t claim numbers I never measured. Instead, every risky decision ships with a validation plan: a clear hypothesis, the method I&apos;d run, and the one signal that would tell me I was right.</p>
              </div>
              <div className="cproc__cards rv" style={{ transitionDelay: '0.12s' }}>
                {[
                  { n: 'Test 01', h: 'Fee clarity', d: 'Beginners understand what a trade costs. Signal: ≥85% correctly state the total cost before confirming.' },
                  { n: 'Test 02', h: 'Three-tap buy', d: 'A first-timer can buy without help. Signal: Completion rises, drop-off falls at review.' },
                  { n: 'Test 03', h: 'Lumi trust', d: 'The AI guide reduces anxiety, not adds noise. Signal: Self-reported confidence up; Lumi rated helpful, not pushy.' },
                  { n: 'Test 04', h: 'Security holds', d: 'A withdrawal hold reassures instead of alarms. Signal: Most read it as protection, not a problem.' },
                ].map((t) => (
                  <div key={t.n} className="ccard">
                    <div className="ccard__body">
                      <p className="ccard__n">{t.n}</p>
                      <h3 className="ccard__h">{t.h}</h3>
                      <p className="ccard__d">{t.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="cimpact">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">12 / Scope</aside>
            <div>
              <h2 className="csec__title rv">Scope of the work.</h2>
              <div className="cimpact__grid rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '23', l: 'Core screens, onboarding to wallet' },
                  { n: '2', l: 'Full themes — light & dark, designed in parallel' },
                  { n: '6', l: 'Tab architecture a beginner can hold in their head' },
                  { n: '3', l: 'Taps from intent to owning your first coin' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="cnum">{s.n}</div>
                    <p className="cnum__l">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="csec">
        <div className="cwrap cwrap--narrow">
          <div className="cpull rv">
            An app for nervous beginners can&apos;t just look trustworthy — it has to make the cost and the risk <em className="ax">impossible to miss.</em>
            <p className="cpull__a">Design principle behind Lumen</p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">13 / Reflection</aside>
            <div>
              <h2 className="csec__title rv">What the project taught me.</h2>
              <div className="cref rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '01', h: 'Calm is a feature.', p: 'For an anxious beginner, restraint — fewer numbers, plainer words, slower moments — did more for trust than any reassuring graphic.' },
                  { n: '02', h: 'Transparency beats persuasion.', p: 'Showing the full cost upfront, even when it\'s higher, built more confidence than any "0% fees" headline ever could.' },
                  { n: '03', h: 'Two themes, one discipline.', p: 'Designing light and dark in parallel forced the token system to be honest — and made every component stronger in both.' },
                ].map((r) => (
                  <div key={r.n} className="cref__item">
                    <p className="cref__n">{r.n}</p>
                    <h4>{r.h}</h4>
                    <p>{r.p}</p>
                  </div>
                ))}
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
          <Image src="/assets/pocial-macbook.png" alt="Pocial on MacBook" width={1180} height={700} style={{ width: '100%', height: 'auto' }} priority />
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
            <aside className="csplit__aside">01 / Overview</aside>
            <div>
              <h2 className="csec__title rv">Marketing is hard. The design job was to make it feel effortless.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                <p>Pocial exists to solve a deeply human problem: marketing consumes people&apos;s lives. The owner is trapped between running their company and feeding the content machine; the agency is stretched thin across a dozen brands. The product promised to automate that grind — but a promise that big invites skepticism.</p>
                <p>So the design challenge wasn&apos;t visual polish. It was trust. Every screen had to make a tired, doubtful visitor feel the product was built for them — and that it would actually work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">02 / Challenge</aside>
            <div>
              <h2 className="csec__title rv">Two audiences, twenty tools, one skeptical category.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '01', t: 'Two audiences, one product.', d: 'Enterprises and agencies need scale, multi-location control, and brand compliance. Small businesses and creators need speed and simplicity. The same homepage had to win both without watering down either.' },
                  { n: '02', t: 'Twenty-plus tools in one platform.', d: 'Pile them into a sidebar and the product feels like work. The dashboard needed an organizing principle that stayed learnable as it grew.' },
                  { n: '03', t: 'A category trained to distrust.', d: '"AI marketing automation" sets off alarm bells. The interface had to earn belief at every step, not demand it.' },
                ].map((item) => (
                  <div key={item.n} style={{ marginBottom: 20 }}>
                    <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: '#4a56f6', letterSpacing: '.06em', marginBottom: 6 }}>{item.n}</p>
                    <p><b>{item.t}</b> {item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">03 / Research</aside>
            <div>
              <h2 className="csec__title rv">Before designing, I mapped who we were really designing for.</h2>
              <div className="cpgrid rv" style={{ transitionDelay: '0.1s' }}>
                {/* Maya */}
                <div className="cper">
                  <div className="cper__head">
                    <div className="cper__av">M</div>
                    <div>
                      <p className="cper__name">Maya R.</p>
                      <p className="cper__role">Social Media Manager</p>
                      <p className="cper__ctx">28 · agency-side · runs 6 client accounts</p>
                    </div>
                  </div>
                  <div className="cper__cols">
                    <div>
                      <h5>Goals</h5>
                      <ul>
                        <li>Stay consistent across every client</li>
                        <li>Hit the monthly quota without burning out</li>
                        <li>Show account leads it&apos;s working</li>
                      </ul>
                    </div>
                    <div className="cper__col--pain">
                      <h5>Pain Points</h5>
                      <ul>
                        <li>A content calendar that never ends</li>
                        <li>Six logins, ten disconnected tools</li>
                        <li>Creative burnout, no time to think</li>
                      </ul>
                    </div>
                  </div>
                  <p className="cper__quote">&ldquo;By Friday I&apos;ve made eighty posts and I couldn&apos;t tell you what any of them said.&rdquo;</p>
                </div>
                {/* Clifton */}
                <div className="cper">
                  <div className="cper__head">
                    <div className="cper__av">C</div>
                    <div>
                      <p className="cper__name">Clifton D. Cooper</p>
                      <p className="cper__role">Co-founder &amp; CEO</p>
                      <p className="cper__ctx">44 · 3-location café group · no marketing team</p>
                    </div>
                  </div>
                  <div className="cper__cols">
                    <div>
                      <h5>Goals</h5>
                      <ul>
                        <li>Stay visible online without hiring</li>
                        <li>Turn happy customers into content</li>
                        <li>Run the business, not the feed</li>
                      </ul>
                    </div>
                    <div className="cper__col--pain">
                      <h5>Pain Points</h5>
                      <ul>
                        <li>Marketing eats nights and weekends</li>
                        <li>No idea what&apos;s actually working</li>
                        <li>&ldquo;AI marketing&rdquo; sounds risky and complex</li>
                      </ul>
                    </div>
                  </div>
                  <p className="cper__quote">&ldquo;I didn&apos;t open a café to become a content creator.&rdquo;</p>
                </div>
              </div>
              <div className="cubridge rv" style={{ transitionDelay: '0.15s' }}>
                {[
                  { n: 'Finding 01', t: 'Two extremes, one product.', d: 'Led to → the dual-path architecture, so each person only sees language written for them.' },
                  { n: 'Finding 02', t: 'The enemy is time & clutter.', d: 'Led to → a deliberately flat platform with color-coded hubs instead of a tool maze.' },
                  { n: 'Finding 03', t: 'Skepticism is the real barrier.', d: 'Led to → trust earned at every step — right down to the login screen.' },
                ].map((b) => (
                  <div key={b.n}>
                    <p className="cubridge__n">{b.n}</p>
                    <p className="cubridge__t">{b.t}</p>
                    <p className="cubridge__d">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Definition */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">04 / Problem</aside>
            <div>
              <h2 className="csec__title rv">Two audiences and twenty tools collapsed into one question.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>This product wouldn&apos;t win or lose on features — it would win or lose on routing and trust. Every visitor had to feel the product was built for them, the moment they landed.</p>
              </div>
              <div className="chmw rv" style={{ transitionDelay: '0.12s' }}>
                <span className="lead">How might we</span>
                Make two very different audiences each feel the product was built for them — without building two products?
              </div>
              <div className="cprins rv-s" style={{ transitionDelay: '0.15s' }}>
                {[
                  { n: '01', t: 'Route, don\'t crowd.', d: 'Every entry point commits to one audience. No visitor sees a feature meant for the other.' },
                  { n: '02', t: 'Name the fear, then answer it.', d: 'Lead with the user\'s real anxiety, and resolve it in the same breath.' },
                  { n: '03', t: 'One system, every surface.', d: 'A single visual and interaction language from marketing site to deep platform tool.' },
                ].map((p) => (
                  <div key={p.n} className="cprin">
                    <p className="cprin__n">{p.n}</p>
                    <h3 className="cprin__t">{p.t}</h3>
                    <p className="cprin__d">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">05 / Process</aside>
            <div>
              <h2 className="csec__title rv">One process, repeated for every screen.</h2>
              <div className="cproc__cards rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '01', h: 'Immerse', d: 'Brand philosophy, business goals, and the competitive SaaS landscape.' },
                  { n: '02', h: 'Define', d: 'Five roles, two audience tracks, and the jobs each one needs done.' },
                  { n: '03', h: 'Architect', d: 'IA for a guided public site and a deliberately flat platform.' },
                  { n: '04', h: 'Flows', d: 'Onboarding, dual-path routing, and the Snap2Share loop.' },
                  { n: '05', h: 'System', d: 'Color-coded wayfinding, one card pattern, fail-safe inputs.' },
                  { n: '06', h: 'Ship', d: 'Homepage through every page, plus 25 platform screens.' },
                ].map((s) => (
                  <div key={s.n} className="ccard">
                    <div className="ccard__body">
                      <p className="ccard__n">{s.n}</p>
                      <h3 className="ccard__h">{s.h}</h3>
                      <p className="ccard__d">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Path */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">06 / Architecture</aside>
            <div>
              <h2 className="csec__title rv">One platform, two paths to success.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Rather than one-size-fits-all messaging, the whole site splits cleanly at the first decision point. Every nav branch reinforces one of two journeys — so visitors only ever see the product made for them.</p>
              </div>
              <div className="cpaths rv" style={{ transitionDelay: '0.12s' }}>
                <div className="cpath">
                  <p className="cpath__tag">Path 01 — Enterprise &amp; Agencies</p>
                  <h3 className="cpath__t">Scale your agency, not your headcount.</h3>
                  <p className="cpath__b">For teams managing many brands and locations, where compliance and capacity matter most.</p>
                  <div className="cpath__list">
                    <div>Multi-location control</div>
                    <div>Brand compliance guardrails</div>
                    <div>Team roles &amp; approvals</div>
                  </div>
                </div>
                <div className="cpath">
                  <p className="cpath__tag">Path 02 — Small Business &amp; Creators</p>
                  <h3 className="cpath__t">An effortless way to grow your business.</h3>
                  <p className="cpath__b">For owners and creators who need consistent presence without a marketing team.</p>
                  <div className="cpath__list">
                    <div>One-tap content creation</div>
                    <div>Automated scheduling</div>
                    <div>Templates that just work</div>
                  </div>
                </div>
              </div>

              {/* 5 Roles */}
              <h3 className="csec__title rv" style={{ marginTop: 56, fontSize: 'clamp(22px,2.8vw,36px)', transitionDelay: '0.05s' }}>It works for the entire marketing team.</h3>
              <div className="croles rv" style={{ transitionDelay: '0.12s' }}>
                {[
                  { k: '01', n: 'Social Media Manager', q: '"Create. Post. Done."' },
                  { k: '02', n: 'Marketing Manager', q: '"One calendar, every channel."' },
                  { k: '03', n: 'Director of Marketing', q: '"Proof it\'s working."' },
                  { k: '04', n: 'Chief Marketing Officer', q: '"Brand control at scale."' },
                  { k: '05', n: 'CEO / Owner', q: '"Claim your presence."' },
                ].map((r) => (
                  <div key={r.k} className="crole">
                    <p className="crole__k">{r.k}</p>
                    <p className="crole__n">{r.n}</p>
                    <p className="crole__q">{r.q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">07 / IA</aside>
            <div>
              <h2 className="csec__title rv">Two maps: a guided site, a flat platform.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>The marketing site is structured to route — every dropdown nudges a visitor toward their path. The platform is structured to stay out of the way — no sidebar, no deep nesting, every tool one or two taps from a single dashboard.</p>
              </div>
              <h3 style={{ fontSize: 14, color: 'var(--ink-dim)', fontFamily: 'var(--f-mono)', textTransform: 'uppercase', letterSpacing: '.06em', marginTop: 32, marginBottom: 14 }}>Platform Dashboard</h3>
              <div className="cptree__hubs rv" style={{ transitionDelay: '0.12s' }}>
                {[
                  { hc: '#2f8f86', n: 'Create', items: ['Quick Create', 'Month of Content', 'Story & Post', 'Poll / Reward'] },
                  { hc: '#c2772e', n: 'My Content', items: ['Gallery', 'Campaigns', 'Social queue', 'Emails'] },
                  { hc: '#6e57c2', n: 'Findings', items: ['Data Vault', 'Competitors', 'Social Stats', 'Lead Funnel'] },
                  { hc: '#b8456a', n: 'Features', items: ['Snap2Share', 'Scan & Go', 'Event Suite', 'Email Suite'] },
                ].map((hub) => (
                  <div key={hub.n} className="cptree__hub" style={{ '--hc': hub.hc } as React.CSSProperties}>
                    <b>{hub.n}</b>
                    <ul>{hub.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headline Formula */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">08 / Voice</aside>
            <div>
              <h2 className="csec__title rv">Every headline names a fear, then answers it.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>One recurring decision did a lot of heavy lifting: a two-part headline where the contrast phrase is always the reassurance. A skimming reader&apos;s eye lands straight on the accent word — the promise.</p>
              </div>
              <div className="cformula rv" style={{ transitionDelay: '0.12s' }}>
                <div className="cformula__row">Scale your agency, <span className="tl">not your headcount.</span></div>
                <div className="cformula__row">Capture the energy, <span className="tl">stay in the moment.</span></div>
                <div className="cformula__row">Plan a month of content, <span className="tl">not weeks.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Hubs */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">09 / Navigation</aside>
            <div>
              <h2 className="csec__title rv">20+ tools, organized by color.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>The dashboard has no sidebar. Every tool lives under one of four color-coded hubs — so wayfinding is instant and the interface stays learnable even as it scales. Color does the navigating.</p>
              </div>
              <div className="chubs rv" style={{ transitionDelay: '0.12s' }}>
                {[
                  { hc: '#2f8f86', n: 'Create', d: 'Composer, templates, and the AI campaign builder.' },
                  { hc: '#c2772e', n: 'Schedule', d: 'Calendar, queues, and automated posting.' },
                  { hc: '#6e57c2', n: 'Engage', d: 'UGC vault, inbox, and community tools.' },
                  { hc: '#b8456a', n: 'Analyze', d: 'Performance, segments, and reporting.' },
                ].map((h) => (
                  <div key={h.n} className="chub" style={{ '--hc': h.hc } as React.CSSProperties}>
                    <p className="chub__t">{h.n}</p>
                    <p className="chub__d">{h.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snap2Share */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">10 / Snap2Share</aside>
            <div>
              <h2 className="csec__title rv">One QR code. Eight automated steps.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>The product&apos;s most powerful idea, designed as a story rather than a feature list: a single printed QR code kicks off a chain that captures content, rewards the customer, and feeds the calendar — with no manual work.</p>
              </div>
              <div className="cloop rv" style={{ transitionDelay: '0.12s' }}>
                {[
                  { n: '01', t: 'Print the QR', d: 'A business prints a Snap2Share code for its location or event.' },
                  { n: '02', t: 'Customer scans', d: 'A guest scans it in the moment, on their own phone.' },
                  { n: '03', t: 'Uploads content', d: 'They submit a photo or video through the branded portal.' },
                  { n: '04', t: 'Email captured', d: 'They opt in to be instantly rewarded for sharing.' },
                  { n: '05', t: 'Reward sent', d: 'A loyalty incentive lands automatically.' },
                  { n: '06', t: 'CRM profile', d: 'Their preferences are saved to the business\'s CRM.' },
                  { n: '07', t: 'Post scheduled', d: 'The UGC is approved and queued to the calendar.' },
                  { n: '08', t: 'Campaign triggered', d: 'A follow-up email goes out, tuned to what they like.' },
                ].map((s) => (
                  <div key={s.n} className="cloopstep">
                    <p className="cloopstep__n">{s.n}</p>
                    <p className="cloopstep__t">{s.t}</p>
                    <p className="cloopstep__d">{s.d}</p>
                  </div>
                ))}
              </div>
              <p className="cloop__kicker rv" style={{ transitionDelay: '0.15s' }}>You printed a QR code. <em className="ax">Pocial did the rest.</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">11 / Design System</aside>
            <div>
              <h2 className="csec__title rv">Warm, human, and unmistakably teal.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>A dual-font system pairs an editorial serif (trust, weight) with a clean sans (modern, efficient). Teal is used with discipline: it only ever marks the next action or the reassuring word.</p>
              </div>
              <div className="cds rv" style={{ transitionDelay: '0.12s' }}>
                <div className="cds__card">
                  <p className="cds__h">Palette</p>
                  <div className="cds__swatches">
                    {[['#2f8f86','Teal'],['#d9655e','Coral'],['#5fa183','Green'],['#6e93b8','Blue'],['#1c2b35','Ink']].map(([clr,nm]) => (
                      <span key={nm} style={{ background: clr, flex: 1, height: 54, display: 'block', position: 'relative' }}>
                        <span style={{ position: 'absolute', bottom: -18, left: 0, fontSize: 10, color: 'var(--ink-faint)', fontFamily: 'var(--f-mono)', whiteSpace: 'nowrap' }}>{nm}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="cds__card">
                  <p className="cds__h">Type & Principle</p>
                  <div className="cds__type">
                    <p className="serif">Aa Headline</p>
                    <p className="mono">Serif + sans duality</p>
                  </div>
                  <p className="cds__principle">Teal means action. Color is never decoration. If something is teal, it&apos;s either the next step or the promise. That single rule keeps a dense product calm and scannable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screens */}
      <section className="csec csec--wide">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">12 / Screens</aside>
            <div>
              <h2 className="csec__title rv">From homepage to the whole platform.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>The shipped design carries one voice across every surface — the marketing site that sells the promise, and the platform that keeps it.</p>
              </div>
              <div className="cgal rv" style={{ transitionDelay: '0.12s' }}>
                {POCIAL_DESKTOP.map((s) => (
                  <div key={s.label} className="cshot">
                    <div className="cshot__bar">
                      <span /><span /><span />
                      <i>{s.label}</i>
                    </div>
                    <Image src={s.src} alt={s.label} width={600} height={380} style={{ width: '100%', height: 'auto' }} />
                  </div>
                ))}
              </div>

              <h3 className="csec__title rv" style={{ marginTop: 56, fontSize: 'clamp(22px,2.8vw,36px)', transitionDelay: '0.05s' }}>Built for the phone first.</h3>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Most posting happens on the go. The same system reflows to a single thumb-reachable column — browsing the UGC gallery, previewing a post, and walking the AI campaign prompt without a single pinch-zoom.</p>
              </div>
              <div className="cmob rv" style={{ transitionDelay: '0.12s', gridTemplateColumns: 'repeat(4,1fr)' }}>
                {POCIAL_MOBILE.map((s) => (
                  <div key={s.label} className="cmob__item">
                    <div className="cphone">
                      <Image src={s.src} alt={s.label} width={200} height={432} style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <p className="cmob__cap"><b>{s.label}</b><br />{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">13 / Validation</aside>
            <div>
              <h2 className="csec__title rv">How I&apos;d prove the bets actually work.</h2>
              <div className="cproc__cards rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: 'Test 01', h: 'Dual-path routing', d: 'Visitors self-select the right journey on the first screen. Signal: ≥80% reach the correct path on the first click.' },
                  { n: 'Test 02', h: 'No-sidebar platform', d: 'Color-coded hubs make 20+ tools findable without a persistent menu. Signal: Task success ↑ and time-to-find ↓ vs. a sidebar control.' },
                  { n: 'Test 03', h: 'Headline formula', d: 'Fear-then-reassurance headlines make the value land faster. Signal: Higher unprompted recall of the core promise.' },
                  { n: 'Test 04', h: 'Snap2Share loop', d: 'A single capture reaches a scheduled post in under a minute. Signal: Median time-to-publish < 60s.' },
                ].map((t) => (
                  <div key={t.n} className="ccard">
                    <div className="ccard__body">
                      <p className="ccard__n">{t.n}</p>
                      <h3 className="ccard__h">{t.h}</h3>
                      <p className="ccard__d">{t.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="cimpact">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">14 / Scope</aside>
            <div>
              <h2 className="csec__title rv">Scope &amp; what it&apos;s built to do.</h2>
              <div className="cimpact__grid rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '25', l: 'Screens shipped as one system — marketing site to platform' },
                  { n: '2', l: 'Audiences routed cleanly from a single homepage' },
                  { n: '4', l: 'Color-coded hubs replacing a 20-item sidebar' },
                  { n: '1', l: 'Design language across every surface and breakpoint' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="cnum">{s.n}</div>
                    <p className="cnum__l">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="csec">
        <div className="cwrap cwrap--narrow">
          <div className="cpull rv">
            &ldquo;With very little direction other than a few examples and what I liked, Nishan turned those into <em className="ax">an actual product.</em>&rdquo;
            <p className="cpull__a">Clifton D. Cooper · Co-founder &amp; CEO, Pocial</p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">15 / Reflection</aside>
            <div>
              <h2 className="csec__title rv">What I&apos;d push on next.</h2>
              <div className="cref rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '01', h: 'Anchor the pricing.', p: '"Book a demo" suits enterprise, but SMB visitors want a number. A starter price would cut a trust gap.' },
                  { n: '02', h: 'Instrument the routes.', p: 'Tag every dual-path entry point so we can see which audience each headline actually wins.' },
                  { n: '03', h: 'Onboard by role.', p: 'Tailor the first session to the role chosen at signup, so the empty state already feels personal.' },
                ].map((r) => (
                  <div key={r.n} className="cref__item">
                    <p className="cref__n">{r.n}</p>
                    <h4>{r.h}</h4>
                    <p>{r.p}</p>
                  </div>
                ))}
              </div>
            </div>
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
        {/* Hero screenshot */}
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
            <aside className="csplit__aside">01 / Overview</aside>
            <div>
              <h2 className="csec__title rv">A whole home journey — design, build, buy.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                <p>eBinaa connects homeowners in Oman with verified architects, contractors and developers — from designing a home, to building it under a structured contract with stage-based payments, to buying a ready or off-plan property. It&apos;s free for owners, bilingual (English / Arabic), and covers all nine governorates.</p>
                <p>The product had one organizing idea: <b>remove risk from the biggest purchase of someone&apos;s life.</b> Trust here isn&apos;t a marketing word — it&apos;s built into verified company profiles, standardized contracts, a 5% retention policy, and payments that only release as real work is completed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">02 / Challenge</aside>
            <div>
              <h2 className="csec__title rv">Building a home meant trusting strangers with your life savings.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '01', t: 'No way to verify reputation.', d: 'Contractors and architects were judged on word of mouth — there was no reliable record of who actually delivered quality work.' },
                  { n: '02', t: 'Informal deals, no protection.', d: 'Agreements were verbal and money was often paid upfront, so if a contractor abandoned the job mid-way, the owner had little recourse and real losses.' },
                  { n: '03', t: 'A scattered, invisible process.', d: 'Design, contracting, permitting and buying lived in disconnected places — with no progress visibility, no easy way to compare firms, and limited access to housing finance.' },
                ].map((item) => (
                  <div key={item.n} style={{ marginBottom: 20 }}>
                    <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: '#4a56f6', letterSpacing: '.06em', marginBottom: 6 }}>{item.n}</p>
                    <p><b>{item.t}</b> {item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">03 / Research</aside>
            <div>
              <h2 className="csec__title rv">Before designing, I mapped who we were really designing for.</h2>
              <div className="cpgrid rv" style={{ transitionDelay: '0.1s' }}>
                {/* Salim */}
                <div className="cper">
                  <div className="cper__head">
                    <div className="cper__av">S</div>
                    <div>
                      <p className="cper__name">Salim Al-Harthy · سالم</p>
                      <p className="cper__role">First-time home builder</p>
                      <p className="cper__ctx">Granted plot · building on his own land · first build</p>
                    </div>
                  </div>
                  <div className="cper__cols">
                    <div>
                      <h5>Goals</h5>
                      <ul>
                        <li>Build a quality home within budget</li>
                        <li>Know exactly who to trust</li>
                        <li>See progress without chasing anyone</li>
                      </ul>
                    </div>
                    <div className="cper__col--pain">
                      <h5>Pain Points</h5>
                      <ul>
                        <li>Can&apos;t verify a firm&apos;s track record</li>
                        <li>Fears overpaying and abandonment</li>
                        <li>Process scattered across people &amp; paper</li>
                      </ul>
                    </div>
                  </div>
                  <p className="cper__quote">&ldquo;This is my life&apos;s biggest investment — I need to know the people I&apos;m trusting are real.&rdquo;</p>
                </div>
                {/* Companies */}
                <div className="cper">
                  <div className="cper__head">
                    <div className="cper__av" style={{ background: '#2bb673' }}>C</div>
                    <div>
                      <p className="cper__name">Companies &amp; Partners</p>
                      <p className="cper__role">Firms, the bank &amp; regulators</p>
                      <p className="cper__ctx">List · verify · contract · finance</p>
                    </div>
                  </div>
                  <div className="cper__cols">
                    <div>
                      <h5>What they need</h5>
                      <ul>
                        <li>Reach serious, ready owners</li>
                        <li>Connect buyers to finance</li>
                        <li>Regulatory credibility &amp; oversight</li>
                      </ul>
                    </div>
                    <div className="cper__col--pain">
                      <h5>Friction</h5>
                      <ul>
                        <li>Hard to reach owners ready to commit</li>
                        <li>No standard, enforceable contract</li>
                        <li>The trust gap cuts both ways</li>
                      </ul>
                    </div>
                  </div>
                  <p className="cper__quote">&ldquo;Owners won&apos;t commit until they believe the firm — and the contract — are real.&rdquo;</p>
                </div>
              </div>
              <div className="cubridge rv" style={{ transitionDelay: '0.15s' }}>
                {[
                  { n: 'Finding 01', t: 'Trust is the #1 barrier.', d: 'Led to → verification-first company profiles: ratings, completed projects, engineers and minimum price, shown up front.' },
                  { n: 'Finding 02', t: 'Money feels unsafe.', d: 'Led to → standardized contracts, a 5% retention policy, and payments released stage by stage.' },
                  { n: 'Finding 03', t: 'The journey is scattered.', d: 'Led to → one platform across Design, Build and Buy, with a built-in project management tool.' },
                ].map((b) => (
                  <div key={b.n}>
                    <p className="cubridge__n">{b.n}</p>
                    <p className="cubridge__t">{b.t}</p>
                    <p className="cubridge__d">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Definition */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">04 / Problem</aside>
            <div>
              <h2 className="csec__title rv">It all collapsed into one question.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>eBinaa wouldn&apos;t win or lose on features — it would win or lose on trust. A homeowner had to believe the company was real, the contract was fair, and the money was safe before they&apos;d commit to anything.</p>
              </div>
              <div className="chmw rv" style={{ transitionDelay: '0.12s' }}>
                <span className="lead">How might we</span>
                Give homeowners in Oman one trusted place to design, build and buy a home — where every company is verified, every contract is fair, and every payment follows real, completed work?
              </div>
              <div className="cprins rv-s" style={{ transitionDelay: '0.15s' }}>
                {[
                  { n: '01', t: 'Trust, made structural.', d: 'Verification, contracts, retention and staged payments are designed into the product — not promised in copy.' },
                  { n: '02', t: 'Design lifecycles, not screens.', d: 'Every project is an honest state machine — submit, contract, build, pay, hand over — with no dead ends and no guessing.' },
                  { n: '03', t: 'Bilingual by mirror.', d: 'Arabic RTL is designed as a complete right-to-left mirror, not a translation bolted on at the end.' },
                ].map((p) => (
                  <div key={p.n} className="cprin">
                    <p className="cprin__n">{p.n}</p>
                    <h3 className="cprin__t">{p.t}</h3>
                    <p className="cprin__d">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">05 / My Role</aside>
            <div>
              <h2 className="csec__title rv">What I owned, end to end.</h2>
              <div className="croles rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { k: '01', n: 'Architecture', q: 'The navigation model — Design, Build, Buy — and how firms, projects, contracts and listings relate.' },
                  { k: '02', n: 'Interaction', q: 'The build journey, firm comparison, the contract and stage-based payments, and property search.' },
                  { k: '03', n: 'UI system', q: 'A trust-first component library: company cards, comparison tables, contract steps, filters, navigation.' },
                  { k: '04', n: 'RTL', q: 'The Arabic right-to-left experience designed as a first-class mirror, not an afterthought.' },
                  { k: '05', n: 'QA', q: 'Consistency held across dozens of screens, in both directions.' },
                  { k: '06', n: 'Exploration', q: 'Layout directions for the highest-traffic screens before converging.' },
                ].map((r) => (
                  <div key={r.k} className="crole">
                    <p className="crole__k">{r.k}</p>
                    <p className="crole__n">{r.n}</p>
                    <p className="crole__q">{r.q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Idea */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">06 / Big Idea</aside>
            <div>
              <h2 className="csec__title rv">Trust, made structural.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>eBinaa&apos;s whole reason to exist is trust. Rather than asking homeowners to take a leap of faith, the design builds trust into the mechanics — who you work with, the contract you sign, and how the money moves.</p>
              </div>
              <div className="chubs rv" style={{ transitionDelay: '0.12s' }}>
                {[
                  { hc: '#2bb673', n: 'Verified companies', d: 'Ratings, completed projects, engineers and minimum price — shown up front.' },
                  { hc: '#d99a2b', n: 'Standardized contracts', d: 'Clear technical & administrative terms protect both sides.' },
                  { hc: '#1F6F8B', n: '5% retention policy', d: 'Exit a job mid-way and you bear the cost — abandonment is disincentivized.' },
                  { hc: '#6e93b8', n: 'Stage-based payments', d: 'Contractors are paid only after each construction stage is verified.' },
                  { hc: '#8b7fd0', n: 'Project management', d: 'Owners track milestones and progress in real time.' },
                  { hc: '#3ddc84', n: 'Compare before you commit', d: 'Multiple firms and offers, side by side.' },
                ].map((h) => (
                  <div key={h.n} className="chub" style={{ '--hc': h.hc } as React.CSSProperties}>
                    <p className="chub__t">{h.n}</p>
                    <p className="chub__d">{h.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">07 / Architecture</aside>
            <div>
              <h2 className="csec__title rv">Three journeys, one home.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>The product is organized around three top-level services — Design, Build and Buy — plus the homeowner&apos;s account and a project management tool. The IA mirrors the real journey: design your home, build it under contract, or buy one ready-made — with trust signals one tap away.</p>
              </div>
              <div className="cmap rv" style={{ transitionDelay: '0.12s' }}>
                <div className="cmap__root"><span className="d" />eBinaa</div>
                <div className="cmap__cols">
                  {[
                    { node: 'Design', leaves: ['Architect firms', 'Compare profiles', '3D / landscape / MEP', 'Connect'] },
                    { node: 'Build', leaves: ['Submit project', 'Structure / Turn-key', 'Matched firms', 'Contract & pay'] },
                    { node: 'Buy', leaves: ['Property marketplace', 'Villas / townhouses', 'Price & bedroom filters', 'OHB finance'] },
                    { node: 'Manage', leaves: ['Milestones', 'Stage approvals', 'Progress & updates'] },
                    { node: 'Account', leaves: ['Profile', 'Saved firms', 'Documents', 'ع / EN'] },
                  ].map((col) => (
                    <div key={col.node}>
                      <div className="cmap__node">{col.node}</div>
                      <ul className="cmap__leaves">
                        {col.leaves.map((l) => <li key={l}>{l}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Flow */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">08 / Build Flow</aside>
            <div>
              <h2 className="csec__title rv">From empty plot to handover. Eight honest stages.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>I modeled the homeowner&apos;s build journey as a state machine rather than a set of screens — every stage has one clear status, and money only moves when real work is verified.</p>
              </div>
              <div className="cloop rv" style={{ transitionDelay: '0.12s' }}>
                {[
                  { n: '01', t: 'Submit', d: 'The owner submits the plot, drawing status and build type.' },
                  { n: '02', t: 'Match', d: 'eBinaa matches verified contractors and a supervision consultant.' },
                  { n: '03', t: 'Compare', d: 'The owner compares offers side by side and chooses a firm.' },
                  { n: '04', t: 'Contract', d: 'A standardized construction contract is generated and signed.' },
                  { n: '05', t: 'Retention', d: '5% of the value is retained, so abandoning the job carries a cost.' },
                  { n: '06', t: 'Build', d: 'Work begins; the project management tool tracks every milestone.' },
                  { n: '07', t: 'Stage pay', d: 'Payment releases only after each construction stage is verified.' },
                  { n: '08', t: 'Handover', d: 'The home is completed and handed over — structure or turn-key.' },
                ].map((s) => (
                  <div key={s.n} className="cloopstep">
                    <p className="cloopstep__n">{s.n}</p>
                    <p className="cloopstep__t">{s.t}</p>
                    <p className="cloopstep__d">{s.d}</p>
                  </div>
                ))}
              </div>
              <p className="cloop__kicker rv" style={{ transitionDelay: '0.15s' }}>One empty plot. <em className="ax">eBinaa carried it all the way to the keys.</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">09 / Design System</aside>
            <div>
              <h2 className="csec__title rv">Calm, trustworthy, navy &amp; green.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>eBinaa runs on a calm, trustworthy system — deep navy as the primary, a bright green for actions and confirmation, on white — with semantic amber and red reserved for caution. Everything is defined as shared styles so a multi-service, bilingual product stays consistent, in both directions.</p>
              </div>
              <div className="cds rv" style={{ transitionDelay: '0.12s' }}>
                <div className="cds__card">
                  <p className="cds__h">Palette</p>
                  <div className="cds__swatches">
                    {[['#0E2A38','Navy'],['#2bb673','Green'],['#d99a2b','Caution'],['#f1efe9','Surface'],['#0d0d10','Ink']].map(([clr,nm]) => (
                      <span key={nm} style={{ background: clr, flex: 1, height: 54, display: 'block', position: 'relative' }}>
                        <span style={{ position: 'absolute', bottom: -18, left: 0, fontSize: 10, color: 'var(--ink-faint)', fontFamily: 'var(--f-mono)', whiteSpace: 'nowrap' }}>{nm}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="cds__card">
                  <p className="cds__h">Type & Principle</p>
                  <div className="cds__type">
                    <p className="serif">Aa Headline</p>
                    <p className="mono">Clean bilingual sans</p>
                  </div>
                  <p className="cds__principle">Trust is the system. Colour guides, structure protects. Green confirms and invites action; the real trust is carried by verification, contracts and staged money — in English and in Arabic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Screens */}
      <section className="csec csec--wide">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">10 / Screens</aside>
            <div>
              <h2 className="csec__title rv">The other side — the company workspace.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Trust runs both ways. While homeowners move through Design · Build · Buy on mobile, verified companies run their whole business from a desktop workspace — discovering opportunities, bidding, signing the contract, managing projects, and proving credibility through a verification-driven profile.</p>
              </div>
              <div className="cgal rv" style={{ transitionDelay: '0.12s' }}>
                {EBINAA_WEB.map((s) => (
                  <div key={s.label} className="cshot">
                    <div className="cshot__bar">
                      <span /><span /><span />
                      <i>{s.label}</i>
                    </div>
                    <Image src={s.src} alt={s.label} width={580} height={380} style={{ width: '100%', height: 'auto' }} />
                  </div>
                ))}
              </div>

              <h3 className="csec__title rv" style={{ marginTop: 56, fontSize: 'clamp(22px,2.8vw,36px)', transitionDelay: '0.05s' }}>The shipped app, right to left.</h3>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Every screen ships bilingual — a عربي toggle flips the whole product into a true right-to-left mirror. The full homeowner flow reads in order, top to bottom.</p>
              </div>
              <div className="cmob rv" style={{ transitionDelay: '0.12s' }}>
                {EBINAA_APP.map((s) => (
                  <div key={s.label} className="cmob__item">
                    <div className="cphone">
                      <Image src={s.src} alt={s.label} width={200} height={432} style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <p className="cmob__cap"><b>{s.label}</b><br />{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">11 / Validation</aside>
            <div>
              <h2 className="csec__title rv">How I&apos;d prove the bets actually work.</h2>
              <div className="cproc__cards rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: 'Test 01', h: 'Trust signals', d: 'Verified profiles make owners confident to reach out. Signal: ≥80% point to verification signals — rating, completed projects.' },
                  { n: 'Test 02', h: 'Compare vs browse', d: 'The right view to choose a firm. Signal: Tables faster for comparison, cards faster for discovery.' },
                  { n: 'Test 03', h: 'Build setup', d: 'An owner can submit a project without help. Signal: Setup completion rises significantly.' },
                  { n: 'Test 04', h: 'Payment clarity', d: 'Owners understand when and why money releases. Signal: Owners correctly explain stage-based release.' },
                ].map((t) => (
                  <div key={t.n} className="ccard">
                    <div className="ccard__body">
                      <p className="ccard__n">{t.n}</p>
                      <h3 className="ccard__h">{t.h}</h3>
                      <p className="ccard__d">{t.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="cimpact">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">12 / Platform Scale</aside>
            <div>
              <h2 className="csec__title rv">Platform scale.</h2>
              <div className="cimpact__grid rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '3M+', l: 'OMR in projects managed through the platform' },
                  { n: '150+', l: 'Verified companies — architects, contractors, developers' },
                  { n: '9', l: 'Governorates of Oman covered' },
                  { n: '100%', l: 'Free for project owners' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="cnum">{s.n}</div>
                    <p className="cnum__l">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="csec">
        <div className="cwrap cwrap--narrow">
          <div className="cpull rv">
            &ldquo;Trust isn&apos;t a feature you add at the end — it has to be built into how <em className="ax">the money and the work move.</em>&rdquo;
            <p className="cpull__a">Husain Al-Asfoor · Founder of eBinaa</p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside">13 / Reflection</aside>
            <div>
              <h2 className="csec__title rv">What the system taught me.</h2>
              <div className="cref rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '01', h: 'Trust is structural, not cosmetic.', p: 'Verification, fair contracts and staged money did more for confidence than any amount of reassuring copy.' },
                  { n: '02', h: 'Trust is a UX problem.', p: 'Making firms\' track records and contract terms legible turned an act of faith into an informed decision.' },
                  { n: '03', h: 'Design lifecycles, not screens.', p: 'Modeling the build journey as an honest state machine — submit → contract → stage-pay → handover — prevented dead ends.' },
                ].map((r) => (
                  <div key={r.n} className="cref__item">
                    <p className="cref__n">{r.n}</p>
                    <h4>{r.h}</h4>
                    <p>{r.p}</p>
                  </div>
                ))}
              </div>
            </div>
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

  useEffect(() => {
    const railEl = document.getElementById('crail');
    const fill = document.getElementById('crailFill');
    if (!railEl || !fill) return;
    const rail: HTMLElement = railEl;

    const sections = document.querySelectorAll('.csec, .cimpact, .chero');
    const nodes: { el: HTMLElement; top: number; target: Element }[] = [];

    sections.forEach((sec) => {
      const nd = document.createElement('div');
      nd.className = 'cnode';
      rail.appendChild(nd);
      nodes.push({ el: nd, top: 0, target: sec });
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
    setTimeout(() => { layout(); upd(); }, 800);

    return () => {
      window.removeEventListener('scroll', upd);
      nodes.forEach((n) => n.el.remove());
    };
  }, []);

  return (
    <article style={{ paddingBottom: 'clamp(60px,8vw,120px)', position: 'relative' }}>
      {/* Crail */}
      <div id="crail" className="crail" aria-hidden="true">
        <div id="crailFill" className="crail__fill" />
      </div>

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

      {/* More work */}
      <div className="morework">
        <div className="morework__in">
          <p className="morework__lbl rv">More work</p>
          <div className="morework__grid">
            <Link href={`/case-studies/${c.nextSlug}`} className="mwcard rv">
              <span className="mwcard__t">{c.nextTitle}</span>
              <span className="mwcard__s">{c.nextSub}</span>
              <span className="mwcard__arrow">→</span>
            </Link>
            <Link href="/#work" className="mwcard rv" style={{ transitionDelay: '0.05s' }}>
              <span className="mwcard__t">All work</span>
              <span className="mwcard__s">Back to the full list</span>
              <span className="mwcard__arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
