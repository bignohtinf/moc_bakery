'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ReviewSection } from '@/components/review-section'

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
          Đánh giá từ khách hàng
        </h1>
        <p className="text-xl text-amber-700">
          Chia sẻ trải nghiệm của bạn với Mộc Bakery
        </p>
      </section>

      {/* Reviews Section */}
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <ReviewSection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
