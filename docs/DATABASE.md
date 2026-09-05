# Database

Supabase Postgres. All schema changes go through `supabase/migrations/`
(created in Phase 2) — no manual changes made through the dashboard that
aren't captured in a migration file.

## Tables (v1)

### `profiles`
One row per Supabase Auth user (`id` = `auth.users.id`, FK, PK).

`id, display_name, first_name, last_name, username, avatar_url, bio,
location, professional_role, organization, what_im_working_on,
what_im_learning, how_i_can_help, help_im_seeking, profile_visibility,
created_at, updated_at`

`profile_visibility` (e.g. `public` / `circle_only`) controls what a
non-member visitor can see of a Circle profile. This table holds only
public-facing Circle information — never anything from the future private
Connections feature.

### `user_roles`
`user_id (FK -> auth.users), role`

`role ∈ {member, contributor, editor, admin}`. Deliberately a separate table
from `profiles`, with no RLS policy that lets a user insert/update their own
row. The only way a role changes is through an admin-invoked,
`SECURITY DEFINER` Postgres function that itself checks the caller is an
admin. This makes privilege escalation a schema-level impossibility, not a
"we remembered to check" convention.

### `interests` / `profile_interests`
`interests(id, name, slug)` — a small controlled vocabulary.
`profile_interests(profile_id, interest_id)` — join table.

### `posts`
`id, author_id, title, slug, excerpt, content (jsonb — Tiptap document),
cover_image_url, category, status, submitted_at, published_at, editor_id,
created_at, updated_at`

`category ∈ {life, work, practice, connections}`.
`status ∈ {draft, submitted, changes_requested, approved, published,
archived}` — matches the editorial workflow in `CLAUDE.md`.

Content is JSONB (see `docs/ARCHITECTURE.md` for why), not HTML.

### `post_revisions` (structure only in v1)
`id, post_id, editor_id, content_snapshot, created_at` — reserved so we can
add revision history without a later schema rework. Not populated by any
v1 feature.

### `editorial_feedback`
`id, post_id, editor_id, message, created_at` — backs the
"changes requested" step: an editor leaves a message, the author sees it
against their draft.

## Row Level Security — intended policies

RLS is enabled on every table above from the migration that creates it.
Policies to implement in Phase 2 (exact SQL lands with the migrations):

**`profiles`**
- Anyone can `select` a row where `profile_visibility = 'public'`.
- A user can `select`/`update` only their own row (`auth.uid() = id`).
- No `delete` policy for regular users in v1.

**`posts`**
- Anyone (including anonymous) can `select` where `status = 'published'`.
- A member can `select`/`update`/`delete` their own rows where
  `status IN ('draft', 'changes_requested')`.
- A member can `insert` rows for themselves only (`author_id = auth.uid()`),
  always starting at `status = 'draft'`.
- A member can move their own post from `draft`/`changes_requested` to
  `submitted` — and to no other status. They cannot set `published` or
  `approved` themselves, ever.
- `editor`/`admin` can `select` any row regardless of status, and can
  transition `submitted → changes_requested → draft` or
  `submitted → approved → published`.

**`user_roles`**
- A user can `select` their own role.
- No `insert`/`update`/`delete` policy for regular users at all. Only the
  admin-only `SECURITY DEFINER` function (or the service role, used
  exclusively server-side) touches this table.

**`editorial_feedback` / `post_revisions`**
- Readable by the post's author and by editors/admins. Writable only by
  editors/admins (and, for revisions, the system itself on save).

## Storage buckets (Phase 2)

- `avatars` — profile images.
- `journal-covers` — article cover images.
- `journal-images` — inline article images.

Upload policies restrict writes to the authenticated owner (avatars) or the
post's author while the post is a draft (journal images), with server-side
validation of file type and size before the upload is accepted — never
trust the client's `Content-Type`.
