# Trenox — Next.js (Pages Router)

The Trenox trading/crypto/finance home page, rebuilt in Next.js from the
original HTML template with the same design, markup and interactions.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Structure

```
pages/
  _app.tsx            global stylesheet + Inter Tight / Great Vibes via next/font/local
  _document.tsx       <html>, favicon, the `js` class that enables scroll reveals
  index.tsx           home page: composes the sections below
components/
  layout/             Navbar, PagesDropdown, CartModal, Footer, NewsletterForm
  sections/           one component per page section, in page order:
                      Hero, SuccessRate, BrandLogo, WhyChooseUs, Features,
                      Languages, Testimonials, Pricing, Compare, Faq, Cta
  ui/                 ShortTag, SectionHeading, SubHeading, Buttons
data/
  home.ts             section content (stats, services, languages, testimonials,
                      plans, comparison table, FAQs)
  navigation.ts       navbar, mega-menu and footer links
hooks/
  useRevealOnScroll   adds `.is-in` as elements enter the viewport
  useCart             the template's localStorage demo cart
lib/utils.ts          img() path helper, cx() class joiner
styles/
  trenox.css          the template stylesheet (asset URLs point at /images)
  fonts/              self-hosted woff2 files
public/images/        all template images
```

Content edits go in `data/`; layout and styling stay in the section
components and `styles/trenox.css`.

Only the home page exists, so links to the template's other pages are `#`
placeholders; About / Features / Pricing / FAQ scroll to their sections.
