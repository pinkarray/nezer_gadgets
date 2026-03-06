export type Product = {
  id: number
  name: string
  category: string
  subcategory: string
  specs: string
  price: number
  badge: string
  badgeType: 'default' | 'premium' | 'new' | 'sale'
  image: string
  description: string
  features: string[]
  variants?: { label: string; price: number }[]
}

export const allProducts: Product[] = [

  // ─────────────────────────────────────────────
  // SAMSUNG S SERIES
  // ─────────────────────────────────────────────
  {
    id: 1, name: 'Samsung Galaxy S8', category: 'phones', subcategory: 'samsung',
    specs: '64GB • UK Used • Midnight Black', price: 180000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s8-.jpg',
    description: 'Samsung Galaxy S8 with Infinity Display and iris scanner.',
    features: ['6.2" Infinity Display', 'Snapdragon 835', 'Wireless charging'],
    variants: [{ label: '64GB UK Used', price: 180000 }]
  },
  {
    id: 2, name: 'Samsung Galaxy S9', category: 'phones', subcategory: 'samsung',
    specs: '64GB • UK Used • Midnight Black', price: 200000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-.jpg',
    description: 'Samsung Galaxy S9 with dual aperture camera.',
    features: ['5.8" Super AMOLED', 'Dual Aperture Camera', 'Snapdragon 845'],
    variants: [{ label: '64GB UK Used', price: 200000 }]
  },
  {
    id: 3, name: 'Samsung Galaxy S9+', category: 'phones', subcategory: 'samsung',
    specs: '64GB • UK Used • Midnight Black', price: 220000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-plus-blue.jpg',
    description: 'Samsung Galaxy S9+ with dual rear cameras and large 6.2" display.',
    features: ['6.2" Super AMOLED', 'Dual Rear Camera', 'Snapdragon 845'],
    variants: [{ label: '64GB UK Used', price: 220000 }]
  },
  {
    id: 4, name: 'Samsung Galaxy S10e', category: 'phones', subcategory: 'samsung',
    specs: '128GB • UK Used • Prism Black', price: 230000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10e.jpg',
    description: 'Compact Samsung Galaxy S10e with flat display and dual cameras.',
    features: ['5.8" Dynamic AMOLED', 'Dual Camera', 'In-display fingerprint'],
    variants: [{ label: '128GB UK Used', price: 230000 }]
  },
  {
    id: 5, name: 'Samsung Galaxy S10', category: 'phones', subcategory: 'samsung',
    specs: '128GB • UK Used • Prism Black', price: 260000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10.jpg',
    description: 'Samsung Galaxy S10 with triple cameras and punch-hole display.',
    features: ['6.1" Dynamic AMOLED', 'Triple Camera', 'Ultrasonic fingerprint'],
    variants: [{ label: '128GB UK Used', price: 260000 }]
  },
  {
    id: 6, name: 'Samsung Galaxy S10+', category: 'phones', subcategory: 'samsung',
    specs: '128GB • UK Used • Ceramic Black', price: 300000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10-plus-new.jpg',
    description: 'Samsung Galaxy S10+ with quad cameras and 6.4" display.',
    features: ['6.4" Dynamic AMOLED', 'Quad Camera', '4100mAh battery'],
    variants: [{ label: '128GB UK Used', price: 300000 }]
  },
  {
    id: 7, name: 'Samsung Galaxy S20', category: 'phones', subcategory: 'samsung',
    specs: '128GB • UK Used • Cosmic Grey', price: 280000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-.jpg',
    description: 'Samsung Galaxy S20 with 64MP camera and 120Hz display.',
    features: ['6.2" 120Hz AMOLED', '64MP Camera', '5G Ready'],
    variants: [{ label: '128GB UK Used', price: 280000 }]
  },
  {
    id: 8, name: 'Samsung Galaxy S20+', category: 'phones', subcategory: 'samsung',
    specs: '128GB • UK Used • Cosmic Black', price: 315000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-plus.jpg',
    description: 'Samsung Galaxy S20+ with quad camera and larger 6.7" screen.',
    features: ['6.7" 120Hz AMOLED', 'Quad Camera System', '5G Ready'],
    variants: [{ label: '128GB UK Used', price: 315000 }]
  },
  {
    id: 9, name: 'Samsung Galaxy S20 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '128GB / 256GB • UK Used • Cosmic Black', price: 365000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-ultra-.jpg',
    description: 'Samsung Galaxy S20 Ultra with 108MP camera and 100x Space Zoom.',
    features: ['108MP Camera', '100x Space Zoom', '6.9" 120Hz display'],
    variants: [
      { label: '128GB UK Used', price: 365000 },
      { label: '256GB UK Used', price: 390000 },
    ]
  },
  {
    id: 10, name: 'Samsung Galaxy S21', category: 'phones', subcategory: 'samsung',
    specs: '128GB • 5G', price: 300000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-5g-r.jpg',
    description: 'Samsung Galaxy S21 with triple camera and 8K video.',
    features: ['6.2" Dynamic AMOLED 2X', 'Triple Camera', '8K Video'],
    variants: [
      { label: '128GB UK Used', price: 300000 },
      { label: '256GB UK Used', price: 320000 },
      { label: '128GB Brand New', price: 360000 },
      { label: '256GB Brand New', price: 370000 },
    ]
  },
  {
    id: 11, name: 'Samsung Galaxy S21+', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Phantom Violet', price: 300000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-plus-5g-.jpg',
    description: 'Samsung Galaxy S21+ with 6.7" display and triple cameras.',
    features: ['6.7" Dynamic AMOLED 2X', 'Triple Camera', '4800mAh battery'],
    variants: [
      { label: '128GB UK Used', price: 300000 },
      { label: '256GB UK Used', price: 325000 },
      { label: '128GB Brand New', price: 410000 },
      { label: '256GB Brand New', price: 420000 },
    ]
  },
  {
    id: 12, name: 'Samsung Galaxy S21 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Phantom Black', price: 425000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg',
    description: 'Samsung Galaxy S21 Ultra with 108MP quad camera and S Pen support.',
    features: ['108MP Quad Camera', 'S Pen Compatible', '6.8" LTPO display'],
    variants: [
      { label: '128GB UK Used', price: 425000 },
      { label: '256GB UK Used', price: 475000 },
    ]
  },
  {
    id: 13, name: 'Samsung Galaxy S22', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Phantom Black', price: 370000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg',
    description: 'Samsung Galaxy S22 with compact design and professional-grade camera.',
    features: ['50MP Triple Camera', '6.1" Dynamic AMOLED 2X', 'Snapdragon 8 Gen 1'],
    variants: [
      { label: '128GB UK Used', price: 370000 },
      { label: '256GB UK Used', price: 390000 },
      { label: '128GB Brand New', price: 415000 },
      { label: '256GB Brand New', price: 430000 },
    ]
  },
  {
    id: 14, name: 'Samsung Galaxy S22+', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Phantom White', price: 405000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-plus-5g.jpg',
    description: 'Samsung Galaxy S22+ with larger display and all-day battery.',
    features: ['6.6" Dynamic AMOLED 2X', '50MP Triple Camera', 'Snapdragon 8 Gen 1'],
    variants: [
      { label: '128GB UK Used', price: 405000 },
      { label: '256GB UK Used', price: 425000 },
      { label: '128GB Brand New', price: 450000 },
      { label: '256GB Brand New', price: 470000 },
    ]
  },
  {
    id: 15, name: 'Samsung Galaxy S22 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Burgundy', price: 580000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg',
    description: 'Samsung Galaxy S22 Ultra with built-in S Pen and 108MP quad camera.',
    features: ['108MP Quad Camera', 'Built-in S Pen', '6.8" LTPO AMOLED 2X'],
    variants: [
      { label: '128GB UK Used', price: 580000 },
      { label: '256GB UK Used', price: 620000 },
      { label: '128GB Brand New', price: 660000 },
      { label: '256GB Brand New', price: 700000 },
    ]
  },
  {
    id: 16, name: 'Samsung Galaxy S23', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Phantom Black', price: 550000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-5g.jpg',
    description: 'Samsung Galaxy S23 with Snapdragon 8 Gen 2 and pro-grade camera.',
    features: ['50MP Triple Camera', 'Snapdragon 8 Gen 2', '6.1" Dynamic AMOLED 2X'],
    variants: [
      { label: '128GB UK Used', price: 550000 },
      { label: '256GB UK Used', price: 580000 },
      { label: '128GB Brand New', price: 630000 },
      { label: '256GB Brand New', price: 660000 },
    ]
  },
  {
    id: 17, name: 'Samsung Galaxy S23+', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Lavender', price: 670000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-plus-5g.jpg',
    description: 'Samsung Galaxy S23+ with 6.6" display and massive battery life.',
    features: ['6.6" Dynamic AMOLED 2X', '50MP Triple Camera', 'Snapdragon 8 Gen 2'],
    variants: [
      { label: '256GB UK Used', price: 670000 },
      { label: '256GB Brand New', price: 720000 },
    ]
  },
  {
    id: 18, name: 'Samsung Galaxy S23 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Phantom Black', price: 880000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg',
    description: 'Samsung Galaxy S23 Ultra with 200MP camera and built-in S Pen.',
    features: ['200MP Quad Camera', 'Built-in S Pen', 'Snapdragon 8 Gen 2'],
    variants: [
      { label: '256GB UK Used', price: 880000 },
      { label: '512GB UK Used', price: 910000 },
      { label: '256GB Brand New', price: 920000 },
      { label: '512GB Brand New', price: 990000 },
    ]
  },
  {
    id: 19, name: 'Samsung Galaxy S24', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Onyx Black', price: 700000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g-sm-s921.jpg',
    description: 'Samsung Galaxy S24 with Galaxy AI features and 7 years of OS updates.',
    features: ['Galaxy AI', '50MP Triple Camera', 'Snapdragon 8 Gen 3'],
    variants: [
      { label: '128GB UK Used', price: 700000 },
      { label: '256GB UK Used', price: 750000 },
      { label: '128GB Brand New', price: 820000 },
      { label: '256GB Brand New', price: 890000 },
    ]
  },
  {
    id: 20, name: 'Samsung Galaxy S24+', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Marble Gray', price: 920000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-plus-5g-sm-s926.jpg',
    description: 'Samsung Galaxy S24+ with Galaxy AI and titanium-inspired design.',
    features: ['6.7" Dynamic AMOLED 2X', 'Galaxy AI features', 'Snapdragon 8 Gen 3'],
    variants: [
      { label: '256GB UK Used', price: 920000 },
      { label: '256GB Brand New', price: 960000 },
    ]
  },
  {
    id: 21, name: 'Samsung Galaxy S24 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Titanium Black', price: 1120000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg',
    description: 'Samsung Galaxy S24 Ultra with 200MP camera, built-in S Pen and titanium frame.',
    features: ['200MP Quad Camera', 'Titanium Frame', 'Built-in S Pen + AI'],
    variants: [
      { label: '256GB UK Used', price: 1120000 },
      { label: '256GB Brand New', price: 1300000 },
      { label: '512GB Brand New', price: 1350000 },
    ]
  },
  {
    id: 22, name: 'Samsung Galaxy S25', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Brand New • Icy Blue', price: 1200000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-sm-s931.jpg',
    description: 'Brand new Samsung Galaxy S25 with Snapdragon 8 Elite and advanced AI.',
    features: ['Snapdragon 8 Elite', 'Galaxy AI 2.0', '50MP Triple Camera'],
    variants: [{ label: '256GB Brand New', price: 1200000 }]
  },
  {
    id: 23, name: 'Samsung Galaxy S25+', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Brand New • Silver Shadow', price: 1300000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-plus-sm-s936.jpg',
    description: 'Brand new Samsung Galaxy S25+ with 6.7" display and long-lasting battery.',
    features: ['6.7" Dynamic AMOLED 2X', 'Snapdragon 8 Elite', 'Galaxy AI 2.0'],
    variants: [{ label: '256GB Brand New', price: 1300000 }]
  },
  {
    id: 24, name: 'Samsung Galaxy S25 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Brand New • Titanium Silver Blue', price: 1640000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra-sm-s938.jpg',
    description: 'The ultimate Samsung flagship with 200MP camera and next-gen S Pen AI.',
    features: ['200MP Quad Camera', 'Next-gen S Pen', 'Snapdragon 8 Elite'],
    variants: [
      { label: '256GB Brand New', price: 1640000 },
      { label: '512GB Brand New', price: 1700000 },
    ]
  },

  // ─────────────────────────────────────────────
  // SAMSUNG NOTE SERIES
  // ─────────────────────────────────────────────
  {
    id: 25, name: 'Samsung Galaxy Note 10', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Aura Black', price: 300000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note10-.jpg',
    description: 'Samsung Galaxy Note 10 with S Pen and triple rear cameras.',
    features: ['S Pen', '6.3" Dynamic AMOLED', 'Triple Camera'],
    variants: [
      { label: '256GB UK Used', price: 300000 },
      { label: '256GB Brand New', price: 330000 },
    ]
  },
  {
    id: 26, name: 'Samsung Galaxy Note 10+', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Aura White', price: 377000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note10-plus-.jpg',
    description: 'Samsung Galaxy Note 10+ with quad camera and 6.8" display.',
    features: ['6.8" Dynamic AMOLED', 'Quad Camera', 'S Pen with Air Actions'],
    variants: [
      { label: '256GB UK Used', price: 377000 },
      { label: '256GB Brand New 5G', price: 400000 },
    ]
  },
  {
    id: 27, name: 'Samsung Galaxy Note 20', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Mystic Gray', price: 370000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note20-5g-r.jpg',
    description: 'Samsung Galaxy Note 20 with improved S Pen and 64MP camera.',
    features: ['64MP Camera', 'S Pen', '6.7" Super AMOLED Plus'],
    variants: [
      { label: '256GB UK Used', price: 370000 },
      { label: '256GB Brand New', price: 400000 },
    ]
  },
  {
    id: 28, name: 'Samsung Galaxy Note 20 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Mystic Bronze', price: 500000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note20-ultra-.jpg',
    description: 'Samsung Galaxy Note 20 Ultra with 108MP camera and 120Hz LTPO display.',
    features: ['108MP Triple Camera', '6.9" 120Hz LTPO AMOLED', 'S Pen 9ms latency'],
    variants: [
      { label: '128GB UK Used', price: 500000 },
      { label: '256GB UK Used', price: 540000 },
      { label: '128GB Brand New 5G', price: 600000 },
      { label: '256GB Brand New 5G', price: 640000 },
    ]
  },

  // ─────────────────────────────────────────────
  // SAMSUNG FOLD SERIES
  // ─────────────────────────────────────────────
  {
    id: 29, name: 'Samsung Galaxy Fold 3', category: 'phones', subcategory: 'samsung-fold',
    specs: '256GB • Phantom Black', price: 650000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold3-5g.jpg',
    description: 'Samsung Galaxy Z Fold3 with foldable display and S Pen support.',
    features: ['7.6" Foldable Display', 'S Pen Compatible', 'IPX8 Water Resistant'],
    variants: [
      { label: '256GB UK Used', price: 650000 },
      { label: '512GB UK Used', price: 680000 },
      { label: '256GB Brand New', price: 700000 },
      { label: '512GB Brand New', price: 770000 },
    ]
  },
  {
    id: 30, name: 'Samsung Galaxy Fold 4', category: 'phones', subcategory: 'samsung-fold',
    specs: '256GB • Graygreen', price: 800000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold4.jpg',
    description: 'Samsung Galaxy Z Fold4 with improved hinge and multitasking.',
    features: ['7.6" Eco² OLED', 'Taskbar multitasking', 'Snapdragon 8+ Gen 1'],
    variants: [
      { label: '256GB UK Used', price: 800000 },
      { label: '512GB UK Used', price: 850000 },
      { label: '256GB Brand New', price: 870000 },
      { label: '512GB Brand New', price: 900000 },
    ]
  },
  {
    id: 31, name: 'Samsung Galaxy Fold 5', category: 'phones', subcategory: 'samsung-fold',
    specs: '256GB • Icy Blue', price: 920000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg',
    description: 'Samsung Galaxy Z Fold5 with crease-free Flex hinge and Snapdragon 8 Gen 2.',
    features: ['Flex Hinge (no crease)', 'Snapdragon 8 Gen 2', '7.6" Main Screen'],
    variants: [
      { label: '256GB UK Used', price: 920000 },
      { label: '512GB UK Used', price: 950000 },
      { label: '256GB Brand New', price: 800000 },
      { label: '512GB Brand New', price: 1120000 },
    ]
  },
  {
    id: 32, name: 'Samsung Galaxy Fold 6', category: 'phones', subcategory: 'samsung-fold',
    specs: '256GB • Brand New • Silver Shadow', price: 1300000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6.jpg',
    description: 'Samsung Galaxy Z Fold6 with wider design and Galaxy AI.',
    features: ['Wider 7.6" display', 'Galaxy AI', 'Titanium frame'],
    variants: [{ label: '256GB Brand New', price: 1300000 }]
  },
  {
    id: 33, name: 'Samsung Galaxy Fold 7', category: 'phones', subcategory: 'samsung-fold',
    specs: '256GB • Brand New • Navy', price: 2280000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold7.jpg',
    description: 'The latest Samsung Galaxy Z Fold7 — the pinnacle of foldable technology.',
    features: ['Next-gen Snapdragon', 'Advanced Galaxy AI', 'Thinnest Fold yet'],
    variants: [
      { label: '256GB Brand New', price: 2280000 },
      { label: '512GB Brand New', price: 2350000 },
    ]
  },

  // ─────────────────────────────────────────────
  // iPHONES
  // ─────────────────────────────────────────────
  {
    id: 34, name: 'iPhone 6s', category: 'phones', subcategory: 'iphone',
    specs: '32GB • UK Used • Space Gray', price: 90000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s1.jpg',
    description: 'iPhone 6s — reliable everyday performance.',
    features: ['Touch ID', 'A9 chip', '12MP Camera'],
    variants: [{ label: '32GB UK Used', price: 90000 }]
  },
  {
    id: 35, name: 'iPhone 7', category: 'phones', subcategory: 'iphone',
    specs: '32GB • UK Used • Black', price: 105000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7r4.jpg',
    description: 'iPhone 7 with water resistance and stereo speakers.',
    features: ['Water Resistant', 'Stereo Speakers', 'A10 Fusion'],
    variants: [
      { label: '32GB UK Used', price: 105000 },
      { label: '128GB UK Used', price: 125000 },
    ]
  },
  {
    id: 36, name: 'iPhone 8', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Gold', price: 135000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-new.jpg',
    description: 'iPhone 8 with glass back and wireless charging.',
    features: ['Wireless Charging', 'A11 Bionic', 'Glass Back'],
    variants: [{ label: '64GB UK Used', price: 135000 }]
  },
  {
    id: 37, name: 'iPhone SE (2nd Gen)', category: 'phones', subcategory: 'iphone',
    specs: 'UK Used • Product Red', price: 295000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg',
    description: 'iPhone SE 2nd Gen with A13 Bionic in a compact design.',
    features: ['A13 Bionic', 'Touch ID', 'Portrait Mode'],
    variants: [{ label: 'UK Used', price: 295000 }]
  },
  {
    id: 38, name: 'iPhone SE (3rd Gen)', category: 'phones', subcategory: 'iphone',
    specs: 'UK Used • Midnight', price: 210000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg',
    description: 'iPhone SE 3rd Gen with 5G and A15 Bionic at an affordable price.',
    features: ['A15 Bionic', '5G', 'Touch ID'],
    variants: [{ label: 'UK Used', price: 210000 }]
  },
  {
    id: 39, name: 'iPhone X', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Space Gray', price: 225000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg',
    description: 'iPhone X with edge-to-edge OLED display and Face ID.',
    features: ['Face ID', '5.8" OLED Super Retina', 'A11 Bionic'],
    variants: [{ label: '64GB UK Used', price: 225000 }]
  },
  {
    id: 40, name: 'iPhone XR', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Coral', price: 240000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg',
    description: 'iPhone XR with colorful design and great battery life.',
    features: ['A12 Bionic', 'Face ID', 'Liquid Retina Display'],
    variants: [
      { label: '64GB UK Used', price: 240000 },
      { label: '128GB UK Used', price: 290000 },
      { label: '256GB UK Used', price: 305000 },
    ]
  },
  {
    id: 41, name: 'iPhone 11', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Green', price: 295000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg',
    description: 'iPhone 11 with dual cameras and Night Mode.',
    features: ['Dual Camera + Night Mode', 'A13 Bionic', 'All-day battery'],
    variants: [
      { label: '64GB UK Used', price: 295000 },
      { label: '128GB UK Used', price: 330000 },
    ]
  },
  {
    id: 42, name: 'iPhone 11 Pro', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Space Gray', price: 365000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg',
    description: 'iPhone 11 Pro with triple camera system and Super Retina XDR.',
    features: ['Triple Camera', 'Super Retina XDR', 'A13 Bionic'],
    variants: [
      { label: '64GB UK Used', price: 365000 },
      { label: '256GB UK Used', price: 405000 },
    ]
  },
  {
    id: 43, name: 'iPhone 11 Pro Max', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Midnight Green', price: 425000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg',
    description: 'iPhone 11 Pro Max with the largest battery in iPhone history at the time.',
    features: ['Triple Camera', '6.5" Super Retina XDR', 'Longest Battery Life'],
    variants: [
      { label: '64GB UK Used', price: 425000 },
      { label: '256GB UK Used', price: 465000 },
      { label: '512GB UK Used', price: 475000 },
    ]
  },
  {
    id: 44, name: 'iPhone 12', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Blue', price: 330000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg',
    description: 'iPhone 12 with 5G, OLED display, and flat edge design.',
    features: ['5G', 'Super Retina XDR OLED', 'A14 Bionic'],
    variants: [
      { label: '64GB UK Used', price: 330000 },
      { label: '128GB UK Used', price: 385000 },
      { label: '256GB UK Used', price: 405000 },
    ]
  },
  {
    id: 45, name: 'iPhone 12 Pro', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Pacific Blue', price: 465000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg',
    description: 'iPhone 12 Pro with ProRAW, LiDAR Scanner and MagSafe.',
    features: ['LiDAR Scanner', 'ProRAW', 'MagSafe'],
    variants: [
      { label: '128GB UK Used', price: 465000 },
      { label: '256GB UK Used', price: 495000 },
    ]
  },
  {
    id: 46, name: 'iPhone 12 Pro Max', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Gold', price: 540000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg',
    description: 'iPhone 12 Pro Max with 6.7" display and largest camera system on iPhone.',
    features: ['6.7" Super Retina XDR', 'Sensor-shift OIS', 'ProRAW + LiDAR'],
    variants: [
      { label: '128GB UK Used', price: 540000 },
      { label: '256GB UK Used', price: 580000 },
    ]
  },
  {
    id: 47, name: 'iPhone 13', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Midnight', price: 470000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg',
    description: 'iPhone 13 with Cinematic mode and A15 Bionic chip.',
    features: ['Cinematic Mode', 'A15 Bionic', 'Super Retina XDR'],
    variants: [
      { label: '128GB UK Used', price: 470000 },
      { label: '256GB UK Used', price: 535000 },
    ]
  },
  {
    id: 48, name: 'iPhone 13 Pro', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Sierra Blue', price: 600000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg',
    description: 'iPhone 13 Pro with ProMotion 120Hz display and macro photography.',
    features: ['120Hz ProMotion', 'Macro Photography', 'A15 Bionic'],
    variants: [
      { label: '128GB UK Used', price: 600000 },
      { label: '512GB UK Used', price: 660000 },
    ]
  },
  {
    id: 49, name: 'iPhone 14', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Blue', price: 550000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg',
    description: 'iPhone 14 with Crash Detection and Emergency SOS via satellite.',
    features: ['Crash Detection', 'Emergency SOS Satellite', 'A15 Bionic'],
    variants: [
      { label: '128GB eSIM Only', price: 550000 },
      { label: '128GB pSIM + eSIM', price: 580000 },
      { label: '256GB pSIM + eSIM', price: 620000 },
    ]
  },
  {
    id: 50, name: 'iPhone 14 Plus', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Starlight', price: 645000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg',
    description: 'iPhone 14 Plus with huge 6.7" display and all-day battery life.',
    features: ['6.7" Super Retina XDR', 'All-day battery', 'Crash Detection'],
    variants: [
      { label: '128GB pSIM + eSIM', price: 645000 },
      { label: '256GB pSIM + eSIM', price: 705000 },
    ]
  },
  {
    id: 51, name: 'iPhone 14 Pro', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Deep Purple', price: 680000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg',
    description: 'iPhone 14 Pro with Dynamic Island and Always-On display.',
    features: ['Dynamic Island', 'Always-On Display', '48MP Main Camera'],
    variants: [
      { label: '128GB eSIM', price: 680000 },
      { label: '256GB eSIM', price: 770000 },
      { label: '128GB pSIM + eSIM', price: 780000 },
      { label: '256GB pSIM + eSIM', price: 830000 },
    ]
  },
  {
    id: 52, name: 'iPhone 14 Pro Max', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Space Black', price: 980000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg',
    description: 'iPhone 14 Pro Max with Dynamic Island, largest Pro display and best battery.',
    features: ['Dynamic Island', '6.7" Always-On ProMotion', '48MP Quad Camera'],
    variants: [
      { label: '128GB pSIM + eSIM', price: 980000 },
      { label: '256GB pSIM + eSIM', price: 1040000 },
    ]
  },
  {
    id: 53, name: 'iPhone 15', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Pink', price: 760000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg',
    description: 'iPhone 15 with USB-C, Dynamic Island, and 48MP camera.',
    features: ['USB-C', 'Dynamic Island', '48MP Main Camera'],
    variants: [
      { label: '128GB pSIM + eSIM', price: 760000 },
      { label: '256GB pSIM + eSIM', price: 820000 },
    ]
  },
  {
    id: 54, name: 'iPhone 15 Plus', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used ', price: 850000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus-.jpg',
    description: 'iPhone 15 Plus with 6.7" display and exceptional battery life.',
    features: ['6.7" Super Retina XDR', 'All-day battery', 'USB-C'],
    variants: [
      { label: '128GB pSIM + eSIM', price: 850000 },
      { label: '256GB pSIM + eSIM', price: 900000 },
      { label: '512GB pSIM + eSIM', price: 950000 },
    ]
  },
  {
    id: 55, name: 'iPhone 15 Pro', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Natural Titanium', price: 1050000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg',
    description: 'iPhone 15 Pro with titanium design and Action button.',
    features: ['Titanium Frame', 'Action Button', 'A17 Pro chip'],
    variants: [
      { label: '128GB pSIM + eSIM', price: 1050000 },
      { label: '256GB pSIM + eSIM', price: 1100000 },
    ]
  },
  {
    id: 56, name: 'iPhone 15 Pro Max', category: 'phones', subcategory: 'iphone',
    specs: '256GB • UK Used • Black Titanium', price: 1200000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg',
    description: 'iPhone 15 Pro Max with 5x optical zoom and titanium design.',
    features: ['5x Optical Zoom', 'A17 Pro', 'Titanium Frame'],
    variants: [
      { label: '256GB pSIM + eSIM', price: 1200000 },
      { label: '512GB pSIM + eSIM', price: 1255000 },
      { label: '1TB pSIM + eSIM', price: 1300000 },
    ]
  },
  {
    id: 57, name: 'iPhone 16', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Ultramarine', price: 1000000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg',
    description: 'iPhone 16 with Apple Intelligence and Camera Control button.',
    features: ['Apple Intelligence', 'Camera Control', 'A18 chip'],
    variants: [
      { label: '128GB pSIM + eSIM', price: 1000000 },
      { label: '256GB pSIM + eSIM', price: 1175000 },
      { label: '512GB pSIM + eSIM', price: 1200000 },
    ]
  },
  {
    id: 58, name: 'iPhone 16 Plus', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Pink', price: 1270000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg',
    description: 'iPhone 16 Plus with 6.7" display and Apple Intelligence.',
    features: ['6.7" Super Retina XDR', 'Apple Intelligence', 'A18 chip'],
    variants: [
      { label: '128GB pSIM + eSIM', price: 1270000 },
      { label: '256GB pSIM + eSIM', price: 1300000 },
      { label: '512GB pSIM + eSIM', price: 1400000 },
    ]
  },
  {
    id: 59, name: 'iPhone 16 Pro Max', category: 'phones', subcategory: 'iphone',
    specs: '256GB • UK Used • Desert Titanium', price: 1520000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg',
    description: 'iPhone 16 Pro Max with A18 Pro, 4K 120fps video and titanium design.',
    features: ['A18 Pro chip', '4K 120fps Video', 'Apple Intelligence'],
    variants: [
      { label: '256GB pSIM + eSIM', price: 1520000 },
      { label: '512GB pSIM + eSIM', price: 1600000 },
    ]
  },
  {
    id: 77, name: 'iPhone 16e', category: 'phones', subcategory: 'iphone',
    specs: 'Brand New • A16 Bionic • 6.1"', price: 850000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg',
    description: 'iPhone 16e — Apple Intelligence, A16 Bionic, and MagSafe at an accessible price.',
    features: ['A16 Bionic', 'Apple Intelligence', 'MagSafe'],
    variants: [
      { label: '128GB White', price: 850000 },
      { label: '128GB Black', price: 850000 },
    ]
  },
  {
    id: 60, name: 'iPhone 17', category: 'phones', subcategory: 'iphone',
    specs: 'Brand New • 6.3" ProMotion • A19 chip', price: 1150000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17.jpg',
    description: 'iPhone 17 — ProMotion display, A19 chip, Center Stage front camera, and Apple Intelligence.',
    features: ['A19 chip', '6.3" ProMotion Always-On', 'Center Stage front camera'],
    variants: [
      { label: '256GB Black', price: 1150000 },
      { label: '256GB White', price: 1150000 },
      { label: '256GB Lavender', price: 1150000 },
    ]
  },
  {
    id: 74, name: 'iPhone Air', category: 'phones', subcategory: 'iphone',
    specs: 'Brand New • 5.6mm thin • A19 Pro chip', price: 1350000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-air.jpg',
    description: 'iPhone Air — the thinnest iPhone ever at 5.6mm, with A19 Pro chip and titanium frame.',
    features: ['5.6mm thin — thinnest iPhone ever', 'A19 Pro chip', '6.5" ProMotion Always-On'],
    variants: [
      { label: '256GB Sky Blue', price: 1350000 },
      { label: '256GB Cloud White', price: 1350000 },
      { label: '256GB Space Black', price: 1350000 },
      { label: '256GB Light Gold', price: 1350000 },
    ]
  },
  {
    id: 75, name: 'iPhone 17 Pro', category: 'phones', subcategory: 'iphone',
    specs: 'Brand New • 6.3" • A19 Pro • 8x Zoom', price: 1650000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17-pro.jpg',
    description: 'iPhone 17 Pro — aluminum unibody, A19 Pro, all 48MP cameras, and the longest iPhone zoom ever at 8x.',
    features: ['A19 Pro + vapor cooling', 'All 48MP Pro Fusion cameras', '8x optical-quality zoom'],
    variants: [
      { label: '256GB Deep Blue', price: 1650000 },
      { label: '256GB Cosmic Orange', price: 1650000 },
      { label: '256GB Silver', price: 1650000 },
      { label: '512GB Deep Blue', price: 1800000 },
      { label: '1TB Deep Blue', price: 2270000 },
    ]
  },
  {
    id: 76, name: 'iPhone 17 Pro Max', category: 'phones', subcategory: 'iphone',
    specs: 'Brand New • 6.9" • A19 Pro • 39hr battery', price: 1900000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17-pro-max.jpg',
    description: 'iPhone 17 Pro Max — the biggest Pro with 39-hour battery life and the ultimate camera system.',
    features: ['39hr video playback battery', '6.9" Super Retina XDR', 'A19 Pro + 8x zoom'],
    variants: [
      { label: '256GB Deep Blue', price: 1900000 },
      { label: '256GB Cosmic Orange', price: 1900000 },
      { label: '256GB Silver', price: 1900000 },
      { label: '512GB Deep Blue', price: 2050000 },
      { label: '1TB Deep Blue', price: 2300000 },
      { label: '2TB Deep Blue', price: 2500000 },
    ]
  },

  // ─────────────────────────────────────────────
  // iPADS
  // ─────────────────────────────────────────────
  {
    id: 61, name: 'iPad 10th Gen', category: 'tablets', subcategory: 'ipad',
    specs: '64GB • Brand New • Blue • Wi-Fi', price: 560000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-10-2022.jpg',
    description: 'iPad 10th Gen with redesigned all-screen design and USB-C.',
    features: ['All-screen Design', 'USB-C', 'A14 Bionic chip'],
    variants: [{ label: '64GB Brand New Wi-Fi', price: 560000 }]
  },
  {
    id: 62, name: 'iPad (11th Gen A16)', category: 'tablets', subcategory: 'ipad',
    specs: '128GB • Brand New • Wi-Fi', price: 600000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-11-inch-2025.jpg',
    description: 'iPad 11th Gen with A16 chip — the most powerful standard iPad.',
    features: ['A16 Bionic', 'Wi-Fi 6E', 'Apple Pencil Pro support'],
    variants: [
      { label: '128GB Blue Brand New', price: 600000 },
      { label: '128GB Pink Brand New', price: 650000 },
    ]
  },
  {
    id: 63, name: 'iPad Pro M4 13"', category: 'tablets', subcategory: 'ipad',
    specs: '2TB • Brand New • Wi-Fi', price: 2170000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-13-2024.jpg',
    description: 'iPad Pro M4 13" — the thinnest Apple product ever made.',
    features: ['M4 chip', 'Ultra Retina XDR OLED', 'Thinnest Apple device ever'],
    variants: [{ label: '2TB Brand New Wi-Fi', price: 2170000 }]
  },

  // ─────────────────────────────────────────────
  // SPEAKERS
  // ─────────────────────────────────────────────
  {
    id: 64, name: 'JBL Flip 7', category: 'speakers', subcategory: 'jbl',
    specs: 'Brand New • IP67 Waterproof', price: 240000, badge: 'New', badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
    description: 'JBL Flip 7 portable Bluetooth speaker with IP67 waterproofing.',
    features: ['IP67 Waterproof', 'JBL Bass Radiator', 'PartyBoost'],
    variants: [{ label: 'Brand New', price: 240000 }]
  },
  {
    id: 65, name: 'JBL Charge 6', category: 'speakers', subcategory: 'jbl',
    specs: 'Brand New • IP67 • Power Bank', price: 280000, badge: 'New', badgeType: 'new',
    image: 'data:image/webp;base64,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',
    description: 'JBL Charge 6 with built-in power bank and powerful bass.',
    features: ['Built-in Power Bank', 'IP67 Waterproof', 'PartyBoost'],
    variants: [{ label: 'Brand New', price: 280000 }]
  },
  {
    id: 66, name: 'Harman Kardon Onyx Studio 9', category: 'speakers', subcategory: 'speakers',
    specs: 'Brand New • Bluetooth 5.3', price: 370000, badge: 'New', badgeType: 'new',
    image: 'data:image/webp;base64,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',
    description: 'Harman Kardon Onyx Studio 9 — premium home audio experience.',
    features: ['360° Sound', 'Bluetooth 5.3', 'Elegant design'],
    variants: [{ label: 'Brand New', price: 370000 }]
  },

  // ─────────────────────────────────────────────
  // PLAYSTATION
  // ─────────────────────────────────────────────
  {
    id: 67, name: 'PlayStation 5 Slim', category: 'gaming', subcategory: 'playstation',
    specs: 'Brand New • Disc Version', price: 900000, badge: 'New', badgeType: 'new',
    image: 'data:image/webp;base64,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',
    description: 'PlayStation 5 Slim Disc Edition — next-gen gaming in a slimmer form.',
    features: ['Ultra-High Speed SSD', 'Haptic Feedback Controller', 'Ray Tracing'],
    variants: [
      { label: 'Disc Version Brand New', price: 900000 },
      { label: 'DualSense Controller', price: 135000 },
    ]
  },

  // ─────────────────────────────────────────────
  // CCTV & SECURITY
  // ─────────────────────────────────────────────
  {
    id: 68, name: '4-Camera CCTV Kit', category: 'security', subcategory: 'cctv',
    specs: '1080p • Night Vision • 1TB HDD', price: 185000, badge: 'Popular', badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=600&h=600&fit=crop',
    description: 'Complete 4-camera HD security system with 1TB storage and night vision.',
    features: ['4x 1080p Cameras', 'Night Vision', '1TB HDD Storage'],
    variants: [{ label: '4-Camera 1080p Kit', price: 185000 }]
  },
  {
    id: 69, name: '8-Camera CCTV Kit', category: 'security', subcategory: 'cctv',
    specs: '4K • Night Vision • 2TB HDD', price: 350000, badge: 'Pro', badgeType: 'premium',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop',
    description: 'Professional 8-camera 4K security system with 2TB storage.',
    features: ['8x 4K Cameras', 'Night Vision', '2TB HDD'],
    variants: [{ label: '8-Camera 4K Kit', price: 350000 }]
  },
  {
    id: 70, name: 'Wireless IP Camera', category: 'security', subcategory: 'cctv',
    specs: '1080p • Wi-Fi • Motion Detection', price: 45000, badge: 'New', badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop',
    description: 'Compact wireless IP camera for remote monitoring with motion alerts.',
    features: ['1080p HD', 'Wi-Fi Connected', 'Motion Detection'],
    variants: [{ label: 'Single Camera', price: 45000 }]
  },

  // ─────────────────────────────────────────────
  // PRINTERS
  // ─────────────────────────────────────────────
  {
    id: 71, name: 'HP LaserJet Pro', category: 'printers', subcategory: 'printers',
    specs: 'Laser • Wi-Fi • Duplex', price: 185000, badge: 'Office', badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&fit=crop',
    description: 'Reliable office laser printer with wireless and duplex printing.',
    features: ['Duplex Printing', 'Wi-Fi', 'Fast Laser Print'],
    variants: [{ label: 'HP LaserJet Pro', price: 185000 }]
  },
  {
    id: 72, name: 'Epson EcoTank', category: 'printers', subcategory: 'printers',
    specs: 'Inkjet • Refillable Tank', price: 145000, badge: 'Eco', badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&fit=crop',
    description: 'Epson EcoTank with refillable ink for ultra-low running costs.',
    features: ['Refillable Ink Tanks', 'High Page Yield', 'Photo Printing'],
    variants: [{ label: 'Epson EcoTank', price: 145000 }]
  },
  {
    id: 73, name: 'Canon PIXMA', category: 'printers', subcategory: 'printers',
    specs: 'All-in-One • Photo Print', price: 95000, badge: 'Home', badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&fit=crop',
    description: 'Canon PIXMA all-in-one photo printer for home use.',
    features: ['Photo Printing', 'Scan & Copy', 'Compact Design'],
    variants: [{ label: 'Canon PIXMA', price: 95000 }]
  },
]

export default allProducts