import { useEffect, useRef, useState } from 'react'
import { Users, Globe2, Wallet, Clock3 } from 'lucide-react'
import Reveal from './Reveal.jsx'

const STATS = [
  { icon: Users, count: 4, suffix: 'M+', decimals: 0, label: 'Registered users', note: 'across global markets' },
  { icon: Globe2, count: 98, suffix: '+', decimals: 0, label: 'Countries reached', note: 'and growing monthly' },
  { icon: Wallet, count: 500, prefix: '$', suffix: 'M+', decimals: 0, label: 'Customer deposits', note: 'since platform launch' },
  { icon: Clock3, count: 24, suffix: '/7', decimals: 0, label: 'Trading access', note: 'markets move — so do we' },
]

function CountUp({ end, prefix = '', suffix = '', decimals = 0, duration = 1400 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        if (reduced) {
          setVal(end)
          return
        }
        const t0 = performance.now()
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / duration)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(end * eased)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.disconnect()
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className="tnum">
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section aria-label="Platform in numbers" className="relative mt-24 lg:mt-28">
      <div className="wrap">
        <Reveal>
          <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-ink/[0.06] bg-paper shadow-card lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`group relative flex flex-col gap-1 px-6 py-8 sm:px-8 sm:py-10 ${
                  i % 2 === 1 ? 'border-l border-ink/[0.05]' : ''
                } ${i >= 2 ? 'border-t border-ink/[0.05] lg:border-t-0' : ''} ${
                  i === 2 ? 'lg:border-l' : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-forest/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <dt className="order-2 mt-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-muted">
                  {s.label}
                </dt>
                <dd className="order-1 flex items-baseline gap-2.5">
                  <span className="tnum font-display text-3xl font-semibold text-ink sm:text-[2.6rem] sm:leading-[1.05]">
                    <CountUp end={s.count} prefix={s.prefix} suffix={s.suffix} />
                  </span>
                  <s.icon size={20} strokeWidth={1.8} className="shrink-0 text-forest/70" aria-hidden="true" />
                </dd>
                <dd className="order-3 text-[0.78rem] text-ink-muted/80">{s.note}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <p className="mt-4 text-center font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted/60">
          Illustrative platform figures shown for demonstration
        </p>
      </div>
    </section>
  )
}
