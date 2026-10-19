import SignupPage from '@/components/SignupPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'Create Your Free Demo Account | Keen Accruvance',
  description:
    'Open a free demo account in a few minutes - two-factor authentication on from day one, no card or funding needed to explore the platform.',
  path: '/signup',
})

export default function Page() {
  return (
    <main id="main" className="min-h-screen">
      <SignupPage />
    </main>
  )
}
