import { useState } from 'react'
import Logo from './Logo.jsx'
import SmartImage from './SmartImage.jsx'
import Reveal from './Reveal.jsx'
import { hero, nav } from '../data/site.js'

/** Khối số liệu nhỏ: icon tròn + nhãn + giá trị đỏ */
function Stat({ label, value, unit }) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-shell-100">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink-500" fill="none" strokeWidth="1.6" stroke="currentColor">
          <path d="M3 20h18" strokeLinecap="round" />
          <path d="M6 20v-6M11 20V9M16 20v-9M21 20V5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex items-baseline gap-2">
        <span className="text-xs tracking-[0.08em] text-ink-500">{label}</span>
        <span className="font-display text-2xl font-bold text-brand-600">
          {value}
          <span className="ml-0.5 font-sans text-sm font-semibold">{unit}</span>
        </span>
      </span>
    </div>
  )
}

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <section className="px-3 pt-3 pb-6 sm:px-6 lg:px-8">
      <div className="bg-grain relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl bg-white shadow-card">
        {/* ---------------- Thanh trên ---------------- */}
        <header className="relative z-20 flex items-center justify-between px-6 pt-6 pb-4 sm:px-8 lg:px-12">
          <Reveal>
            <Logo zh={hero.eyebrow.zh} en={hero.eyebrow.en} />
          </Reveal>

          {/* Menu desktop */}
          <nav className="hidden items-center gap-8 xl:flex">
            {nav.map((item, i) => (
              <a
                key={item.en}
                href="#"
                className={`group relative text-[13px] tracking-[0.06em] transition-colors ${
                  i === 0 ? 'text-brand-600' : 'text-ink-700 hover:text-brand-600'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-brand-500 transition-transform duration-300 group-hover:scale-x-100 ${
                    i === 0 ? 'scale-x-100' : ''
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Nút menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Mở menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-shell-200 text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-600 xl:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>

          {/* Menu mobile xổ xuống */}
          {open && (
            <div className="absolute inset-x-4 top-full z-30 overflow-hidden rounded-2xl border border-shell-200 bg-white shadow-soft xl:hidden">
              {nav.map((item) => (
                <a
                  key={item.en}
                  href="#"
                  className="block border-b border-shell-100 px-5 py-3.5 text-sm text-ink-700 transition-colors last:border-0 hover:bg-brand-50 hover:text-brand-600"
                >
                  {item.label}
                  <span className="ml-2 text-[10px] tracking-[0.2em] text-ink-300">{item.en}</span>
                </a>
              ))}
            </div>
          )}
        </header>

        {/* ---------------- Nội dung ---------------- */}
        <div className="grid items-stretch lg:grid-cols-[1.04fr_1fr]">
          {/* Cột trái: chữ */}
          <div className="relative z-10 flex flex-col justify-center px-6 pt-4 pb-12 sm:px-8 lg:px-12 lg:pt-10 lg:pb-16">
            <Reveal>
              <h1 className="font-display text-[clamp(2.6rem,7.2vw,5.4rem)] leading-[0.95] font-extrabold tracking-tight">
                <span className="text-gradient-brand">{hero.title}</span>
              </h1>
            </Reveal>

            <Reveal delay={90}>
              <h2 className="mt-5 text-xl font-semibold tracking-[0.06em] text-ink-900 sm:text-2xl">
                {hero.subtitle}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-4 max-w-md text-[13px] leading-relaxed tracking-[0.04em] text-ink-400">
                {hero.lead}
              </p>
            </Reveal>

            <Reveal delay={230}>
              <a
                href="#contents"
                className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-medium tracking-[0.1em] text-white shadow-soft transition-all duration-300 hover:bg-brand-700 hover:shadow-card"
              >
                <span className="text-[11px] opacity-80">{hero.cta.replace(/\d{4}年?/, '')}</span>
                <span className="font-display text-lg font-bold">{hero.cta.match(/\d{4}年?/)?.[0] ?? '2002年'}</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
                {hero.stats.map((s) => (
                  <Stat key={s.label} {...s} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Cột phải: ảnh công trình + phản chiếu */}
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[380px] lg:min-h-[560px]">
            <SmartImage
              src={hero.image}
              alt="Tổ hợp công trình"
              eager
              className="absolute inset-0 mask-fade-left"
              imgClassName="object-cover object-center"
            />

            {/* Lớp phản chiếu mờ phía dưới */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden opacity-45">
              <div className="absolute inset-x-0 bottom-0 h-[560px] w-full origin-bottom scale-y-[-1]">
                <SmartImage src={hero.image} alt="" className="relative h-full w-full" imgClassName="object-cover" />
              </div>
            </div>

            {/* Lớp chuyển màu cho ảnh hòa vào nền trắng */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
