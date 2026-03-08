import { useLang } from '@/lib/LanguageContext';
import { useT } from '@/lib/i18n';

const stepIcons = [
  <svg key="1" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M7 8h8M7 11h6M7 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M11 7v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M4 6h14M4 10h10M4 14h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="17" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M15.5 15l1 1 2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
];

export default function HowItWorks() {
  const { lang } = useLang();
  const t = useT(lang);

  const steps = [
    { number: '01', icon: stepIcons[0], title: t.step1Title, description: t.step1Desc },
    { number: '02', icon: stepIcons[1], title: t.step2Title, description: t.step2Desc },
    { number: '03', icon: stepIcons[2], title: t.step3Title, description: t.step3Desc },
  ];

  const pills = [
    t.cardSummary, t.cardDecisions, t.cardActions,
    t.cardUnresolved, t.cardKeyPoints, t.cardRisks,
    t.cardClarity, t.cardFollowUp,
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">
            {t.howTitle}
          </h2>
          <p className="text-[var(--muted)] max-w-md mx-auto">{t.howSub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div aria-hidden className="hidden md:block absolute top-9 h-px bg-[var(--border)]" style={{ left: '20%', right: '20%' }} />

          {steps.map((step, i) => (
            <div key={i} className="relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 shadow-sm">
              <span className="absolute top-5 right-5 font-display font-bold text-4xl text-[var(--border)] leading-none select-none">
                {step.number}
              </span>
              <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-display font-semibold text-[var(--text)] text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {pills.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--muted)] font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
