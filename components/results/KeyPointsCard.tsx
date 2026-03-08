import CardShell from './CardShell';
import { useLang } from '@/lib/LanguageContext';
import { useT } from '@/lib/i18n';

interface Props { keyPoints: string[] }

export default function KeyPointsCard({ keyPoints }: Props) {
  const { lang } = useLang();
  const t = useT(lang);
  return (
    <CardShell title={t.cardKeyPoints} copyText={keyPoints.map((p, i) => `${i + 1}. ${p}`).join('\n')}
      iconBg="bg-purple-500/10" iconColor="text-purple-600"
      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5h12M2 8h8M2 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>}>
      {keyPoints.length === 0 ? (
        <p className="text-sm text-[var(--muted)] italic">{t.noKeyPoints}</p>
      ) : (
        <ul className="space-y-2">
          {keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      )}
    </CardShell>
  );
}
