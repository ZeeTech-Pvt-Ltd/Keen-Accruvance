import ContactPage from '@/components/ContactPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'Contact Keen Accruvance - We Reply Within a Day',
  description:
    'Questions about the platform, your account or risk? Message the Keen Accruvance support team - we respond within a day.',
  path: '/contact',
})

export default function Page() {
  return <ContactPage />
}
