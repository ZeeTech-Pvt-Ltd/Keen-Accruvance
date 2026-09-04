/* Per-route SEO helper.
   Vite serves the same static index.html for every route, so each page used to
   share one homepage <title>/<meta>. applyRouteSeo() is called on every path
   change (see App.jsx) and rewrites the tags to match the real page:
     - unique title + meta description
     - canonical: homepage-section deep-links fold into "/" to avoid duplicate
       content; real pages canonicalise to themselves
     - robots: noindex for session/conversion pages (/thank-you) and unknown URLs
   FAQPage schema is injected on the homepage only, mirroring the visible FAQ. */

const SITE = 'https://keen-accruvance.com'

const ROUTE_SEO = {
  '/': {
    title: 'Keen Accruvance | AI-Powered Crypto Trading Platform & Signals',
    description:
      'AI-powered trading platform with real-time market intelligence, automated strategies and layered security. Explore Keen Accruvance with a free demo.',
  },
  '/about': {
    title: 'About Keen Accruvance | The Team Behind the AI Platform',
    description:
      'Keen Accruvance pairs AI-driven automation with real-time market intelligence and a security-first mindset — built to make trading calmer and clearer.',
  },
  '/how-it-works': {
    title: 'How Keen Accruvance Works — 3 Steps to Your First Strategy',
    description:
      'From sign-up to strategy in three simple steps. Create your free demo account, configure an AI strategy and manage every trade from one calm dashboard.',
  },
  '/why-invest': {
    title: 'Why Trade with Keen Accruvance? Six Reasons to Choose It',
    description:
      'Real-time intelligence, automation, transparency, multi-device access, security and a beginner-friendly design — the reasons traders choose Keen Accruvance.',
  },
  '/security': {
    title: 'Keen Accruvance Security — Encryption, 2FA & 24/7 Monitoring',
    description:
      'Layered protection for your account and data — encryption in transit and at rest, two-factor authentication and continuous monitoring.',
  },
  '/faq': {
    title: 'Keen Accruvance FAQ — AI Trading Questions, Answered',
    description:
      'What is Keen Accruvance? Do AI signals work? Is my account safe? Plain answers to the questions traders ask before they start.',
  },
  '/signup': {
    title: 'Create Your Free Demo Account | Keen Accruvance',
    description:
      'Open a free demo account in a few minutes — two-factor authentication on from day one, no card or funding needed to explore the platform.',
  },
  '/contact': {
    title: 'Contact Keen Accruvance — We Reply Within a Day',
    description:
      'Questions about the platform, your account or risk? Message the Keen Accruvance support team — we respond within a day.',
  },
  '/privacy': {
    title: 'Privacy Policy | Keen Accruvance',
    description:
      'How Keen Accruvance collects, uses and protects your personal information, in line with Australian privacy principles.',
  },
  '/terms': {
    title: 'Terms & Conditions | Keen Accruvance',
    description: 'The terms that govern your use of the Keen Accruvance website, platform and services.',
  },
  '/risk-disclosure': {
    title: 'Risk Disclosure | Keen Accruvance',
    description:
      'Understand the risks of trading digital assets before you start — volatility, leverage, automation limits and why past performance never guarantees results.',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Keen Accruvance',
    description: 'What cookies the Keen Accruvance website uses and how to control or delete them in your browser.',
  },
  '/disclaimer': {
    title: 'Disclaimer | Keen Accruvance',
    description:
      'Nothing on this site is financial advice. Read the Keen Accruvance disclaimer on demo data, past performance and your responsibility.',
  },
}

/* Homepage sections exposed as clean URLs. They render the full homepage DOM,
   so they are folded into "/" via canonical rather than treated as pages. */
const HOME_SECTIONS = new Set([
  'home',
  'signup',
  'how-it-works',
  'why-invest',
  'resources',
  'security',
  'testimonials',
  'features',
  'faq',
  'cta',
])

/* Session / post-conversion pages that must never be indexed. */
const NOINDEX = ['/thank-you']

/* FAQPage schema — answers mirror the six visible questions in Faq.jsx 1:1.
   Only injected on the homepage (path "/" or any homepage-section URL). */
const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Keen Accruvance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keen Accruvance is an AI-powered trading platform that combines automated strategies, real-time market intelligence and security-focused infrastructure in one interface. It is designed to help people follow the markets with more context — not to guarantee returns.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need prior trading experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The onboarding guides you through the essentials, and the dashboard is built to stay clear whether it is your first week or your fifth year. You can explore with AI-provided signals and demo views before committing to a strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do the AI signals work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our models process market data such as price action, volume and momentum to produce signal ratings with readable reasoning. Signals are informational tools to support your own decisions — they are not financial advice and never a promise of profit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is my account and data protected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We apply encryption in transit and at rest, require strong authentication with two-factor options, and continuously monitor accounts for unusual activity. Layered security controls protect access to your funds and personal data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pause or stop automated strategies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — you are always in control. Any automated strategy can be paused, adjusted or stopped from the dashboard at any time, and your configured risk limits are respected by the execution engine throughout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which markets and assets can I follow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The platform currently covers major digital assets such as Bitcoin, Ethereum and Solana, with a clear market overview that tracks price, momentum and AI signal ratings for each market.',
      },
    },
  ],
}

function upsertMeta(name, content) {
  let el = document.head.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.name = name
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertOg(property, content) {
  let el = document.head.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function syncFaqSchema(isHome) {
  /* Remove any previously injected FAQ block, then re-add on homepage only. */
  document.querySelectorAll('script[data-ka-faq]').forEach((el) => el.remove())
  if (!isHome) return
  const s = document.createElement('script')
  s.type = 'application/ld+json'
  s.setAttribute('data-ka-faq', '1')
  s.textContent = JSON.stringify(FAQ_LD)
  document.head.appendChild(s)
}

export function applyRouteSeo(path) {
  const key = ROUTE_SEO[path]
  const isHomeSection = !key && HOME_SECTIONS.has(path.replace(/^\//, ''))
  const cfg = key || (isHomeSection ? ROUTE_SEO['/'] : null)

  /* Unknown path → client-side "not found"; keep it out of the index. */
  if (!cfg) {
    upsertMeta('robots', 'noindex, follow')
    document.title = 'Page Not Found | Keen Accruvance'
    syncFaqSchema(false)
    return
  }

  document.title = cfg.title
  upsertMeta('description', cfg.description)
  upsertMeta('robots', NOINDEX.includes(path) ? 'noindex, follow' : 'index, follow')

  /* Homepage-section deep-links fold into "/"; real pages point to themselves. */
  const canonical = SITE + (isHomeSection ? '/' : path)
  upsertLink('canonical', canonical)
  upsertOg('og:url', canonical)

  syncFaqSchema(path === '/' || isHomeSection)
}
