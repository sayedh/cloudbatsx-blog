# cloudbatsX

The engineering blog of [cloudbats](https://cloudbats.com) — cloud, networks, and practical AI,
written down. Sibling site to cloudbats.com (shared navy + teal brand, Sora + DM Sans).

Live at **[cloudbatsx.com](https://cloudbatsx.com)**.

## Stack

- **Next.js** (App Router) + **React** + **TypeScript**
- **Tailwind CSS** for styling; light default with an opt-in dark mode
- Markdown posts via `gray-matter` + `remark`
- Deployed on **Vercel**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Add a post

Posts are plain Markdown files in `_posts/`. To add one, copy `_posts/_TEMPLATE.md` and fill it in.
Full instructions and the front-matter schema are in **[AUTHORING.md](./AUTHORING.md)**.

## Brand

Part of the cloudbats brand system (navy `#0f172a`, teal `#06b6d4`, light accent `#0e7490`, Sora +
DM Sans, the Cave Mark). Human-first: posts lead with the outcome for a person, with the stack as
evidence — never the headline.
