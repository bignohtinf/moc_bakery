'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, AlertCircle, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Vui long dien day du thong tin')
      return
    }
    toast.success('Cam on ban da nhan tin! Chung toi se phan hoi som.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50">
      <Navbar />

      <section className="pt-32 pb-10 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">Lien he</h1>
        <p className="text-xl text-amber-700 max-w-xl mx-auto">
          Ghe tham chung toi hoac nhan tin de duoc tu van
        </p>
      </section>

      <section className="px-4 max-w-4xl mx-auto mb-8">
        <div className="bg-amber-600 text-white rounded-2xl px-6 py-5 flex gap-4 items-start shadow-lg">
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-lg mb-1">Luu y ve dat banh</p>
            <p className="text-amber-100 text-sm leading-relaxed">
              De dat banh, vui long <strong className="text-white">lien he truc tiep</strong> qua dien thoai, Facebook hoac Zalo.
              Trang web chi phuc vu muc dich <strong className="text-white">quang ba va nhan danh gia</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Thong tin lien he</h2>
            {[
              { icon: MapPin, label: 'Dia chi', value: 'Nga tu xom Doi Cung, xa Yen Thanh, tinh Nghe An' },
              { icon: Phone, label: 'Dien thoai', value: '092 7826567' },
              { icon: Mail, label: 'Email', value: 'thanh.cv184@gmail.com' },
              { icon: Clock, label: 'Gio mo cua', value: 'Thu 2 - Chu nhat: 6:00 - 19:30' },
            ].map(({ icon: Icon, label, value }) => (
              <Card key={label} className="p-5 border-amber-200 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-amber-500 uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-amber-900 font-medium">{value}</p>
                </div>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Gui tin nhan</h2>
            <Card className="p-8 border-amber-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Ten cua ban</label>
                  <Input placeholder="Nguyen Van A" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="border-amber-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Email</label>
                  <Input type="email" placeholder="email@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="border-amber-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Dien thoai (tuy chon)</label>
                  <Input type="tel" placeholder="0xx xxxx xxx" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="border-amber-200 rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-900 mb-2">Tin nhan</label>
                  <Textarea placeholder="Nhap tin nhan cua ban..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="border-amber-200 rounded-xl min-h-32 resize-none" />
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl py-5">
                  Gui tin nhan
                </Button>
              </form>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-amber-900">Vi tri cua hang</h2>
            <a
              href="https://maps.app.goo.gl/wsuvg8k3AU7RFrdK9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
            >
              Mo trong Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden border-2 border-amber-200 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4358395302543!2d105.48909231156843!3d19.000507054262318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313761002ad4984b%3A0x6a16311adff23626!2zTeG7mWMgQmFrZXJ5!5e0!3m2!1svi!2s!4v1780079038276!5m2!1svi!2s"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vi tri Moc Bakery"
            />
          </div>
          <p className="text-sm text-amber-600 mt-3 text-center">
            Nga tu xom Doi Cung, xa Yen Thanh, tinh Nghe An
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
