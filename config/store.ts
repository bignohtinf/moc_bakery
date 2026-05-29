// Cấu hình thông tin cửa hàng Mộc Bakery

export const storeConfig = {
  name: 'Mộc Bakery',
  tagline: 'Bánh tươi hàng ngày, chất lượng cao, yêu thương từng chiếc',

  contact: {
    address: 'Ngã tư xóm Đội Cung, xã Yên Thành, tỉnh Nghệ An',
    phone: '092 7826567',
    email: 'thanh.cv184@gmail.com',
  },

  hours: [
    { day: 'Thứ 2 - Thứ 6', time: '7:00 - 19:00' },
    { day: 'Thứ 7 - Chủ nhật', time: '8:00 - 20:00' },
  ],

  admin: {
    defaultPassword: 'admin123', // Thay đổi trong production
  },

  categories: [
    { id: 'all', name: 'Tất cả' },
    { id: 'croissant', name: 'Croissant' },
    { id: 'cake', name: 'Bánh Kem' },
    { id: 'bread', name: 'Bánh Mì' },
  ],

  colors: {
    primary: 'amber-600',
    primaryHover: 'amber-700',
    primaryDark: 'amber-900',
    secondary: 'orange-50',
    background: 'amber-50',
    border: 'amber-200',
  },
}
