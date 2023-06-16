import Navigation from '@/components/Navigation'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Sky time soft',
  description: 'Your reliable iT partner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
