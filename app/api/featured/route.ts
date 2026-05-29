import { NextResponse } from 'next/server'

let featuredProduct = {
  id: 'featured-1',
  name: 'Bánh Kem Sinh Nhật',
  category: 'cake',
  price: 150000,
  originalPrice: 200000,
  image: '/placeholder.jpg',
  description: 'Bánh kem sinh nhật tươi ngon, tùy chỉnh theo yêu cầu',
  isActive: true
}

export async function GET() {
  return NextResponse.json(featuredProduct)
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    featuredProduct = {
      ...featuredProduct,
      ...data
    }
    return NextResponse.json({ success: true, product: featuredProduct })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
