'use client'

import { useEffect, useState } from 'react'
import {
  Wallet,
  TrendingUp,
  Bot,
  Activity,
  Lock,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { Spark, SparkMini, Bars, seriesTrendUp, sparkBtc, sparkEth, sparkSol, barsPnl } from './charts.jsx'

const MONO = {
  BTC: { letter: 'B', chip: 'bg-[#fdeecb] text-[#97680a]' },
  ETH: { letter: 'E', chip: 'bg-[#eae6ff] text-[#5a4abe]' },
  SOL: { letter: 'S', chip: 'bg-[#dceff5] text-[#0b7077]' },
  DOT: { letter: 'D', chip: 'bg-mint text-pine' },
}

/* Base values mirror the trader view in the hero. The tick below drifts them
   slightly so the dashboard reads as a live feed. All of it is demo data and
   labelled as such in the UI. */
const MARKETS = [
  { t: 'BTC', name: 'Bitcoin', price: 67842, decimals: 0, change: 2.42, spark: sparkBtc, signal: 'Buy · 92', signalTone: 'forest', phase: 0 },
  { t: 'ETH', name: 'Ethereum', price: 3412.6, decimals: 2, change: 1.18, spark: sparkEth, signal: 'Hold · 76', signalTone: 'gold', phase: 1.4 },
  { t: 'SOL', name: 'Solana', price: 168.24, decimals: 2, change: -0.84, spark: sparkSol, signal: 'Watch · 61', signalTone: 'coral', phase: 2.8 },
  { t: 'DOT', name: 'Polkadot', price: 7.18, decimals: 2, change: 0.32, spark: sparkBtc, signal: 'Buy · 68', signalTone: 'forest', phase: 4.1 },
]

const SIGNALS = [
  {
    icon: TrendingUp,
    tone: 'text-forest bg-forest/10',
    title: 'Breakout detected',
    market: 'ETH/USD',
    note: 'Uptrend confirmed above range',
    confidence: 92,
    time: 'just now',
  },
  {
    icon: Activity,
    tone: 'text-gold-deep bg-gold/15',
    title: 'Range-bound conditions',
    market: 'BTC/USD',
    note: 'Sideways momentum, strategy holding position',
    confidence: 76,
    time: '2 min ago',
  },
]

/* Re-render on a short interval so the readouts move like a live feed. */
function useLiveTick(interval = 4000) {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), interval)
    return () => clearInterval(id)
  }, [interval])
  return tick
}

/* A sine wave that starts at zero, so the first paint matches the base data. */
function wave(tick, phase) {
  return Math.sin(tick * 0.7 + phase) - Math.sin(phase)
}

function drift(base, phase, tick, amp) {
  return base * (1 + wave(tick, phase) * amp)
}

function money(value, decimals = 2) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

