import SmartImage from './SmartImage.jsx'
import Reveal from './Reveal.jsx'
import CardHeader from './CardHeader.jsx'
import { innovation } from '../data/site.js'

export default function InnovationCard() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-soft sm:p-7">
      <CardHeader zh={innovation.zh} en={innovation.en} />
      <p className="mt-3 text-[11.5px] leading-relaxed text-ink-400">{innovation.lead}</p>

      <div className="mt-6 flex flex-1 flex-col gap-4">
        {innovation.items.map((item, i) => (
          <Reveal key={item.no} delay={i * 90}>
            <a
              href="#"
              className="group flex items-center gap-4 rounded-2xl border border-shell-100 bg-shell-50 p-3 transition-all duration-300 hover:border-brand-200 hover:bg-white hover:shadow-soft"
            >
              <SmartImage
                src={item.image}
                alt={item.zh}
                className="h-16 w-20 shrink-0 rounded-xl"
                imgClassName="transition-transform duration-500 group-hover:scale-110"
              />

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs font-bold text-brand-600">{item.no}</span>
                  <span className="h-px w-4 bg-shell-300" />
                  <span className="text-[10px] tracking-[0.2em] text-ink-300 uppercase">{item.en}</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-ink-900">{item.zh}</div>
                <p className="mt-1 truncate text-[11px] text-ink-400">{item.desc}</p>
              </div>

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 ring-1 ring-shell-200 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </article>
  )
}
