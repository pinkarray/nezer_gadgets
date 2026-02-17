'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

const allProducts = [
  { id: 1, name: 'iPhone 13 Pro', category: 'phones', subcategory: 'uk-used', specs: '128GB • Graphite • A15 Bionic', price: 485000, badge: 'UK Used', badgeType: 'default', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop' },
  { id: 2, name: 'iPhone 14 Pro Max', category: 'phones', subcategory: 'premium', specs: '256GB • Deep Purple • A16 Bionic', price: 750000, badge: 'Premium', badgeType: 'premium', image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=400&fit=crop' },
  { id: 3, name: 'Samsung Galaxy S22', category: 'phones', subcategory: 'uk-used', specs: '256GB • Phantom Black', price: 365000, badge: 'UK Used', badgeType: 'default', image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=400&fit=crop' },
  { id: 4, name: 'Samsung Galaxy S23 Ultra', category: 'phones', subcategory: 'premium', specs: '512GB • Green • 200MP', price: 850000, badge: 'Premium', badgeType: 'premium', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop' },
  { id: 5, name: 'iPhone 12', category: 'phones', subcategory: 'uk-used', specs: '64GB • Blue • A14 Bionic', price: 320000, badge: 'UK Used', badgeType: 'default', image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=400&fit=crop' },
  { id: 6, name: 'Google Pixel 7 Pro', category: 'phones', subcategory: 'premium', specs: '128GB • Obsidian', price: 520000, badge: 'New', badgeType: 'default', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop' },
  { id: 7, name: 'MacBook Pro M2', category: 'laptops', subcategory: 'premium', specs: '14" • 16GB RAM • 512GB SSD', price: 1250000, badge: 'Premium', badgeType: 'premium', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop' },
  { id: 8, name: 'Dell XPS 15', category: 'laptops', subcategory: 'uk-used', specs: 'i7 • 16GB RAM • 512GB SSD', price: 750000, badge: 'UK Used', badgeType: 'default', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop' },
  { id: 9, name: 'HP Spectre x360', category: 'laptops', subcategory: 'uk-used', specs: 'i5 • 8GB RAM • 256GB SSD', price: 450000, badge: 'UK Used', badgeType: 'default', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop' },
  { id: 10, name: 'MacBook Air M1', category: 'laptops', subcategory: 'uk-used', specs: '13" • 8GB RAM • 256GB SSD', price: 650000, badge: 'Best Seller', badgeType: 'default', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=400&fit=crop' },
  { id: 11, name: 'Lenovo ThinkPad X1', category: 'laptops', subcategory: 'premium', specs: 'i7 • 16GB RAM • 1TB SSD', price: 980000, badge: 'Premium', badgeType: 'premium', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop' },
  { id: 12, name: 'iPad 9th Gen', category: 'tablets', subcategory: 'uk-used', specs: '64GB • Wi-Fi • Space Gray', price: 285000, badge: 'Best Seller', badgeType: 'default', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop' },
  { id: 13, name: 'iPad Pro 12.9"', category: 'tablets', subcategory: 'premium', specs: '256GB • M2 Chip • Wi-Fi', price: 950000, badge: 'Premium', badgeType: 'premium', image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop' },
  { id: 14, name: 'Samsung Tab S8', category: 'tablets', subcategory: 'uk-used', specs: '128GB • Graphite', price: 380000, badge: 'UK Used', badgeType: 'default', image: 'https://images.unsplash.com/photo-1632634727076-c01e4c2f4a06?w=400&h=400&fit=crop' },
  { id: 15, name: 'Kids Learning Tab', category: 'tablets', subcategory: 'baby-tabs', specs: '32GB • Educational Apps', price: 85000, badge: 'Baby Tab', badgeType: 'default', image: 'https://images.unsplash.com/photo-1527698952657-b5e4d7c4f4fe?w=400&h=400&fit=crop' },
  { id: 16, name: 'Amazon Fire Kids', category: 'tablets', subcategory: 'baby-tabs', specs: '32GB • Parental Controls', price: 75000, badge: 'Baby Tab', badgeType: 'default', image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=400&fit=crop' },
  { id: 17, name: '4-Camera CCTV Kit', category: 'security', subcategory: 'cctv', specs: '1080p • Night Vision • 1TB', price: 185000, badge: 'Popular', badgeType: 'default', image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop' },
  { id: 18, name: '8-Camera CCTV Kit', category: 'security', subcategory: 'cctv', specs: '4K • Night Vision • 2TB', price: 350000, badge: 'Pro', badgeType: 'premium', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop' },
  { id: 19, name: 'Wireless IP Camera', category: 'security', subcategory: 'cctv', specs: '1080p • Wi-Fi • Motion', price: 45000, badge: 'New', badgeType: 'default', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop' },
  { id: 20, name: 'HP LaserJet Pro', category: 'printers', subcategory: 'printers', specs: 'Laser • Wi-Fi • Duplex', price: 185000, badge: 'Office', badgeType: 'default', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop' },
  { id: 21, name: 'Epson EcoTank', category: 'printers', subcategory: 'printers', specs: 'Inkjet • Refillable Tank', price: 145000, badge: 'Eco', badgeType: 'default', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop' },
  { id: 22, name: 'Canon PIXMA', category: 'printers', subcategory: 'printers', specs: 'All-in-One • Photo Print', price: 95000, badge: 'Home', badgeType: 'default', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop' },
]

const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'phones', name: 'Phones', icon: '📱' },
  { id: 'laptops', name: 'Laptops', icon: '💻' },
  { id: 'tablets', name: 'Tablets', icon: '📲' },
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
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
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
      `}</style>

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.4, background: 'radial-gradient(circle at 20% 20%, rgba(201, 169, 98, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(74, 158, 255, 0.05) 0%, transparent 50%)' }} />

      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        padding: isScrolled ? (isMobile ? '0.75rem 5%' : '1rem 4%') : (isMobile ? '1rem 5%' : '1.5rem 4%'),
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(10,10,11,0.98)', backdropFilter: 'blur(10px)', transition: 'all 0.4s ease',
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
              <span style={{ width: '24px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ width: '24px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', opacity: mobileMenuOpen ? 0 : 1 }} />
              <span style={{ width: '24px', height: '2px', background: '#ffffff', transition: 'all 0.3s ease', transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          </div>
        )}
      </nav>

      {isMobile && mobileMenuOpen && (
        <>
          <div onClick={() => setMobileMenuOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 98, animation: 'fadeIn 0.3s ease' }} />
          <div style={{ position: 'fixed', top: 0, right: 0, width: '80%', maxWidth: '320px', height: '100%', background: '#111113', zIndex: 99, transform: 'translateX(0)', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column', padding: '80px 24px 40px', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
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

      <main style={{ paddingTop: isMobile ? '70px' : '90px', minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        <div style={{ padding: isMobile ? '30px 5% 20px' : '50px 4% 30px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '2rem' : '3rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>Shop <span style={{ background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>All Products</span></h1>
          <p style={{ color: '#a0a0a5', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>Premium gadgets for every need</p>
        </div>

        <div style={{ padding: isMobile ? '0 5% 20px' : '0 4% 30px', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', flex: isMobile ? 'none' : '0 0 300px' }}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', background: '#161618', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.9rem 1rem 0.9rem 2.75rem', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
              />
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1rem' }}>🔍</span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {isMobile && (
                <button onClick={() => setMobileFilterOpen(true)} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#161618', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '0.9rem 1rem', color: '#ffffff', fontSize: '0.95rem', cursor: 'pointer' }}>
                  🏷️ Categories
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

        <div style={{ display: 'flex', padding: isMobile ? '0 5%' : '0 4%', maxWidth: '1400px', margin: '0 auto', gap: '2rem' }}>
          {!isMobile && (
            <aside style={{ width: '250px', flexShrink: 0 }}>
              <div style={{ background: '#161618', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', position: 'sticky', top: '110px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', marginBottom: '1.25rem', color: '#ffffff' }}>Categories</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {categories.map(cat => (
                    <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.9rem 1rem', background: selectedCategory === cat.id ? 'rgba(201, 169, 98, 0.15)' : 'transparent', border: selectedCategory === cat.id ? '1px solid rgba(201, 169, 98, 0.3)' : '1px solid transparent', borderRadius: '10px', color: selectedCategory === cat.id ? '#c9a962' : '#a0a0a5', fontSize: '0.95rem', cursor: 'pointer', textAlign: 'left', transition: 'all 0.3s ease' }}>
                      <span>{cat.icon}</span>
                      <span>{cat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          )}

          <div style={{ flex: 1 }}>
            <p style={{ color: '#6a6a70', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{filteredProducts.length} products found</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: isMobile ? '0.75rem' : '1.5rem' }}>
              {filteredProducts.map((product) => (
                <div key={product.id} style={{ background: '#161618', border: '1px solid rgba(255,255,255,0.05)', borderRadius: isMobile ? '12px' : '16px', overflow: 'hidden', transition: 'all 0.4s ease' }}>
                  <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ position: 'relative', height: isMobile ? '140px' : '200px', background: 'linear-gradient(145deg, #1a1a1c 0%, #0d0d0e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                      <span style={{ position: 'absolute', top: isMobile ? '0.5rem' : '0.75rem', left: isMobile ? '0.5rem' : '0.75rem', background: product.badgeType === 'premium' ? 'linear-gradient(135deg, #4a9eff 0%, #7b68ee 100%)' : '#c9a962', color: product.badgeType === 'premium' ? 'white' : '#0a0a0b', padding: isMobile ? '0.25rem 0.5rem' : '0.35rem 0.7rem', borderRadius: '100px', fontSize: isMobile ? '0.6rem' : '0.7rem', fontWeight: 600, textTransform: 'uppercase', zIndex: 1 }}>{product.badge}</span>
                      <img src={product.image} alt={product.name} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ padding: isMobile ? '0.75rem' : '1.25rem' }}>
                      <span style={{ color: '#c9a962', fontSize: isMobile ? '0.65rem' : '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem', display: 'block' }}>{product.category}</span>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '0.9rem' : '1.1rem', fontWeight: 600, marginBottom: '0.25rem', color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.name}</h3>
                      <p style={{ color: '#6a6a70', fontSize: isMobile ? '0.7rem' : '0.85rem', marginBottom: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.specs}</p>
                      <span style={{ fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: 600, color: '#e8d5a3' }}>{formatPrice(product.price)}</span>
                    </div>
                  </Link>
                  <div style={{ padding: isMobile ? '0 0.75rem 0.75rem' : '0 1.25rem 1.25rem' }}>
                    <button 
                      onClick={() => handleQuickAdd(product)}
                      style={{ 
                        width: '100%', 
                        padding: isMobile ? '0.6rem' : '0.75rem', 
                        background: isInCart(product.id) ? '#22c55e' : 'rgba(201, 169, 98, 0.1)', 
                        border: `1px solid ${isInCart(product.id) ? '#22c55e' : 'rgba(201, 169, 98, 0.3)'}`, 
                        borderRadius: '8px', 
                        color: isInCart(product.id) ? '#ffffff' : '#c9a962', 
                        fontSize: isMobile ? '0.8rem' : '0.9rem', 
                        fontWeight: 500, 
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
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

        {isMobile && mobileFilterOpen && (
          <>
            <div onClick={() => setMobileFilterOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 200, animation: 'fadeIn 0.3s ease' }} />
            <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#111113', zIndex: 201, borderRadius: '20px 20px 0 0', padding: '24px', maxHeight: '70vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem' }}>Categories</h3>
                <button onClick={() => setMobileFilterOpen(false)} style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {categories.map(cat => (
                  <button key={cat.id} onClick={() => { setSelectedCategory(cat.id); setMobileFilterOpen(false) }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: selectedCategory === cat.id ? 'rgba(201, 169, 98, 0.15)' : '#161618', border: selectedCategory === cat.id ? '1px solid rgba(201, 169, 98, 0.3)' : '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: selectedCategory === cat.id ? '#c9a962' : '#ffffff', fontSize: '1rem', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontSize: '1.3rem' }}>{cat.icon}</span>
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
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: '#6a6a70', fontSize: '0.85rem', textAlign: 'center' }}>© 2024 Nezerr Gadgets. All rights reserved.</p>
          <p style={{ color: '#6a6a70', fontSize: '0.85rem', fontStyle: 'italic' }}>"Buy Luxury, Buy Peace" ✌🏽</p>
        </div>
      </footer>
    </>
  )
}
