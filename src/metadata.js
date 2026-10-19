export const SITE = 'https://keen-accruvance.com'
const OG_IMAGE = '/og.png'

/**
 * Per-route metadata for the App Router. Mirrors the previous seo.js map:
 * a unique title and description, a self-referencing canonical for indexable
 * pages, and no canonical at all on noindex pages (the two signals conflict).
 */
export function pageMetadata({ title, description, path, canonical, noindex = false }) {
  const url = SITE + path
  const meta = {
    title,
    description,
    openGraph: {
      type: 'website',
      siteName: 'Keen Accruvance',
      url,
      title,
      description,
      locale: 'en_US',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Keen Accruvance' }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@keenaccruvance',
      title,
      description,
      images: [OG_IMAGE],
    },
  }

  if (noindex) {
    meta.robots = { index: false, follow: false }
  } else {
    meta.alternates = { canonical: canonical || path }
  }

  return meta
}
