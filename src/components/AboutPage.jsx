import Button from './Button.jsx'
import {
  Sparkles,
  ArrowRight,
  Lock,
  Globe2,
  Clock3,
  Bot,
  ShieldCheck,
  KeyRound,
  Eye,
  MousePointerClick,
  Target,
  Gauge,
  Radar,
} from 'lucide-react'

const PILLARS = [
  {
    n: '01',
    icon: Radar,
    title: 'See the market clearly',
    body: 'Our AI scans live data across major assets and surfaces what actually matters. Every signal arrives with context, so you understand the “why” behind a suggestion — not just a blinking alert.',
    chip: 'bg-mint text-pine',
  },
  {
    n: '02',
    icon: ShieldCheck,
    title: 'Stay protected, by default',
    body: 'Encryption in transit and at rest, two-factor authentication from day one, and continuous account monitoring. Security is designed in from the ground up — not bolted on later.',
    chip: 'bg-peach text-coral-hover',
  },
  {
    n: '03',
    icon: Bot,
    title: 'Automate the repetitive',
    body: 'Turn your own rules into automated strategies that run while you sleep. No more staring at charts all day or second-guessing a move you missed.',
    chip: 'bg-forest/10 text-forest',
  },
]

const GUIDES = [
  {
    icon: Eye,
    title: 'Honest by default',
    body: 'Clear risk messaging, transparent pricing and demo-first onboarding — you explore the platform before you ever fund it.',
  },
  {
    icon: ShieldCheck,
    title: 'Security first',
    body: 'Every account is protected with layered controls and two-factor authentication switched on from the very first log-in.',
  },
  {
    icon: Target,
    title: 'You stay in control',
    body: 'The AI advises and automation follows the rules you set. You remain the decision-maker at every step.',
  },
  {
    icon: Gauge,
    title: 'Kept deliberately simple',
    body: 'Powerful tools wrapped in a calm, uncluttered interface — so advanced trading never has to feel intimidating.',
  },
]

