import { NextResponse } from 'next/server'
import { PRODUCTS } from '@/lib/products-data'

export async function GET() {
  return NextResponse.json(PRODUCTS)
}
