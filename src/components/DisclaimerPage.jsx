const SECTIONS = [
  {
    n: '01',
    title: 'Information only',
    body: [
      'All content on this website is provided for general information and educational purposes only. It is not tailored to your personal objectives, financial situation or needs, and you should not act on it as if it were advice given to you personally.',
    ],
  },
  {
    n: '02',
    title: 'Not financial advice',
    body: [
      'Keen Accruvance provides trading technology, tools and market access. It does not provide investment, legal or tax advice, and it is not a financial adviser, broker-dealer or fiduciary. Nothing we publish is an offer, solicitation or recommendation to buy, sell or hold any financial instrument.',
    ],
  },
  {
    n: '03',
    title: 'No guarantee of returns',
    body: [
      'No tool, signal or strategy can guarantee profits or protect against losses. Any figures, back-tests, illustrations or percentage returns shown on this site are examples for explanation only — they are not promises or predictions of what you will earn.',
    ],
  },
  {
    n: '04',
    title: 'Demo accounts and sample data',
    body: [
      'Demo and practice accounts use simulated funds and market data. Because no real money is at stake and execution is simulated, they are for learning only — results in a live account will differ, often significantly.',
    ],
  },
  {
    n: '05',
    title: 'Past performance',
    body: [
      'Past performance, whether real or simulated, is not a reliable indicator of future results. Markets move quickly, and a strategy that has worked before may not work again.',
    ],
  },
  {
    n: '06',
    title: 'Third-party content and links',
    body: [
      'The site may refer to or link to third-party content, news or tools for your convenience. We do not control those sources and are not responsible for their accuracy, and linking to them does not mean we endorse them.',
    ],
  },
  {
    n: '07',
    title: 'Accuracy and availability',
    body: [
      'We work to keep information on this site accurate and current, but we cannot guarantee it is error-free, complete or up to date at all times. Platform features, fees and availability may also change without notice.',
    ],
  },
  {
    n: '08',
    title: 'Your responsibility',
    body: [
      'You are solely responsible for your own trading decisions. To the maximum extent permitted by law, Keen Accruvance disclaims all liability for any loss or damage arising from your use of this website or your reliance on its content. If you are unsure whether a product or strategy suits you, read our full Risk Disclosure and seek independent professional advice before trading.',
    ],
  },
]

export default function DisclaimerPage() {
  return (
    <div className="wrap py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-forest">Legal</p>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">Disclaimer</h1>
        <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">
          Last updated · {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-pretty mt-6 text-base leading-relaxed text-ink-muted">
          Keen Accruvance provides AI-assisted trading technology, market tools and educational
          content. Nothing on this website — including any page, tool, signal or automated strategy
          — is financial, investment, legal or tax advice. Please read this Disclaimer together
          with our{' '}
          <a href="/terms" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">
            Terms &amp; Conditions
          </a>
          ,{' '}
          <a href="/privacy" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/risk-disclosure" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">
            Risk Disclosure
          </a>
          .
        </p>

        <div className="mt-12">
          {SECTIONS.map((s) => (
            <section key={s.n} className="grid gap-3 border-t border-ink/[0.07] py-8 sm:grid-cols-[4.5rem_1fr]">
              <span className="font-mono text-[0.78rem] font-medium text-gold-deep">{s.n}</span>
              <div>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">{s.title}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-forest/15 bg-mint/50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-pine">Trade with knowledge, not guesswork</h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
            If any part of this Disclaimer is unclear, or you would like to understand a risk in
            more detail, please read our full{' '}
            <a href="/risk-disclosure" className="font-semibold text-forest underline decoration-forest/30 underline-offset-2">
              Risk Disclosure
            </a>{' '}
            or contact us at{' '}
            <a href="mailto:support@keen-accruvance.com" className="font-semibold text-forest underline decoration-forest/30 underline-offset-2">
              support@keen-accruvance.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
