import localFont from 'next/font/local'
import { GlowCursor } from '@/components/glow-cursor'
import './globals.css'

const nextFont = localFont({
  src: '../public/next.woff2',
  variable: '--font-next'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${nextFont.variable} bg-black text-white min-h-screen`}>
        <GlowCursor />
        {children}
      </body>
    </html>
  )
}

