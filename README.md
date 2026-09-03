# Keen Accruvance — Website

A fully original, modern marketing website for the **Keen Accruvance** brand — an
AI-powered trading platform. Built with **React + Vite + Tailwind CSS v4** and
**Lucide icons**. The UI/UX is a complete redesign: premium fintech look,
original copy, and hand-built CSS/React product visuals (no stock imagery, no
cloned assets).

## Stack

- React 19 + Vite 8
- Tailwind CSS v4 (CSS-first config in `src/index.css`)
- lucide-react icons
- Google Fonts: **Sora** (display) + **Inter** (body)

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start dev server → http://localhost:5173
npm run build   # production build → dist/
npm run preview # preview the production build
```

## Structure

```
src/
  index.css            # design tokens (palette, type, shadows), keyframes, helpers
  App.jsx              # page composition
  components/
    Navbar.jsx         # fixed nav + mobile menu
    Hero.jsx           # headline + CSS phone-dashboard visual
    Stats.jsx          # animated metrics band
    About.jsx          # value proposition (id="about")
    Features.jsx       # 3 large capability cards (featured emerald card)
    DashboardShowcase.jsx  # desktop dashboard mockup (id="resources")
    WhyKeen.jsx        # "Built for smarter, more confident trading" (id="why-invest")
    HowItWorks.jsx     # 3-step process (id="how-it-works")
    Security.jsx       # dark-green security panel (id="security")
    Testimonials.jsx   # compliant testimonial cards
    Faq.jsx            # accordion (id="faq")
    CTA.jsx            # final call to action (id="cta")
    Footer.jsx         # links + risk disclosure
    Button.jsx         # reusable CTA (primary/light/outline/ghost)
    Logo.jsx           # wordmark with SVG mark
    SectionHeading.jsx # eyebrow + title + lead
    Reveal.jsx         # scroll-in animation wrapper (a11y aware)
    charts.jsx         # SVG chart primitives + deterministic sample series
```

## Design tokens

Palette lives in `@theme` inside `src/index.css`:

| Token        | Value     | Role                          |
| ------------ | --------- | ----------------------------- |
| `--color-forest` | `#087A5B` | Primary emerald               |
| `--color-pine`   | `#075640` | Dark green (gradients)        |
| `--color-cream`  | `#FAF9F6` | Warm off-white page bg        |
| `--color-ink`    | `#101817` | Charcoal typography           |
| `--color-mint`   | `#E8F4EF` | Soft green surface            |
| `--color-peach`  | `#FFF0E8` | Soft peach surface            |
| `--color-coral`  | `#E56B52` | Accent                        |
| `--color-gold`   | `#EFB85C` | Accent                        |

Target palette balance: ~60% cream/off-white, ~20% emerald/mint, ~10% charcoal,
~5% peach/coral, ~5% gold.

## Content notes

- All copy is original and written for the brand (paraphrased/rewritten, not
  copied from any existing site).
- Dashboard figures, signals and "sample" labels are **illustrative UI data** —
  the copy never promises or guarantees profits, and a full financial risk
  disclosure sits in the footer.

## Customizing

- **Colors / fonts / motion:** edit the `@theme` block in `src/index.css`.
- **Copy:** each section is a self-contained component in `src/components/`.
- **Nav links:** update the `LINKS` array in `Navbar.jsx` (they anchor to section `id`s).
- **Real domain:** deploy `dist/` to your host for `keen-accruvance.com`.
