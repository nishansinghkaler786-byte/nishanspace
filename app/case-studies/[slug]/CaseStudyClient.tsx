'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CaseStudy } from '@/lib/cases';

function ArrDiag() {
  return (
    <svg width="18" height="18" viewBox="0 0 11 11" fill="none" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
      <path d="M1 10L10 1M10 1H3.5M10 1V7.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── per-case screen data ──────────────────────────── */

// v2: captions match design reference
const LUMEN_ONBOARDING = [
  { src: '/assets/lumen/splash-dark.png', lightSrc: '/assets/lumen/splash-light.png', label: 'Splash', sub: 'get started' },
  { src: '/assets/lumen/welcome-dark.png', lightSrc: '/assets/lumen/welcome-light.png', label: 'Onboarding', sub: "Lumi’s promise" },
  { src: '/assets/lumen/signup-dark.png', lightSrc: '/assets/lumen/signup-light.png', label: 'Create account', sub: '' },
  { src: '/assets/lumen/login-dark.png', lightSrc: '/assets/lumen/login-light.png', label: 'Log in', sub: 'welcome back' },
  { src: '/assets/lumen/verifyIntro-dark.png', lightSrc: '/assets/lumen/verifyIntro-light.png', label: 'Verify', sub: "let’s confirm it’s you" },
  { src: '/assets/lumen/verifyCapture-dark.png', lightSrc: '/assets/lumen/verifyCapture-light.png', label: 'Verify', sub: 'scan your ID' },
  { src: '/assets/lumen/verifyStatus-dark.png', lightSrc: '/assets/lumen/verifyStatus-light.png', label: 'Verify', sub: 'in progress' },
];

const LUMEN_CORE = [
  { src: '/assets/lumen/home-dark.png', lightSrc: '/assets/lumen/home-light.png', label: 'Home', sub: 'your portfolio' },
  { src: '/assets/lumen/explore-dark.png', lightSrc: '/assets/lumen/explore-light.png', label: 'Explore', sub: 'the ecosystem' },
  { src: '/assets/lumen/news-dark.png', lightSrc: '/assets/lumen/news-light.png', label: 'News', sub: 'market mood' },
  { src: '/assets/lumen/coinDetail-dark.png', lightSrc: '/assets/lumen/coinDetail-light.png', label: 'Coin detail', sub: 'Bitcoin' },
  { src: '/assets/lumen/proAnalysis-dark.png', lightSrc: '/assets/lumen/proAnalysis-light.png', label: 'Pro analysis', sub: 'Lumi signal' },
  { src: '/assets/lumen/askLumi-dark.png', lightSrc: '/assets/lumen/askLumi-light.png', label: 'Ask Lumi', sub: 'AI guide' },
];

const LUMEN_TRADING = [
  { src: '/assets/lumen/tradeCoin-dark.png', lightSrc: '/assets/lumen/tradeCoin-light.png', label: '01', sub: 'choose a coin' },
  { src: '/assets/lumen/tradeAmount-dark.png', lightSrc: '/assets/lumen/tradeAmount-light.png', label: '02', sub: 'enter amount' },
  { src: '/assets/lumen/feeBreakdown-dark.png', lightSrc: '/assets/lumen/feeBreakdown-light.png', label: '03', sub: 'fees upfront' },
  { src: '/assets/lumen/success-dark.png', lightSrc: '/assets/lumen/success-light.png', label: '04', sub: 'you own Bitcoin' },
];

const LUMEN_WALLET = [
  { src: '/assets/lumen/card-dark.png', lightSrc: '/assets/lumen/card-light.png', label: 'Wallet', sub: 'balance & methods' },
  { src: '/assets/lumen/addMoney-dark.png', lightSrc: '/assets/lumen/addMoney-light.png', label: 'Add money', sub: '' },
  { src: '/assets/lumen/recurring-dark.png', lightSrc: '/assets/lumen/recurring-light.png', label: 'Recurring buy', sub: '' },
  { src: '/assets/lumen/withdrawLock-dark.png', lightSrc: '/assets/lumen/withdrawLock-light.png', label: 'Withdrawal hold', sub: 'explained' },
  { src: '/assets/lumen/profile-dark.png', lightSrc: '/assets/lumen/profile-light.png', label: 'Profile', sub: 'appearance & security' },
];

const POCIAL_DESKTOP = [
  { src: '/assets/pocial/poc-desk-01.png', label: 'pocial.com', sub: 'marketing site' },
  { src: '/assets/pocial/poc-desk-02.png', label: 'app · login', sub: 'sign in' },
  { src: '/assets/pocial/poc-desk-03.png', label: 'app · calendar', sub: 'schedule hub' },
  { src: '/assets/pocial/poc-desk-04.png', label: 'app · create', sub: 'create hub' },
  { src: '/assets/pocial/poc-desk-05.png', label: 'app · ugc', sub: 'engage hub' },
  { src: '/assets/pocial/poc-desk-06.png', label: 'app · composer', sub: 'create hub' },
  { src: '/assets/pocial/poc-desk-07.png', label: 'app · engagement', sub: 'analyze hub' },
  { src: '/assets/pocial/poc-desk-08.png', label: 'app · performance', sub: 'analyze hub' },
  { src: '/assets/pocial/poc-desk-09.png', label: 'app · segments', sub: 'analyze hub' },
  { src: '/assets/pocial/poc-desk-10.png', label: 'app · newsletters', sub: 'create hub' },
  { src: '/assets/pocial/poc-desk-11.png', label: 'app · ai', sub: 'create hub' },
  { src: '/assets/pocial/poc-desk-12.png', label: 'app · campaign', sub: 'campaign flow' },
  { src: '/assets/pocial/poc-desk-13.png', label: 'app · schedule', sub: 'schedule hub' },
  { src: '/assets/pocial/poc-desk-14.png', label: 'app · accounts', sub: 'settings' },
];

const POCIAL_MOBILE = [
  { src: '/assets/pocial/poc-mob-01.png', label: 'Create New Segment', sub: 'polling flow' },
  { src: '/assets/pocial/poc-mob-02.png', label: 'Engagement', sub: 'analytics dashboard' },
  { src: '/assets/pocial/poc-mob-03.png', label: 'Performance', sub: 'overview' },
  { src: '/assets/pocial/poc-mob-04.png', label: 'Performance', sub: 'Lead Gen funnel' },
  { src: '/assets/pocial/poc-mob-05.png', label: 'Schedule Calendar', sub: 'content planning' },
  { src: '/assets/pocial/poc-mob-06.png', label: 'Upload to TikTok', sub: 'publishing flow' },
  { src: '/assets/pocial/poc-mob-07.png', label: 'Content Preview', sub: 'live feed' },
  { src: '/assets/pocial/poc-mob-08.png', label: 'UGC Gallery', sub: 'media selection' },
  { src: '/assets/pocial/poc-mob-09.png', label: 'Crop', sub: 'image editing' },
  { src: '/assets/pocial/poc-mob-10.png', label: 'Social Post', sub: 'preview' },
  { src: '/assets/pocial/poc-mob-11.png', label: 'Campaign Prompt', sub: 'Core Information' },
  { src: '/assets/pocial/poc-mob-12.png', label: 'Campaign Prompt', sub: 'Data Vault' },
  { src: '/assets/pocial/poc-mob-13.png', label: 'About My Business', sub: 'business details' },
  { src: '/assets/pocial/poc-mob-14.png', label: 'Pricing', sub: 'plans' },
  { src: '/assets/pocial/poc-mob-15.png', label: 'Login / Sign Up', sub: 'onboarding' },
  { src: '/assets/pocial/poc-mob-16.png', label: 'Topic Suggestions', sub: 'content creation' },
  { src: '/assets/pocial/poc-mob-17.png', label: 'Topic Suggestions', sub: 'expanded list' },
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
            <aside className="csplit__aside rv">— 01 / Overview</aside>
            <div>
              <h2 className="csec__title rv">A first crypto app that <em className="ax">explains itself.</em></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                <p>Lumen helps a cautious first-timer buy and hold crypto without the usual anxiety. The product is built around one promise: you should never tap a button you don&apos;t understand. Lumi — an AI guide — sits one tap away on every screen to explain spreads, fees, holds and signals in human language.</p>
                <p>The whole experience was designed as a system: <b>onboarding and KYC, a three-tap buy, a wallet, an explore surface, market news, and a pro charting mode</b> — each shipped in a full light and dark theme so it feels native on any phone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 02 / The challenge</aside>
            <div>
              <h2 className="csec__title rv">For most people, buying crypto feels <span className="ax">like a trap.</span></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.1s' }}>
                <p><b>One.</b> Hidden costs. Spreads and network fees are buried, so people never know what a trade actually costs until it&apos;s done.</p>
                <p><b>Two.</b> Fear of a wrong move. The vocabulary is hostile and irreversible-feeling — one tap and your money is gone into something you don&apos;t understand.</p>
                <p><b>Three.</b> No one to ask. When something looks wrong — a withdrawal on hold, a confusing chart — there&apos;s no calm, trustworthy voice to explain what&apos;s happening.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 03 / Understanding the user</aside>
            <div>
              <h2 className="csec__title rv">I designed for the <em className="ax">cautious</em> first-timer.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Lumen isn&apos;t for traders. It&apos;s for the person who has heard they &ldquo;should own some Bitcoin,&rdquo; wants to start small, and is one bad surprise away from closing the app forever. Every decision answered to that person.</p>
              </div>
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
            <aside className="csplit__aside rv">— 04 / Defining the problem</aside>
            <div>
              <h2 className="csec__title rv">It came down to <em className="ax">one question.</em></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Lumen wouldn&apos;t win on coin selection or trading power — bigger apps own that. It would win or lose on whether a nervous beginner felt safe, informed and in control at every step.</p>
              </div>
              <div className="chmw rv" style={{ transitionDelay: '0.12s' }}>
                <span className="lead">— The question</span>
                How might we let someone who finds crypto intimidating buy and hold it with total confidence — where every cost is shown upfront, every step is reversible-feeling, and an honest AI guide is always one tap away?
              </div>
              <div className="cprins rv-s" style={{ transitionDelay: '0.15s' }}>
                {[
                  { n: '— Principle 01', t: 'Cost before commitment.', d: 'No fee is ever a surprise. The full breakdown is shown — and explained — before the buy.' },
                  { n: '— Principle 02', t: 'An honest guide, not a salesman.', d: 'Lumi clarifies and reassures. It never hypes a coin or pushes a trade.' },
                  { n: '— Principle 03', t: 'Calm in both modes.', d: 'A full light and dark theme, each tuned so the product feels quiet, never frantic.' },
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
            <aside className="csplit__aside rv">— 05 / The big idea</aside>
            <div>
              <h2 className="csec__title rv">Lumi — trust, built <em className="ax">into the product.</em></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Rather than reassure with marketing copy, Lumen builds trust into the mechanics. Three promises — made on the first screen and kept on every screen after it — carry the entire product.</p>
              </div>
              <div className="lpill rv-s" style={{ transitionDelay: '0.12s' }}>
                <div className="lpill__c">
                  <div className="lpill__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg></div>
                  <div className="lpill__t">Buy in seconds</div>
                  <div className="lpill__d">Three taps to your first coin — choose, enter an amount, confirm. No order book to decode.</div>
                </div>
                <div className="lpill__c">
                  <div className="lpill__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 9h6M9 12h6M9 15h3"/></svg></div>
                  <div className="lpill__t">Fees shown upfront</div>
                  <div className="lpill__d">Coin amount, spread, network and platform fees — the total cost, itemised, before you confirm.</div>
                </div>
                <div className="lpill__c">
                  <div className="lpill__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <div className="lpill__t">Your funds are protected</div>
                  <div className="lpill__d">Insured, audited and status-tracked — with security holds that explain themselves instead of alarming you.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lumen is different */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 06 / Why Lumen is different</aside>
            <div>
              <h2 className="csec__title rv">Two things <em className="ax">nobody else does.</em></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Most crypto apps hand a beginner a chart and wish them luck. Lumen does two things no one else does — it brings the <i>analysis</i> to you, and it brings the <i>whole market</i> into one place.</p>
              </div>
              <div className="ldiff rv-s" style={{ transitionDelay: '0.12s' }}>
                <div className="ldiff__c">
                  <div className="ldiff__k">— 01 · The first live-market AI</div>
                  <div className="ldiff__t">Lumi reads the market for you.</div>
                  <div className="ldiff__d">Lumen is the first app to put real-time AI analysis on the <i>live</i> market right inside the decision. Lumi watches price and momentum alongside the wider web — the same news, posts and sources you&apos;d otherwise hunt down on Google — and turns all of it into one plain signal: buy, hold, or wait, with the full cost spelled out. Ask it anything in your own words on any screen, and it walks you through placing the trade.</div>
                </div>
                <div className="ldiff__c">
                  <div className="ldiff__k">— 02 · Every market, one place</div>
                  <div className="ldiff__t">All the insight, without ten open tabs.</div>
                  <div className="ldiff__d">Normally you&apos;d jump between exchanges, news sites and forums to piece together what&apos;s happening — then guess. Lumen pulls the whole market onto a single surface: live world events, real-time market mood and on-chain context, read and summarised for you — with a one-tap path straight into the trade.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA */}
      <section className="csec csec--wide">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 07 / Information architecture</aside>
            <div>
              <h2 className="csec__title rv">One map a beginner can <em className="ax">hold in their head.</em></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>The product is organised around six surfaces — onboarding, home, trade, markets, wallet and profile. Lumi reaches across all of them; there&apos;s no separate &ldquo;AI section,&rdquo; just a guide you can summon anywhere.</p>
              </div>
              <div className="lia rv-s" style={{ transitionDelay: '0.12s' }}>
                <div className="lia__root"><span className="lia__rootpill"><span className="lia__dot" />Lumen</span></div>
                <div className="lia__stem" />
                <div className="lia__branch"><span /><span /><span /><span /><span /><span /></div>
                <div className="lia__grid">
                  {[
                    { b: 'A', h: 'Onboarding', items: ['Splash', 'Log in · Sign up', 'Meet Lumi', 'Verify (KYC) · status'] },
                    { b: 'B', h: 'Home', items: ['Total balance', 'Quick buy / sell', 'Lumi nudge', 'Starter coins'] },
                    { b: 'C', h: 'Trade', items: ['Choose coin', 'Amount → fees → confirm', 'Recurring buys', 'Add money'] },
                    { b: 'D', h: 'Markets', items: ['Coin detail', 'Pro analysis', 'Signal · News · Report', 'Market news'] },
                    { b: 'E', h: 'Wallet', items: ['Balances', 'Card', 'Withdrawal lock'] },
                    { b: 'F', h: 'Profile', items: ['Security · 2FA', 'Payment methods', 'Verification', 'Ask Lumi · Log out'] },
                  ].map((col) => (
                    <div key={col.b} className="lia__col">
                      <div className="lia__head"><span className="lia__b">{col.b}</span><span className="lia__h">{col.h}</span></div>
                      {col.items.map((item) => <div key={item} className="lia__item">{item}</div>)}
                    </div>
                  ))}
                </div>
                <div className="lia__note"><span className="lia__dot" /><div><b>Ask Lumi is global</b> — reachable from Home, any coin, the news feed and Profile.</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 08 / User flow</aside>
            <div>
              <h2 className="csec__title rv">From splash to a <em className="ax">first confident trade.</em></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>The happy path is seven honest states — trust, identity, then a buy where nothing is hidden. Verification never dead-ends: a live status tracker keeps the anxious moment legible, and news or any coin can jump you straight into an action.</p>
              </div>
              <div className="lflow rv-s" style={{ transitionDelay: '0.12s' }}>
                <div className="lflow__row">
                  {([
                    { n: '01', t: 'Splash', d: 'Trust + one CTA', key: false },
                    { n: '02', t: 'Log in', d: 'Or sign up', key: false },
                    { n: '03', t: 'Meet Lumi', d: 'Set expectations', key: false },
                    { n: '04', t: 'Verify', d: 'KYC + status', key: true },
                    { n: '05', t: 'Home', d: 'Balance + Buy', key: false },
                    { n: '06', t: 'Review fees', d: 'Nothing hidden', key: false },
                    { n: '07', t: 'Success', d: 'You own crypto', key: false },
                  ] as { n: string; t: string; d: string; key: boolean }[]).flatMap((s, i, arr) => {
                    const step = (
                      <div key={s.n} className={`lstep${s.key ? ' lstep--key' : ''}`}>
                        <div className="lstep__n">{s.n}</div>
                        <div className="lstep__t">{s.t}</div>
                        <div className="lstep__d">{s.d}</div>
                      </div>
                    );
                    return i < arr.length - 1 ? [step, <div key={`a${i}`} className="larr">→</div>] : [step];
                  })}
                </div>
                <div className="lbranch">
                  <div className="lbr"><span className="lbr__k">Verify · pending</span><span>↩ Live status tracker + ETA</span></div>
                  <div className="lbr"><span className="lbr__k">Any coin</span><span>→ Coin detail → Pro analysis (Signal · News · Report)</span></div>
                  <div className="lbr"><span className="lbr__k">News</span><span>→ Buy / Sell action jumps to the asset</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wireframes */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 09 / Wireframes</aside>
            <div>
              <h2 className="csec__title rv">Structure first, in <em className="ax">grayscale.</em></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Before any colour, I blocked out the riskiest screens as low-fidelity wireframes — proving the layout and hierarchy of the buy flow, verification and the Pro chart while they were still cheap to change. Each one maps directly to a shipped screen.</p>
              </div>
              <div className="wf rv-s" style={{ transitionDelay: '0.12s' }}>
                <div className="wf__grid">
                  {/* WF A: Home */}
                  <div className="wf__card">
                    <div className="wf__phone">
                      <div className="wf__sb"><div className="wf__row"><span className="wb wc" style={{width:18,height:18}} /><span className="wb wb--line" style={{width:46}} /></div><span className="wb wc wb--soft" style={{width:16,height:16}} /></div>
                      <div className="wo" style={{padding:'13px 12px',display:'flex',flexDirection:'column',gap:9,alignItems:'center'}}>
                        <span className="wb wb--soft wb--line" style={{width:54,height:6}} />
                        <span className="wb" style={{width:108,height:18}} />
                        <span className="wb wb--soft wb--line" style={{width:40,height:6}} />
                      </div>
                      <div className="wf__row" style={{gap:9}}><span className="wo wf__sp" style={{height:30}} /><span className="wo wf__sp" style={{height:30}} /></div>
                      <div className="wf__col" style={{marginTop:2}}>
                        <div className="wf__row"><span className="wb wc" style={{width:20,height:20}} /><div className="wf__col wf__sp" style={{gap:5}}><span className="wb wb--line" style={{width:'60%'}} /><span className="wb wb--soft wb--line" style={{width:'34%',height:5}} /></div><span className="wb wb--soft" style={{width:34,height:12}} /></div>
                        <div className="wf__row"><span className="wb wc" style={{width:20,height:20}} /><div className="wf__col wf__sp" style={{gap:5}}><span className="wb wb--line" style={{width:'52%'}} /><span className="wb wb--soft wb--line" style={{width:'30%',height:5}} /></div><span className="wb wb--soft" style={{width:34,height:12}} /></div>
                        <div className="wf__row"><span className="wb wc" style={{width:20,height:20}} /><div className="wf__col wf__sp" style={{gap:5}}><span className="wb wb--line" style={{width:'58%'}} /><span className="wb wb--soft wb--line" style={{width:'32%',height:5}} /></div><span className="wb wb--soft" style={{width:34,height:12}} /></div>
                      </div>
                      <span className="wf__sp" />
                      <div className="wo wf__sb" style={{padding:'7px 14px'}}><span className="wb wc wb--soft" style={{width:13,height:13}} /><span className="wb wc wb--soft" style={{width:13,height:13}} /><span className="wb wc" style={{width:13,height:13}} /><span className="wb wc wb--soft" style={{width:13,height:13}} /></div>
                    </div>
                    <div className="wf__cap"><span className="wf__n">A</span><div><div className="wf__t">Home</div><div className="wf__s">Balance, quick buy/sell, starter coins.</div></div></div>
                  </div>
                  {/* WF B: Pro chart */}
                  <div className="wf__card">
                    <div className="wf__phone">
                      <div className="wf__sb"><div className="wf__row"><span className="wb wc" style={{width:18,height:18}} /><span className="wb wb--line" style={{width:50}} /></div><span className="wb wb--soft" style={{width:30,height:12}} /></div>
                      <div className="wf__row" style={{gap:6}}><span className="wb wb--soft wb--line" style={{width:38}} /><span className="wb wb--soft wb--line" style={{width:38}} /><span className="wb wb--soft wb--line" style={{width:38}} /></div>
                      <div className="wo" style={{height:88,position:'relative',overflow:'hidden',padding:0}}>
                        <svg viewBox="0 0 160 88" preserveAspectRatio="none" style={{width:'100%',height:'100%',display:'block'}}><polyline points="4,60 22,52 38,58 54,40 72,46 90,30 108,38 126,22 144,30 156,16" fill="none" stroke="color-mix(in srgb,var(--ink) 26%,transparent)" strokeWidth="2" /></svg>
                      </div>
                      <div className="wf__row" style={{gap:6}}><span className="wo wf__sp" style={{height:18}} /><span className="wo wf__sp" style={{height:18}} /><span className="wb wf__sp" style={{height:18,borderRadius:7}} /><span className="wo wf__sp" style={{height:18}} /></div>
                      <div className="wo" style={{padding:10,display:'flex',flexDirection:'column',gap:7}}>
                        <div className="wf__row"><span className="wb wc" style={{width:16,height:16}} /><span className="wb wb--line" style={{width:50}} /><span className="wf__sp" /><span className="wb wb--soft" style={{width:40,height:13}} /></div>
                        <span className="wb wb--soft wb--line" style={{width:'90%',height:6}} />
                        <span className="wb wb--soft wb--line" style={{width:'70%',height:6}} />
                      </div>
                      <span className="wf__sp" />
                    </div>
                    <div className="wf__cap"><span className="wf__n">B</span><div><div className="wf__t">Pro analysis</div><div className="wf__s">Chart, indicators, Lumi signal card.</div></div></div>
                  </div>
                  {/* WF C: Verify */}
                  <div className="wf__card">
                    <div className="wf__phone">
                      <div className="wf__row"><span className="wo" style={{width:22,height:22}} /><span className="wb wb--line" style={{width:70}} /></div>
                      <div className="wf__row" style={{gap:7}}><span className="wb wf__sp" style={{height:22,borderRadius:7}} /><span className="wo wf__sp" style={{height:22}} /><span className="wo wf__sp" style={{height:22}} /></div>
                      <div className="wo wf__center wf__sp" style={{margin:'2px 0'}}>
                        <span className="wo wo--dash" style={{width:'74%',height:84,borderRadius:9}} />
                        <span className="wb wb--soft wb--line" style={{width:'60%'}} />
                      </div>
                      <div className="wo" style={{padding:9,display:'flex',gap:8,alignItems:'center'}}><span className="wb wc" style={{width:18,height:18}} /><div className="wf__col wf__sp" style={{gap:5}}><span className="wb wb--soft wb--line" style={{width:'90%',height:6}} /><span className="wb wb--soft wb--line" style={{width:'60%',height:6}} /></div></div>
                      <span className="wb" style={{height:30,borderRadius:9}} />
                    </div>
                    <div className="wf__cap"><span className="wf__n">C</span><div><div className="wf__t">Verify (KYC)</div><div className="wf__s">Doc type, scan frame, capture CTA.</div></div></div>
                  </div>
                  {/* WF D: Fees & confirm */}
                  <div className="wf__card">
                    <div className="wf__phone">
                      <div className="wf__row"><span className="wo" style={{width:22,height:22}} /><span className="wb wb--line" style={{width:60}} /></div>
                      <div className="wo wf__center" style={{padding:'13px 0'}}>
                        <span className="wb wb--soft wb--line" style={{width:40,height:6}} />
                        <span className="wb" style={{width:96,height:20}} />
                      </div>
                      <div className="wf__col" style={{marginTop:2}}>
                        <div className="wf__sb"><span className="wb wb--soft wb--line" style={{width:'44%'}} /><span className="wb wb--line" style={{width:'24%'}} /></div>
                        <div className="wf__sb"><span className="wb wb--soft wb--line" style={{width:'38%'}} /><span className="wb wb--line" style={{width:'20%'}} /></div>
                        <div className="wf__sb"><span className="wb wb--soft wb--line" style={{width:'50%'}} /><span className="wb wb--line" style={{width:'22%'}} /></div>
                      </div>
                      <span className="wb wb--soft" style={{height:1}} />
                      <div className="wf__sb"><span className="wb wb--line" style={{width:'34%',height:8}} /><span className="wb" style={{width:'30%',height:8}} /></div>
                      <span className="wf__sp" />
                      <span className="wb" style={{height:32,borderRadius:100}} />
                    </div>
                    <div className="wf__cap"><span className="wf__n">D</span><div><div className="wf__t">Fees &amp; confirm</div><div className="wf__s">Itemised costs, total, slide-to-confirm.</div></div></div>
                  </div>
                </div>
                <div className="lia__note" style={{marginTop:22}}><span className="lia__dot" /><div><b>Low fidelity on purpose</b> — grayscale kept the conversation on flow and hierarchy, not pixels. Every frame here became a shipped screen.</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 10 / Design system</aside>
            <div>
              <h2 className="csec__title rv">One system, <em className="ax">two modes.</em></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Lumen runs on an electric-indigo primary with a calm violet atmosphere, green for gains and red for losses — defined once as shared tokens so the entire product holds together in both a deep dark theme and a bright light one.</p>
              </div>
              <div className="cds3 rv" style={{ transitionDelay: '0.12s' }}>
                <div className="cds3__card">
                  <div className="cds3__h">Palette — indigo, violet, signal</div>
                  <div className="cds3__sw">
                    {[['#4a56f6','Indigo'],['#7b5cf0','Violet'],['#3ddc84','Gain'],['#f0556b','Loss'],['#0c0e1a','Dark'],['#f3f4fb','Light']].map(([c,n]) => (
                      <div key={n}><div className="cds3__chip" style={{ background: c }} /><div className="cds3__hex">{n}</div></div>
                    ))}
                  </div>
                </div>
                <div className="cds3__card">
                  <div className="cds3__h">Type — one clean sans</div>
                  <div className="cds3__t1">Aa Balance</div>
                  <div className="cds3__t2">Section heading</div>
                  <div className="cds3__t3">Tabular numerals for prices and balances, sized so a beginner can read a portfolio at a glance.</div>
                </div>
                <div className="cds3__card">
                  <div className="cds3__h">Components</div>
                  <div className="cds3__chips" style={{ marginBottom: 14 }}>
                    {['Coin row','Fee breakdown','Lumi card','Slide-to-confirm'].map(c => <span key={c}>{c}</span>)}
                  </div>
                  <div className="cds3__t3">A reassurance-first library — coin rows, itemised fee tables, Lumi explainer cards, status banners — reused across every surface, in both themes.</div>
                </div>
                <div className="cds3__card">
                  <div className="cds3__h">Principle — calm carries trust</div>
                  <div className="cds3__t2">Quiet by default, clear where it counts.</div>
                  <div className="cds3__t3">Colour signals gains and losses; the real trust is carried by upfront costs, honest status and Lumi&apos;s plain language.</div>
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
            <aside className="csplit__aside rv">— 11 / The shipped app</aside>
            <div>
              <h2 className="csec__title rv">Every screen, in <em className="ax">light and dark.</em></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Here is the real, mobile-first product end to end — onboarding and verification, the core tabs, the three-tap buy, and the wallet. Flip the toggle to see every screen redraw in the other theme; both were designed in parallel, never auto-generated.</p>
              </div>
              <div className="lmodebar rv" style={{ marginTop: 28, marginBottom: 32 }}>
                <span className="lmodebar__k">Appearance</span>
                <div className="lmode">
                  <button className={mode === 'dark' ? 'on' : ''} onClick={() => setMode('dark')}>Dark</button>
                  <button className={mode === 'light' ? 'on' : ''} onClick={() => setMode('light')}>Light</button>
                </div>
              </div>

              <p className="lstripcap">— Onboarding &amp; verification</p>
              <div className="lstrip">
                {LUMEN_ONBOARDING.map((s) => (
                  <figure key={s.src} className="lshot">
                    <Image src={mode === 'dark' ? s.src : s.lightSrc} alt={s.label} width={228} height={492} />
                    <figcaption><b>{s.label}</b>{s.sub ? ` · ${s.sub}` : ''}</figcaption>
                  </figure>
                ))}
              </div>

              <p className="lstripcap" style={{ marginTop: 40 }}>— Core &amp; discovery</p>
              <div className="lstrip">
                {LUMEN_CORE.map((s) => (
                  <figure key={s.src} className="lshot">
                    <Image src={mode === 'dark' ? s.src : s.lightSrc} alt={s.label} width={228} height={492} />
                    <figcaption><b>{s.label}</b>{s.sub ? ` · ${s.sub}` : ''}</figcaption>
                  </figure>
                ))}
              </div>

              <p className="lstripcap" style={{ marginTop: 40 }}>— The three-tap buy</p>
              <div className="lstrip">
                {LUMEN_TRADING.map((s) => (
                  <figure key={s.src} className="lshot">
                    <Image src={mode === 'dark' ? s.src : s.lightSrc} alt={s.label} width={228} height={492} />
                    <figcaption><b>{s.label}</b>{s.sub ? ` · ${s.sub}` : ''}</figcaption>
                  </figure>
                ))}
              </div>

              <p className="lstripcap" style={{ marginTop: 40 }}>— Money &amp; account</p>
              <div className="lstrip">
                {LUMEN_WALLET.map((s) => (
                  <figure key={s.src} className="lshot">
                    <Image src={mode === 'dark' ? s.src : s.lightSrc} alt={s.label} width={228} height={492} />
                    <figcaption><b>{s.label}</b>{s.sub ? ` · ${s.sub}` : ''}</figcaption>
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
            <aside className="csplit__aside rv">— 12 / Validation</aside>
            <div>
              <h2 className="csec__title rv">How I&apos;d prove the bets <em className="ax">actually work.</em></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Live metrics sit outside this brief, so I won&apos;t claim numbers I never measured. Instead, every risky decision ships with a validation plan: a clear hypothesis, the method I&apos;d run, and the one signal that would tell me I was right.</p>
              </div>
              <div className="cvtest rv-s" style={{ transitionDelay: '0.12s' }}>
                <div className="cvcard">
                  <div className="cvcard__n">— Test 01 · Fee clarity</div>
                  <h3 className="cvcard__h">Beginners understand what a trade costs.</h3>
                  <div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">Comprehension test on the fee-breakdown screen</div></div>
                  <div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v"><b>≥85%</b> correctly state the total cost before confirming</div></div>
                </div>
                <div className="cvcard">
                  <div className="cvcard__n">— Test 02 · Three-tap buy</div>
                  <h3 className="cvcard__h">A first-timer can buy without help.</h3>
                  <div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">Unmoderated first-purchase task, cold start</div></div>
                  <div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v">Completion rises <b>38% → 74%</b>, drop-off falls at review</div></div>
                </div>
                <div className="cvcard">
                  <div className="cvcard__n">— Test 03 · Lumi trust</div>
                  <h3 className="cvcard__h">The AI guide reduces anxiety, not adds noise.</h3>
                  <div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">Confidence rating before/after asking Lumi</div></div>
                  <div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v">Self-reported confidence up; Lumi rated <b>helpful, not pushy</b></div></div>
                </div>
                <div className="cvcard">
                  <div className="cvcard__n">— Test 04 · Security holds</div>
                  <h3 className="cvcard__h">A withdrawal hold reassures instead of alarms.</h3>
                  <div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">Reaction test on the 24-hour hold screen</div></div>
                  <div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v">Most read it as <b>protection</b>, not a problem</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact / Scope */}
      <section className="cimpact">
        <div className="cwrap">
          <div className="csplit__aside rv" style={{position:'static',color:'#4a56f6',fontFamily:'var(--f-mono)',fontSize:12,letterSpacing:'.06em',marginBottom:14}}>— 13 / Scope of the work</div>
          <h2 className="csec__title rv">One product, designed <em className="ax">end to end.</em></h2>
          <div className="cimpact__grid rv-s" style={{ transitionDelay: '0.1s' }}>
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
      </section>

      {/* Pull Quote */}
      <section className="csec">
        <div className="cwrap cwrap--narrow">
          <p className="cpull rv">An app for nervous beginners can&apos;t just look trustworthy — <em className="ax">it has to make the cost and the risk impossible to miss.</em></p>
          <div className="cpull__a rv">— Design principle behind Lumen</div>
        </div>
      </section>

      {/* Reflection */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 14 / Reflection</aside>
            <div>
              <h2 className="csec__title rv">What the project taught me.</h2>
              <div className="cref rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '01', h: 'Calm is a feature.', p: 'For an anxious beginner, restraint — fewer numbers, plainer words, slower moments — did more for trust than any reassuring graphic.' },
                  { n: '02', h: 'Transparency beats persuasion.', p: 'Showing the full cost upfront, even when it\'s higher, built more confidence than any "0% fees" headline ever could.' },
                  { n: '03', h: 'Two themes, one discipline.', p: 'Designing light and dark in parallel forced the token system to be honest — and made every component stronger in both.' },
                ].map((r) => (
                  <div key={r.n} className="cref__item">
                    <p className="cref__n">— {r.n}</p>
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
  useEffect(() => {
    function drawCgraphs() {
      document.querySelectorAll<HTMLElement>('.cgraph').forEach((g) => {
        const svg = g.querySelector<SVGSVGElement>('.cgraph__net');
        const core = g.querySelector<HTMLElement>('.core');
        const hubs = Array.from(g.querySelectorAll<HTMLElement>('.cgraph__hubs .cptree__hub'));
        if (!svg || !core) return;
        const gr = g.getBoundingClientRect();
        if (!gr.width) return;
        const cr = core.getBoundingClientRect();
        const cx = cr.left - gr.left + cr.width / 2;
        const cy = cr.top - gr.top + cr.height;
        svg.setAttribute('viewBox', `0 0 ${gr.width} ${gr.height}`);
        let out = '';
        hubs.forEach((el, i) => {
          const r = el.getBoundingClientRect();
          const hx = r.left - gr.left + r.width / 2;
          const hy = r.top - gr.top;
          const col = (getComputedStyle(el).getPropertyValue('--hc') || '#4a56f6').trim() || '#4a56f6';
          const my = (cy + hy) / 2;
          const d = `M${cx.toFixed(1)} ${cy.toFixed(1)} C${cx.toFixed(1)} ${my.toFixed(1)} ${hx.toFixed(1)} ${my.toFixed(1)} ${hx.toFixed(1)} ${hy.toFixed(1)}`;
          out += `<path class="wire" d="${d}" stroke="${col}"/>`;
          out += `<circle class="spark" r="3" fill="${col}" color="${col}"><animateMotion dur="2.1s" begin="${(i * 0.4).toFixed(2)}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" path="${d}"/></circle>`;
        });
        svg.innerHTML = out;
      });
    }
    drawCgraphs();
    window.addEventListener('resize', drawCgraphs);
    window.addEventListener('load', drawCgraphs);
    const t1 = setTimeout(drawCgraphs, 500);
    const t2 = setTimeout(drawCgraphs, 1500);
    if (document.fonts?.ready) document.fonts.ready.then(drawCgraphs);
    return () => {
      window.removeEventListener('resize', drawCgraphs);
      window.removeEventListener('load', drawCgraphs);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <div className="cwrap">
        {/* Hero stage — two browser mockups + phone */}
        <div className="chero__stage pocstage rv">
          <div className="chero__glow" aria-hidden="true"></div>
          <div className="dev dev--dash">
            <div className="brow">
              <div className="brow__bar">
                <span className="brow__dots"><i></i><i></i><i></i></span>
                <span className="brow__url">app.pocial.com</span>
              </div>
              <div className="brow__body">
                <Image src="/assets/pocial/poc-desk-07.png" alt="Pocial platform — engagement dashboard" width={960} height={540} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} priority />
              </div>
            </div>
          </div>
          <div className="dev dev--site">
            <div className="brow">
              <div className="brow__bar">
                <span className="brow__dots"><i></i><i></i><i></i></span>
                <span className="brow__url">pocial.com</span>
              </div>
              <div className="brow__body">
                <Image src="/assets/pocial/poc-desk-01.png" alt="Pocial marketing homepage" width={720} height={480} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} priority />
              </div>
            </div>
          </div>
          <div className="dev dev--phone">
            <div className="phone">
              <Image src="/assets/pocial/poc-mob-05.png" alt="Pocial mobile — schedule calendar" width={390} height={844} style={{ width: '100%', display: 'block' }} priority />
            </div>
          </div>
        </div>

        {/* Facts */}
        <div className="cfacts rv-s">
          {c.facts.map((f) => (
            <div key={f.label} className="cfact">
              <p className="cfact__l">— {f.label}</p>
              <p className="cfact__v">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 01 / Overview</aside>
            <div>
              <h2 className="csec__title rv">Marketing is hard. The design job was to make it feel <span className="ax">effortless.</span></h2>
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
            <aside className="csplit__aside rv">— 02 / The challenge</aside>
            <div>
              <h2 className="csec__title rv">Two audiences, twenty tools, one skeptical category.</h2>
              <div className="csec__prose rv">
                <p><b>One.</b> Two audiences, one product. Enterprises and agencies need scale, multi-location control, and brand compliance. Small businesses and creators need speed and simplicity. The same homepage had to win both without watering down either.</p>
                <p><b>Two.</b> Twenty-plus tools in one platform. Pile them into a sidebar and the product feels like work. The dashboard needed an organizing principle that stayed learnable as it grew.</p>
                <p><b>Three.</b> A category trained to distrust. &ldquo;AI marketing automation&rdquo; sets off alarm bells. The interface had to earn belief at every step, not demand it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 03 / Understanding the user</aside>
            <div>
              <h2 className="csec__title rv">Before designing, I mapped <span className="ax">who</span> we were really designing for.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.06s' }}>
                <p>The brief named &ldquo;two audiences,&rdquo; but two audiences don&apos;t make decisions — people do. So I turned the abstract brief into proto-personas: two people at opposite ends of the product, each with their own goals and the specific frustrations Pocial had to dissolve.</p>
              </div>
              <div className="cresearch-meta rv" style={{ transitionDelay: '0.1s' }}>
                <div className="crmeta"><span className="crmeta__k">— Built from</span><span className="crmeta__v">Brand philosophy · market &amp; competitor scan · category domain</span></div>
                <div className="crmeta"><span className="crmeta__k">— Artifact</span><span className="crmeta__v">2 proto-personas</span></div>
                <div className="crmeta"><span className="crmeta__k">— Pressure-tested against</span><span className="crmeta__v">The 5 product roles</span></div>
              </div>
              <p className="cresearch-note rv" style={{ transitionDelay: '0.12s' }}>A note on rigor: these are <b>proto-personas</b> — synthesized from the brand&apos;s established audience and the MarTech landscape rather than a formal interview study, then validated against the five roles the product serves. They gave every later decision a person to answer to.</p>
              <div className="cpgrid rv-s" style={{ transitionDelay: '0.16s' }}>
                {/* Maya */}
                <div className="cper">
                  <div className="cper__head">
                    <div className="cper__av">MR</div>
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
              <div className="cubridge rv-s" style={{ transitionDelay: '0.18s' }}>
                <div className="cubridge__item">
                  <div className="cubridge__n">— 01</div>
                  <h4 className="cubridge__t">Two extremes, one product.</h4>
                  <p className="cubridge__d"><span className="lead">Led to →</span> the dual-path architecture, so each person only sees language written for them.</p>
                </div>
                <div className="cubridge__item">
                  <div className="cubridge__n">— 02</div>
                  <h4 className="cubridge__t">The enemy is time &amp; clutter.</h4>
                  <p className="cubridge__d"><span className="lead">Led to →</span> a deliberately flat platform with color-coded hubs instead of a tool maze.</p>
                </div>
                <div className="cubridge__item">
                  <div className="cubridge__n">— 03</div>
                  <h4 className="cubridge__t">Skepticism is the real barrier.</h4>
                  <p className="cubridge__d"><span className="lead">Led to →</span> trust earned at every step — right down to the login screen.</p>
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
            <aside className="csplit__aside rv">— 04 / Defining the problem</aside>
            <div>
              <h2 className="csec__title rv">Two audiences and twenty tools collapsed into <span className="ax">one question.</span></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>This product wouldn&apos;t win or lose on features — it would win or lose on routing and trust. Every visitor had to feel the product was built for them, the moment they landed.</p>
              </div>
              <div className="chmw rv" style={{ transitionDelay: '0.12s' }}>
                <span className="lead">— The question</span>
                How might we make two very different audiences each feel the product was built for them — without building two products?
              </div>
              <div className="cprins rv-s" style={{ transitionDelay: '0.15s' }}>
                <div className="cprin"><div className="cprin__n">— Principle 01</div><h3 className="cprin__t">Route, don&apos;t crowd.</h3><p className="cprin__d">Every entry point commits to one audience. No visitor sees a feature meant for the other.</p></div>
                <div className="cprin"><div className="cprin__n">— Principle 02</div><h3 className="cprin__t">Name the fear, then answer it.</h3><p className="cprin__d">Lead with the user&apos;s real anxiety, and resolve it in the same breath.</p></div>
                <div className="cprin"><div className="cprin__n">— Principle 03</div><h3 className="cprin__t">One system, every surface.</h3><p className="cprin__d">A single visual and interaction language from marketing site to deep platform tool.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 05 / The process</aside>
            <div>
              <h2 className="csec__title rv">One process, repeated for <span className="ax">every screen.</span></h2>
              <div className="cproc__cards rv" style={{ transitionDelay: '0.1s' }}>
                <article className="ccard">
                  <div className="ccard__anim rj">
                    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                      <line x1="110" y1="100" x2="300" y2="50" /><line x1="110" y1="100" x2="320" y2="120" /><line x1="110" y1="100" x2="290" y2="170" />
                      <circle className="rjping" style={{ '--ox': '110px', '--oy': '100px' } as React.CSSProperties} cx="110" cy="100" r="20" /><circle className="rjping rjping2" style={{ '--ox': '110px', '--oy': '100px' } as React.CSSProperties} cx="110" cy="100" r="20" />
                      <circle cx="110" cy="100" r="28" fill="#101010" stroke="rgba(245,243,239,.2)" />
                      <g transform="translate(92, 77.5) scale(0.0414)" aria-hidden="true">
                        <path fill="#4a56f6" d="M729.15,436.7c25.86,21.02,45.37,44.84,58.53,71.48,5.83,11.8.66,26.06-11.47,31.16l-62.64,26.32c-11.17,4.69-24.02.26-30.04-10.25-6.41-11.19-14.85-21.08-25.35-29.66-16.17-13.22-36.89-19.84-62.15-19.84s-47.16,6.03-63.91,18.07c-16.75,12.05-25.12,27.77-25.12,47.16s7.93,34.82,23.8,48.04c15.87,13.22,42.01,26.01,78.46,38.35l39.67,13.22c54.66,18.82,96.53,43.64,125.62,74.49,22.04,23.38,35.71,52.25,41.05,86.58,56.83-120.26,59.43-267.31-21.82-401.73-11.35-18.77-59.18-85.47-77.45-91.45-37.01-12.13-48.56,31.87-65.27,56.05-1.44,2.09-2.92,4.18-4.43,6.28,32.91,5.91,60.43,17.8,82.51,35.73Z" />
                        <path fill="#4a56f6" d="M455.87,1009.28c-24.62-18.12-44.93-40.65-61-67.53-.02-.03-.06-.05-.08-.08l-14.56-25.01-191.64-319.6c-.78-1.31-2.2-2.11-3.72-2.11h0c-2.49,0-4.47,2.1-4.33,4.59l6.78,116.94c0,.08,0,.17,0,.25v290.26c39.44,26.7,84.41,47.34,134.32,59.97,90.83,22.99,177.4,16.04,253.45-12.3-44.23-4.33-83.99-19.42-119.24-45.38Z" />
                        <path fill="#4a56f6" d="M70.08,431.93c0-11.72,9.5-21.23,21.23-21.23h89.12c17.41,0,33.53,9.14,42.48,24.07l235.28,392.86c.04.07.08.15.12.23h.01c16.9,33.58,44.27,65.36,65.43,85.33,21.16,19.99,47.61,29.97,79.34,29.97,26.45,0,49.07-6.61,67.88-19.84,18.8-13.22,28.21-31.58,28.21-55.1s-8.97-42.75-26.89-57.74c-17.93-14.99-49.81-30.99-95.65-48.04l-38.79-14.11c-40.55-14.1-75.23-35.7-104.02-64.79-28.8-29.09-43.2-65.68-43.2-109.75,0-32.91,8.51-62.88,25.56-89.92,17.04-27.03,41.13-48.33,72.29-63.91,31.14-15.57,66.41-23.36,105.79-23.36,8.84,0,17.35.36,25.61,1,1.98-94.85-26.1-187.97-81.61-265.14-32.3-44.91-95.63-105.6-146.41-128.05-21.87-9.67-45.26-3.82-50.26,21.7-8.66,44.21-9.56,73.96-28.24,117.44-54.75,127.39-146.34,147.3-222.21,244.38-120.14,153.73-115.59,353.63-21.07,499.25v-455.24Z" />
                      </g>
                      <circle className="rjnode rjblink" cx="300" cy="50" r="9" style={{ '--d': '0s' } as React.CSSProperties} /><circle className="rjnode rjblink" cx="320" cy="120" r="9" style={{ '--d': '.5s' } as React.CSSProperties} /><circle className="rjnode rjblink" cx="290" cy="170" r="9" style={{ '--d': '1s' } as React.CSSProperties} />
                      <circle className="rjfloat" cx="200" cy="40" r="5" style={{ '--d': '.4s' } as React.CSSProperties} />
                    </svg>
                  </div>
                  <div className="ccard__body"><div className="ccard__n">01 — Immerse</div><h3 className="ccard__h">Immerse</h3><p className="ccard__d">Brand philosophy, business goals, and the competitive SaaS landscape.</p></div>
                </article>
                <article className="ccard">
                  <div className="ccard__anim rj">
                    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                      <g className="rjpop" style={{ '--d': '0s' } as React.CSSProperties}><circle className="rjax" cx="80" cy="56" r="11" /><rect x="100" y="45" width="84" height="22" fill="#161616" stroke="rgba(245,243,239,.2)" /></g>
                      <g className="rjpop" style={{ '--d': '.4s' } as React.CSSProperties}><circle className="rjax" cx="80" cy="104" r="11" /><rect x="100" y="93" width="104" height="22" fill="#161616" stroke="rgba(245,243,239,.2)" /></g>
                      <g className="rjpop" style={{ '--d': '.8s' } as React.CSSProperties}><circle className="rjnode" cx="80" cy="152" r="11" /><rect x="100" y="141" width="72" height="22" fill="#161616" stroke="rgba(245,243,239,.2)" /></g>
                      <g className="rjpop" style={{ '--d': '1.2s' } as React.CSSProperties}><circle className="rjnode" cx="244" cy="78" r="11" /><rect x="264" y="67" width="92" height="22" fill="#161616" stroke="rgba(245,243,239,.2)" /></g>
                      <g className="rjpop" style={{ '--d': '1.6s' } as React.CSSProperties}><circle className="rjnode" cx="244" cy="132" r="11" /><rect x="264" y="121" width="78" height="22" fill="#161616" stroke="rgba(245,243,239,.2)" /></g>
                    </svg>
                  </div>
                  <div className="ccard__body"><div className="ccard__n">02 — Define</div><h3 className="ccard__h">Define</h3><p className="ccard__d">Five roles, two audience tracks, and the jobs each one needs done.</p></div>
                </article>
                <article className="ccard">
                  <div className="ccard__anim rj">
                    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                      <rect className="rjdraw" pathLength={1} x="40" y="28" width="320" height="22" style={{ '--d': '0s' } as React.CSSProperties} />
                      <rect className="rjdraw" pathLength={1} x="40" y="60" width="80" height="110" style={{ '--d': '.4s' } as React.CSSProperties} />
                      <rect className="rjdraw" pathLength={1} x="132" y="60" width="106" height="50" style={{ '--d': '.8s' } as React.CSSProperties} />
                      <rect className="rjdraw" pathLength={1} x="250" y="60" width="110" height="50" style={{ '--d': '1.2s' } as React.CSSProperties} />
                      <rect className="rjdraw" pathLength={1} x="132" y="120" width="228" height="50" style={{ '--d': '1.6s' } as React.CSSProperties} />
                    </svg>
                  </div>
                  <div className="ccard__body"><div className="ccard__n">03 — Architect</div><h3 className="ccard__h">Architect</h3><p className="ccard__d">IA for a guided public site and a deliberately flat platform.</p></div>
                </article>
                <article className="ccard">
                  <div className="ccard__anim rj">
                    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                      <line x1="108" y1="100" x2="160" y2="100" /><line x1="240" y1="100" x2="292" y2="100" />
                      <rect x="34" y="56" width="74" height="88" fill="#161616" stroke="rgba(245,243,239,.2)" /><rect x="44" y="66" width="54" height="10" fill="rgba(245,243,239,.3)" /><rect x="44" y="82" width="38" height="6" fill="rgba(245,243,239,.18)" />
                      <rect x="160" y="56" width="80" height="88" fill="#161616" stroke="rgba(245,243,239,.2)" /><rect x="170" y="66" width="54" height="10" fill="rgba(245,243,239,.3)" />
                      <rect x="292" y="56" width="74" height="88" fill="#161616" stroke="rgba(245,243,239,.2)" /><rect x="302" y="66" width="54" height="10" fill="rgba(245,243,239,.3)" />
                      <circle className="rjpulse" style={{ '--tx': '52px' } as React.CSSProperties} cx="108" cy="100" r="4" /><circle className="rjpulse" style={{ '--tx': '52px', '--d': '1.3s' } as React.CSSProperties} cx="240" cy="100" r="4" />
                      <circle className="rjtap" cx="200" cy="124" r="8" />
                    </svg>
                  </div>
                  <div className="ccard__body"><div className="ccard__n">04 — Flows</div><h3 className="ccard__h">Flows</h3><p className="ccard__d">Onboarding, dual-path routing, and the Snap2Share loop.</p></div>
                </article>
                <article className="ccard">
                  <div className="ccard__anim rj">
                    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                      <rect className="rjtile" x="40" y="32" width="70" height="44" style={{ '--d': '0s' } as React.CSSProperties} /><rect className="rjtile" x="120" y="32" width="70" height="44" style={{ '--d': '.2s' } as React.CSSProperties} /><rect className="rjtileax" x="200" y="32" width="70" height="44" style={{ '--d': '.4s' } as React.CSSProperties} /><rect className="rjtile" x="280" y="32" width="80" height="44" style={{ '--d': '.6s' } as React.CSSProperties} />
                      <circle className="rjsw" cx="56" cy="120" r="10" fill="#2f8f86" style={{ '--d': '0s' } as React.CSSProperties} /><circle className="rjsw" cx="84" cy="120" r="10" fill="#c2772e" style={{ '--d': '.15s' } as React.CSSProperties} /><circle className="rjsw" cx="112" cy="120" r="10" fill="#6e57c2" style={{ '--d': '.3s' } as React.CSSProperties} /><circle className="rjsw" cx="140" cy="120" r="10" fill="#b8456a" style={{ '--d': '.45s' } as React.CSSProperties} />
                      <rect className="rjpop" x="184" y="108" width="80" height="24" fill="#4a56f6" style={{ '--d': '.6s' } as React.CSSProperties} />
                      <text x="292" y="128" fontFamily="Geist, sans-serif" fontSize="24" fontWeight="700" fill="rgba(245,243,239,.5)" className="rjblink">Aa</text>
                    </svg>
                  </div>
                  <div className="ccard__body"><div className="ccard__n">05 — System</div><h3 className="ccard__h">System</h3><p className="ccard__d">Color-coded wayfinding, one card pattern, fail-safe inputs.</p></div>
                </article>
                <article className="ccard">
                  <div className="ccard__anim rj">
                    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                      <rect x="150" y="22" width="100" height="50" fill="#161616" stroke="rgba(245,243,239,.2)" />
                      <circle className="rjax rjblink" cx="168" cy="47" r="5" style={{ '--d': '0s' } as React.CSSProperties} /><rect x="182" y="40" width="52" height="7" fill="rgba(245,243,239,.3)" />
                      <path className="rjchev" d="M180 138 l20 -16 l20 16" style={{ '--d': '0s' } as React.CSSProperties} /><path className="rjchev" d="M180 138 l20 -16 l20 16" style={{ '--d': '.4s' } as React.CSSProperties} /><path className="rjchev" d="M180 138 l20 -16 l20 16" style={{ '--d': '.8s' } as React.CSSProperties} />
                      <line x1="200" y1="72" x2="100" y2="158" /><line x1="200" y1="72" x2="200" y2="172" /><line x1="200" y1="72" x2="300" y2="158" />
                      <circle className="rjnode rjblink" cx="100" cy="158" r="8" style={{ '--d': '.2s' } as React.CSSProperties} /><circle className="rjnode rjblink" cx="200" cy="172" r="8" style={{ '--d': '.5s' } as React.CSSProperties} /><circle className="rjnode rjblink" cx="300" cy="158" r="8" style={{ '--d': '.8s' } as React.CSSProperties} />
                    </svg>
                  </div>
                  <div className="ccard__body"><div className="ccard__n">06 — Ship</div><h3 className="ccard__h">Ship</h3><p className="ccard__d">Homepage through every page, plus 25 platform screens.</p></div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Path */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 06 / Dual-path architecture</aside>
            <div>
              <h2 className="csec__title rv">One platform, <span className="ax">two paths</span> to success.</h2>
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
            </div>
          </div>
        </div>
      </section>

      {/* Who it serves */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 07 / Who it serves</aside>
            <div>
              <h2 className="csec__title rv">It works for the <span className="ax">entire</span> marketing team.</h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>The homepage speaks to five roles in their own language — so everyone from the person posting daily to the executive protecting the brand sees themselves in the product.</p>
              </div>
              <div className="croles rv-s" style={{ transitionDelay: '0.12s' }}>
                <div className="crole"><p className="crole__k">01</p><p className="crole__n">Social Media Manager</p><p className="crole__q">&ldquo;Create. Post. Done.&rdquo;</p></div>
                <div className="crole"><p className="crole__k">02</p><p className="crole__n">Marketing Manager</p><p className="crole__q">&ldquo;One calendar, every channel.&rdquo;</p></div>
                <div className="crole"><p className="crole__k">03</p><p className="crole__n">Director of Marketing</p><p className="crole__q">&ldquo;Proof it&apos;s working.&rdquo;</p></div>
                <div className="crole"><p className="crole__k">04</p><p className="crole__n">Chief Marketing Officer</p><p className="crole__q">&ldquo;Brand control at scale.&rdquo;</p></div>
                <div className="crole"><p className="crole__k">05</p><p className="crole__n">CEO / Owner</p><p className="crole__q">&ldquo;Claim your presence.&rdquo;</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 08 / Information architecture</aside>
            <div>
              <h2 className="csec__title rv">Two maps: a guided site, a <span className="ax">flat</span> platform.</h2>
              <div className="csec__prose rv">
                <p>The marketing site is structured to <b>route</b> — every dropdown nudges a visitor toward their path. The platform is structured to <b>stay out of the way</b> — no sidebar, no deep nesting, every tool one or two taps from a single dashboard.</p>
              </div>
              <div className="cmap cmap--graph rv">
                <div className="cmap__root"><span className="d"></span>Marketing site</div>
                <div className="cgraph cgraph--5" id="cgraph-poc-site">
                  <svg className="cgraph__net" aria-hidden="true"></svg>
                  <div className="cgraph__core">
                    <div className="core core--text">pocial<span style={{ color: '#6e78f8' }}>.com</span></div>
                  </div>
                  <div className="cgraph__hubs">
                    <div className="cptree__hub" style={{ '--hc': '#4a56f6' } as React.CSSProperties}><b>Why Pocial?</b><ul><li>Philosophy</li><li>Three pillars</li><li>FAQ</li></ul></div>
                    <div className="cptree__hub" style={{ '--hc': '#4a56f6' } as React.CSSProperties}><b>Solutions</b><ul><li>Overview</li><li>Enterprise &amp; Agencies</li><li>Small Business</li></ul></div>
                    <div className="cptree__hub" style={{ '--hc': '#4a56f6' } as React.CSSProperties}><b>Industries</b><ul><li>Real Estate</li><li>Restaurants</li><li>Fitness &amp; Wellness</li><li>Retail Franchises</li></ul></div>
                    <div className="cptree__hub" style={{ '--hc': '#4a56f6' } as React.CSSProperties}><b>Features</b><ul><li>Overview</li><li>Multi-Location</li><li>Snap2Share</li><li>Month of Content</li></ul></div>
                    <div className="cptree__hub" style={{ '--hc': '#4a56f6' } as React.CSSProperties}><b>About</b><ul><li>Story</li><li>Our Mission</li><li>Careers</li><li>Contact</li></ul></div>
                  </div>
                </div>
              </div>
              <p className="cia__cap rv">Public website — five nav pillars, each routing to an audience or industry story.</p>
              <div className="cmap cmap--graph rv">
                <div className="cmap__root"><span className="d"></span>Pocial Platform · Dashboard</div>
                <div className="cgraph cgraph--5" id="cgraph-poc-app">
                  <svg className="cgraph__net" aria-hidden="true"></svg>
                  <div className="cgraph__core">
                    <div className="core core--text">dashboard</div>
                  </div>
                  <div className="cgraph__hubs">
                    <div className="cptree__hub" style={{ '--hc': '#2f8f86' } as React.CSSProperties}><b>Create</b><ul><li>Quick Create</li><li>Month of Content</li><li>Story &amp; Post</li><li>Poll / Reward</li></ul></div>
                    <div className="cptree__hub" style={{ '--hc': '#d9655e' } as React.CSSProperties}><b>My Content</b><ul><li>Gallery</li><li>Campaigns</li><li>Social queue</li><li>Emails</li></ul></div>
                    <div className="cptree__hub" style={{ '--hc': '#5fa183' } as React.CSSProperties}><b>Findings</b><ul><li>Data Vault</li><li>Competitors</li><li>Social Stats</li><li>Lead Funnel</li></ul></div>
                    <div className="cptree__hub" style={{ '--hc': '#6e93b8' } as React.CSSProperties}><b>Features</b><ul><li>Snap2Share</li><li>Scan &amp; Go</li><li>Event Suite</li><li>Email Suite</li></ul></div>
                    <div className="cptree__hub" style={{ '--hc': '#8b7fd0' } as React.CSSProperties}><b>Always in reach</b><ul><li>Calendar</li><li>Connections</li><li>Public profile</li><li>Wallet</li></ul></div>
                  </div>
                </div>
              </div>
              <p className="cia__cap rv">Internal platform — one dashboard, four hubs, global tools always in reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Headline Formula */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 09 / Voice &amp; headline formula</aside>
            <div>
              <h2 className="csec__title rv">Every headline names a fear, then <span className="ax">answers it.</span></h2>
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
            <aside className="csplit__aside rv">— 10 / The platform</aside>
            <div>
              <h2 className="csec__title rv">20+ tools, organized by <span className="ax">color.</span></h2>
              <div className="csec__prose rv">
                <p>The dashboard has no sidebar. Every tool lives under one of four color-coded hubs — so wayfinding is instant and the interface stays learnable even as it scales. Color does the navigating.</p>
              </div>
              <div className="chubs rv-s">
                <div className="chub" style={{ '--hc': '#2f8f86' } as React.CSSProperties}>
                  <div className="chub__anim">
                    <svg viewBox="0 0 90 48">
                      <rect className="hbar" x="14" y="12" width="9" height="30" style={{ '--d': '0s' } as React.CSSProperties} />
                      <rect className="hbar" x="30" y="12" width="9" height="30" style={{ '--d': '.2s' } as React.CSSProperties} />
                      <rect className="hbar" x="46" y="12" width="9" height="30" style={{ '--d': '.1s' } as React.CSSProperties} />
                      <circle className="hsat" cx="72" cy="16" r="5" style={{ '--d': '.3s' } as React.CSSProperties} />
                    </svg>
                  </div>
                  <p className="chub__t">Create</p>
                  <p className="chub__d">Composer, templates, and the AI campaign builder.</p>
                </div>
                <div className="chub" style={{ '--hc': '#c2772e' } as React.CSSProperties}>
                  <div className="chub__anim">
                    <svg viewBox="0 0 90 48">
                      <rect className="hcell" x="12" y="10" width="16" height="12" />
                      <rect className="hcell on" x="32" y="10" width="16" height="12" style={{ '--d': '0s' } as React.CSSProperties} />
                      <rect className="hcell" x="52" y="10" width="16" height="12" />
                      <rect className="hcell" x="12" y="26" width="16" height="12" />
                      <rect className="hcell on" x="32" y="26" width="16" height="12" style={{ '--d': '1.2s' } as React.CSSProperties} />
                      <rect className="hcell on" x="52" y="26" width="16" height="12" style={{ '--d': '.6s' } as React.CSSProperties} />
                    </svg>
                  </div>
                  <p className="chub__t">Schedule</p>
                  <p className="chub__d">Calendar, queues, and automated posting.</p>
                </div>
                <div className="chub" style={{ '--hc': '#6e57c2' } as React.CSSProperties}>
                  <div className="chub__anim">
                    <svg viewBox="0 0 90 48">
                      <line className="hl" x1="26" y1="24" x2="60" y2="11" />
                      <line className="hl" x1="26" y1="24" x2="66" y2="27" />
                      <line className="hl" x1="26" y1="24" x2="56" y2="41" />
                      <circle className="hring" cx="26" cy="24" r="9" />
                      <circle className="hcore" cx="26" cy="24" r="7" />
                      <circle className="hsat" cx="60" cy="11" r="4.5" style={{ '--d': '0s' } as React.CSSProperties} />
                      <circle className="hsat" cx="66" cy="27" r="4.5" style={{ '--d': '.4s' } as React.CSSProperties} />
                      <circle className="hsat" cx="56" cy="41" r="4.5" style={{ '--d': '.8s' } as React.CSSProperties} />
                    </svg>
                  </div>
                  <p className="chub__t">Engage</p>
                  <p className="chub__d">UGC vault, inbox, and community tools.</p>
                </div>
                <div className="chub" style={{ '--hc': '#b8456a' } as React.CSSProperties}>
                  <div className="chub__anim">
                    <svg viewBox="0 0 90 48">
                      <rect className="hbar" x="12" y="8" width="10" height="34" style={{ '--d': '.3s' } as React.CSSProperties} />
                      <rect className="hbar" x="28" y="8" width="10" height="34" style={{ '--d': '0s' } as React.CSSProperties} />
                      <rect className="hbar" x="44" y="8" width="10" height="34" style={{ '--d': '.45s' } as React.CSSProperties} />
                      <rect className="hbar" x="60" y="8" width="10" height="34" style={{ '--d': '.2s' } as React.CSSProperties} />
                    </svg>
                  </div>
                  <p className="chub__t">Analyze</p>
                  <p className="chub__d">Performance, segments, and reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snap2Share */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 11 / Signature flow: Snap2Share</aside>
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
                  { n: '04', t: 'Gets a reward', d: 'The portal can offer a coupon or entry to a sweepstakes.' },
                  { n: '05', t: 'Pocial approves', d: 'The team reviews the submission in the Engage hub.' },
                  { n: '06', t: 'Post, tag &amp; share', d: 'One click publishes to all linked channels with the customer\'s permission.' },
                  { n: '07', t: 'Track the impact', d: 'Engagement and results populate analytics automatically.' },
                  { n: '08', t: 'Repeat at scale', d: 'Print the code everywhere — every location, event, and promotion captures content.' },
                ].map((s) => (
                  <div key={s.n} className="cloopstep">
                    <p className="cloopstep__n">{s.n}</p>
                    <p className="cloopstep__t" dangerouslySetInnerHTML={{ __html: s.t }} />
                    <p className="cloopstep__d">{s.d}</p>
                  </div>
                ))}
              </div>
              <p className="cloop__kicker rv">You printed a QR code. <span className="tl">Pocial did the rest.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Low-fi Wireframes */}
      <section className="csec csec--wide">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 12 / Low-fi wireframes</aside>
            <div>
              <h2 className="csec__title rv">Structure in grayscale, <span className="ax">first.</span></h2>
              <div className="csec__prose rv">
                <p>Before any color touched the screen, I wireframed the core surfaces in grayscale to settle hierarchy and the repeating card pattern that makes the whole platform feel predictable.</p>
              </div>
              <div className="cwires rv-s">
                <div className="chome">
                  <span className="cwire__tag">Homepage — full marketing site</span>
                  <div className="chome__frame">
                    <div className="chw-nav">
                      <div className="lg chw-g1"></div>
                      <div className="links"><i className="chw-g2"></i><i className="chw-g2"></i><i className="chw-g2"></i><i className="chw-g2"></i><i className="chw-g2"></i><i className="chw-g2"></i></div>
                      <div className="btns"><span></span><span></span></div>
                    </div>
                    <div className="chw-sec">
                      <div className="chw-h1 chw-g1"></div>
                      <div className="chw-h1 b chw-g1"></div>
                      <div className="chw-sub chw-g2"></div>
                      <div className="chw-avatars"><b></b><b></b><b></b><b></b></div>
                      <div className="chw-signup">
                        <div className="lbl chw-g2"></div>
                        <div className="field"><span className="ph chw-g2"></span><span className="go"></span></div>
                        <div className="or chw-g2"></div>
                        <div className="lbl chw-g2"></div>
                        <div className="field"><span className="ph chw-g2"></span></div>
                      </div>
                      <div className="chw-para"><i className="chw-g3"></i><i className="chw-g3"></i><i className="chw-g3"></i></div>
                    </div>
                    <div className="chw-sec">
                      <div className="chw-h2 chw-g1"></div>
                      <div className="chw-subline chw-g2"></div>
                      <div className="chw-tabs"><span className="chw-g1"></span><span className="chw-g3"></span><span className="chw-g3"></span><span className="chw-g3"></span></div>
                      <div className="chw-video"><div className="chw-play"></div></div>
                    </div>
                    <div className="chw-sec">
                      <div className="chw-h2 c chw-g1"></div>
                      <div className="chw-cards5">
                        <div className="chw-rcard"><div className="b"></div><div className="t chw-g1"></div><div className="cp chw-g2"></div></div>
                        <div className="chw-rcard"><div className="b"></div><div className="t chw-g1"></div><div className="cp chw-g2"></div></div>
                        <div className="chw-rcard"><div className="b"></div><div className="t chw-g1"></div><div className="cp chw-g2"></div></div>
                        <div className="chw-rcard"><div className="b"></div><div className="t chw-g1"></div><div className="cp chw-g2"></div></div>
                        <div className="chw-rcard"><div className="b"></div><div className="t chw-g1"></div><div className="cp chw-g2"></div></div>
                      </div>
                    </div>
                    <div className="chw-sec">
                      <div className="chw-h2 c chw-g1"></div>
                      <div className="chw-subline chw-g2"></div>
                      <div className="chw-plans">
                        <div className="chw-plan"><div className="ic chw-g2"></div><div className="h chw-g1"></div><div className="l l1 chw-g3"></div><div className="l l2 chw-g3"></div><div className="pbtn"></div></div>
                        <div className="chw-plan"><div className="ic chw-g2"></div><div className="h chw-g1"></div><div className="l l1 chw-g3"></div><div className="l l2 chw-g3"></div><div className="pbtn"></div></div>
                        <div className="chw-plan"><div className="ic chw-g2"></div><div className="h chw-g1"></div><div className="l l1 chw-g3"></div><div className="l l2 chw-g3"></div><div className="pbtn"></div></div>
                        <div className="chw-plan"><div className="ic chw-g2"></div><div className="h chw-g1"></div><div className="l l1 chw-g3"></div><div className="l l2 chw-g3"></div><div className="pbtn"></div></div>
                      </div>
                    </div>
                    <div className="chw-sec chw-foot">
                      <div className="lg chw-g1"></div>
                      <div className="mid"><i className="chw-g2"></i><i className="chw-g2"></i><i className="chw-g2"></i><i className="chw-g2"></i></div>
                      <div className="gb"></div>
                    </div>
                  </div>
                  <p className="cwires__cap">The full homepage IA in grayscale: hero sign-up, problem → solution tabs, role-based value cards, and the four-tier plan grid.</p>
                </div>
                {/* Platform dashboard */}
                <div className="cplatform">
                  <span className="cwire__tag">Platform dashboard — desktop &amp; mobile</span>
                  <div className="cpw-pair">
                    <div className="cpw-desk">
                      <div className="cpw-top">
                        <div className="lg chw-g1" />
                        <div className="tabs"><i className="chw-g2" /><i className="chw-g1 on" /><i className="chw-g2" /></div>
                        <div className="ic"><span /><span /><span /></div>
                      </div>
                      <div className="cpw-body">
                        <div className="cpw-head">
                          <div className="h chw-g1" />
                          <div className="cpw-seg"><span className="on" /><span /><span /></div>
                        </div>
                        <div className="cpw-kpis">
                          <div className="cpw-card">
                            <div className="cpw-lbl chw-g1" />
                            <div className="cpw-sr"><span className="k chw-g2" /><span className="v chw-g1" /></div>
                            <div className="cpw-sr"><span className="k chw-g2" /><span className="v chw-g1" /></div>
                            <div className="cpw-sr"><span className="k chw-g2" /><span className="v chw-g1" /></div>
                          </div>
                          <div className="cpw-card">
                            <div className="cpw-4">
                              <div className="st"><div className="o" /><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="st"><div className="o" /><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="st"><div className="o" /><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="st"><div className="o" /><div className="t chw-g2" /><div className="n chw-g1" /></div>
                            </div>
                          </div>
                          <div className="cpw-card">
                            <div className="cpw-lbl chw-g1" />
                            <div className="cpw-sr"><span className="k chw-g2" /><span className="v chw-g1" /></div>
                            <div className="cpw-sr"><span className="k chw-g2" /><span className="v chw-g1" /></div>
                          </div>
                        </div>
                        <div className="cpw-charts">
                          <div className="cpw-chart">
                            <div className="h chw-g1" />
                            <div className="cpw-graph cpw-grid">
                              <svg className="cpw-svg" viewBox="0 0 320 124" preserveAspectRatio="none">
                                <polyline points="0,96 40,80 80,86 120,70 160,74 200,58 240,66 280,50 320,60" fill="none" stroke="#4a4a4a" strokeWidth="1.6" />
                                <polyline points="0,70 40,66 80,52 120,60 160,44 200,54 240,40 280,48 320,38" fill="none" stroke="#3a3833" strokeWidth="1.6" />
                                <polyline points="0,108 40,96 80,104 120,88 160,98 200,84 240,92 280,78 320,86" fill="none" stroke="#5a5a5a" strokeWidth="1.6" />
                              </svg>
                            </div>
                            <div className="cpw-spark">
                              <div className="cpw-spk"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="cpw-spk"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="cpw-spk"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                            </div>
                          </div>
                          <div className="cpw-chart">
                            <div className="h chw-g1" />
                            <div className="cpw-srow"><div className="lab"><span className="a chw-g2" /><span className="b chw-g1" /></div><div className="bar"><i style={{width:'62%'}} /></div><div className="view" /></div>
                            <div className="cpw-srow"><div className="lab"><span className="a chw-g2" /><span className="b chw-g1" /></div><div className="bar"><i style={{width:'78%'}} /></div><div className="view" /></div>
                            <div className="cpw-srow"><div className="lab"><span className="a chw-g2" /><span className="b chw-g1" /></div><div className="bar"><i style={{width:'48%'}} /></div><div className="view" /></div>
                            <div className="cpw-srow"><div className="lab"><span className="a chw-g2" /><span className="b chw-g1" /></div><div className="bar"><i style={{width:'34%'}} /></div><div className="view" /></div>
                            <div className="cpw-srow"><div className="lab"><span className="a chw-g2" /><span className="b chw-g1" /></div><div className="bar"><i style={{width:'55%'}} /></div><div className="view" /></div>
                            <div className="cpw-srow"><div className="lab"><span className="a chw-g2" /><span className="b chw-g1" /></div><div className="bar"><i style={{width:'40%'}} /></div><div className="view" /></div>
                          </div>
                        </div>
                        <div className="cpw-votes">
                          <svg viewBox="0 0 84 84" width="84" height="84" aria-hidden="true">
                            <circle cx="42" cy="42" r="31" fill="none" stroke="#26241f" strokeWidth="11" />
                            <circle cx="42" cy="42" r="31" fill="none" stroke="#4a4a4a" strokeWidth="11" strokeDasharray="64 131" transform="rotate(-90 42 42)" />
                            <circle cx="42" cy="42" r="31" fill="none" stroke="#37352f" strokeWidth="11" strokeDasharray="42 153" strokeDashoffset="-64" transform="rotate(-90 42 42)" />
                            <circle cx="42" cy="42" r="31" fill="none" stroke="#5e5e5e" strokeWidth="11" strokeDasharray="34 161" strokeDashoffset="-106" transform="rotate(-90 42 42)" />
                          </svg>
                          <div>
                            <div className="vk">
                              <div className="row"><span className="d chw-g1" /><span className="t chw-g2" /><span className="n chw-g1" /></div>
                              <div className="row"><span className="d chw-g2" /><span className="t chw-g2" /><span className="n chw-g1" /></div>
                              <div className="row"><span className="d chw-g1" /><span className="t chw-g2" /><span className="n chw-g1" /></div>
                              <div className="row"><span className="d chw-g2" /><span className="t chw-g2" /><span className="n chw-g1" /></div>
                            </div>
                            <div className="cpw-demos">
                              <div className="dc"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="dc"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="dc"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="dc"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="dc"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cpw-phone">
                      <div className="cpw-pscreen">
                        <div className="cpw-pbar">
                          <span className="ico"><span /></span>
                          <div className="lg chw-g1" />
                          <span className="ico"><span /><span /></span>
                        </div>
                        <div className="cpw-pbody">
                          <div className="cpw-phead"><div className="h chw-g1" /><div className="chip" /></div>
                          <div className="cpw-pcard">
                            <div className="cpw-lbl chw-g1" />
                            <div className="cpw-p3">
                              <div className="st"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="st"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                              <div className="st"><div className="t chw-g2" /><div className="n chw-g1" /></div>
                            </div>
                          </div>
                          <div className="cpw-pcard">
                            <div className="cpw-prow"><span className="o" /><span className="t chw-g2" /><span className="v chw-g1" /></div>
                            <div className="cpw-prow"><span className="o" /><span className="t chw-g2" /><span className="v chw-g1" /></div>
                            <div className="cpw-prow"><span className="o" /><span className="t chw-g2" /><span className="v chw-g1" /></div>
                            <div className="cpw-prow"><span className="o" /><span className="t chw-g2" /><span className="v chw-g1" /></div>
                          </div>
                          <div className="cpw-pcard">
                            <div className="cpw-lbl chw-g1" />
                            <div className="cpw-graph cpw-grid" style={{height:84}}>
                              <svg className="cpw-svg" viewBox="0 0 180 84" preserveAspectRatio="none">
                                <polyline points="0,58 30,48 60,54 90,40 120,46 150,32 180,42" fill="none" stroke="#4a4a4a" strokeWidth="1.6" />
                                <polyline points="0,40 30,44 60,30 90,38 120,26 150,34 180,24" fill="none" stroke="#3a3833" strokeWidth="1.6" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="cpw-ptab">
                          <div className="tb"><span className="o" /><span className="t chw-g2" /></div>
                          <div className="tb"><span className="o" /><span className="t chw-g2" /></div>
                          <div className="tb"><span className="o" /><span className="t chw-g2" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="cwires__cap">The whole platform reduced to its skeleton — the same analytics dashboard at desktop width and reflowed to a single thumb-reachable column on mobile, shown side by side.</p>
                </div>

                {/* Post composer */}
                <div className="cplatform">
                  <span className="cwire__tag">Post composer — desktop &amp; mobile</span>
                  <div className="cpw-pair">
                    <div className="cpw-desk">
                      <div className="cpw-top">
                        <div className="lg chw-g1" />
                        <div className="tabs"><i className="chw-g2" /><i className="chw-g1 on" /><i className="chw-g2" /></div>
                        <div className="ic"><span /><span /><span /></div>
                      </div>
                      <div className="ccw-split">
                        <div className="ccw-canvas" />
                        <div className="ccw-panel">
                          <div className="ccw-bar">
                            <div className="close"><span className="ccw-x" /><span className="t chw-g2" /></div>
                            <div className="acts"><span className="a chw-g1" /><span className="a chw-g2" /><span className="a chw-g2" /></div>
                          </div>
                          <div className="ccw-title chw-g1" />
                          <div className="ccw-tabs"><i className="chw-g2" /><i className="chw-g1 on" /><i className="chw-g2" /><i className="chw-g2" /></div>
                          <div className="ccw-post">
                            <div className="ccw-phead">
                              <div className="av" />
                              <div className="nm"><span className="a chw-g1" /><span className="b chw-g2" /></div>
                              <div className="dots chw-g2" />
                            </div>
                            <div className="ccw-lines"><i className="chw-g3" /><i className="chw-g3" /><i className="chw-g3" /></div>
                            <div className="ccw-img" />
                            <div className="ccw-react"><span className="em"><b /><b /><b /></span><span className="t chw-g2" /><span className="c chw-g2" /></div>
                            <div className="ccw-actbar">
                              <div className="ab"><span className="o" /><span className="t chw-g2" /></div>
                              <div className="ab"><span className="o" /><span className="t chw-g2" /></div>
                              <div className="ab"><span className="o" /><span className="t chw-g2" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cpw-phone">
                      <div className="cpw-pscreen">
                        <div className="cpw-pbar">
                          <span className="ico"><span /></span>
                          <div className="lg chw-g1" />
                          <span className="ico"><span /><span /></span>
                        </div>
                        <div className="cpw-pbody">
                          <div className="ccw-mhead"><span className="ccw-x" /><span className="t chw-g1" /><span className="s chw-g2" /></div>
                          <div className="ccw-mtitle chw-g1" />
                          <div className="ccw-post">
                            <div className="ccw-img" />
                            <div className="ccw-mreact"><span className="o" /><span className="o" /><span className="o" /><span className="o bk" /></div>
                            <div className="ccw-mliked"><span className="av" /><span className="t chw-g2" /></div>
                            <div className="ccw-lines"><i className="chw-g3" /><i className="chw-g3" /><i className="chw-g3" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="cwires__cap">The post composer — the calendar with its slide-in publish panel and platform tabs on desktop, and the single-card social preview on mobile.</p>
                </div>

                {/* Content calendar */}
                <div className="cplatform">
                  <span className="cwire__tag">Content calendar — desktop &amp; mobile</span>
                  <div className="cpw-pair">
                    <div className="cpw-desk">
                      <div className="cpw-top"><div className="lg chw-g1" /><div className="tabs"><i className="chw-g1 on" /><i className="chw-g2" /><i className="chw-g2" /></div><div className="ic"><span /><span /><span /></div></div>
                      <div className="cpw-body">
                        <div className="ccal-head"><div className="ss chw-g1" /><div className="mo"><span className="ar" /><span className="m chw-g1" /><span className="ar" /></div><div className="up chw-g2" /></div>
                        <div>
                          <div className="ccal-wk"><span><i /></span><span><i /></span><span><i /></span><span><i /></span><span><i /></span><span><i /></span><span><i /></span></div>
                          <div className="ccal-grid">
                            <div className="ccal-cell"><span className="dn chw-g3" /></div>
                            <div className="ccal-cell"><span className="dn chw-g3" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /><div className="ccal-chip" /><div className="ccal-chip" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /><div className="ccal-chip" /><div className="ccal-chip" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /><div className="ccal-chip" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /><div className="ccal-chip" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /><div className="ccal-chip" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /><div className="ccal-chip" /><div className="ccal-chip" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /><div className="ccal-chip" /><div className="ccal-chip" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /><div className="ccal-chip" /><div className="ccal-chip" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /><div className="ccal-chip" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g2" /></div>
                            <div className="ccal-cell"><span className="dn chw-g3" /></div>
                            <div className="ccal-cell"><span className="dn chw-g3" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cpw-phone">
                      <div className="cpw-pscreen">
                        <div className="cpw-pbar"><span className="ico"><span /></span><div className="lg chw-g1" /><span className="ico"><span /><span /></span></div>
                        <div className="cpw-pbody">
                          <div className="ccal-mss"><div className="ss chw-g1" /><div className="up chw-g2" /></div>
                          <div className="ccal-mnav"><span className="ar" /><span className="m chw-g1" /><span className="ar" /></div>
                          <div className="ccal-mwk"><span><i /></span><span><i /></span><span><i /></span><span><i /></span><span><i /></span><span><i /></span><span><i /></span></div>
                          <div className="ccal-mgrid">
                            <b><i /></b><b><i /></b><b><i /></b><b className="sel"><i /></b><b><i /></b><b><i /></b><b><i /></b>
                            <b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b>
                            <b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b>
                            <b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b>
                            <b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b><b><i /></b>
                          </div>
                          <div className="cpw-pcard" style={{gap:7}}>
                            <div className="cpw-lbl chw-g1" />
                            <div className="ccal-mchip" /><div className="ccal-mchip" /><div className="ccal-mchip" /><div className="ccal-mchip" />
                          </div>
                        </div>
                        <div className="cpw-ptab"><div className="tb"><span className="o" /><span className="t chw-g2" /></div><div className="tb"><span className="o" /><span className="t chw-g2" /></div><div className="tb"><span className="o" /><span className="t chw-g2" /></div></div>
                      </div>
                    </div>
                  </div>
                  <p className="cwires__cap">The scheduling calendar — a full seven-column month grid with post chips on desktop, condensed to a tappable month picker and a per-day agenda list on mobile.</p>
                </div>

                {/* UGC media gallery */}
                <div className="cplatform">
                  <span className="cwire__tag">UGC media gallery — desktop &amp; mobile</span>
                  <div className="cpw-pair">
                    <div className="cpw-desk">
                      <div className="cpw-top"><div className="lg chw-g1" /><div className="tabs"><i className="chw-g2" /><i className="chw-g1 on" /><i className="chw-g2" /></div><div className="ic"><span /><span /><span /></div></div>
                      <div className="ccw-split">
                        <div className="ccw-canvas" />
                        <div className="ccw-panel">
                          <div className="ccw-bar"><div className="close"><span className="ccw-x" /><span className="t chw-g1" /></div></div>
                          <div className="cugc-srch"><span className="p chw-g2" /><span className="i" /></div>
                          <div className="cugc-sel" />
                          <div className="cugc-gh"><span className="ck" /><span className="pill" /><span className="t chw-g2" /></div>
                          <div className="cugc-grid">
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile sel"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile sel"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                          </div>
                          <div className="cugc-gh"><span className="ck" /><span className="pill" /><span className="t chw-g2" /></div>
                          <div className="cugc-grid">
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile sel"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cpw-phone">
                      <div className="cpw-pscreen">
                        <div className="cpw-pbar"><span className="ico"><span /></span><div className="lg chw-g1" /><span className="ico"><span /><span /></span></div>
                        <div className="cpw-pbody">
                          <div className="ccw-mhead"><span className="ccw-x" /><span className="t chw-g1" /></div>
                          <div className="cugc-srch"><span className="p chw-g2" /><span className="i" /></div>
                          <div className="cugc-mbar"><span className="cancel" /><span className="t chw-g2" /><span className="tr" /></div>
                          <div className="cugc-gh"><span className="ck" /><span className="pill" /><span className="t chw-g2" /></div>
                          <div className="cugc-mgrid">
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile sel"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile sel"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile sel"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                            <div className="cugc-tile"><span className="cb" /><span className="ey" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="cwires__cap">The UGC picker — a slide-in masonry gallery with multi-select on desktop, and the same library as a three-up grid sized for thumbs on mobile.</p>
                </div>

                {/* AI campaign assistant */}
                <div className="cplatform">
                  <span className="cwire__tag">Pocial AI campaign assistant — desktop &amp; mobile</span>
                  <div className="cpw-pair">
                    <div className="cpw-desk">
                      <div className="cpw-top"><div className="lg chw-g1" /><div className="tabs"><i className="chw-g1 on" /><i className="chw-g2" /><i className="chw-g2" /></div><div className="ic"><span /><span /><span /></div></div>
                      <div className="cai-body">
                        <div className="cai-side">
                          <div className="cai-newbtn" />
                          <div className="h chw-g1" />
                          <div className="cai-grp chw-g2" />
                          <div className="cai-item" /><div className="cai-item" /><div className="cai-item" />
                          <div className="cai-grp chw-g2" />
                          <div className="cai-item" /><div className="cai-item" /><div className="cai-item" />
                        </div>
                        <div className="cai-chat">
                          <div className="cai-logo chw-g1" />
                          <div className="cai-sub chw-g2" />
                          <div className="cai-msg"><span className="av" /><span className="tx"><i className="chw-g2" /><i className="chw-g2" /></span></div>
                          <div className="cai-msg"><span className="av" /><span className="tx"><i className="chw-g2" /></span></div>
                          <div className="cai-msg"><span className="av" /><span className="tx"><i className="chw-g2" /><i className="chw-g2" /></span></div>
                          <div className="cai-input"><span className="send" /></div>
                        </div>
                        <div className="cai-right">
                          <div className="h chw-g1" />
                          <div className="cai-card"><span className="o" /><span className="t chw-g2" /><span className="ar chw-g2" /></div>
                          <div className="cai-card"><span className="o" /><span className="t chw-g2" /><span className="ar chw-g2" /></div>
                          <div className="cai-card"><span className="o" /><span className="t chw-g2" /><span className="ar chw-g2" /></div>
                          <div className="cai-card"><span className="o" /><span className="t chw-g2" /><span className="ar chw-g2" /></div>
                          <div className="h chw-g1" />
                          <div className="cai-card"><span className="o" /><span className="t chw-g2" /><span className="ar chw-g2" /></div>
                          <div className="cai-card"><span className="o" /><span className="t chw-g2" /><span className="ar chw-g2" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="cpw-phone">
                      <div className="cpw-pscreen">
                        <div className="cpw-pbar"><span className="ico"><span /></span><div className="lg chw-g1" /><span className="ico"><span /><span /></span></div>
                        <div className="cpw-pbody">
                          <div className="caf-back"><span className="ar chw-g2" /><span className="t chw-g1" /></div>
                          <div className="caf-logo chw-g1" />
                          <div className="caf-title chw-g1" />
                          <div className="caf-step">
                            <div className="s on"><span className="d" /><span className="t chw-g2" /></div>
                            <div className="s"><span className="d" /><span className="t chw-g2" /></div>
                            <div className="s"><span className="d" /><span className="t chw-g2" /></div>
                            <div className="s"><span className="d" /><span className="t chw-g2" /></div>
                          </div>
                          <div className="caf-line chw-g3" />
                          <div className="caf-field"><span className="l chw-g2" /><span className="in" /></div>
                          <div className="caf-field"><span className="l chw-g2" /><span className="in" /></div>
                          <div className="caf-field"><span className="l chw-g2" /><span className="in" /></div>
                          <div className="caf-2">
                            <div className="caf-field"><span className="l chw-g2" /><span className="in" /></div>
                            <div className="caf-field"><span className="l chw-g2" /><span className="in" /></div>
                          </div>
                          <div className="caf-2">
                            <div className="caf-field"><span className="l chw-g2" /><span className="in" /></div>
                            <div className="caf-field"><span className="l chw-g2" /><span className="in" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="cwires__cap">The AI campaign assistant — a three-pane builder (history, conversation, channel outputs) on desktop, reframed as a guided, stepped prompt form on mobile.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="csec">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 13 / Design system</aside>
            <div>
              <h2 className="csec__title rv">Warm, human, and <span className="ax">unmistakably teal.</span></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>A dual-font system pairs an editorial serif (trust, weight) with a clean sans (modern, efficient) — the brand&apos;s duality in type. Teal is used with discipline: it only ever marks the next action or the reassuring word.</p>
              </div>
              <div className="cds3 rv-s" style={{ transitionDelay: '0.12s' }}>
                <div className="cds3__card">
                  <div className="cds3__h">Palette — color as wayfinding</div>
                  <div className="cds3__sw">
                    {[['#2f8f86','Teal'],['#d9655e','Coral'],['#5fa183','Green'],['#6e93b8','Blue'],['#1c2b35','Ink'],['#f8f9fa','Surface']].map(([clr,nm]) => (
                      <div key={nm}>
                        <div className="cds3__chip" style={{ background: clr }} />
                        <div className="cds3__hex">{nm}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cds3__card">
                  <div className="cds3__h">Type — serif + sans duality</div>
                  <div className="cds3__t1">Aa Headline</div>
                  <div className="cds3__t2">Section heading</div>
                  <div className="cds3__t3">Body copy in a clean sans, sized for fast scanning across long marketing pages.</div>
                </div>
                <div className="cds3__card">
                  <div className="cds3__h">Components</div>
                  <div className="cds3__chips" style={{ marginBottom: 14 }}>
                    <span>Book a Demo →</span>
                    <span>Learn more</span>
                    <span>See all features</span>
                    <span>New</span>
                  </div>
                  <div className="cds3__t3">A single button, link, pill, and field pattern — reused everywhere so a dense product stays consistent.</div>
                </div>
                <div className="cds3__card">
                  <div className="cds3__h">Principle — teal means action</div>
                  <div className="cds3__t2">Color is never decoration.</div>
                  <div className="cds3__t3">If something is teal, it&apos;s either the next step or the promise. That single rule keeps a dense product calm and scannable.</div>
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
            <aside className="csplit__aside rv">— 14 / Final screens</aside>
            <div>
              <h2 className="csec__title rv">From homepage to the <span className="ax">whole platform.</span></h2>
              <div className="csec__prose rv">
                <p>The shipped design carries one voice across every surface — the marketing site that sells the promise, and the platform that keeps it.</p>
              </div>
              <div className="cgal rv-s">
                {POCIAL_DESKTOP.map((s) => (
                  <div key={s.src} className="cshot">
                    <div className="cshot__bar">
                      <span /><span /><span />
                      <i>{s.label}</i>
                    </div>
                    <Image src={s.src} alt={s.label} width={600} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="csec csec--wide">
        <div className="cwrap">
          <div className="csplit">
            <aside className="csplit__aside rv">— 15 / On mobile</aside>
            <div>
              <h2 className="csec__title rv">Built for the phone <span className="ax">first.</span></h2>
              <div className="csec__prose rv">
                <p>Most posting happens on the go. The same system reflows to a single thumb-reachable column — browsing the UGC gallery, previewing a post, and walking the AI campaign prompt without a single pinch-zoom.</p>
              </div>
              <div className="cmob rv-s">
                {POCIAL_MOBILE.map((s) => (
                  <div key={s.src} className="cmob__item">
                    <div className="cphone">
                      <Image src={s.src} alt={s.label} width={200} height={432} style={{ width: '100%', height: 'auto' }} loading="lazy" />
                    </div>
                    <p className="cmob__cap"><b>{s.label}</b> · {s.sub}</p>
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
            <aside className="csplit__aside rv">— 16 / Validation</aside>
            <div>
              <h2 className="csec__title rv">How I&apos;d prove the bets <span className="ax">actually work.</span></h2>
              <div className="csec__prose rv" style={{ transitionDelay: '0.08s' }}>
                <p>Each design decision was a hypothesis. Before shipping, I mapped out four tests — one per core bet — with a concrete method and a measurable signal I&apos;d trust.</p>
              </div>

              <div className="cvtest rv-s" style={{ transitionDelay: '0.12s' }}>
                <div className="cvcard">
                  <div className="cvcard__n">— Test 01 · Dual-path routing</div>
                  <h3 className="cvcard__h">Visitors self-select the right journey on the first screen.</h3>
                  <div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">First-click &amp; tree testing on the navigation</div></div>
                  <div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v"><b>≥80%</b> reach the correct path on the first click</div></div>
                </div>
                <div className="cvcard">
                  <div className="cvcard__n">— Test 02 · No-sidebar platform</div>
                  <h3 className="cvcard__h">Color-coded hubs make 20+ tools findable without a persistent menu.</h3>
                  <div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">Moderated task test — locate &amp; launch five tools</div></div>
                  <div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v">Task success ↑ and time-to-find ↓ vs. a sidebar control</div></div>
                </div>
                <div className="cvcard">
                  <div className="cvcard__n">— Test 03 · Headline formula</div>
                  <h3 className="cvcard__h">Fear-then-reassurance headlines make the value land faster.</h3>
                  <div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">Five-second test &amp; A/B on the hero headline</div></div>
                  <div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v">Higher unprompted recall of the core <b>promise</b></div></div>
                </div>
                <div className="cvcard">
                  <div className="cvcard__n">— Test 04 · Snap2Share loop</div>
                  <h3 className="cvcard__h">A single capture reaches a scheduled post in under a minute.</h3>
                  <div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">Timed first-use task with new users</div></div>
                  <div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v">Median time-to-publish <b>&lt; 60s</b></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="cimpact">
        <div className="cwrap">
          <p className="cimpact__eyebrow rv">— 17 / Scope &amp; what it&apos;s built to do</p>
          <h2 className="csec__title rv">One coherent system, <span className="ax">end to end.</span></h2>
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
            <aside className="csplit__aside rv">— 18 / Reflection</aside>
            <div>
              <h2 className="csec__title rv">What I&apos;d push on next.</h2>
              <div className="cref rv" style={{ transitionDelay: '0.1s' }}>
                {[
                  { n: '01', h: 'Anchor the pricing.', p: '"Book a demo" suits enterprise, but SMB visitors want a number. A starter price would cut a trust gap.' },
                  { n: '02', h: 'Instrument the routes.', p: 'Tag every dual-path entry point so we can see which audience each headline actually wins.' },
                  { n: '03', h: 'Onboard by role.', p: 'Tailor the first session to the role chosen at signup, so the empty state already feels personal.' },
                ].map((r) => (
                  <div key={r.n} className="cref__item">
                    <p className="cref__n">— {r.n}</p>
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
  useEffect(() => {
    function drawCgraphs() {
      document.querySelectorAll<HTMLElement>('.cgraph').forEach((g) => {
        const svg = g.querySelector<SVGSVGElement>('.cgraph__net');
        const core = g.querySelector<HTMLElement>('.core');
        const hubs = Array.from(g.querySelectorAll<HTMLElement>('.cgraph__hubs .cptree__hub'));
        if (!svg || !core) return;
        const gr = g.getBoundingClientRect();
        if (!gr.width) return;
        const cr = core.getBoundingClientRect();
        const cx = cr.left - gr.left + cr.width / 2;
        const cy = cr.top - gr.top + cr.height;
        svg.setAttribute('viewBox', `0 0 ${gr.width} ${gr.height}`);
        let out = '';
        hubs.forEach((el, i) => {
          const r = el.getBoundingClientRect();
          const hx = r.left - gr.left + r.width / 2;
          const hy = r.top - gr.top;
          const col = (getComputedStyle(el).getPropertyValue('--hc') || '#4a56f6').trim() || '#4a56f6';
          const my = (cy + hy) / 2;
          const d = `M${cx.toFixed(1)} ${cy.toFixed(1)} C${cx.toFixed(1)} ${my.toFixed(1)} ${hx.toFixed(1)} ${my.toFixed(1)} ${hx.toFixed(1)} ${hy.toFixed(1)}`;
          out += `<path class="wire" d="${d}" stroke="${col}"/>`;
          out += `<circle class="spark" r="3" fill="${col}" color="${col}"><animateMotion dur="2.1s" begin="${(i * 0.4).toFixed(2)}s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear" path="${d}"/></circle>`;
        });
        svg.innerHTML = out;
      });
    }
    drawCgraphs();
    window.addEventListener('resize', drawCgraphs);
    window.addEventListener('load', drawCgraphs);
    const t1 = setTimeout(drawCgraphs, 500);
    const t2 = setTimeout(drawCgraphs, 1500);
    if (document.fonts?.ready) document.fonts.ready.then(drawCgraphs);
    return () => {
      window.removeEventListener('resize', drawCgraphs);
      window.removeEventListener('load', drawCgraphs);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <div className="cwrap">
        {/* Hero stage — desktop browser + phone in hand */}
        <div className="chero__stage ebstage rv">
          <div className="chero__glow" aria-hidden="true"></div>
          <figure className="ebstage__desk">
            <div className="brow">
              <div className="brow__bar">
                <span className="brow__dots"><i></i><i></i><i></i></span>
                <span className="brow__url">ebinaa.info · design · build · buy</span>
              </div>
              <div className="brow__body">
                <Image src="/assets/ebinaa/eb-hero-desktop.png" alt="eBinaa — Project Opportunities (OHB marketplace)" width={960} height={660} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              </div>
            </div>
            <figcaption className="ebtag"><span className="d"></span>App · Project Opportunities</figcaption>
          </figure>
          <figure className="ebstage__hand">
            <figcaption className="ebtag ebtag--r"><span className="d"></span>The homeowner&apos;s app · ع</figcaption>
            <div className="ebstage__phone">
              <Image src="/assets/ebinaa/eb-hero-phone.png" alt="eBinaa app — homeowner home screen" width={430} height={932} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
            </div>
          </figure>
        </div>

        {/* Facts */}
        <div className="cfacts rv-s">
          {c.facts.map((f) => (
            <div key={f.label} className="cfact">
              <p className="cfact__l">{f.label}</p>
              <p className="cfact__v">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 01 Overview */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 01 / Overview</div>
          <div>
            <h2 className="csec__title rv">A whole home journey — <span className="ax">design, build &amp; buy.</span></h2>
            <div className="csec__prose rv">
              <p>eBinaa connects homeowners in Oman with verified architects, contractors and developers — from designing a home, to building it under a structured contract with stage-based payments, to buying a ready or off-plan property. It&apos;s free for owners, bilingual (English / Arabic), and covers all nine governorates.</p>
              <p>The product had one organizing idea: <b>remove risk from the biggest purchase of someone&apos;s life.</b> Trust here isn&apos;t a marketing word — it&apos;s built into verified company profiles, standardized contracts, a 5% retention policy, and payments that only release as real work is completed.</p>
            </div>
          </div>
        </div></div>
      </section>

      {/* 02 Challenge */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 02 / The challenge</div>
          <div>
            <h2 className="csec__title rv">Building a home meant trusting strangers with your life savings.</h2>
            <div className="csec__prose rv">
              <p><b>One.</b> No way to verify reputation. Contractors and architects were judged on word of mouth — there was no reliable record of who actually delivered quality work.</p>
              <p><b>Two.</b> Informal deals, no protection. Agreements were verbal and money was often paid upfront, so if a contractor abandoned the job mid-way, the owner had little recourse and real losses.</p>
              <p><b>Three.</b> A scattered, invisible process. Design, contracting, permitting and buying lived in disconnected places — with no progress visibility, no easy way to compare firms, and limited access to housing finance.</p>
            </div>
          </div>
        </div></div>
      </section>

      {/* 03 User */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 03 / Understanding the user</div>
          <div>
            <h2 className="csec__title rv">Before designing, I mapped <span className="ax">who</span> we were really designing for.</h2>
            <div className="csec__prose rv"><p>The platform serves homeowners, companies and partners — but the homeowner is the centre of gravity. I built the design around one primary persona: an Omani planning to build a home on their granted land, and the firms and institutions they have to learn to trust.</p></div>
            <div className="cresearch-meta rv">
              <div className="crmeta"><span className="crmeta__k">— Built from</span><span className="crmeta__v">Product context · ebinaa.info · Oman home-building culture</span></div>
              <div className="crmeta"><span className="crmeta__k">— Artifact</span><span className="crmeta__v">1 primary persona + secondary actors</span></div>
              <div className="crmeta"><span className="crmeta__k">— Pressure-tested against</span><span className="crmeta__v">Companies · Oman Housing Bank · MoCIIP</span></div>
            </div>
            <p className="cresearch-note rv">A note on rigor: the primary persona is <b>synthesized</b> from eBinaa&apos;s product context and Oman&apos;s land-grant building culture rather than a formal interview study, then pressure-tested against the firms and partners an owner relies on. It gave every later decision a person to design for.</p>
            <div className="cpgrid rv-s">
              <article className="cper">
                <div className="cper__head"><div className="cper__av">SA</div><div><div className="cper__name">Salim Al-Harthy · سالم</div><div className="cper__role">First-time home builder</div><div className="cper__ctx">Granted plot · building on his own land · first build</div></div></div>
                <div className="cper__cols">
                  <div className="cper__col cper__col--goal"><h5>Goals</h5><ul><li>Build a quality home within budget</li><li>Know exactly who to trust</li><li>See progress without chasing anyone</li></ul></div>
                  <div className="cper__col cper__col--pain"><h5>Pain points</h5><ul><li>Can&apos;t verify a firm&apos;s track record</li><li>Fears overpaying and abandonment</li><li>Process scattered across people &amp; paper</li></ul></div>
                </div>
                <p className="cper__quote">&ldquo;This is my life&apos;s biggest investment — I need to know the people I&apos;m trusting are real.&rdquo;</p>
              </article>
              <article className="cper">
                <div className="cper__head"><div className="cper__av">CP</div><div><div className="cper__name">Companies &amp; Partners</div><div className="cper__role">Firms, the bank &amp; regulators</div><div className="cper__ctx">List · verify · contract · finance</div></div></div>
                <div className="cper__cols">
                  <div className="cper__col cper__col--goal"><h5>What they need</h5><ul><li>Companies: reach serious, ready owners</li><li>Oman Housing Bank: connect buyers to finance</li><li>MoCIIP: regulatory credibility &amp; oversight</li></ul></div>
                  <div className="cper__col cper__col--pain"><h5>Friction</h5><ul><li>Hard to reach owners ready to commit</li><li>No standard, enforceable contract</li><li>The trust gap cuts both ways</li></ul></div>
                </div>
                <p className="cper__quote">&ldquo;Owners won&apos;t commit until they believe the firm — and the contract — are real.&rdquo;</p>
              </article>
            </div>
            <div className="cubridge rv-s">
              <div className="cubridge__item"><div className="cubridge__n">— 01</div><h4 className="cubridge__t">Trust is the #1 barrier.</h4><p className="cubridge__d"><span className="lead">Led to →</span> verification-first company profiles: ratings, completed projects, engineers and minimum price, shown up front.</p></div>
              <div className="cubridge__item"><div className="cubridge__n">— 02</div><h4 className="cubridge__t">Money feels unsafe.</h4><p className="cubridge__d"><span className="lead">Led to →</span> standardized contracts, a 5% retention policy, and payments released stage by stage.</p></div>
              <div className="cubridge__item"><div className="cubridge__n">— 03</div><h4 className="cubridge__t">The journey is scattered.</h4><p className="cubridge__d"><span className="lead">Led to →</span> one platform across Design, Build and Buy, with a built-in project management tool.</p></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* 04 Problem */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 04 / Defining the problem</div>
          <div>
            <h2 className="csec__title rv">It all collapsed into <span className="ax">one question.</span></h2>
            <div className="csec__prose rv"><p>The research pointed one way: eBinaa wouldn&apos;t win or lose on features — it would win or lose on <b>trust</b>. A homeowner had to believe the company was real, the contract was fair, and the money was safe before they&apos;d commit to anything.</p></div>
            <p className="chmw rv"><span className="lead">— The question</span>How might we give homeowners in Oman one trusted place to design, build and buy a home — where every company is verified, every contract is fair, and every payment follows real, completed work?</p>
            <div className="cprins rv-s">
              <div className="cprin"><div className="cprin__n">— Principle 01</div><h3 className="cprin__t">Trust, made structural.</h3><p className="cprin__d">Verification, contracts, retention and staged payments are designed into the product — not promised in copy.</p></div>
              <div className="cprin"><div className="cprin__n">— Principle 02</div><h3 className="cprin__t">Design lifecycles, not screens.</h3><p className="cprin__d">Every project is an honest state machine — submit, contract, build, pay, hand over — with no dead ends and no guessing.</p></div>
              <div className="cprin"><div className="cprin__n">— Principle 03</div><h3 className="cprin__t">Bilingual by mirror.</h3><p className="cprin__d">Arabic RTL is designed as a complete right-to-left mirror, not a translation bolted on at the end.</p></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* 05 My Role */}
      <section className="cproc" id="process">
        <div className="cwrap">
          <div className="csplit__aside rv" style={{ position: 'static', color: '#4a56f6', fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '.06em', marginBottom: 14 }}>— 05 / My role</div>
          <h2 className="csec__title rv">What I owned, <span className="ax">end to end.</span></h2>
          <div className="cproc__cards rv-s">
            <article className="ccard">
              <div className="ccard__anim rj">
                <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                  <line x1="110" y1="100" x2="300" y2="50" /><line x1="110" y1="100" x2="320" y2="120" /><line x1="110" y1="100" x2="290" y2="170" />
                  <circle className="rjping" style={{ '--ox': '110px', '--oy': '100px' } as React.CSSProperties} cx="110" cy="100" r="20" /><circle className="rjping rjping2" style={{ '--ox': '110px', '--oy': '100px' } as React.CSSProperties} cx="110" cy="100" r="20" />
                  <circle cx="110" cy="100" r="28" fill="#101010" stroke="rgba(245,243,239,.2)" />
                  <circle className="rjnode rjblink" cx="300" cy="50" r="9" style={{ '--d': '0s' } as React.CSSProperties} /><circle className="rjnode rjblink" cx="320" cy="120" r="9" style={{ '--d': '.5s' } as React.CSSProperties} /><circle className="rjnode rjblink" cx="290" cy="170" r="9" style={{ '--d': '1s' } as React.CSSProperties} />
                  <circle className="rjfloat" cx="200" cy="40" r="5" style={{ '--d': '.4s' } as React.CSSProperties} />
                </svg>
              </div>
              <div className="ccard__body"><div className="ccard__n">01 — IA</div><h3 className="ccard__h">Architecture</h3><p className="ccard__d">The navigation model — Design, Build, Buy — and how firms, projects, contracts and listings relate.</p></div>
            </article>
            <article className="ccard">
              <div className="ccard__anim rj">
                <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                  <g className="rjpop" style={{ '--d': '0s' } as React.CSSProperties}><circle className="rjnode" cx="80" cy="56" r="11" /><rect x="100" y="45" width="84" height="22" fill="#161616" stroke="rgba(245,243,239,.2)" /></g>
                  <g className="rjpop" style={{ '--d': '.4s' } as React.CSSProperties}><circle className="rjnode" cx="80" cy="104" r="11" /><rect x="100" y="93" width="104" height="22" fill="#161616" stroke="rgba(245,243,239,.2)" /></g>
                  <g className="rjpop" style={{ '--d': '.8s' } as React.CSSProperties}><circle className="rjax" cx="80" cy="152" r="11" /><rect x="100" y="141" width="72" height="22" fill="#161616" stroke="rgba(245,243,239,.2)" /></g>
                  <g className="rjpop" style={{ '--d': '1.2s' } as React.CSSProperties}><circle className="rjnode" cx="244" cy="78" r="11" /><rect x="264" y="67" width="92" height="22" fill="#161616" stroke="rgba(245,243,239,.2)" /></g>
                  <g className="rjpop" style={{ '--d': '1.6s' } as React.CSSProperties}><circle className="rjnode" cx="244" cy="132" r="11" /><rect x="264" y="121" width="78" height="22" fill="#161616" stroke="rgba(245,243,239,.2)" /></g>
                </svg>
              </div>
              <div className="ccard__body"><div className="ccard__n">02 — Flows</div><h3 className="ccard__h">Interaction</h3><p className="ccard__d">The build journey, firm comparison, the contract and stage-based payments, and property search.</p></div>
            </article>
            <article className="ccard">
              <div className="ccard__anim rj">
                <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                  <rect className="rjdraw" pathLength={1} x="40" y="28" width="320" height="22" style={{ '--d': '0s' } as React.CSSProperties} />
                  <rect className="rjdraw" pathLength={1} x="40" y="60" width="80" height="110" style={{ '--d': '.4s' } as React.CSSProperties} />
                  <rect className="rjdraw" pathLength={1} x="132" y="60" width="106" height="50" style={{ '--d': '.8s' } as React.CSSProperties} />
                  <rect className="rjdraw" pathLength={1} x="250" y="60" width="110" height="50" style={{ '--d': '1.2s' } as React.CSSProperties} />
                  <rect className="rjdraw" pathLength={1} x="132" y="120" width="228" height="50" style={{ '--d': '1.6s' } as React.CSSProperties} />
                </svg>
              </div>
              <div className="ccard__body"><div className="ccard__n">03 — System</div><h3 className="ccard__h">UI system</h3><p className="ccard__d">A trust-first component library: company cards, comparison tables, contract steps, filters, navigation.</p></div>
            </article>
            <article className="ccard">
              <div className="ccard__anim rj">
                <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                  <line x1="108" y1="100" x2="160" y2="100" /><line x1="240" y1="100" x2="292" y2="100" />
                  <rect x="34" y="56" width="74" height="88" fill="#161616" stroke="rgba(245,243,239,.2)" /><rect x="44" y="66" width="54" height="10" fill="rgba(245,243,239,.3)" /><rect x="44" y="82" width="38" height="6" fill="rgba(245,243,239,.18)" />
                  <rect x="160" y="56" width="80" height="88" fill="#161616" stroke="rgba(245,243,239,.2)" /><rect x="170" y="66" width="54" height="10" fill="rgba(245,243,239,.3)" />
                  <rect x="292" y="56" width="74" height="88" fill="#161616" stroke="rgba(245,243,239,.2)" /><rect x="302" y="66" width="54" height="10" fill="rgba(245,243,239,.3)" />
                  <circle className="rjpulse" style={{ '--tx': '52px' } as React.CSSProperties} cx="108" cy="100" r="4" /><circle className="rjpulse" style={{ '--tx': '52px', '--d': '1.3s' } as React.CSSProperties} cx="240" cy="100" r="4" />
                  <circle className="rjtap" cx="200" cy="124" r="8" />
                </svg>
              </div>
              <div className="ccard__body"><div className="ccard__n">04 — Bilingual</div><h3 className="ccard__h">RTL</h3><p className="ccard__d">The Arabic right-to-left experience designed as a first-class mirror, not an afterthought.</p></div>
            </article>
            <article className="ccard">
              <div className="ccard__anim rj">
                <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                  <rect className="rjtile" x="40" y="32" width="70" height="44" style={{ '--d': '0s' } as React.CSSProperties} /><rect className="rjtile" x="120" y="32" width="70" height="44" style={{ '--d': '.2s' } as React.CSSProperties} /><rect className="rjtileax" x="200" y="32" width="70" height="44" style={{ '--d': '.4s' } as React.CSSProperties} /><rect className="rjtile" x="280" y="32" width="80" height="44" style={{ '--d': '.6s' } as React.CSSProperties} />
                  <circle className="rjsw" cx="56" cy="120" r="10" fill="#2f8f86" style={{ '--d': '0s' } as React.CSSProperties} /><circle className="rjsw" cx="84" cy="120" r="10" fill="#c2772e" style={{ '--d': '.15s' } as React.CSSProperties} /><circle className="rjsw" cx="112" cy="120" r="10" fill="#6e57c2" style={{ '--d': '.3s' } as React.CSSProperties} /><circle className="rjsw" cx="140" cy="120" r="10" fill="#b8456a" style={{ '--d': '.45s' } as React.CSSProperties} />
                  <rect className="rjpop" x="184" y="108" width="80" height="24" fill="#4a56f6" style={{ '--d': '.6s' } as React.CSSProperties} />
                  <text x="292" y="128" fontFamily="Geist, sans-serif" fontSize="24" fontWeight="700" fill="rgba(245,243,239,.5)" className="rjblink">Aa</text>
                </svg>
              </div>
              <div className="ccard__body"><div className="ccard__n">05 — QA</div><h3 className="ccard__h">Design QA</h3><p className="ccard__d">Consistency held across dozens of screens, in both directions.</p></div>
            </article>
            <article className="ccard">
              <div className="ccard__anim rj">
                <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
                  <rect x="150" y="22" width="100" height="50" fill="#161616" stroke="rgba(245,243,239,.2)" />
                  <circle className="rjax rjblink" cx="168" cy="47" r="5" style={{ '--d': '0s' } as React.CSSProperties} /><rect x="182" y="40" width="52" height="7" fill="rgba(245,243,239,.3)" />
                  <path className="rjchev" d="M180 138 l20 -16 l20 16" style={{ '--d': '0s' } as React.CSSProperties} /><path className="rjchev" d="M180 138 l20 -16 l20 16" style={{ '--d': '.4s' } as React.CSSProperties} /><path className="rjchev" d="M180 138 l20 -16 l20 16" style={{ '--d': '.8s' } as React.CSSProperties} />
                  <line x1="200" y1="72" x2="100" y2="158" /><line x1="200" y1="72" x2="200" y2="172" /><line x1="200" y1="72" x2="300" y2="158" />
                  <circle className="rjnode rjblink" cx="100" cy="158" r="8" style={{ '--d': '.2s' } as React.CSSProperties} /><circle className="rjnode rjblink" cx="200" cy="172" r="8" style={{ '--d': '.5s' } as React.CSSProperties} /><circle className="rjnode rjblink" cx="300" cy="158" r="8" style={{ '--d': '.8s' } as React.CSSProperties} />
                </svg>
              </div>
              <div className="ccard__body"><div className="ccard__n">06 — Explore</div><h3 className="ccard__h">Exploration</h3><p className="ccard__d">Layout directions for the highest-traffic screens — the firm marketplace and property search — before converging.</p></div>
            </article>
          </div>
        </div>
      </section>

      {/* 06 Goals */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 06 / Goals</div>
          <div>
            <h2 className="csec__title rv">What success looks like, on <span className="ax">both sides.</span></h2>
            <div className="csec__prose rv"><p>Every design decision answered to two scoreboards at once — the platform&apos;s need to grow a verified, transacting marketplace (it monetizes from the business side), and the homeowner&apos;s need to design, build or buy with total confidence.</p></div>
            <div className="cpaths rv-s">
              <div className="cpath"><div className="cpath__tag">Business goals</div><h3 className="cpath__t">Grow the verified marketplace.</h3><p className="cpath__b">Make verified firms and fair, contracted projects the norm — and the reason companies pay to be on the platform.</p><div className="cpath__list"><div>Grow verified companies</div><div>Drive real, contracted projects</div><div>Build credibility via bank &amp; ministry partners</div></div></div>
              <div className="cpath"><div className="cpath__tag">User goals · homeowner</div><h3 className="cpath__t">Design, build or buy — with confidence.</h3><p className="cpath__b">Give an Omani homeowner everything they need to make the biggest decision of their life, in one trusted place.</p><div className="cpath__list"><div>Find &amp; compare verified firms</div><div>Build under a fair, staged contract</div><div>Buy with Oman Housing Bank finance</div></div></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* 07 Big Idea */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 07 / The big idea</div>
          <div>
            <h2 className="csec__title rv">Trust, made <span className="ax">structural.</span></h2>
            <div className="csec__prose rv"><p>eBinaa&apos;s whole reason to exist is trust. Rather than asking homeowners to take a leap of faith, the design builds trust into the mechanics — who you work with, the contract you sign, and how the money moves.</p></div>
            <div className="statleg rv-s">
              <div className="statrow"><span className="sw" style={{ background: '#3ddc84' }}></span><div><b>Verified companies</b><span>Ratings, completed projects, engineers and minimum price — shown up front.</span></div></div>
              <div className="statrow"><span className="sw" style={{ background: '#0E2A38' }}></span><div><b>Standardized contracts</b><span>Clear technical &amp; administrative terms protect both sides.</span></div></div>
              <div className="statrow"><span className="sw" style={{ background: '#d99a2b' }}></span><div><b>5% retention policy</b><span>Exit a job mid-way and you bear the cost — abandonment is disincentivized.</span></div></div>
              <div className="statrow"><span className="sw" style={{ background: '#1F6F8B' }}></span><div><b>Stage-based payments</b><span>Contractors are paid only after each construction stage is verified.</span></div></div>
              <div className="statrow"><span className="sw" style={{ background: '#6e93b8' }}></span><div><b>Project management tool</b><span>Owners track milestones and progress in real time.</span></div></div>
              <div className="statrow"><span className="sw" style={{ background: '#5c5a55' }}></span><div><b>Compare before you commit</b><span>Multiple firms and offers, side by side.</span></div></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* 08 IA */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 08 / Information architecture</div>
          <div>
            <h2 className="csec__title rv">Three journeys, <span className="ax">one home.</span></h2>
            <div className="csec__prose rv"><p>The product is organized around three top-level services — <b>Design</b>, <b>Build</b> and <b>Buy</b> — plus the homeowner&apos;s account and a project management tool. The IA mirrors the real journey: design your home, build it under contract, or buy one ready-made — with trust signals one tap away.</p></div>
            <div className="cmap cmap--graph rv">
              <div className="cmap__root"><span className="d"></span>Top-level navigation</div>
              <div className="cgraph cgraph--5" id="cgraph2">
                <svg className="cgraph__net" aria-hidden="true"></svg>
                <div className="cgraph__core"><div className="core core--text">home</div></div>
                <div className="cgraph__hubs">
                  <div className="cptree__hub" style={{ '--hc': '#3ddc84' } as React.CSSProperties}><b>Design</b><ul><li>Architect firms</li><li>Compare profiles</li><li>3D / landscape / MEP</li><li>Connect</li></ul></div>
                  <div className="cptree__hub" style={{ '--hc': '#d99a2b' } as React.CSSProperties}><b>Build</b><ul><li>Submit project</li><li>Structure / Turn-key</li><li>Matched firms</li><li>Contract &amp; pay</li></ul></div>
                  <div className="cptree__hub" style={{ '--hc': '#1F6F8B' } as React.CSSProperties}><b>Buy</b><ul><li>Property marketplace</li><li>Villas / townhouses</li><li>Price &amp; bedroom filters</li><li>OHB finance</li></ul></div>
                  <div className="cptree__hub" style={{ '--hc': '#6e93b8' } as React.CSSProperties}><b>Manage</b><ul><li>Milestones</li><li>Stage approvals</li><li>Progress &amp; updates</li></ul></div>
                  <div className="cptree__hub" style={{ '--hc': '#8b7fd0' } as React.CSSProperties}><b>Account</b><ul><li>Profile</li><li>Saved firms</li><li>Documents</li><li>ع / EN</li></ul></div>
                </div>
              </div>
            </div>
            <p className="cia__cap rv">Top-level navigation — Design, Build and Buy down one rail, with account and progress one tap away.</p>
            <div className="cmap cmap--graph rv">
              <div className="cmap__root"><span className="d"></span>The build journey, in stages</div>
              <div className="cgraph cgraph--5" id="cgraph">
                <svg className="cgraph__net" id="cgraphNet" aria-hidden="true"></svg>
                <div className="cgraph__core"><div className="core core--text">build</div></div>
                <div className="cgraph__hubs">
                  <div className="cptree__hub" style={{ '--hc': '#3ddc84' } as React.CSSProperties}><b>Submit</b><ul><li>Plot location</li><li>Drawing status</li><li>Build type</li></ul></div>
                  <div className="cptree__hub" style={{ '--hc': '#d99a2b' } as React.CSSProperties}><b>Match</b><ul><li>Verified contractors</li><li>Supervision consultant</li><li>Compare offers</li></ul></div>
                  <div className="cptree__hub" style={{ '--hc': '#1F6F8B' } as React.CSSProperties}><b>Contract</b><ul><li>Standardized terms</li><li>5% retention</li><li>Sign</li></ul></div>
                  <div className="cptree__hub" style={{ '--hc': '#6e93b8' } as React.CSSProperties}><b>Pay &amp; build</b><ul><li>Stage-based release</li><li>PM tool</li><li>Progress</li></ul></div>
                  <div className="cptree__hub" style={{ '--hc': '#8b7fd0' } as React.CSSProperties}><b>Top bar</b><ul><li>Open projects</li><li>Language ع / EN</li><li>Notifications</li><li>Account</li></ul></div>
                </div>
              </div>
            </div>
            <p className="cia__cap rv">The build journey — submit, match, contract, then build with money released stage by stage.</p>
          </div>
        </div></div>
      </section>

      {/* 09 Bilingual */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 09 / Bilingual, by mirror</div>
          <div>
            <h2 className="csec__title rv">Every screen speaks <span className="ax">two languages.</span></h2>
            <div className="csec__prose rv"><p>Arabic isn&apos;t a translation bolted on — it&apos;s a complete right-to-left mirror: navigation on the right, mirrored cards, and a fully localized vocabulary. Designing both directions kept the layout, component and spacing systems honest.</p></div>
            <div className="cformula rv-s">
              <div className="cformula__row">Design <span className="tl">التصميم</span></div>
              <div className="cformula__row">Build <span className="tl">البناء</span></div>
              <div className="cformula__row">Buy <span className="tl">الشراء</span></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* 10 Modules */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 10 / The modules</div>
          <div>
            <h2 className="csec__title rv">Four things you do <span className="ax">here.</span></h2>
            <div className="csec__prose rv"><p>Design a home, build it under contract, buy one ready-made, and track it all the way — each module is a surface in the platform, and each one is held to the same standard of trust.</p></div>
            <div className="chubs ebhubs rv-s">
              <div className="chub">
                <div className="chub__anim">
                  <svg viewBox="0 0 90 48">
                    <path className="eb-draw" d="M22 41 V23 L45 9 L68 23 V41 H22" />
                    <path className="eb-draw eb-draw2" d="M40 41 V31 H50 V41" />
                  </svg>
                </div>
                <div className="chub__t">Design</div>
                <div className="chub__d">Browse and compare verified architectural firms — architectural, exterior 3D, landscape and MEP design.</div>
              </div>
              <div className="chub">
                <div className="chub__anim">
                  <svg viewBox="0 0 90 48">
                    <rect className="eb-brick" style={{ '--i': 0 } as React.CSSProperties} x="27" y="34" width="15" height="8" rx="1" />
                    <rect className="eb-brick" style={{ '--i': 1 } as React.CSSProperties} x="44" y="34" width="15" height="8" rx="1" />
                    <rect className="eb-brick" style={{ '--i': 2 } as React.CSSProperties} x="27" y="24" width="15" height="8" rx="1" />
                    <rect className="eb-brick" style={{ '--i': 3 } as React.CSSProperties} x="44" y="24" width="15" height="8" rx="1" />
                    <rect className="eb-brick" style={{ '--i': 4 } as React.CSSProperties} x="35.5" y="14" width="15" height="8" rx="1" />
                  </svg>
                </div>
                <div className="chub__t">Build</div>
                <div className="chub__d">Submit a project and get matched with contractors and a supervision consultant — structure-only or turn-key, under a structured contract.</div>
              </div>
              <div className="chub">
                <div className="chub__anim">
                  <svg viewBox="0 0 90 48">
                    <path className="eb-house" d="M27 42 V25 L45 12 L63 25 V42 Z" />
                    <path className="eb-houseline" d="M27 42 V25 L45 12 L63 25 V42 Z" />
                    <circle className="eb-coin" cx="45" cy="31" r="5.5" />
                  </svg>
                </div>
                <div className="chub__t">Buy</div>
                <div className="chub__d">A marketplace of new residential developments across Oman, with Oman Housing Bank finance options.</div>
              </div>
              <div className="chub">
                <div className="chub__anim">
                  <svg viewBox="0 0 90 48">
                    <rect className="eb-track" x="18" y="13" width="54" height="5" rx="2.5" />
                    <rect className="eb-fill" style={{ '--i': 0 } as React.CSSProperties} x="18" y="13" width="54" height="5" rx="2.5" />
                    <rect className="eb-track" x="18" y="22" width="54" height="5" rx="2.5" />
                    <rect className="eb-fill" style={{ '--i': 1 } as React.CSSProperties} x="18" y="22" width="40" height="5" rx="2.5" />
                    <rect className="eb-track" x="18" y="31" width="54" height="5" rx="2.5" />
                    <rect className="eb-fill" style={{ '--i': 2 } as React.CSSProperties} x="18" y="31" width="48" height="5" rx="2.5" />
                  </svg>
                </div>
                <div className="chub__t">Project management</div>
                <div className="chub__d">Track milestones, stage approvals and progress in real time, with payments released stage by stage.</div>
              </div>
            </div>
          </div>
        </div></div>
      </section>

      {/* 11 Build flow */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 11 / Signature flow: opportunity → payment</div>
          <div>
            <h2 className="csec__title rv">From empty plot to handover. <span className="ax">Eight honest stages.</span></h2>
            <div className="csec__prose rv"><p>I modeled the homeowner&apos;s build journey as a state machine rather than a set of screens — every stage has one clear status, and money only moves when real work is verified.</p></div>
            <div className="cloop rv-s">
              <div className="cloopstep"><div className="cloopstep__n">01</div><div className="cloopstep__t">Submit</div><div className="cloopstep__d">The owner submits the plot, drawing status and build type.</div></div>
              <div className="cloopstep"><div className="cloopstep__n">02</div><div className="cloopstep__t">Match</div><div className="cloopstep__d">eBinaa matches verified contractors and a supervision consultant.</div></div>
              <div className="cloopstep"><div className="cloopstep__n">03</div><div className="cloopstep__t">Compare</div><div className="cloopstep__d">The owner compares offers side by side and chooses a firm.</div></div>
              <div className="cloopstep"><div className="cloopstep__n">04</div><div className="cloopstep__t">Contract</div><div className="cloopstep__d">A standardized construction contract is generated and signed.</div></div>
              <div className="cloopstep"><div className="cloopstep__n">05</div><div className="cloopstep__t">Retention</div><div className="cloopstep__d">5% of the value is retained, so abandoning the job carries a cost.</div></div>
              <div className="cloopstep"><div className="cloopstep__n">06</div><div className="cloopstep__t">Build</div><div className="cloopstep__d">Work begins; the project management tool tracks every milestone.</div></div>
              <div className="cloopstep"><div className="cloopstep__n">07</div><div className="cloopstep__t">Stage pay</div><div className="cloopstep__d">Payment releases only after each construction stage is verified.</div></div>
              <div className="cloopstep"><div className="cloopstep__n">08</div><div className="cloopstep__t">Handover</div><div className="cloopstep__d">The home is completed and handed over — structure or turn-key.</div></div>
            </div>
            <p className="cloop__kicker rv">One empty plot. <span className="tl">eBinaa carried it all the way to the keys.</span></p>
          </div>
        </div></div>
      </section>

      {/* 12 Low-fi wireframes */}
      <section className="csec csec--wide">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 12 / Low-fi wireframes</div>
          <div>
            <h2 className="csec__title rv">Structure in grayscale, <span className="ax">first.</span></h2>
            <div className="csec__prose rv"><p>Before any colour touched the screen, I wireframed both surfaces in grayscale — the contractor&apos;s desktop workspace and the homeowner&apos;s mobile app — to settle hierarchy and the repeating card-and-status pattern that makes the whole platform feel predictable.</p></div>
            <div className="gwset rv-s">
              {/* Desktop: Project Opportunities */}
              <div className="gwblk">
                <span className="gwblk__tag">Desktop · Project Opportunities (OHB marketplace)</span>
                <div className="gwd">
                  <div className="gwd__side"><div className="lg"></div><div className="pf"></div><div className="nv on"></div><div className="nv"></div><div className="nv"></div><div className="nv"></div></div>
                  <div className="gwd__main">
                    <div className="gwd__bn"></div>
                    <div className="gwd__hd"><div className="h"></div><div className="tl"><span></span><span></span><span></span></div></div>
                    <div className="gwg3">
                      {[0,1,2,3,4,5].map(i => <div key={i} className="gwpc"><div className="tg"></div><div className="rw"><div className="a"></div><div className="b"></div></div><div className="rw"><div className="a"></div><div className="b"></div></div><div className="bt"></div></div>)}
                    </div>
                  </div>
                </div>
              </div>
              {/* Desktop: Awarded projects (list) */}
              <div className="gwblk">
                <span className="gwblk__tag">Desktop · Awarded projects (list view)</span>
                <div className="gwd">
                  <div className="gwd__side"><div className="lg"></div><div className="pf"></div><div className="nv on"></div><div className="nv"></div><div className="nv"></div><div className="nv"></div></div>
                  <div className="gwd__main">
                    <div className="gwd__hd"><div className="h"></div><div className="tl"><span></span><span></span></div></div>
                    <div className="gwtbl">
                      <div className="tr hd"><div className="c"></div><div className="c"></div><div className="c"></div><div className="c"></div><div className="c"></div></div>
                      {[0,1,2,3,4,5].map(i => <div key={i} className="tr"><div className="c"></div><div className="c"></div><div className="c"></div><div className="pill"></div><div className="ln"></div></div>)}
                    </div>
                  </div>
                </div>
              </div>
              {/* Desktop: Listed projects */}
              <div className="gwblk">
                <span className="gwblk__tag">Desktop · Listed projects (table)</span>
                <div className="gwd">
                  <div className="gwd__side"><div className="lg"></div><div className="pf"></div><div className="nv on"></div><div className="nv"></div><div className="nv"></div><div className="nv"></div></div>
                  <div className="gwd__main">
                    <div className="gwd__hd"><div className="h"></div><div className="tl"><span></span><span></span></div></div>
                    <div className="gwtbl">
                      <div className="tr hd"><div className="c"></div><div className="c"></div><div className="c"></div><div className="c"></div><div className="c"></div></div>
                      {[0,1,2,3,4].map(i => <div key={i} className="tr"><div className="c"></div><div className="c"></div><div className="c"></div><div className="pill"></div><div className="ln"></div></div>)}
                    </div>
                  </div>
                </div>
              </div>
              {/* Desktop: Services + OHB */}
              <div className="gwblk">
                <span className="gwblk__tag">Desktop · Services + Oman Housing Bank</span>
                <div className="gwd">
                  <div className="gwd__side"><div className="lg"></div><div className="pf"></div><div className="nv on"></div><div className="nv"></div><div className="nv"></div><div className="nv"></div></div>
                  <div className="gwd__main">
                    <div className="gwd__hd"><div className="h"></div><div className="tl"><span></span></div></div>
                    <div className="gwsvc3">
                      <div className="gwsc"><div className="ic"></div><div className="h"></div><div className="l"></div><div className="l s"></div><div className="bt"></div></div>
                      <div className="gwsc"><div className="ic"></div><div className="h"></div><div className="l"></div><div className="l s"></div><div className="bt"></div></div>
                      <div className="gwsc"><div className="ic"></div><div className="h"></div><div className="l"></div><div className="l s"></div><div className="bt"></div></div>
                    </div>
                    <div className="gwd__bn"></div>
                  </div>
                </div>
              </div>
              {/* Mobile screens */}
              <div className="gwblk">
                <span className="gwblk__tag">Mobile · the homeowner &amp; partner journey — Build · Buy · Home · Design · Consultants · Contract · Pending</span>
                <div className="gwphones">
                  {/* Phone 1 — Build form */}
                  <div className="gwp"><div className="sc"><div className="bar"><div className="lg"></div><div className="r"><span></span><span></span></div></div><div className="tabs"><i className=""></i><i className="on"></i><i className=""></i></div><div className="b"><div className="hero"></div><div className="fld"></div><div className="fld"></div><div className="rdo"><div className="o"></div><div className="tx"><div className="a"></div><div className="b"></div></div></div><div className="rdo"><div className="o"></div><div className="tx"><div className="a"></div><div className="b"></div></div></div><div className="rdo"><div className="o"></div><div className="tx"><div className="a"></div><div className="b"></div></div></div><div className="cta"></div></div></div></div>
                  {/* Phone 2 — Buy listings */}
                  <div className="gwp"><div className="sc"><div className="bar"><div className="lg"></div><div className="r"><span></span><span></span></div></div><div className="tabs"><i className=""></i><i className=""></i><i className="on"></i></div><div className="b"><div className="fld"></div><div className="lst"><div className="im"></div><div className="mt"><div className="pr"></div><div className="sp"><b></b><b></b><b></b></div></div></div><div className="lst"><div className="im"></div><div className="mt"><div className="pr"></div><div className="sp"><b></b><b></b><b></b></div></div></div></div></div></div>
                  {/* Phone 3 — Home */}
                  <div className="gwp"><div className="sc"><div className="bar"><div className="lg"></div><div className="r"><span></span><span></span></div></div><div className="b"><div className="hero"></div><div className="logos"><div className="l2"></div><div className="l2"></div></div><div className="stt"><div className="s"><div className="n"></div><div className="t"></div></div><div className="s"><div className="n"></div><div className="t"></div></div><div className="s"><div className="n"></div><div className="t"></div></div></div><div className="svc"><div className="c"></div><div className="c"></div><div className="c"></div><div className="c"></div></div></div></div></div>
                  {/* Phone 4 — Design firms */}
                  <div className="gwp"><div className="sc"><div className="bar"><div className="lg"></div><div className="r"><span></span><span></span></div></div><div className="tabs"><i className="on"></i><i className=""></i><i className=""></i></div><div className="b"><div className="fld"></div><div className="card"><div className="ch"><div className="av"></div><div className="cl"><div className="a"></div><div className="b"></div></div></div><div className="chips"><i></i><i></i><i></i></div><div className="stt"><div className="s"><div className="n"></div><div className="t"></div></div><div className="s"><div className="n"></div><div className="t"></div></div><div className="s"><div className="n"></div><div className="t"></div></div></div><div className="bts"><div className="bt"></div><div className="bt p"></div></div></div><div className="card"><div className="ch"><div className="av"></div><div className="cl"><div className="a"></div><div className="b"></div></div></div><div className="chips"><i></i><i></i><i></i></div><div className="stt"><div className="s"><div className="n"></div><div className="t"></div></div><div className="s"><div className="n"></div><div className="t"></div></div><div className="s"><div className="n"></div><div className="t"></div></div></div><div className="bts"><div className="bt"></div><div className="bt p"></div></div></div></div></div></div>
                  {/* Phone 5 — Consultants */}
                  <div className="gwp"><div className="sc"><div className="bar"><div className="lg"></div><div className="r"><span></span><span></span></div></div><div className="b"><div className="fld"></div><div className="card"><div className="ch"><div className="av"></div><div className="cl"><div className="a"></div><div className="b"></div></div></div><div className="bts"><div className="bt p"></div></div></div><div className="card"><div className="ch"><div className="av"></div><div className="cl"><div className="a"></div><div className="b"></div></div></div><div className="bts"><div className="bt p"></div></div></div><div className="card"><div className="ch"><div className="av"></div><div className="cl"><div className="a"></div><div className="b"></div></div></div><div className="bts"><div className="bt p"></div></div></div></div></div></div>
                  {/* Phone 6 — Contract */}
                  <div className="gwp"><div className="sc"><div className="bar"><div className="lg"></div><div className="r"><span></span><span></span></div></div><div className="b"><div className="stp"><div className="o on"></div><div className="ln"></div><div className="o on"></div><div className="ln"></div><div className="o"></div></div><div className="doc"><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="bts"><div className="bt p"></div></div></div></div></div>
                </div>
              </div>
              <p className="gwcap">Grayscale wireframes built to the exact layout of the shipped screens — four contractor desktop surfaces and six homeowner / partner mobile screens — settled before any colour.</p>
            </div>
          </div>
        </div></div>
      </section>

      {/* 13 Design system */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 13 / Design system</div>
          <div>
            <h2 className="csec__title rv">Calm, trustworthy, <span className="ax">navy &amp; green.</span></h2>
            <div className="csec__prose rv"><p>eBinaa runs on a calm, trustworthy system — deep navy as the primary, a bright green for actions and confirmation, on white — with semantic amber and red reserved for caution. Everything is defined as shared styles so a multi-service, bilingual product stays consistent, in both directions.</p></div>
            <div className="cds3 rv-s">
              <div className="cds3__card">
                <div className="cds3__h">Palette — navy, green, white</div>
                <div className="cds3__sw">
                  <div><div className="cds3__chip" style={{ background: '#0E2A38' }}></div><div className="cds3__hex">Navy</div></div>
                  <div><div className="cds3__chip" style={{ background: '#2bb673' }}></div><div className="cds3__hex">Green</div></div>
                  <div><div className="cds3__chip" style={{ background: '#0d0d10' }}></div><div className="cds3__hex">Ink</div></div>
                  <div><div className="cds3__chip" style={{ background: '#ffffff' }}></div><div className="cds3__hex">White</div></div>
                  <div><div className="cds3__chip" style={{ background: '#d99a2b' }}></div><div className="cds3__hex">Caution</div></div>
                  <div><div className="cds3__chip" style={{ background: '#f1efe9' }}></div><div className="cds3__hex">Surface</div></div>
                </div>
              </div>
              <div className="cds3__card">
                <div className="cds3__h">Type — clean bilingual sans</div>
                <div className="cds3__t1">Aa Headline</div>
                <div className="cds3__t2">Section heading</div>
                <div className="cds3__t3">Body in a legible sans, sized for comparison tables and long company profiles — in Latin and Arabic scripts.</div>
              </div>
              <div className="cds3__card">
                <div className="cds3__h">Components</div>
                <div className="cds3__chips" style={{ marginBottom: 14 }}><span>Company card</span><span>Compare table</span><span>Contract steps</span><span>Filters</span></div>
                <div className="cds3__t3">A trust-first library — company cards, comparison tables, contract steps, filters, drawer forms — reused across every surface, in both directions.</div>
              </div>
              <div className="cds3__card">
                <div className="cds3__h">Principle — trust is the system</div>
                <div className="cds3__t2">Colour guides, structure protects.</div>
                <div className="cds3__t3">Green confirms and invites action; the real trust is carried by verification, contracts and staged money — in English and in Arabic.</div>
              </div>
            </div>
          </div>
        </div></div>
      </section>

      {/* 14 Final screens */}
      <section className="csec csec--wide">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 14 / Final screens</div>
          <div>
            <h2 className="csec__title rv">The other side — <span className="ax">the company workspace.</span></h2>
            <div className="csec__prose rv"><p>Trust runs both ways. While homeowners move through Design · Build · Buy on mobile, verified companies run their whole business from a desktop workspace — discovering opportunities, bidding, signing the contract, managing projects, proving credibility through a verification-driven profile, and collecting moderated reviews. The same status language carries across every surface, in English and Arabic.</p></div>
            <div className="cgal rv-s">
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · project opportunities</i></div><Image src="/assets/ebinaa/eb-app-01.png" alt="Project Opportunities — OHB-backed marketplace" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · pending bids</i></div><Image src="/assets/ebinaa/eb-app-02.png" alt="Pending bids — invited, continue bid, closed" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · عربي · pending</i></div><Image src="/assets/ebinaa/eb-app-03.png" alt="Pending bids — Arabic RTL mirror" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · awarded · cards</i></div><Image src="/assets/ebinaa/eb-app-04.png" alt="Awarded projects — card view" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · awarded · list</i></div><Image src="/assets/ebinaa/eb-app-05.png" alt="Awarded projects — list view" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · listed projects</i></div><Image src="/assets/ebinaa/eb-app-06.png" alt="Listed projects — published, draft, archived" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · services · OHB</i></div><Image src="/assets/ebinaa/eb-app-07.png" alt="Services — Design, Build, Developer + OHB subscription" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · company profile · verification</i></div><Image src="/assets/ebinaa/eb-app-08.png" alt="Company profile — verification with approve / reject" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · employees</i></div><Image src="/assets/ebinaa/eb-app-09.png" alt="Employees — assigned projects" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · reviews · moderation</i></div><Image src="/assets/ebinaa/eb-app-10.png" alt="Reviews — with moderation approve / reject" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>ebinaa.info · public profile</i></div><Image src="/assets/ebinaa/eb-app-11.png" alt="Public company profile" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
              <div className="cshot"><div className="cshot__bar"><span></span><span></span><span></span><i>app · previous projects</i></div><Image src="/assets/ebinaa/eb-app-12.png" alt="Public profile — previous projects gallery" width={580} height={380} style={{ width: '100%', height: 'auto' }} loading="lazy" /></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* 15 Bilingual & RTL — filmstrip */}
      <section className="csec csec--wide">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 15 / Bilingual &amp; RTL</div>
          <div>
            <h2 className="csec__title rv">The shipped app, <span className="ax">right to left.</span></h2>
            <div className="csec__prose rv"><p>Every screen ships bilingual — a عربي toggle flips the whole product into a true right-to-left mirror. Here is the real, mobile-first product end to end: Design, Build, the budget planner, partner selection, the Muqawala contract and Buy. The full flow reads in order, top to bottom — Home first.</p></div>
            <div className="ebfilm rv-s">
              <div className="ebfilm__scroll">
                <div className="ebfilm__track">
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-01.png" alt="eBinaa home screen" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Home</b> · الرئيسية</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-02.png" alt="Design — architect firms" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Design</b> · architects · التصميم</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-03.png" alt="Build — start a project" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Build</b> · start · البناء</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-04.png" alt="Build — 30-second cost estimate" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Build</b> · 30-sec estimate</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-05.png" alt="Buy — projects" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Buy</b> · projects · الشراء</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-06.png" alt="Design — firm directory" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Design</b> · firm directory</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-07.png" alt="Buy — developments" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Buy</b> · developments</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-08.png" alt="Build — drawing status" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Build</b> · drawings status</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-09.png" alt="Build — Arabic RTL mirror" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Build</b> · عربي RTL</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-10.png" alt="Company profile — Gateway Oman" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Company profile</b> · الملف</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-11.png" alt="Budget and plans" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Budget &amp; plans</b> · الميزانية</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-12.png" alt="Select partners — invite consultants" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Select partners</b> · consultants</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-13.png" alt="Contractors in the bid" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Contractors</b> · the bid</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-14.png" alt="Contractor selection and comparison" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Contractors</b> · selection</figcaption></figure>
                  <figure className="ebfilm__item"><div className="ebphone"><div className="ebphone__scr"><Image src="/assets/ebinaa/eb-film-15.png" alt="Muqawala contract" width={228} height={476} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} loading="lazy" /></div></div><figcaption><b>Contract</b> · Muqawala · العقد</figcaption></figure>
                </div>
              </div>
            </div>
          </div>
        </div></div>
      </section>

      {/* 16 Validation */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 16 / Validation</div>
          <div>
            <h2 className="csec__title rv">How I&apos;d prove the bets <span className="ax">actually work.</span></h2>
            <div className="csec__prose rv"><p>Live metrics sit outside the brief, so I won&apos;t claim numbers I never measured. Instead, every risky decision ships with a <b>validation plan</b>: a clear hypothesis, the method I&apos;d run, and the one signal that would tell me I was right. Drop your real results into the band below.</p></div>
            <div className="cvtest rv-s">
              <div className="cvcard"><div className="cvcard__n">— Test 01 · Trust signals</div><h3 className="cvcard__h">Verified profiles make owners confident to reach out.</h3><div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">First-click test — &ldquo;which firm would you trust, and why?&rdquo;</div></div><div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v"><b>≥80%</b> point to verification signals — rating, completed projects</div></div></div>
              <div className="cvcard"><div className="cvcard__n">— Test 02 · Compare vs browse</div><h3 className="cvcard__h">The right view to choose a firm.</h3><div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">Timed comparison &amp; discovery tasks across both views</div></div><div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v">Tables faster for comparison, cards faster for <b>discovery</b></div></div></div>
              <div className="cvcard"><div className="cvcard__n">— Test 03 · Build setup</div><h3 className="cvcard__h">An owner can submit a project without help.</h3><div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">Moderated project-submission task</div></div><div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v">Setup completion rises <b>[X% → Y%]</b></div></div></div>
              <div className="cvcard"><div className="cvcard__n">— Test 04 · Payment clarity</div><h3 className="cvcard__h">Owners understand when and why money releases.</h3><div className="cvrow"><div className="cvrow__k">Method</div><div className="cvrow__v">Comprehension test on the stage-payment timeline</div></div><div className="cvrow"><div className="cvrow__k">Signal</div><div className="cvrow__v">Owners correctly explain stage-based release <b>[%]</b></div></div></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* 17 Platform scale */}
      <section className="cimpact">
        <div className="cwrap">
          <div className="csplit__aside rv" style={{ position: 'static', color: '#4a56f6', fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '.06em', marginBottom: 14 }}>— 17 / Platform scale</div>
          <h2 className="csec__title rv">Trusted at scale, across <span className="ax">all of Oman.</span></h2>
          <div className="cimpact__grid rv-s">
            <div><div className="cnum">3M+</div><div className="cnum__l">OMR in projects managed through the platform</div></div>
            <div><div className="cnum">150+</div><div className="cnum__l">Verified companies — architects, contractors, developers</div></div>
            <div><div className="cnum">9</div><div className="cnum__l">Governorates of Oman covered</div></div>
            <div><div className="cnum">100%</div><div className="cnum__l">Free for project owners</div></div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="csec">
        <div className="cwrap cwrap--narrow">
          <p className="cpull rv">Trust isn&apos;t a feature you add at the end — <span className="ax">it has to be built into how the money and the work move.</span></p>
          <div className="cpull__a rv">— Husain Al-Asfoor, Founder of eBinaa</div>
        </div>
      </section>

      {/* 18 Reflection */}
      <section className="csec">
        <div className="cwrap"><div className="csplit">
          <div className="csplit__aside rv">— 18 / Reflection</div>
          <div>
            <h2 className="csec__title rv" style={{ marginBottom: 30 }}>What the system taught me.</h2>
            <div className="cref rv-s">
              <div className="cref__item"><div className="cref__n">— 01</div><h4>Trust is structural, not cosmetic.</h4><p>Verification, fair contracts and staged money did more for confidence than any amount of reassuring copy.</p></div>
              <div className="cref__item"><div className="cref__n">— 02</div><h4>Trust is a UX problem.</h4><p>Making firms&apos; track records and contract terms legible turned an act of faith into an informed decision.</p></div>
              <div className="cref__item"><div className="cref__n">— 03</div><h4>Design lifecycles, not screens.</h4><p>Modeling the build journey as an honest state machine — submit → contract → stage-pay → handover — prevented dead ends.</p></div>
            </div>
          </div>
        </div></div>
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
        <Link href="/#work"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" aria-hidden="true" style={{display:'inline-block',verticalAlign:'middle',marginRight:6,flexShrink:0}}><path d="M12 5.5H1M1 5.5L5.5 1M1 5.5L5.5 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg> Work</Link>
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
              <span className="mwcard__arrow"><ArrDiag /></span>
            </Link>
            <Link href={`/case-studies/${c.next2Slug}`} className="mwcard rv" style={{ transitionDelay: '0.05s' }}>
              <span className="mwcard__t">{c.next2Title}</span>
              <span className="mwcard__s">{c.next2Sub}</span>
              <span className="mwcard__arrow"><ArrDiag /></span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
