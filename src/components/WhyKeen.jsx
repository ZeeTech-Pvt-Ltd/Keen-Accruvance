import { Radar, SlidersHorizontal, Eye, MonitorSmartphone, ShieldCheck, Sprout } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const REASONS = [
  {
    icon: Radar,
    title: 'Real-time market intelligence',
    body: 'Live prices, momentum and AI readouts keep you aligned with the market as it moves.',
    tint: 'bg-forest/10 text-forest',
  },
  {
    icon: SlidersHorizontal,
    title: 'Automated trading tools',
    body: 'Define your rules and risk once — strategies then run around the clock, on your terms.',
    tint: 'bg-gold/15 text-gold-deep',
  },
  {
    icon: Eye,
    title: 'Transparent experience',
    body: 'Clear fees, a full order history and readable reasoning behind every AI signal.',
    tint: 'bg-mint text-pine',
  },
  {
    icon: MonitorSmartphone,
    title: 'Multi-device accessibility',
    body: 'Start on desktop, check in from your phone — your portfolio stays in perfect sync.',
    tint: 'bg-coral/10 text-coral-hover',
  },
  {
    icon: ShieldCheck,
    title: 'Security-focused infrastructure',
    body: 'Encryption, two-factor authentication and continuous monitoring on every session.',
    tint: 'bg-forest/10 text-forest',
  },
  {
    icon: Sprout,
    title: 'Beginner-friendly interface',
    body: 'Guided onboarding and clean tools make advanced trading approachable at any level.',
    tint: 'bg-peach text-coral-hover',
  },
]

export default function WhyKeen() {
  return (
    <section id="why-invest" className="relative mt-28 scroll-mt-24 lg:mt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-16 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(232,244,239,0.9),transparent)] blur-2xl" />
      </div>

      <div className="wrap">
        <SectionHeading
          eyebrow="Why Keen Accruvance"
          title="Built for Smarter, More Confident Trading"
          lead="Confidence comes from clarity — knowing what the market is doing, why your strategy is acting, and that your account is protected. That is exactly what we focus on."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 90}>
              <article className="group h-full rounded-2xl border border-ink/[0.05] bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/15 hover:shadow-card sm:p-7">
                <span
                  className={`grid size-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${r.tint}`}
                >
                  <r.icon size={20} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[1.05rem] font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-muted">{r.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
