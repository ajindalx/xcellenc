# Implementation Plan

Status tracker for the phases defined in the master build spec. Updated as
each phase completes.

| Phase | Scope | Status |
|---|---|---|
| 0 | Foundation: docs, architecture, scaffold, design tokens, base layout | **In progress** |
| 1 | Public marketing site (Home, Life, Work, Practice, Connections, About), nav, footer | Not started |
| 2 | Supabase: migrations, profiles, roles, journal tables, RLS, storage | Not started |
| 3 | Auth: sign up/in/out, email verification, password reset, protected routes | Not started |
| 4 | XCELLENC Circle: landing page, profiles, own-profile editing | Not started |
| 5 | Journal: landing, category pages, article pages, author profiles | Not started |
| 6 | Member authoring: dashboard, Tiptap editor, drafts, submission | Not started |
| 7 | Editorial admin: review queue, request changes, approve, publish | Not started |
| 8 | Quality pass: a11y, SEO, performance, security, authorization tests | Not started |
| 9 | Deployment: Vercel, production Supabase, env vars, domain, launch checklist | Not started |

## Phase 0 — this phase

Deliverables:
- [x] Inspect existing repository state
- [x] Architecture proposal (`docs/ARCHITECTURE.md`)
- [x] Database proposal (`docs/DATABASE.md`)
- [x] `CLAUDE.md`
- [x] This plan
- [x] `docs/DECISIONS.md`
- [ ] Next.js project scaffold — **blocked: Node.js is not installed on this
      machine.** See `docs/DECISIONS.md` for the fix.
- [ ] Design tokens + base layout — starts once the scaffold exists

## Open items before Phase 1 can start

1. Node.js installed (blocking the scaffold itself).
2. Confirm the decisions listed in `docs/DECISIONS.md` under "Needs your
   input" — none are blocking, but cheap to settle now.

## Accounts to create (no rush — noted by the phase that first needs them)

- **Supabase** — needed at Phase 2.
- **Vercel** — needed at Phase 9 (can be connected earlier for preview
  deploys if you'd like to see progress live sooner).
- **Resend** — needed at Phase 3 (transactional email).
- **Google Cloud Console** — only if/when Google sign-in is added; not
  required for v1 email/password auth.
- A domain registrar — only needed at launch (Phase 9).
