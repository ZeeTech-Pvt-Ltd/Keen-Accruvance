import { Sparkles, MessageCircle } from 'lucide-react'

const SECTIONS = [
  {
    title: 'What this disclosure covers',
    body: (
      <>
        <p>
          This page describes the risks associated with trading digital assets and related
          products through the Keen Accruvance platform, and with using its signals,
          analytics and automation tools. Please read it together with our{' '}
          <a href="/terms" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">
            Terms &amp; Conditions
          </a>{' '}
          and our{' '}
          <a href="/privacy" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">
            Privacy Policy
          </a>{' '}
          before you start. Nothing on this page removes or limits a risk — it exists to make
          sure you understand them clearly.
        </p>
      </>
    ),
  },
  {
    title: 'You can lose money',
    body: (
      <>
        <p>
          Trading carries a <strong className="font-semibold text-ink">high level of risk</strong> and
          may result in the loss of some or all of the capital you commit. Prices move quickly and
          can fall sharply in a very short period. You should only trade with money you can afford
          to lose entirely, and you should never rely on trading for essential income.
        </p>
      </>
    ),
  },
  {
    title: 'Markets are volatile',
    body: (
      <>
        <p>
          Digital-asset prices can be extremely volatile. A position that is profitable one moment
          can become a loss the next, and gapping between prices means orders may fill at a worse
          price than expected. Liquidity can also change rapidly, especially in newer or smaller
          markets, which affects how easily — and at what price — you can open or close a trade.
        </p>
      </>
    ),
  },
  {
    title: 'Leverage amplifies both gains and losses',
    body: (
      <>
        <p>
          Where margin or leverage is available, it multiplies your exposure. That means potential
          returns are magnified, but so are losses — which can exceed the amount you initially
          deposited. Losses on leveraged positions may trigger margin calls or the automatic
          closing of your positions.
        </p>
      </>
    ),
  },
  {
    title: 'AI signals and automation are not guarantees',
    body: (
      <>
        <p>
          Keen Accruvance offers AI-generated signals, analytics and automated strategies. These
          tools are provided <strong className="font-semibold text-ink">for informational and educational purposes only</strong>.
          They are based on historical data and statistical models, and no model can predict future
          prices. Automated execution can also behave differently in fast or illiquid markets, and
          technical failures — connectivity, software, hardware or third-party outages — can delay
          or prevent trades you intended to make.
        </p>
      </>
    ),
  },
  {
    title: 'Past performance is not a reliable indicator',
    body: (
      <>
        <p>
          Historical results, demo-account performance and any sample figures shown on this website
          do not guarantee, and are not a reliable indicator of, future results. A strategy that
          performed well in the past can perform poorly in the future, and actual live results will
          differ from simulated ones.
        </p>
      </>
    ),
  },
  {
    title: 'Demo accounts are not live trading',
    body: (
      <>
        <p>
          Demo accounts use simulated funds and market data for practice only. Because no real money
          is at stake and execution is simulated, demo results tend to look better than live results
          and should never be treated as a promise of what you would have earned in a real account.
        </p>
      </>
    ),
  },
  {
    title: 'Not financial advice',
    body: (
      <>
        <p>
          Keen Accruvance provides trading technology, tools and market access. It does
          <strong className="font-semibold text-ink"> not</strong> provide investment, legal or tax
          advice, and nothing on this website is an offer or solicitation to buy or sell any
          financial instrument. We are not a fiduciary, and nothing we publish is tailored to your
          personal circumstances, objectives or financial situation.
        </p>
      </>
    ),
  },
  {
    title: 'Check whether trading suits you',
    body: (
      <>
        <p>
          Trading digital assets may not be suitable for all investors. Before you start, consider
          your objectives, experience, tolerance for loss and overall financial position. We
          strongly encourage you to seek independent financial advice from a licensed professional
          who understands your personal circumstances before making any trading decision.
        </p>
      </>
    ),
  },
  {
    title: 'Tax, regulation and platform risks',
    body: (
      <>
        <p>
          The tax treatment of trading activity depends on your jurisdiction and your individual
          situation and can change over time. Regulatory environments for digital assets are still
          evolving and may affect the availability, legality or taxation of certain products where
          you live. As with any online service, the platform is also exposed to operational,
          cybersecurity and counterparty risks that could disrupt access or affect funds.
        </p>
      </>
    ),
  },
  {
    title: 'Your responsibility',
    body: (
      <>
        <p>
          You are solely responsible for your trading decisions and outcomes. It is your
          responsibility to understand how the platform, its tools and any strategy you use work
          before committing real funds. If you do not fully understand a product, a fee or a risk,
          do not trade it — ask us or an independent adviser first.
        </p>
      </>
    ),
  },
]

export default function RiskDisclosurePage() {
  return (
    <div className="wrap py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-forest">
          <Sparkles size={13} className="text-gold-deep" aria-hidden="true" />
          Legal
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
          Risk Disclosure
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted/70">
          Last updated: {new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <p className="text-pretty mt-8 border-l-2 border-gold-deep/50 pl-5 text-[1.02rem] leading-relaxed text-ink-muted">
          Trading digital assets carries significant risk and may not be suitable for all
          investors. Please take the time to understand the risks set out below before you
          open an account or place a trade.
        </p>

        <div className="mt-10 space-y-0">
          {SECTIONS.map((s, i) => (
            <section
              key={s.title}
              className={`grid gap-3 border-t border-ink/[0.08] py-8 sm:grid-cols-[5.5rem_1fr] sm:gap-6`}
            >
              <p className="font-mono text-sm font-semibold tracking-[0.1em] text-forest">
                {String(i + 1).padStart(2, '0')}
              </p>
              <div>
                <h2 className="text-xl font-semibold text-ink">{s.title}</h2>
                <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-ink-muted">
                  {s.body}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-6 rounded-2xl border border-ink/[0.06] bg-paper p-7 shadow-[0_1px_2px_rgba(16,24,23,0.04)] sm:p-8">
          <h2 className="flex items-center gap-2.5 text-lg font-semibold text-ink">
            <MessageCircle size={19} className="text-forest" aria-hidden="true" />
            Questions about risk?
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
            If any part of this disclosure is unclear, or you would like more detail about a
            product before using it, contact us at{' '}
            <a href="mailto:support@keen-accruvance.com" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">
              support@keen-accruvance.com
            </a>{' '}
            — we’re happy to explain, but we can’t tell you whether to trade.
          </p>
        </section>
      </div>
    </div>
  )
}
