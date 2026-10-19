import ThankYouPage from '@/components/ThankYouPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'Thank You | Keen Accruvance',
  description:
    'Your details were received. Here is what happens next with your Keen Accruvance demo account.',
  path: '/thank-you',
  noindex: true,
})

export default function Page() {
  return <ThankYouPage />
}
