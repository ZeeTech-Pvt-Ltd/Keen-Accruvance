import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NotFoundPage from '@/components/NotFoundPage'

export const metadata = {
  title: 'Page Not Found | Keen Accruvance',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="relative">
      <Navbar />
      <main id="main" className="pt-[4.4rem] lg:pt-[4.8rem]">
        <NotFoundPage />
      </main>
      <Footer />
    </div>
  )
}
