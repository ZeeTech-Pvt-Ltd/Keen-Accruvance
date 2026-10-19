import {
  ArrowRight,
  Check,
  Clock3,
  Eye,
  Gauge,
  Mail,
  MessageCircleQuestion,
  Radar,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { STEPS } from '../data/steps.js'

const BEFORE = [
  {
    icon: Mail,
    title: 'An Email Address Or Phone Number',
    body: 'That is all you need to open an account. No card details and no deposit are required to explore the demo.',
    tint: 'bg-forest/10 text-forest',
  },
  {
    icon: Clock3,
    title: 'A Few Minutes',
    body: 'Sign up and secure verification are short. You can pause and come back whenever it suits you.',
    tint: 'bg-gold/15 text-gold-deep',
  },
  {
    icon: Gauge,
    title: 'Your Own Risk Limits',
    body: 'Think about what you are comfortable with before you configure a strategy. You can adjust the limits at any time.',
    tint: 'bg-mint text-pine',
  },
]

const AFTER = [
  {
    icon: Radar,
    title: 'A Clear Market Overview',
    body: 'Live prices, momentum and AI signal ratings in one view, so you can see what the market is doing at a glance.',
  },
  {
    icon: Eye,
    title: 'Signals With Reasons',
    body: 'Each signal carries a plain language explanation. You see what changed and why it matters before you act.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Controls In Your Hands',
    body: 'Pause, adjust or stop any strategy from the dashboard. Your risk limits are respected throughout.',
  },
  {
    icon: ShieldCheck,
    title: 'Protection From Day One',
    body: 'Two factor authentication, encryption and account monitoring are switched on from your first sign in.',
  },
]

const QUESTIONS = [
  {
    q: 'Do I Need Trading Experience?',
    a: 'No. The onboarding walks you through the essentials, and the dashboard stays clear whether it is your first week or your fifth year.',
  },
  {
    q: 'Can I Explore Before I Fund Anything?',
    a: 'Yes. You start with a demo account, so you can look around the platform before you decide anything.',
  },
  {
    q: 'Can I Change A Strategy Later?',
    a: 'Yes. Any automated strategy can be paused, adjusted or stopped whenever you want, and your risk limits stay in place.',
  },
]

export default function HowItWorksPage() {
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
              How It Works
            </p>
            <h1 className="text-balance mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
              From Sign Up To{' '}
              <span className="italic text-forest">Your First Strategy</span>
            </h1>
            <p className="text-pretty mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Three clear steps take you from a new account to a strategy you understand and
              control. Here is what happens at each stage, and what you need before you start.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <Button href="/signup" size="lg" arrow>
                Create Your Free Account
              </Button>
              <Button href="/features" size="lg" variant="outline">
                Explore The Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Steps ---- */}
      <section className="wrap mt-6 pb-6 sm:mt-10 lg:mt-14">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-gold-deep">Three Steps</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
              A Working Setup, Without The Guesswork
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl leading-relaxed text-ink-muted">
              No jargon and no steep learning curve. Each step has a clear outcome, and you stay
              in control of every decision.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <article className="group relative flex h-full flex-col rounded-3xl border border-ink/[0.06] bg-paper p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-forest/15 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-forest-soft to-pine text-white shadow-[0_10px_22px_-10px_rgba(8,122,91,0.8)]">
                      <s.icon size={21} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[0.72rem] font-medium text-gold-deep">
                      {s.n}
                    </span>
                  </div>
                  <span className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-forest">
                    {s.label}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[0.93rem] leading-relaxed text-ink-muted">
                    {s.body}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-[0.84rem] font-medium text-ink"
                      >
                        <Check
                          size={15}
                          strokeWidth={3}
                          className="shrink-0 text-forest"
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 inline-flex self-start rounded-full bg-cream-deep px-3 py-1.5 text-[0.72rem] font-semibold text-ink-muted">
                    {s.chip}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Before you begin ---- */}
      <section className="wrap py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="eyebrow text-gold-deep">Before You Begin</p>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
                What To Have Ready
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-muted">
                Getting started takes less than you might expect. You do not need previous
                experience, and you do not need to fund anything to look around.
              </p>
            </div>
            <div className="space-y-4">
              {BEFORE.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 rounded-2xl border border-ink/[0.05] bg-paper p-5 shadow-sm transition-all duration-300 hover:border-forest/15 hover:shadow-card sm:p-6"
                >
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${b.tint}`}>
                    <b.icon size={20} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-ink">{b.title}</h3>
                    <p className="mt-1 text-[0.92rem] leading-relaxed text-ink-muted">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- After sign up ---- */}
      <section className="relative overflow-hidden bg-pine py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_75%_80%_at_50%_40%,black,transparent)]" />
          <div className="absolute -left-20 -bottom-24 size-96 rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.16),transparent)] blur-2xl" />
          <div className="absolute -right-16 -top-20 size-80 rounded-full bg-[radial-gradient(closest-side,rgba(14,143,108,0.35),transparent)] blur-2xl" />
        </div>

        <div className="wrap relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-mint">Inside The Platform</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-white sm:text-4xl">
              What You See After You Sign Up
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl leading-relaxed text-mint/75">
              Everything lives in one dashboard, with the context you need to make your own
              decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AFTER.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-mint">
                  <a.icon size={20} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[1rem] font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-mint/75">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Questions ---- */}
      <section className="wrap py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="eyebrow text-gold-deep">Good To Know</p>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
                Questions Before You Start
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-muted">
                A few things people ask before opening an account. For everything else, our
                support team is one message away.
              </p>
              <a
                href="/faq"
                className="group mt-6 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-forest"
              >
                Read The Full FAQ
                <ArrowRight
                  size={16}
                  strokeWidth={2.4}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="space-y-4">
              {QUESTIONS.map((q) => (
                <div
                  key={q.q}
                  className="rounded-2xl border border-ink/[0.06] bg-paper p-6 shadow-sm"
                >
                  <h3 className="flex items-start gap-3 text-[1rem] font-semibold text-ink">
                    <MessageCircleQuestion
                      size={18}
                      strokeWidth={1.9}
                      className="mt-0.5 shrink-0 text-forest"
                      aria-hidden="true"
                    />
                    {q.q}
                  </h3>
                  <p className="mt-2.5 pl-[1.9rem] text-[0.92rem] leading-relaxed text-ink-muted">
                    {q.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="wrap pb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest via-pine to-pine-deep px-6 py-16 text-center sm:px-12 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_60%_90%_at_85%_-10%,rgba(239,184,92,0.28),transparent),radial-gradient(ellipse_50%_80%_at_0%_110%,rgba(232,244,239,0.14),transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow justify-center text-gold">Start Here</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-white sm:text-4xl">
              Ready For Your First Strategy?
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-mint/80">
              Open a free demo account and take the three steps at your own pace. There is no card
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
