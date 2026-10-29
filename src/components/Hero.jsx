import { Sparkles, Bot, ArrowUpRight, Activity, Lock, Globe2, Clock3 } from 'lucide-react'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { Spark, SparkMini, seriesTrendMild, sparkBtc, sparkEth, sparkSol } from './charts.jsx'

/* --- real coin logos (decorative tickers) --------------------------- */
const COINS = {
  BTC: { icon: '/coins/btc.svg' },
  ETH: { icon: '/coins/eth.svg' },
  SOL: { icon: '/coins/sol.svg' },
}

function CoinRow({ ticker, name, data, change }) {
  const c = COINS[ticker]
  const up = change >= 0
  return (
    <div className="flex items-center gap-2.5 rounded-xl px-1.5 py-1.5">
      <img src={c.icon} alt="" width={24} height={24} className="size-6 shrink-0" />
      <span className="w-16 leading-none">
        <span className="block font-sans text-[0.72rem] font-semibold text-ink">{ticker}</span>
        <span className="block text-[0.58rem] text-ink-muted">{name}</span>
      </span>
      <SparkMini data={data} w={70} h={20} stroke={up ? '#0e8f6c' : '#e56b52'} className="w-16" />
      <span
        className={`tnum ml-auto text-right text-[0.68rem] font-semibold ${up ? 'text-forest' : 'text-coral'}`}
      >
        {up ? '+' : ''}
        {change}%
      </span>
    </div>
  )
}

