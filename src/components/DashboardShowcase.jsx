import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Bot,
  Activity,
  Lock,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { Spark, SparkMini, Bars, seriesTrendUp, sparkBtc, sparkEth, sparkSol, barsPnl } from './charts.jsx'

const MONO = {
  BTC: { letter: 'B', chip: 'bg-[#fdeecb] text-[#97680a]' },
  ETH: { letter: 'E', chip: 'bg-[#eae6ff] text-[#5a4abe]' },
  SOL: { letter: 'S', chip: 'bg-[#dceff5] text-[#0b7077]' },
  DOT: { letter: 'D', chip: 'bg-mint text-pine' },
}

const MARKETS = [
  { t: 'BTC', name: 'Bitcoin', price: '$67,842', pchange: '+2.42%', spark: sparkBtc, up: true, signal: 'Buy · 92', signalTone: 'forest' },
  { t: 'ETH', name: 'Ethereum', price: '$3,412.60', pchange: '+1.18%', spark: sparkEth, up: true, signal: 'Hold · 76', signalTone: 'gold' },
  { t: 'SOL', name: 'Solana', price: '$168.24', pchange: '-0.84%', spark: sparkSol, up: false, signal: 'Watch · 61', signalTone: 'coral' },
  { t: 'DOT', name: 'Polkadot', price: '$7.18', pchange: '+0.32%', spark: sparkBtc, up: true, signal: 'Buy · 68', signalTone: 'forest' },
]

const SIGNALS = [
  {
    icon: TrendingUp,
    tone: 'text-forest bg-forest/10',
    title: 'Breakout detected',
    market: 'ETH/USD',
    note: 'Uptrend confirmed above range — confidence 92%',
    time: 'just now',
  },
  {
    icon: Activity,
    tone: 'text-gold-deep bg-gold/15',
    title: 'Range-bound conditions',
    market: 'BTC/USD',
    note: 'Sideways momentum — strategy holding position',
    time: '2 min ago',
  },
  {
    icon: TrendingDown,
    tone: 'text-coral bg-coral/10',
    title: 'Momentum easing',
    market: 'SOL/USD',
    note: 'Volume declining — take-profit risk level raised',
    time: '8 min ago',
  },
]

function MarketRow({ row }) {
  const m = MONO[row.t]
  return (
    <div className="grid grid-cols-[1.1fr_1fr_auto] items-center gap-3 px-4 py-3 sm:grid-cols-[1.6fr_1fr_0.8fr_0.7fr_auto] sm:px-5">
      <div className="flex items-center gap-3">
        <span className={`grid size-8 shrink-0 place-items-center rounded-full text-[0.7rem] font-bold ${m.chip}`}>
          {m.letter}
        </span>
        <span className="leading-tight">
          <span className="block font-sans text-[0.88rem] font-semibold text-ink">{row.t}</span>
          <span className="hidden text-[0.7rem] text-ink-muted sm:block">{row.name}</span>
        </span>
      </div>

      <div className="hidden sm:block">
        <span className="tnum font-sans text-[0.9rem] font-semibold text-ink">{row.price}</span>
      </div>

      <span className="hidden md:block">
        <SparkMini data={row.spark} w={90} h={24} stroke={row.up ? '#0e8f6c' : '#e56b52'} className="w-20" />
      </span>

      <div className="flex items-center gap-1.5">
        <span className={`tnum text-[0.82rem] font-semibold ${row.up ? 'text-forest' : 'text-coral'}`}>
          {row.pchange}
        </span>
        {row.up ? (
          <ArrowUpRight size={14} className="text-forest" aria-hidden="true" />
        ) : (
          <ArrowDownRight size={14} className="text-coral" aria-hidden="true" />
        )}
      </div>

      <span
        className={`justify-self-end rounded-full px-2.5 py-1 text-[0.68rem] font-semibold ${
          row.signalTone === 'forest'
            ? 'bg-forest/10 text-forest'
            : row.signalTone === 'gold'
              ? 'bg-gold/15 text-gold-deep'
              : 'bg-coral/10 text-coral-hover'
        }`}
      >
        {row.signal}
      </span>
    </div>
  )
}

