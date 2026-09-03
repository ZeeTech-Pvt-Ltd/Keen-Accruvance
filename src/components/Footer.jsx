import Logo from './Logo.jsx'
import { Mail, ShieldCheck, Globe } from 'lucide-react'

const COLUMNS = [
  {
    heading: 'Platform',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Why Invest', href: '/why-invest' },
      { label: 'Security', href: '/security' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Risk Disclosure', href: '/risk-disclosure' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-mint/70">
      {/* top accent hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-forest/60 to-transparent" />

      <div className="wrap grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
        {/* Brand */}
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-mint/60">
            Keen Accruvance pairs AI-driven automation with real-time market
            intelligence and security-focused infrastructure — built to make
            trading calmer, clearer and more confident.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="shrink-0 text-forest-soft" aria-hidden="true" />
              <a href="mailto:support@keen-accruvance.com" className="transition-colors hover:text-white">
                support@keen-accruvance.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe size={15} className="shrink-0 text-forest-soft" aria-hidden="true" />
              24/7 trading access, worldwide
            </li>
            <li className="flex items-center gap-2.5">
              <ShieldCheck size={15} className="shrink-0 text-forest-soft" aria-hidden="true" />
              Encryption and multi-layer account protection
            </li>
          </ul>
        </div>

        {/* Link columns */}
        {COLUMNS.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h3 className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white">
              {col.heading}
            </h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Risk disclosure */}
      <div className="border-t border-white/[0.07]">
        <div className="wrap py-8">
          <p className="text-[0.72rem] leading-relaxed text-mint/45">
            <strong className="font-semibold text-mint/65">Risk disclosure:</strong>{' '}
            Trading digital assets and related products carries a high level of risk and may not
            be suitable for all investors. Market prices are volatile and you may lose some or all
            of the capital you deposit. Keen Accruvance provides trading technology, tools and
            market access — it does not provide investment, legal or tax advice, and nothing on
            this website is an offer or solicitation to buy or sell any financial instrument.
            AI-generated signals and automated strategies are provided for informational purposes;
            past performance never guarantees future results. Please read our full{' '}
            <a href="/risk-disclosure" className="font-medium text-mint/70 underline decoration-forest/40 underline-offset-2 transition-colors hover:text-white hover:decoration-forest">
              Risk Disclosure
            </a>{' '}
            and consider seeking independent financial advice before trading.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 text-[0.78rem] text-mint/40 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Keen Accruvance. All rights reserved.</p>
            <p>Available worldwide · 98+ countries served</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
