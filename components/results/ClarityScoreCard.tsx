import CardShell from './CardShell';
import type { MeetingClarity } from '@/lib/types';

interface Props { clarity: MeetingClarity }

function scoreColor(score: number): string {
  if (score >= 8) return '#16A34A';
  if (score >= 6) return '#D97706';
  if (score >= 4) return '#EA580C';
  return '#DC2626';
}

function scoreLabel(score: number): string {
  if (score >= 8) return 'Strong';
  if (score >= 6) return 'Moderate';
  if (score >= 4) return 'Weak';
  return 'Poor';
}

function clarityToText(c: MeetingClarity): string {
  return [
    `Meeting Clarity Score: ${c.score}/10 — ${scoreLabel(c.score)}`,
    `\n${c.rationale}`,
    c.strengths.length ? `\nStrengths:\n${c.strengths.map(s => `• ${s}`).join('\n')}` : '',
    c.gaps.length       ? `\nGaps:\n${c.gaps.map(g => `• ${g}`).join('\n')}` : '',
    c.recommendations.length ? `\nRecommendations:\n${c.recommendations.map(r => `• ${r}`).join('\n')}` : '',
  ].join('');
}

export default function ClarityScoreCard({ clarity }: Props) {
  const color    = scoreColor(clarity.score);
  const label    = scoreLabel(clarity.score);
  const progress = (clarity.score / 10) * 100;

  return (
    <CardShell
      title="Meeting Clarity Score"
      copyText={clarityToText(clarity)}
      iconBg="bg-[var(--border)]"
      iconColor="text-[var(--muted)]"
      icon={
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
    >
      {/* Score display */}
      <div className="flex items-end gap-3 mb-3">
        <span className="font-display font-bold text-5xl leading-none" style={{ color }}>
          {clarity.score}
        </span>
        <div className="pb-1">
          <span className="text-sm font-semibold" style={{ color }}>{label}</span>
          <span className="text-[var(--muted)] text-sm"> / 10</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 rounded-full bg-[var(--bg)] border border-[var(--border)] mb-3 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${progress}%`, backgroundColor: color }}
        />
      </div>

      <p className="text-xs text-[var(--muted)] mb-4 leading-relaxed">{clarity.rationale}</p>

      {/* Strengths */}
      {clarity.strengths.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-semibold text-[var(--text)] mb-1.5 uppercase tracking-wide">Strengths</p>
          <ul className="space-y-1">
            {clarity.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[var(--text)]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5 shrink-0">
                  <path d="M2 6l2.5 2.5 5.5-5" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Gaps */}
      {clarity.gaps.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-semibold text-[var(--text)] mb-1.5 uppercase tracking-wide">Gaps</p>
          <ul className="space-y-1">
            {clarity.gaps.map((g, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[var(--text)]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5 shrink-0">
                  <path d="M3 9l6-6M9 9L3 3" stroke="#D97706" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                {g}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recommendations */}
      {clarity.recommendations.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-[var(--text)] mb-1.5 uppercase tracking-wide">Recommendations</p>
          <ul className="space-y-1">
            {clarity.recommendations.map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[var(--muted)]">
                <span className="mt-1 w-1 h-1 rounded-full bg-accent shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}
    </CardShell>
  );
}
