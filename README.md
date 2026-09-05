# XCELLENC

**The Pursuit of Becoming.**

XCELLENC is a platform built on the idea that excellence isn't perfection or
relentless achievement — it's the intentional pursuit of becoming better
through things that matter. It spans four areas of a person's life (Life,
Work, Practice, Connections), a community (the Circle), and a
member-written publication (the Journal).

Full product and technical spec lives in this repo's `docs/` folder — start
with `docs/ARCHITECTURE.md` and `docs/IMPLEMENTATION_PLAN.md` for where
things stand.

## Status

**Phase 0 — Foundation.** The Next.js application hasn't been scaffolded
yet (see "Local development" below for the current blocker). Nothing here
is live yet.

> `docs/design-reference/landing-page-sample.html` is an early, standalone
> design exploration built before this fuller specification existed. It's
> kept for reference only — the actual XCELLENC homepage will be built as
> part of the Next.js app per `docs/ARCHITECTURE.md`, following the brand
> direction in the spec ("The Pursuit of Becoming"), not this file.

## Local development

Not runnable yet. **Node.js is not currently installed on this machine**,
which blocks scaffolding the app at all. Once that's resolved and the
project is scaffolded, this section will list the exact commands to:

1. install dependencies
2. set environment variables
3. run the app locally
4. run tests
5. build for production

## Supabase / Vercel setup

Written once those phases land (Phase 2 for Supabase, Phase 9 for Vercel).
Every manual step you'll need to take outside this codebase will be spelled
out here exactly — nothing assumed.

## Documentation index

- `docs/ARCHITECTURE.md` — how the app is put together and why
- `docs/DATABASE.md` — tables, fields, and Row Level Security policies
- `docs/IMPLEMENTATION_PLAN.md` — phase-by-phase status
- `docs/DECISIONS.md` — technical decisions and the reasoning behind them
- `docs/DEPLOYMENT.md` — production setup (Phase 9)
