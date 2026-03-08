# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also used to type-check)
npm run lint     # ESLint via next lint
```

No test suite is configured. Use `npm run build` to catch TypeScript and lint errors before committing.

## Environment

Requires `.env.local` at the project root:
```
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_DEMO_MODE=true   # true = mock data, false = real Claude API
```

`NEXT_PUBLIC_DEMO_MODE=true` bypasses the API entirely and returns `MOCK_RESULT` / `MOCK_RESULT_FR` from `lib/mockResult.ts`. Switch to `false` when API credits are available.

## Architecture

**Framework**: Next.js 14 Pages Router (not App Router). Single page at `pages/index.tsx`. One API route at `pages/api/analyze.ts`.

**Data flow**:
1. User pastes transcript → `TranscriptInput` component
2. If demo mode: returns `getMockResult(lang)` from `lib/mockResult.ts` after a 2.8s delay
3. If real mode: POST to `/api/analyze` with `{ transcript, lang }` → Claude `claude-sonnet-4-6` → sanitized JSON → `AnalysisResult`

**Key lib files**:
- `lib/types.ts` — all TypeScript interfaces (`AnalysisResult`, `ActionItem`, `Decision`, etc.)
- `lib/prompt.ts` — `SYSTEM_PROMPT` and `buildUserMessage(transcript, lang)` for the Claude call
- `lib/sanitize.ts` — `sanitizeAnalysis(raw)` fills safe defaults if Claude returns partial/malformed JSON
- `lib/i18n.ts` — EN/FR translations as a plain object; `useT(lang)` returns the translation map
- `lib/LanguageContext.tsx` — React context providing `{ lang, setLang }` globally via `_app.tsx`
- `lib/mockResult.ts` — `MOCK_RESULT` (EN) and `MOCK_RESULT_FR` (FR); `getMockResult(lang)` picks the right one

**Component tree**:
```
_app.tsx (LanguageProvider)
└── pages/index.tsx          # holds result: AnalysisResult | null state
    ├── Header               # EN/FR toggle, reads useLang()
    ├── Hero                 # hidden once result is set
    ├── HowItWorks           # hidden once result is set
    ├── TranscriptInput      # always visible; calls onResult() or onReset()
    └── ResultsPanel         # visible only when result is set
        ├── SummaryCard      # md:col-span-3 (full width)
        ├── DecisionsCard
        ├── ActionItemsCard
        ├── UnresolvedCard
        ├── KeyPointsCard
        ├── RisksCard
        ├── ClarityScoreCard
        └── FollowUpCard     # md:col-span-3 (full width)
```

Every result card uses `CardShell` as a shared wrapper (handles title, icon, copy button layout). All cards call `useLang()` + `useT(lang)` directly — no prop drilling for translations.

**i18n pattern**: Adding a new translated string requires adding the key to both `en` and `fr` blocks in `lib/i18n.ts`, then accessing it via `const t = useT(lang)` in the component.

**API response shape**:
```ts
POST /api/analyze
Body: { transcript: string, lang: 'en' | 'fr' }
Response: { success: true, data: AnalysisResult } | { success: false, error: string }
```

**Design system**: CSS custom properties in `styles/globals.css` (`--bg`, `--surface`, `--border`, `--text`, `--muted`, `--accent`, `--green`, `--amber`, `--red`). Fonts: Bricolage Grotesque (headings) + DM Sans (body), loaded via Google Fonts `@import` in globals.css. Tailwind is configured to reference these vars in `tailwind.config.ts`.
