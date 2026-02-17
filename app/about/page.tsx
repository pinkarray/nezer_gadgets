'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AboutPage() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '10K+', label: 'Devices Sold' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support' },
  ]

  const values = [
    { icon: '💎', title: 'Quality First', description: 'Every device undergoes rigorous testing before reaching our customers.' },
    { icon: '🤝', title: 'Trust & Transparency', description: 'Honest pricing, clear product conditions, and no hidden surprises.' },
    { icon: '💰', title: 'Value for Money', description: 'Premium quality gadgets at prices that make sense for your budget.' },
    { icon: '🛡️', title: 'Customer Protection', description: 'Comprehensive warranty and after-sales support on all products.' },
  ]

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
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '1.1rem' : '1.5rem', fontWeight: 600, color: '#ffffff' }}>Nezerr Gadgets</span>
        </Link>

        {!isMobile && (
          <>
            <ul style={{ display: 'flex', gap: isTablet ? '1.5rem' : '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {[{ name: 'Home', href: '/' }, { name: 'Shop', href: '/shop' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/#contact' }].map((item) => (
                <li key={item.name}><Link href={item.href} style={{ color: item.name === 'About' ? '#c9a962' : '#a0a0a5', textDecoration: 'none', fontSize: isTablet ? '0.85rem' : '0.95rem', fontWeight: item.name === 'About' ? 500 : 400 }}>{item.name}</Link></li>
              ))}
            </ul>
            <Link href="/shop" style={{ background: 'transparent', border: '1px solid #c9a962', color: '#c9a962', padding: isTablet ? '0.6rem 1.25rem' : '0.75rem 1.75rem', borderRadius: '100px', fontSize: isTablet ? '0.8rem' : '0.9rem', fontWeight: 500, textDecoration: 'none' }}>Shop Now</Link>
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
                {[{ name: 'Home', href: '/' }, { name: 'Shop', href: '/shop' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/#contact' }].map((item) => (
                  <li key={item.name}><Link href={item.href} onClick={() => setMobileMenuOpen(false)} style={{ display: 'block', padding: '16px 0', color: '#ffffff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{item.name}</Link></li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}

      {/* Main Content */}
      <main style={{ paddingTop: isMobile ? '70px' : '90px', minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        {/* Hero Section */}
        <section style={{ padding: isMobile ? '60px 5%' : '100px 4%', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#c9a962', fontSize: isMobile ? '0.75rem' : '0.85rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Story</span>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '2.2rem' : '3.5rem', fontWeight: 600, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Bringing <span style={{ background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Premium Tech</span> to Nigeria
            </h1>
            <p style={{ color: '#a0a0a5', fontSize: isMobile ? '1rem' : '1.2rem', lineHeight: 1.8 }}>
              Founded with a simple mission: to make quality gadgets accessible to everyone. We believe that everyone deserves premium technology without breaking the bank.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: isMobile ? '40px 5%' : '60px 4%', background: '#111113' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '2rem' : '3rem' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '2.5rem' : '3.5rem', fontWeight: 600, color: '#c9a962', marginBottom: '0.5rem' }}>{stat.number}</div>
                <div style={{ color: '#a0a0a5', fontSize: isMobile ? '0.9rem' : '1rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section style={{ padding: isMobile ? '60px 5%' : '100px 4%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '4rem', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-block', color: '#c9a962', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Who We Are</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Your Trusted Tech Partner</h2>
              <p style={{ color: '#a0a0a5', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                Nezerr Gadgets started as a small venture with a big dream - to bridge the gap between premium technology and affordable pricing in Nigeria. Today, we've grown into a trusted name for quality UK used and premium gadgets.
              </p>
              <p style={{ color: '#a0a0a5', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Every device we sell goes through rigorous testing and quality checks. We believe in transparency, quality, and building lasting relationships with our customers.
              </p>
              <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontStyle: 'italic', color: '#e8d5a3' }}>
                "Buy Luxury, Buy Peace" ✌🏽
              </p>
            </div>
            <div style={{ background: '#161618', borderRadius: '24px', padding: isMobile ? '2rem' : '3rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(201, 169, 98, 0.2) 0%, transparent 70%)' }} />
              <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop" alt="Tech Store" style={{ width: '100%', borderRadius: '16px', position: 'relative', zIndex: 1 }} />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section style={{ padding: isMobile ? '60px 5%' : '100px 4%', background: '#111113' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
              <span style={{ display: 'inline-block', color: '#c9a962', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Values</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 600 }}>What Sets Us Apart</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {values.map((value, index) => (
                <div key={index} style={{ background: '#161618', borderRadius: '20px', padding: isMobile ? '1.5rem' : '2rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(201, 169, 98, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', margin: '0 auto 1.25rem' }}>{value.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>{value.title}</h3>
                  <p style={{ color: '#a0a0a5', fontSize: '0.9rem', lineHeight: 1.6 }}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: isMobile ? '60px 5%' : '100px 4%', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 600, marginBottom: '1rem' }}>Ready to Upgrade?</h2>
            <p style={{ color: '#a0a0a5', fontSize: '1.1rem', marginBottom: '2rem' }}>Browse our collection of premium gadgets and find your perfect match.</p>
            <Link href="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #c9a962 0%, #e8d5a3 50%, #c9a962 100%)', color: '#0a0a0b', padding: '1rem 2.5rem', borderRadius: '100px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
              Explore Shop →
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ background: '#0a0a0b', borderTop: '1px solid rgba(255,255,255,0.05)', padding: isMobile ? '30px 5%' : '40px 4%', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: '#6a6a70', fontSize: '0.85rem', textAlign: 'center' }}>© 2024 Nezerr Gadgets. All rights reserved.</p>
          <p style={{ color: '#6a6a70', fontSize: '0.85rem', fontStyle: 'italic' }}>"Buy Luxury, Buy Peace" ✌🏽</p>
        </div>
      </footer>
    </>
  )
}
