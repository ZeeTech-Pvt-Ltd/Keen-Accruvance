import { BrainCircuit, Workflow, ShieldCheck, Check } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const FEATURES = [
  {
    id: '01',
    title: 'AI-Powered Intelligence',
    body: 'Keen Accruvance’s models continuously analyse price action, order flow and market context to help surface opportunities — and explain them in plain language, so you stay informed rather than overwhelmed.',
    bullets: [
      'Pattern and momentum detection across major assets',
      'Signals with readable reasoning, not black boxes',
      'Adaptive models tuned for fast-moving markets',
    ],
    featured: true,
    icon: BrainCircuit,
  },
  {
    id: '02',
    title: 'Automated Trading',
    body: 'Turn a strategy into a system. Configure your rules and risk preferences once, and let real-time automation handle execution around the clock — while you stay in control at every step.',
    bullets: [
      'Strategy builder with defined risk parameters',
      'Real-time order execution the moment conditions align',
      'Runs 24/7 — no screen-watching required',
    ],
    featured: false,
    icon: Workflow,
  },
  {
    id: '03',
    title: 'Advanced Security',
    body: 'Security is engineered into the platform, not bolted on. From encryption to layered account protection, your data and funds are safeguarded by defence-in-depth infrastructure.',
    bullets: [
      'Encryption in transit and at rest',
      'Two-factor authentication and device controls',
      'Continuous monitoring for unusual account activity',
    ],
    featured: false,
    icon: ShieldCheck,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative mt-28 scroll-mt-24 lg:mt-36">
      <div className="wrap">
        <SectionHeading
          eyebrow="Capabilities"
          title="Technology that works while the markets work"
          lead="Three pillars come together in one platform — intelligence to see clearly, automation to act consistently, and security to keep it all safe."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.id} delay={i * 110}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-8 transition-all duration-300 hover:-translate-y-1 lg:p-9 ${
                  f.featured
                    ? 'bg-gradient-to-br from-forest via-forest to-pine-deep text-white shadow-[0_30px_70px_-30px_rgba(5,60,47,0.75)] ring-1 ring-white/10 hover:shadow-[0_40px_80px_-30px_rgba(5,60,47,0.85)]'
                    : 'border border-ink/[0.05] bg-paper shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* décor */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  {f.featured && <div className="absolute inset-0 bg-grid-dark opacity-40" />}
                  <span
                    className={`absolute right-6 top-6 font-display text-[6rem] font-bold leading-none ${
                      f.featured ? 'text-white/[0.07]' : 'text-ink/[0.045]'
                    } transition-transform duration-500 group-hover:-translate-y-1`}
                  >
                    {f.id}
                  </span>
                  <span
                    className={`absolute -bottom-16 right-0 size-44 rounded-full blur-2xl ${
                      f.featured ? 'bg-white/10' : i === 1 ? 'bg-mint/70' : 'bg-peach/80'
                    }`}
                  />
                </div>

                <div className="relative">
                  <span
                    className={`grid size-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
                      f.featured
                        ? 'bg-white/15 text-white ring-1 ring-inset ring-white/20'
                        : i === 1
                          ? 'bg-mint text-pine'
                          : 'bg-peach text-coral-hover'
                    }`}
                  >
                    <f.icon size={22} strokeWidth={1.9} aria-hidden="true" />
                  </span>

                  <h3
                    className={`mt-6 font-display text-xl font-semibold ${
                      f.featured ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`mt-3 text-[0.95rem] leading-relaxed ${
                      f.featured ? 'text-mint/85' : 'text-ink-muted'
                    }`}
                  >
                    {f.body}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[0.9rem]">
                        <span
                          className={`mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full ${
                            f.featured ? 'bg-gold/25 text-gold' : 'bg-forest/10 text-forest'
                          }`}
                        >
                          <Check size={11} strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className={f.featured ? 'text-mint/90' : 'text-ink-muted'}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
