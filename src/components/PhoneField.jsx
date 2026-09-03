import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Search, Check } from 'lucide-react'
import { COUNTRIES, POPULAR, getCountry } from '../data/countries.js'

/**
 * International phone input — country flag + dial code chip (offline inline SVG),
 * with a searchable country picker. The number is typed as the local/national
 * number next to the code (e.g. flag +61 · 0498 9845). Defaults to Australia.
 */
export default function PhoneField({
  id = 'sf-phone',
  label = 'Phone number',
  country = 'AU',
  value = '',
  onChange,
  onCountryChange,
  onBlur,
  error,
  errorId = `${id}-error`,
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const wrapRef = useRef(null)
  const inputRef = useRef(null)
  const searchRef = useRef(null)

  const selected = getCountry(country)

  /* Close on outside click / Escape while the picker is open */
  useEffect(() => {
    if (!open) return
    function onDocMouse(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocMouse)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocMouse)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  /* Focus the search when the picker opens */
  useEffect(() => {
    if (open) searchRef.current?.focus()
  }, [open])

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) {
      return {
        popular: POPULAR.map((code) => getCountry(code)),
        rest: COUNTRIES.filter((c) => !POPULAR.includes(c.code)),
      }
    }
    const matches = COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.dial.startsWith(q.replace(/^\+/, ''))
    )
    return { popular: [], rest: matches }
  }, [query])

  function pick(c) {
    onCountryChange?.(c.code)
    setOpen(false)
    setQuery('')
    inputRef.current?.focus()
  }

  function Flag({ c, className = '' }) {
    const F = c.Flag
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[3px] shadow-[0_0_0_1px_rgba(16,24,23,0.16)] ${className}`}
        aria-hidden="true"
      >
        <F className="h-full w-full" />
      </span>
    )
  }

  function renderRow(c) {
    const active = c.code === selected.code
    return (
      <li key={c.code}>
        <button
          type="button"
          role="option"
          aria-selected={active}
          onClick={() => pick(c)}
          className={`flex w-full items-center gap-3 px-3.5 py-2 text-left transition-colors ${
            active ? 'bg-forest/[0.06]' : 'hover:bg-cream/70'
          }`}
        >
          <Flag c={c} className="h-4 w-6" />
          <span className="min-w-0 flex-1 truncate text-[0.88rem] font-medium text-ink">{c.name}</span>
          <span className="tnum text-[0.82rem] text-ink-muted">+{c.dial}</span>
          {active && <Check size={14} className="shrink-0 text-forest" aria-hidden="true" />}
        </button>
      </li>
    )
  }

  return (
    <div className="mt-4">
      <label htmlFor={id} className="text-[0.8rem] font-semibold text-ink">
        {label}
      </label>

      <div
        ref={wrapRef}
        className={`relative mt-2 flex items-center rounded-xl border bg-cream/60 transition-colors focus-within:border-forest focus-within:bg-paper focus-within:ring-4 focus-within:ring-forest/10 ${
          error ? 'border-coral' : 'border-ink/10'
        }`}
      >
        {/* Country flag + dial code chip */}
        <button
          type="button"
          onClick={() => {
            setQuery('')
            setOpen((o) => !o)
          }}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label={`Selected country ${selected.name}, dial code +${selected.dial}`}
          className="flex items-center gap-1.5 py-3 pl-3.5 pr-2 text-ink transition-colors hover:bg-cream/80"
        >
          <Flag c={selected} className="h-[15px] w-[22px]" />
          <span className="tnum text-[0.9rem] font-semibold leading-none">+{selected.dial}</span>
          <ChevronDown
            size={13}
            aria-hidden="true"
            className={`ml-0.5 text-ink-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        <span aria-hidden="true" className="h-5 w-px shrink-0 bg-ink/10" />

        {/* Local number */}
        <input
          ref={inputRef}
          id={id}
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder={selected.sample}
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^\d]/g, '').slice(0, 15))}
          onBlur={onBlur}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="w-full min-w-0 flex-1 border-0 bg-transparent px-3 py-3 text-[0.95rem] text-ink outline-none placeholder:text-ink-muted/55"
        />

        {/* Country picker */}
        {open && (
          <div
            role="listbox"
            aria-label="Select country"
            className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-ink/10 bg-paper shadow-[0_24px_60px_-20px_rgba(16,24,23,0.3)]"
          >
            <div className="flex items-center gap-2.5 border-b border-ink/[0.06] px-3.5 py-2.5">
              <Search size={14} className="shrink-0 text-ink-muted/60" aria-hidden="true" />
              <input
                ref={searchRef}
                type="search"
                role="combobox"
                placeholder="Search country or code"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-[0.9rem] text-ink outline-none placeholder:text-ink-muted/50 [&::-webkit-search-cancel-button]:hidden"
              />
            </div>

            <ul className="max-h-60 overflow-y-auto py-1.5">
              {list.popular.length > 0 && (
                <li className="px-3.5 pb-1 pt-1.5 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted/70">
                  Popular
                </li>
              )}
              {list.popular.map(renderRow)}
              {list.popular.length > 0 && list.rest.length > 0 && (
                <li className="px-3.5 pb-1 pt-2 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink-muted/70">
                  All countries
                </li>
              )}
              {list.rest.map(renderRow)}
              {list.popular.length === 0 && list.rest.length === 0 && (
                <li className="px-3.5 py-4 text-center text-[0.82rem] text-ink-muted">
                  No countries match “{query}”.
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-[0.78rem] text-coral-hover">
          {error}
        </p>
      )}
    </div>
  )
}
