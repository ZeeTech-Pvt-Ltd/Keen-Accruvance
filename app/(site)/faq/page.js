import Faq from '@/components/Faq'
import { pageMetadata } from '@/metadata'
import { FAQ_SCHEMA } from '@/data/faqSchema'

export const metadata = pageMetadata({
  title: 'Keen Accruvance FAQ - AI Trading Questions, Answered',
  description:
    'What is Keen Accruvance? Do AI signals work? Is my account safe? Plain answers to the questions traders ask before they start.',
  path: '/faq',
})

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <section className="wrap pt-14 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-forest">FAQ</p>
          <h1 className="text-balance mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-pretty mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Plain answers to the questions people ask before they start. If yours is not here,
            our team is one message away.
          </p>
        </div>
      </section>

      <Faq />

      <div className="pb-20" />
    </>
  )
}
