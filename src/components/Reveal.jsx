import { useEffect, useRef, useState } from 'react'

/** Hiệu ứng xuất hiện mờ dần khi cuộn tới phần tử. */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', fade = false }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let done = false
    const show = () => {
      if (!done) {
        done = true
        setVisible(true)
      }
    }

    // 1) Phần tử đã nằm sẵn trong khung nhìn khi tải trang -> hiện luôn
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) {
      show()
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return
    }

    // 2) Còn lại thì chờ cuộn tới
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          show()
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${fade ? 'reveal-fade' : ''} ${visible ? 'reveal-in' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
