/**
 * Consistent section header — editorial style: mono eyebrow rule + serif title.
 * `align` left|center · `dark` switches tokens for dark-green sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  dark = false,
  className = '',
}) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <p
          className={`eyebrow ${dark ? 'text-mint' : 'text-forest'} ${
            center ? 'justify-center [&::before]:hidden' : ''
          }`}
        >
          {center && (
            <span aria-hidden="true" className="inline-block h-1 w-1 rotate-45 bg-gold" />
          )}
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance mt-5 text-[2.1rem] font-semibold leading-[1.06] sm:text-5xl sm:leading-[1.03] lg:text-[3.15rem] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`text-pretty mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-mint/75' : 'text-ink-muted'
          } ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
