import { Server, Lock, KeyRound, Radar, ShieldCheck, ScanFace } from 'lucide-react'
import Reveal from './Reveal.jsx'

const LAYERS = [
  {
    icon: Server,
    title: 'Secure Infrastructure',
    body: 'Resilient, multi-region infrastructure with least-privilege access and constant hardening.',
  },
  {
    icon: Lock,
    title: 'Data Protection',
    body: 'Industry-standard encryption keeps your data safe in transit and at rest.',
  },
  {
    icon: KeyRound,
    title: 'Account Security',
    body: 'Two-factor authentication and device controls guard every sign-in and withdrawal.',
  },
  {
    icon: ScanFace,
    title: 'Real-Time Monitoring',
    body: 'Around-the-clock anomaly detection flags unusual activity the moment it appears.',
  },
]

function Visual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[25rem]">
      {/* concentric rings */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 rounded-full border border-white/[0.07]" />
        <div className="absolute inset-[12%] rounded-full border border-white/[0.09]" />
        <div className="absolute inset-[24%] rounded-full border border-dashed border-white/[0.12]" />
        <div className="absolute inset-[36%] rounded-full border border-white/[0.1]" />
        {/* scanning arc */}
        <div className="absolute inset-[6%] rounded-full bg-[conic-gradient(from_120deg,transparent_0deg,rgba(239,184,92,0.25)_70deg,transparent_110deg)]" />
      </div>

      {/* soft glow */}
      <div
        aria-hidden="true"
        className="absolute inset-[18%] rounded-full bg-[radial-gradient(closest-side,rgba(14,143,108,0.5),transparent)] blur-xl"
      />

      {/* center shield */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full border border-gold/50" />
        <span aria-hidden="true" className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full border border-gold/40" style={{ animationDelay: '1.2s' }} />
        <div className="relative grid size-24 place-items-center rounded-[1.75rem] border border-white/20 bg-white/[0.08] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <ShieldCheck size={44} strokeWidth={1.5} className="text-mint" aria-hidden="true" />
          <span className="absolute right-2 top-2 size-2.5 rounded-full bg-gold" />
        </div>
      </div>

      {/* orbiting capability chips */}
      <div className="absolute left-0 top-[18%] animate-float rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-md">
        <p className="tnum text-[0.72rem] font-semibold uppercase tracking-wider text-gold">AES-256</p>
        <p className="text-[0.7rem] text-mint/70">encryption at rest</p>
      </div>
      <div
        className="absolute right-0 top-[42%] animate-float-slow rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-right backdrop-blur-md"
        style={{ animationDelay: '0.8s' }}
      >
        <p className="text-[0.72rem] font-semibold text-mint">Two-factor auth</p>
        <p className="tnum text-[0.7rem] text-gold/90">always-on protection</p>
      </div>
      <div
        className="absolute bottom-[8%] left-[10%] animate-float-slower rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-md"
        style={{ animationDelay: '1.6s' }}
      >
        <p className="flex items-center gap-2 text-[0.72rem] font-semibold text-mint">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-forest-soft" />
          </span>
          24/7 monitoring
        </p>
      </div>
      <div
        className="absolute bottom-[22%] right-[6%] animate-float rounded-full border border-white/10 bg-white/[0.06] p-3 backdrop-blur-md"
        style={{ animationDelay: '0.4s' }}
      >
        <Radar size={18} className="text-gold" aria-hidden="true" />
      </div>
    </div>
  )
}

export default function Security() {
  return (
    <section id="security" className="mt-28 scroll-mt-24 lg:mt-36">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#052b21] via-pine to-forest px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            {/* décor */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-grid-dark opacity-50" />
              <div className="absolute -left-32 -top-32 size-96 rounded-full bg-[radial-gradient(closest-side,rgba(14,143,108,0.4),transparent)] blur-2xl" />
              <div className="absolute -bottom-40 -right-24 size-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.12),transparent)] blur-2xl" />
            </div>

            <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
              <div>
                <p className="eyebrow text-mint">
                  <Lock size={13} strokeWidth={1.9} aria-hidden="true" />
                  Security
                </p>
                <h2 className="text-balance mt-5 text-3xl font-bold leading-[1.08] text-white sm:text-4xl lg:text-[2.8rem]">
                  Security at Every Step
                </h2>
                <p className="text-pretty mt-5 max-w-xl text-base leading-relaxed text-mint/80 sm:text-lg">
                  Your account, data and funds sit behind layered, defence-in-depth
                  protection — engineered in from the first line of code and monitored
                  continuously after.
                </p>

                <dl className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                  {LAYERS.map((l, i) => (
                    <Reveal as="div" key={l.title} delay={i * 90} className="flex items-start gap-3.5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.07] text-mint">
                        <l.icon size={18} strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <div>
                        <dt className="font-display text-[0.98rem] font-semibold text-white">{l.title}</dt>
                        <dd className="mt-1 text-[0.86rem] leading-relaxed text-mint/70">{l.body}</dd>
                      </div>
                    </Reveal>
                  ))}
                </dl>
              </div>

              <Reveal delay={140}>
                <Visual />
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
