import type { AnalysisResult } from './types';

// Realistic mock result used in demo mode (based on the sample sprint retro transcript)
export const MOCK_RESULT: AnalysisResult = {
  executiveSummary:
    'The team completed Sprint 22 with the dashboard v2 shipped, though a late regression delayed the release by two days. Sprint 23 planning aligned on onboarding V2 as the primary goal. Several action items were assigned but two key dependencies — user research ownership and mobile scope confirmation — remain unresolved and could impact the sprint timeline.',

  keyDiscussionPoints: [
    'Search query performance is averaging 4 seconds, well above the 800ms target — likely an N+1 query issue (unconfirmed)',
    'Onboarding V2 is the primary sprint 23 goal; designs are 80% complete pending user research findings',
    'Mobile scope for onboarding V2 is ambiguous and was not confirmed with the mobile team',
    'User research summary ownership is unclear — Lisa was assumed responsible but was not present',
    'The team agreed to trial async standups via Slack for two weeks instead of daily Zoom calls',
    'Performance refactor was explicitly deferred to a future sprint',
  ],

  confirmedDecisions: [
    {
      text: 'Onboarding V2 is the primary goal for Sprint 23.',
      status: 'confirmed',
      context: 'Explicitly agreed by Sarah and James',
    },
    {
      text: 'The performance refactor is deferred — not included in Sprint 23.',
      status: 'confirmed',
      context: 'Sarah confirmed: "Onboarding V2 first"',
    },
    {
      text: 'Daily Zoom standups will be replaced by async Slack standups for a two-week trial.',
      status: 'confirmed',
      context: 'Majority agreed; Priya expressed preference for sync but accepted',
    },
    {
      text: 'Tom will investigate search latency and share findings by Friday.',
      status: 'confirmed',
      context: 'Verbally confirmed by Tom',
    },
  ],

  actionItems: [
    {
      task: 'Investigate search query latency and share root cause findings with the team',
      owner: 'Tom',
      ownerConfidence: 'high',
      dueDate: 'Friday',
    },
    {
      task: 'Finalize onboarding V2 designs once user research findings are received',
      owner: 'Priya',
      ownerConfidence: 'high',
      dueDate: 'Thursday',
    },
    {
      task: 'Confirm with the mobile team whether mobile is in scope for onboarding V2',
      owner: 'Sarah',
      ownerConfidence: 'high',
      dueDate: 'Tomorrow',
    },
    {
      task: 'Set up async standup process in Slack',
      owner: 'Sarah',
      ownerConfidence: 'medium',
    },
    {
      task: 'Deliver user research summary to unblock Priya\'s design work',
      owner: 'Owner unclear',
      ownerConfidence: 'unknown',
      dueDate: 'Wednesday',
    },
    {
      task: 'Implement onboarding V2 frontend flows once designs are finalised',
      owner: 'Mia',
      ownerConfidence: 'high',
    },
    {
      task: 'Run QA testing for onboarding V2 in the final two days of the sprint',
      owner: 'Chris',
      ownerConfidence: 'high',
    },
  ],

  unresolvedItems: [
    {
      description:
        'It is unclear whether the mobile team is included in the onboarding V2 scope. This was raised but not resolved — Sarah said she would confirm the next day.',
      type: 'ambiguity',
      impact: 'high',
    },
    {
      description:
        'The owner of the user research summary is unknown. Lisa was assumed responsible but was absent from the call. No one claimed ownership before the meeting ended.',
      type: 'missing_information',
      impact: 'high',
    },
    {
      description:
        'The search performance issue may affect the export feature in Sprint 23, but this was not confirmed. No mitigation plan was discussed.',
      type: 'open_question',
      impact: 'medium',
    },
    {
      description:
        'The two-week async standup trial has no defined success criteria or review process — it is unclear what "revisit" means at the end of the trial.',
      type: 'ambiguity',
      impact: 'low',
    },
  ],

  risks: [
    {
      description:
        'If mobile scope is not confirmed before Mia starts implementation, the component structure may need to be reworked mid-sprint, causing delays.',
      severity: 'high',
    },
    {
      description:
        'The user research summary has no confirmed owner. If Lisa is unavailable, Priya\'s design work will be blocked and the sprint goal may slip.',
      severity: 'high',
    },
    {
      description:
        'Search latency at 4s average could impact user retention if it affects the Q2 launch features. The root cause is still unconfirmed.',
      severity: 'medium',
    },
  ],

  meetingClarity: {
    score: 6,
    rationale:
      'The meeting had a clear primary goal and some well-assigned actions, but ended with two high-impact blockers unresolved and no formal close or decision log.',
    strengths: [
      'Sprint 23 priority was clearly aligned — onboarding V2 with no ambiguity on the decision',
      'Tom\'s investigation task was explicitly confirmed with a named owner and deadline',
      'The performance refactor deferral was a clear, explicit decision',
    ],
    gaps: [
      'Two high-impact items (mobile scope, research ownership) were left open without a resolution plan',
      'The meeting ended abruptly with no verbal summary of decisions or next steps',
      'Several action items floated without confirmed owners (research summary, standup setup)',
    ],
    recommendations: [
      'Always close with a 2-minute decision recap: what was decided, who owns what, what is still open',
      'Resolve scope questions with dependent teams before sprint kickoff, not during planning',
      'Never leave a task unowned — assign a temporary DRI if the real owner is absent',
    ],
  },

  suggestedFollowUp:
    'Hi team — quick recap from today\'s sprint planning.\n\nSprint 23 goal: Onboarding V2. Performance refactor is deferred.\n\n**Confirmed actions:**\n• Tom → investigate search latency by Friday\n• Priya → finalize designs once research lands (by Thursday)\n• Mia → frontend implementation post-designs\n• Chris → QA in final 2 days\n• Sarah → confirm mobile scope with mobile team by tomorrow\n\n**Still needs resolution:**\n• Who owns the user research summary? (Lisa?) — needed by Wednesday to unblock Priya\n• Mobile scope: in or out for V2? Sarah to confirm.\n\nAsync standups start next week via Slack — Sarah will set it up.\n\nPlease reply to claim any unowned items. — [Your name]',
};
