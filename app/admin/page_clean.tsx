'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import type { Review } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Star, Trash2, LogOut, BarChart3 } from 'lucide-react'
import { toast } from 'sonner'

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <Star key={s} className={`w-3.5 h-3.5 ${s <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
      ))}
    </div>
  )
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggingIn, setLoggingIn] = useState(false)
  const [checkingSession, setCheckingSession] = useState(true)

  const [reviews, setReviews] = useState<Review[]>([])
  const [loadingReviews, setLoadingReviews] = useState(false)

  // Check existing session
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setIsLoggedIn(true)
        fetchReviews()
      }
      setCheckingSession(false)
    })
  }, [])

  const fetchReviews = useCallback(async () => {
    setLoadingReviews(true)
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error && data) setReviews(data as Review[])
    setLoadingReviews(false)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoggingIn(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      toast.error('Email hoặc mật khẩu không đúng')
    } else {
      setIsLoggedIn(true)
      fetchReviews()
      toast.success('Đăng nhập thành công!')
    }
    setLoggingIn(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setIsLoggedIn(false)
    setReviews([])
    toast.success('Đã đăng xuất')
  }

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('reviews').delete().eq('id', id)
    if (error) { toast.error('Lỗi khi xoá'); return }
    setReviews(prev => prev.filter(r => r.id !== id))
    toast.success('Đã xoá đánh giá')
  }

  const total = reviews.length

  // Loading session check
  if (checkingSession) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-amber-300 border-t-amber-600 rounded-full animate-spin" />
      </div>
    )
  }

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-amber-200 shadow-xl">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="Mộc Bakery" width={64} height={64} className="rounded-full" />
            </div>
            <h1 className="text-2xl font-bold text-amber-900 text-center mb-1">Mộc Bakery</h1>
            <p className="text-center text-amber-600 text-sm mb-8">Trang quản trị</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">Email</label>
                <Input type="email" placeholder="admin@mocbakery.com" value={email} onChange={e => setEmail(e.target.value)} className="border-amber-200 rounded-xl" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">Mật khẩu</label>
                <Input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} className="border-amber-200 rounded-xl" required />
              </div>
              <Button type="submit" disabled={loggingIn} className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl py-5">
                {loggingIn ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    )
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-amber-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Mộc Bakery" width={36} height={36} className="rounded-full" />
            <div>
              <h1 className="font-bold text-amber-900 leading-tight">Quản lý Mộc Bakery</h1>
              <p className="text-xs text-amber-500">Đánh giá khách hàng</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm" className="border-amber-300 text-amber-700 hover:bg-amber-50 gap-2">
            <LogOut className="w-4 h-4" /> Đăng xuất
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">

        {/* Stats */}
        <Card className="p-5 border-amber-100 flex items-center gap-4 w-fit">
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-amber-900">{total}</p>
            <p className="text-xs text-amber-600">Tổng đánh giá</p>
          </div>
          <button onClick={fetchReviews} className="ml-6 text-sm text-amber-600 hover:text-amber-700 underline underline-offset-2">
            Tải lại
          </button>
        </Card>

        {/* Reviews */}
        {loadingReviews ? (
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <Card key={i} className="p-5 border-amber-100 animate-pulse">
                <div className="h-4 bg-amber-100 rounded w-1/4 mb-3" />
                <div className="h-3 bg-amber-100 rounded w-full mb-2" />
                <div className="h-3 bg-amber-100 rounded w-2/3" />
              </Card>
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <Card className="p-12 text-center border-amber-100">
            <p className="text-amber-600">Chưa có đánh giá nào</p>
          </Card>
        ) : (
          <div className="space-y-3">
            {reviews.map(review => (
              <Card key={review.id} className="p-5 border border-amber-100 bg-white">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-semibold text-amber-900">{review.name}</span>
                      <StarDisplay rating={review.rating} />
                    </div>
                    <p className="text-amber-800 text-sm leading-relaxed">{review.comment}</p>
                    <p className="text-xs text-gray-400 mt-2">{formatDate(review.created_at)}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="w-9 h-9 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center transition-colors"
                      title="Xoá"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
