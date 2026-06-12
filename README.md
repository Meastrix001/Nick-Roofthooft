# Nick Roofthooft — Portfolio

Personal portfolio of **Nick Roofthooft**, freelance Full Stack Developer based in Estonia.

Bilingual (English / Dutch) single-page-style portfolio showcasing experience, skills and selected freelance & side projects.

## Tech stack

- **[Next.js](https://nextjs.org/)** (App Router) + **React 19** + **TypeScript**
- **[Radix UI Themes](https://www.radix-ui.com/themes)** for components
- **SCSS** for custom styling
- **[Framer Motion](https://www.framer.com/motion/)** for scroll-reveal animations
- **[Zustand](https://github.com/pmndrs/zustand)** for the language store
- **[next-sitemap](https://github.com/iamvishnusankar/next-sitemap)** for sitemap + robots generation
- **Vercel Analytics & Speed Insights**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — `/` redirects to the default language (`/en`).

## Scripts

| Script           | Description                                       |
| ---------------- | ------------------------------------------------- |
| `npm run dev`    | Start the dev server (Turbopack)                  |
| `npm run build`  | Production build                                   |
| `npm run start`  | Serve the production build                         |
| `npm run lint`   | Run ESLint                                         |
| `postbuild`      | Runs automatically after build to generate the sitemap |

## Configuration

The production URL is read from `NEXT_PUBLIC_SITE_URL` (used for canonical URLs, Open Graph tags and the sitemap). Set it in `.env.local` and in your Vercel project settings:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If unset, it falls back to `https://nick-roofthooft.vercel.app`. It is centralised in [`src/theme/brand.config.ts`](src/theme/brand.config.ts) and [`next-sitemap.config.js`](next-sitemap.config.js).

## Project structure

```
src/
  app/                # Next.js App Router (en/ and nl/ routes + layout)
  components/         # Shared UI (language switcher, back button)
  constants/          # Static data (contact, tech icons, theme, WorkItem type)
  hooks/              # InViewWrapper (scroll-reveal)
  pageComponents/     # Page-level building blocks (landing, work, about, contact)
  store/              # Zustand language store
  styles/             # Global SCSS (base, fonts, reset, animations)
  theme/              # Brand + site URL config
  utils/
    i18n/             # English / Dutch translation objects + work cases
    metadata/         # buildMetadata() helper (per-page SEO)
```

## Internationalisation

Translations are plain typed objects in [`src/utils/i18n`](src/utils/i18n) (no i18n library). Each language has a content file (`English.tsx`, `Nederlands.ts`) and a work-cases file. Pages live under `/en` and `/nl`; the `LanguageSwitcher` swaps the path prefix and persists the choice.
