# Architecture

## Shape: modular monolith

One Next.js application. Domains (Life, Work, Practice, Connections, Journal,
Circle, Auth) are separated by folder and responsibility, not by service
boundary. They share one database, one deploy, one auth system. This is
deliberate — see `docs/DECISIONS.md` — and keeps the whole thing operable by
one person on free/low-cost tiers.

## One member identity

Every domain hangs off a single `profiles` row per Supabase Auth user. There
is no per-domain login, no per-domain user table. This is what lets
Life/Work/Practice/Connections/Journal/Circle eventually feel like one
coherent product instead of four bolted-together apps:

```
                   XCELLENC MEMBER
                         |
        ---------------------------------
        |          |          |          |
       LIFE       WORK     PRACTICE  CONNECTIONS
        |          |          |          |
        ---------------------------------
                         |
                      JOURNAL
                         |
                       CIRCLE
                         |
                  FUTURE XCELLENC AI
```

## Route structure

```
src/app/
  (public)/          marketing site: home, life, work, practice,
                      connections, circle, journal, about, join, contact
  (auth)/             login, signup, forgot-password, reset-password
  (member)/my/        protected: dashboard, profile, articles, settings
  (admin)/admin/      protected: article review queue, member/role admin
```

Route groups map directly to the auth boundary: `(public)` needs no session,
`(member)` needs any authenticated member, `(admin)` needs `editor` or
`admin` role. That check happens server-side in layout/middleware AND is
backed by RLS — the route guard is a UX convenience, not the security
boundary.

## Data access pattern

- Reads: Server Components query Supabase directly with the user's session
  (RLS enforces what they can see — no separate authorization layer to keep
  in sync).
- Writes: Server Actions, each validating input with Zod before touching the
  database. RLS is the second, independent check — a bug in a Server Action
  should not be enough to violate an authorization rule.
- Client Components are used only where a page needs local interactivity
  (the Tiptap editor, form state, optimistic UI) — never as the place where
  authorization decisions get made.

## Content: Tiptap JSON, not HTML

`posts.content` stores the Tiptap JSON document, not rendered HTML.

Why: rendering arbitrary user-supplied HTML via `dangerouslySetInnerHTML` is
a standing XSS risk that has to be re-audited every time the editor changes.
Storing structured JSON and rendering it through a fixed, allow-listed React
renderer (one component per Tiptap node type we actually support) means
there is no HTML string from a member that ever reaches the DOM unescaped.
It also keeps the content queryable/portable for the future Journal search
and AI features (Section 35 of the spec) without a migration.

## Privacy boundary: Circle vs. Connections

Circle (public-ish community profile) and the future private Connections
feature (personal relationship data) are modeled as structurally separate
tables from day one, even though Connections isn't built in v1. A public
profile query must be physically incapable of joining into relationship data
— there's no shared table to over-select from by mistake. Same principle
applies to future Practice/health data: private by default, no public read
policy unless a member explicitly opts in.

## What's deliberately deferred

Per the v1 scope: My Life / My Work / My Practice / My Connections personal
tracking, XCELLENC AI (coach, semantic search, summaries), and Community
features beyond Circle profiles (DMs, groups, events, notifications,
followers). The schema and route structure above are chosen so these can be
added as new modules and tables later without reshaping what v1 ships. If
semantic search or embeddings are needed later, `pgvector` on the existing
Supabase Postgres is the intended path — no separate search infrastructure.

## Explicitly not doing

Microservices, Kubernetes, Redis, message queues, a separate search server,
or heavy observability infrastructure. None of that is justified at this
scale, and introducing it now would make the project harder for one person
to operate, not easier.
