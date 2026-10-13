// Toàn bộ nội dung chữ nằm ở đây — sửa ở 1 chỗ là đổi cả trang.

// Tiền tố đường dẫn: chạy dev là '/', deploy lên github.io/<repo> là './'
const BASE = import.meta.env.BASE_URL

export const IMG = {
  // Ảnh trong thư mục public/assets
  p1: `${BASE}assets/project-01.png`, // tổ hợp tháp kính
  p2: `${BASE}assets/project-02.png`, // tháp ven hồ
  p3: `${BASE}assets/project-03.png`, // trung tâm thương mại
  p4: `${BASE}assets/project-04.png`, // dãy chung cư
  p5: `${BASE}assets/project-05.png`, // masterplan siêu cao
  p6: `${BASE}assets/project-06.png`, // 2 tháp đối xứng
}

export const nav = [
  { label: '关于我们', en: 'ABOUT' },
  { label: '项目中心', en: 'PROJECTS' },
  { label: '产品体系', en: 'PRODUCTS' },
  { label: '管理团队', en: 'TEAM' },
  { label: '联系我们', en: 'CONTACT' },
]

export const hero = {
  eyebrow: { zh: '企业介绍', en: 'ENTERPRISE PROFILE' },
  title: 'INNOVATION',
  subtitle: '创新驱动 · 价值共生',
  lead: 'XX 集团企业专著领域——创新驱动 · 价值共生',
  cta: '成立于 2002年',
  stats: [
    { label: '项目储备', value: '2000+', unit: '个' },
    { label: '总建筑面积', value: '500', unit: '万㎡' },
  ],
  image: IMG.p1,
}

export const advantages = [
  { mono: 'D1', title: '产品研发', desc: '自主研发体系' },
  { mono: 'AI', title: '智慧建造', desc: '数字化管理' },
  { mono: 'MDE', title: '绿色低碳', desc: '可持续理念' },
]

export const timeline = [
  {
    no: '01',
    year: '2002',
    title: '企业创立',
    desc: '深耕地产开发领域，以品质立基，构建稳健可持续的经营版图。',
  },
  {
    no: '02',
    year: '2012',
    title: '全国布局',
    desc: '业务拓展至全国 30 余城，累计交付高品质作品超百万平方米。',
  },
  {
    no: '03',
    year: '2024',
    title: '创新驱动',
    desc: '以创新设计与智慧建造为核心，探索城市生活的全新可能。',
  },
]

export const contents = {
  title: 'CONTENTS',
  no: '01',
  items: [
    { zh: '企业介绍', en: 'INTRODUCTION' },
    { zh: '项目中心', en: 'PROJECTS' },
    { zh: '产品体系', en: 'PRODUCTS' },
    { zh: '管理团队', en: 'TEAM' },
    { zh: '联系我们', en: 'CONTACT' },
  ],
  image: IMG.p6,
}

export const innovation = {
  zh: '创新',
  en: 'Innovation',
  lead: '以创新设计驱动人居体验升级',
  items: [
    { no: '01', zh: '创新设计', en: 'DESIGN', image: IMG.p2, desc: '大师团队执笔，诠释空间美学。' },
    { no: '02', zh: '精工建造', en: 'CRAFT', image: IMG.p4, desc: '严苛工序标准，兑现每一处细节。' },
    { no: '03', zh: '智慧社区', en: 'SMART', image: IMG.p5, desc: '全龄生活场景，连接城市未来。' },
  ],
}

export const matrix = {
  zh: '产品矩阵',
  en: 'Product matrix',
  image: IMG.p5,
  stats: [
    { value: '30+', label: '覆盖城市', en: 'CITIES' },
    { value: '2000+', label: '在管项目', en: 'PROJECTS' },
    { value: '500万', label: '建筑面积㎡', en: 'GFA' },
    { value: '99.2%', label: '客户满意度', en: 'SATISFACTION' },
  ],
}

export const team = {
  zh: '管理团队',
  en: 'Management team',
  headline: 'Leading the business',
  desc: '专业高效的核心团队，为企业可持续发展提供坚实保障。',
  cta: '了解团队',
  stats: [
    { value: '12年', label: '核心管理经验', en: 'EXPERIENCE' },
    { value: '15年', label: '行业深耕', en: 'INDUSTRY' },
    { value: '13年', label: '品牌沉淀', en: 'BRAND' },
  ],
}
