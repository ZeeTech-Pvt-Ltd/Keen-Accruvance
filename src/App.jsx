import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Ticker from './components/Ticker.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import DashboardShowcase from './components/DashboardShowcase.jsx'
import WhyKeen from './components/WhyKeen.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Security from './components/Security.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import SignupForm from './components/SignupForm.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import PrivacyPage from './components/PrivacyPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import TermsPage from './components/TermsPage.jsx'
import RiskDisclosurePage from './components/RiskDisclosurePage.jsx'
import CookiePolicyPage from './components/CookiePolicyPage.jsx'
import DisclaimerPage from './components/DisclaimerPage.jsx'
import SignupPage from './components/SignupPage.jsx'
import ThankYouPage from './components/ThankYouPage.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

/* Real pages that render their own content */
const PAGES = {
  '/about': AboutPage,
  '/contact': ContactPage,
  '/privacy': PrivacyPage,
  '/terms': TermsPage,
  '/risk-disclosure': RiskDisclosurePage,
  '/cookie-policy': CookiePolicyPage,
  '/disclaimer': DisclaimerPage,
  '/signup': SignupPage,
  '/thank-you': ThankYouPage,
}

/* Pages that render bare — no Navbar/Footer chrome, only their own layout */
const BARE_ROUTES = new Set(['/signup'])

/* Homepage sections exposed as clean URLs, e.g. keen-accruvance.com/how-it-works */
const HOME_SECTIONS = new Set([
  'home',
  'signup',
  'how-it-works',
  'why-invest',
  'resources',
  'security',
  'testimonials',
  'features',
  'faq',
  'cta',
])

function currentPath() {
  return window.location.pathname || '/'
}

export default function App() {
  const [path, setPath] = useState(currentPath)

  /* Position the viewport for a given URL path. */
  function scrollForPath(p) {
    if (PAGES[p]) {
      window.scrollTo({ top: 0 })
      return
    }
    const id = p === '/' ? '' : p.slice(1)
    const el = id ? document.getElementById(id) : null
    if (el) el.scrollIntoView()
    else window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    /* Intercept internal links so navigation is instant and URLs stay clean
       (no "#hash" fragments) — /faq, /signup, /how-it-works, etc. */
    function onClick(e) {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = e.target && e.target.closest ? e.target.closest('a') : null
      if (!a) return
      if (a.target && a.target !== '_self') return

      const href = a.getAttribute('href') || ''
      if (!href || href === '#') return
      if (/^(https?:|mailto:|tel:|javascript:)/i.test(href)) return

      /* "#section" style links -> clean "/section" URL when it's a homepage
         section; otherwise it's an intra-page anchor, scroll quietly. */
      if (href.startsWith('#')) {
        const id = href.slice(1)
        if (HOME_SECTIONS.has(id)) {
          e.preventDefault()
          const next = `/${id}`
          if (next === window.location.pathname) {
            scrollForPath(next)
          } else {
            window.history.pushState({}, '', next)
            setPath(next)
          }
          return
        }
        const el = id ? document.getElementById(id) : null
        if (el) {
          e.preventDefault()
          el.scrollIntoView()
        }
        return
      }

      /* Absolute same-origin path, e.g. "/about" or "/home" */
      const url = new URL(a.href, window.location.origin)
      if (url.origin !== window.location.origin) return
      e.preventDefault()

      const next = url.pathname
      if (next === window.location.pathname) {
        scrollForPath(next)
        return
      }
      window.history.pushState({}, '', next)
      setPath(next)
    }

    /* Browser back / forward buttons */
    function onPop() {
      setPath(currentPath())
    }

    /* Programmatic navigation (used by LeadForm on successful submit) */
    function onNav(e) {
      if (typeof e.detail === 'string') setPath(e.detail)
    }

    document.addEventListener('click', onClick)
    window.addEventListener('popstate', onPop)
    window.addEventListener('ka:nav', onNav)
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('ka:nav', onNav)
    }
  }, [])

  /* Scroll when the URL path changes */
  useEffect(() => {
    scrollForPath(path)
  }, [path])

  /* Legacy "#/..." or "#section" bookmarks on first paint */
  useEffect(() => {
    if (PAGES[currentPath()]) return
    const h = window.location.hash
    const id = h ? h.slice(1) : ''
    if (id && document.getElementById(id)) document.getElementById(id).scrollIntoView()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Page = PAGES[path]
  const isHome = path === '/' || HOME_SECTIONS.has(path.startsWith('/') ? path.slice(1) : path)
  const bare = BARE_ROUTES.has(path)

  return (
    <div className="relative">
      {!bare && (
        <>
          {/* Skip link for keyboard users */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to content
          </a>

          {/* Same fixed Navbar chrome on every chrome view */}
          <Navbar />
        </>
      )}

      <main id="main" className={bare ? 'min-h-screen' : 'pt-[4.4rem] lg:pt-[4.8rem]'}>
        {Page ? (
          <Page />
        ) : isHome ? (
          <>
            <Hero />
            <Ticker />
            <Stats />
            <About />
            <SignupForm />
            <Features />
            <DashboardShowcase />
            <WhyKeen />
            <HowItWorks />
            <Security />
            <Testimonials />
            <Faq />
            <CTA />
          </>
        ) : (
          <NotFoundPage />
        )}
      </main>

      {!bare && <Footer />}
    </div>
  )
}
