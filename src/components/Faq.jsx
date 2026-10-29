'use client'

import { useState } from 'react'
import { Plus, MessageCircleQuestion } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { FAQS } from '../data/faqs.js'

function Item({ q, a, open, onToggle, id }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-paper transition-all duration-300 ${
        open ? 'border-forest/20 shadow-card' : 'border-ink/[0.06] hover:border-ink/[0.14]'
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          id={`faq-btn-${id}`}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-[1.02rem] font-semibold text-ink">{q}</span>
          <span
            className={`grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
              open ? 'rotate-45 bg-forest text-white' : 'bg-forest/8 text-forest'
            }`}
          >
            <Plus size={16} strokeWidth={2.4} aria-hidden="true" />
          </span>
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-ink-muted">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(-1)

  return (
    <section id="faq" className="mt-28 scroll-mt-24 lg:mt-36">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        {/* Left rail */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions, Answered Plainly"
            lead="Everything you might want to know before getting started. If it is not here, our team is one message away."
          />
          <Reveal delay={140}>
            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-ink/[0.05] bg-paper p-5 shadow-sm">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mint text-pine">
                <MessageCircleQuestion size={20} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <p className="text-sm leading-snug text-ink-muted">
                <span className="font-semibold text-ink">Still curious?</span>{' '}
                <a
                  href="/contact"
                  className="font-medium text-forest underline-offset-4 hover:underline"
                >
                  Contact our support team
                </a>{' '}
                - we reply within a day.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3.5">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <Item
                q={f.q}
                a={f.a}
                id={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
