import type { Metadata } from 'next'
import { Space_Grotesk, Syne } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-grotesk',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'Khushi Singh — Software Engineer',
  description:
    'B.Tech IT @ GGSIPU · Building scalable AI solutions & full-stack applications with Java, Python & React. Published NLP researcher.',
  keywords: ['Khushi Singh', 'Software Engineer', 'Portfolio', 'GGSIPU', 'React', 'Python', 'NLP'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  )
}
