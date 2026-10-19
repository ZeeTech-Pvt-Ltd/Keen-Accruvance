import {
  ArrowRight,
  BrainCircuit,
  Check,
  Eye,
  Gauge,
  MessageCircleQuestion,
  MonitorSmartphone,
  MousePointerClick,
  Radar,
  SlidersHorizontal,
  Sparkles,
  Workflow,
} from 'lucide-react'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { FEATURES } from '../data/features.js'

const MORE = [
  {
    icon: Radar,
    title: 'Live Market Overview',
    body: 'Prices, momentum and AI signal ratings in one clear view.',
    tint: 'bg-forest/10 text-forest',
  },
  {
    icon: MonitorSmartphone,
    title: 'Multi Device Access',
    body: 'Start on desktop, check in from your phone. Your portfolio stays in sync.',
    tint: 'bg-mint text-pine',
  },
  {
    icon: Eye,
    title: 'Transparent History',
    body: 'A full order history and the reasoning behind every signal.',
    tint: 'bg-gold/15 text-gold-deep',
  },
  {
    icon: Gauge,
    title: 'Risk Limits You Set',
    body: 'Define your limits once and have them respected throughout.',
    tint: 'bg-peach text-coral-hover',
  },
  {
    icon: MousePointerClick,
    title: 'Demo First Onboarding',
    body: 'Explore the platform before you decide to fund anything.',
    tint: 'bg-forest/10 text-forest',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Support That Replies',
    body: 'Our team answers every message within one business day.',
    tint: 'bg-mint text-pine',
  },
]

const FLOW = [
  {
    icon: BrainCircuit,
    title: 'The Models Read The Market',
    body: 'Price action, order flow and momentum are turned into clear, explained signals.',
  },
  {
    icon: SlidersHorizontal,
    title: 'You Set The Rules',
    body: 'You choose the strategy and the risk limits. Automation acts inside them.',
  },
  {
    icon: Workflow,
    title: 'The Platform Handles The Rest',
    body: 'When conditions match, execution runs while you stay in control.',
  },
]

export default function FeaturesPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-radial opacity-70" />
          <div className="absolute -top-32 right-[-12%] size-[32rem] animate-drift rounded-full bg-[radial-gradient(closest-side,rgba(232,244,239,0.9),transparent)]" />
          <div className="absolute bottom-[-16rem] left-[-10%] size-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,240,232,0.7),transparent)]" />
          <div className="absolute left-1/2 top-[-6rem] size-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.16),transparent)] blur-2xl" />
        </div>

        <div className="wrap py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-forest">
              <Sparkles size={13} className="text-gold-deep" aria-hidden="true" />
              Features
            </p>
            <h1 className="text-balance mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
              The Technology Behind{' '}
              <span className="italic text-forest">Keen Accruvance</span>
            </h1>
            <p className="text-pretty mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Intelligence to see the market clearly, automation to act on your rules, and
              security to keep it all protected. Here is how each piece works.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <Button href="/signup" size="lg" arrow>
                Get Started
              </Button>
              <Button href="/how-it-works" size="lg" variant="outline">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Core features ---- */}
      <section className="wrap mt-6 pb-6 sm:mt-10 lg:mt-14">
        <div className="mx-auto max-w-5xl space-y-6">
          {FEATURES.map((f, i) => {
            const flip = i % 2 === 1
            return (
              <Reveal key={f.id} delay={i * 80}>
                <article
                  className={`grid gap-8 rounded-[2rem] border p-7 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 ${
                    f.featured
                      ? 'border-white/10 bg-gradient-to-br from-forest via-forest to-pine-deep text-white shadow-[0_30px_70px_-30px_rgba(5,60,47,0.75)]'
                      : 'border-ink/[0.05] bg-paper shadow-card'
                  }`}
                >
                  <div className={flip ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid size-12 place-items-center rounded-2xl ${
                          f.featured
                            ? 'bg-white/15 text-white ring-1 ring-inset ring-white/20'
                            : 'bg-mint text-pine'
                        }`}
                      >
                        <f.icon size={22} strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span
                        className={`font-mono text-[0.72rem] font-medium ${
                          f.featured ? 'text-mint/60' : 'text-gold-deep'
                        }`}
                      >
                        {f.id}
                      </span>
                    </div>
                    <h2
                      className={`mt-6 font-display text-2xl font-semibold sm:text-3xl ${
                        f.featured ? 'text-white' : 'text-ink'
                      }`}
                    >
                      {f.title}
                    </h2>
                    <p
                      className={`mt-4 text-[0.95rem] leading-relaxed sm:text-base ${
                        f.featured ? 'text-mint/85' : 'text-ink-muted'
                      }`}
                    >
                      {f.body}
                    </p>
                  </div>

                  <ul
                    className={`space-y-3 rounded-2xl p-6 ${
                      f.featured
                        ? 'bg-white/[0.07] ring-1 ring-inset ring-white/10'
                        : 'bg-cream'
                    }`}
                  >
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                            f.featured ? 'bg-gold/25 text-gold' : 'bg-forest/10 text-forest'
                          }`}
                        >
                          <Check size={12} strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span
                          className={`text-[0.93rem] leading-relaxed ${
                            f.featured ? 'text-mint/90' : 'text-ink-muted'
                          }`}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ---- More capabilities ---- */}
      <section className="wrap py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-gold-deep">Also Included</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
              More Of What You Get
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl leading-relaxed text-ink-muted">
              The smaller pieces that make the platform feel calm to use every day.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MORE.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 90}>
                <article className="group h-full rounded-2xl border border-ink/[0.05] bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/15 hover:shadow-card sm:p-7">
                  <span
                    className={`grid size-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${m.tint}`}
                  >
                    <m.icon size={20} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.05rem] font-semibold text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-muted">{m.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- How the pieces fit ---- */}
      <section className="relative overflow-hidden bg-pine py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_75%_80%_at_50%_40%,black,transparent)]" />
          <div className="absolute -left-20 -bottom-24 size-96 rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.16),transparent)] blur-2xl" />
          <div className="absolute -right-16 -top-20 size-80 rounded-full bg-[radial-gradient(closest-side,rgba(14,143,108,0.35),transparent)] blur-2xl" />
        </div>

        <div className="wrap relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-mint">The Whole Picture</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-white sm:text-4xl">
              How The Pieces Fit Together
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl leading-relaxed text-mint/75">
              Signals inform, your rules decide, and automation handles the repetitive work. In
              that order, every time.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {FLOW.map((f, i) => (
              <div
                key={f.title}
                className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-mint">
                  <f.icon size={20} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span className="mt-5 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-gold">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-[1.02rem] font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-mint/75">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="wrap py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest via-pine to-pine-deep px-6 py-16 text-center sm:px-12 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_60%_90%_at_85%_-10%,rgba(239,184,92,0.28),transparent),radial-gradient(ellipse_50%_80%_at_0%_110%,rgba(232,244,239,0.14),transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow justify-center text-gold">Try It Yourself</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-white sm:text-4xl">
              See Every Feature On Your Own Screen
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-mint/80">
              Open a free demo account and explore the platform at your own pace. There is no card
              and no funding needed to look around.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="/signup"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-[0.98rem] font-semibold text-pine shadow-[0_18px_35px_-14px_rgba(4,30,23,0.7)] transition-all hover:-translate-y-0.5 hover:bg-mint"
              >
                Create Your Demo Account
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[0.98rem] font-semibold text-white ring-1 ring-inset ring-white/25 transition-all hover:bg-white/10 hover:ring-white/40"
              >
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
