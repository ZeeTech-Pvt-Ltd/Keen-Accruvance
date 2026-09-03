import { ArrowRight } from 'lucide-react'

const sizes = {
  sm: 'h-10 px-5 text-sm gap-1.5',
  md: 'h-12 px-6 text-[0.95rem] gap-2',
  lg: 'h-[3.4rem] px-8 text-base gap-2.5',
}

const variants = {
  primary:
    'bg-gradient-to-b from-forest-soft to-forest text-white shadow-[0_14px_30px_-12px_rgba(8,122,91,0.7)] hover:shadow-[0_18px_38px_-12px_rgba(8,122,91,0.8)] hover:-translate-y-0.5',
  light:
    'bg-white text-ink shadow-[0_12px_28px_-14px_rgba(5,60,47,0.55)] ring-1 ring-ink/5 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-14px_rgba(5,60,47,0.6)]',
  outline:
    'bg-transparent text-forest ring-1 ring-inset ring-forest/25 hover:bg-forest/5 hover:ring-forest/40',
  'outline-light':
    'bg-transparent text-white ring-1 ring-inset ring-white/25 hover:bg-white/10 hover:ring-white/40',
  ghost: 'bg-forest/5 text-forest hover:bg-forest/10',
}

/** Flexible CTA button / link. Set `arrow` to append a → chevron that nudges on hover. */
export default function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  onClick,
  type,
  className = '',
  children,
  ariaLabel,
}) {
  const cls = `group/btn inline-flex select-none items-center justify-center rounded-full font-semibold tracking-[-0.01em] transition-all duration-200 active:scale-[0.98] ${sizes[size]} ${variants[variant]} ${className}`

  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="transition-transform duration-200 group-hover/btn:translate-x-1"
          size={size === 'lg' ? 20 : 18}
          strokeWidth={2.4}
          aria-hidden="true"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type || 'button'} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  )
}
