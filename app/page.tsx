'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Product data with dummy prices
const products = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    category: 'Smartphone',
    specs: '128GB • Graphite • A15 Bionic',
    price: '₦485,000',
    priceNote: 'from',
    badge: 'UK Used',
    badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'MacBook Pro M2',
    category: 'Laptop',
    specs: '14" • 16GB RAM • 512GB SSD',
    price: '₦1,250,000',
    priceNote: 'from',
    badge: 'Premium',
    badgeType: 'premium',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Samsung Galaxy S22',
    category: 'Smartphone',
    specs: '256GB • Phantom Black',
    price: '₦365,000',
    priceNote: 'from',
    badge: 'UK Used',
    badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'iPad 9th Gen',
    category: 'Tablet',
    specs: '64GB • Wi-Fi • Space Gray',
    price: '₦285,000',
    priceNote: 'from',
    badge: 'Best Seller',
    badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Dell XPS 15',
    category: 'Laptop',
    specs: 'i7 • 16GB RAM • 512GB SSD',
    price: '₦750,000',
    priceNote: 'from',
    badge: 'New',
    badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: '4-Camera CCTV Kit',
    category: 'Security',
    specs: '1080p • Night Vision • 1TB HDD',
    price: '₦185,000',
    priceNote: 'full kit',
    badge: 'Popular',
    badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&h=400&fit=crop',
  },
]

const services = [
  { icon: '📱', title: 'UK Used Phones', description: 'Carefully selected and tested devices from the UK market, ensuring quality and reliability at unbeatable prices.' },
  { icon: '💻', title: 'Premium Laptops', description: 'High-performance laptops for work, gaming, and creativity. Both UK used and premium options available.' },
  { icon: '🎒', title: 'Baby Tabs', description: 'Kid-friendly tablets perfect for learning and entertainment. Durable, safe, and loaded with educational content.' },
  { icon: '🖨️', title: 'Printers', description: 'Professional-grade printers for home and office. From compact inkjets to high-volume laser printers.' },
  { icon: '📹', title: 'CCTV Cameras', description: 'Comprehensive security solutions for homes and businesses. Expert installation and setup available.' },
  { icon: '🔧', title: 'Gadget Repairs', description: 'Expert repair services for all devices. Screen replacements, battery swaps, software fixes, and more.' },
]

