"use client"

import Faq from '@/components/faq'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Introduction from '@/components/introduction'
import Judging from '@/components/judging'
import Navbar from '@/components/navbar'
import Partners from '@/components/partners'
import Privacy from '@/components/privacy'
import Prizes from '@/components/prizes'
import Rules from '@/components/rules'
import Timeline from '@/components/timeline'

export default function Home() {
  return (
    <main className="flex-col center">
      <Navbar />
      <Hero />
      <Introduction />
      <Rules />
      <Judging />
      <Faq />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </main>
  )
}
