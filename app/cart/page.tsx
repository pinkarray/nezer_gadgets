'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Sample cart items for demo
const initialCartItems = [
  { id: 1, name: 'iPhone 13 Pro', specs: '128GB • Graphite', price: 485000, quantity: 1, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200&h=200&fit=crop' },
  { id: 2, name: 'MacBook Pro M2', specs: '14" • 16GB RAM', price: 1250000, quantity: 1, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop' },
]

export default function CartPage() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState(initialCartItems)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  const isMobile = windowWidth <= 768
  const isTablet = windowWidth > 768 && windowWidth <= 1024

  const formatPrice = (price: number) => `₦${price.toLocaleString()}`

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items => items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item))
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = subtotal > 500000 ? 0 : 5000
  const total = subtotal + deliveryFee

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', system-ui, sans-serif; background: #0a0a0b; color: #ffffff; overflow-x: hidden; line-height: 1.6; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      {/* Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.4, background: 'radial-gradient(circle at 20% 20%, rgba(201, 169, 98, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(74, 158, 255, 0.05) 0%, transparent 50%)' }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        padding: isScrolled ? (isMobile ? '0.75rem 5%' : '1rem 4%') : (isMobile ? '1rem 5%' : '1.5rem 4%'),
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(10,10,11,0.98)', backdropFilter: 'blur(10px)', transition: 'all 0.4s ease',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '0.75rem', textDecoration: 'none' }}>
          <div style={{ width: isMobile ? '38px' : '45px', height: isMobile ? '38px' : '45px', background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', borderRadius: isMobile ? '10px' : '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', color: '#0a0a0b' }}>N</div>
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '1.1rem' : '1.5rem', fontWeight: 600, color: '#ffffff' }}>Nezer Gadgets</span>
        </Link>

        {!isMobile && (
          <>
            <ul style={{ display: 'flex', gap: isTablet ? '1.5rem' : '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {[{ name: 'Home', href: '/' }, { name: 'Shop', href: '/shop' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/#contact' }].map((item) => (
                <li key={item.name}><Link href={item.href} style={{ color: '#a0a0a5', textDecoration: 'none', fontSize: isTablet ? '0.85rem' : '0.95rem' }}>{item.name}</Link></li>
              ))}
            </ul>
            <Link href="/cart" style={{ background: '#c9a962', border: '1px solid #c9a962', color: '#0a0a0b', padding: isTablet ? '0.6rem 1.25rem' : '0.75rem 1.75rem', borderRadius: '100px', fontSize: isTablet ? '0.8rem' : '0.9rem', fontWeight: 500, textDecoration: 'none' }}>🛒 Cart ({cartItems.length})</Link>
          </>
        )}

        {isMobile && (
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'flex', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', zIndex: 102 }}>
            <span style={{ width: '24px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ width: '24px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', opacity: mobileMenuOpen ? 0 : 1 }} />
            <span style={{ width: '24px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <>
          <div onClick={() => setMobileMenuOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 98 }} />
          <div style={{ position: 'fixed', top: 0, right: 0, width: '80%', maxWidth: '320px', height: '100%', background: '#111113', zIndex: 99, display: 'flex', flexDirection: 'column', padding: '80px 24px 40px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
            <nav style={{ flex: 1 }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[{ name: 'Home', href: '/' }, { name: 'Shop', href: '/shop' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/#contact' }, { name: 'Cart', href: '/cart' }].map((item) => (
                  <li key={item.name}><Link href={item.href} onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '16px 0', color: '#ffffff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{item.name}</Link></li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}

      {/* Main Content */}
      <main style={{ paddingTop: isMobile ? '70px' : '90px', minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        <div style={{ padding: isMobile ? '30px 5%' : '50px 4%', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 600, marginBottom: '2rem' }}>
            Shopping <span style={{ background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Cart</span>
          </h1>

          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#161618', borderRadius: '24px' }}>
              <p style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🛒</p>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.8rem', marginBottom: '1rem' }}>Your cart is empty</h2>
              <p style={{ color: '#a0a0a5', marginBottom: '2rem' }}>Looks like you haven't added any items yet.</p>
              <Link href="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', color: '#0a0a0b', padding: '1rem 2rem', borderRadius: '100px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
                Start Shopping →
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 380px', gap: '2rem', alignItems: 'start' }}>
              {/* Cart Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cartItems.map((item) => (
                  <div key={item.id} style={{ display: 'flex', gap: isMobile ? '1rem' : '1.5rem', background: '#161618', borderRadius: '16px', padding: isMobile ? '1rem' : '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: isMobile ? '80px' : '120px', height: isMobile ? '80px' : '120px', background: '#111113', borderRadius: '12px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={item.image} alt={item.name} style={{ width: '90%', height: '90%', objectFit: 'contain' }} />
                    </div>
                    
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: 600, marginBottom: '0.25rem' }}>{item.name}</h3>
                        <p style={{ color: '#6a6a70', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>{item.specs}</p>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', justifyContent: 'space-between', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0.75rem' : '0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#111113', borderRadius: '8px', padding: '0.25rem' }}>
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '6px', color: '#ffffff', fontSize: '1rem', cursor: 'pointer' }}>−</button>
                          <span style={{ width: '32px', textAlign: 'center', fontSize: '0.95rem' }}>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '6px', color: '#ffffff', fontSize: '1rem', cursor: 'pointer' }}>+</button>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <span style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 600, color: '#e8d5a3' }}>{formatPrice(item.price * item.quantity)}</span>
                          <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '0.85rem', cursor: 'pointer', padding: '0.25rem 0.5rem' }}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div style={{ background: '#161618', borderRadius: '20px', padding: isMobile ? '1.5rem' : '2rem', border: '1px solid rgba(255,255,255,0.05)', position: isMobile ? 'relative' : 'sticky', top: isMobile ? 'auto' : '110px' }}>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', marginBottom: '1.5rem' }}>Order Summary</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a0a0a5' }}>
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a0a0a5' }}>
                    <span>Delivery</span>
                    <span>{deliveryFee === 0 ? <span style={{ color: '#22c55e' }}>FREE</span> : formatPrice(deliveryFee)}</span>
                  </div>
                  {deliveryFee > 0 && (
                    <p style={{ fontSize: '0.8rem', color: '#6a6a70' }}>Free delivery on orders above ₦500,000</p>
                  )}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600 }}>Total</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#e8d5a3' }}>{formatPrice(total)}</span>
                  </div>
                </div>

                <button style={{ width: '100%', background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', color: '#0a0a0b', border: 'none', padding: '1rem', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', marginBottom: '1rem' }}>
                  Proceed to Checkout
                </button>

                <a href={`https://wa.me/234XXXXXXXXXX?text=Hi, I'd like to order: ${cartItems.map(i => `${i.name} (x${i.quantity})`).join(', ')}. Total: ${formatPrice(total)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '1rem', background: '#25D366', color: '#ffffff', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none' }}>
                  💬 Order via WhatsApp
                </a>

                <Link href="/shop" style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem', color: '#c9a962', fontSize: '0.9rem', textDecoration: 'none' }}>
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: '#0a0a0b', borderTop: '1px solid rgba(255,255,255,0.05)', padding: isMobile ? '30px 5%' : '40px 4%', position: 'relative', zIndex: 2, marginTop: '60px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: '#6a6a70', fontSize: '0.85rem', textAlign: 'center' }}>© 2024 Nezer Gadgets. All rights reserved.</p>
          <p style={{ color: '#6a6a70', fontSize: '0.85rem', fontStyle: 'italic' }}>"Buy Luxury, Buy Peace" ✌🏽</p>
        </div>
      </footer>
    </>
  )
}
