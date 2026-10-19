import { permanentRedirect } from 'next/navigation'

/* Homepage section deep-link, kept for old bookmarks and footer links. */
export default function Page() {
  permanentRedirect('/#why-invest')
}
