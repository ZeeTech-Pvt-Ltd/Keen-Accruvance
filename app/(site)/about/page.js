import AboutPage from '@/components/AboutPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'About Keen Accruvance | The Team Behind the AI Platform',
  description:
    'Keen Accruvance pairs AI-driven automation with real-time market intelligence and a security-first mindset - built to make trading calmer and clearer.',
  path: '/about',
})

export default function Page() {
  return <AboutPage />
}
