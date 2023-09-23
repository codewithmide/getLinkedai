import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'GetLinkedAI',
  description: 'Where Dreams Meet Opportunities for a Perfect Match!',
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
        <Toaster/>
      </body>
    </html>
  )
}
