import CardShell from './CardShell';
import Badge from '@/components/ui/Badge';
import type { UnresolvedItem, Severity } from '@/lib/types';

interface Props { unresolvedItems: UnresolvedItem[] }

const typeLabel: Record<string, string> = {
  open_question:        'Open Question',
  ambiguity:            'Ambiguity',
  unresolved_conflict:  'Conflict',
  missing_information:  'Missing Info',
};

const impactVariant: Record<Severity, 'red' | 'amber' | 'default'> = {
  high:   'red',
  medium: 'amber',
  low:    'default',
};

function itemsToText(items: UnresolvedItem[]): string {
  return items
    .map((u, i) => `${i + 1}. [${typeLabel[u.type] || u.type}] ${u.description} (Impact: ${u.impact})`)
    .join('\n');
}

export default function UnresolvedCard({ unresolvedItems }: Props) {
  return (
    <CardShell
      title="Unresolved Items"
      copyText={itemsToText(unresolvedItems)}
      iconBg="bg-amber/10"
      iconColor="text-amber"
      icon={
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 5v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      }
    >
      {unresolvedItems.length === 0 ? (
        <p className="text-sm text-green italic flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 6.5l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          No major unresolved items detected.
        </p>
      ) : (
        <ul className="space-y-3">
          {unresolvedItems.map((u, i) => (
            <li key={i} className="flex items-start gap-2.5 py-2.5 border-b border-[var(--border)] last:border-0 last:pb-0">
              <div className="flex flex-wrap gap-1.5 shrink-0 mt-0.5">
                <Badge label={typeLabel[u.type] || u.type} variant="amber" size="xs" />
                <Badge label={`${u.impact} impact`} variant={impactVariant[u.impact]} size="xs" />
              </div>
              <p className="text-sm text-[var(--text)] leading-snug">{u.description}</p>
            </li>
          ))}
        </ul>
      )}
    </CardShell>
  );
}
