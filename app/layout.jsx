import FooterSection from './components/footer/FooterSection'
import HeaderSection from './components/header/HeaderSection'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ajildori',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-300 text-brand`}>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
    </html>
  )
}
