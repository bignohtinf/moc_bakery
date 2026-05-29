'use client'

import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-amber-200 text-amber-900 mt-20 relative overflow-hidden" style={{ isolation: 'isolate' }}>
      {/* Watermark — z-index: -1 so it sits behind all content (z=0) */}
      <div
        className="absolute bottom-0 left-1/2 pointer-events-none select-none"
        style={{ transform: 'translateX(-50%)', whiteSpace: 'nowrap', zIndex: -1 }}
      >
        <span
          className="font-bold text-amber-500/30"
          style={{ fontSize: '13rem', lineHeight: 1 }}
        >
          Mộc Bakery
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mộc Bakery</h3>
            <p className="text-amber-800">
              Cửa hàng bánh tươi hàng ngày với các sản phẩm chất lượng cao, được làm từ những nguyên liệu tốt nhất.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
            <div className="space-y-3 text-amber-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Ngã tư xóm Đội Cung, xã Yên Thành, tỉnh Nghệ An</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>092 7826567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>thanh.cv184@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Giờ mở cửa</h3>
            <div className="space-y-2 text-amber-800 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Thứ 2 - Chủ nhật: 6:00 - 19:30</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/tiembanh.mocbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 hover:text-amber-900 transition-colors"
                title="Fanpage"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/vanthanh.chu.12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 hover:text-amber-900 transition-colors"
                title="Facebook Cá nhân"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://zalo.me/0927826567"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 hover:text-amber-900 transition-colors"
                title="Zalo"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-400 pt-8 text-center text-amber-800">
          <p>&copy; 2026 Mộc Bakery.</p>
        </div>
      </div>
    </footer>
  )
}
