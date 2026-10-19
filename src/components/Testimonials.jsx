import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import TestimonialCard from './TestimonialCard.jsx'
import { TESTIMONIALS } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-28 lg:mt-36">
      <div className="wrap">
        <SectionHeading
          eyebrow="Testimonials"
          title="Traders Who Value Clarity"
          lead="From first timers to seasoned market watchers, here is how people describe their time on the platform."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/reviews"
            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.92rem] font-semibold text-forest ring-1 ring-inset ring-forest/25 transition-all hover:bg-forest/5 hover:ring-forest/40"
          >
            Read All Reviews
            <ArrowRight
              size={16}
              strokeWidth={2.4}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
