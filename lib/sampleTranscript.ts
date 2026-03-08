export const SAMPLE_TRANSCRIPT = `Sprint 22 Retro + Sprint 23 Planning — March 5, 2026
Attendees: Sarah (PM), James (Tech Lead), Priya (Designer), Tom (Backend), Mia (Frontend), Chris (QA)

Sarah: Okay let's get started. We're a bit behind so let's keep this tight.
James, can you do a quick retro summary first?

James: Sure. Sprint 22 — we shipped the dashboard v2, which was the main goal.
QA caught a regression on the filters late, which delayed the release by two days.
Tom, you want to talk about the search issue?

Tom: Yeah so there's a performance problem we discovered. Search queries are taking
about 4 seconds on average, which is way above our 800ms target. It's affecting
the main search, the filters, and the recent items panel. I have a theory it's an
N+1 query problem but I haven't confirmed it yet.

Sarah: Is this blocking anything for sprint 23?

Tom: Potentially. If it hits the export feature it could be a bigger problem.
Not confirmed yet though.

James: I think we should investigate but not delay sprint 23 planning around it.

Sarah: Agreed. Okay, let's move to sprint 23. The big thing is onboarding V2.
Priya, where are we on design?

Priya: The designs are 80% done. I'm waiting on the user research findings
from the last round of interviews. Once I have those I can finalize the flows.
I think two days max.

Sarah: Who owns the research summary?

Priya: I thought it was Lisa but she's not on this call.

Sarah: Hmm okay. I'll need to follow up with her separately. For now let's assume
Priya needs that by Wednesday at the latest.

James: That works. Mia, what's your estimate on the frontend once designs are done?

Mia: If I get clean designs by Thursday, I can have the core flows done by end of sprint.
But I need to know if mobile is in scope or not. Last week there was some confusion.

Sarah: Good point. I don't think mobile is in scope for V2 but I haven't confirmed
that with the mobile team. Let me check.

James: That's a blocker if it changes the component structure. We should know before
Mia starts.

Sarah: Okay I'll confirm by tomorrow.

Chris: From QA side, I'll need at least 2 days for testing. If the timeline compresses
I'll flag it but I'm not worried yet.

James: Alright. So to summarize: onboarding V2 is the main sprint goal. Tom investigates
search performance and shares findings with the team — can you do that by Friday Tom?

Tom: Yes, Friday works.

James: Priya finalizes designs once research lands. Mia starts implementation post-designs.
Chris runs QA in the last two days.

Sarah: One more thing — I want to move standups to async starting next week.
We'd use Slack instead of the daily Zoom. Thoughts?

James: I'm okay with that.
Mia: Fine with me.
Tom: Works for me.
Chris: Sure.
Priya: I prefer sync but I can adapt.

Sarah: Okay let's try it for two weeks and revisit. I'll set it up.

James: What about the performance refactor? Do we park that for sprint 23?

Sarah: Yes, let's park it. Onboarding V2 first.

James: Confirmed. Alright, I think we're done. Talk Friday everyone.`;
