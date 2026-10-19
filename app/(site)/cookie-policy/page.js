import CookiePolicyPage from '@/components/CookiePolicyPage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'Cookie Policy | Keen Accruvance',
  description:
    'What cookies the Keen Accruvance website uses and how to control or delete them in your browser.',
  path: '/cookie-policy',
})

export default function Page() {
  return <CookiePolicyPage />
}
