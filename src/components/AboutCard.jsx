import SmartImage from './SmartImage.jsx'
import Reveal from './Reveal.jsx'
import { advantages, timeline, IMG } from '../data/site.js'

/** Ô icon vuông nhỏ */
function Tile({ mono, title, desc }) {
  return (
    <div className="group flex w-full flex-col items-center gap-2 rounded-xl border border-shell-200 bg-white px-2 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft">
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-shell-100 text-[13px] font-bold tracking-tight text-ink-900 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        {mono}
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-brand-500" />
      </span>
      <span className="text-[11px] font-medium text-ink-700">{title}</span>
      <span className="text-[9px] tracking-wide text-ink-300">{desc}</span>
    </div>
  )
}

/** Mốc thời gian */
function TimelineItem({ item, last }) {
  return (
    <li className="relative flex gap-5 pb-8 last:pb-0">
      {/* Đường nối + vòng số */}
      <div className="relative flex flex-col items-center">
        <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-[13px] font-bold text-white shadow-soft">
          {item.no}
        </span>
        {!last && <span className="absolute top-10 bottom-0 w-px bg-gradient-to-b from-brand-200 to-shell-200" />}
      </div>

      <div className="pt-1.5">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-lg font-bold text-brand-600">{item.year}</span>
          <span className="text-sm font-semibold text-ink-900">{item.title}</span>
        </div>
        <p className="mt-2 max-w-sm text-[12.5px] leading-relaxed text-ink-400">{item.desc}</p>
      </div>
    </li>
  )
}

export default function AboutCard() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft">
      <div className="grid flex-1 md:grid-cols-[0.82fr_1fr]">
        {/* ---------- Cột trái: panel đỏ ---------- */}
        <div className="relative flex min-h-[240px] flex-col justify-between overflow-hidden bg-brand-700 p-6 md:min-h-full">
          <SmartImage src={IMG.p3} alt="Dự án tiêu biểu" className="absolute inset-0" imgClassName="opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-800 via-brand-600/65 to-brand-500/25" />

          <div className="relative">
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-white/85 uppercase">
              <span className="inline-block h-4 w-px bg-white/70" />
              Innovation makes ·
            </div>
          </div>

          <div className="relative mt-10">
            <h3 className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl">
              Innovation
            </h3>
            <p className="mt-2 text-sm tracking-[0.1em] text-white/75">创新驱动 · 价值共生</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['设计', '建造', '运营'].map((t) => (
                <span key={t} className="rounded-full border border-white/35 px-3 py-1 text-[11px] text-white/90 backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Cột phải: nội dung ---------- */}
        <div className="flex flex-col p-6 sm:p-8">
          <div className="grid grid-cols-3 gap-3">
            {advantages.map((a, i) => (
              <Reveal key={a.mono} delay={i * 80}>
                <Tile {...a} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-b border-shell-100 pb-6">
              <div className="flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-brand-600" />
                <div>
                  <div className="text-sm font-semibold text-ink-900">我们的优势</div>
                  <div className="text-[9px] tracking-[0.24em] text-ink-300 uppercase">Our advantages</div>
                </div>
              </div>
              <a
                href="#"
                className="rounded-full bg-brand-600 px-5 py-2.5 text-[11px] font-medium tracking-[0.1em] text-white transition-colors hover:bg-brand-700"
              >
                成立于 2002年
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <ul className="mt-7">
              {timeline.map((item, i) => (
                <TimelineItem key={item.no} item={item} last={i === timeline.length - 1} />
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </article>
  )
}
