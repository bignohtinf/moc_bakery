'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  image?: string
  description: string
}

export function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-amber-100">
      <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="object-cover"
          />
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-amber-900 mb-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-amber-700 mb-3">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-amber-600">
              {product.price.toLocaleString('vi-VN')}₫
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice.toLocaleString('vi-VN')}₫
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm text-amber-700">4.5</span>
          </div>
        </div>
      </div>
    </div>
  )
}
