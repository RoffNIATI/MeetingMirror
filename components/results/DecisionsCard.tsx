import CardShell from './CardShell';
import Badge from '@/components/ui/Badge';
import { useLang } from '@/lib/LanguageContext';
import { useT } from '@/lib/i18n';
import type { Decision } from '@/lib/types';

interface Props { decisions: Decision[] }

function decisionsToText(decisions: Decision[]): string {
  return decisions
    .map((d, i) => `${i + 1}. [${d.status.toUpperCase()}] ${d.text}${d.context ? ` (${d.context})` : ''}`)
    .join('\n');
}

export default function DecisionsCard({ decisions }: Props) {
  const { lang } = useLang();
  const t = useT(lang);
  return (
    <CardShell title={t.cardDecisions} copyText={decisionsToText(decisions)} iconBg="bg-green/10" iconColor="text-green"
      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}>
      {decisions.length === 0 ? (
        <p className="text-sm text-[var(--muted)] italic">{t.noDecisions}</p>
      ) : (
        <ul className="space-y-3">
          {decisions.map((d, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Badge label={d.status === 'confirmed' ? t.confirmed : t.likely} variant={d.status === 'confirmed' ? 'green' : 'amber'} size="xs" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[var(--text)] leading-snug">{d.text}</p>
                {d.context && <p className="text-xs text-[var(--muted)] mt-0.5 italic">{d.context}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </CardShell>
  );
}
