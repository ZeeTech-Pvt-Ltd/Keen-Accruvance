const SECTIONS = [
  {
    n: '01',
    title: 'Introduction',
    body: [
      'This Privacy Policy explains how Keen Accruvance (“we”, “us”) collects, uses, stores and protects your personal information when you visit this website or use our trading technology platform.',
      'We are committed to handling your data transparently and securely, in line with the Australian Privacy Principles under the Privacy Act 1988 (Cth). By continuing to use the site you agree to the practices described here.',
    ],
  },
  {
    n: '02',
    title: 'Information we collect',
    body: [
      'Account details — your name, email address, phone number and country when you sign up or request access.',
      'Usage information — pages you view, device and browser type, approximate location and how you interact with the platform, collected to improve our services.',
      'Communications — anything you send us through our contact channels or when you report a problem.',
      'Please do not enter real payment card details, government ID numbers or other sensitive financial information anywhere on this demo site unless you are explicitly asked to do so.',
    ],
  },
  {
    n: '03',
    title: 'How we use your information',
    body: [
      'To create and manage your account, verify your identity and keep your account secure with two-factor authentication.',
      'To operate, maintain and improve the platform, including monitoring for fraudulent or suspicious activity.',
      'To send you service updates, security notices and, where you have agreed, product information you can unsubscribe from at any time.',
      'To meet our legal and regulatory obligations, including anti-money-laundering requirements where they apply.',
    ],
  },
  {
    n: '04',
    title: 'Sharing and disclosure',
    body: [
      'We do not sell your personal information. We only share it with trusted service providers who help us run the platform (such as email and infrastructure providers) and who are bound by confidentiality obligations.',
      'We may disclose information where required or permitted by law, or to protect the rights, property or safety of our users and the public.',
    ],
  },
  {
    n: '05',
    title: 'Data security and retention',
    body: [
      'We apply encryption in transit and at rest, role-based access controls and two-factor authentication to help protect your information.',
      'We keep personal information only for as long as needed to provide our services and meet legal obligations, and we delete or de-identify it when it is no longer required.',
      'No method of transmission over the internet is completely secure. While we work hard to protect your data, we cannot guarantee absolute security.',
    ],
  },
  {
    n: '06',
    title: 'Cookies and analytics',
    body: [
      'We use cookies and similar technologies to keep the site secure, remember your preferences and understand how the platform is used.',
      'You can control or delete cookies through your browser settings. Disabling some cookies may affect how the site functions.',
    ],
  },
  {
    n: '07',
    title: 'Your rights and choices',
    body: [
      'You may request access to, or correction of, the personal information we hold about you at any time. You can also ask us to delete your account and data.',
      'To make a request, email us at support@keen-accruvance.com. We will respond within a reasonable time and, where required, within 30 days.',
    ],
  },
  {
    n: '08',
    title: 'International transfers',
    body: [
      'As an Australian-based service, some of the service providers we use may process data in other countries. Where this happens we take reasonable steps to ensure your information is handled to a standard comparable to Australian law.',
    ],
  },
  {
    n: '09',
    title: 'Children’s privacy',
    body: [
      'Our platform is not directed to anyone under 18 and we do not knowingly collect personal information from children. If you believe a child has provided us with information, please contact us so we can remove it.',
    ],
  },
  {
    n: '10',
    title: 'Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. When we make material changes we will update the date below and, where appropriate, notify you by email or through the platform.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="wrap py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-forest">Legal</p>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">
          Last updated · {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-pretty mt-6 text-base leading-relaxed text-ink-muted">
          Keen Accruvance provides AI-assisted trading technology. This policy describes what we do with
          the personal information you share with us. Trading digital assets involves risk, and this page
          relates only to how we handle your data — it is not financial advice.
        </p>

        <div className="mt-12">
          {SECTIONS.map((s) => (
            <section key={s.n} className="grid gap-3 border-t border-ink/[0.07] py-8 sm:grid-cols-[4.5rem_1fr]">
              <span className="font-mono text-[0.78rem] font-medium text-gold-deep">{s.n}</span>
              <div>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-forest/15 bg-mint/50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-pine">Contact us</h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
            Questions about this policy or your data? Email{' '}
            <a href="mailto:support@keen-accruvance.com" className="font-semibold text-forest underline decoration-forest/30 underline-offset-2">
              support@keen-accruvance.com
            </a>{' '}
            and we’ll get back to you within 30 days.
          </p>
        </div>
      </div>
    </div>
  )
}
