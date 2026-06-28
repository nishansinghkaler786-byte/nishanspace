'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const BUDGETS = ['< $10k', '$10k — $30k', '$30k — $75k', '$75k+', 'Not sure yet'];
const PROJECT_TYPES = ['New product (0 → 1)', 'Redesign of an existing product', 'Design system / UI architecture', 'UX research & testing', 'Fractional / ongoing design', 'Something else'];

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

        <p className="hero__sub rv" style={{ transitionDelay: '0.12s', fontSize: 'clamp(15px,1.4vw,18px)', maxWidth: 460 }}>
          Tell me a little about your product and the problem you&apos;re trying to solve. I read every message personally and reply within two business days.
        </p>

        <ul className="intro__list rv" style={{ transitionDelay: '0.15s' }}>
          <li>
            <span className="ic">✓</span>
            <span>I read every message personally — no bots, no agencies.</span>
          </li>
          <li>
            <span className="ic">✓</span>
            <span>You&apos;ll hear back within two business days.</span>
          </li>
          <li>
            <span className="ic">✓</span>
            <span>No pitch, no obligation. Just a real conversation.</span>
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
            <span className="aside__avail">— Available · 2026</span>
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
            <h2 className="success__title">Inquiry sent.</h2>
            <p className="success__body">Thank you — your message just landed in my inbox. Sit tight; I&apos;ll personally read it and get back to you within two business days.</p>
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
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.fig"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
                />
                <div className="upload__icon">↑</div>
                <p className="upload__text">
                  <b>Click to upload</b> or drag and drop
                </p>
                <p className="upload__hint">PDF, DOC, PPT, FIG or image · up to 25MB</p>
                {fileName && (
                  <div className="upload__file show">
                    ✓ {fileName}
                  </div>
                )}
              </div>
            </div>

            <button type="submit" className="submit submit--full">
              Let&apos;s build something great <span className="a">→</span>
            </button>
            <p className="form__note">By sending, you agree to be contacted about your inquiry. No spam, ever.</p>
          </form>
        )}
      </div>
    </div>
  );
}
