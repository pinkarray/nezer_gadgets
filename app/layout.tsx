import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from './context/CartContext'

export const metadata: Metadata = {
  title: 'Nezerr Gadgets | Buy Luxury, Buy Peace ✌🏽',
  description: 'Your trusted source for premium UK used phones, laptops, tablets, CCTV cameras, printers, and expert gadget repairs in Nigeria.',
  keywords: 'UK used phones, laptops, tablets, CCTV, gadget repairs, Nigeria, Lagos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
