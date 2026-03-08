import type { AnalysisResult } from '@/lib/types';
import SummaryCard      from './SummaryCard';
import DecisionsCard    from './DecisionsCard';
import ActionItemsCard  from './ActionItemsCard';
import UnresolvedCard   from './UnresolvedCard';
import KeyPointsCard    from './KeyPointsCard';
import RisksCard        from './RisksCard';
import ClarityScoreCard from './ClarityScoreCard';
import FollowUpCard     from './FollowUpCard';

interface Props {
  result: AnalysisResult;
  onReset: () => void;
}

// Builds a full markdown export of all sections
function buildMarkdown(r: AnalysisResult): string {
  const lines: string[] = ['# Meeting Analysis — MeetingMirror\n'];

  lines.push(`## Executive Summary\n${r.executiveSummary}\n`);

  if (r.keyDiscussionPoints.length) {
    lines.push('## Key Discussion Points');
    r.keyDiscussionPoints.forEach((p, i) => lines.push(`${i + 1}. ${p}`));
    lines.push('');
  }

  if (r.confirmedDecisions.length) {
    lines.push('## Decisions');
    r.confirmedDecisions.forEach((d) =>
      lines.push(`- [${d.status.toUpperCase()}] ${d.text}${d.context ? ` _(${d.context})_` : ''}`)
    );
    lines.push('');
  }

  if (r.actionItems.length) {
    lines.push('## Action Items');
    r.actionItems.forEach((a) =>
      lines.push(`- **${a.task}** · Owner: ${a.owner}${a.dueDate ? ` · Due: ${a.dueDate}` : ''}`)
    );
    lines.push('');
  }

  if (r.unresolvedItems.length) {
    lines.push('## Unresolved Items');
    r.unresolvedItems.forEach((u) => lines.push(`- [${u.type}] ${u.description} (impact: ${u.impact})`));
    lines.push('');
  }

  if (r.risks.length) {
    lines.push('## Risks');
    r.risks.forEach((ri) => lines.push(`- [${ri.severity.toUpperCase()}] ${ri.description}`));
    lines.push('');
  }

  lines.push(`## Meeting Clarity Score: ${r.meetingClarity.score}/10\n${r.meetingClarity.rationale}`);
  if (r.meetingClarity.strengths.length) {
    lines.push('\n**Strengths:**');
    r.meetingClarity.strengths.forEach((s) => lines.push(`- ${s}`));
  }
  if (r.meetingClarity.gaps.length) {
    lines.push('\n**Gaps:**');
    r.meetingClarity.gaps.forEach((g) => lines.push(`- ${g}`));
  }
  if (r.meetingClarity.recommendations.length) {
    lines.push('\n**Recommendations:**');
    r.meetingClarity.recommendations.forEach((rec) => lines.push(`- ${rec}`));
  }
  lines.push('');

  if (r.suggestedFollowUp) {
    lines.push(`## Suggested Follow-up Message\n${r.suggestedFollowUp}`);
  }

  return lines.join('\n');
}

export default function ResultsPanel({ result, onReset }: Props) {
  const markdown = buildMarkdown(result);

  function downloadMarkdown() {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'meeting-analysis.md';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section id="results" className="py-20 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        {/* Results header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--text)] mb-1">
              Analysis complete
            </h2>
            <p className="text-sm text-[var(--muted)]">
              Review each section below. Copy individual cards or export everything.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={downloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-[var(--border)]
                bg-[var(--surface)] text-xs text-[var(--muted)] font-medium hover:text-[var(--text)]
                hover:border-[var(--muted)] transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1v8M3.5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 11h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Export .md
            </button>
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white
                text-xs font-semibold hover:bg-accent-dk transition-colors shadow-sm"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10.5 6A4.5 4.5 0 111.7 3.8M1.5 1.5v3h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              New analysis
            </button>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Row 1: full-width summary */}
          <SummaryCard summary={result.executiveSummary} />

          {/* Row 2: decisions, actions, unresolved */}
          <DecisionsCard   decisions={result.confirmedDecisions} />
          <ActionItemsCard actionItems={result.actionItems} />
          <UnresolvedCard  unresolvedItems={result.unresolvedItems} />

          {/* Row 3: key points, risks, clarity */}
          <KeyPointsCard    keyPoints={result.keyDiscussionPoints} />
          <RisksCard        risks={result.risks} />
          <ClarityScoreCard clarity={result.meetingClarity} />

          {/* Row 4: full-width follow-up */}
          <FollowUpCard message={result.suggestedFollowUp} />
        </div>
      </div>
    </section>
  );
}
