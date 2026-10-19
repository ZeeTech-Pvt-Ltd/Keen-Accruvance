import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Stats from '@/components/Stats'
import SignupForm from '@/components/SignupForm'
import Features from '@/components/Features'
import DashboardShowcase from '@/components/DashboardShowcase'
import HowItWorks from '@/components/HowItWorks'
import About from '@/components/About'
import WhyKeen from '@/components/WhyKeen'
import Security from '@/components/Security'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import CTA from '@/components/CTA'
import { pageMetadata } from '@/metadata'
import { FAQ_SCHEMA } from '@/data/faqSchema'

export const metadata = pageMetadata({
  title: 'Keen Accruvance | AI Crypto Trading Platform & Signals',
  description:
    'AI-powered trading platform with real-time market intelligence, automated strategies and layered security. Explore Keen Accruvance with a free demo.',
  path: '/',
  canonical: 'https://keen-accruvance.com/',
})

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <Hero />
      <Ticker />
      <Stats />
      <SignupForm />
      <Features />
      <DashboardShowcase />
      <HowItWorks />
      <About />
      <WhyKeen />
      <Security />
      <Testimonials />
      <Faq />
      <CTA />
    </>
  )
}
