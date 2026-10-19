import TermsPage from '@/components/TermsPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'Terms & Conditions | Keen Accruvance',
  description: 'The terms that govern your use of the Keen Accruvance website, platform and services.',
  path: '/terms',
})

export default function Page() {
  return <TermsPage />
}
