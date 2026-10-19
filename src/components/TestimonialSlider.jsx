'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard.jsx'

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Scroll-snap review slider.
 * One card per view on phones, two from `sm` up. Arrows, dots, swipe and the
 * left/right arrow keys all drive the same scroll position, so there is no
 * second source of truth to keep in sync.
 */
export default function TestimonialSlider({ items }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(1)

  const maxIndex = Math.max(0, items.length - perView)

  /* Distance from one card to the next, including the flex gap. */
  const step = useCallback(() => {
    const track = trackRef.current
    const card = track && track.firstElementChild
    if (!track || !card) return 0
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    return card.getBoundingClientRect().width + gap
  }, [])

  /* How many cards fit in the viewport right now. */
  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return 1
    const s = step()
    return s > 0 ? Math.max(1, Math.round(track.clientWidth / s)) : 1
  }, [step])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const update = () => {
      const next = measure()
      setPerView(next)
      setIndex((i) => Math.min(i, Math.max(0, items.length - next)))
    }

    update()
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', update)
      return () => window.removeEventListener('resize', update)
    }
    const ro = new ResizeObserver(update)
    ro.observe(track)
    return () => ro.disconnect()
  }, [items.length, measure])

  function goTo(next) {
    const track = trackRef.current
    if (!track) return
    const target = Math.max(0, Math.min(next, maxIndex)) * step()
    track.scrollTo({ left: target, behavior: reducedMotion() ? 'auto' : 'smooth' })
  }

  function onScroll() {
    const track = trackRef.current
    if (!track) return
    const s = step()
    if (s <= 0) return
    const next = Math.max(0, Math.min(maxIndex, Math.round(track.scrollLeft / s)))
    setIndex(next)
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goTo(index - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      goTo(index + 1)
    }
  }

  const atStart = index <= 0
  const atEnd = index >= maxIndex

  return (
    <div>
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer reviews"
        tabIndex={0}
        onScroll={onScroll}
        onKeyDown={onKeyDown}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((t, i) => (
          <div
            key={t.name}
            role="group"
            aria-roledescription="slide"
            aria-label={`Review ${i + 1} of ${items.length}`}
            className="w-full shrink-0 snap-start sm:w-[calc(50%-0.75rem)]"
          >
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" aria-label="Choose a review">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-7 bg-forest' : 'w-2 bg-ink/15 hover:bg-ink/30'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={atStart}
            aria-label="Previous reviews"
            className="grid size-10 place-items-center rounded-full border border-ink/10 bg-paper text-ink transition-all hover:border-forest/30 hover:text-forest disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-ink/10 disabled:hover:text-ink"
          >
            <ChevronLeft size={18} strokeWidth={2.2} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={atEnd}
            aria-label="Next reviews"
            className="grid size-10 place-items-center rounded-full border border-ink/10 bg-paper text-ink transition-all hover:border-forest/30 hover:text-forest disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-ink/10 disabled:hover:text-ink"
          >
            <ChevronRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
