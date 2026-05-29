'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchOpen])

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between gap-8 w-full max-w-3xl bg-white/90 backdrop-blur-md border border-amber-100 rounded-2xl px-5 py-3 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.png" alt="Mộc Bakery" width={32} height={32} className="rounded-full object-cover" />
          <span className="text-amber-900 font-semibold text-[15px] tracking-tight">Mộc Bakery</span>
        </Link>

        {/* Nav links - Hidden when search is open */}
        {!isSearchOpen && (
          <div className="hidden md:flex items-center gap-6">
            {[
              { label: 'Trang chủ', href: '/' },
              { label: 'Sản phẩm', href: '/products' },
              { label: 'Đánh giá', href: '/reviews' },
              { label: 'Liên hệ', href: '/contact' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-amber-700 hover:text-amber-900 transition-colors text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {/* Search Input - Shown when search is open */}
        {isSearchOpen && (
          <div className="flex-1 flex items-center gap-2">
            <input
              type="text"
              placeholder="Tìm kiếm bánh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-1.5 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-600 text-sm"
              autoFocus
            />
          </div>
        )}

        {/* Search Button */}
        <div ref={searchRef} className="flex items-center gap-2 shrink-0">
          {isSearchOpen ? (
            <button
              onClick={() => {
                setIsSearchOpen(false)
                setSearchQuery('')
              }}
              className="p-1.5 hover:bg-amber-50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-amber-700" />
            </button>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 hover:bg-amber-50 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5 text-amber-700" />
            </button>
          )}
        </div>
      </nav>
    </div>
  )
}
