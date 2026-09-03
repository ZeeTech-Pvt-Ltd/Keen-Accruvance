/** Keen Accruvance wordmark — `tone` adapts it for light and dark surfaces. */
export default function Logo({ tone = 'dark', className = '' }) {
  const name = tone === 'dark' ? 'text-ink' : 'text-white'
  const sub = tone === 'dark' ? 'text-forest' : 'text-mint'

  return (
    <a
      href="#home"
      aria-label="Keen Accruvance — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-forest-soft to-pine-deep shadow-[0_6px_16px_-6px_rgba(5,60,47,0.6)] ring-1 ring-white/20 transition-transform duration-300 group-hover:-rotate-3">
        <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">
          <path
            d="M4 16.5 9.5 11l3.5 3 7-8.5"
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="5.5" r="1.6" fill="#EFB85C" />
        </svg>
      </span>
      <span className="font-display text-[1.06rem] font-bold tracking-tight">
        <span className={name}>Keen</span> <span className={sub}>Accruvance</span>
      </span>
    </a>
  )
}