/* Trust rows shown on the floating hero card */
const HERO_ROWS = [
  {
    icon: Bot,
    title: 'AI-assisted signals',
    sub: 'Context behind every suggestion',
  },
  {
    icon: ShieldCheck,
    title: 'Security from day one',
    sub: 'Encryption + two-factor log-in',
  },
  {
    icon: Globe2,
    title: 'Built for the world',
    sub: 'Rooted in Australia · live 24/7',
  },
]

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
      {/* halo ring */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[118%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-forest/15"
      />
      {/* floating pill — transparency */}
      <div
        className="absolute -left-2 top-4 z-10 hidden animate-float items-center gap-2 rounded-full border border-white/70 bg-paper/85 py-2 pl-2.5 pr-4 shadow-card backdrop-blur sm:flex lg:-left-6 lg:top-[-18px]"
      >
        <span className="grid size-7 place-items-center rounded-full bg-forest/10 text-forest">
          <Eye size={14} aria-hidden="true" />
        </span>
        <span className="text-[0.76rem] font-semibold text-ink">Transparent risk messaging</span>
      </div>
      {/* floating pill — demo-first */}
      <div
        className="absolute -right-1 top-1/3 z-10 hidden animate-float-slow items-center gap-2 rounded-full border border-white/70 bg-paper/85 py-2 pl-2.5 pr-4 shadow-card backdrop-blur sm:flex lg:-right-5"
        style={{ animationDelay: '1.4s' }}
      >
        <span className="grid size-7 place-items-center rounded-full bg-gold/15 text-gold-deep">
          <MousePointerClick size={14} aria-hidden="true" />
        </span>
        <span className="text-[0.76rem] font-semibold text-ink">Demo-first onboarding</span>
      </div>
      {/* floating pill — 2FA */}
      <div
        className="absolute bottom-10 -right-1 z-10 hidden animate-float-slower items-center gap-2 rounded-full border border-white/70 bg-paper/85 py-2 pl-2.5 pr-4 shadow-card backdrop-blur sm:flex lg:-right-6 lg:bottom-12"
        style={{ animationDelay: '0.7s' }}
      >
        <span className="grid size-7 place-items-center rounded-full bg-mint text-pine">
          <KeyRound size={14} aria-hidden="true" />
        </span>
        <span className="text-[0.76rem] font-semibold text-ink">2FA, always on</span>
      </div>

      {/* main brand card */}
      <div className="rounded-[1.8rem] border border-white/70 bg-paper/85 p-6 shadow-card backdrop-blur sm:p-7">
        <div className="flex items-center gap-3.5">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-forest to-pine font-display text-xl font-bold text-white shadow-[0_12px_24px_-10px_rgba(8,122,91,0.8)]">
            K
          </span>
          <span>
            <span className="block text-[0.98rem] font-semibold text-ink">Keen Accruvance</span>
            <span className="block font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-ink-muted">
              Technology · Clarity · Trust
            </span>
          </span>
        </div>

        <p className="mt-5 font-display text-[1.08rem] italic leading-relaxed text-pine">
          “We design for the trader who wants power — without the overwhelm.”
        </p>

        <div className="mt-6 space-y-2.5">
          {HERO_ROWS.map((r) => (
            <div
              key={r.title}
              className="flex items-center gap-3.5 rounded-2xl border border-ink/[0.05] bg-cream/70 px-4 py-3"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-forest/10 text-forest">
                <r.icon size={17} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.86rem] font-semibold text-ink">{r.title}</span>
                <span className="block text-[0.72rem] text-ink-muted">{r.sub}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-gradient-to-r from-forest/8 to-mint/40 px-4 py-2.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.14em] text-ink-muted">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-forest" />
            Demo-first · No deposit needed
          </span>
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      {/* ---- Hero (same feel as the homepage hero) ---- */}
      <section className="relative overflow-hidden">
        {/* background décor — mirrored from the homepage hero */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-radial opacity-70" />
          <div className="absolute -top-32 right-[-12%] size-[34rem] animate-drift rounded-full bg-[radial-gradient(closest-side,rgba(232,244,239,0.9),transparent)]" />
          <div className="absolute bottom-[-16rem] left-[-10%] size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,240,232,0.7),transparent)]" />
          <div className="absolute left-1/2 top-[-6rem] size-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.16),transparent)] blur-2xl" />
        </div>

        <div className="wrap grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
          {/* Copy */}
          <div className="max-w-2xl">
            <p className="eyebrow text-forest">
              <Sparkles size={13} className="text-gold-deep" aria-hidden="true" />
              About us
            </p>
            <h1 className="text-balance mt-7 text-[2.6rem] font-semibold leading-[1.05] text-ink sm:text-[50px] sm:leading-[1.04]">
              A calmer way to trade.
              <br />
              <span className="italic">
                Powered by{' '}
                <span className="bg-gradient-to-r from-forest-soft via-forest to-pine bg-clip-text text-transparent">
                  intelligent technology.
                </span>
              </span>
            </h1>
            <p className="text-pretty mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Keen Accruvance pairs capable AI with a clean, human-friendly platform — so
              smarter trading decisions don’t require a finance degree or an obsession with
              the screen.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Button href="/signup" size="lg" arrow>
                Get Started
              </Button>
              <Button href="#our-story" size="lg" variant="outline">
                Our story
              </Button>
            </div>
            <ul className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-muted">
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
          </div>

          {/* Visual */}
          <HeroVisual />
        </div>
      </section>

      {/* ---- Our story ---- */}
      <section id="our-story" className="wrap scroll-mt-24 pb-4 mt-10 sm:mt-16 lg:mt-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-gold-deep">Our story</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
              Built for clarity in a market that never sleeps
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-ink-muted">
            <p>
              Keen Accruvance started with a simple frustration: trading platforms kept
              getting more powerful — and, at the same time, more intimidating. Capable tools
              were hidden behind jargon, and the guidance traders actually needed was buried
              beneath blinking dashboards and cluttered charts.
            </p>
            <p>
              So we built the platform we wanted to use. One where AI surfaces what matters
              and explains itself, automation runs on rules you define, and protection is
              switched on before your first log-in. Everything lives in one secure, connected
              workspace.
            </p>
            <p>
              Today traders around the world — including a growing community across
              Australia — use Keen Accruvance to follow the markets with more clarity, less
              noise and greater confidence in the technology behind every decision.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Pillars ---- */}
      <section className="wrap py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-forest">What we stand on</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
              Three ideas shape everything we build
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PILLARS.map((p) => (
              <article
                key={p.n}
                className="group flex flex-col rounded-3xl border border-ink/[0.05] bg-paper p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-forest/15 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid size-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${p.chip}`}
                  >
                    <p.icon size={22} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[0.72rem] font-medium text-gold-deep">{p.n}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-2.5 text-[0.93rem] leading-relaxed text-ink-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Mission band ---- */}
      <section className="relative overflow-hidden bg-pine py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_75%_80%_at_50%_40%,black,transparent)]" />
          <div className="absolute -left-20 -bottom-24 size-96 rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.16),transparent)] blur-2xl" />
          <div className="absolute -right-16 -top-20 size-80 rounded-full bg-[radial-gradient(closest-side,rgba(14,143,108,0.35),transparent)] blur-2xl" />
        </div>
        <div className="wrap relative">
          <figure className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.26em] text-gold">
              Our mission
            </span>
            <blockquote className="mt-7 text-balance text-2xl font-medium leading-[1.3] text-white sm:text-3xl sm:leading-[1.28]">
              “Great trading technology should make you feel more{' '}
              <em className="text-mint-deep">in control</em> — not more overwhelmed.”
            </blockquote>
            <figcaption className="mt-7 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-mint/60">
              The Keen Accruvance team
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---- What guides us ---- */}
      <section className="wrap py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="eyebrow text-gold-deep">Our principles</p>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
                What guides us every day
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-muted">
                These aren’t words on a wall. Every product decision — from how a signal is
                explained to when a confirmation is required — is weighed against them.
              </p>
            </div>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {GUIDES.map((g) => (
                <div key={g.title} className="flex gap-3.5">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-cream-deep text-pine">
                    <g.icon size={18} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-ink">{g.title}</h3>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-ink-muted">{g.body}</p>
                  </div>
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
            <p className="eyebrow justify-center text-gold">Get started</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-white sm:text-4xl">
              Ready for a calmer way to trade?
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-mint/80">
              Open a free demo account in a few minutes and explore the platform — signals,
              automation and all — before you ever decide to fund it.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="/signup"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-[0.98rem] font-semibold text-pine shadow-[0_18px_35px_-14px_rgba(4,30,23,0.7)] transition-all hover:-translate-y-0.5 hover:bg-mint"
              >
                Create your demo account
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
