/** Header nhỏ dùng chung cho các thẻ ở hàng dưới */
export default function CardHeader({ zh, en }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span className="h-4 w-1 rounded-full bg-brand-600" />
        <span className="text-sm font-semibold tracking-[0.06em] text-ink-900">{zh}</span>
        <span className="text-[9px] tracking-[0.22em] text-ink-300 uppercase">{en}</span>
      </div>
      <span className="hidden font-display text-3xl leading-none font-extrabold text-shell-200 sm:block">
        {en.slice(0, 2).toUpperCase()}
      </span>
    </div>
  )
}
