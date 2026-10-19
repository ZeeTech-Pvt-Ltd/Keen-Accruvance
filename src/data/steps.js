import { UserPlus, SlidersHorizontal, MonitorCog } from 'lucide-react'

/* Shared by the homepage How It Works section and the /how-it-works page. */
export const STEPS = [
  {
    n: '01',
    label: 'Step one',
    icon: UserPlus,
    title: 'Create Your Account',
    body: 'Sign up in minutes with just an email or phone number. Complete secure verification, enable two-factor authentication, and you are ready to explore.',
    bullets: ['Email or phone sign-up', 'Secure 2FA verification'],
    chip: '≈ 2 minutes',
  },
  {
    n: '02',
    label: 'Step two',
    icon: SlidersHorizontal,
    title: 'Configure Your Strategy',
    body: 'Follow ready-made AI strategies, build your own from clear templates, or blend the two. Set your risk limits and let the platform take it from there.',
    bullets: ['AI-assisted strategy builder', 'Custom risk controls'],
    chip: 'No code required',
  },
  {
    n: '03',
    label: 'Step three',
    icon: MonitorCog,
    title: 'Monitor & Manage Your Trades',
    body: 'Watch everything in one calm dashboard. Pause, adjust or stop any strategy at any time - full control stays with you, around the clock.',
    bullets: ['Live portfolio overview', 'Pause or stop anytime'],
    chip: '24/7 control',
  },
]
