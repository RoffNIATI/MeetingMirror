import CardShell from './CardShell';
import Badge from '@/components/ui/Badge';
import type { ActionItem, OwnerConfidence } from '@/lib/types';

interface Props { actionItems: ActionItem[] }

const confidenceVariant: Record<OwnerConfidence, 'green' | 'amber' | 'red' | 'default'> = {
  high:    'green',
  medium:  'amber',
  low:     'red',
  unknown: 'default',
};

function actionsToText(items: ActionItem[]): string {
  return items
    .map((a, i) => `${i + 1}. ${a.task}\n   Owner: ${a.owner}${a.dueDate ? ` · Due: ${a.dueDate}` : ''}`)
    .join('\n\n');
}

export default function ActionItemsCard({ actionItems }: Props) {
  return (
    <CardShell
      title="Action Items"
      copyText={actionsToText(actionItems)}
      iconBg="bg-blue-500/10"
      iconColor="text-blue-600"
      icon={
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
    >
      {actionItems.length === 0 ? (
        <p className="text-sm text-[var(--muted)] italic">No clear action items were identified.</p>
      ) : (
        <ul className="space-y-3.5">
          {actionItems.map((a, i) => (
            <li key={i} className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
              <p className="text-sm text-[var(--text)] font-medium leading-snug mb-2">{a.task}</p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
                {/* Owner */}
                <span className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <circle cx="5.5" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1.5 9.5c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  {a.owner}
                </span>

                {/* Owner confidence */}
                <Badge
                  label={`${a.ownerConfidence} confidence`}
                  variant={confidenceVariant[a.ownerConfidence]}
                  size="xs"
                />

                {/* Due date */}
                {a.dueDate && (
                  <span className="flex items-center gap-1">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <rect x="1" y="2" width="9" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M3.5 1v2M7.5 1v2M1 5h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    {a.dueDate}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </CardShell>
  );
}
