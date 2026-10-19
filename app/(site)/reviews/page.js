import ReviewsPage from '@/components/ReviewsPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'Keen Accruvance Reviews | What Traders Say',
  description:
    'See what traders say about Keen Accruvance: clear signals, simple automation and support that replies. Read the reviews and start your demo.',
  path: '/reviews',
})

export default function Page() {
  return <ReviewsPage />
}
