import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CursorEffect } from "@/components/cursor-effect"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Mộc Bakery - Bánh Tươi Hàng Ngày",
  description: "Mộc Bakery - Cửa hàng bánh tươi ngon, chất lượng cao với các loại bánh đa dạng.",
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${manrope.variable} font-sans antialiased bg-amber-50`}>
        <CursorEffect />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
