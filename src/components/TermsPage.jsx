const SECTIONS = [
  {
    n: '01',
    title: 'Acceptance of these terms',
    body: [
      'These Terms & Conditions (“Terms”) govern your access to and use of the Keen Accruvance website and trading technology platform. By using the platform, creating an account or continuing to browse this website, you agree to be bound by these Terms and our Privacy Policy.',
      'If you do not agree with any part of these Terms, please do not use the platform.',
    ],
  },
  {
    n: '02',
    title: 'What we provide',
    body: [
      'Keen Accruvance provides AI-assisted trading technology — including market signals, analytics, automated strategies and a connected dashboard. We provide technology and market access tools; we are not a bank, broker, exchange or financial adviser.',
      'Nothing on this website constitutes an offer, solicitation or recommendation to buy or sell any financial instrument.',
    ],
  },
  {
    n: '03',
    title: 'Accounts and eligibility',
    body: [
      'You must be at least 18 years old and able to enter into legally binding agreements to open an account.',
      'You agree to provide accurate, current and complete information, including your legal name, email address and phone number, and to keep that information up to date.',
      'All account features are first available in a free demo mode. Live funding is only possible where available in your jurisdiction and subject to our verification and identity checks.',
    ],
  },
  {
    n: '04',
    title: 'Demo accounts',
    body: [
      'Demo mode uses sample or simulated market data and balances. Figures shown are illustrative and do not represent real profits, deposits or performance.',
      'Any balance, signal or performance figure you see in a demo account is a sample for demonstration purposes only.',
    ],
  },
  {
    n: '05',
    title: 'No financial advice and trading risk',
    body: [
      'Trading digital assets and related products carries a high level of risk and may not be suitable for all investors. Prices are volatile and you may lose some or all of the capital you deposit.',
      'AI-generated signals and automated strategies are provided for informational purposes only. Past performance never guarantees future results.',
      'You are solely responsible for your trading decisions. We strongly encourage you to seek independent financial, legal and tax advice before trading.',
    ],
  },
  {
    n: '06',
    title: 'Your responsibilities',
    body: [
      'You are responsible for keeping your login credentials secure and for all activity that occurs under your account.',
      'You agree to use the platform in good faith and in compliance with all applicable laws in Australia and your country of residence.',
      'You must not use the platform for unlawful purposes, money laundering, fraud or market manipulation.',
    ],
  },
  {
    n: '07',
    title: 'Acceptable use',
    body: [
      'You agree not to interfere with, disrupt or attempt to gain unauthorised access to the platform, its systems or other users’ accounts.',
      'You must not scrape, copy or resell content, data or intellectual property from the platform without our prior written consent.',
    ],
  },
  {
    n: '08',
    title: 'Fees and payments',
    body: [
      'Opening a demo account is free. Where live trading services and fees are offered, the applicable fees will be presented clearly to you before you confirm any payment.',
      'You are responsible for any taxes that apply to your use of the platform in your jurisdiction.',
    ],
  },
  {
    n: '09',
    title: 'Intellectual property',
    body: [
      'The Keen Accruvance name, logo, website content, software, designs and any original content remain our property or the property of our licensors.',
      'Nothing in these Terms grants you a right to use our trademarks or content other than for your personal, non-commercial use of the platform.',
    ],
  },
  {
    n: '10',
    title: 'Disclaimers and limitation of liability',
    body: [
      'The platform is provided on an “as is” and “as available” basis. We do not warrant that the platform will be uninterrupted, error-free or free of harmful components.',
      'To the maximum extent permitted by law, we will not be liable for any indirect, incidental or consequential loss, including trading losses, arising from your use of the platform.',
      'Nothing in these Terms limits or excludes liability that cannot be limited or excluded under applicable law.',
    ],
  },
  {
    n: '11',
    title: 'Termination',
    body: [
      'You may close your account at any time by contacting us.',
      'We may suspend or terminate access where we reasonably believe these Terms have been breached, or where required by law or for the security of the platform.',
    ],
  },
  {
    n: '12',
    title: 'Changes and governing law',
    body: [
      'We may update these Terms from time to time. Material changes will be reflected by the date below and, where appropriate, notified by email or through the platform.',
      'These Terms are governed by the laws of Australia. Disputes will be subject to the exclusive jurisdiction of the Australian courts where permitted by law.',
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="wrap py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-forest">Legal</p>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">
          Last updated · {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-pretty mt-6 text-base leading-relaxed text-ink-muted">
          These Terms describe the rules for using the Keen Accruvance website and platform.
          Please read them alongside our{' '}
          <a href="/privacy" className="font-semibold text-forest underline decoration-forest/30 underline-offset-2">
            Privacy Policy
          </a>
          . Nothing here is financial advice, and trading digital assets carries risk.
        </p>

        <div className="mt-12">
          {SECTIONS.map((s) => (
            <section key={s.n} className="grid gap-3 border-t border-ink/[0.07] py-8 sm:grid-cols-[4.5rem_1fr]">
              <span className="font-mono text-[0.78rem] font-medium text-gold-deep">{s.n}</span>
              <div>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-forest/15 bg-mint/50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-pine">Questions about these terms?</h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
            Email{' '}
            <a href="mailto:support@keen-accruvance.com" className="font-semibold text-forest underline decoration-forest/30 underline-offset-2">
              support@keen-accruvance.com
            </a>{' '}
            and we’ll be happy to help.
          </p>
        </div>
      </div>
    </div>
  )
}
