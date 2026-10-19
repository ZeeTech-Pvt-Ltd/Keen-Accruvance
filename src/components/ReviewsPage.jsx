import {
  ArrowRight,
  Bot,
  Eye,
  Mail,
  MessageCircleQuestion,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import TestimonialSlider from './TestimonialSlider.jsx'
import { TESTIMONIALS } from '../data/testimonials.js'

const THEMES = [
  {
    icon: Eye,
    title: 'Clarity Over Noise',
    body: 'Each signal arrives with a reason behind it. You see what changed and why it matters, instead of decoding another alert.',
    chip: 'bg-forest/10 text-forest',
  },
  {
    icon: Bot,
    title: 'Automation On Your Terms',
    body: 'You set the rules, then the platform handles the repetitive work. Pause, adjust or stop any strategy whenever you want.',
    chip: 'bg-peach text-coral-hover',
  },
  {
    icon: ShieldCheck,
    title: 'Security You Can See',
    body: 'Two factor sign in, encryption and account monitoring are part of everyday use, not an optional extra.',
    chip: 'bg-mint text-pine',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Help That Replies',
    body: 'Questions get an answer from a real person. Our support team replies to every message within one business day.',
    chip: 'bg-gold/15 text-gold-deep',
  },
]

const READING_NOTES = [
  'Each quote is an individual experience, shown for illustration.',
  'Nothing here is financial advice or a promise of returns.',
  'Past results never guarantee future outcomes.',
  'If a quote raises a question, ask our team and we will explain it.',
]

export default function ReviewsPage() {
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
              Reviews
            </p>
            <h1 className="text-balance mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
              What Traders Say About{' '}
              <span className="italic text-forest">Keen Accruvance</span>
            </h1>
            <p className="text-pretty mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Honest notes from people who use the platform in their own way. See what stood out
              to them, then decide whether Keen Accruvance fits how you like to trade.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <Button href="/signup" size="lg" arrow>
                Get Started
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Talk To Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Slider ---- */}
      <section className="wrap mt-6 pb-6 sm:mt-10 lg:mt-14">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-gold-deep">In Their Own Words</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
              Traders On The Platform
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl leading-relaxed text-ink-muted">
              A few notes from people who have spent time with the platform. Swipe or use the
              arrows to read each one.
            </p>
          </div>

          <div className="mt-11">
            <TestimonialSlider items={TESTIMONIALS} />
          </div>
        </div>
      </section>

      {/* ---- Themes ---- */}
      <section className="wrap py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-forest">What Comes Up</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
              What The Feedback Covers
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl leading-relaxed text-ink-muted">
              A few themes run through the notes above, and through the way the platform is built.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {THEMES.map((t, i) => (
              <Reveal key={t.title} delay={i * 90}>
                <article className="group flex h-full flex-col rounded-3xl border border-ink/[0.05] bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/15 hover:shadow-card">
                  <span
                    className={`grid size-11 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${t.chip}`}
                  >
                    <t.icon size={20} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[1.08rem] font-semibold text-ink">{t.title}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-muted">{t.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- How to read the reviews ---- */}
      <section className="wrap pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-5xl gap-10 rounded-[2rem] border border-ink/[0.05] bg-cream-deep/60 p-7 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-12">
          <div>
            <p className="eyebrow text-gold-deep">A Note On Reviews</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
              How To Read These Reviews
            </h2>
            <p className="mt-5 leading-relaxed text-ink-muted">
              A review is one person’s snapshot, not a forecast. The traders quoted here describe
              what stood out to them at a point in time. Your experience will depend on your own
              decisions, your settings and the market.
            </p>
          </div>

          <ul className="space-y-4 self-center">
            {READING_NOTES.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-forest"
                  aria-hidden="true"
                />
                <span className="text-[0.95rem] leading-relaxed text-ink-muted">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Share your experience ---- */}
      <section className="wrap pb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest via-pine to-pine-deep px-6 py-16 text-center sm:px-12 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_60%_90%_at_85%_-10%,rgba(239,184,92,0.28),transparent),radial-gradient(ellipse_50%_80%_at_0%_110%,rgba(232,244,239,0.14),transparent)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow justify-center text-gold">Your Turn</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-white sm:text-4xl">
              Used Keen Accruvance? Tell Us How It Went
            </h2>
            <p className="text-pretty mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-mint/80">
              We read every message. If something worked, say so. If something did not, say that
              too. Your note helps us make the platform clearer for the next person.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="mailto:support@keen-accruvance.com"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-[0.98rem] font-semibold text-pine shadow-[0_18px_35px_-14px_rgba(4,30,23,0.7)] transition-all hover:-translate-y-0.5 hover:bg-mint"
              >
                <Mail size={17} aria-hidden="true" />
                Send Your Feedback
              </a>
              <a
                href="/signup"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[0.98rem] font-semibold text-white ring-1 ring-inset ring-white/25 transition-all hover:bg-white/10 hover:ring-white/40"
              >
                Create Your Demo
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
