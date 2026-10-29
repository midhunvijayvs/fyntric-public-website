# Fyntric Tech — Public Website

Marketing website for **Fyntric Tech IT Solutions**, built with Next.js (App Router, static export), Tailwind CSS, Framer Motion and Lenis smooth scrolling. It is deployed to GitHub Pages by a GitHub Actions workflow.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
npm run lint
```

## Project structure

```
src/
├── app/                      # Routes (one folder per page) + SEO files
│   ├── layout.tsx            # Root layout: fonts, header/footer, default metadata, Organization schema
│   ├── page.tsx              # Home
│   ├── services/page.tsx     # Services overview
│   ├── services/[slug]/      # One page per service, generated from content/services.ts
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts, robots.ts # sitemap.xml / robots.txt
│   └── icon.png, opengraph-image.png
├── assets/brand/             # Logo variants
├── components/
│   ├── layout/               # Header, Footer, Logo, scroll progress, WhatsApp button
│   ├── sections/             # Page sections, grouped by page (home, services, contact, shared)
│   ├── ui/                   # Reusable building blocks (Button, Container, Reveal, cards…)
│   ├── seo/                  # JSON-LD helper
│   └── providers/            # Smooth scrolling
├── config/site.ts            # Company details, WhatsApp number, navigation  ← edit here
├── content/                  # All page copy and SEO titles/descriptions     ← edit here
└── lib/                      # Helpers (metadata builder, WhatsApp link builder, cn)
```

### Common edits

| Change                               | File                                  |
| ------------------------------------ | ------------------------------------- |
| WhatsApp number, email, address      | `src/config/site.ts` → `contactConfig` |
| Navigation links / header CTA        | `src/config/site.ts`                  |
| Home page copy, solutions, industries | `src/content/home.ts`                 |
| Services (adds a page automatically) | `src/content/services.ts`             |
| About / Contact copy                 | `src/content/about.ts`, `src/content/contact.ts` |
| Colours, fonts, animations           | `src/app/globals.css` (`@theme`)      |
| Light / dark theme colours           | `src/app/globals.css` (`:root` and `[data-theme="dark"]`) |
| Default theme                        | `src/lib/theme.ts` → `DEFAULT_THEME`  |

## Themes

The site loads in the light theme. The sun/moon button in the header switches to dark mode, and the choice is remembered in the browser. Components use semantic colour classes (`bg-background`, `bg-surface`, `text-foreground`, `text-muted`, `border-line`, `text-accent`…) whose values change per theme, so the same markup works in both. Use `dark:` for the rare one-off override.

## Contact form

There is no backend. Submitting the form formats the enquiry and opens WhatsApp (`wa.me`) with the message pre-filled for the admin number in `contactConfig.whatsappNumber`; the visitor taps send.

## Deployment

Every push to the default branch (`RemoteMain`) runs `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages at **https://fyntrictech.co.in**.

The domain lives in `public/CNAME` and `siteConfig.url` (`src/config/site.ts`); change both if it moves. In the repo, Settings → Pages must have Source set to **GitHub Actions** and Custom domain set to `fyntrictech.co.in`.

DNS (at the domain registrar): four `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` for `www` → `midhunvijayvs.github.io`.
