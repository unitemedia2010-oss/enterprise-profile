import { useState } from 'react'

/**
 * Ảnh thông minh: nếu chưa có file ảnh thì hiện khối placeholder,
 * sau khi bạn bỏ ảnh vào public/assets là tự hiện ảnh thật — không cần sửa code.
 *
 * Lưu ý: component KHÔNG tự thêm class `relative`, vì nếu thêm sẵn thì
 * không thể truyền `absolute` vào (Tailwind quyết định ưu tiên theo thứ tự
 * trong file CSS, không theo thứ tự viết trong class). Vị trí do người gọi quyết định.
 */
export default function SmartImage({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  contain = false,
  eager = false,
}) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  return (
    <div className={`overflow-hidden ${className}`}>
      {showPlaceholder ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-shell-200 via-shell-100 to-shell-300">
          <span className="px-3 text-center text-[10px] font-medium tracking-[0.2em] text-ink-400 uppercase">
            {alt || 'Ảnh'}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full ${contain ? 'object-contain' : 'object-cover'} ${imgClassName}`}
        />
      )}
    </div>
  )
}
