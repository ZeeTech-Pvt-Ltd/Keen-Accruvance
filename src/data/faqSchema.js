import { FAQS } from './faqs.js'

/* FAQPage structured data, generated from the visible FAQ so the two never
   drift. Injected on the homepage and on /faq. */
export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}
