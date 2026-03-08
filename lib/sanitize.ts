import type { AnalysisResult } from './types';

// Safe default values if Claude returns partial or malformed data
const defaults: AnalysisResult = {
  executiveSummary: 'Summary could not be extracted.',
  keyDiscussionPoints: [],
  confirmedDecisions: [],
  actionItems: [],
  unresolvedItems: [],
  risks: [],
  meetingClarity: {
    score: 0,
    rationale: 'Score could not be computed.',
    strengths: [],
    gaps: [],
    recommendations: [],
  },
  suggestedFollowUp: '',
};

const VALID_SEVERITY   = ['high', 'medium', 'low'] as const;
const VALID_CONFIDENCE = ['high', 'medium', 'low', 'unknown'] as const;
const VALID_UNRESOLVED = ['open_question', 'ambiguity', 'unresolved_conflict', 'missing_information'] as const;
const VALID_DECISION   = ['confirmed', 'likely'] as const;

function toArr<T>(val: unknown, map: (item: unknown) => T | null): T[] {
  if (!Array.isArray(val)) return [];
  return val.map(map).filter((x): x is T => x !== null);
}

function str(val: unknown, fallback = ''): string {
  return typeof val === 'string' && val.trim() ? val.trim() : fallback;
}

// Validate and normalise the raw JSON object from the LLM
export function sanitizeAnalysis(raw: unknown): AnalysisResult {
  if (typeof raw !== 'object' || raw === null) return defaults;

  const r = raw as Record<string, unknown>;

  const score = typeof r.meetingClarity === 'object' && r.meetingClarity !== null
    ? Math.min(10, Math.max(1, Math.round(Number((r.meetingClarity as Record<string, unknown>).score) || 0)))
    : 0;

  const mc = typeof r.meetingClarity === 'object' && r.meetingClarity !== null
    ? r.meetingClarity as Record<string, unknown>
    : {};

  return {
    executiveSummary: str(r.executiveSummary, defaults.executiveSummary),

    keyDiscussionPoints: toArr(r.keyDiscussionPoints, (item) =>
      typeof item === 'string' ? item : null
    ),

    confirmedDecisions: toArr(r.confirmedDecisions, (item) => {
      if (typeof item !== 'object' || item === null) return null;
      const d = item as Record<string, unknown>;
      return {
        text: str(d.text),
        status: VALID_DECISION.includes(d.status as never) ? (d.status as 'confirmed' | 'likely') : 'likely',
        context: typeof d.context === 'string' ? d.context : undefined,
      };
    }),

    actionItems: toArr(r.actionItems, (item) => {
      if (typeof item !== 'object' || item === null) return null;
      const a = item as Record<string, unknown>;
      return {
        task: str(a.task),
        owner: str(a.owner, 'Owner unclear'),
        ownerConfidence: VALID_CONFIDENCE.includes(a.ownerConfidence as never)
          ? (a.ownerConfidence as 'high' | 'medium' | 'low' | 'unknown')
          : 'unknown',
        dueDate: typeof a.dueDate === 'string' ? a.dueDate : undefined,
      };
    }),

    unresolvedItems: toArr(r.unresolvedItems, (item) => {
      if (typeof item !== 'object' || item === null) return null;
      const u = item as Record<string, unknown>;
      return {
        description: str(u.description),
        type: VALID_UNRESOLVED.includes(u.type as never) ? (u.type as never) : 'open_question',
        impact: VALID_SEVERITY.includes(u.impact as never) ? (u.impact as 'high' | 'medium' | 'low') : 'medium',
      };
    }),

    risks: toArr(r.risks, (item) => {
      if (typeof item !== 'object' || item === null) return null;
      const ri = item as Record<string, unknown>;
      return {
        description: str(ri.description),
        severity: VALID_SEVERITY.includes(ri.severity as never) ? (ri.severity as 'high' | 'medium' | 'low') : 'medium',
      };
    }),

    meetingClarity: {
      score,
      rationale: str(mc.rationale, defaults.meetingClarity.rationale),
      strengths: toArr(mc.strengths, (s) => typeof s === 'string' ? s : null),
      gaps: toArr(mc.gaps, (g) => typeof g === 'string' ? g : null),
      recommendations: toArr(mc.recommendations, (rec) => typeof rec === 'string' ? rec : null),
    },

    suggestedFollowUp: str(r.suggestedFollowUp),
  };
}
