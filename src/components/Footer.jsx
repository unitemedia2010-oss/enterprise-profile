import Logo from './Logo.jsx'
import { nav } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="mt-2 bg-ink-900">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div>
          <Logo zh="企业介绍" en="ENTERPRISE PROFILE" />
          <p className="mt-5 max-w-xs text-[12px] leading-relaxed text-ink-400">
            创新驱动 · 价值共生。持续为城市提供高品质的人居作品与商业空间。
          </p>
        </div>

        <div>
          <div className="text-[10px] tracking-[0.26em] text-ink-300 uppercase">Navigation</div>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.en}>
                <a href="#" className="text-[13px] text-ink-400 transition-colors hover:text-brand-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[10px] tracking-[0.26em] text-ink-300 uppercase">Contact</div>
          <ul className="mt-4 space-y-2.5 text-[13px] text-ink-400">
            <li>地址：中国 · 上海 · 浦东新区</li>
            <li>电话：400-000-0000</li>
            <li>邮箱：contact@example.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-6 py-5 text-[11px] text-ink-400 sm:px-8 lg:px-12">
          <span>© 2026 Enterprise Profile. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Innovation · Value · Growth</span>
        </div>
      </div>
    </footer>
  )
}
