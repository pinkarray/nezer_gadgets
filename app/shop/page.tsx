'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const allProducts = [
  { id: 1, name: 'iPhone 13 Pro', category: 'Smartphone', specs: '128GB • Graphite • A15 Bionic', price: 485000, badge: 'UK Used', badgeType: 'default', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop', description: 'Experience the power of the iPhone 13 Pro with its stunning Super Retina XDR display, A15 Bionic chip, and pro camera system. This UK used device has been thoroughly tested and certified for quality.', features: ['A15 Bionic chip', 'Super Retina XDR display', 'Pro camera system', 'Ceramic Shield front', '5G capable', 'iOS 17 compatible'] },
  { id: 2, name: 'MacBook Pro M2', category: 'Laptop', specs: '14" • 16GB RAM • 512GB SSD', price: 1250000, badge: 'Premium', badgeType: 'premium', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop', description: 'The MacBook Pro 14" with M2 chip delivers exceptional performance for professionals. With 16GB unified memory and 512GB SSD, tackle any creative or technical task with ease.', features: ['Apple M2 chip', '14-inch Liquid Retina XDR', '16GB unified memory', '512GB SSD storage', 'Up to 17hrs battery', 'MagSafe 3 charging'] },
  { id: 3, name: 'Samsung Galaxy S22', category: 'Smartphone', specs: '256GB • Phantom Black', price: 365000, badge: 'UK Used', badgeType: 'default', image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600&h=600&fit=crop', description: 'The Samsung Galaxy S22 combines powerful performance with a stunning design. Featuring a dynamic AMOLED display and versatile camera system for capturing every moment.', features: ['Snapdragon 8 Gen 1', '6.1" Dynamic AMOLED 2X', '50MP triple camera', '256GB storage', 'Wireless charging', 'IP68 water resistant'] },
  { id: 4, name: 'iPad 9th Gen', category: 'Tablet', specs: '64GB • Wi-Fi • Space Gray', price: 285000, badge: 'Best Seller', badgeType: 'default', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop', description: 'The iPad 9th generation offers incredible value with its A13 Bionic chip, 10.2-inch Retina display, and support for Apple Pencil. Perfect for work, learning, and entertainment.', features: ['A13 Bionic chip', '10.2" Retina display', 'Apple Pencil support', '64GB storage', '12MP Ultra Wide front camera', 'Touch ID'] },
  { id: 5, name: 'Dell XPS 15', category: 'Laptop', specs: 'i7 • 16GB RAM • 512GB SSD', price: 750000, badge: 'UK Used', badgeType: 'default', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=600&fit=crop', description: 'The Dell XPS 15 is a premium laptop featuring a stunning InfinityEdge display, powerful Intel Core i7 processor, and sleek aluminum design perfect for professionals.', features: ['Intel Core i7', '15.6" InfinityEdge display', '16GB DDR5 RAM', '512GB NVMe SSD', 'NVIDIA Graphics', 'Thunderbolt 4'] },
  { id: 6, name: '4-Camera CCTV Kit', category: 'Security', specs: '1080p • Night Vision • 1TB HDD', price: 185000, badge: 'Popular', badgeType: 'default', image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=600&h=600&fit=crop', description: 'Complete security solution with 4 HD cameras, night vision capability, and 1TB storage. Professional installation available. Keep your home or business safe 24/7.', features: ['4x 1080p cameras', 'Night vision up to 30m', '1TB HDD included', 'Mobile app viewing', 'Motion detection alerts', 'Free installation'] },
]

export default function ProductPage() {
  const params = useParams()
  const [windowWidth, setWindowWidth] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const product = allProducts.find(p => p.id === Number(params.id)) || allProducts[0]

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

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 3)

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
            <Link href="/cart" style={{ background: 'transparent', border: '1px solid #c9a962', color: '#c9a962', padding: isTablet ? '0.6rem 1.25rem' : '0.75rem 1.75rem', borderRadius: '100px', fontSize: isTablet ? '0.8rem' : '0.9rem', fontWeight: 500, textDecoration: 'none' }}>🛒 Cart</Link>
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
          <div onClick={() => setMobileMenuOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 98, animation: 'fadeIn 0.3s ease' }} />
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
        {/* Breadcrumb */}
        <div style={{ padding: isMobile ? '20px 5%' : '30px 4%', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#6a6a70' }}>
            <Link href="/" style={{ color: '#6a6a70', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/shop" style={{ color: '#6a6a70', textDecoration: 'none' }}>Shop</Link>
            <span>/</span>
            <span style={{ color: '#a0a0a5' }}>{product.name}</span>
          </div>
        </div>

        {/* Product Section */}
        <div style={{ padding: isMobile ? '0 5% 40px' : '0 4% 60px', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '4rem', alignItems: 'start' }}>
            {/* Product Image */}
            <div style={{ background: '#161618', borderRadius: isMobile ? '16px' : '24px', padding: isMobile ? '2rem' : '3rem', position: 'relative' }}>
              <span style={{ position: 'absolute', top: isMobile ? '1rem' : '1.5rem', left: isMobile ? '1rem' : '1.5rem', background: product.badgeType === 'premium' ? 'linear-gradient(135deg, #4a9eff 0%, #7b68ee 100%)' : '#c9a962', color: product.badgeType === 'premium' ? 'white' : '#0a0a0b', padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', zIndex: 1 }}>{product.badge}</span>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', maxHeight: isMobile ? '300px' : '500px', objectFit: 'contain' }} />
            </div>

            {/* Product Info */}
            <div>
              <span style={{ color: '#c9a962', fontSize: '0.85rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', display: 'block' }}>{product.category}</span>
              <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 600, marginBottom: '0.75rem', color: '#ffffff' }}>{product.name}</h1>
              <p style={{ color: '#6a6a70', fontSize: '1rem', marginBottom: '1.5rem' }}>{product.specs}</p>
              
              <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 700, color: '#e8d5a3', marginBottom: '1.5rem' }}>{formatPrice(product.price)}</div>

              <p style={{ color: '#a0a0a5', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>{product.description}</p>

              {/* Features */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', marginBottom: '1rem', color: '#ffffff' }}>Key Features</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                  {product.features.map((feature, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a0a0a5', fontSize: '0.9rem' }}>
                      <span style={{ color: '#c9a962' }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', alignItems: isMobile ? 'stretch' : 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#161618', borderRadius: '12px', padding: '0.5rem' }}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '8px', color: '#ffffff', fontSize: '1.2rem', cursor: 'pointer' }}>−</button>
                  <span style={{ width: '50px', textAlign: 'center', fontSize: '1.1rem', fontWeight: 500 }}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '8px', color: '#ffffff', fontSize: '1.2rem', cursor: 'pointer' }}>+</button>
                </div>

                <button onClick={handleAddToCart} style={{ flex: isMobile ? 'none' : 1, background: addedToCart ? '#22c55e' : 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', color: addedToCart ? '#ffffff' : '#0a0a0b', border: 'none', padding: '1rem 2rem', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  {addedToCart ? '✓ Added to Cart!' : '🛒 Add to Cart'}
                </button>
              </div>

              {/* WhatsApp Button */}
              <a href={`https://wa.me/234XXXXXXXXXX?text=Hi, I'm interested in the ${product.name} (${formatPrice(product.price)})`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', width: '100%', marginTop: '1rem', padding: '1rem 2rem', background: '#25D366', color: '#ffffff', border: 'none', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'none' }}>
                💬 Chat on WhatsApp
              </a>

              {/* Trust Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', padding: '1.5rem', background: '#161618', borderRadius: '12px' }}>
                {[{ icon: '✓', text: 'Quality Tested' }, { icon: '🛡️', text: 'Warranty Included' }, { icon: '🚚', text: 'Fast Delivery' }].map((badge, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a0a0a5', fontSize: '0.85rem' }}>
                    <span>{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div style={{ padding: isMobile ? '40px 5%' : '60px 4%', background: '#111113' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '2rem', textAlign: 'center' }}>You May Also Like</h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? '1rem' : '1.5rem' }}>
              {relatedProducts.map((item) => (
                <Link key={item.id} href={`/product/${item.id}`} style={{ background: '#161618', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', display: 'block' }}>
                  <div style={{ height: isMobile ? '180px' : '220px', background: 'linear-gradient(145deg, #1a1a1c 0%, #0d0d0e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={item.image} alt={item.name} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>{item.name}</h3>
                    <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e8d5a3' }}>{formatPrice(item.price)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: '#0a0a0b', borderTop: '1px solid rgba(255,255,255,0.05)', padding: isMobile ? '30px 5%' : '40px 4%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: '#6a6a70', fontSize: '0.85rem', textAlign: 'center' }}>© 2024 Nezer Gadgets. All rights reserved.</p>
          <p style={{ color: '#6a6a70', fontSize: '0.85rem', fontStyle: 'italic' }}>"Buy Luxury, Buy Peace" ✌🏽</p>
        </div>
      </footer>
    </>
  )
}