function BrowserWindow() {
  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-ink/[0.07] bg-paper shadow-[0_50px_120px_-50px_rgba(5,60,47,0.4)] ring-1 ring-white/40">
      {/* chrome */}
      <div className="flex items-center gap-4 border-b border-ink/[0.06] bg-cream-deep/60 px-5 py-3.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-coral/70" />
          <span className="size-3 rounded-full bg-gold/80" />
          <span className="size-3 rounded-full bg-forest" />
        </span>
        <span className="mx-auto flex min-w-0 items-center gap-2 rounded-full bg-paper px-4 py-1.5 text-[0.78rem] font-medium text-ink-muted ring-1 ring-ink/[0.06]">
          <Lock size={12} className="shrink-0 text-forest" aria-hidden="true" />
          <span className="truncate">app.keen-accruvance.com</span>
        </span>
        <span className="hidden items-center gap-1.5 rounded-full bg-forest/8 px-3 py-1.5 text-[0.72rem] font-semibold text-forest sm:flex">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-forest" />
          Live demo
        </span>
      </div>

      {/* app body */}
      <div className="bg-[#fbfaf6] p-4 sm:p-6 lg:p-7">
        <div className="grid gap-5 lg:grid-cols-[1.65fr_1fr]">
          {/* portfolio */}
          <div className="rounded-2xl border border-ink/[0.05] bg-paper p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="flex items-center gap-2 text-[0.78rem] font-medium text-ink-muted">
                  <Wallet size={15} className="text-forest" aria-hidden="true" />
                  Portfolio balance
                  <span className="rounded-full bg-cream-deep px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide text-ink-muted">
                    Sample
                  </span>
                </p>
                <p className="tnum mt-1.5 font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  $128,430.00
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 rounded-xl bg-mint/70 px-3.5 py-2.5">
                <span className="tnum text-[0.8rem] font-bold text-forest">+$3,214</span>
                <span className="text-[0.68rem] font-medium text-pine/80">change this week</span>
              </div>
            </div>

            <div className="relative mt-5">
              <Spark data={seriesTrendUp} w={760} h={220} stroke="#0e8f6c" dot grid className="w-full" />
              <span className="absolute left-4 top-3 inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-paper/90 px-2.5 py-1 text-[0.7rem] font-semibold text-forest shadow-sm backdrop-blur">
                <Bot size={12} aria-hidden="true" /> AI trend · upward bias
              </span>
              <span className="absolute right-4 top-3 hidden rounded-full bg-cream-deep px-2.5 py-1 text-[0.7rem] font-medium text-ink-muted sm:block">
                1D · <span className="font-semibold text-ink">1W</span> · 1M · 1Y
              </span>
            </div>
          </div>

          {/* AI signals */}
          <div className="flex flex-col rounded-2xl border border-ink/[0.05] bg-paper p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-[0.95rem] font-semibold text-ink">AI trading signals</h3>
              <span className="flex items-center gap-1.5 text-[0.7rem] font-medium text-forest">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-forest" /> live
              </span>
            </div>
            <p className="text-[0.76rem] text-ink-muted">Auto-refreshing market readouts</p>

            <ul className="mt-4 flex flex-1 flex-col gap-3">
              {SIGNALS.map((s) => (
                <li
                  key={s.title}
                  className="group flex items-start gap-3 rounded-2xl border border-ink/[0.04] bg-cream/60 p-3.5 transition-all duration-200 hover:border-forest/15 hover:bg-mint/40"
                >
                  <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${s.tone}`}>
                    <s.icon size={16} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center justify-between gap-2">
                      <span className="font-sans text-[0.84rem] font-semibold text-ink">{s.title}</span>
                      <span className="shrink-0 text-[0.66rem] text-ink-muted/80">{s.time}</span>
                    </span>
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-wide text-forest/90">
                      {s.market}
                    </span>
                    <span className="mt-1 block text-[0.76rem] leading-snug text-ink-muted">{s.note}</span>
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-forest to-pine px-3.5 py-3 text-[0.74rem] font-medium text-mint/90">
              <Bot size={14} className="shrink-0 text-white" aria-hidden="true" />
              Auto-trader active on ETH strategy · risk limits set
            </p>
          </div>
        </div>

        {/* lower grid: market overview + P&L */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1.65fr_1fr]">
          <div className="rounded-2xl border border-ink/[0.05] bg-paper">
            <div className="flex items-center justify-between px-5 pb-2 pt-5 sm:px-6">
              <div>
                <h3 className="font-sans text-[0.95rem] font-semibold text-ink">Market overview</h3>
                <p className="text-[0.76rem] text-ink-muted">Live prices with AI signal rating</p>
              </div>
              <span className="hidden rounded-full bg-forest/8 px-3 py-1.5 text-[0.7rem] font-semibold text-forest sm:block">
                See all markets →
              </span>
            </div>
            <div className="mt-2 divide-y divide-ink/[0.04]">
              {MARKETS.map((r) => (
                <MarketRow key={r.t} row={r} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-ink/[0.05] bg-paper p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-[0.95rem] font-semibold text-ink">Profit &amp; loss</h3>
              <span className="text-[0.68rem] font-medium text-ink-muted/80">trailing 12 months</span>
            </div>
            <div className="tnum mt-3 flex items-baseline gap-2">
              <span className="font-sans text-2xl font-bold text-forest">+14.6%</span>
              <span className="text-[0.72rem] text-ink-muted">illustrative sample</span>
            </div>
            <div className="mt-4 text-ink/40">
              <Bars data={barsPnl} w={420} h={150} />
            </div>
            <p className="mt-2 text-[0.66rem] leading-relaxed text-ink-muted/80">
              Demo figures shown for interface purposes only. Trading results vary and are never
              guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardShowcase() {
  return (
    <section id="resources" className="relative mt-28 scroll-mt-24 lg:mt-36">
      {/* décor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(232,244,239,0.85),transparent)] blur-2xl" />
        <div className="absolute right-[-8rem] bottom-10 size-80 rounded-full bg-[radial-gradient(closest-side,rgba(255,240,232,0.8),transparent)] blur-2xl" />
      </div>

      <div className="wrap">
        <SectionHeading
          eyebrow="Platform tour"
          title="One calm dashboard for every market moment"
          lead="Portfolio, live prices, charts and AI signals in a single, beautifully organised view — engineered to feel effortless, even at 3am during a volatile session."
        />

        <Reveal delay={120} className="mt-14">
          <BrowserWindow />
        </Reveal>
      </div>
    </section>
  )
}
