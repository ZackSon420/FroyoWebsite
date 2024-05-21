import Navbar from '@/components/common/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/common/Footer'
import head from 'next/head'

const monstserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'FrozenDiamond Maykef Bangi',
  description: `We specialize in providing the perfect frozen treat for any occasion..`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={monstserrat.className}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
