import { useEffect, useState } from 'react'
import { Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react'
import Button from './Button.jsx'

function readSubmission() {
  try {
    const raw = sessionStorage.getItem('keen-form')
    return raw ? JSON.parse(raw) : null
  } catch (_) {
    return null
  }
}

export default function ThankYouPage() {
  const [sub, setSub] = useState(null)

  useEffect(() => {
    setSub(readSubmission())
  }, [])

  const name = sub && sub.firstName ? sub.firstName : ''
  const isContact = sub && sub.type === 'contact'
  const title = !sub
    ? 'Thanks for stopping by'
    : isContact
      ? 'Message sent — we’ll be in touch'
      : 'Your demo account is on its way'
  const eyebrow = !sub ? 'Welcome' : isContact ? 'Message received' : 'You’re all set'
  const body = !sub ? (
    <>
      Thanks for visiting Keen Accruvance! If you just signed up or sent us a message, your
      details are safely with us and we’ll follow up at the address you provided. Feel free to
      explore the platform in the meantime.
    </>
  ) : isContact ? (
    <>
      Thanks{name ? `, ${name}` : ''}! We’ve received your message and will reply to{' '}
      <span className="font-semibold text-forest">{sub.email}</span> within one business day.
      In the meantime, feel free to explore the platform.
    </>
  ) : (
    <>
      Thanks{name ? `, ${name}` : ''}! We’ve sent a confirmation link to{' '}
      <span className="font-semibold text-forest">{sub.email}</span>. Follow it to finish setting
      up your free demo account — no card required, demo funds only.
    </>
  )

  return (
    <>
      {/* ---- Header ---- */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-radial opacity-70" />
          <div className="absolute -top-32 right-[-12%] size-[32rem] animate-drift rounded-full bg-[radial-gradient(closest-side,rgba(232,244,239,0.9),transparent)]" />
          <div className="absolute bottom-[-16rem] left-[-10%] size-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,240,232,0.7),transparent)]" />
          <div className="absolute left-1/2 top-[-6rem] size-[24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.16),transparent)] blur-2xl" />
        </div>

        <div className="wrap py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-forest/10 text-forest">
              <CheckCircle2 size={30} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <p className="eyebrow mt-7 justify-center text-forest">
              <Sparkles size={13} className="text-gold-deep" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
              {title}
            </h1>
            <p className="text-pretty mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              {body}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/">Back to homepage</Button>
              <Button href="/how-it-works" variant="ghost">
                See how it works
              </Button>
            </div>

            <p className="mt-8 flex items-center justify-center gap-1.5 text-[0.78rem] text-ink-muted/70">
              <ShieldCheck size={14} className="text-forest" aria-hidden="true" />
              Your details are encrypted and never shared.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
