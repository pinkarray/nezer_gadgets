'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCart } from '../../context/CartContext'
import { allProducts } from '../../data/products'

export default function ProductPage() {
  const params = useParams()
  const [windowWidth, setWindowWidth] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState(0)

  const { addToCart, getCartCount } = useCart()

  const product = allProducts.find(p => p.id === Number(params.id)) || allProducts[0]
  const activeVariant = product.variants?.[selectedVariant]
  const activePrice = activeVariant?.price ?? product.price
  const activeLabel = activeVariant?.label ?? product.specs

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

  // Reset variant when product changes
  useEffect(() => { setSelectedVariant(0) }, [product.id])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  const isMobile = windowWidth <= 768
  const isTablet = windowWidth > 768 && windowWidth <= 1024

  const formatPrice = (price: number) => `₦${price.toLocaleString()}`

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      specs: activeLabel,
      price: activePrice,
      quantity: quantity,
      image: product.image,
      category: product.category,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2500)
  }

  // Related products: same category, different product
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, isMobile ? 2 : 3)

  const badgeBg = product.badgeType === 'premium'
    ? 'linear-gradient(135deg, #4a9eff 0%, #7b68ee 100%)'
    : product.badgeType === 'new'
    ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
    : '#c9a962'
  const badgeColor = product.badgeType === 'default' ? '#0a0a0b' : 'white'

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', system-ui, sans-serif; background: #0a0a0b; color: #ffffff; overflow-x: hidden; line-height: 1.6; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .variant-btn:hover { border-color: rgba(201,169,98,0.5) !important; }
        .related-card:hover { transform: translateY(-4px); border-color: rgba(201,169,98,0.2) !important; }
        .related-card { transition: all 0.3s ease; }
      `}</style>

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.4, background: 'radial-gradient(circle at 20% 20%, rgba(201, 169, 98, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(74, 158, 255, 0.05) 0%, transparent 50%)' }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        padding: isScrolled ? (isMobile ? '0.75rem 5%' : '1rem 4%') : (isMobile ? '1rem 5%' : '1.5rem 4%'),
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(10,10,11,0.98)', backdropFilter: 'blur(10px)', transition: 'all 0.4s ease',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '0.75rem', textDecoration: 'none' }}>
          <div style={{ width: isMobile ? '38px' : '45px', height: isMobile ? '38px' : '45px', background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', borderRadius: isMobile ? '10px' : '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: isMobile ? '1.2rem' : '1.5rem', color: '#0a0a0b' }}>N</div>
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '1.1rem' : '1.5rem', fontWeight: 600, color: '#ffffff' }}>Nezerr Gadgets</span>
        </Link>

        {!isMobile && (
          <>
            <ul style={{ display: 'flex', gap: isTablet ? '1.5rem' : '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {[{ name: 'Home', href: '/' }, { name: 'Shop', href: '/shop' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/#contact' }].map((item) => (
                <li key={item.name}><Link href={item.href} style={{ color: '#a0a0a5', textDecoration: 'none', fontSize: isTablet ? '0.85rem' : '0.95rem' }}>{item.name}</Link></li>
              ))}
            </ul>
            <Link href="/cart" style={{ background: 'transparent', border: '1px solid #c9a962', color: '#c9a962', padding: isTablet ? '0.6rem 1.25rem' : '0.75rem 1.75rem', borderRadius: '100px', fontSize: isTablet ? '0.8rem' : '0.9rem', fontWeight: 500, textDecoration: 'none' }}>🛒 Cart ({getCartCount()})</Link>
          </>
        )}

        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link href="/cart" style={{ background: '#c9a962', color: '#0a0a0b', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none' }}>🛒 {getCartCount()}</Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'flex', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', zIndex: 102 }}>
              <span style={{ width: '24px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none', display: 'block' }} />
              <span style={{ width: '24px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', opacity: mobileMenuOpen ? 0 : 1, display: 'block' }} />
              <span style={{ width: '24px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', display: 'block' }} />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <>
          <div onClick={() => setMobileMenuOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 98 }} />
          <div style={{ position: 'fixed', top: 0, right: 0, width: '80%', maxWidth: '320px', height: '100%', background: '#111113', zIndex: 99, display: 'flex', flexDirection: 'column', padding: '80px 24px 40px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[{ name: 'Home', href: '/' }, { name: 'Shop', href: '/shop' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/#contact' }, { name: 'Cart', href: '/cart' }].map((item) => (
                <li key={item.name}><Link href={item.href} onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '16px 0', color: '#ffffff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{item.name}</Link></li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Main Content */}
      <main style={{ paddingTop: isMobile ? '70px' : '90px', minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        
        {/* Breadcrumb */}
        <div style={{ padding: isMobile ? '16px 5%' : '24px 4%', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#6a6a70', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: '#6a6a70', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/shop" style={{ color: '#6a6a70', textDecoration: 'none' }}>Shop</Link>
            <span>/</span>
            <Link href={`/shop`} style={{ color: '#6a6a70', textDecoration: 'none', textTransform: 'capitalize' }}>{product.category}</Link>
            <span>/</span>
            <span style={{ color: '#a0a0a5' }}>{product.name}</span>
          </div>
        </div>

        {/* Product Section */}
        <div style={{ padding: isMobile ? '0 5% 40px' : '0 4% 60px', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '4rem', alignItems: 'start' }}>
            
            {/* Product Image */}
            <div style={{ background: 'linear-gradient(145deg, #161618 0%, #111113 100%)', borderRadius: isMobile ? '16px' : '24px', padding: isMobile ? '2rem' : '3rem', position: 'relative', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ position: 'absolute', top: isMobile ? '1rem' : '1.5rem', left: isMobile ? '1rem' : '1.5rem', background: badgeBg, color: badgeColor, padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>{product.badge}</span>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: 'auto', maxHeight: isMobile ? '280px' : '450px', objectFit: 'contain', display: 'block' }}
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop' }}
              />
              {/* Warranty badge */}
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', color: '#6a6a70', fontSize: '0.8rem' }}>
                <span>🛡️</span>
                <span>7 Working Days Warranty</span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span style={{ color: '#c9a962', fontSize: '0.82rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem', display: 'block' }}>{product.subcategory}</span>
              <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '1.8rem' : '2.4rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff', lineHeight: 1.2 }}>{product.name}</h1>

              {/* Price */}
              <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 700, color: '#e8d5a3', margin: '1rem 0', letterSpacing: '-0.02em' }}>
                {formatPrice(activePrice)}
              </div>

              <p style={{ color: '#a0a0a5', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{product.description}</p>

              {/* Variant Selector */}
              {product.variants && product.variants.length > 1 && (
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Select Option</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {product.variants.map((variant, index) => (
                      <button
                        key={index}
                        className="variant-btn"
                        onClick={() => setSelectedVariant(index)}
                        style={{
                          padding: '0.6rem 1rem',
                          background: selectedVariant === index ? 'rgba(201,169,98,0.18)' : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${selectedVariant === index ? '#c9a962' : 'rgba(255,255,255,0.1)'}`,
                          borderRadius: '8px',
                          color: selectedVariant === index ? '#e8d5a3' : '#a0a0a5',
                          fontSize: '0.82rem',
                          fontWeight: selectedVariant === index ? 600 : 400,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span>{variant.label}</span>
                        <span style={{ display: 'block', fontSize: '0.78rem', color: selectedVariant === index ? '#c9a962' : '#6a6a70', marginTop: '0.1rem' }}>₦{variant.price.toLocaleString()}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Key Features</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {product.features?.map((feature, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#a0a0a5', fontSize: '0.9rem' }}>
                      <span style={{ color: '#c9a962', fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '0.75rem', alignItems: isMobile ? 'stretch' : 'center', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#161618', borderRadius: '12px', padding: '0.4rem', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '8px', color: '#ffffff', fontSize: '1.2rem', cursor: 'pointer' }}>−</button>
                  <span style={{ width: '44px', textAlign: 'center', fontSize: '1.05rem', fontWeight: 600 }}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '8px', color: '#ffffff', fontSize: '1.2rem', cursor: 'pointer' }}>+</button>
                </div>

                <button onClick={handleAddToCart} style={{ flex: isMobile ? 'none' : 1, background: addedToCart ? '#22c55e' : 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', color: addedToCart ? '#ffffff' : '#0a0a0b', border: 'none', padding: '1rem 1.5rem', borderRadius: '12px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  {addedToCart ? '✓ Added to Cart!' : '🛒 Add to Cart'}
                </button>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/2348138074357?text=Hi, I'm interested in the ${product.name} — ${activeLabel} (${formatPrice(activePrice)}). Is it available?`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', width: '100%', padding: '1rem', background: '#25D366', color: '#ffffff', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none' }}
              >
                💬 Chat on WhatsApp
              </a>

              {/* Trust Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem', padding: '1.25rem', background: '#161618', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                {[{ icon: '✓', text: 'Quality Tested' }, { icon: '🛡️', text: '7-Day Warranty' }, { icon: '🚚', text: 'Nationwide Delivery' }, { icon: '📍', text: 'Computer Village, Ikeja' }].map((badge, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a0a0a5', fontSize: '0.8rem' }}>
                    <span>{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <a href="tel:08138074357" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.75rem', color: '#6a6a70', fontSize: '0.85rem', textDecoration: 'none' }}>
                📞 Call us: <span style={{ color: '#c9a962', fontWeight: 600 }}>08138074357</span>
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ padding: isMobile ? '40px 5%' : '60px 4%', background: '#111113' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '2rem', textAlign: 'center' }}>You May Also Like</h2>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? '0.75rem' : '1.5rem' }}>
                {relatedProducts.map((item) => (
                  <Link key={item.id} href={`/product/${item.id}`} className="related-card" style={{ background: '#161618', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
                    <div style={{ height: isMobile ? '150px' : '200px', background: 'linear-gradient(145deg, #1a1a1c 0%, #0d0d0e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={item.image} alt={item.name}
                        style={{ width: '75%', height: '80%', objectFit: 'contain' }}
                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop' }}
                      />
                    </div>
                    <div style={{ padding: '1.1rem' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '0.9rem' : '1.05rem', fontWeight: 600, marginBottom: '0.35rem', color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</h3>
                      <span style={{ fontSize: isMobile ? '1rem' : '1.15rem', fontWeight: 600, color: '#e8d5a3' }}>
                        {item.variants && item.variants.length > 1
                          ? `From ₦${Math.min(...item.variants.map(v => v.price)).toLocaleString()}`
                          : formatPrice(item.price)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ background: '#0a0a0b', borderTop: '1px solid rgba(255,255,255,0.05)', padding: isMobile ? '30px 5%' : '40px 4%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: '1rem' }}>
            <div>
              <p style={{ color: '#a0a0a5', fontSize: '0.85rem' }}>📍 7, Otigba Street, Computer Village, Ikeja, Lagos</p>
              <p style={{ color: '#a0a0a5', fontSize: '0.85rem', marginTop: '0.25rem' }}>📞 08138074357 · 🚚 Nationwide Delivery</p>
            </div>
            <p style={{ color: '#6a6a70', fontSize: '0.85rem', fontStyle: 'italic' }}>"Buy Luxury, Buy Peace" ✌🏽</p>
          </div>
          <p style={{ color: '#4a4a50', fontSize: '0.8rem', marginTop: '1.25rem', textAlign: isMobile ? 'left' : 'center' }}>© 2025 Nezerr Gadgets. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}