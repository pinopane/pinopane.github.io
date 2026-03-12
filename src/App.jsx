import { useEffect, useId, useMemo, useState } from 'react';
import { defaultLanguage, languageOptions, siteContent } from './content.js';

function getInitialLanguage() {
  if (typeof window === 'undefined') return defaultLanguage;
  const saved = window.localStorage.getItem('site-language');
  if (saved && siteContent[saved]) return saved;
  const browserLanguage = window.navigator.language?.slice(0, 2).toLowerCase();
  if (browserLanguage && siteContent[browserLanguage]) return browserLanguage;
  return defaultLanguage;
}

function SectionTitle({ label, title, text }) {
  return (
    <header className="reveal max-w-3xl" data-reveal>
      <p className="section-kicker">
        <span className="code-inline">&lt;{label}/&gt;</span>
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
      <div className="section-accent mt-5" aria-hidden="true" />
      {text ? <p className="mt-5 text-base leading-relaxed text-textMuted">{text}</p> : null}
    </header>
  );
}

function MotionButton({ href, className, children }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    setOffset({ x, y });
  };

  return (
    <a
      href={href}
      className={`motion-btn ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
    </a>
  );
}

function BrandLogo({ compact = false, tagline = '', className = '' }) {
  const gid = useId().replace(/:/g, '');
  const strokeId = `stroke-${gid}`;
  const textId = `text-${gid}`;
  const glowId = `glow-${gid}`;
  const maskId = `mask-${gid}`;
  const shineId = `text-shine-${gid}`;

  return (
    <svg viewBox="0 0 1080 280" role="img" aria-label="drpinocode.com logo" className={`brand-logo ${className}`.trim()}>
      <defs>
        <linearGradient id={strokeId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7ef2ff" />
          <stop offset="50%" stopColor="#58a6ff" />
          <stop offset="100%" stopColor="#ff9c66" />
        </linearGradient>
        <linearGradient id={textId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f6fbff" />
          <stop offset="60%" stopColor="#c0d8ff" />
          <stop offset="100%" stopColor="#ffceac" />
        </linearGradient>
        <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <mask id={maskId}>
          <rect width="100%" height="100%" fill="black" />
          <rect className="logo-sweep" width="160" height="280" fill="white" />
        </mask>
      </defs>

      <g filter={compact ? undefined : `url(#${glowId})`}>
        <path d="M44 40v200h80a100 100 0 0 0 0-200H44z" fill="none" stroke={`url(#${strokeId})`} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M242 26v240" fill="none" stroke={`url(#${strokeId})`} strokeWidth="11" strokeLinecap="round" />
        <path d="M258 40h74a78 78 0 0 1 0 156h-74" fill="none" stroke={`url(#${strokeId})`} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g fill={`url(#${textId})`}>
        <text x="430" y="166" fontSize="75" fontFamily="Sora, sans-serif" fontWeight="500" letterSpacing="1.5">
          DANIEL PINO
        </text>
        {!compact ? (
          <text x="430" y="204" fontSize="24" fontFamily="Plus Jakarta Sans, sans-serif" letterSpacing="1.2">
            {tagline}
          </text>
        ) : null}
      </g>

      {!compact ? (
        <g mask={`url(#${maskId})`} opacity="0.55">
          <rect width="1080" height="280" fill={`url(#${shineId})`} />
          <defs>
            <linearGradient id={shineId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="45%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </g>
      ) : null}
    </svg>
  );
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 22 });
  const t = siteContent[language] || siteContent[defaultLanguage];

  useEffect(() => {
    window.localStorage.setItem('site-language', language);
    document.documentElement.lang = language;
    document.title = t.metaTitle;
  }, [language, t.metaTitle]);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrollY(y);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min((y / docHeight) * 100, 100) : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    let onMove;
    if (!reduceMotion) {
      onMove = (event) => setSpotlight({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 });
      window.addEventListener('pointermove', onMove, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (onMove) window.removeEventListener('pointermove', onMove);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -12% 0px' }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [language]);

  const glowOffset = useMemo(() => Math.min(scrollY * 0.1, 120), [scrollY]);
  const heroZoom = useMemo(() => Math.max(0.92, 1 - scrollY / 2400), [scrollY]);
  const codeSnippets = ['<Cloud/>', '<DevOps/>', '<gRPC/>', '<SOLID/>', '<Azure/>', '<Scale/>'];

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
        {t.labels.skipToMain}
      </a>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="grain absolute inset-0 opacity-30" />
        <div className="grid-overlay" />
        <div className="scan-overlay" />
        <div className="scan-beam" />
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at var(--spot-x) var(--spot-y), rgba(126, 242, 255, 0.14), transparent 28%), radial-gradient(circle at calc(var(--spot-x) - 12%) calc(var(--spot-y) + 12%), rgba(255, 156, 102, 0.08), transparent 20%)',
            '--spot-x': `${spotlight.x}%`,
            '--spot-y': `${spotlight.y}%`
          }}
        />
        <div className="pointer-events-none absolute right-[-16rem] top-[-14rem] h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-accent/25 via-sunrise/20 to-transparent blur-3xl" style={{ transform: `translate3d(0, ${glowOffset}px, 0)` }} />
        <div className="hero-lines pointer-events-none absolute left-[-20%] top-[40vh] h-[14rem] w-[140%]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 sm:px-10">
          <a href="#hero" className="inline-flex items-center gap-3 text-sm font-medium text-textBase hover:text-white">
            <BrandLogo compact className="h-8 w-auto opacity-90 transition duration-500 hover:opacity-100" />
          </a>
          <div className="flex items-center gap-3">
            <ul className="hidden items-center gap-7 md:flex">
              {t.navItems.map((item) => (
                <li key={item.href}>
                  <a className="nav-link text-sm text-textMuted" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="language-switch" role="group" aria-label="Language selector">
              {languageOptions.map((option) => (
                <button key={option.code} type="button" className={`lang-btn ${language === option.code ? 'is-active' : ''}`} onClick={() => setLanguage(option.code)} aria-label={option.name} aria-pressed={language === option.code} title={option.name}>
                  <span aria-hidden="true">{option.flag}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main id="main" className="story-scroll mx-auto w-full max-w-[1200px] px-6 pb-24 sm:px-10">
        <section id="hero" className="relative min-h-[92vh] py-16 sm:py-24">
          <div className="hero-grid">
            <div>
              <p className="hero-badge reveal" data-reveal>{`<${t.profile.role}/>`}</p>
              <div className="relative mt-8">
                <div className="logo-hero-glow reveal relative z-10 max-w-[840px]" data-reveal style={{ transform: `scale(${heroZoom})` }}>
                  <BrandLogo tagline={t.logoTagline} className="h-auto w-full logo-breath" />
                </div>
              </div>
              <p className="reveal mt-7 max-w-4xl font-display text-3xl text-textBase sm:text-5xl glitch-text" data-reveal data-text={t.profile.claim}>
                {t.profile.claim}
              </p>
              <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-textMuted sm:text-lg" data-reveal>{t.profile.summary}</p>
              <div className="reveal mt-7 flex flex-wrap gap-2" data-reveal>
                {codeSnippets.map((snippet, index) => (
                  <span key={snippet} className="floating-code" style={{ animationDelay: `${index * 0.35}s` }}>
                    {snippet}
                  </span>
                ))}
              </div>
              <div className="reveal mt-10 flex flex-wrap gap-4" data-reveal>
                <MotionButton href="#projects" className="btn-solid">{`<${t.cta.projects}/>`}</MotionButton>
                <MotionButton href="#contact" className="btn-ghost">{`<${t.cta.contact}/>`}</MotionButton>
              </div>
            </div>

            <div className="reveal" data-reveal>
              <div className="hero-panel">
                <div className="hero-panel-head">
                  <span className="panel-status" />
                  <p>{t.labels.services}</p>
                </div>
                <div className="space-y-4">
                  {t.heroServices.map((service, index) => (
                    <article key={service.title} className="service-panel">
                      <p className="service-index">0{index + 1}</p>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </article>
                  ))}
                </div>
                <div className="hero-panel-stats">
                  {t.heroMetrics.map((metric) => (
                    <div key={metric.label} className="signal-stat">
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal mt-12 grid gap-4 sm:grid-cols-3" data-reveal>
            {t.heroMetrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <p className="font-display text-4xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-textMuted">{metric.label}</p>
              </article>
            ))}
          </div>

          <div className="reveal mt-14 overflow-hidden rounded-full border border-line/70 bg-panel/60" data-reveal>
            <div className="tape-track">
              {t.heroTape.concat(t.heroTape).map((item, idx) => (
                <span key={`${item}-${idx}`} className="tape-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section story-section">
          <SectionTitle label={t.about.label} title={t.about.title} text={t.about.text} />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.about.points.map((point) => (
              <article key={point} className="card card-deep reveal" data-reveal>
                <p className="text-sm leading-relaxed text-textMuted">{point}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section story-section">
          <SectionTitle label={t.skills.label} title={t.skills.title} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {t.skills.groups.map((group) => (
              <article key={group.title} className="card card-deep card-hover reveal" data-reveal>
                <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section story-section">
          <SectionTitle label={t.experience.label} title={t.experience.title} text={t.experience.text} />
          <div className="timeline mt-10 space-y-5">
            {t.experience.items.map((item) => (
              <article key={item.title + item.period} className="card card-deep card-hover reveal timeline-card" data-reveal>
                <span className="timeline-dot" />
                <p className="text-[11px] uppercase tracking-[0.16em] text-accentSoft/85">{item.period}</p>
                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-textMuted">{item.company}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-textMuted">{item.impact}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section story-section">
          <SectionTitle label={t.projects.label} title={t.projects.title} text={t.projects.text} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {t.projects.items.map((project) => (
              <article key={project.name} className="project-card reveal" data-reveal>
                <p className="project-kicker">{t.labels.delivery}</p>
                <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-textMuted">{project.description}</p>
                <dl className="mt-6 space-y-3 text-sm">
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-accentSoft/85">{t.labels.stack}</dt>
                    <dd className="mt-1 text-textBase">{project.stack}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-accentSoft/85">{t.labels.role}</dt>
                    <dd className="mt-1 text-textBase">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-accentSoft/85">{t.labels.result}</dt>
                    <dd className="mt-1 text-textBase">{project.result}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section id="work-style" className="section story-section">
          <SectionTitle label={t.workStyle.label} title={t.workStyle.title} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.workStyle.items.map((item) => (
              <article key={item.title} className="card card-deep card-hover reveal" data-reveal>
                <p className="text-[11px] uppercase tracking-[0.16em] text-accentSoft/85">{t.labels.approach}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-textMuted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section story-section pb-6">
          <SectionTitle label={t.contact.label} title={t.contact.title} text={t.contact.text} />
          <div className="contact-shell reveal mt-10" data-reveal>
            <p className="contact-kicker">{t.labels.services}</p>
            <a className="font-display text-2xl text-textBase transition hover:text-white" href={`mailto:${t.profile.email}`}>
              {t.profile.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-textMuted">
              <a className="nav-link" href={t.profile.linkedin} target="_blank" rel="noreferrer">
                {t.labels.linkedin}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/70 py-7">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 text-xs text-textMuted sm:px-10">
          <p>{t.labels.footer}</p>
        </div>
      </footer>
    </>
  );
}
