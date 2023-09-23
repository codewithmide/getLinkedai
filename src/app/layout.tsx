import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'GetLinkedAI',
  description: 'Where Dreams Meet Opportunities for a Perfect Match!',
  openGraph: {
    images: '/images/opengraph-image.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="montserrat bg-darkBlue text-white">
        {children}
        <Analytics />
        <Toaster/>
      </body>
    </html>
  )
}
