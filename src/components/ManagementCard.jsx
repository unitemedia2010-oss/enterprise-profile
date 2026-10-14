import Clock from './Clock.jsx'
import Reveal from './Reveal.jsx'
import CardHeader from './CardHeader.jsx'
import { team } from '../data/site.js'

export default function ManagementCard() {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-soft sm:p-7">
      <CardHeader zh={team.zh} en={team.en} />

      <div className="relative z-10 mt-5">
        <h3 className="font-display text-2xl leading-tight font-bold text-ink-900 sm:text-[1.7rem]">
          {team.headline}
        </h3>
        <p className="mt-2 max-w-[15rem] text-[11.5px] leading-relaxed text-ink-400">{team.desc}</p>

        <a
          href="#"
          className="group mt-5 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-[11px] font-medium tracking-[0.12em] text-white transition-colors hover:bg-brand-700"
        >
          {team.cta}
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Đồng hồ đỏ — tràn nhẹ ra mép phải rồi tan dần, không bị cắt cứng.
          Mask đặt trên chính SVG vì class .reveal của thẻ Reveal đang chiếm quyền `transform`. */}
      <Reveal delay={120} className="pointer-events-none absolute inset-0">
        <Clock className="mask-fade-right absolute -right-6 top-1/2 h-52 w-52 -translate-y-1/2 sm:-right-8 sm:h-60 sm:w-60" />
      </Reveal>

      {/* 3 số liệu dưới đáy */}
      <div className="relative z-10 mt-auto grid grid-cols-3 gap-2 pt-8">
        {team.stats.map((s, i) => (
          <Reveal key={s.label} delay={200 + i * 80}>
            <div className="rounded-xl border border-shell-100 bg-shell-50 px-2 py-3 text-center">
              <div className="font-display text-lg leading-none font-bold text-brand-600">{s.value}</div>
              <div className="mt-1.5 text-[10px] text-ink-700">{s.label}</div>
              <div className="mt-0.5 text-[8px] tracking-[0.14em] text-ink-300 uppercase">{s.en}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </article>
  )
}
