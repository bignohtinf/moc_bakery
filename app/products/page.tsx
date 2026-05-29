import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CATEGORIES, PRODUCTS } from '@/lib/products-data'
import { Phone } from 'lucide-react'

function formatPrice(p: number) {
  return p.toLocaleString('vi-VN') + '₫'
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-10 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">Thực đơn</h1>
        <p className="text-lg text-amber-700 max-w-xl mx-auto mb-6">
          Khám phá các loại bánh tươi được làm mỗi ngày từ nguyên liệu chọn lọc
        </p>
        {/* Notice */}
        <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-800 px-5 py-3 rounded-2xl text-sm">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>Để đặt bánh, vui lòng <Link href="/contact" className="font-semibold underline underline-offset-2 hover:text-amber-900">liên hệ trực tiếp</Link> — trang web chỉ phục vụ quảng bá &amp; đánh giá</span>
        </div>
      </section>

      {/* Category nav anchors */}
      <nav className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-amber-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 justify-center flex-wrap">
          {CATEGORIES.map(cat => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 hover:border-amber-400 transition-colors"
            >
              {cat.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
        {CATEGORIES.map(cat => {
          const items = PRODUCTS.filter(p => p.category === cat.id)
          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-28">
              {/* Section header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">{cat.name}</h2>
                  <p className="text-amber-700 max-w-lg">{cat.description}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-sm text-amber-500">{items.length} món</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-amber-300 via-orange-200 to-transparent mb-10" />

              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {items.map(product => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-amber-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Square image */}
                    <div className="aspect-square overflow-hidden bg-amber-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-amber-900 text-sm leading-snug mb-1">{product.name}</h3>
                      <p className="text-amber-600 text-xs leading-relaxed mb-3 line-clamp-2">{product.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-amber-700 font-bold text-sm">
                          {cat.id === 'special' ? 'Từ ' : ''}{formatPrice(product.price)}
                        </span>
                        {product.note && (
                          <span className="text-xs text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                            {product.note}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA banner */}
      <section className="px-4 py-16 max-w-3xl mx-auto text-center">
        <div className="bg-amber-600 rounded-3xl px-8 py-10 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Muốn đặt bánh?</h3>
          <p className="text-amber-100 mb-6 leading-relaxed">
            Liên hệ trực tiếp qua điện thoại, Facebook hoặc Zalo để được tư vấn và đặt bánh theo yêu cầu.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-amber-700 font-semibold px-8 py-3 rounded-2xl hover:bg-amber-50 transition-colors"
          >
            <Phone className="w-4 h-4" /> Liên hệ ngay
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
