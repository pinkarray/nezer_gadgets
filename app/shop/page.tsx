'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { allProducts } from '../data/products'

const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'phones', name: 'All Phones', icon: '📱' },
  { id: 'iphone', name: 'iPhones', icon: '🍎', sub: true },
  { id: 'samsung', name: 'Samsung', icon: '📲', sub: true },
  { id: 'samsung-fold', name: 'Samsung Fold', icon: '📂', sub: true },
  { id: 'tablets', name: 'Tablets / iPads', icon: '📱' },
  { id: 'gaming', name: 'Gaming', icon: '🎮' },
  { id: 'speakers', name: 'Speakers', icon: '🔊' },
  { id: 'security', name: 'CCTV & Security', icon: '📹' },
  { id: 'printers', name: 'Printers', icon: '🖨️' },
]

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'name', name: 'Name: A to Z' },
]

export default function ShopPage() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { addToCart, getCartCount, cartItems } = useCart()

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
    document.body.style.overflow = mobileFilterOpen || mobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileFilterOpen, mobileMenuOpen])

  const isMobile = windowWidth <= 768
  const isTablet = windowWidth > 768 && windowWidth <= 1024

  const filteredProducts = allProducts
    .filter(p => {
      if (selectedCategory === 'all') return true
      if (selectedCategory === 'phones') return p.category === 'phones'
      if (selectedCategory === 'iphone') return p.subcategory === 'iphone'
      if (selectedCategory === 'samsung') return p.subcategory === 'samsung'
      if (selectedCategory === 'samsung-fold') return p.subcategory === 'samsung-fold'
      if (selectedCategory === 'tablets') return p.category === 'tablets'
      if (selectedCategory === 'gaming') return p.category === 'gaming'
      if (selectedCategory === 'speakers') return p.category === 'speakers'
      return p.category === selectedCategory
    })
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  const formatPrice = (price: number) => `₦${price.toLocaleString()}`

  const handleQuickAdd = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      specs: product.specs,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category,
    })
  }

  const isInCart = (productId: number) => cartItems.some(item => item.id === productId)

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', system-ui, sans-serif; background: #0a0a0b; color: #ffffff; overflow-x: hidden; line-height: 1.6; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .product-card:hover { transform: translateY(-4px); border-color: rgba(201,169,98,0.2) !important; }
        .product-card { transition: all 0.3s ease; }
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
                <li key={item.name}>
                  <Link href={item.href} style={{ color: item.name === 'Shop' ? '#c9a962' : '#a0a0a5', textDecoration: 'none', fontSize: isTablet ? '0.85rem' : '0.95rem', fontWeight: item.name === 'Shop' ? 500 : 400 }}>{item.name}</Link>
                </li>
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
            {/* Address in mobile menu */}
            <div style={{ marginTop: 'auto', padding: '1.5rem', background: 'rgba(201,169,98,0.08)', borderRadius: '12px', border: '1px solid rgba(201,169,98,0.2)' }}>
              <p style={{ color: '#c9a962', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>📍 VISIT US</p>
              <p style={{ color: '#a0a0a5', fontSize: '0.8rem', lineHeight: 1.5 }}>7, Otigba Street, Ikeja<br />Computer Village, Lagos</p>
              <p style={{ color: '#c9a962', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.5rem' }}>📞 08138074357</p>
            </div>
          </div>
        </>
      )}

      <main style={{ paddingTop: isMobile ? '70px' : '90px', minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ padding: isMobile ? '30px 5% 20px' : '50px 4% 30px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '2rem' : '3rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
            Shop <span style={{ background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>All Products</span>
          </h1>
          <p style={{ color: '#a0a0a5', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>Premium gadgets • Honest grading • Smooth transactions</p>
          {/* Address bar */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', marginTop: '1rem', padding: '0.75rem 1.5rem', background: 'rgba(201,169,98,0.08)', borderRadius: '100px', border: '1px solid rgba(201,169,98,0.2)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ color: '#c9a962', fontSize: '0.85rem' }}>📍 7, Otigba Street, Computer Village, Ikeja</span>
            <span style={{ color: '#6a6a70', fontSize: '0.8rem', display: isMobile ? 'none' : 'inline' }}>|</span>
            <span style={{ color: '#c9a962', fontSize: '0.85rem' }}>📞 08138074357</span>
            <span style={{ color: '#6a6a70', fontSize: '0.8rem', display: isMobile ? 'none' : 'inline' }}>|</span>
            <span style={{ color: '#a0a0a5', fontSize: '0.85rem' }}>🚚 Nationwide Delivery</span>
          </div>
        </div>

        {/* Search & Sort */}
        <div style={{ padding: isMobile ? '0 5% 20px' : '0 4% 30px', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', flex: isMobile ? 'none' : '0 0 320px' }}>
              <input
                type="text"
                placeholder="Search phones, tablets, speakers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', background: '#161618', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.9rem 1rem 0.9rem 2.75rem', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
              />
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1rem' }}>🔍</span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {isMobile && (
                <button onClick={() => setMobileFilterOpen(true)} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#161618', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.9rem 1rem', color: '#ffffff', fontSize: '0.95rem', cursor: 'pointer' }}>
                  🏷️ {categories.find(c => c.id === selectedCategory)?.name || 'Categories'}
                </button>
              )}
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ flex: isMobile ? 1 : 'none', background: '#161618', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.9rem 1rem', color: '#ffffff', fontSize: '0.95rem', cursor: 'pointer', outline: 'none', minWidth: isMobile ? 'auto' : '180px' }}>
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id} style={{ background: '#161618' }}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div style={{ display: 'flex', padding: isMobile ? '0 5%' : '0 4%', maxWidth: '1400px', margin: '0 auto', gap: '2rem' }}>
          
          {/* Sidebar */}
          {!isMobile && (
            <aside style={{ width: '240px', flexShrink: 0 }}>
              <div style={{ background: '#161618', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', position: 'sticky', top: '110px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', marginBottom: '1.25rem', color: '#ffffff' }}>Categories</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {categories.map(cat => (
                    <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} style={{
                      display: 'flex', alignItems: 'center', gap: '0.65rem',
                      padding: cat.sub ? '0.7rem 0.75rem 0.7rem 1.75rem' : '0.85rem 1rem',
                      background: selectedCategory === cat.id ? 'rgba(201, 169, 98, 0.15)' : 'transparent',
                      border: selectedCategory === cat.id ? '1px solid rgba(201, 169, 98, 0.3)' : '1px solid transparent',
                      borderRadius: '10px',
                      color: selectedCategory === cat.id ? '#c9a962' : cat.sub ? '#7a7a80' : '#a0a0a5',
                      fontSize: cat.sub ? '0.85rem' : '0.95rem',
                      cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s ease'
                    }}>
                      <span style={{ fontSize: cat.sub ? '0.85rem' : '1rem' }}>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>

                {/* Store info in sidebar */}
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(201,169,98,0.06)', borderRadius: '10px', border: '1px solid rgba(201,169,98,0.15)' }}>
                  <p style={{ color: '#c9a962', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>📍 STORE LOCATION</p>
                  <p style={{ color: '#6a6a70', fontSize: '0.78rem', lineHeight: 1.6 }}>7, Otigba Street<br />Computer Village, Ikeja<br />Lagos State</p>
                  <a href="tel:08138074357" style={{ display: 'block', marginTop: '0.75rem', color: '#c9a962', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>📞 08138074357</a>
                  <p style={{ color: '#6a6a70', fontSize: '0.75rem', marginTop: '0.4rem' }}>🚚 Nationwide delivery</p>
                </div>
              </div>
            </aside>
          )}

          {/* Products Grid */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: '#6a6a70', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {filteredProducts.length} products found
              {selectedCategory !== 'all' && <span style={{ color: '#c9a962', marginLeft: '0.5rem' }}>in {categories.find(c => c.id === selectedCategory)?.name}</span>}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? '0.75rem' : '1.25rem' }}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card" style={{ background: '#161618', border: '1px solid rgba(255,255,255,0.05)', borderRadius: isMobile ? '12px' : '16px', overflow: 'hidden' }}>
                  <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ position: 'relative', height: isMobile ? '140px' : '190px', background: 'linear-gradient(145deg, #1c1c1e 0%, #0d0d0e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <span style={{
                        position: 'absolute', top: isMobile ? '0.5rem' : '0.75rem', left: isMobile ? '0.5rem' : '0.75rem',
                        background: product.badgeType === 'premium' ? 'linear-gradient(135deg, #4a9eff 0%, #7b68ee 100%)' : product.badgeType === 'new' ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' : '#c9a962',
                        color: product.badgeType === 'default' ? '#0a0a0b' : 'white',
                        padding: isMobile ? '0.2rem 0.45rem' : '0.3rem 0.65rem',
                        borderRadius: '100px', fontSize: isMobile ? '0.58rem' : '0.68rem', fontWeight: 600, textTransform: 'uppercase', zIndex: 1
                      }}>{product.badge}</span>
                      <img src={product.image} alt={product.name} style={{ width: '75%', height: '85%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ padding: isMobile ? '0.65rem' : '1.1rem' }}>
                      <span style={{ color: '#c9a962', fontSize: isMobile ? '0.6rem' : '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem', display: 'block' }}>{product.subcategory}</span>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '0.85rem' : '1rem', fontWeight: 600, marginBottom: '0.2rem', color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.name}</h3>
                      <p style={{ color: '#6a6a70', fontSize: isMobile ? '0.65rem' : '0.78rem', marginBottom: '0.6rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.specs}</p>
                      {/* Price — show from range if variants exist */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: 700, color: '#e8d5a3' }}>
                          {product.variants && product.variants.length > 1
                            ? `From ₦${Math.min(...product.variants.map(v => v.price)).toLocaleString()}`
                            : `₦${product.price.toLocaleString()}`}
                        </span>
                        {product.variants && product.variants.length > 1 && (
                          <span style={{ fontSize: '0.65rem', color: '#6a6a70', background: 'rgba(255,255,255,0.05)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>{product.variants.length} options</span>
                        )}
                      </div>
                    </div>
                  </Link>
                  <div style={{ padding: isMobile ? '0 0.65rem 0.65rem' : '0 1.1rem 1.1rem' }}>
                    <button
                      onClick={() => handleQuickAdd(product)}
                      style={{
                        width: '100%', padding: isMobile ? '0.55rem' : '0.7rem',
                        background: isInCart(product.id) ? '#22c55e' : 'rgba(201, 169, 98, 0.1)',
                        border: `1px solid ${isInCart(product.id) ? '#22c55e' : 'rgba(201, 169, 98, 0.3)'}`,
                        borderRadius: '8px',
                        color: isInCart(product.id) ? '#ffffff' : '#c9a962',
                        fontSize: isMobile ? '0.75rem' : '0.85rem', fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s ease'
                      }}
                    >
                      {isInCart(product.id) ? '✓ In Cart' : '+ Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</p>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', marginBottom: '0.5rem' }}>No products found</h3>
                <p style={{ color: '#a0a0a5' }}>Try adjusting your search or filter</p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Sheet */}
        {isMobile && mobileFilterOpen && (
          <>
            <div onClick={() => setMobileFilterOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', zIndex: 200 }} />
            <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#111113', zIndex: 201, borderRadius: '20px 20px 0 0', padding: '24px', maxHeight: '75vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem' }}>Categories</h3>
                <button onClick={() => setMobileFilterOpen(false)} style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {categories.map(cat => (
                  <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setMobileFilterOpen(false) }} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: cat.sub ? '0.85rem 1rem 0.85rem 2rem' : '1rem',
                    background: selectedCategory === cat.id ? 'rgba(201, 169, 98, 0.15)' : '#161618',
                    border: selectedCategory === cat.id ? '1px solid rgba(201, 169, 98, 0.3)' : '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    color: selectedCategory === cat.id ? '#c9a962' : cat.sub ? '#7a7a80' : '#ffffff',
                    fontSize: cat.sub ? '0.9rem' : '1rem', cursor: 'pointer', textAlign: 'left'
                  }}>
                    <span style={{ fontSize: cat.sub ? '1rem' : '1.2rem' }}>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <div style={{ height: '60px' }} />
      </main>

      <footer style={{ background: '#0a0a0b', borderTop: '1px solid rgba(255,255,255,0.05)', padding: isMobile ? '30px 5%' : '40px 4%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <p style={{ color: '#a0a0a5', fontSize: '0.85rem' }}>📍 7, Otigba Street, Computer Village, Ikeja, Lagos</p>
              <p style={{ color: '#a0a0a5', fontSize: '0.85rem', marginTop: '0.25rem' }}>📞 08138074357 · 🚚 Nationwide Delivery Available</p>
            </div>
            <p style={{ color: '#6a6a70', fontSize: '0.85rem', fontStyle: 'italic' }}>"Buy Luxury, Buy Peace" ✌🏽</p>
          </div>
          <p style={{ color: '#4a4a50', fontSize: '0.8rem', textAlign: isMobile ? 'left' : 'center' }}>© 2025 Nezerr Gadgets. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}