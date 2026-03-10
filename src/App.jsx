import { useEffect, useId, useMemo, useRef, useState } from 'react';
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
      <p className="text-[11px] tracking-[0.24em] text-accentSoft/90">
        <span className="code-inline">&lt;{label} /&gt;</span>
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
        <span className="code-angle">&lt;</span>
        {title}
        <span className="code-angle"> /&gt;</span>
      </h2>
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

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <a
      href={href}
      className={`motion-btn ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {children}
    </a>
  );
}

function CodeLensBlock({ as: Tag = 'article', className = '', code = '', pulseDelay = 0, children, ...props }) {
  const [lens, setLens] = useState({ x: 50, y: 50, a: 0, hover: false });
  const phaseRef = useRef(Math.random() * Math.PI * 2);

  useEffect(() => {
    let rafId = 0;
    const loop = (time) => {
      setLens((prev) => {
        if (prev.hover) return prev;
        const p = phaseRef.current + pulseDelay;
        const cycle = (Math.sin(time / 318 + p) + 1) * 0.5;
        return {
          ...prev,
          x: 50 + Math.sin(time / 820 + p) * 26,
          y: 50 + Math.cos(time / 1080 + p * 1.2) * 22,
          a: cycle > 0.78 ? 1 : 0.14
        };
      });
      rafId = window.requestAnimationFrame(loop);
    };
    rafId = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(rafId);
  }, [pulseDelay]);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setLens((prev) => ({ ...prev, x, y, a: 1 }));
  };

  return (
    <Tag
      {...props}
      className={`code-lens ${className}`.trim()}
      onMouseEnter={() => setLens((prev) => ({ ...prev, hover: true, a: 1 }))}
      onMouseMove={handleMove}
      onMouseLeave={() => setLens((prev) => ({ ...prev, hover: false, a: 1 }))}
      style={{
        ...(props.style || {}),
        '--pulse-delay': `${pulseDelay}s`,
        '--mx': `${lens.x}%`,
        '--my': `${lens.y}%`,
        '--ma': lens.a
      }}
    >
      <div className="lens-content">{children}</div>
      <pre aria-hidden="true" className="code-lens-layer">
        {code}
      </pre>
    </Tag>
  );
}

function TiltCard({ className, children, ...props }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, gX: 50, gY: 50, mX: 50, mY: 50, mA: 0, hover: false });
  const phaseRef = useRef(Math.random() * Math.PI * 2);

  useEffect(() => {
    let rafId = 0;
    const loop = (time) => {
      setTilt((prev) => {
        if (prev.hover) return prev;
        const p = phaseRef.current;
        const cycle = (Math.sin(time / 318 + p) + 1) * 0.5;
        const px = 50 + Math.sin(time / 860 + p) * 24;
        const py = 50 + Math.cos(time / 1120 + p * 1.3) * 20;
        return {
          ...prev,
          x: Math.cos(time / 1300 + p) * 1.4,
          y: Math.sin(time / 1200 + p) * 2.2,
          gX: px,
          gY: py,
          mX: px,
          mY: py,
          mA: cycle > 0.78 ? 1 : 0.14
        };
      });
      rafId = window.requestAnimationFrame(loop);
    };
    rafId = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  const handleMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const x = (0.5 - py) * 7;
    const y = (px - 0.5) * 9;
    setTilt((prev) => ({
      ...prev,
      x,
      y,
      gX: px * 100,
      gY: py * 100,
      mX: px * 100,
      mY: py * 100,
      mA: 1
    }));
  };

  const handleLeave = () => setTilt((prev) => ({ ...prev, hover: false, mA: 1 }));

  return (
    <article
      {...props}
      className={`tilt-card ${className}`}
      onMouseEnter={() => setTilt((prev) => ({ ...prev, hover: true, mA: 1 }))}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        '--gx': `${tilt.gX}%`,
        '--gy': `${tilt.gY}%`,
        '--mx': `${tilt.mX}%`,
        '--my': `${tilt.mY}%`,
        '--ma': tilt.mA
      }}
    >
      <div className="lens-content">{children}</div>
      <pre aria-hidden="true" className="code-lens-layer">
        {props.code || ''}
      </pre>
      <span aria-hidden="true" className="tilt-glare" />
    </article>
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
    <svg
      viewBox="0 0 1080 280"
      role="img"
      aria-label="drpinocode.com logo"
      className={`brand-logo ${className}`.trim()}
    >
      <defs>
        <linearGradient id={strokeId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#98d6e5" />
          <stop offset="100%" stopColor="#4f7f8b" />
        </linearGradient>
        <linearGradient id={textId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#dfe7f2" />
          <stop offset="100%" stopColor="#8ea0b7" />
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
        <path
          d="M44 40v200h80a100 100 0 0 0 0-200H44z"
          fill="none"
          stroke={`url(#${strokeId})`}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M242 26v214" fill="none" stroke={`url(#${strokeId})`} strokeWidth="11" strokeLinecap="round" />
        <path
          d="M242 26h76a78 78 0 0 1 0 156h-76"
          fill="none"
          stroke={`url(#${strokeId})`}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 22 });
  const [heroZoom, setHeroZoom] = useState(1);
  const [sectionMotion, setSectionMotion] = useState({});

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
      setHeroZoom(Math.max(0.92, 1 - y / 2400));
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min((y / docHeight) * 100, 100) : 0;
      setScrollProgress(progress);

      if (!reduceMotion) {
        const ids = ['about', 'skills', 'experience', 'projects', 'work-style', 'contact'];
        const nextMotion = {};

        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const centerDelta = rect.top + rect.height / 2 - window.innerHeight / 2;
          const normalized = Math.max(-1, Math.min(1, centerDelta / (window.innerHeight * 0.72)));
          const intensity = 1 - Math.abs(normalized);
          nextMotion[id] = { normalized, intensity };
        });

        setSectionMotion(nextMotion);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    let onMove;
    if (!reduceMotion) {
      onMove = (event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        setSpotlight({ x, y });
      };
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
  const lineOffset = useMemo(() => Math.min(scrollY * 0.04, 56), [scrollY]);
  const codeSnippets = ['<Cloud/>', '<DevOps/>', '<gRPC/>', '<SOLID/>', '<Azure/>', '<Scale/>'];
  const lensCode = {
    about: `public interface IValueDelivery {\n  Task<Impact> BuildAsync(ProductGoal goal);\n}\n\nservices.AddScoped<IValueDelivery, ProductEngineering>();`,
    skills: `builder.Services.AddControllers();\nbuilder.Services.AddEndpointsApiExplorer();\nbuilder.Services.AddSwaggerGen();\n\napp.UseRouting();\napp.MapControllers();`,
    experience: `public async Task<Result> ExecuteAsync(Request req) {\n  using var tx = await _db.Database.BeginTransactionAsync();\n  var data = await _repo.LoadAsync(req.Id);\n  await _bus.PublishAsync(new DomainEvent(data));\n  await tx.CommitAsync();\n  return Result.Ok();\n}`,
    projects: `public sealed class CloudModule {\n  public void Configure(WebApplicationBuilder builder) {\n    builder.Services.AddHealthChecks();\n    builder.Services.AddOpenTelemetry();\n    builder.Services.AddAzureClients();\n  }\n}`,
    work: `if (isMaintainable && isObservable) {\n  ship(value);\n} else {\n  refactor();\n  addTests();\n}`,
    contact: `// Let's build something solid.\nvar contact = new {\n  Email = "ceo@drpinocode.com",\n  Channel = "LinkedIn"\n};`
  };

  const getSectionStyle = (id) => {
    const reduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const state = sectionMotion[id];
    if (!state) return undefined;

    const y = state.normalized * -56;
    const scale = 0.92 + state.intensity * 0.08;
    const opacity = 0.42 + state.intensity * 0.58;

    return {
      transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
      opacity
    };
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t.labels.skipToMain}
      </a>

      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="grain absolute inset-0 opacity-30" />
        <div className="scan-overlay" aria-hidden="true" />
        <div className="scan-beam" aria-hidden="true" />
        <div aria-hidden="true" className="aurora aurora-a" />
        <div aria-hidden="true" className="aurora aurora-b" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at var(--spot-x) var(--spot-y), rgba(121, 168, 181, 0.22), transparent 30%)',
            '--spot-x': `${spotlight.x}%`,
            '--spot-y': `${spotlight.y}%`
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-16rem] top-[-14rem] h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-accent/30 via-accentSoft/20 to-transparent blur-3xl"
          style={{ transform: `translate3d(0, ${glowOffset}px, 0)` }}
        />
        <div
          aria-hidden="true"
          className="hero-lines pointer-events-none absolute left-[-20%] top-[40vh] h-[14rem] w-[140%]"
          style={{ transform: `translate3d(0, ${-lineOffset}px, 0)` }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-line/80 bg-slateDeep/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 sm:px-10">
          <a
            href="#hero"
            className="inline-flex items-center gap-3 text-sm font-medium text-textBase hover:text-white"
          >
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
                <button
                  key={option.code}
                  type="button"
                  className={`lang-btn ${language === option.code ? 'is-active' : ''}`}
                  onClick={() => setLanguage(option.code)}
                  aria-label={option.name}
                  aria-pressed={language === option.code}
                  title={option.name}
                >
                  <span aria-hidden="true">{option.flag}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main id="main" className="story-scroll mx-auto w-full max-w-[1200px] px-6 pb-24 sm:px-10">
        <section id="hero" className="relative min-h-[92vh] py-16 sm:py-24">
          <p
            className="reveal max-w-max rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-accentSoft"
            data-reveal
          >
            {'<'}
            {t.profile.role}
            {'/>'}
          </p>
          <div className="relative mt-8">
            <div
              className="logo-hero-glow reveal relative z-10 max-w-[840px]"
              data-reveal
              style={{ transform: `scale(${heroZoom})` }}
            >
              <BrandLogo tagline={t.logoTagline} className="w-full h-auto logo-breath" />
            </div>
          </div>
          <p
            className="reveal mt-7 max-w-4xl font-display text-2xl text-textBase sm:text-4xl glitch-text"
            data-reveal
            data-text={t.profile.claim}
          >
            {t.profile.claim}
          </p>
          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-textMuted sm:text-lg" data-reveal>
            {t.profile.summary}
          </p>
          <div className="reveal mt-7 flex flex-wrap gap-2" data-reveal>
            {codeSnippets.map((snippet, index) => (
              <span key={snippet} className="floating-code" style={{ animationDelay: `${index * 0.35}s` }}>
                {snippet}
              </span>
            ))}
          </div>
          <div className="reveal mt-10 flex flex-wrap gap-4" data-reveal>
            <MotionButton href="#projects" className="btn-solid">
              {'<'}
              {t.cta.projects}
              {'/>'}
            </MotionButton>
            <MotionButton href="#contact" className="btn-ghost">
              {'<'}
              {t.cta.contact}
              {'/>'}
            </MotionButton>
          </div>
          <div className="reveal mt-12 grid gap-4 sm:grid-cols-3" data-reveal>
            {t.heroMetrics.map((metric, idx) => (
              <article key={metric.label} className="metric-card" style={{ animationDelay: `${idx * 0.9}s` }}>
                <p className="font-display text-4xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-textMuted">{metric.label}</p>
              </article>
            ))}
          </div>
          <div className="reveal mt-14 overflow-hidden rounded-full border border-line/90 bg-panel/60" data-reveal>
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
          <div className="section-shell" style={getSectionStyle('about')}>
            <SectionTitle label={t.about.label} title={t.about.title} text={t.about.text} />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.about.points.map((point) => (
                <CodeLensBlock key={point} className="card reveal" data-reveal code={lensCode.about} pulseDelay={0.1}>
                  <p className="text-sm leading-relaxed text-textMuted">{point}</p>
                </CodeLensBlock>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section story-section">
          <div className="section-shell" style={getSectionStyle('skills')}>
            <SectionTitle label={t.skills.label} title={t.skills.title} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {t.skills.groups.map((group) => (
                <CodeLensBlock
                  key={group.title}
                  className="card card-hover reveal"
                  data-reveal
                  code={lensCode.skills}
                  pulseDelay={0.35}
                >
                  <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CodeLensBlock>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section story-section">
          <div className="section-shell" style={getSectionStyle('experience')}>
            <SectionTitle label={t.experience.label} title={t.experience.title} text={t.experience.text} />
            <div className="relative mt-10 space-y-5 before:absolute before:left-4 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-accent/70 before:to-transparent sm:before:left-6">
              {t.experience.items.map((item) => (
                <CodeLensBlock
                  key={item.title + item.period}
                  className="card card-hover reveal relative pl-10 sm:pl-14"
                  data-reveal
                  code={lensCode.experience}
                  pulseDelay={0.55}
                >
                  <span className="absolute left-2 top-7 h-4 w-4 rounded-full border border-accentSoft bg-slateDeep sm:left-4" />
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
                </CodeLensBlock>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section story-section">
          <div className="section-shell" style={getSectionStyle('projects')}>
            <SectionTitle label={t.projects.label} title={t.projects.title} text={t.projects.text} />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {t.projects.items.map((project) => (
                <TiltCard key={project.name} className="project-card reveal" data-reveal code={lensCode.projects}>
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
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section id="work-style" className="section story-section">
          <div className="section-shell" style={getSectionStyle('work-style')}>
            <SectionTitle label={t.workStyle.label} title={t.workStyle.title} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.workStyle.items.map((item) => (
                <CodeLensBlock
                  key={item.title}
                  className="card card-hover reveal"
                  data-reveal
                  code={lensCode.work}
                  pulseDelay={0.75}
                >
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-textMuted">{item.text}</p>
                </CodeLensBlock>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section story-section pb-6">
          <div className="section-shell" style={getSectionStyle('contact')}>
            <SectionTitle label={t.contact.label} title={t.contact.title} text={t.contact.text} />
            <CodeLensBlock
              as="div"
              className="reveal mt-10 rounded-3xl border border-line/90 bg-panel/70 p-8 shadow-panel"
              data-reveal
              code={lensCode.contact}
              pulseDelay={0.9}
            >
              <a
                className="font-display text-2xl text-textBase transition hover:text-white"
                href={`mailto:${t.profile.email}`}
              >
                {t.profile.email}
              </a>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-textMuted">
                <a className="nav-link" href={t.profile.linkedin} target="_blank" rel="noreferrer">
                  {t.labels.linkedin}
                </a>
              </div>
            </CodeLensBlock>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/80 py-7">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 text-xs text-textMuted sm:px-10">
          <p>{t.labels.footer}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
