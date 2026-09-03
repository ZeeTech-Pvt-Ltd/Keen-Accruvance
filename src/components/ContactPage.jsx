import { Mail, Clock3, Globe2, Sparkles, ShieldCheck } from 'lucide-react'
import LeadForm from './LeadForm.jsx'

const WAYS = [
  {
    icon: Mail,
    title: 'Email us',
    body: 'support@keen-accruvance.com — for account help, platform questions or anything else.',
    href: 'mailto:support@keen-accruvance.com',
  },
  {
    icon: Clock3,
    title: 'Fast replies',
    body: 'Our team responds to every message within one business day, 7 days a week.',
  },
  {
    icon: Globe2,
    title: 'Here for you worldwide',
    body: 'Headquartered in Australia, supporting traders across 98+ countries.',
  },
]

export default function ContactPage() {
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

        <div className="wrap py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center text-forest">
              <Sparkles size={13} className="text-gold-deep" aria-hidden="true" />
              Contact us
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
              Talk to a real person —{' '}
              <span className="italic text-forest">we reply fast.</span>
            </h1>
            <p className="text-pretty mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Questions about your account, the platform or anything in between? Drop us a
              message and a member of the Keen Accruvance team will get straight back to you.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Contact info + form ---- */}
      <section className="wrap mt-4 pb-20 sm:mt-10 lg:mt-16 lg:pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Ways to reach us */}
          <div>
            <p className="eyebrow text-gold-deep">Get in touch</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
              We’re here when you need us
            </h2>

            <div className="mt-8 space-y-4">
              {WAYS.map((w) => {
                const Wrapper = w.href ? 'a' : 'div'
                return (
                  <Wrapper
                    key={w.title}
                    {...(w.href ? { href: w.href } : {})}
                    className="group flex items-start gap-4 rounded-2xl border border-ink/[0.05] bg-paper p-5 shadow-[0_1px_2px_rgba(16,24,23,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/15 hover:shadow-card sm:p-6"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-forest/10 text-forest transition-transform duration-300 group-hover:scale-105">
                      <w.icon size={20} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[1.02rem] font-semibold text-ink">{w.title}</span>
                      <span className="mt-1 block text-[0.92rem] leading-relaxed text-ink-muted">{w.body}</span>
                    </span>
                  </Wrapper>
                )
              })}
            </div>

            <div className="mt-6 flex items-center gap-2.5 rounded-2xl border border-forest/10 bg-mint/50 px-5 py-4 text-[0.85rem] leading-relaxed text-pine">
              <ShieldCheck size={18} className="shrink-0 text-forest" aria-hidden="true" />
              Your message stays private — we never share your details with third parties.
            </div>
          </div>

          {/* Same lead form as the homepage signup section */}
          <LeadForm
            variant="contact"
            heading="Send us a message"
            badge="Replies in 24h"
            submitLabel="Send message"
          />
        </div>
      </section>
    </>
  )
}
