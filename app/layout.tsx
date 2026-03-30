import './globals.css'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-satoshi',
})

export const metadata: Metadata = {
  title: 'The Illu Studio | Photography & Social Media Marketing in Hyderabad',
  description: 'Wedding photography, event cinematography, social media marketing & video production in Hyderabad. Shaping Digital Stars. Book The Illu Studio — hello@theillustudio.com',
  icons: {
    icon: '/theillustudio_logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
