import { Fragment } from 'react'
import { ArrowRight, UserPlus, SlidersHorizontal, MonitorCog, Check } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const STEPS = [
  {
    n: '01',
    label: 'Step one',
    icon: UserPlus,
    title: 'Create Your Account',
    body: 'Sign up in minutes with just an email or phone number. Complete secure verification, enable two-factor authentication, and you are ready to explore.',
    bullets: ['Email or phone sign-up', 'Secure 2FA verification'],
    chip: '≈ 2 minutes',
  },
  {
    n: '02',
    label: 'Step two',
    icon: SlidersHorizontal,
    title: 'Configure Your Strategy',
    body: 'Follow ready-made AI strategies, build your own from clear templates, or blend the two. Set your risk limits and let the platform take it from there.',
    bullets: ['AI-assisted strategy builder', 'Custom risk controls'],
    chip: 'No code required',
  },
  {
    n: '03',
    label: 'Step three',
    icon: MonitorCog,
    title: 'Monitor & Manage Your Trades',
    body: 'Watch everything in one calm dashboard. Pause, adjust or stop any strategy at any time — full control stays with you, around the clock.',
    bullets: ['Live portfolio overview', 'Pause or stop anytime'],
    chip: '24/7 control',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mt-28 scroll-mt-24 lg:mt-36">
      <div className="wrap">
        <SectionHeading
          eyebrow="How it works"
          title="From sign-up to strategy in three simple steps"
          lead="No jargon, no paperwork, no steep learning curve. Get a working setup in the time it takes to make a coffee."
        />

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-4">
          {STEPS.map((s, i) => (
            <Fragment key={s.n}>
              <Reveal
                as="article"
                delay={i * 130}
                className="relative h-full overflow-hidden rounded-3xl border border-ink/[0.06] bg-paper p-7 shadow-[0_1px_2px_rgba(16,24,23,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-forest/15 hover:shadow-card sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-6 font-display text-[5rem] font-bold leading-none text-ink/[0.04]"
                />
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-forest-soft to-pine text-white shadow-[0_10px_22px_-10px_rgba(8,122,91,0.8)]">
                    <s.icon size={21} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-forest">
                    {s.label}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-muted">{s.body}</p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-[0.84rem] font-medium text-ink">
                      <Check size={15} strokeWidth={3} className="shrink-0 text-forest" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 inline-flex rounded-full bg-cream-deep px-3 py-1.5 text-[0.72rem] font-semibold text-ink-muted">
                  {s.chip}
                </p>
              </Reveal>

              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden h-11 w-11 shrink-0 place-items-center self-center rounded-full border border-ink/[0.06] bg-cream text-forest shadow-sm lg:grid"
                >
                  <ArrowRight size={17} strokeWidth={2.2} />
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
