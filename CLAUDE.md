@AGENTS.md

# CLAUDE.md — Project Rules for XCELLENC

Persistent rules for working on this codebase. Keep this file short — product
detail lives in `docs/`, not here.

## What this is

XCELLENC — "The Pursuit of Becoming." A modular-monolith Next.js application
with four content domains (Life, Work, Practice, Connections), a community
layer (Circle), and a member-authored blog (Journal). See
`docs/ARCHITECTURE.md` for the full picture, `docs/IMPLEMENTATION_PLAN.md`
for phase status.

## Stack (do not introduce alternatives without updating this file)

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn/ui + lucide-react
- Supabase: Postgres, Auth, Storage
- Tiptap for the article editor
- Resend for transactional email (wired only when Phase 3 needs it)
- Vercel for hosting
- pnpm as the package manager
- Zod for all boundary validation

One Next.js app. No microservices, no separate services per domain.

## Commands

Filled in once the project is scaffolded (blocked on Node.js — see
`docs/DECISIONS.md`). Will include: `pnpm dev`, `pnpm build`, `pnpm lint`,
`pnpm typecheck`, `pnpm test`.

## Non-negotiable security rules

- Enable Postgres RLS on every table that is queried from the app. No
  exceptions, no "add it later."
- Roles live in `user_roles`, never on `profiles`. No client-writable RLS
  policy ever allows a user to change their own row in `user_roles`.
- Never put the Supabase service-role key in client code or a `NEXT_PUBLIC_*`
  variable. Server-only.
- Article content is stored as Tiptap JSON, not raw HTML. Rendering goes
  through a controlled renderer — never `dangerouslySetInnerHTML` on
  user-authored content.
- Authorization is enforced in RLS policies and server actions, never only by
  hiding UI. Assume every client request is hostile.
- Validate at the UI boundary AND the server boundary. Never trust the
  client's validation alone.
- No secrets committed. `.env.local` is gitignored; `.env.example` lists
  variable names with no real values.

## Coding conventions

- Server Components by default. `"use client"` only where interactivity
  genuinely requires it.
- No `any` to dodge a type error — fix the type or ask if the fix isn't
  obvious.
- Don't create a folder for architectural symmetry if it has nothing in it
  yet. `src/modules/<domain>` gets created when that domain gets real logic.
- Route groups: `(public)`, `(auth)`, `(member)` under `/my`, `(admin)` under
  `/admin`.

## Editorial workflow (posts.status)

`draft → submitted → editor review → approved → published`, with
`submitted → changes_requested → draft` as the rejection loop. Also:
`archived`. Enforced by DB constraint + RLS, not just app logic.

## Roles

`visitor` (unauthenticated) < `member` < `contributor` (reserved, unused in
v1) < `editor` < `admin`. Full capability matrix in `docs/DATABASE.md`.

## Before finishing a phase

Run: build, lint, typecheck, relevant tests. Fix failures — don't leave
known-broken code for later. Report what was built, how to see it, what to
check, and what's next.
