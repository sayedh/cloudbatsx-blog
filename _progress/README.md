# cloudbatsX redesign — before / after (2026-06-18)

Visual record of the redesign that turned the forked Vercel blog-starter into the official
cloudbatsX, sibling of cloudbats.com. (Documented the same way as the cloudbats.com redesign:
before/after screenshots here + a written record alongside the proposal.)

| File | What it shows |
|---|---|
| `cloudbatsx-BEFORE-2026-06-18-home.png` | **Before** — the forked blog-starter wearing a custom "terminal" dark theme: Inter font, gradient wordmark, a "status: online" typing hero, glassmorphism cards with `$ date` meta, an "echo Thanks for visiting" / "View Source" footer, and a "source code … available on GitHub" banner. |
| `cloudbatsx-AFTER-2026-06-18-home.png` | **After** — the cloudbats brand: Sora + DM Sans, navy + teal, the Cave Mark, a calm human-first hero, a "what you'll find here" focus-area grid, latest posts, one CTA. Light default. |
| `cloudbatsx-AFTER-2026-06-18-blog.png` | **After** — the new `/blog` archive: filter by **topic** and **year**, results grouped by year, every tag clickable. |

## What changed & why (summary)

- **Brand:** re-skinned to the cloudbats system (Sora/DM Sans, navy `#0f172a` / teal `#06b6d4` /
  light accent `#0e7490`, Cave Mark) so cloudbatsX reads as the sibling of cloudbats.com.
- **De-starter:** removed the terminal hero, gradient flourishes, fake stats, the "View Source" /
  starter banner, and the bio "trust strip" — the blog is about the *writing*, not a pitch.
- **Human-first, not a tech flex:** every surface leads with the person and the outcome; the stack is
  quiet evidence. Verified by a dedicated human-first review pass.
- **Navigation:** added a nav bar, a single light/dark toggle (light default), and a real `/blog`
  archive with topic + year filtering and clickable tags (no more endless scroll).
- **Fixes:** canonical host → cloudbatsx.com, favicon manifest, copy-pasted excerpts, broken post
  images, legacy WordPress links.
- **Authoring + content:** filesystem Markdown posts made easy (`AUTHORING.md`, `_posts/_TEMPLATE.md`,
  `CONTENT-PLAN.md` backlog); 4 honest placeholder posts seeded.

**Full record:** `…/Desktop/cloudbats/cloudbatsX/cloudbatsX — Redesign Record (2026-06-18).md`
**Design spec:** `…/Desktop/cloudbats/cloudbatsX/cloudbatsX — Redesign Proposal (2026-06-18).md`
