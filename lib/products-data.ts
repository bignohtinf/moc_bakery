export type Category = {
  id: string
  name: string
  tagline: string
  description: string
  coverImage: string
  accent: string
}

export type Product = {
  id: string
  category: string
  name: string
  image: string
  price: number
  originalPrice?: number
  description: string
  note?: string
}

export const CATEGORIES: Category[] = [
  {
    id: 'breakfast',
    name: 'Bánh bữa sáng',
    tagline: 'Khởi đầu ngày mới',
    description: 'Những chiếc bánh tươi thơm vừa ra lò mỗi sáng sớm — nhẹ nhàng, đủ năng lượng cho cả ngày dài.',
    coverImage: '/breakfast.jpg',
    accent: 'amber',
  },
  {
    id: 'everyday',
    name: 'Bánh hàng ngày',
    tagline: 'Ngọt ngào mỗi ngày',
    description: 'Các loại bánh ngọt tinh tế cho mọi khoảnh khắc — ăn sáng, tráng miệng hay thưởng thức bất cứ lúc nào.',
    coverImage: '/cake_every.jpg',
    accent: 'orange',
  },
  {
    id: 'special',
    name: 'Bánh kem đặc biệt',
    tagline: 'Cho những dịp đáng nhớ',
    description: 'Bánh kem tươi thiết kế theo yêu cầu cho sinh nhật, kỷ niệm, đám cưới và mọi dịp đặc biệt.',
    coverImage: '/cake_birth_1.jpg',
    accent: 'rose',
  },
]

export const PRODUCTS: Product[] = [
  // ── Bữa sáng ──────────────────────────────────────────
  {
    id: 'b1', category: 'breakfast',
    name: 'Bánh mì bơ tươi',
    image: '/breakfast.jpg',
    price: 10000,
    description: 'Bánh mì bơ nướng giòn thơm, vỏ giòn ruột mềm',
  },
  {
    id: 'b2', category: 'breakfast',
    name: 'Bánh mì khác',
    image: '/breakfast_2.jpg',
    price: 10000,
    description: 'Bánh mì nho khô ngọt nhẹ, mềm xốp thơm lừng',
  },
  {
    id: 'b3', category: 'breakfast',
    name: 'Set bữa sáng',
    image: '/breakfast_3.jpg',
    price: 10000,
    description: 'Combo bánh mì đa vị — đủ chất, no lâu cho buổi sáng',
  },

  // ── Hàng ngày ─────────────────────────────────────────
  {
    id: 'e1', category: 'everyday',
    name: 'Bánh ngọt mini',
    image: '/cake_every.jpg',
    price: 45000,
    description: 'Bánh ngọt nhỏ xinh, vị kem tươi nhẹ nhàng',
  },
  {
    id: 'e2', category: 'everyday',
    name: 'Bánh bông lan',
    image: '/cake_every_2.jpg',
    price: 40000,
    description: 'Bánh bông lan mềm mịn, vị trứng sữa thanh nhẹ',
  },
  {
    id: 'e3', category: 'everyday',
    name: 'Bánh cuộn kem',
    image: '/cake_every_3.jpg',
    price: 50000,
    description: 'Bánh cuộn nhân kem tươi, cuộn mịn đẹp mắt',
  },
  {
    id: 'e4', category: 'everyday',
    name: 'Bánh mousse',
    image: '/cake_every_4.jpg',
    price: 45000,
    description: 'Mousse mềm mịn tan chảy trong miệng',
  },
  {
    id: 'e5', category: 'everyday',
    name: 'Bánh phô mai',
    image: '/cake_every_5.jpg',
    price: 45000,
    description: 'Cheesecake béo ngậy, lớp caramel vàng óng',
  },
  {
    id: 'e6', category: 'everyday',
    name: 'Bánh tartlet',
    image: '/cake_every_6.jpg',
    price: 45000,
    description: 'Vỏ giòn rụm, nhân kem tươi và trái cây theo mùa',
  },
  {
    id: 'e7', category: 'everyday',
    name: 'Bánh mini mix',
    image: '/cake_mini.jpg',
    price: 60000,
    description: 'Hộp bánh mini nhiều vị, quà tặng thú vị',
  },

  // ── Bánh kem đặc biệt ─────────────────────────────────
  {
    id: 's1', category: 'special',
    name: 'Bánh kem sinh nhật',
    image: '/cake_birth_1.jpg',
    price: 250000,
    description: 'Bánh kem sinh nhật thiết kế theo yêu cầu',
    note: 'Có ngay trong ngày',
  },
  {
    id: 's2', category: 'special',
    name: 'Bánh công chúa',
    image: '/cake_congchua.jpg',
    price: 350000,
    description: 'Bánh trang trí công chúa xinh đẹp cho bé gái',
    note: 'Có ngay trong ngày',
  },
  {
    id: 's3', category: 'special',
    name: 'Bánh hoa công chúa',
    image: '/cake_congchua_2.jpg',
    price: 280000,
    description: 'Bánh kem hoa công chúa rực rỡ nhiều màu sắc',
    note: 'Có ngay trong ngày',
  },
  {
    id: 's4', category: 'special',
    name: 'Bánh dịp 8/3',
    image: '/cake_8_3.jpg',
    price: 250000,
    description: 'Bánh kem đặc biệt dành tặng ngày Quốc tế Phụ nữ',
    note: 'Có ngay trong ngày',
  },
  {
    id: 's5', category: 'special',
    name: 'Bánh điểm 10',
    image: '/cake_diem.jpg',
    price: 300000,
    description: 'Bánh khen ngợi thành tích học tập xuất sắc',
    note: 'Có ngay trong ngày',
  },
  {
    id: 's6', category: 'special',
    name: 'Bánh đặc biệt',
    image: '/cake_special.jpg',
    price: 350000,
    description: 'Bánh kem cao cấp thiết kế hoàn toàn theo yêu cầu',
    note: 'Có ngay trong ngày',
  },
  {
    id: 's7', category: 'special',
    name: 'Bánh decor tự do',
    image: '/cake_tiger.jpg',
    price: 280000,
    description: 'Bánh kem hình hổ vui nhộn dễ thương cho bé trai',
    note: 'Có ngay trong ngày',
  },
  {
    id: 's8', category: 'special',
    name: 'Bánh vương miện',
    image: '/cake_vuongmien.jpg',
    price: 300000,
    description: 'Bánh kem vương miện sang trọng, đường nét tinh xảo',
    note: 'Có ngay trong ngày',
  },
  {
    id: 's9', category: 'special',
    name: 'Bánh cưới',
    image: '/cake_wedding.jpg',
    price: 500000,
    description: 'Bánh cưới nhiều tầng, thiết kế theo yêu cầu cô dâu chú rể',
    note: 'Có ngay trong ngày',
  },
]
