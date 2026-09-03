import { Sparkles } from 'lucide-react'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

export default function CTA() {
  return (
    <section id="cta" className="mt-28 scroll-mt-24 pb-20 lg:mt-36 lg:pb-28">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#064735] via-forest to-pine-deep px-6 py-20 text-center sm:px-12 lg:py-24">
            {/* décor */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-grid-dark opacity-40" />
              <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <div className="absolute -left-24 -top-24 size-80 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.14),transparent)] blur-2xl" />
              <div className="absolute -bottom-28 -right-20 size-96 rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.2),transparent)] blur-2xl" />
              {/* floating tickers */}
              <span className="absolute left-[8%] top-[22%] hidden animate-float rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-md lg:block">
                <span className="tnum block text-[0.7rem] font-semibold text-gold">BTC +2.4%</span>
              </span>
              <span
                className="absolute right-[9%] top-[34%] hidden animate-float-slow rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-md lg:block"
                style={{ animationDelay: '1.2s' }}
              >
                <span className="block text-[0.7rem] font-semibold text-mint">ETH · AI signal 92</span>
              </span>
            </div>

            <div className="relative mx-auto max-w-3xl">
              <p className="eyebrow justify-center text-mint [&::before]:hidden">
                <Sparkles size={13} className="text-gold" aria-hidden="true" />
                <span aria-hidden="true" className="inline-block h-1 w-1 rotate-45 bg-gold" />
                Your next move, guided by AI
              </p>
              <h2 className="text-balance mt-6 text-3xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-[3.4rem]">
                Ready to Trade Smarter?
              </h2>
              <p className="text-pretty mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mint/85 sm:text-lg">
                Explore a smarter way to understand and manage the markets with AI-powered
                technology — built for clarity, built for control, built around you.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/signup" variant="light" size="lg" arrow>
                  Get Started
                </Button>
                <Button href="/contact" variant="outline-light" size="lg">
                  Talk to us
                </Button>
              </div>

              <p className="mt-8 text-[0.82rem] text-mint/70">
                Explore the full platform with a demo view — before you trade, see how it feels.
              </p>
              <p className="mt-3 text-[0.68rem] leading-relaxed text-mint/45">
                Trading involves risk and may not be suitable for all investors. By getting
                started you agree to our{' '}
                <a href="/terms" className="font-medium text-mint/70 underline decoration-forest/40 underline-offset-2 transition-colors hover:text-white hover:decoration-gold">
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href="/risk-disclosure" className="font-medium text-mint/70 underline decoration-forest/40 underline-offset-2 transition-colors hover:text-white hover:decoration-gold">
                  Risk Disclosure
                </a>.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
