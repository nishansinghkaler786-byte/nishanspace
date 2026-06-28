'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const BUDGETS = ['< $5K', '$5K–15K', '$15K–40K', '$40K–100K', '$100K+', "Let's talk"];
const PROJECT_TYPES = ['UX Strategy & Consulting', 'End-to-end Product Design', 'Design System', 'UX Audit & Research', 'Workshop / Speaking', 'Other'];

export default function ContactPage() {
  const [budgets, setBudgets] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); ob.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.rv, .rv-s, .scl').forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, []);

  const toggleBudget = (b: string) => {
    setBudgets((prev) => prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="inner lb">
      {/* Left: intro */}
      <div className="lb__intro">
        <Link href="/" className="lb__back">← Back home</Link>

        <h1 className="hero__h rv" style={{ fontSize: 'clamp(34px,4.4vw,64px)', lineHeight: 1.1, transitionDelay: '0.05s' }}>
          Let&apos;s build something <span className="ax">worth using.</span>
        </h1>

        <ul className="intro__list rv" style={{ transitionDelay: '0.15s' }}>
          <li>
            <span className="ic">✓</span>
            <span>I reply within 24 hours — usually same day.</span>
          </li>
          <li>
            <span className="ic">✓</span>
            <span>Every engagement starts with a discovery call, no cost, no commitment.</span>
          </li>
          <li>
            <span className="ic">✓</span>
            <span>If I&apos;m not the right fit, I&apos;ll tell you honestly and point you somewhere better.</span>
          </li>
        </ul>

        <div className="aside rv" style={{ marginTop: 'clamp(28px,3vw,40px)', borderTop: '1px solid var(--line)', paddingTop: 24, transitionDelay: '0.2s' }}>
          <div className="aside__block">
            <p className="aside__h">Direct email</p>
            <p className="aside__big">
              <a href="mailto:hello@nishan.space">hello@nishan.space</a>
            </p>
            <p className="aside__sub">Prefer a direct line? Works for me.</p>
          </div>

          <div className="aside__block">
            <p className="aside__h">Availability</p>
            <span className="aside__avail">Open to new projects — Q3 2026</span>
          </div>

          <div className="aside__block">
            <p className="aside__h">Connect</p>
            <div className="social">
              <a href="https://linkedin.com/in/nishansingh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://dribbble.com/nishanspace" target="_blank" rel="noopener noreferrer">Dribbble</a>
              <a href="https://behance.net/nishanspace" target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="/assets/Nishan-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right: form */}
      <div className="lb__form rv" style={{ transitionDelay: '0.1s' }}>
        {submitted ? (
          <div className="success show">
            <div className="success__badge">
              <div className="success__pulse" />
              <div className="success__ring">
                <svg className="success__check" viewBox="0 0 44 44">
                  <path d="M10 22l9 9 15-18" />
                </svg>
              </div>
            </div>
            <h2 className="success__title">Message sent!</h2>
            <p className="success__body">Thanks for reaching out. I&apos;ll be in touch within 24 hours — usually sooner.</p>
            <Link href="/" className="success__home">← Back to work</Link>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="form" noValidate>
            <svg className="form__spine" viewBox="0 0 2 100" preserveAspectRatio="none" aria-hidden="true">
              <line x1="1" y1="0" x2="1" y2="100" stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>

            <div className="field">
              <label>Name <span className="req">*</span></label>
              <input type="text" placeholder="Your full name" required />
            </div>

            <div className="form__row">
              <div className="field">
                <label>Email <span className="req">*</span></label>
                <input type="email" placeholder="you@company.com" required />
              </div>
              <div className="field">
                <label>Company <span className="optional">(optional)</span></label>
                <input type="text" placeholder="Company name" />
              </div>
            </div>

            <div className="field">
              <label>Project type</label>
              <select defaultValue="">
                <option value="" disabled>Select project type</option>
                {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="field">
              <label>Budget range</label>
              <div className="chips">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    className={`chip${budgets.includes(b) ? ' on' : ''}`}
                    onClick={() => toggleBudget(b)}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>Tell me about your project <span className="req">*</span></label>
              <textarea
                placeholder="What are you trying to build or fix? What's the timeline? Any context that helps me understand the problem..."
                required
              />
            </div>

            <div className="field">
              <label>Brief or supporting file <span className="optional">(optional)</span></label>
              <div className={`upload${fileName ? ' is-drag' : ''}`}>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.key,.zip,.fig"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                />
                <div className="upload__icon">↑</div>
                <p className="upload__text">
                  <b>Click to upload</b> or drag and drop
                </p>
                <p className="upload__hint">PDF, DOC, PPT, Figma, ZIP — max 20MB</p>
                {fileName && (
                  <div className="upload__file show">
                    ✓ {fileName}
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="submit submit--full">
              Send message <span className="a">→</span>
            </button>
            <p className="form__note">No spam, no sales pitch. Just a conversation.</p>
          </form>
        )}
      </div>
    </div>
  );
}
