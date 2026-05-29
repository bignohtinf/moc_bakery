# Mộc Bakery - Trang Web Bán Bánh

Trang web bán bánh tươi hàng ngày cho Mộc Bakery với tính năng quản lý admin.

## Tính Năng

### Trang Người Dùng (Trang Chủ)
- Xem danh sách bánh theo loại (Croissant, Bánh Kem, Bánh Mì)
- Lọc sản phẩm theo danh mục
- Xem thông tin chi tiết sản phẩm (tên, giá, mô tả)
- Đánh giá cửa hàng (1-5 sao)
- Xem đánh giá từ khách hàng khác
- Footer với thông tin liên hệ

### Trang Admin (Quản Lý)
- Đăng nhập bằng mật khẩu (mặc định: `admin123`)
- **Quản lý sản phẩm:**
  - Thêm sản phẩm mới
  - Chỉnh sửa thông tin sản phẩm
  - Xóa sản phẩm
  - Cập nhật giá
- **Xem đánh giá:**
  - Xem tất cả đánh giá từ khách hàng
  - Xem rating và bình luận

## Cài Đặt

```bash
cd frontend
npm install
```

## Chạy Ứng Dụng

### Development
```bash
npm run dev
```
Truy cập: http://localhost:3000

### Production
```bash
npm run build
npm start
```

## Cấu Trúc Dự Án

```
frontend/
├── app/
│   ├── page.tsx              # Trang chủ
│   ├── admin/
│   │   └── page.tsx          # Trang quản lý
│   ├── api/
│   │   ├── products/
│   │   │   └── route.ts      # API sản phẩm
│   │   └── reviews/
│   │       └── route.ts      # API đánh giá
│   ├── layout.tsx            # Layout chính
│   └── globals.css           # CSS toàn cục
├── components/
│   ├── navbar.tsx            # Thanh điều hướng
│   ├── footer.tsx            # Footer
│   ├── product-card.tsx      # Thẻ sản phẩm
│   ├── review-section.tsx    # Phần đánh giá
│   └── ui/                   # Các component UI
└── package.json
```

## Màu Sắc

Trang web sử dụng bảng màu sáng sủa, hiện đại phù hợp với bánh:
- **Chính:** Amber/Orange (màu bánh)
- **Phụ:** Trắng, Kem
- **Nền:** Gradient từ Amber-50 đến Orange-50

## Mật Khẩu Admin

Mật khẩu mặc định để đăng nhập trang admin: **admin123**

⚠️ **Lưu ý:** Trong production, hãy thay đổi mật khẩu và sử dụng hệ thống xác thực thực sự.

## Công Nghệ Sử Dụng

- **Next.js 16** - Framework React
- **TypeScript** - Ngôn ngữ lập trình
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## Hướng Phát Triển

Để mở rộng ứng dụng:

1. **Kết nối Database:** Thay thế mock data bằng database thực (MongoDB, PostgreSQL, etc.)
2. **Xác thực thực sự:** Sử dụng NextAuth.js hoặc JWT
3. **Thanh toán:** Tích hợp Stripe hoặc PayPal
4. **Đặt hàng:** Thêm tính năng đặt bánh
5. **Email:** Gửi xác nhận đơn hàng qua email

## Liên Hệ

- Địa chỉ: Ngã tư xóm Đội Cung, xã Yên Thành, tỉnh Nghệ An
- Điện thoại: 092 7826567
- Email: thanh.cv184@gmail.com
