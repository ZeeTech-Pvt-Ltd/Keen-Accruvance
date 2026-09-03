import { ArrowLeft } from 'lucide-react'
import Logo from './Logo.jsx'
import LeadForm from './LeadForm.jsx'

/**
 * Minimal, standalone sign-up page: just the Keen Accruvance logo and the same
 * lead form used on the homepage. Rendered without the Navbar/Footer chrome.
 */
export default function SignupPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* décor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid mask-fade-radial opacity-70" />
        <div className="absolute -top-40 right-[-16%] size-[36rem] animate-drift rounded-full bg-[radial-gradient(closest-side,rgba(232,244,239,0.9),transparent)]" />
        <div className="absolute bottom-[-18rem] left-[-14%] size-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,240,232,0.7),transparent)]" />
        <div className="absolute left-1/2 top-[-8rem] size-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(239,184,92,0.14),transparent)] blur-2xl" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-5 py-12 sm:py-16">
        <Logo />

        <div className="mt-8 w-full max-w-md">
          <LeadForm
            heading="Create your account"
            badge="Free · Demo"
            submitLabel="Create my account"
            variant="signup"
          />
        </div>

        <a
          href="/"
          className="group mt-8 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-ink-muted transition-colors hover:text-forest"
        >
          <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
          Back to homepage
        </a>
      </div>
    </section>
  )
}
