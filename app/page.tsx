import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ReviewSection } from '@/components/review-section'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div className="relative">
            {/* Live badge */}
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Bánh tươi nướng mỗi ngày
            </span>

            {/* Heading */}
            <h1 className="text-7xl md:text-8xl font-bold text-amber-900 leading-none mb-1">
              Mộc
            </h1>
            <div className="relative inline-block mb-8">
              <h1 className="text-7xl md:text-8xl font-bold text-amber-600 leading-none">
                Bakery
              </h1>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 220 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10 Q55 2 110 8 Q165 14 218 6" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <p className="text-lg text-amber-800 leading-relaxed mb-8 max-w-md">
              Từng chiếc bánh được nướng tươi mỗi sáng từ nguyên liệu chọn lọc — mang hương vị chân thật, ấm áp như bàn tay người thân trao gửi yêu thương.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-5 text-base rounded-xl">
                <Link href="/products">
                  Khám phá sản phẩm
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 px-6 py-5 text-base rounded-xl">
                <Link href="/contact">Đặt bánh ngay</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-amber-900">5+</p>
                <p className="text-xs text-amber-600 mt-0.5">Năm kinh nghiệm</p>
              </div>
              <div className="w-px h-10 bg-amber-200" />
              <div>
                <p className="text-2xl font-bold text-amber-900">100%</p>
                <p className="text-xs text-amber-600 mt-0.5">Nguyên liệu tươi</p>
              </div>
              <div className="w-px h-10 bg-amber-200" />
              <div>
                <p className="text-2xl font-bold text-amber-900">★ 5.0</p>
                <p className="text-xs text-amber-600 mt-0.5">Đánh giá khách hàng</p>
              </div>
            </div>
          </div>

          {/* Right — GIF */}
          <div className="relative flex justify-center items-center">
            {/* Blob background */}
            <div
              className="absolute inset-4 bg-amber-300/40 blur-3xl"
              style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
            />

            {/* Decorative dot grid */}
            <div className="absolute top-6 -right-2 grid grid-cols-4 gap-2 z-0 opacity-60">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              ))}
            </div>
            <div className="absolute -bottom-2 left-4 grid grid-cols-3 gap-2 z-0 opacity-40">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              ))}
            </div>

            {/* Floating card — giờ mở cửa */}
            <div className="absolute top-4 -left-6 z-20 bg-white shadow-xl rounded-2xl px-4 py-3 border border-amber-100">
              <p className="text-[11px] text-amber-400 font-semibold uppercase tracking-wide">Giờ mở cửa</p>
              <p className="text-sm font-bold text-amber-900 mt-0.5">6:00 — 19:30</p>
            </div>

            {/* GIF */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500 cursor-pointer">
              <Image
                src="/0530.gif"
                alt="Mộc Bakery"
                width={480}
                height={480}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>

            {/* Floating card — fresh daily */}
            <div className="absolute -bottom-2 -right-4 z-20 bg-amber-600 text-white shadow-xl rounded-2xl px-4 py-3">
              <p className="text-[11px] font-semibold opacity-75 uppercase tracking-wide">Nướng mới</p>
              <p className="text-sm font-bold mt-0.5">Mỗi ngày</p>
            </div>
          </div>

        </div>
      </section>

      {/* Video / Behind The Scenes Section */}
      <section className="px-4 py-24 bg-gradient-to-b from-orange-50 to-amber-100">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-white border border-amber-200 text-amber-600 px-4 py-1.5 rounded-full text-sm font-medium mb-5 shadow-sm">
              <span className="text-base"></span> Hậu trường làm bánh
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 leading-tight mb-4">
              Đặc sắc &amp; đa dạng<br />
              <span className="text-amber-600">từng chiếc bánh</span>
            </h2>
            <p className="text-amber-700 max-w-lg mx-auto text-base leading-relaxed">
              Mỗi chiếc bánh là một tác phẩm nhỏ — được tạo ra với tình yêu, kỹ thuật tỉ mỉ và nguyên liệu chất lượng nhất từ thiên nhiên.
            </p>
          </div>

          {/* Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                src: 'https://res.cloudinary.com/dxxiercxx/video/upload/v1780076031/B%C3%A1nh_m%C3%A8o_xinh_x%E1%BB%89u_nh%C3%ACn_l%C3%A0_mu%E1%BB%91n_%C3%B4m_lu%C3%B4n_Xem_th%C3%AAm_zm3bro.mp4',
                label: 'Bánh mèo xinh xíu',
                tag: 'Siêu đáng yêu',
              },
              {
                src: 'https://res.cloudinary.com/dxxiercxx/video/upload/v1780076034/Chi%E1%BA%BFc_b%C3%A1nh_nh%E1%BB%8F_xinh_v%E1%BB%9Bi_tone_tr%E1%BA%AFng_cam_si%C3%AAu_n%E1%BB%95i_b%E1%BA%ADt_N_Xem_th%C3%AAm_qexqwj.mp4',
                label: 'Tone trắng cam nổi bật',
                tag: 'Tinh tế và sang trọng',
              },
            ].map((video, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Top badge */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-amber-800 text-sm font-semibold px-3 py-1.5 rounded-full shadow-md">
                  {video.tag}
                </div>

                <video
                  src={video.src}
                  controls
                  muted
                  playsInline
                  className="w-full object-cover"
                  style={{ aspectRatio: '9/16', maxHeight: '540px' }}
                />

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 py-4">
                  <p className="text-white font-semibold text-sm">{video.label}</p>
                  <p className="text-white/70 text-xs mt-0.5">Mộc Bakery — Yên Thành, Nghệ An</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Specials Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Sản phẩm đặc biệt
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3">Dành riêng cho bạn</h2>
          <p className="text-amber-700 max-w-md mx-auto">Tinh tế từng lớp kem, tươi mới từng chiếc bánh — làm từ tâm huyết</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 — Bánh kem sinh nhật */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-amber-100">
            {/* Square image */}
            <div className="aspect-square overflow-hidden">
              <Image
                src="/cake_birth_1.jpg"
                alt="Bánh kem sinh nhật"
                width={600}
                height={600}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Badge on image */}
            <div className="absolute top-4 left-4">
              <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Đặt theo yêu cầu
              </span>
            </div>
            {/* Gradient overlay bottom of image */}
            <div className="absolute top-0 left-0 right-0 h-[50%] bg-gradient-to-b from-transparent to-transparent group-hover:from-transparent pointer-events-none" />
            {/* Info */}
            <div className="p-6 border-t border-amber-50">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-amber-900">Bánh kem sinh nhật</h3>
                <div className="text-right">
                  <p className="text-xl font-bold text-amber-600">150.000₫</p>
                  <p className="text-xs text-gray-400 line-through">200.000₫</p>
                </div>
              </div>
              <p className="text-amber-700 text-sm mb-5 leading-relaxed">
                Bánh kem tươi thiết kế độc đáo theo yêu cầu — hoàn hảo cho mọi dịp sinh nhật, kỷ niệm đặc biệt.
              </p>
              <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-2xl py-5">
                <Link href="/contact">Đặt bánh ngay <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>

          {/* Card 2 — Bữa sáng */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-amber-100">
            {/* Square image */}
            <div className="aspect-square overflow-hidden">
              <Image
                src="/breakfast.jpg"
                alt="Bữa sáng Mộc Bakery"
                width={600}
                height={600}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Badge on image */}
            <div className="absolute top-4 left-4">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Mỗi buổi sáng
              </span>
            </div>
            {/* Info */}
            <div className="p-6 border-t border-amber-50">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-amber-900">Bữa sáng Mộc Bakery</h3>
                <div className="text-right">
                  <p className="text-xl font-bold text-orange-500">Từ 10.000₫</p>
                  <p className="text-xs text-transparent">—</p>
                </div>
              </div>
              <p className="text-amber-700 text-sm mb-5 leading-relaxed">
                Khởi đầu ngày mới với những chiếc bánh thơm phức vừa ra lò — tươi mới, đủ chất, ngon đến miếng cuối.
              </p>
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-2xl py-5">
                <Link href="/products">Xem thực đơn <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section id="products" className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">Thực đơn</span>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3">Ba dòng bánh đặc trưng</h2>
            <p className="text-amber-700 max-w-md mx-auto">Từ bữa sáng đến những dịp đặc biệt — Mộc Bakery đều có</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '', name: 'Bánh bữa sáng', href: '/products#breakfast',
                image: '/breakfast_2.jpg',
                desc: 'Bánh mì tươi, set combo — khởi đầu ngày mới thật ngon',
                from: 'Từ 15.000₫', accent: 'amber',
              },
              {
                emoji: '', name: 'Bánh hàng ngày', href: '/products#everyday',
                image: '/cake_every_5.jpg',
                desc: 'Mousse, cuộn kem, tartlet — ngọt ngào cho mọi khoảnh khắc',
                from: 'Từ 20.000₫', accent: 'orange',
              },
              {
                emoji: '', name: 'Bánh kem đặc biệt', href: '/products#special',
                image: '/cake_vuongmien.jpg',
                desc: 'Sinh nhật, lễ kỷ niệm, đám cưới — thiết kế theo yêu cầu',
                from: 'Từ 150.000₫', accent: 'rose',
              },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 border border-amber-100"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-2xl mb-0.5">{cat.emoji}</p>
                      <h3 className="font-bold text-lg leading-tight">{cat.name}</h3>
                      <p className="text-white/80 text-xs mt-1 leading-relaxed">{cat.desc}</p>
                    </div>
                    <span className="text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 flex-shrink-0 ml-3">
                      {cat.from}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 px-8 rounded-xl">
              <Link href="/products">Xem toàn bộ thực đơn <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
