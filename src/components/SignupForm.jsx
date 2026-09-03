import { Sparkles, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal.jsx'
import LeadForm from './LeadForm.jsx'

const PERKS = [
  'Protected by two-factor authentication from the moment you sign up',
  'AI signals and automated strategies included from day one',
  'Full demo view — explore the platform before you ever fund it',
]

export default function SignupForm() {
  return (
    <section id="signup" className="relative mt-28 scroll-mt-24 lg:mt-36">
      {/* décor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-10 size-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,240,232,0.7),transparent)] blur-2xl" />
        <div className="absolute bottom-0 right-[-8rem] size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(232,244,239,0.9),transparent)] blur-2xl" />
      </div>

      <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Pitch */}
        <Reveal>
          <div className="max-w-xl">
            <p className="eyebrow text-forest">
              <Sparkles size={13} className="text-gold-deep" aria-hidden="true" />
              Get started
            </p>
            <h2 className="text-balance mt-5 text-[2.1rem] font-semibold leading-[1.06] text-ink sm:text-5xl sm:leading-[1.03] lg:text-[3rem]">
              Open your account —{' '}
              <span className="italic text-forest">in a few minutes.</span>
            </h2>
            <p className="text-pretty mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Opening an account takes only a few minutes. Tell us who you are, and
              your secure dashboard — with two-factor authentication switched on from
              the start — is ready to explore in demo mode.
            </p>

            <ul className="mt-8 space-y-3.5">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[0.95rem] leading-snug text-ink-muted">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex items-center gap-4 border-t border-ink/[0.06] pt-7 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-muted">
              <span className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-full bg-forest/10 text-forest">✓</span>
                Encrypted signup
              </span>
              <span className="flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-full bg-forest/10 text-forest">✓</span>
                No deposit needed
              </span>
            </div>
          </div>
        </Reveal>

        {/* Form card */}
        <Reveal delay={120}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  )
}
