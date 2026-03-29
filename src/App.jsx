import { useEffect, useRef, useState } from 'react';
import { siteContent } from './content.js';

const CHARS = '!@#$%^&*-+=<>?/|ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz';
const STEPS = 36;
const MS = 28;

function ScrambleText({ text, delay = 0 }) {
  const spanRef = useRef(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scramble = () =>
      text.split('').map(c => c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]).join('');

    el.textContent = scramble();

    let step = 0;
    let tid, iid;

    tid = setTimeout(() => {
      iid = setInterval(() => {
        const locked = Math.floor((step / STEPS) * text.length);
        let out = '';
        for (let i = 0; i < text.length; i++) {
          if (i < locked) out += text[i];
          else if (text[i] === ' ') out += ' ';
          else out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        el.textContent = out;
        step++;
        if (step > STEPS) { clearInterval(iid); el.textContent = text; }
      }, MS);
    }, delay);

    return () => { clearTimeout(tid); clearInterval(iid); el.textContent = text; };
  }, []);

  return <span ref={spanRef} aria-label={text}>{text}</span>;
}

const t = siteContent;

function ArrowUpRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = t.metaTitle;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min((y / h) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[--accent] focus:text-[--bg] focus:px-3 focus:py-1.5 focus:text-sm focus:rounded">
        Skip to main content
      </a>

      <div className="scroll-line" style={{ width: `${progress}%` }} aria-hidden="true" />

      {/* ── Nav ──────────────────────────────────────────── */}
      <nav className={`site-nav${scrolled ? ' is-scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#hero" className="nav-brand">
            <img src="/logo.png" alt="drpinocode" className="site-logo" />
          </a>
        </div>
      </nav>

      <main id="main">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section id="hero" className="hero">
          <div className="wrap">
            <p className="hero-role"><ScrambleText text={`${t.profile.role}.`} delay={120} /></p>
            <p className="hero-claim"><ScrambleText text={t.profile.claim} delay={400} /></p>
            <a href={`mailto:${t.profile.email}`} className="hero-email reveal" data-reveal>
              {t.profile.email}
            </a>
            <a href="https://portal.drpinocode.com/login" target="_blank" rel="noreferrer" className="hero-portal">
              Portal drpinocode <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────── */}
        <section id="services" className="block">
          <div className="wrap">
            <div className="clients-header reveal" data-reveal>
              <span className="services-exp">15+ years of hands-on experience</span>
            </div>
            <div className="clients-strip reveal" data-reveal>
              <img src="/logos/accenture.png"        alt="Accenture"     className="client-logo" />
              <img src="/logos/axa.png"              alt="AXA"           className="client-logo" />
              <img src="/logos/vueling.png"          alt="Vueling"       className="client-logo" />
              <img src="/logos/Familia-torres-logo.jpg" alt="Familia Torres" className="client-logo client-logo--dark" />
              <img src="/logos/aldahra.jpg"          alt="Aldahra"       className="client-logo client-logo--lg" />
              <img src="/logos/ams.jpg"              alt="AMEb"          className="client-logo" />
            </div>
            <div className="services-list">
              {t.heroServices.map((s) => (
                <div className="service-row reveal" data-reveal key={s.title}>
                  <span className="service-name">{s.title}</span>
                  <span className="service-desc">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section id="contact" className="block" style={{ paddingBottom: '6rem' }}>
          <div className="wrap">
            <div className="contact-card reveal" data-reveal>
              <span className="contact-card-label">{t.contact.label}</span>
              <a className="contact-card-email" href={`mailto:${t.profile.email}`}>
                {t.profile.email}
              </a>
              <a className="contact-card-link" href={t.profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-text">{t.labels.footer}</span>
          <img src="/logo.png" alt="" aria-hidden="true" className="footer-logo" />
        </div>
      </footer>
    </>
  );
}
