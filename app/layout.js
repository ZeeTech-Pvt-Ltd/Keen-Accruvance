import '../src/index.css'

export const metadata = {
  metadataBase: new URL('https://keen-accruvance.com'),
  title: 'Keen Accruvance | AI Crypto Trading Platform & Signals',
  description:
    'AI-powered trading platform with real-time market intelligence, automated strategies and layered security. Explore Keen Accruvance with a free demo.',
  applicationName: 'Keen Accruvance',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Keen Accruvance',
    url: 'https://keen-accruvance.com/',
    title: 'Keen Accruvance | AI Crypto Trading Platform & Signals',
    description:
      'AI-powered trading platform with real-time market intelligence, automated strategies and layered security. Explore Keen Accruvance with a free demo.',
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Keen Accruvance' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@keenaccruvance',
    title: 'Keen Accruvance | AI Crypto Trading Platform & Signals',
    description:
      'AI-powered trading platform with real-time market intelligence, automated strategies and layered security. Explore Keen Accruvance with a free demo.',
    images: ['/og.png'],
  },
}

export const viewport = {
  themeColor: '#087A5B',
}

const ORGANIZATION_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://keen-accruvance.com/#organization',
  name: 'Keen Accruvance',
  url: 'https://keen-accruvance.com/',
  logo: 'https://keen-accruvance.com/favicon.svg',
  email: 'support@keen-accruvance.com',
  description:
    'AI-powered trading platform combining automated strategies, real-time market intelligence and security-focused infrastructure.',
}

const WEBSITE_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://keen-accruvance.com/#website',
  url: 'https://keen-accruvance.com/',
  name: 'Keen Accruvance',
  publisher: { '@id': 'https://keen-accruvance.com/#organization' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_LD) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
