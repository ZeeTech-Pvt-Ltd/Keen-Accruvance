import { Quote, Star } from 'lucide-react'

/** Five stars, clipped to the review's rating so halves render correctly. */
function Stars({ rating }) {
  return (
    <div className="mt-4 flex items-center gap-2">
      <div className="flex gap-1" role="img" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => {
          const fill = Math.max(0, Math.min(1, rating - i))
          return (
            <span key={i} className="relative inline-block size-[15px]">
              <Star
                size={15}
                strokeWidth={0}
                className="absolute left-0 top-0 fill-ink/10 text-ink/10"
                aria-hidden="true"
              />
              {fill > 0 && (
                <span
                  className="absolute left-0 top-0 h-[15px] overflow-hidden"
                  style={{ width: `${fill * 15}px` }}
                >
                  <Star
                    size={15}
                    strokeWidth={0}
                    className="fill-gold text-gold"
                    aria-hidden="true"
                  />
                </span>
              )}
            </span>
          )
        })}
      </div>
      <span className="font-mono text-[0.72rem] font-medium text-ink-muted">
        {rating.toFixed(1)}
      </span>
    </div>
  )
}

/** One review card. Shared by the homepage grid and the /reviews slider. */
export default function TestimonialCard({ t, className = '' }) {
  return (
    <figure
      className={`group relative flex h-full flex-col rounded-3xl border border-ink/[0.05] bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest/15 hover:shadow-card sm:p-8 ${className}`}
    >
      <Quote
        size={34}
        className="text-forest/[0.14] transition-colors duration-300 group-hover:text-forest/25"
        aria-hidden="true"
      />
      <Stars rating={t.rating} />
      <blockquote className="mt-4 flex-1">
        <p className="text-[0.97rem] leading-relaxed text-ink-muted">“{t.quote}”</p>
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/[0.05] pt-5">
        {t.avatar ? (
          <img
            src={t.avatar}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            className="size-10 shrink-0 rounded-full object-cover ring-2 ring-white"
          />
        ) : (
          <span
            className={`grid size-10 place-items-center rounded-full font-display text-[0.8rem] font-bold ${t.tint}`}
            aria-hidden="true"
          >
            {t.initials}
          </span>
        )}
        <span>
          <span className="block font-display text-[0.92rem] font-semibold text-ink">{t.name}</span>
          <span className="block text-[0.78rem] text-ink-muted/90">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}
