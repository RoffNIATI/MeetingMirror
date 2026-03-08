import { useLang } from '@/lib/LanguageContext';
import { useT } from '@/lib/i18n';

export default function Hero() {
  const { lang } = useLang();
  const t = useT(lang);

  const stats = [
    { label: t.statMeetingTypes, value: t.statMeetingTypesVal },
    { label: t.statSections,     value: t.statSectionsVal },
    { label: t.statSetup,        value: t.statSetupVal },
  ];

  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% -10%, rgba(37,99,235,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 80% 60%, rgba(37,99,235,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--muted)] font-medium mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {t.eyebrow}
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] leading-[1.05] tracking-tight mb-6">
          {t.heroLine1}
          <br />
          {lang === 'en'
            ? <span>into <span className="text-accent">clear decisions</span></span>
            : <span>en <span className="text-accent">décisions claires</span></span>
          }
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed mb-10">
          {t.heroSub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#workspace"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold
              hover:bg-accent-dk transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
          >
            {t.ctaAnalyze}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface)]
              text-[var(--text)] font-medium hover:border-[var(--muted)] transition-all text-sm"
          >
            {t.ctaHowItWorks}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-bold text-[var(--text)] text-lg">{stat.value}</p>
              <p className="text-xs text-[var(--muted)] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
