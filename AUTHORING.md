# Adding a post to cloudbatsX

No CMS, no dashboard. A post is **one Markdown file** in `_posts/`. This is designed so an AI
assistant (or a person) can add posts maintainably from Markdown that's handed over.

## The 3 steps

1. **Create a file** `_posts/<slug>.md` — the filename (minus `.md`) becomes the URL:
   `/posts/<slug>`. Use a short, hyphenated, human-readable slug (e.g.
   `give-claude-readonly-terraform-state.md`).
2. **Add front matter + body** — copy `_posts/_TEMPLATE.md` and fill it in (schema below).
3. **Add any images** to `public/images/` and reference them with a leading slash
   (`/images/...`). Commit and push — Vercel builds and publishes automatically.

That's it. Posts are sorted newest-first by `date`. Files starting with `_` (like the template)
are ignored, so they never appear on the site.

## Front-matter schema

```yaml
title: "..."        # required — lead with the outcome, not the tool
excerpt: "..."      # required — one sentence: who it's for + what they'll be able to do
coverImage: "/images/..."   # required — used on cards and at the top of the post
date: "2026-06-18T00:00:00.000Z"  # required — ISO 8601; controls ordering
author:
  name: "Sayed Haque"
  picture: "/assets/blog/authors/sayed.jpg"
ogImage:            # OPTIONAL — omit and the coverImage is used for social shares
  url: "/images/..."
```

## House rules (keep cloudbatsX human-first)

- **Outcome-lead gate:** the title and first paragraph must lead with a *person or a result*, not a
  tool. "Give Claude read-only access to your Terraform state" ✅, not "Using MCP with Terraform" ❌.
- **Honesty-first:** only claim what's shipped/public; link real repos. Use "building / exploring"
  honestly for in-progress work.
- **No PII:** no addresses, employer-confidential details, immigration/background info. Tell the
  story by technology and outcome.
- **Expand acronyms** on first use; keep it calm and plain-English.

## Where things live

| Thing | Location |
|---|---|
| Posts | `_posts/*.md` |
| Post template | `_posts/_TEMPLATE.md` (ignored by the build) |
| Images | `public/images/` → referenced as `/images/...` |
| Author avatars | `public/assets/blog/authors/` |
| Reading the posts | `src/lib/api.ts` (filesystem + gray-matter) |
| Post page | `src/app/posts/[slug]/page.tsx` |
