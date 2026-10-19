import { permanentRedirect } from 'next/navigation'

/* Legacy homepage alias. */
export default function Page() {
  permanentRedirect('/')
}
