import FeaturesPage from '@/components/FeaturesPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'Keen Accruvance Features | AI Signals & Automation',
  description:
    'Explore the Keen Accruvance features: AI signals with clear reasoning, automated strategies, risk controls and layered security. Start your free demo.',
  path: '/features',
})

export default function Page() {
  return <FeaturesPage />
}
