# Trenox — Next.js (Pages Router)

The Trenox trading/crypto/finance template (https://trenox-html.vercel.app), rebuilt in Next.js
with the same design, markup and interactions on every page.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | Page |
| --- | --- |
| `/`, `/home-v2`, `/home-v3` | Home V1–V3 |
| `/about-v1`, `/about-v2`, `/about-v3` | About V1–V3 |
| `/features-v1`, `/features-v2`, `/features-v3` | Features V1–V3 |
| `/pricing`, `/product/[slug]` | Pricing and the Starter / Pro / Enterprises plans |
| `/checkout`, `/order-confirmation` | Demo store (cart kept in localStorage) |
| `/blog`, `/blog/[slug]` | Blog and its six posts |
| `/integration`, `/integration/[slug]` | Integrations directory and nine integrations |
| `/faq`, `/contact`, `/career`, `/changelog`, `/license`, `/style-guide` | Inner pages |
| `/login`, `/register`, `/coming-soon`, `/401`, `/404` | Auth and utility pages |

## Structure

```
pages/                one file per route; dynamic routes use getStaticPaths
components/
  layout/             Navbar (+ PagesDropdown, CartModal), Footer, FooterV3, SmoothScroll (Lenis)
  sections/           one component per page section; home sections at the top level,
                      other pages in a folder per page (about-v1/, pricing/, blog/, ...)
  ui/                 ShortTag, SectionHeading, SubHeading, Buttons, SiteLink, PageHead
context/CartContext   the demo cart and last order
data/                 page content as typed data (home.ts, pricing.ts, blog.ts, ...)
hooks/                useRevealOnScroll, useScrollScrubbers (run per route from _app),
                      useCollapse, useTabs, useSlider, useDropdown, useDemoForm
styles/trenox.css     the template stylesheet (asset URLs point at /images)
styles/fonts/         self-hosted Inter Tight and Great Vibes
public/images/        all template images
```

Content edits go in `data/`; layout and styling stay in the section components and
`styles/trenox.css`.

`NEXT_DIST_DIR` (see `next.config.ts`) lets a second build or dev server run next to
`npm run dev` without sharing `.next`, e.g. `NEXT_DIST_DIR=.next-build npx next build`.
