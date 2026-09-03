import { Activity } from 'lucide-react'

const MARKETS = [
  { t: 'BTC / USD', p: '67,842', c: 2.42 },
  { t: 'ETH / USD', p: '3,412.60', c: 1.18 },
  { t: 'SOL / USD', p: '168.24', c: -0.84 },
  { t: 'DOT / USD', p: '7.18', c: 0.32 },
  { t: 'BNB / USD', p: '584.20', c: 0.9 },
  { t: 'XRP / USD', p: '0.6241', c: 1.71 },
  { t: 'ADA / USD', p: '0.4520', c: -0.3 },
]

function Row({ hidden }) {
  return (
    <div
      className="flex w-max items-center"
      aria-hidden={hidden || undefined}
    >
      {MARKETS.map((m) => {
        const up = m.c >= 0
        return (
          <span key={m.t} className="flex items-center gap-2.5 px-7 font-mono text-[0.72rem]">
            <span className="font-semibold uppercase tracking-wider text-ink">{m.t}</span>
            <span className="tnum text-ink-muted">{m.p}</span>
            <span
              className={`tnum inline-flex items-center gap-1 font-semibold ${up ? 'text-forest' : 'text-coral'}`}
            >
              <span className="text-[0.6rem]" aria-hidden="true">
                {up ? '▲' : '▼'}
              </span>
              {up ? '+' : ''}
              {m.c.toFixed(2)}%
            </span>
            <span className="ml-7 h-1 w-1 rotate-45 bg-gold/70" aria-hidden="true" />
          </span>
        )
      })}
    </div>
  )
}

/** Seamless marquee of sample market prices — decorative, illustrative data. */
export default function Ticker() {
  return (
    <div className="relative border-b border-ink/[0.06] bg-paper/70 backdrop-blur-sm">
      <div className="group relative flex items-center overflow-hidden py-3">
        {/* live label */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center bg-gradient-to-r from-cream via-cream/90 to-transparent pl-5 pr-14 sm:pl-8">
          <span className="flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink">
            <Activity size={13} className="text-forest" aria-hidden="true" />
            Live
          </span>
        </div>

        {/* marquee */}
        <div className="flex w-max animate-ticker items-center group-hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  )
}
