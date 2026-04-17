'use client'

import dynamic from 'next/dynamic'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Research from '@/components/Research'
import GitHubStats from '@/components/GitHubStats'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), { ssr: false })

const Divider = () => (
  <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.3), transparent)', margin: '0 32px' }} />
)

export default function Home() {
  return (
    <SmoothScroll>
      <ThreeBackground />
      <CustomCursor />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <main>
          <Hero />
          <Divider />
          <Skills />
          <Divider />
          <Projects />
          <Divider />
          <Experience />
          <Divider />
          <Research />
          <Divider />
          <GitHubStats />
          <Divider />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
