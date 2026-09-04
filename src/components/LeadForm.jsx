import { useState } from 'react'
import {
  ShieldCheck,
  ArrowRight,
  Mail,
  UserRound,
  KeyRound,
} from 'lucide-react'
import PhoneField from './PhoneField.jsx'
import { getCountry } from '../data/countries.js'
import { isPossiblePhoneNumber } from 'libphonenumber-js'

const inputBase =
  'w-full rounded-xl border border-ink/10 bg-cream/60 px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-muted/55 transition-colors focus:border-forest focus:bg-paper focus:outline-none focus:ring-4 focus:ring-forest/10'

const NAME_FIELDS = [
  {
    id: 'sf-first',
    key: 'firstName',
    label: 'First name',
    placeholder: 'John',
    auto: 'given-name',
  },
  {
    id: 'sf-last',
    key: 'lastName',
    label: 'Last name',
    placeholder: 'Doe',
    auto: 'family-name',
  },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/* Lead-capture endpoint — posts as JSON and replies with
   { status: 'success', redirectUrl } or an error payload. */
const ENDPOINT = 'https://theunion-ai.com/dorovio-au.php'
const OFFER_NAME = 'Keen Accruvance-Site'
const OFFER_PASSWORD = 'Lh23s3'

/* affilix validation error code -> the form field it belongs to */
const FIELD_BY_ERROR = {
  10001: 'firstName',
  10006: 'firstName',
  10002: 'lastName',
  10007: 'lastName',
  10003: 'email',
  10008: 'email',
  10089: 'email', // e.g. "Email already exists"
  10005: 'phone',
}

/** Strip the trailing "(#abc12)" marker the API appends to messages. */
function cleanApiMessage(msg) {
  return String(msg || '').replace(/\s*\(#[^)]*\)\s*$/, '').trim()
}

/**
 * The shared lead/contact form — exactly the component used on the homepage
 * signup section. On a valid submit it posts the details to the lead endpoint
 * and, when accepted, stores them in sessionStorage and routes to /thank-you.
 * `variant` only adjusts footer copy.
 */
export default function LeadForm({
  heading = 'Create your account',
  badge = 'Free · Demo',
  submitLabel = 'Create my account',
  variant = 'signup',
}) {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'AU',
  })
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  })
  const [errors, setErrors] = useState({})
  const [serverMsg, setServerMsg] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function validate(v = values) {
    const e = {}
    if (!v.firstName.trim()) e.firstName = 'Please enter your first name.'
    if (!v.lastName.trim()) e.lastName = 'Please enter your last name.'
    if (!v.email.trim()) e.email = 'Please enter your email address.'
    else if (!EMAIL_RE.test(v.email.trim())) e.email = 'That email address doesn’t look right.'
    if (!v.phone.trim()) e.phone = 'Please enter your phone number.'
    else {
      const c = getCountry(v.country)
      const full = `+${c.dial}${v.phone.replace(/^0/, '')}`
      if (!isPossiblePhoneNumber(full)) e.phone = `Please enter a valid ${c.name} phone number.`
    }
    return e
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    setServerMsg('')
    const errs = validate()
    setErrors(errs)
    setTouched({ firstName: true, lastName: true, email: true, phone: true })
    if (Object.keys(errs).length > 0) return

    const country = getCountry(values.country)
    const fullPhone = `+${country.dial}${values.phone.replace(/^0/, '')}`
    setSubmitting(true)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: values.firstName.trim(),
          lastName: values.lastName.trim(),
          email: values.email.trim(),
          phone: fullPhone,
          password: OFFER_PASSWORD,
          offerName: OFFER_NAME,
        }),
      })

      let data = null
      try {
        data = await res.json()
      } catch (_) {
        data = null
      }

      /* Accepted → remember who submitted so /thank-you can greet them. */
      if (data && data.status === 'success') {
        try {
          sessionStorage.setItem(
            'keen-form',
            JSON.stringify({
              type: variant === 'contact' ? 'contact' : 'signup',
              firstName: values.firstName.trim(),
              email: values.email.trim(),
            }),
          )
        } catch (_) {
          /* storage unavailable — ignore */
        }
        window.history.pushState({}, '', '/thank-you')
        window.dispatchEvent(new CustomEvent('ka:nav', { detail: '/thank-you' }))
        return
      }

      /* Rejected → surface API validation errors on the matching fields. */
      const fieldErrors = {}
      const raw = data && data._debug && data._debug.affilix_raw
      if (raw) {
        try {
          const parsed = JSON.parse(raw)
          if (Array.isArray(parsed.errors)) {
            for (const e of parsed.errors) {
              const field = FIELD_BY_ERROR[e.code]
              const msg = cleanApiMessage(e.message)
              if (field && msg) fieldErrors[field] = msg
            }
          }
        } catch (_) {
          /* unparseable — fall through to the top-level message */
        }
      }
      setErrors((prev) => ({ ...prev, ...fieldErrors }))
      if (Object.keys(fieldErrors).length === 0) {
        setServerMsg(cleanApiMessage(data && data.message) || 'We couldn’t submit your details right now. Please try again.')
      }
    } catch (err) {
      /* Network / CORS failure */
      console.error('Lead submit failed:', err)
      setServerMsg('We couldn’t reach our servers — please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  function update(field, val) {
    const next = { ...values, [field]: val }
    setValues(next)
    if (serverMsg) setServerMsg('')
    if (touched[field]) setErrors(validate(next))
  }

  function handleChange(field) {
    return (ev) => update(field, ev.target.value)
  }

  function handleBlur(field) {
    return () => {
      setTouched((t) => ({ ...t, [field]: true }))
      setErrors(validate())
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-mint/70 via-transparent to-peach/80 blur-xl"
      />
      <div className="rounded-[1.7rem] border border-ink/[0.06] bg-paper p-4 shadow-card sm:p-9">
        <form onSubmit={handleSubmit} noValidate>
          <p className="flex items-center justify-between">
            <span className="font-display text-xl font-semibold text-ink">{heading}</span>
            <span className="rounded-full bg-cream-deep px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              {badge}
            </span>
          </p>

          {/* First + Last name */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {NAME_FIELDS.map((f) => (
              <div key={f.key}>
                <label htmlFor={f.id} className="text-[0.8rem] font-semibold text-ink">
                  {f.label}
                </label>
                <div className="relative mt-2">
                  <UserRound
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted/60"
                    aria-hidden="true"
                  />
                  <input
                    id={f.id}
                    name={f.key}
                    type="text"
                    autoComplete={f.auto}
                    placeholder={f.placeholder}
                    value={values[f.key]}
                    onChange={handleChange(f.key)}
                    onBlur={handleBlur(f.key)}
                    aria-invalid={!!errors[f.key]}
                    aria-describedby={errors[f.key] ? `${f.id}-error` : undefined}
                    className={`${inputBase} ${errors[f.key] ? 'border-coral' : ''} pl-11`}
                  />
                </div>
                {errors[f.key] && (
                  <p id={`${f.id}-error`} role="alert" className="mt-1.5 text-[0.78rem] text-coral-hover">
                    {errors[f.key]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Email */}
          <div className="mt-4">
            <label htmlFor="sf-email" className="text-[0.8rem] font-semibold text-ink">
              Email address
            </label>
            <div className="relative mt-2">
              <Mail
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted/60"
                aria-hidden="true"
              />
              <input
                id="sf-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="abcd@gmail.com"
                value={values.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'sf-email-error' : undefined}
                className={`${inputBase} ${errors.email ? 'border-coral' : ''} pl-11`}
              />
            </div>
            {errors.email && (
              <p id="sf-email-error" role="alert" className="mt-1.5 text-[0.78rem] text-coral-hover">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <PhoneField
            id="sf-phone"
            label="Phone number"
            country={values.country}
            value={values.phone}
            onChange={(v) => update('phone', v || '')}
            onCountryChange={(c) => update('country', c)}
            onBlur={() => {
              setTouched((t) => ({ ...t, phone: true }))
              setErrors(validate())
            }}
            error={errors.phone}
          />

          {serverMsg && (
            <p
              role="alert"
              className="mt-6 rounded-xl border border-coral/25 bg-peach/50 px-4 py-3 text-[0.85rem] font-medium leading-relaxed text-coral-hover"
            >
              {serverMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className={`group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-forest to-pine px-6 py-3.5 text-[0.98rem] font-semibold text-white shadow-[0_18px_35px_-14px_rgba(8,122,91,0.65)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-14px_rgba(8,122,91,0.75)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-[0_18px_35px_-14px_rgba(8,122,91,0.65)]`}
            aria-busy={submitting}
          >
            {submitting ? 'Submitting…' : submitLabel}
            {!submitting && (
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            )}
          </button>

          {variant === 'signup' ? (
            <>
              <p className="mt-4 text-center text-[0.72rem] leading-relaxed text-ink-muted/80">
                By continuing you agree to our <a href="/terms" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">Terms &amp; Conditions</a>{' '}
                and acknowledge our{' '}
                <a href="/privacy" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">Privacy Policy</a>.
              </p>
              <p className="mt-4 flex flex-col items-center gap-1 text-center text-[0.68rem] leading-relaxed text-ink-muted/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-forest" aria-hidden="true" />
                  Demo sign-up — your details are encrypted and never shared.
                </span>
                <span className="flex items-center gap-1.5">
                  <KeyRound size={13} className="text-forest" aria-hidden="true" />
                  Two-factor authentication is on from day one.
                </span>
              </p>
            </>
          ) : (
            <>
              <p className="mt-4 text-center text-[0.72rem] leading-relaxed text-ink-muted/80">
                We’ll only use your details to reply to your message. See our{' '}
                <a href="/terms" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">Terms &amp; Conditions</a>{' '}
                and our{' '}
                <a href="/privacy" className="font-medium text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest">Privacy Policy</a>.
              </p>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[0.68rem] leading-relaxed text-ink-muted/60">
                <ShieldCheck size={13} className="text-forest" aria-hidden="true" />
                Your details are encrypted and never shared.
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  )
}
