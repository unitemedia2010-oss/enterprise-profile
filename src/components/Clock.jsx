/** Đồng hồ đỏ vẽ bằng SVG — không cần file ảnh. */
export default function Clock({ className = '' }) {
  const ticks = Array.from({ length: 60 }, (_, i) => {
    const major = i % 5 === 0
    return (
      <line
        key={i}
        x1="100"
        y1={major ? 22 : 26}
        x2="100"
        y2={major ? 34 : 31}
        stroke="#e4231f"
        strokeWidth={major ? 4 : 1.5}
        strokeLinecap="round"
        opacity={major ? 0.95 : 0.35}
        transform={`rotate(${i * 6} 100 100)`}
      />
    )
  })

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="clk-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a80" />
          <stop offset="50%" stopColor="#e4231f" />
          <stop offset="100%" stopColor="#a10f14" />
        </linearGradient>
        <radialGradient id="clk-face" cx="35%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#fff6f5" />
          <stop offset="100%" stopColor="#ffe3e1" />
        </radialGradient>
        <filter id="clk-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#e4231f" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Thân đồng hồ */}
      <g filter="url(#clk-glow)">
        <circle cx="100" cy="100" r="92" fill="url(#clk-ring)" />
        <circle cx="100" cy="100" r="78" fill="url(#clk-face)" />
        <circle cx="100" cy="100" r="72" fill="none" stroke="#e4231f" strokeWidth="1" opacity="0.25" />
      </g>

      {/* Vạch giờ */}
      {ticks}

      {/* Số */}
      <text x="100" y="60" textAnchor="middle" className="fill-brand-600" fontSize="15" fontWeight="700">12</text>
      <text x="100" y="152" textAnchor="middle" className="fill-brand-600" fontSize="15" fontWeight="700">6</text>
      <text x="55" y="106" textAnchor="middle" className="fill-ink-400" fontSize="13" fontWeight="600">9</text>
      <text x="145" y="106" textAnchor="middle" className="fill-ink-400" fontSize="13" fontWeight="600">3</text>

      {/* Kim giờ / phút / giây */}
      <line x1="100" y1="100" x2="100" y2="62" stroke="#121217" strokeWidth="6" strokeLinecap="round" />
      <line x1="100" y1="100" x2="132" y2="88" stroke="#121217" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="100" y1="100" x2="86" y2="56" stroke="#e4231f" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      <circle cx="100" cy="100" r="6" fill="#e4231f" />
      <circle cx="100" cy="100" r="2.5" fill="#fff" />
    </svg>
  )
}
