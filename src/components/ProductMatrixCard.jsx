import SmartImage from './SmartImage.jsx'
import Reveal from './Reveal.jsx'
import CardHeader from './CardHeader.jsx'
import { matrix } from '../data/site.js'

export default function ProductMatrixCard() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-soft sm:p-7">
      <CardHeader zh={matrix.zh} en={matrix.en} />

      {/* Biểu đồ 3D (dùng ảnh masterplan) */}
      <Reveal className="relative mt-5 flex flex-1 items-center justify-center">
        <SmartImage
          src={matrix.image}
          alt="Ma trận sản phẩm"
          contain
          className="relative h-40 w-full rounded-2xl bg-gradient-to-b from-shell-50 to-white sm:h-48"
          imgClassName="p-2"
        />
      </Reveal>

      {/* 4 ô số liệu */}
      <div className="mt-5 grid grid-cols-4 gap-2">
        {matrix.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="group rounded-xl border border-shell-100 bg-shell-50 px-2 py-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-soft">
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
