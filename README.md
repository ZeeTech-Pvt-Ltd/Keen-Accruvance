# Keen Accruvance - Website

A fully original marketing website for the **Keen Accruvance** brand, an
AI-powered trading platform. Built with **Next.js (App Router) + React 19 +
Tailwind CSS v4** and **Lucide icons**. The UI is a complete redesign: premium
fintech look, original copy, and hand-built CSS/React product visuals.

## Stack

- Next.js 16 (App Router, statically prerendered routes)
- React 19
- Tailwind CSS v4 (CSS-first config in `src/index.css`, PostCSS plugin)
- lucide-react icons
- Google Fonts: **Fraunces** (display) + **Inter** (body) + **IBM Plex Mono** (labels)

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start dev server -> http://localhost:3000
npm run build   # production build
npm start       # run the production build
```

## Routes

| Route | Page |
|---|---|
| `/` | Home (single-page scroll) |
| `/about` | About Us |
| `/contact` | Contact Us |
| `/reviews` | Reviews with testimonial slider |
| `/how-it-works` | How It Works |
| `/features` | Features |
| `/faq` | FAQ |
| `/privacy`, `/terms`, `/risk-disclosure`, `/cookie-policy`, `/disclaimer` | Legal |
| `/signup` | Standalone demo sign-up (no nav/footer chrome) |
| `/thank-you` | Post-submit confirmation (`noindex, nofollow`, no canonical) |
| `/home`, `/why-invest`, `/security`, `/testimonials`, `/resources`, `/cta` | Permanent redirects to the matching homepage section |

Unmatched URLs render a real 404 page with a 404 status and `noindex`.

## Structure

```
app/
  layout.js              # root layout: fonts, global CSS, Organization + WebSite JSON-LD
  not-found.js           # 404 page (navbar + footer, noindex)
  signup/page.js         # chrome-free sign-up route
  (site)/
    layout.js            # Navbar + Footer + skip link + main padding
    page.js              # homepage section composition
    <route>/page.js      # one file per route (metadata + page component)

src/
  index.css              # design tokens (palette, type, shadows), keyframes, helpers
  metadata.js            # per-route metadata helper (title, description, canonical, OG)
  components/
    Navbar.jsx           # fixed nav + mobile menu
    Hero.jsx             # headline + CSS phone-dashboard visual (real coin logos)
    Stats.jsx            # animated metrics band
    About.jsx            # value proposition (id="about")
    Features.jsx         # 3 large capability cards (featured emerald card)
    DashboardShowcase.jsx  # desktop dashboard mockup (id="resources")
    WhyKeen.jsx          # "Built for smarter, more confident trading" (id="why-invest")
    HowItWorks.jsx       # 3-step process (id="how-it-works")
    Security.jsx         # dark-green security panel (id="security")
    Testimonials.jsx     # homepage review preview
    TestimonialSlider.jsx # scroll-snap review slider (/reviews)
    Faq.jsx              # accordion (id="faq")
    CTA.jsx              # final call to action (id="cta")
    Footer.jsx           # links + risk disclosure
    LeadForm.jsx         # shared lead form (homepage + /contact + /signup)
    Button.jsx           # reusable CTA (primary/light/outline/ghost)
    Logo.jsx             # wordmark with SVG mark
    SectionHeading.jsx   # eyebrow + title + lead
    Reveal.jsx           # scroll-in animation wrapper (a11y aware)
    charts.jsx           # SVG chart primitives + deterministic sample series
  data/                  # shared content: testimonials, steps, features, FAQs
public/                  # favicon, OG image, sitemap, robots, coin logos, avatars
```

Server Components are the default. Components that use hooks (`Navbar`,
`LeadForm`, `PhoneField`, `Faq`, `Reveal`, `Stats`, `TestimonialSlider`,
`ThankYouPage`, `charts.jsx`) are marked `'use client'`.

## Design tokens

Palette lives in `@theme` inside `src/index.css`:

| Token        | Value     | Role                    |
| ------------ | --------- | ----------------------- |
| `--color-forest` | `#087A5B` | Primary emerald     |
| `--color-pine`   | `#075640` | Dark green          |
| `--color-cream`  | `#FAF9F6` | Warm off-white page |
| `--color-ink`    | `#101817` | Charcoal typography |
| `--color-mint`   | `#E8F4EF` | Soft green surface  |
| `--color-peach`  | `#FFF0E8` | Soft peach surface  |
| `--color-coral`  | `#E56B52` | Accent              |
| `--color-gold`   | `#EFB85C` | Accent              |

## Content notes

- All copy is original and written for the brand.
- Dashboard figures and signals are sample UI data. The footer carries a full
  financial risk disclosure.
- Testimonial portraits in `public/avatars/` are placeholder stock portraits and
  should be replaced with real customer photos before launch.

## Customizing

- **Colors / fonts / motion:** edit the `@theme` block in `src/index.css`.
- **Copy:** each section is a self-contained component in `src/components/`.
- **Nav links:** update the `LINKS` array in `Navbar.jsx`.
- **SEO:** page title, description and canonical live in each route's
  `metadata` export; build them with the helper in `src/metadata.js`.
