import { Bot, Radar, Workflow, ShieldCheck, MousePointerClick, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const VALUES = [
  {
    icon: Bot,
    title: 'AI-powered trading',
    body: 'Models scan market data and surface patterns, so opportunities are easier to spot — and easier to understand.',
    chip: 'bg-forest/10 text-forest',
  },
  {
    icon: Radar,
    title: 'Real-time market insights',
    body: 'Live signals and clear context across major assets help you follow what is moving, as it moves.',
    chip: 'bg-mint text-pine',
  },
  {
    icon: Workflow,
    title: 'Automated strategies',
    body: 'Define your rules once and let automation execute trades on your behalf — without watching the screen all day.',
    chip: 'bg-gold/15 text-gold-deep',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    body: 'Encryption, layered account protection and round-the-clock monitoring guard your account at every stage.',
    chip: 'bg-peach text-coral-hover',
  },
  {
    icon: MousePointerClick,
    title: 'Easy-to-use interface',
    body: 'A calm, uncluttered dashboard that makes advanced trading tools feel approachable from day one.',
    chip: 'bg-cream-deep text-ink',
  },
]

export default function About() {
  return (
    <section id="about" className="relative mt-28 scroll-mt-24 lg:mt-36">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        {/* Narrative */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="About us"
            title="Intelligent Trading Without the Complexity"
            lead="Markets today are fast, noisy and always on. Keen Accruvance was built to cut through the noise — pairing capable AI with a clean, human-friendly platform so smarter trading decisions don't require a finance degree or a screen obsession."
          />
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">
              Our approach is simple: surface what matters, automate what is
              repetitive, and protect every interaction. Whether you are
              following your own ideas or letting a configured strategy run,
              everything you need lives in one secure, connected workspace.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 inline-flex items-center gap-4 rounded-2xl border border-forest/10 bg-paper px-5 py-4 shadow-sm">
              <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-forest to-pine text-white shadow-[0_8px_18px_-8px_rgba(8,122,91,0.9)]">
                <span className="font-display text-base font-bold">K</span>
              </span>
              <p className="text-sm leading-snug text-ink-muted">
                <span className="font-semibold text-ink">One platform, one focus:</span>{' '}
                giving traders technology they can actually trust.
              </p>
            </div>
          </Reveal>
          <Reveal delay={280} className="mt-9">
            <a
              href="/about"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-pine"
            >
              Read our full story
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        {/* Value list */}
        <div className="grid content-center gap-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <article className="group flex items-start gap-4 rounded-2xl border border-ink/[0.05] bg-paper p-5 shadow-[0_1px_2px_rgba(16,24,23,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/15 hover:shadow-card sm:p-6">
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${v.chip}`}
                >
                  <v.icon size={20} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span>
                  <h3 className="font-display text-[1.02rem] font-semibold text-ink">{v.title}</h3>
                  <p className="mt-1 text-[0.92rem] leading-relaxed text-ink-muted">{v.body}</p>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
