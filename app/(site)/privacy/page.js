import PrivacyPage from '@/components/PrivacyPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'Privacy Policy | Keen Accruvance',
  description:
    'How Keen Accruvance collects, uses and protects your personal information, in line with Australian privacy principles.',
  path: '/privacy',
})

export default function Page() {
  return <PrivacyPage />
}
