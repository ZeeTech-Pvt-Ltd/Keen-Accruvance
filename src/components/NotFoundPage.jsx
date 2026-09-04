import { Sparkles, SearchX, Home } from 'lucide-react'
import Button from './Button.jsx'

export default function NotFoundPage() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-radial opacity-70" />
        <div className="absolute -top-32 right-[-10%] size-[28rem] animate-drift rounded-full bg-[radial-gradient(closest-side,rgba(232,244,239,0.9),transparent)]" />
        <div className="absolute bottom-[-14rem] left-[-10%] size-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,240,232,0.7),transparent)]" />
        <div className="absolute left-1/2 top-[-4rem] size-[20rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.14),transparent)] blur-2xl" />
      </div>

      <div className="wrap flex min-h-[68vh] items-center py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-xl text-center">
          <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-coral/10 text-coral">
            <SearchX size={30} strokeWidth={1.8} aria-hidden="true" />
          </span>

          <p className="eyebrow mt-7 justify-center text-forest">
            <Sparkles size={13} className="text-gold-deep" aria-hidden="true" />
            Error 404
          </p>

          <p className="font-display mt-4 text-[6rem] font-semibold leading-none tracking-tight text-ink sm:text-[8rem]">
            404
          </p>

          <h1 className="text-balance mt-2 text-3xl font-semibold leading-[1.08] text-ink sm:text-4xl">
            This page has gone off the charts
          </h1>
          <p className="text-pretty mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
            The page you’re looking for doesn’t exist, may have moved, or the link is
            out of date. Let’s get you back to solid ground.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" arrow>
              <Home size={17} aria-hidden="true" />
              Back to homepage
            </Button>
            <Button href="/contact" variant="ghost">
              Contact support
            </Button>
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted/60">
            keen-accruvance.com
          </p>
        </div>
      </div>
    </section>
  )
}
