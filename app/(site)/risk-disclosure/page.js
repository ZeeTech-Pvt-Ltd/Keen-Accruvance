import RiskDisclosurePage from '@/components/RiskDisclosurePage'
import { pageMetadata } from '@/metadata'

export const metadata = pageMetadata({
  title: 'Risk Disclosure | Keen Accruvance',
  description:
    'Understand the risks of trading digital assets before you start - volatility, leverage, automation limits and why past performance never guarantees results.',
  path: '/risk-disclosure',
})

export default function Page() {
  return <RiskDisclosurePage />
}
