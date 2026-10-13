# 企业介绍 · ENTERPRISE PROFILE

Giao diện "giới thiệu doanh nghiệp" phong cách **Innovation / 创新驱动 · 价值共生**, dựng bằng **React 19 + Vite 8 + TailwindCSS 4**.

Bám theo thiết kế tham chiếu gồm 4 khối:

1. **Hero** — tiêu đề `INNOVATION` gradient đỏ, nút CTA, số liệu, ảnh tổ hợp công trình có lớp phản chiếu.
2. **Innovation + Timeline** — panel đỏ bên trái, 3 ô icon, dòng thời gian 2002 → 2012 → 2024.
3. **CONTENTS 01** — số 01 cỡ lớn, mục lục, breadcrumb.
4. **3 thẻ dưới** — Innovation / Product matrix / Management team (kèm đồng hồ đỏ vẽ bằng SVG).

## Chạy dự án

```bash
npm install     # chỉ cần chạy lần đầu
npm run dev     # mở http://localhost:5173
```

Đóng gói production:

```bash
npm run build   # xuất ra thư mục dist/
npm run preview # xem thử bản build
```

## Cấu trúc

```
src/
├── data/site.js              ← TOÀN BỘ CHỮ TRONG TRANG (sửa 1 chỗ)
├── index.css                 ← màu thương hiệu, font, hiệu ứng
├── App.jsx                   ← bố cục 3 hàng
└── components/
    ├── Hero.jsx              ← banner chính
    ├── AboutCard.jsx         ← panel đỏ + dòng thời gian
    ├── ContentsCard.jsx      ← khối CONTENTS 01
    ├── InnovationCard.jsx    ← thẻ 创新
    ├── ProductMatrixCard.jsx ← thẻ 产品矩阵
    ├── ManagementCard.jsx    ← thẻ 管理团队
    ├── Clock.jsx             ← đồng hồ đỏ (SVG, không cần ảnh)
    ├── Logo.jsx, CardHeader.jsx, SmartImage.jsx, Reveal.jsx
    └── Footer.jsx

public/assets/                ← Ảnh đặt vào đây
```

## Đổi nội dung

Mở `src/data/site.js` — chữ Trung/Anh, số liệu, danh sách menu, mốc thời gian đều nằm trong đó.
Sửa xong trang tự cập nhật, không cần đụng vào component.

## Đổi ảnh

Bỏ ảnh vào `public/assets/` với đúng tên, ghi đè là xong:

| File | Dùng ở đâu |
|---|---|
| `project-01.png` | Ảnh lớn banner Hero |
| `project-02.png` | Thẻ Innovation — mục 01 |
| `project-03.png` | Panel đỏ bên trái khối Innovation |
| `project-04.png` | Thẻ Innovation — mục 02 |
| `project-05.png` | Biểu đồ "Product matrix" + thẻ Innovation mục 03 |
| `project-06.png` | Ảnh dải kiến trúc khối CONTENTS 01 |

Nếu một ảnh bị xóa hoặc sai đường dẫn, trang **tự hiện khối placeholder xám** thay vì vỡ layout —
nên bạn có thể cứ làm dần, cứ thiếu ảnh thì ô đó hiện placeholder.

## Đổi màu / font

Trong `src/index.css`, phần `@theme`:

```css
--color-brand-500: #e4231f;   /* đỏ chính */
--color-brand-600: #c7161a;
--font-display: 'Playfair Display'...  /* font tiêu đề */
--font-sans: 'Inter', 'Noto Sans SC'... /* font chữ thường */
```

## Lưu ý tối ưu ảnh

Ảnh PNG hiện tại nặng khoảng **2–2.7 MB mỗi ảnh (tổng ~14 MB)**. Nên nén trước khi đưa lên
production, ví dụ:

```bash
npx @squoosh/cli --moz png public/assets/project-01.png out.webp
```

Hoặc dùng [tinypng.com](https://tinypng.com) / [squoosh.app](https://squoosh.app).
Nếu rảnh tay, cài `sharp` để tự động sinh bản `.webp` kèm `.png` fallback.

## Ghi chú

- Responsive: 1 cột trên mobile, 2 cột từ `md`, 3 cột từ `lg`.
- Có menu mobile (bấm nút hamburger), hiệu ứng xuất hiện khi cuộn, hover trên từng thẻ.
- Font tải từ Google Fonts; nếu môi trường không có internet sẽ tự dùng font hệ thống.
