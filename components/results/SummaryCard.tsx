import CardShell from './CardShell';

interface Props { summary: string }

export default function SummaryCard({ summary }: Props) {
  return (
    <CardShell
      title="Executive Summary"
      copyText={summary}
      iconBg="bg-accent/10"
      iconColor="text-accent"
      icon={
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M2 7h9M2 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      }
      className="md:col-span-3"
    >
      <p className="text-sm text-[var(--text)] leading-relaxed">{summary}</p>
    </CardShell>
  );
}
