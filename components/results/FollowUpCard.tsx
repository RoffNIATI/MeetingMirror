import CardShell from './CardShell';
import { useLang } from '@/lib/LanguageContext';
import { useT } from '@/lib/i18n';

interface Props { message: string }

export default function FollowUpCard({ message }: Props) {
  const { lang } = useLang();
  const t = useT(lang);
  return (
    <CardShell title={t.cardFollowUp} copyText={message} iconBg="bg-accent/10" iconColor="text-accent"
      className="md:col-span-3"
      icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3h12v9H2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 3l6 5.5L14 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}>
      {message ? (
        <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl px-5 py-4">
          <p className="text-sm text-[var(--text)] leading-relaxed whitespace-pre-line">{message}</p>
        </div>
      ) : (
        <p className="text-sm text-[var(--muted)] italic">{t.noFollowUp}</p>
      )}
    </CardShell>
  );
}
