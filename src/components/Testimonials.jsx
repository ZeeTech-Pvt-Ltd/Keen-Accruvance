import { Quote, Star } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const ITEMS = [
  {
    quote:
      'I’ve tried a few platforms, and Keen Accruvance is the first where the AI insights actually made sense to me. It flags what’s moving and explains why — I finally feel informed rather than busy.',
    name: 'Sarah Mitchell',
    role: 'Independent trader · United Kingdom',
    initials: 'SM',
    tint: 'bg-forest/10 text-forest',
  },
  {
    quote:
      'Automation took the pressure off sitting in front of charts all day. I set my risk limits once, and the dashboard keeps everything transparent whenever I check in.',
    name: 'Daniel Okafor',
    role: 'Business owner · Nigeria',
    initials: 'DO',
    tint: 'bg-peach text-coral-hover',
  },
  {
    quote:
      'New to crypto, the guided onboarding and clean interface made it genuinely approachable. Support responds quickly, and the security tools gave me real peace of mind.',
    name: 'Priya Sharma',
    role: 'Product designer · India',
    initials: 'PS',
    tint: 'bg-gold/15 text-gold-deep',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-28 lg:mt-36">
      <div className="wrap">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by traders who value clarity"
          lead="From first-time explorers to seasoned market watchers — a glimpse of how traders experience the platform."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="group relative flex h-full flex-col rounded-3xl border border-ink/[0.05] bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest/15 hover:shadow-card sm:p-8">
                <Quote
                  size={34}
                  className="text-forest/[0.14] transition-colors duration-300 group-hover:text-forest/25"
                  aria-hidden="true"
                />
                <div className="mt-4 flex gap-1" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={15}
                      className="fill-gold text-gold"
                      strokeWidth={0}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1">
                  <p className="text-[0.97rem] leading-relaxed text-ink-muted">“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/[0.05] pt-5">
                  <span
                    className={`grid size-10 place-items-center rounded-full font-display text-[0.8rem] font-bold ${t.tint}`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-display text-[0.92rem] font-semibold text-ink">{t.name}</span>
                    <span className="block text-[0.78rem] text-ink-muted/90">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[0.72rem] text-ink-muted/70">
          Testimonials reflect individual experiences with the platform and are provided for
          illustration only — they are not a guarantee of any future outcome.
        </p>
      </div>
    </section>
  )
}