/* --- floating phone dashboard mock -------------------------------- */
function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[290px] sm:max-w-[330px]">
      {/* glow behind device */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(14,143,108,0.35),transparent)] blur-2xl"
      />

      {/* device shell */}
      <div className="relative rounded-[2.9rem] border border-white/10 bg-gradient-to-b from-[#123129] via-[#0a211b] to-ink p-[9px] shadow-phone">
        {/* side buttons */}
        <span aria-hidden="true" className="absolute -left-[2px] top-24 h-10 w-[3px] rounded-full bg-white/15" />
        <span aria-hidden="true" className="absolute -right-[2px] top-16 h-16 w-[3px] rounded-full bg-white/10" />
        {/* screen */}
        <div className="overflow-hidden rounded-[2.35rem] bg-[#fdfcf8]">
          {/* status bar */}
          <div className="relative flex items-center justify-between px-6 pt-4">
            <span className="text-[0.6rem] font-semibold text-ink/50">9:41</span>
            <span aria-hidden="true" className="absolute left-1/2 top-2.5 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-ink" />
            <span aria-hidden="true" className="flex items-end gap-[2.5px]">
              <span className="h-1 w-[3px] rounded-sm bg-ink/50" />
              <span className="h-1.5 w-[3px] rounded-sm bg-ink/50" />
              <span className="h-2 w-[3px] rounded-sm bg-ink/50" />
              <span className="h-2.5 w-[3px] rounded-sm bg-ink/60" />
            </span>
          </div>

          <div className="px-4 pb-4 pt-3">
            {/* header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink/40">Portfolio</p>
                <p className="tnum font-sans text-[1.55rem] font-bold leading-none text-ink">$24,380</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-forest/20 bg-forest/5 px-2 py-1 text-[0.55rem] font-semibold uppercase tracking-wide text-forest">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-forest" />
                Demo
              </span>
            </div>

            <p className="mt-1.5 flex items-center gap-1 text-[0.72rem] font-medium text-forest">
              <ArrowUpRight size={13} strokeWidth={2.6} />
              <span className="tnum font-semibold">+$640.20</span> today
            </p>

            {/* AI trend chart */}
            <div className="relative mt-3 overflow-hidden rounded-2xl border border-ink/[0.04] bg-gradient-to-b from-mint/60 to-transparent p-2">
              <Spark data={seriesTrendMild} w={560} h={150} stroke="#0e8f6c" dot grid />
              <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-paper/90 px-2 py-1 text-[0.55rem] font-semibold text-forest shadow-sm ring-1 ring-ink/5 backdrop-blur">
                <Bot size={10} /> AI uptrend
              </span>
            </div>

            {/* markets */}
            <p className="mb-1 mt-3.5 flex items-center justify-between px-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink/40">
              Markets
              <span className="inline-flex items-center gap-1 normal-case tracking-normal text-forest">
                <Activity size={10} /> Live
              </span>
            </p>
            <div className="divide-y divide-ink/[0.04] rounded-2xl border border-ink/[0.04] bg-paper/70 p-1.5">
              <div className="flex items-center justify-between px-1.5 pb-1 pt-0.5">
                <span className="font-mono text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-ink-muted/80">
                  Live trading
                </span>
                <span className="flex items-center gap-1 text-[0.55rem] font-semibold uppercase tracking-wide text-forest">
                  <span className="size-1.5 animate-pulse-dot rounded-full bg-forest" aria-hidden="true" />
                  Open
                </span>
              </div>
              <CoinRow ticker="BTC" name="Bitcoin" data={sparkBtc} change={2.4} />
              <CoinRow ticker="ETH" name="Ethereum" data={sparkEth} change={1.1} />
              <CoinRow ticker="SOL" name="Solana" data={sparkSol} change={-0.6} />
            </div>

            {/* auto trader */}
            <div className="mt-3 flex items-center justify-between rounded-2xl bg-gradient-to-r from-forest to-pine p-3 shadow-[0_10px_22px_-12px_rgba(8,122,91,0.8)]">
              <div className="flex items-center gap-2.5">
                <span className="grid size-8 place-items-center rounded-xl bg-white/15 text-white">
                  <Bot size={16} />
                </span>
                <span>
                  <span className="block text-[0.72rem] font-semibold text-white">Auto-trader running</span>
                  <span className="block text-[0.58rem] text-mint/80">Strategy: Momentum</span>
                </span>
              </div>
              <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-white/20">
                <span className="absolute right-0.5 size-4 rounded-full bg-white shadow" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* floating coin medallions */}
      <img
        src={COINS.BTC.icon}
        alt=""
        width={56}
        height={56}
        className="absolute -right-5 -top-5 size-12 animate-float rounded-full shadow-xl ring-4 ring-white/60 sm:-right-8 sm:size-14"
      />
      <img
        src={COINS.ETH.icon}
        alt=""
        width={48}
        height={48}
        className="absolute -left-4 top-1/3 size-10 animate-float-slow rounded-full shadow-xl ring-4 ring-white/60 sm:-left-9 sm:size-12"
        style={{ animationDelay: '1.2s' }}
      />
      <img
        src={COINS.SOL.icon}
        alt=""
        width={44}
        height={44}
        className="absolute -bottom-4 right-8 size-9 animate-float-slower rounded-full shadow-xl ring-4 ring-white/60"
        style={{ animationDelay: '0.6s' }}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-28">
      {/* background décor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-radial opacity-70" />
        <div className="absolute -top-32 right-[-12%] size-[34rem] animate-drift rounded-full bg-[radial-gradient(closest-side,rgba(232,244,239,0.9),transparent)]" />
        <div className="absolute bottom-[-16rem] left-[-10%] size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,240,232,0.7),transparent)]" />
        <div className="absolute left-1/2 top-[-6rem] size-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.16),transparent)] blur-2xl" />
      </div>

      <div className="wrap grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        {/* Copy */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-forest">
              <Sparkles size={13} className="text-gold-deep" aria-hidden="true" />
              AI-Powered Trading
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="text-balance mt-7 text-[2.7rem] font-semibold leading-[1.03] text-ink sm:text-6xl lg:text-[4.15rem]">
              Smarter Trading.
              <br />
              <span className="italic">
                Powered By{' '}
                <span className="bg-gradient-to-r from-forest-soft via-forest to-pine bg-clip-text text-transparent">
                  AI.
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="text-pretty mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Keen Accruvance brings AI-driven automation, real-time market
              intelligence and security-first infrastructure together in one
              clear, easy-to-use trading platform - so you can trade with more
              context and less guesswork.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Button href="/signup" size="lg" arrow>
                Get Started
              </Button>
            </div>
          </Reveal>

          <Reveal delay={330}>
            <ul className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-muted">
              <li className="flex items-center gap-2">
                <Lock size={14} className="text-forest" aria-hidden="true" /> Encrypted
              </li>
              <li className="flex items-center gap-2">
                <Globe2 size={14} className="text-forest" aria-hidden="true" /> 98+ countries
              </li>
              <li className="flex items-center gap-2">
                <Clock3 size={14} className="text-forest" aria-hidden="true" /> 24/7 markets
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={200} className="relative lg:pl-6">
          <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
            {/* halo ring */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-forest/15"
            />

            <PhoneMock />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
