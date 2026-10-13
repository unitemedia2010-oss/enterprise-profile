/** Logo: vòng tròn đỏ + tên tiếng Trung / tiếng Anh. */
export default function Logo({ zh = '企业介绍', en = 'ENTERPRISE PROFILE', compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 48 48"
        className={`${compact ? 'h-8 w-8' : 'h-10 w-10'} shrink-0`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff6a60" />
            <stop offset="55%" stopColor="#e4231f" />
            <stop offset="100%" stopColor="#a10f14" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="21" fill="none" stroke="url(#lg-mark)" strokeWidth="3" />
        <circle cx="24" cy="24" r="12" fill="none" stroke="url(#lg-mark)" strokeWidth="1.5" opacity="0.5" />
        <path d="M17 27 L24 15 L31 27" fill="none" stroke="url(#lg-mark)" strokeWidth="3" strokeLinecap="round" />
        <path d="M20.5 23.5 h7" stroke="url(#lg-mark)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <div className="leading-none">
        <div
          className={`${compact ? 'text-base' : 'text-xl'} font-semibold tracking-[0.18em] text-ink-900`}
        >
          {zh}
        </div>
        <div className="mt-1.5 text-[9px] font-medium tracking-[0.34em] text-ink-400 uppercase">
          {en}
        </div>
      </div>
    </div>
  )
}
