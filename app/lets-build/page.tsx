'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const BUDGETS = ['< $10k', '$10k — $30k', '$30k — $75k', '$75k+', 'Not sure yet'];
const PROJECT_TYPES = ['New product (0 → 1)', 'Redesign of an existing product', 'Design system / UI architecture', 'UX research & testing', 'Fractional / ongoing design', 'Something else'];

export default function ContactPage() {
  const [budgets, setBudgets] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileData, setFileData] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const uploadFileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); ob.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.rv, .rv-s, .scl').forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, []);

  useEffect(() => {
    const rail = document.getElementById('lbRail');
    const fill = document.getElementById('lbFill');
    if (!rail || !fill) return;
    function onScroll() {
      rail!.style.height = document.documentElement.scrollHeight + 'px';
      fill!.style.height = (window.scrollY + window.innerHeight * 0.5) + 'px';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const form = formRef.current;
    if (!form || submitted) return;

    const spine = document.createElement('div');
    spine.className = 'form__spine';
    const fillEl = document.createElement('i');
    spine.appendChild(fillEl);
    form.appendChild(spine);

    const fields = Array.from(form.querySelectorAll<HTMLElement>('.field'));

    type Row = { top: number; fields: HTMLElement[]; y: number; node: HTMLSpanElement };
    const rows: Row[] = [];
    fields.forEach((f) => {
      const t = f.offsetTop;
      if (rows.length && Math.abs(t - rows[rows.length - 1].top) < 14) {
        rows[rows.length - 1].fields.push(f);
      } else {
        rows.push({ top: t, fields: [f], y: 0, node: document.createElement('span') });
      }
    });
    rows.forEach((r) => { r.node.className = 'form__node'; spine.appendChild(r.node); });

    function isDone(f: HTMLElement): boolean {
      const ctrl = f.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input[type=text],input[type=email],textarea,select');
      if (ctrl) {
        if (ctrl.tagName === 'SELECT') return (ctrl as HTMLSelectElement).selectedIndex > 0;
        return !!(ctrl as HTMLInputElement).value.trim();
      }
      if (f.querySelector('.chips')) return !!f.querySelector('.chip.on');
      if (f.querySelector('.upload')) return !!uploadFileRef.current?.classList.contains('show');
      return false;
    }

    function layout() {
      spine.style.height = form!.scrollHeight + 'px';
      rows.forEach((r) => { r.y = r.fields[0].offsetTop + 18; r.node.style.top = r.y + 'px'; });
    }

    function update() {
      let lastY: number | null = null;
      rows.forEach((r) => {
        const d = r.fields.some(isDone);
        r.node.classList.toggle('on', d);
        if (d) lastY = r.y;
      });
      if (lastY !== null && rows.length > 0) {
        fillEl.style.top = rows[0].y + 'px';
        fillEl.style.height = Math.max(0, lastY - rows[0].y) + 'px';
      } else {
        fillEl.style.height = '0';
      }
    }

    function refresh() { layout(); update(); }
    refresh();

    form.addEventListener('input', update);
    form.addEventListener('change', () => setTimeout(refresh, 30));

    fields.forEach((f) => {
      const row = rows.find((r) => r.fields.includes(f));
      f.addEventListener('focusin', () => { if (row) row.node.classList.add('live'); });
      f.addEventListener('focusout', () => { if (row) row.node.classList.remove('live'); });
    });

    window.addEventListener('resize', refresh);
    if (document.fonts?.ready) document.fonts.ready.then(refresh);
    const t = setTimeout(refresh, 400);

    return () => {
      window.removeEventListener('resize', refresh);
      clearTimeout(t);
      spine.remove();
    };
  }, [submitted]);

  const toggleBudget = (b: string) => {
    setBudgets((prev) => prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form || submitting) return;

    const fd = new FormData(form);
    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          company: fd.get('company'),
          projectType: fd.get('projectType'),
          budget: budgets.join(', ') || null,
          projectDetails: fd.get('projectDetails'),
          attachmentName: fileName || null,
          fileData: fileData || null,
        }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email me directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div id="lbRail" className="flowrail" aria-hidden="true">
        <div className="flowrail__line" />
        <div id="lbFill" className="flowrail__fill" />
      </div>
    <div className="inner lb">
      {/* Left: intro */}
      <div className="lb__intro">
        <Link href="/" className="lb__back"><svg width="13" height="11" viewBox="0 0 13 11" fill="none" aria-hidden="true" style={{display:'inline-block',verticalAlign:'middle',marginRight:6,flexShrink:0}}><path d="M12 5.5H1M1 5.5L5.5 1M1 5.5L5.5 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg> Back</Link>

        <div className="ey rv" style={{ marginBottom: 24 }}>— Available · 2026</div>

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
            <p className="aside__h">— Direct</p>
            <p className="aside__big">
              <a href="mailto:nishanpace@gmail.com">nishanpace@gmail.com</a>
            </p>
            <p className="aside__sub">Fastest way to reach me.</p>
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
            <div className="field">
              <label>Name <span className="req">*</span></label>
              <input type="text" name="name" placeholder="Jane Doe" required />
            </div>

            <div className="form__row">
              <div className="field">
                <label>Email <span className="req">*</span></label>
                <input type="email" name="email" placeholder="jane@company.com" required />
              </div>
              <div className="field">
                <label>Company <span className="optional">(optional)</span></label>
                <input type="text" name="company" placeholder="Acme Inc." />
              </div>
            </div>

            <div className="field">
              <label>What can I help with? <span className="req">*</span></label>
              <select name="projectType" defaultValue="">
                <option value="" disabled>Select a project type…</option>
                {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="field">
              <label>Estimated budget <span className="optional">(optional)</span></label>
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
              <label>Project details <span className="req">*</span></label>
              <textarea
                name="projectDetails"
                placeholder="What are you building, who is it for, and what does success look like? Timelines and links welcome."
                required
              />
            </div>

            <div className="field">
              <label>Attach a brief or document <span className="optional">(optional)</span></label>
              <div className={`upload${fileName ? ' is-drag' : ''}`}>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.fig"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setFileName(file.name);
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                      const result = ev.target?.result as string;
                      setFileData(result.split(',')[1]);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
                <div className="upload__icon">↑</div>
                <p className="upload__text">
                  <b>Click to upload</b> or drag and drop
                </p>
                <p className="upload__hint">PDF, DOC, PPT, FIG or image · up to 25MB</p>
                {fileName && (
                  <div ref={uploadFileRef} className="upload__file show">
                    ✓ {fileName}
                  </div>
                )}
              </div>
            </div>

            {submitError && (
              <p className="form__error">{submitError}</p>
            )}

            <button type="submit" className="submit submit--full" disabled={submitting}>
              {submitting ? 'Sending…' : <><span>Let&apos;s build something great</span> <span className="a">→</span></>}
            </button>
            <p className="form__note">By sending, you agree to be contacted about your inquiry. No spam, ever.</p>
          </form>
        )}
      </div>
    </div>
    </div>
  );
}
