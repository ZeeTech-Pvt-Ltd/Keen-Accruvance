import HowItWorksPage from '@/components/HowItWorksPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'How Keen Accruvance Works - 3 Steps to Your First Strategy',
  description:
    'From sign-up to strategy in three simple steps. Create your free demo account, configure an AI strategy and manage every trade from one calm dashboard.',
  path: '/how-it-works',
})

export default function Page() {
  return <HowItWorksPage />
}
