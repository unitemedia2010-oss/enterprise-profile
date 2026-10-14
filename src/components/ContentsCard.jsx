import SmartImage from './SmartImage.jsx'
import Reveal from './Reveal.jsx'
import Logo from './Logo.jsx'
import { contents } from '../data/site.js'

export default function ContentsCard() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft">
      {/* ---------- Đầu card ---------- */}
      <div className="flex items-start justify-between gap-4 px-6 pt-6 sm:px-8">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-600 sm:text-4xl">
              {contents.title}
            </h2>
            <span className="rounded-full bg-brand-600 px-3 py-1 text-[9px] font-semibold tracking-[0.18em] text-white uppercase">
              目录
            </span>
          </div>
          <p className="mt-1.5 text-[9px] tracking-[0.26em] text-ink-300 uppercase">
            Corporate navigation · 企业简介
          </p>
        </div>

        <Logo compact zh="企业" en="PROFILE" />
      </div>

      {/* ---------- Thân card ---------- */}
      <div className="relative mt-6 flex flex-1 items-center gap-4 px-6 pb-6 sm:px-8">
        {/* Số 01 khổ lớn */}
        <div className="relative shrink-0">
          <span className="font-display text-[7rem] leading-none font-extrabold text-gradient-brand sm:text-[9rem]">
            {contents.no}
          </span>
          <span className="mt-1 block font-display text-xl font-bold text-ink-900">INTRODUCTION</span>
          <span className="mt-1 block text-sm tracking-[0.16em] text-ink-700">企业介绍</span>
          <span className="mt-0.5 block text-[9px] tracking-[0.2em] text-ink-300 uppercase">
            Enterprise profile
          </span>
        </div>

        {/* Ảnh dải kiến trúc bên phải */}
        <Reveal className="min-w-0 flex-1">
          <SmartImage
            src={contents.image}
            alt="Dự án tiêu biểu"
            className="blend-soft relative h-44 sm:h-60"
            imgClassName="object-cover"
          />
        </Reveal>
      </div>

      {/* ---------- Danh sách mục ---------- */}
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-6 pb-5 sm:px-8">
        {contents.items.map((item, i) => (
          <a
            key={item.en}
            href="#"
            className={`shrink-0 rounded-full border px-4 py-2 text-[11px] tracking-[0.08em] transition-all duration-300 ${
              i === 0
                ? 'border-brand-600 bg-brand-600 text-white'
                : 'border-shell-200 text-ink-500 hover:border-brand-300 hover:text-brand-600'
            }`}
          >
            {item.zh}
          </a>
        ))}
      </div>

      {/* ---------- Chân card ---------- */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-shell-100 bg-shell-50 px-6 py-4 sm:px-8">
        <a
          href="#"
          className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-[11px] font-medium tracking-[0.12em] text-white transition-colors hover:bg-brand-700"
        >
          开始探索 01
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <p className="text-[11px] tracking-[0.14em] text-ink-300">
          首页 <span className="mx-1">/</span>
          <span className="text-ink-700">企业介绍</span>
        </p>
      </div>
    </article>
  )
}
