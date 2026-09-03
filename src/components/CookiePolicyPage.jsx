const SECTIONS = [
  {
    n: '01',
    title: 'What are cookies',
    body: [
      'A cookie is a small text file stored on your device when you visit a website. It lets the site recognise your browser and remember information between visits — such as your preferences or whether you are signed in.',
      'We also use similar technologies such as local storage and analytics pixels for the same kinds of purposes described in this policy. Where we say “cookies” below, we mean all of these.',
    ],
  },
  {
    n: '02',
    title: 'The cookies we use',
    body: [
      'Essential cookies — required for the site to function, such as keeping your session secure and remembering basic preferences. These cannot be switched off.',
      'Preference cookies — remember choices you make, such as language, region and display settings, so you don’t have to set them again on every visit.',
      'Analytics cookies — help us understand which pages are visited, how long people stay and where they drop off, so we can improve the experience. They are aggregated and do not identify you personally.',
    ],
  },
  {
    n: '03',
    title: 'Why we use them',
    body: [
      'To keep the site secure and to help protect accounts and services from abuse or fraudulent activity.',
      'To remember your preferences and provide a consistent experience across visits.',
      'To measure and improve how the site performs, so content is easier to find and faster to load.',
      'We do not sell data collected through cookies, and we never use cookies to profile you for advertising purposes.',
    ],
  },
  {
    n: '04',
    title: 'Third-party cookies',
    body: [
      'Some of the tools we rely on — such as analytics and infrastructure providers — may set their own cookies or similar technologies when you use the site.',
      <span key="privacy-link">
        These providers use the data they collect only to provide services to us, and are bound by
        confidentiality and data-protection obligations. For more detail on how your information is
        handled, please see our{' '}
        <a href="/privacy" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">
          Privacy Policy
        </a>
        .
      </span>,
    ],
  },
  {
    n: '05',
    title: 'Managing and deleting cookies',
    body: [
      'You can control or delete cookies through your browser settings. Most browsers let you block third-party cookies, clear cookies when you close the browser, or ask before a site sets one.',
      'Disabling essential cookies may stop parts of the site from working correctly. Disabling analytics cookies will not affect how the site functions for you.',
    ],
  },
  {
    n: '06',
    title: 'Your consent',
    body: [
      'By continuing to use the Keen Accruvance website after being shown this policy, you consent to our use of cookies as described here.',
      'You can change your preferences at any time using your browser’s cookie controls, as set out in the section above.',
    ],
  },
  {
    n: '07',
    title: 'Changes to this policy',
    body: [
      'We may update this Cookie Policy from time to time to reflect changes in the cookies we use, the law, or the way the site operates. When we do, we will update the date shown at the top of this page.',
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="wrap py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-forest">Legal</p>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">Cookie Policy</h1>
        <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">
          Last updated · {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p className="text-pretty mt-6 text-base leading-relaxed text-ink-muted">
          Cookies and similar technologies help the Keen Accruvance website work properly, remember
          your preferences and help us understand how visitors use the site. This policy explains
          what they are, why we use them and how you can control them.
        </p>

        <div className="mt-12">
          {SECTIONS.map((s) => (
            <section key={s.n} className="grid gap-3 border-t border-ink/[0.07] py-8 sm:grid-cols-[4.5rem_1fr]">
              <span className="font-mono text-[0.78rem] font-medium text-gold-deep">{s.n}</span>
              <div>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">{s.title}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-forest/15 bg-mint/50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-pine">Questions about cookies?</h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
            If anything in this policy is unclear, or you would like to know more about the cookies
            we use, email{' '}
            <a href="mailto:support@keen-accruvance.com" className="font-semibold text-forest underline decoration-forest/30 underline-offset-2">
              support@keen-accruvance.com
            </a>{' '}
            and we’ll be happy to help.
          </p>
        </div>
      </div>
    </div>
  )
}
