const steps = [
  {
    number: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 8h8M7 11h6M7 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Paste your transcript',
    description:
      'Drop in raw meeting notes, a copied transcript, or exported text from any tool. No formatting required.',
  },
  {
    number: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M11 7v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI analyzes in seconds',
    description:
      'Claude reads the transcript and extracts decisions, action items, open questions, risks, and meeting quality signals.',
  },
  {
    number: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6h14M4 10h10M4 14h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="17" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M15.5 15l1 1 2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Get a structured report',
    description:
      'Receive 8 clear sections with a Meeting Clarity Score, copyable follow-up message, and actionable recommendations.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">
            How it works
          </h2>
          <p className="text-[var(--muted)] max-w-md mx-auto">
            Three steps from messy transcript to clear, structured output.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden
            className="hidden md:block absolute top-9 left-1/6 right-1/6 h-px bg-[var(--border)]"
            style={{ left: '20%', right: '20%' }}
          />

          {steps.map((step, i) => (
            <div key={i} className="relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 shadow-sm">
              {/* Step number */}
              <span className="absolute top-5 right-5 font-display font-bold text-4xl text-[var(--border)] leading-none select-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                {step.icon}
              </div>

              <h3 className="font-display font-semibold text-[var(--text)] text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Output preview pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {[
            'Executive Summary',
            'Confirmed Decisions',
            'Action Items + Owners',
            'Unresolved Items',
            'Key Discussion Points',
            'Risks',
            'Meeting Clarity Score',
            'Follow-up Message',
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--muted)] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
