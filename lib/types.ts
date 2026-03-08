// ─── Core enums ───────────────────────────────────────────────────────────────

export type OwnerConfidence = 'high' | 'medium' | 'low' | 'unknown';
export type DecisionStatus  = 'confirmed' | 'likely';
export type UnresolvedType  = 'open_question' | 'ambiguity' | 'unresolved_conflict' | 'missing_information';
export type Severity        = 'high' | 'medium' | 'low';

// ─── Sub-types ────────────────────────────────────────────────────────────────

export interface Decision {
  text: string;
  status: DecisionStatus;    // "confirmed" only if explicitly stated in transcript
  context?: string;          // what led to this decision
}

export interface ActionItem {
  task: string;
  owner: string;             // "Owner unclear" if not identifiable — never guess
  ownerConfidence: OwnerConfidence;
  dueDate?: string;          // only if explicitly mentioned
}

export interface UnresolvedItem {
  description: string;
  type: UnresolvedType;
  impact: Severity;          // how much does this block progress
}

export interface Risk {
  description: string;
  severity: Severity;
}

export interface MeetingClarity {
  score: number;             // integer 1–10, conservative
  rationale: string;         // one sentence explaining the score
  strengths: string[];
  gaps: string[];            // what was missing or unclear
  recommendations: string[]; // concrete suggestions for the next meeting
}

// ─── Root result ──────────────────────────────────────────────────────────────

export interface AnalysisResult {
  executiveSummary: string;
  keyDiscussionPoints: string[];
  confirmedDecisions: Decision[];
  actionItems: ActionItem[];
  unresolvedItems: UnresolvedItem[];
  risks: Risk[];
  meetingClarity: MeetingClarity;
  suggestedFollowUp: string;
}

// ─── API envelope ─────────────────────────────────────────────────────────────

export type ApiResponse =
  | { success: true;  data: AnalysisResult }
  | { success: false; error: string };
