import DisclaimerPage from '@/components/DisclaimerPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'Disclaimer | Keen Accruvance',
  description:
    'Nothing on this site is financial advice. Read the Keen Accruvance disclaimer on demo data, past performance and your responsibility.',
  path: '/disclaimer',
})

export default function Page() {
  return <DisclaimerPage />
}
