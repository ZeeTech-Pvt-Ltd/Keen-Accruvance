import { useId } from 'react'

/* ------------------------------------------------------------------ */
/*  Deterministic sample series (decorative UI data, not live quotes)   */
/* ------------------------------------------------------------------ */

function gen(len, { a, f, ph, drift, base, jitter = 0.35 }) {
  const out = []
  for (let i = 0; i < len; i++) {
    const t = i / (len - 1)
    const wave =
      a * Math.sin(i / f + ph) +
      a * 0.55 * Math.sin(i / (f * 2.7) + ph * 1.9) +
      drift * t
    out.push(base * (1 + wave + jitter * Math.sin(i * 1.37 + 0.8) * 0.008))
  }
  return out
}

export const seriesTrendUp = gen(60, {
  a: 0.038,
  f: 4.6,
  ph: 1.1,
  drift: 0.21,
  base: 60,
})
export const seriesTrendMild = gen(52, {
  a: 0.03,
  f: 5.4,
  ph: 2.6,
  drift: 0.05,
  base: 100,
})
export const sparkBtc = gen(32, { a: 0.05, f: 3.2, ph: 0.4, drift: 0.09, base: 50 })
export const sparkEth = gen(32, { a: 0.055, f: 2.6, ph: 2.1, drift: 0.03, base: 50 })
export const sparkSol = gen(32, { a: 0.07, f: 2.3, ph: 3.2, drift: -0.015, base: 50 })
export const barsPnl = [
  4, 6, 3.5, 8.5, 5, 9.5, 12, 7.5, 10, 13.5, 9, 14.5,
] // illustrative monthly P/L, includes variance — not a promise of returns

/* ------------------------------------------------------------------ */
/*  Path helpers                                                        */
/* ------------------------------------------------------------------ */

function toPoints(data, w, h, pad = 2) {
  let min = Math.min(...data)
  let max = Math.max(...data)
  if (max - min < 0.0001) {
    max += 1
    min -= 1
  }
  const range = max - min
  return data.map((v, i) => [
    pad + (i / (data.length - 1)) * (w - pad * 2),
    pad + (1 - (v - min) / range) * (h - pad * 2),
  ])
}

/** Catmull-Rom → cubic bezier for a smooth, premium line. */
function smoothPath(pts) {
  if (pts.length < 2) return ''
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`
  }
  return d
}

/* ------------------------------------------------------------------ */
/*  Components                                                          */
/* ------------------------------------------------------------------ */

const noop = () => {}

/** Flexible area/line SVG. `w`/`h` are the viewBox units; renders responsive. */
export function Spark({
  data,
  w = 360,
  h = 96,
  stroke = '#0e8f6c',
  fill = true,
  strokeWidth = 2.4,
  dot = false,
  grid = false,
  id,
  className = '',
  role = 'img',
}) {
  const uid = useId()
  const gid = id || `g-${uid.replace(/[:]/g, '')}`
  const pts = toPoints(data, w, h)
  const line = smoothPath(pts)
  const last = pts[pts.length - 1]
  const area = `${line} L ${last[0].toFixed(2)} ${h} L ${pts[0][0].toFixed(2)} ${h} Z`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={`h-auto w-full ${className}`} role={role} aria-hidden={role !== 'img'}>
      {grid &&
        [0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1="0"
            x2={w}
            y1={h * t}
            y2={h * t}
            stroke="currentColor"
            strokeOpacity="0.06"
            strokeDasharray="3 5"
          />
        ))}
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.28" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={area} fill={`url(#${gid})`} onError={noop} />}
      <path d={line} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
      {dot && (
        <>
          <circle cx={last[0]} cy={last[1]} r="7" fill={stroke} opacity="0.15" />
          <circle cx={last[0]} cy={last[1]} r="3" fill={stroke} />
        </>
      )}
    </svg>
  )
}

/** Tiny inline sparkline sized to its container (coin rows, stat cards). */
export function SparkMini({ data, w = 110, h = 34, stroke = '#087a5b', className = '' }) {
  return (
    <Spark
      data={data}
      w={w}
      h={h}
      stroke={stroke}
      fill={false}
      strokeWidth={2}
      className={className}
      role="presentation"
    />
  )
}

/** Segmented bars, e.g. monthly profit & loss. Positive/negative tinted. */
export function Bars({ data, w = 360, h = 140, className = '' }) {
  const max = Math.max(...data)
  const min = Math.min(0, Math.min(...data))
  const span = max - min || 1
  const n = data.length
  const slot = w / n
  const bw = slot * 0.55

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={`h-auto w-full ${className}`} role="presentation">
      {[0, 0.5, 1].map((t) => (
        <line
          key={t}
          x1="0"
          x2={w}
          y1={h - 12 - (h - 24) * t}
          y2={h - 12 - (h - 24) * t}
          stroke="currentColor"
          strokeOpacity="0.06"
          strokeDasharray="3 5"
        />
      ))}
      {data.map((v, i) => {
        const x = i * slot + (slot - bw) / 2
        const yZero = h - 12 - (0 - min) / span * (h - 24)
        const yVal = h - 12 - (v - min) / span * (h - 24)
        const yTop = Math.min(yZero, yVal)
        const bh = Math.max(3, Math.abs(yVal - yZero))
        const pos = v >= 0
        return (
          <rect
            key={i}
            x={x}
            y={yTop}
            width={bw}
            height={bh}
            rx={4}
            fill={pos ? '#0e8f6c' : '#e56b52'}
            opacity={0.85}
          >
            <title>{`${v}%`}</title>
          </rect>
        )
      })}
    </svg>
  )
}
