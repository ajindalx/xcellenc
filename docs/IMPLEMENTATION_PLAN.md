# Implementation Plan

Status tracker for the phases defined in the master build spec. Updated as
each phase completes.

| Phase | Scope | Status |
|---|---|---|
| 0 | Foundation: docs, architecture, scaffold, design tokens, base layout | **In progress** |
| 1 | Public marketing site (Home, Life, Work, Practice, Connections, About), nav, footer | **Done** |
| 2 | Supabase: migrations, profiles, roles, journal tables, RLS, storage | Not started |
| 3 | Auth: sign up/in/out, email verification, password reset, protected routes | Not started |
| 4 | XCELLENC Circle: landing page, profiles, own-profile editing | Not started |
| 5 | Journal: landing, category pages, article pages, author profiles | Not started |
| 6 | Member authoring: dashboard, Tiptap editor, drafts, submission | Not started |
| 7 | Editorial admin: review queue, request changes, approve, publish | Not started |
| 8 | Quality pass: a11y, SEO, performance, security, authorization tests | Not started |
| 9 | Deployment: Vercel, production Supabase, env vars, domain, launch checklist | Not started |

## Phase 0 — done

- [x] Inspect existing repository state
- [x] Architecture proposal (`docs/ARCHITECTURE.md`)
- [x] Database proposal (`docs/DATABASE.md`)
- [x] `CLAUDE.md`
- [x] This plan
- [x] `docs/DECISIONS.md`
- [x] Next.js project scaffold (Next.js 16, React 19, TypeScript,
      Tailwind CSS 4, pnpm) — Node.js installed via nvm, build/lint/typecheck
      all verified passing

## Phase 1 — done

- [x] Design system: warm sage-paper / charcoal-ink / brass-gold palette,
      Instrument Serif (display) + Work Sans (body/UI), hairline-rule
      editorial layout — see `docs/DECISIONS.md`
- [x] Responsive nav (desktop + mobile menu) and footer
- [x] Homepage: hero, "What is XCELLENC," four-dimension index, philosophy,
      temporary Journal preview, Circle intro, closing CTA
- [x] Life, Work, Practice, Connections pages (shared `DimensionPage`
      template, original per-page copy)
- [x] About page
- [x] Holding pages so no nav link or CTA is dead ahead of their real
      phase: Circle (Phase 4), Journal + `/journal/[category]` (Phase 5),
      Join (Phase 3 — deliberately no dummy sign-up form)
- [x] Contact, Privacy placeholder, Terms placeholder
- [x] robots.ts, sitemap.ts, custom 404
- [x] build, lint, typecheck all pass; verified in-browser at desktop and
      mobile widths

## Open items before Phase 2 can start

None blocking. Optionally confirm the two items in `docs/DECISIONS.md`
under "Needs your input" (Supabase region, domain name) whenever
convenient — Phase 2 (Supabase foundation) is when the region choice
actually gets used.

## Accounts to create (no rush — noted by the phase that first needs them)

- **Supabase** — needed at Phase 2.
- **Vercel** — needed at Phase 9 (can be connected earlier for preview
  deploys if you'd like to see progress live sooner).
- **Resend** — needed at Phase 3 (transactional email).
- **Google Cloud Console** — only if/when Google sign-in is added; not
  required for v1 email/password auth.
- A domain registrar — only needed at launch (Phase 9).
