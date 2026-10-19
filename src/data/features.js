import { BrainCircuit, Workflow, ShieldCheck } from 'lucide-react'

/* Shared by the homepage Features section and the /features page. */
export const FEATURES = [
  {
    id: '01',
    title: 'AI-Powered Intelligence',
    body: 'Keen Accruvance’s models continuously analyse price action, order flow and market context to help surface opportunities - and explain them in plain language, so you stay informed rather than overwhelmed.',
    bullets: [
      'Pattern and momentum detection across major assets',
      'Signals with readable reasoning, not black boxes',
      'Adaptive models tuned for fast-moving markets',
    ],
    featured: true,
    icon: BrainCircuit,
  },
  {
    id: '02',
    title: 'Automated Trading',
    body: 'Turn a strategy into a system. Configure your rules and risk preferences once, and let real-time automation handle execution around the clock - while you stay in control at every step.',
    bullets: [
      'Strategy builder with defined risk parameters',
      'Real-time order execution the moment conditions align',
      'Runs 24/7 - no screen-watching required',
    ],
    featured: false,
    icon: Workflow,
  },
  {
    id: '03',
    title: 'Advanced Security',
    body: 'Security is engineered into the platform, not bolted on. From encryption to layered account protection, your data and funds are safeguarded by defence-in-depth infrastructure.',
    bullets: [
      'Encryption in transit and at rest',
      'Two-factor authentication and device controls',
      'Continuous monitoring for unusual account activity',
    ],
    featured: false,
    icon: ShieldCheck,
  },
]
