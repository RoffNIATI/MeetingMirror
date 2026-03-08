import CardShell from './CardShell';
import Badge from '@/components/ui/Badge';
import type { Risk, Severity } from '@/lib/types';

interface Props { risks: Risk[] }

const severityVariant: Record<Severity, 'red' | 'amber' | 'default'> = {
  high:   'red',
  medium: 'amber',
  low:    'default',
};

function risksToText(risks: Risk[]): string {
  return risks.map((r, i) => `${i + 1}. [${r.severity.toUpperCase()}] ${r.description}`).join('\n');
}

export default function RisksCard({ risks }: Props) {
  return (
    <CardShell
      title="Risks"
      copyText={risksToText(risks)}
      iconBg="bg-danger/10"
      iconColor="text-danger"
      icon={
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2L1.5 13h13L8 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M8 6v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      }
    >
      {risks.length === 0 ? (
        <p className="text-sm text-green italic flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 6.5l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          No significant risks identified.
        </p>
      ) : (
        <ul className="space-y-3">
          {risks.map((r, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Badge label={r.severity} variant={severityVariant[r.severity]} size="xs" />
              <p className="text-sm text-[var(--text)] leading-snug">{r.description}</p>
            </li>
          ))}
        </ul>
      )}
    </CardShell>
  );
}
