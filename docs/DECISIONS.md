# Decisions

Lightweight decision log. Per the project's own rule: default sensibly and
document rather than asking about things that don't materially matter; ask
only where cost, design, functionality, privacy, UX, data ownership, or
business model are actually affected.

## Decided (no input needed)

**Package manager: pnpm.** Faster installs, less disk usage than npm/yarn,
no material difference to you day-to-day.

**Modular monolith, one Next.js app.** Matches the spec directly; also the
only sane choice at this scale/budget (Section 36 of the spec rules out
microservices/Kubernetes/Redis/queues anyway).

**Article content stored as Tiptap JSON, not HTML.** Avoids
`dangerouslySetInnerHTML` on user-authored content entirely — a whole class
of XSS risk removed structurally instead of managed by sanitization. Full
reasoning in `docs/ARCHITECTURE.md`.

**Roles in a separate `user_roles` table, not a column on `profiles`, with
no self-service write policy.** Makes "a member grants themselves admin"
impossible at the schema level rather than relying on every code path
remembering to check. Full reasoning in `docs/DATABASE.md`.

**Circle profile data and future Connections data as structurally separate
tables from day one.** Directly required by the spec's privacy principle
(Section 34) — a public-profile query has no table to accidentally
over-select from.

**Testing: Vitest for unit tests, Playwright for auth/authorization
end-to-end flows.** Both are free, standard for this stack, and Playwright
is the right tool specifically for testing "can member A edit member B's
draft" style authorization tests end-to-end.

**Email: Resend, behind a small `lib/email` abstraction.** Not wired up
until Phase 3 actually needs to send a verification email — no point
creating the account or writing the integration before there's a feature
that uses it.

**Visual design: sage-paper / charcoal-ink / brass-gold, Instrument Serif +
Work Sans.** The spec asks for premium, editorial, calm, and explicitly
*not* hustle-culture, corporate-consulting, or generic self-help — which
rules out the common SaaS look (blue/purple gradients, Inter, rounded
cards everywhere) as well as the equally common "wellness app" look (warm
cream, terracotta, big rounded pills). The palette instead pairs a
sage-tinted neutral paper with deep charcoal ink and a single restrained
brass/gold accent — warm and human without being twee. Layout leans on
generous whitespace and hairline rules rather than boxed cards, and the
four dimensions are presented as an editorial index (a stacked list with
labels and links) rather than four identical icon cards, per the spec's
explicit instruction not to default to that pattern.

## Needs your input (not blocking, cheap to answer whenever)

1. **Supabase project region.** Pick whichever is closest to where most of
   your early members/readers will actually be (e.g. US East, EU West). If
   you don't know yet, US East is a reasonable default and easy to change
   before you have real data in it — hard to change after.
2. **Domain name.** Do you already own one for XCELLENC, or is that still
   to be registered? Not needed until Phase 9, but worth knowing early in
   case DNS or trademark checks turn up an issue.

Neither of these blocks any work between now and Phase 9.

## Resolved

**Node.js was not installed on this machine.** Fixed by installing `nvm`
(Node Version Manager) and Node LTS (v24.20.0) through it — no admin
password needed, and future Node upgrades are a one-line `nvm install`
rather than a system-level reinstall. `pnpm` is managed through Corepack,
which ships with Node itself.
