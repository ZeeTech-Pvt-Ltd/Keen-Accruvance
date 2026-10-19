import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SiteLayout({ children }) {
  return (
    <div className="relative">
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="pt-[4.4rem] lg:pt-[4.8rem]">
        {children}
      </main>

      <Footer />
    </div>
  )
}