function MarketRow({ row, tick }) {
  const m = MONO[row.t]
  const price = drift(row.price, row.phase, tick, 0.0018)
  const change = row.change + wave(tick, row.phase) * 0.05
  const up = change >= 0

  return (
    <div className="grid grid-cols-[1.1fr_1fr_auto] items-center gap-3 px-4 py-2.5 sm:grid-cols-[1.6fr_1fr_0.8fr_0.7fr_auto] sm:px-5">
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
        <span className="tnum font-sans text-[0.9rem] font-semibold text-ink">
          ${money(price, row.decimals)}
        </span>
      </div>

      <span className="hidden md:block">
        <SparkMini data={row.spark} w={90} h={24} stroke={up ? '#0e8f6c' : '#e56b52'} className="w-20" />
      </span>

      <div className="flex items-center gap-1.5">
        <span className={`tnum text-[0.82rem] font-semibold ${up ? 'text-forest' : 'text-coral'}`}>
          {up ? '+' : ''}
          {change.toFixed(2)}%
        </span>
        {up ? (
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
  const tick = useLiveTick()
  const portfolio = drift(128430, 0.4, tick, 0.0012)
  const weekChange = 3214 + wave(tick, 1.2) * 38

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
      <div className="bg-[#fbfaf6] p-3 sm:p-4 lg:p-5">
        <div className="grid gap-3 lg:grid-cols-[1.65fr_1fr]">
          {/* portfolio */}
          <div className="flex flex-col rounded-2xl border border-ink/[0.05] bg-paper p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="flex items-center gap-2 text-[0.78rem] font-medium text-ink-muted">
                  <Wallet size={15} className="text-forest" aria-hidden="true" />
                  Portfolio balance
                  <span className="rounded-full bg-cream-deep px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide text-ink-muted">
                    Sample
                  </span>
                </p>
                <p className="tnum mt-1.5 font-sans text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  ${money(portfolio, 2)}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 rounded-xl bg-mint/70 px-3.5 py-2.5">
                <span className="tnum text-[0.8rem] font-bold text-forest">+${money(weekChange, 0)}</span>
                <span className="text-[0.68rem] font-medium text-pine/80">change this week</span>
              </div>
            </div>

            <div className="relative mt-4 min-h-[140px] flex-1">
              <Spark data={seriesTrendUp} w={760} h={220} stroke="#0e8f6c" dot grid fit />
              <span className="absolute left-4 top-3 inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-paper/90 px-2.5 py-1 text-[0.7rem] font-semibold text-forest shadow-sm backdrop-blur">
                <Bot size={12} aria-hidden="true" /> AI trend · upward bias
              </span>
              <span className="absolute right-4 top-3 hidden rounded-full bg-cream-deep px-2.5 py-1 text-[0.7rem] font-medium text-ink-muted sm:block">
                1D · <span className="font-semibold text-ink">1W</span> · 1M · 1Y
              </span>
            </div>
          </div>

          {/* AI signals */}
          <div className="flex flex-col rounded-2xl border border-ink/[0.05] bg-paper p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-[0.95rem] font-semibold text-ink">AI Trading Signals</h3>
              <span className="flex items-center gap-1.5 text-[0.7rem] font-medium text-forest">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-forest" /> live
              </span>
            </div>
            <p className="text-[0.76rem] text-ink-muted">Auto-refreshing market readouts</p>

            <ul className="mt-4 flex flex-1 flex-col gap-2.5">
              {SIGNALS.map((s, i) => {
                const confidence = Math.round(s.confidence + wave(tick, i * 1.3) * 2)
                return (
                  <li
                    key={s.title}
                    className="group flex items-start gap-3 rounded-2xl border border-ink/[0.04] bg-cream/60 p-3 transition-all duration-200 hover:border-forest/15 hover:bg-mint/40"
                  >
                    <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${s.tone}`}>
                      <s.icon size={16} strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-sans text-[0.84rem] font-semibold text-ink">{s.title}</span>
                        <span className="shrink-0 text-[0.66rem] text-ink-muted/80">{s.time}</span>
                      </span>
                      <span className="block text-[0.7rem] font-semibold uppercase tracking-wide text-forest/90">
                        {s.market}
                      </span>
                      <span className="mt-1 flex items-center justify-between gap-2">
                        <span className="block text-[0.76rem] leading-snug text-ink-muted">{s.note}</span>
                        <span className="tnum shrink-0 rounded-full bg-forest/10 px-2 py-0.5 text-[0.62rem] font-semibold text-forest">
                          {confidence}%
                        </span>
                      </span>
                    </span>
                  </li>
                )
              })}
            </ul>

          </div>
        </div>

        {/* lower grid: market overview + P&L */}
        <div className="mt-3 grid gap-3 lg:grid-cols-[1.65fr_1fr]">
          <div className="rounded-2xl border border-ink/[0.05] bg-paper">
            <div className="flex items-center justify-between px-5 pb-2 pt-5 sm:px-6">
              <div>
                <h3 className="font-sans text-[0.95rem] font-semibold text-ink">Market Overview</h3>
                <p className="text-[0.76rem] text-ink-muted">Live prices with AI signal rating</p>
              </div>
            </div>
            <div className="mt-2 divide-y divide-ink/[0.04]">
              {MARKETS.map((r) => (
                <MarketRow key={r.t} row={r} tick={tick} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-ink/[0.05] bg-paper p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-[0.95rem] font-semibold text-ink">Profit &amp; Loss</h3>
              <span className="text-[0.68rem] font-medium text-ink-muted/80">trailing 12 months</span>
            </div>
            <div className="tnum mt-3 flex items-baseline gap-2">
              <span className="font-sans text-2xl font-bold text-forest">+14.6%</span>
            </div>
            <div className="mt-4 text-ink/40">
              <Bars data={barsPnl} w={420} h={150} />
            </div>
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
          title="One Calm Dashboard For Every Market Moment"
          lead="Portfolio, live prices, charts and AI signals in a single, beautifully organised view - engineered to feel effortless, even at 3am during a volatile session."
        />

        <Reveal delay={120} className="mt-14">
          <BrowserWindow />
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-5">
            <Button href="/signup" size="lg" arrow>
              Open your free demo account
            </Button>
            <Button href="/how-it-works" size="lg" variant="outline">
              See how it works
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