const features = [
  { icon: '✓', title: 'Quality Guaranteed', description: 'Every device is thoroughly tested and certified before it reaches you' },
  { icon: '🛡️', title: 'Warranty Included', description: 'All products come with our comprehensive warranty for your peace of mind' },
  { icon: '💰', title: 'Best Prices', description: 'Competitive pricing without compromising on quality or service' },
  { icon: '🚚', title: 'Fast Delivery', description: 'Quick and reliable delivery across Nigeria with real-time tracking' },
]

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState<number[]>([])
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      setIsScrolled(scrollTop > 50)
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleAddToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId])
    setTimeout(() => {
      setCartItems(prev => prev.filter(id => id !== productId))
    }, 1500)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const isMobile = windowWidth <= 768
  const isTablet = windowWidth > 768 && windowWidth <= 1024

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Outfit', system-ui, sans-serif;
          background: #0a0a0b;
          color: #ffffff;
          overflow-x: hidden;
          line-height: 1.6;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Scroll Progress */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)',
        zIndex: 1001,
        width: `${scrollProgress}%`,
        transition: 'width 0.1s linear',
      }} />

      {/* Background Pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.4,
        background: `
          radial-gradient(circle at 20% 20%, rgba(201, 169, 98, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(74, 158, 255, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(201, 169, 98, 0.03) 0%, transparent 70%)
        `,
      }} />

      {/* Grain Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1000,
        opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: isScrolled ? (isMobile ? '0.75rem 5%' : '1rem 4%') : (isMobile ? '1rem 5%' : '1.5rem 4%'),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: isScrolled ? 'rgba(10,10,11,0.98)' : 'linear-gradient(180deg, rgba(10,10,11,0.95) 0%, rgba(10,10,11,0) 100%)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.4s ease',
      }}>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.5rem' : '0.75rem',
          textDecoration: 'none',
        }}>
          <div style={{
            width: isMobile ? '38px' : '45px',
            height: isMobile ? '38px' : '45px',
            background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)',
            borderRadius: isMobile ? '10px' : '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            color: '#0a0a0b',
            boxShadow: '0 0 60px rgba(201, 169, 98, 0.15)',
          }}>N</div>
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: isMobile ? '1.1rem' : '1.5rem',
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}>Nezerr Gadgets</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <ul style={{
              display: 'flex',
              gap: isTablet ? '1.5rem' : '2.5rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}>
              {['Home', 'Services', 'Products', 'Why Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    style={{
                      color: '#a0a0a5',
                      textDecoration: 'none',
                      fontSize: isTablet ? '0.85rem' : '0.95rem',
                      fontWeight: 400,
                      letterSpacing: '0.02em',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0a5'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <Link href="/shop" style={{
              background: 'transparent',
              border: '1px solid #c9a962',
              color: '#c9a962',
              padding: isTablet ? '0.6rem 1.25rem' : '0.75rem 1.75rem',
              borderRadius: '100px',
              fontSize: isTablet ? '0.8rem' : '0.9rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#c9a962'
              e.currentTarget.style.color = '#0a0a0b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#c9a962'
            }}
            >Shop Now</Link>
          </>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              gap: '5px',
              zIndex: 102,
            }}
            aria-label="Toggle menu"
          >
            <span style={{
              width: '24px',
              height: '2px',
              background: '#ffffff',
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              background: '#ffffff',
              transition: 'all 0.3s ease',
              opacity: mobileMenuOpen ? 0 : 1,
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              background: '#ffffff',
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }} />
          </button>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div 
          onClick={closeMobileMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 98,
            animation: 'fadeIn 0.3s ease',
          }}
        />
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '80%',
          maxWidth: '320px',
          height: '100%',
          background: '#111113',
          zIndex: 99,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px 24px 40px',
          borderLeft: '1px solid rgba(255,255,255,0.1)',
        }}>
          <nav style={{ flex: 1 }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Products', href: '#products' },
                { name: 'Why Us', href: '#why-us' },
                { name: 'Contact', href: '#contact' },
              ].map((item, index) => (
                <li key={item.name} style={{
                  animation: mobileMenuOpen ? `slideUp 0.3s ease forwards ${index * 0.05}s` : 'none',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}>
                  <a 
                    href={item.href}
                    onClick={closeMobileMenu}
                    style={{
                      display: 'block',
                      padding: '16px 0',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            <Link 
              href="/shop"
              onClick={closeMobileMenu}
              style={{
                display: 'block',
                width: '100%',
                padding: '16px',
                background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)',
                color: '#0a0a0b',
                textAlign: 'center',
                textDecoration: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '16px',
              }}
            >
              Shop Now
            </Link>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '16px',
            }}>
              {['📘', '📸', '🐦', '💬'].map((icon, index) => (
                <a 
                  key={index}
                  style={{
                    width: '44px',
                    height: '44px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>

            <p style={{
              textAlign: 'center',
              color: '#6a6a70',
              fontSize: '0.8rem',
              marginTop: '24px',
            }}>
              "Buy Luxury, Buy Peace" ✌🏽
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: isMobile ? '100px 5% 60px' : '120px 4% 80px',
        overflow: 'hidden',
      }} id="home">
        {!isMobile && (
          <>
            <div style={{
              position: 'absolute',
              top: '15%',
              left: '8%',
              width: '120px',
              height: '120px',
              borderRadius: '20px',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
              border: '1px solid rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              animation: 'float 6s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute',
              top: '25%',
              right: '10%',
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
              border: '1px solid rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              animation: 'float 6s ease-in-out infinite 2s',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '20%',
              left: '12%',
              width: '100px',
              height: '100px',
              borderRadius: '20px',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
              border: '1px solid rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              animation: 'float 6s ease-in-out infinite 4s',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '25%',
              right: '8%',
              width: '140px',
              height: '140px',
              borderRadius: '20px',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
              border: '1px solid rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              animation: 'float 6s ease-in-out infinite 1s',
            }} />
          </>
        )}

        <div style={{
          textAlign: 'center',
          maxWidth: '900px',
          position: 'relative',
          zIndex: 2,
          padding: isMobile ? '0 10px' : '0',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(201, 169, 98, 0.1)',
            border: '1px solid rgba(201, 169, 98, 0.3)',
            padding: isMobile ? '0.4rem 1rem' : '0.5rem 1.25rem',
            borderRadius: '100px',
            fontSize: isMobile ? '0.75rem' : '0.85rem',
            color: '#c9a962',
            marginBottom: isMobile ? '1.5rem' : '2rem',
          }}>
            ✨ Premium Tech Destination
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: isMobile ? '2.5rem' : isTablet ? '4rem' : 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            color: '#ffffff',
          }}>
            Elevate Your <span style={{
              background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Digital Life</span>
          </h1>

          <p style={{
            fontSize: isMobile ? '1rem' : 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#a0a0a5',
            marginBottom: '1rem',
            fontWeight: 300,
            padding: isMobile ? '0 10px' : '0',
          }}>
            Your trusted source for premium UK used and brand new everything..
          </p>

          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: isMobile ? '1.1rem' : 'clamp(1.3rem, 3vw, 1.8rem)',
            fontStyle: 'italic',
            color: '#e8d5a3',
            marginBottom: isMobile ? '2rem' : '3rem',
          }}>
            "Buy Luxury, Buy Peace" ✌🏽
          </p>

          <div style={{
            display: 'flex',
            gap: isMobile ? '0.75rem' : '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            padding: isMobile ? '0 20px' : '0',
          }}>
            <Link href="/shop" style={{
              background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)',
              color: '#0a0a0b',
              padding: isMobile ? '0.9rem 2rem' : '1rem 2.5rem',
              borderRadius: '100px',
              fontSize: '1rem',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: '0 0 60px rgba(201, 169, 98, 0.15)',
              width: isMobile ? '100%' : 'auto',
            }}>
              Explore Products →
            </Link>
            <a href="#contact" style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#ffffff',
              padding: isMobile ? '0.9rem 2rem' : '1rem 2.5rem',
              borderRadius: '100px',
              fontSize: '1rem',
              fontWeight: 500,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              width: isMobile ? '100%' : 'auto',
            }}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        position: 'relative',
        zIndex: 2,
        padding: isMobile ? '60px 5%' : '100px 4%',
        background: '#111113',
      }} id="services">
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
          <span style={{
            display: 'inline-block',
            color: '#c9a962',
            fontSize: isMobile ? '0.75rem' : '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>What We Offer</span>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            color: '#ffffff',
          }}>Our Services</h2>
          <p style={{
            color: '#a0a0a5',
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            From premium devices to expert repairs, we've got all your gadget needs covered
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: isMobile ? '1rem' : '1.5rem',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={{
                background: '#161618',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: isMobile ? '16px' : '24px',
                padding: isMobile ? '1.5rem' : '2.5rem',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = 'rgba(201, 169, 98, 0.3)'
                  e.currentTarget.style.boxShadow = '0 0 60px rgba(201, 169, 98, 0.15)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.boxShadow = 'none'
                }
              }}
            >
              <div style={{
                width: isMobile ? '50px' : '60px',
                height: isMobile ? '50px' : '60px',
                background: 'rgba(201, 169, 98, 0.1)',
                borderRadius: isMobile ? '12px' : '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: isMobile ? '1.5rem' : '1.8rem',
                marginBottom: isMobile ? '1rem' : '1.5rem',
              }}>{service.icon}</div>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                color: '#ffffff',
              }}>{service.title}</h3>
              <p style={{
                color: '#a0a0a5',
                fontSize: isMobile ? '0.9rem' : '0.95rem',
                lineHeight: 1.7,
              }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section style={{
        position: 'relative',
        zIndex: 2,
        padding: isMobile ? '60px 5%' : '100px 4%',
      }} id="products">
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
          <span style={{
            display: 'inline-block',
            color: '#c9a962',
            fontSize: isMobile ? '0.75rem' : '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>Featured Collection</span>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            color: '#ffffff',
          }}>Hot Products</h2>
          <p style={{
            color: '#a0a0a5',
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Handpicked devices that deliver exceptional value and performance
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gap: isMobile ? '1.25rem' : '2rem',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/product/${product.id}`}
              style={{
                background: '#161618',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: isMobile ? '16px' : '24px',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = 'rgba(201, 169, 98, 0.3)'
                  e.currentTarget.style.boxShadow = '0 0 60px rgba(201, 169, 98, 0.15)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.boxShadow = 'none'
                }
              }}
            >
              <div style={{
                position: 'relative',
                height: isMobile ? '220px' : '280px',
                background: 'linear-gradient(145deg, #1a1a1c 0%, #0d0d0e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <span style={{
                  position: 'absolute',
                  top: isMobile ? '0.75rem' : '1rem',
                  left: isMobile ? '0.75rem' : '1rem',
                  background: product.badgeType === 'premium' 
                    ? 'linear-gradient(135deg, #4a9eff 0%, #7b68ee 100%)' 
                    : '#c9a962',
                  color: product.badgeType === 'premium' ? 'white' : '#0a0a0b',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  zIndex: 1,
                }}>
                  {product.badge}
                </span>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{ width: '85%', height: '85%', objectFit: 'contain' }}
                />
              </div>
              <div style={{ padding: isMobile ? '1.25rem' : '1.5rem' }}>
                <span style={{
                  color: '#c9a962',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                  display: 'block',
                }}>{product.category}</span>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.1rem' : '1.3rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: '#ffffff',
                }}>{product.name}</h3>
                <p style={{
                  color: '#6a6a70',
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  marginBottom: '1rem',
                }}>{product.specs}</p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontSize: isMobile ? '1.2rem' : '1.4rem',
                    fontWeight: 600,
                    color: '#e8d5a3',
                  }}>
                    {product.price} <span style={{
                      fontSize: '0.85rem',
                      color: '#6a6a70',
                      fontWeight: 400,
                    }}>/ {product.priceNote}</span>
                  </span>
                  <button 
                    style={{
                      width: isMobile ? '40px' : '45px',
                      height: isMobile ? '40px' : '45px',
                      background: cartItems.includes(product.id) ? '#c9a962' : 'rgba(201, 169, 98, 0.1)',
                      border: `1px solid ${cartItems.includes(product.id) ? '#c9a962' : 'rgba(201, 169, 98, 0.3)'}`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      handleAddToCart(product.id)
                    }}
                  >
                    {cartItems.includes(product.id) ? '✓' : '🛒'}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: isMobile ? '2rem' : '3rem' }}>
          <Link href="/shop" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: isMobile ? '0.9rem 2rem' : '1rem 2.5rem',
            background: 'transparent',
            border: '1px solid #c9a962',
            color: '#c9a962',
            borderRadius: '100px',
            fontSize: '1rem',
            fontWeight: 500,
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#c9a962'
            e.currentTarget.style.color = '#0a0a0b'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#c9a962'
          }}
          >
            View All Products →
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{
        position: 'relative',
        zIndex: 2,
        padding: isMobile ? '60px 5%' : '100px 4%',
        background: '#111113',
      }} id="why-us">
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
          <span style={{
            display: 'inline-block',
            color: '#c9a962',
            fontSize: isMobile ? '0.75rem' : '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>The Nezerr Difference</span>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            color: '#ffffff',
          }}>Why Choose Us?</h2>
          <p style={{
            color: '#a0a0a5',
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Experience the peace of mind that comes with premium quality and trusted service
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '1rem' : '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: isMobile ? '1rem' : '2rem',
            }}>
              <div style={{
                width: isMobile ? '50px' : '80px',
                height: isMobile ? '50px' : '80px',
                background: 'rgba(201, 169, 98, 0.1)',
                border: '1px solid rgba(201, 169, 98, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: isMobile ? '1.3rem' : '2rem',
                margin: '0 auto 1rem',
              }}>{feature.icon}</div>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '0.95rem' : '1.3rem',
                marginBottom: '0.5rem',
                color: '#ffffff',
              }}>{feature.title}</h3>
              <p style={{
                color: '#a0a0a5',
                fontSize: isMobile ? '0.8rem' : '0.95rem',
                lineHeight: 1.5,
              }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        position: 'relative',
        zIndex: 2,
        padding: isMobile ? '60px 5%' : '100px 4%',
        background: 'linear-gradient(180deg, #0a0a0b 0%, #111113 100%)',
      }} id="contact">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? '2.5rem' : '4rem',
          alignItems: 'center',
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: isMobile ? '1.8rem' : '2.5rem',
              marginBottom: '1.5rem',
              color: '#ffffff',
            }}>Let's Connect</h2>
            <p style={{
              color: '#a0a0a5',
              marginBottom: '2rem',
              lineHeight: 1.8,
              fontSize: isMobile ? '0.95rem' : '1rem',
            }}>
              Have questions about our products or need a custom solution? We're here to help you find the perfect gadget for your needs.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: '📍', title: 'Visit Us', text: 'Lagos, Nigeria' },
                { icon: '📞', title: 'Call Us', text: '+234 813 807 4357' },
                { icon: '✉️', title: 'Email Us', text: 'Ibikunlebenezer@gmail.com' },
                { icon: '⏰', title: 'Business Hours', text: 'Mon - Sat: 9AM - 4PM' },
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: isMobile ? '45px' : '50px',
                    height: isMobile ? '45px' : '50px',
                    background: 'rgba(201, 169, 98, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: '#ffffff' }}>{item.title}</h4>
                    <p style={{ color: '#6a6a70', fontSize: '0.9rem', margin: 0 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: '#161618',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: isMobile ? '16px' : '24px',
            padding: isMobile ? '1.5rem' : '2.5rem',
          }}>
            {['Your Name', 'Email Address', 'Phone Number'].map((label, index) => (
              <div key={index} style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.9rem', color: '#a0a0a5', marginBottom: '0.5rem' }}>{label}</label>
                <input 
                  type={index === 1 ? 'email' : index === 2 ? 'tel' : 'text'}
                  placeholder={index === 0 ? 'John Doe' : index === 1 ? 'john@example.com' : '+234 XXX XXX XXXX'}
                  style={{
                    width: '100%',
                    background: '#111113',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: isMobile ? '0.9rem' : '1rem',
                    color: '#ffffff',
                    fontSize: '1rem',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#c9a962')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
              </div>
            ))}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: '#a0a0a5', marginBottom: '0.5rem' }}>Your Message</label>
              <textarea 
                placeholder="Tell us what you're looking for..."
                style={{
                  width: '100%',
                  background: '#111113',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: isMobile ? '0.9rem' : '1rem',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '120px',
                  fontFamily: 'inherit',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#c9a962')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>
            <button style={{
              width: '100%',
              background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)',
              color: '#0a0a0b',
              border: 'none',
              padding: isMobile ? '0.9rem 2rem' : '1rem 2rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(201, 169, 98, 0.15)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              Send Message →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0a0a0b',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: isMobile ? '40px 5% 24px' : '60px 4% 30px',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : '2fr 1fr 1fr 1fr',
          gap: isMobile ? '2rem' : '3rem',
          marginBottom: isMobile ? '2rem' : '3rem',
        }}>
          <div style={{ maxWidth: isMobile ? '100%' : '300px' }}>
            <Link href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              marginBottom: '1rem',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#0a0a0b',
              }}>N</div>
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#ffffff',
              }}>Nezerr Gadgets</span>
            </Link>
            <p style={{ color: '#a0a0a5', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Your trusted destination for premium gadgets. We believe in quality, reliability, and exceptional customer service. Buy Luxury, Buy Peace ✌🏽
            </p>
          </div>

          {[
            { title: 'Quick Links', links: [{ name: 'Home', href: '/' }, { name: 'Shop', href: '/shop' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '#contact' }] },
            { title: 'Services', links: [{ name: 'UK Used Phones', href: '/shop?category=phones' }, { name: 'Premium Laptops', href: '/shop?category=laptops' }, { name: 'CCTV Installation', href: '/shop?category=security' }, { name: 'Gadget Repairs', href: '/shop?category=repairs' }] },
            { title: 'Support', links: [{ name: 'FAQs', href: '#' }, { name: 'Warranty Info', href: '#' }, { name: 'Shipping Policy', href: '#' }, { name: 'Return Policy', href: '#' }] },
          ].map((section, index) => (
            <div key={index}>
              <h4 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.1rem',
                marginBottom: '1.25rem',
                color: '#ffffff',
              }}>{section.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} style={{ marginBottom: '0.6rem' }}>
                    <Link href={link.href} style={{
                      color: '#a0a0a5',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#c9a962'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0a5'}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <p style={{ color: '#6a6a70', fontSize: '0.85rem', textAlign: isMobile ? 'center' : 'left' }}>
            © 2024 Nezerr Gadgets. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {['📘', '📸', '🐦', '💬'].map((icon, index) => (
              <a 
                key={index}
                style={{
                  width: '38px',
                  height: '38px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a0a0a5',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#c9a962'
                  e.currentTarget.style.color = '#0a0a0b'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.color = '#a0a0a5'
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
