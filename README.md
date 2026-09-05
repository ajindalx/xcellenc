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

**Phase 0 — Foundation.** The Next.js application is scaffolded and
verified (build/lint/typecheck all pass), but there's no real product code
yet — Phase 1 builds the actual homepage and public pages.

> `docs/design-reference/landing-page-sample.html` is an early, standalone
> design exploration built before this fuller specification existed. It's
> kept for reference only — the actual XCELLENC homepage will be built as
> part of the Next.js app per `docs/ARCHITECTURE.md`, following the brand
> direction in the spec ("The Pursuit of Becoming"), not this file.

## Local development

Requires Node.js (installed via [nvm](https://github.com/nvm-sh/nvm) on
this machine — run `nvm use --lts` in a new terminal if `node`/`pnpm`
aren't found) and [pnpm](https://pnpm.io) (bundled with Node via Corepack).

```bash
pnpm install       # install dependencies
pnpm dev           # run the app at http://localhost:3000
pnpm lint          # check code style
pnpm typecheck     # check TypeScript types
pnpm build         # build for production
```

There are no environment variables to set yet — those arrive with Supabase
in Phase 2, and will be documented here with exact instructions when they
do.

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
