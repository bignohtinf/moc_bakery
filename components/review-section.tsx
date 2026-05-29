'use client'

import { useState, useEffect } from 'react'
import { Star, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  created_at: string
}

const AVATAR_COLORS = [
  'bg-amber-500', 'bg-orange-500', 'bg-rose-400',
  'bg-violet-400', 'bg-sky-400', 'bg-emerald-500',
]

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function StarDisplay({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const cls = size === 'md' ? 'w-5 h-5' : 'w-3.5 h-3.5'
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <Star key={s} className={`${cls} ${s <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
      ))}
    </div>
  )
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length]
  const initial = review.name.trim()[0]?.toUpperCase() ?? '?'
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100 flex gap-4 hover:shadow-md transition-shadow duration-200">
      <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5`}>
        {initial}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <span className="font-semibold text-amber-900 text-sm truncate">{review.name}</span>
          <span className="text-xs text-gray-400 flex-shrink-0">{formatDate(review.created_at)}</span>
        </div>
        <StarDisplay rating={review.rating} />
        <p className="text-amber-800 text-sm mt-2 leading-relaxed">{review.comment}</p>
      </div>
    </div>
  )
}

function RatingSummary({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) return null
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  return (
    <div className="flex items-center gap-5 bg-white/70 rounded-2xl px-8 py-4 border border-amber-100">
      <div className="text-center">
        <p className="text-5xl font-bold text-amber-600 leading-none">{avg.toFixed(1)}</p>
        <div className="mt-1"><StarDisplay rating={Math.round(avg)} size="md" /></div>
      </div>
      <div className="w-px h-12 bg-amber-200" />
      <div className="text-center">
        <p className="text-2xl font-bold text-amber-900">{reviews.length}</p>
        <p className="text-xs text-amber-600 mt-0.5">đánh giá</p>
      </div>
      <div className="w-px h-12 bg-amber-200" />
      <div className="text-center">
        <p className="text-2xl font-bold text-amber-900">100%</p>
        <p className="text-xs text-amber-600 mt-0.5">hài lòng</p>
      </div>
    </div>
  )
}

export function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', rating: 5, comment: '' })
  const [hoveredStar, setHoveredStar] = useState(0)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.json())
      .then(data => { setReviews(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.comment.trim()) {
      toast.error('Vui lòng điền tên và nhận xét')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      setForm({ name: '', rating: 5, comment: '' })
    } catch {
      toast.error('Có lỗi xảy ra, vui lòng thử lại')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="reviews" className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-medium mb-5">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Cảm nhận thực tế
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-3">
            Khách hàng nói gì<br />
            <span className="text-amber-600">về chúng tôi?</span>
          </h2>
          {!loading && reviews.length > 0 && (
            <div className="flex justify-center mt-6">
              <RatingSummary reviews={reviews} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-amber-100 lg:sticky lg:top-24">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Cảm ơn bạn! 🌟</h3>
                  <p className="text-amber-700 text-sm leading-relaxed mb-6">
                    Đánh giá của bạn đã được đăng. Tải lại trang để xem ngay!
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-amber-600 text-sm underline underline-offset-2 hover:text-amber-700">
                    Gửi thêm đánh giá
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-amber-900 mb-6">Chia sẻ cảm nhận của bạn</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">Tên của bạn</label>
                      <Input placeholder="Nguyễn Văn A..." value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border-amber-200 rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">Đánh giá</label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(s => (
                          <button key={s} type="button" onMouseEnter={() => setHoveredStar(s)} onMouseLeave={() => setHoveredStar(0)} onClick={() => setForm({ ...form, rating: s })}>
                            <Star className={`w-8 h-8 transition-colors ${s <= (hoveredStar || form.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-900 mb-2">Nhận xét</label>
                      <Textarea placeholder="Chia sẻ trải nghiệm của bạn..." value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })} className="border-amber-200 rounded-xl min-h-[100px] resize-none" />
                    </div>
                    <Button type="submit" disabled={submitting} className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl py-5">
                      <Send className="w-4 h-4 mr-2" />
                      {submitting ? 'Đang gửi...' : 'Gửi đánh giá'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Reviews list */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-amber-100 animate-pulse">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-amber-100" />
                      <div className="flex-1 space-y-2 pt-1">
                        <div className="h-3 bg-amber-100 rounded w-1/3" />
                        <div className="h-3 bg-amber-100 rounded w-1/4" />
                        <div className="h-3 bg-amber-100 rounded w-full mt-3" />
                        <div className="h-3 bg-amber-100 rounded w-3/4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : reviews.length === 0 ? (
              <div className="text-center py-20">
                <Star className="w-12 h-12 mx-auto mb-4 text-amber-200" />
                <p className="font-medium text-amber-700">Chưa có đánh giá nào.</p>
                <p className="text-sm mt-1 text-amber-500">Hãy là người đầu tiên chia sẻ cảm nhận!</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[680px] overflow-y-auto pr-1">
                {reviews.map((review, i) => (
                  <ReviewCard key={review.id} review={review} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
