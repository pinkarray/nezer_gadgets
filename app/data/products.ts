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
    specs: '64GB • UK Used • Midnight Black',
    price: 180000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg',
    description: 'Samsung Galaxy S8 with Infinity Display and iris scanner.',
    features: ['6.2" Infinity Display', 'Snapdragon 835', 'Wireless charging'],
    variants: [{ label: '64GB UK Used', price: 180000 }]
  },
  {
    id: 2, name: 'Samsung Galaxy S9', category: 'phones', subcategory: 'samsung',
    specs: '64GB • UK Used • Midnight Black',
    price: 200000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-.jpg',
    description: 'Samsung Galaxy S9 with dual aperture camera.',
    features: ['5.8" Super AMOLED', 'Dual Aperture Camera', 'Snapdragon 845'],
    variants: [{ label: '64GB UK Used', price: 200000 }]
  },
  {
    id: 3, name: 'Samsung Galaxy S9+', category: 'phones', subcategory: 'samsung',
    specs: '64GB • UK Used • Midnight Black',
    price: 220000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s9-plus-.jpg',
    description: 'Samsung Galaxy S9+ with dual rear cameras and large 6.2" display.',
    features: ['6.2" Super AMOLED', 'Dual Rear Camera', 'Snapdragon 845'],
    variants: [{ label: '64GB UK Used', price: 220000 }]
  },
  {
    id: 4, name: 'Samsung Galaxy S10e', category: 'phones', subcategory: 'samsung',
    specs: '128GB • UK Used • Prism Black',
    price: 230000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10e.jpg',
    description: 'Compact Samsung Galaxy S10e with flat display and dual cameras.',
    features: ['5.8" Dynamic AMOLED', 'Dual Camera', 'In-display fingerprint'],
    variants: [{ label: '128GB UK Used', price: 230000 }]
  },
  {
    id: 5, name: 'Samsung Galaxy S10', category: 'phones', subcategory: 'samsung',
    specs: '128GB • UK Used • Prism Black',
    price: 260000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10.jpg',
    description: 'Samsung Galaxy S10 with triple cameras and punch-hole display.',
    features: ['6.1" Dynamic AMOLED', 'Triple Camera', 'Ultrasonic fingerprint'],
    variants: [{ label: '128GB UK Used', price: 260000 }]
  },
  {
    id: 6, name: 'Samsung Galaxy S10+', category: 'phones', subcategory: 'samsung',
    specs: '128GB • UK Used • Ceramic Black',
    price: 300000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s10-plus.jpg',
    description: 'Samsung Galaxy S10+ with quad cameras and 6.4" display.',
    features: ['6.4" Dynamic AMOLED', 'Quad Camera', '4100mAh battery'],
    variants: [{ label: '128GB UK Used', price: 300000 }]
  },
  {
    id: 7, name: 'Samsung Galaxy S20', category: 'phones', subcategory: 'samsung',
    specs: '128GB • UK Used • Cosmic Grey',
    price: 280000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-5g.jpg',
    description: 'Samsung Galaxy S20 with 64MP camera and 120Hz display.',
    features: ['6.2" 120Hz AMOLED', '64MP Camera', '5G Ready'],
    variants: [{ label: '128GB UK Used', price: 280000 }]
  },
  {
    id: 8, name: 'Samsung Galaxy S20+', category: 'phones', subcategory: 'samsung',
    specs: '128GB • UK Used • Cosmic Black',
    price: 315000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-plus-5g.jpg',
    description: 'Samsung Galaxy S20+ with quad camera and larger 6.7" screen.',
    features: ['6.7" 120Hz AMOLED', 'Quad Camera System', '5G Ready'],
    variants: [{ label: '128GB UK Used', price: 315000 }]
  },
  {
    id: 9, name: 'Samsung Galaxy S20 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '128GB / 256GB • UK Used • Cosmic Black',
    price: 365000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-ultra-5g.jpg',
    description: 'Samsung Galaxy S20 Ultra with 108MP camera and 100x Space Zoom.',
    features: ['108MP Camera', '100x Space Zoom', '6.9" 120Hz display'],
    variants: [
      { label: '128GB UK Used', price: 365000 },
      { label: '256GB UK Used', price: 390000 },
    ]
  },
  {
    id: 10, name: 'Samsung Galaxy S21', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Phantom Gray',
    price: 300000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-5g.jpg',
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
    specs: '128GB • Phantom Violet',
    price: 300000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-plus-5g.jpg',
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
    specs: '128GB • Phantom Black',
    price: 425000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g.jpg',
    description: 'Samsung Galaxy S21 Ultra with 108MP quad camera and S Pen support.',
    features: ['108MP Quad Camera', 'S Pen Compatible', '6.8" LTPO display'],
    variants: [
      { label: '128GB UK Used', price: 425000 },
      { label: '256GB UK Used', price: 475000 },
    ]
  },
  {
    id: 13, name: 'Samsung Galaxy S22', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Phantom Black',
    price: 370000, badge: 'UK Used', badgeType: 'default',
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
    specs: '128GB • Phantom White',
    price: 405000, badge: 'UK Used', badgeType: 'default',
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
    specs: '128GB • Burgundy',
    price: 580000, badge: 'Premium', badgeType: 'premium',
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
    specs: '128GB • Phantom Black',
    price: 550000, badge: 'UK Used', badgeType: 'default',
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
    specs: '256GB • Lavender',
    price: 670000, badge: 'UK Used', badgeType: 'default',
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
    specs: '256GB • Phantom Black',
    price: 880000, badge: 'Premium', badgeType: 'premium',
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
    specs: '128GB • Onyx Black',
    price: 700000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g.jpg',
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
    specs: '256GB • Marble Gray',
    price: 920000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-plus-5g.jpg',
    description: 'Samsung Galaxy S24+ with Galaxy AI and titanium-inspired design.',
    features: ['6.7" Dynamic AMOLED 2X', 'Galaxy AI features', 'Snapdragon 8 Gen 3'],
    variants: [
      { label: '256GB UK Used', price: 920000 },
      { label: '256GB Brand New', price: 960000 },
    ]
  },
  {
    id: 21, name: 'Samsung Galaxy S24 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Titanium Black',
    price: 1120000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g.jpg',
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
    specs: '256GB • Brand New • Icy Blue',
    price: 1200000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-5g.jpg',
    description: 'Brand new Samsung Galaxy S25 with Snapdragon 8 Elite and advanced AI.',
    features: ['Snapdragon 8 Elite', 'Galaxy AI 2.0', '50MP Triple Camera'],
    variants: [{ label: '256GB Brand New', price: 1200000 }]
  },
  {
    id: 23, name: 'Samsung Galaxy S25+', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Brand New • Silver Shadow',
    price: 1300000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-plus-5g.jpg',
    description: 'Brand new Samsung Galaxy S25+ with 6.7" display and long-lasting battery.',
    features: ['6.7" Dynamic AMOLED 2X', 'Snapdragon 8 Elite', 'Galaxy AI 2.0'],
    variants: [{ label: '256GB Brand New', price: 1300000 }]
  },
  {
    id: 24, name: 'Samsung Galaxy S25 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Brand New • Titanium Silver Blue',
    price: 1640000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra-5g.jpg',
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
    specs: '256GB • Aura Black',
    price: 300000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note10-5g.jpg',
    description: 'Samsung Galaxy Note 10 with S Pen and triple rear cameras.',
    features: ['S Pen', '6.3" Dynamic AMOLED', 'Triple Camera'],
    variants: [
      { label: '256GB UK Used', price: 300000 },
      { label: '256GB Brand New', price: 330000 },
    ]
  },
  {
    id: 26, name: 'Samsung Galaxy Note 10+', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Aura White',
    price: 377000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note10-plus-5g.jpg',
    description: 'Samsung Galaxy Note 10+ with quad camera and 6.8" display.',
    features: ['6.8" Dynamic AMOLED', 'Quad Camera', 'S Pen with Air Actions'],
    variants: [
      { label: '256GB UK Used', price: 377000 },
      { label: '256GB Brand New 5G', price: 400000 },
    ]
  },
  {
    id: 27, name: 'Samsung Galaxy Note 20', category: 'phones', subcategory: 'samsung',
    specs: '256GB • Mystic Gray',
    price: 370000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note20-5g.jpg',
    description: 'Samsung Galaxy Note 20 with improved S Pen and 64MP camera.',
    features: ['64MP Camera', 'S Pen', '6.7" Super AMOLED Plus'],
    variants: [
      { label: '256GB UK Used', price: 370000 },
      { label: '256GB Brand New', price: 400000 },
    ]
  },
  {
    id: 28, name: 'Samsung Galaxy Note 20 Ultra', category: 'phones', subcategory: 'samsung',
    specs: '128GB • Mystic Bronze',
    price: 500000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note20-ultra-5g.jpg',
    description: 'Samsung Galaxy Note 20 Ultra with 108MP camera and 120Hz LTPO display.',
    features: ['108MP Triple Camera', '6.9" 120Hz LTPO AMOLED', 'S Pen with 9ms latency'],
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
    specs: '256GB • Phantom Black',
    price: 650000, badge: 'UK Used', badgeType: 'default',
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
    specs: '256GB • Graygreen',
    price: 800000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold4-5g.jpg',
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
    specs: '256GB • Icy Blue',
    price: 920000, badge: 'UK Used', badgeType: 'default',
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
    specs: '256GB • Brand New • Silver Shadow',
    price: 1300000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold6-5g.jpg',
    description: 'Samsung Galaxy Z Fold6 with wider design and Galaxy AI.',
    features: ['Wider 7.6" display', 'Galaxy AI', 'Titanium frame'],
    variants: [{ label: '256GB Brand New', price: 1300000 }]
  },
  {
    id: 33, name: 'Samsung Galaxy Fold 7', category: 'phones', subcategory: 'samsung-fold',
    specs: '256GB • Brand New • Navy',
    price: 2280000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold7-5g.jpg',
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
    specs: '32GB • UK Used • Space Gray',
    price: 90000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s-1.jpg',
    description: 'iPhone 6s — reliable everyday performance.',
    features: ['Touch ID', 'A9 chip', '12MP Camera'],
    variants: [{ label: '32GB UK Used', price: 90000 }]
  },
  {
    id: 35, name: 'iPhone 7', category: 'phones', subcategory: 'iphone',
    specs: '32GB • UK Used • Black',
    price: 105000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7-1.jpg',
    description: 'iPhone 7 with water resistance and stereo speakers.',
    features: ['Water Resistant', 'Stereo Speakers', 'A10 Fusion'],
    variants: [
      { label: '32GB UK Used', price: 105000 },
      { label: '128GB UK Used', price: 125000 },
    ]
  },
  {
    id: 36, name: 'iPhone 8', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Gold',
    price: 135000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-1.jpg',
    description: 'iPhone 8 with glass back and wireless charging.',
    features: ['Wireless Charging', 'A11 Bionic', 'Glass Back'],
    variants: [{ label: '64GB UK Used', price: 135000 }]
  },
  {
    id: 37, name: 'iPhone SE (2nd Gen)', category: 'phones', subcategory: 'iphone',
    specs: 'UK Used • Product Red',
    price: 295000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020-1.jpg',
    description: 'iPhone SE 2nd Gen with A13 Bionic in a compact design.',
    features: ['A13 Bionic', 'Touch ID', 'Portrait Mode'],
    variants: [{ label: 'UK Used', price: 295000 }]
  },
  {
    id: 38, name: 'iPhone SE (3rd Gen)', category: 'phones', subcategory: 'iphone',
    specs: 'UK Used • Midnight',
    price: 210000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg',
    description: 'iPhone SE 3rd Gen with 5G and A15 Bionic at an affordable price.',
    features: ['A15 Bionic', '5G', 'Touch ID'],
    variants: [{ label: 'UK Used', price: 210000 }]
  },
  {
    id: 39, name: 'iPhone X', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Space Gray',
    price: 225000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x-1.jpg',
    description: 'iPhone X with edge-to-edge OLED display and Face ID.',
    features: ['Face ID', '5.8" OLED Super Retina', 'A11 Bionic'],
    variants: [{ label: '64GB UK Used', price: 225000 }]
  },
  {
    id: 40, name: 'iPhone XR', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Coral',
    price: 240000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-1.jpg',
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
    specs: '64GB • UK Used • Green',
    price: 295000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-1.jpg',
    description: 'iPhone 11 with dual cameras and Night Mode.',
    features: ['Dual Camera + Night Mode', 'A13 Bionic', 'All-day battery'],
    variants: [
      { label: '64GB UK Used', price: 295000 },
      { label: '128GB UK Used', price: 330000 },
    ]
  },
  {
    id: 42, name: 'iPhone 11 Pro', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Space Gray',
    price: 365000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-1.jpg',
    description: 'iPhone 11 Pro with triple camera system and Super Retina XDR.',
    features: ['Triple Camera', 'Super Retina XDR', 'A13 Bionic'],
    variants: [
      { label: '64GB UK Used', price: 365000 },
      { label: '256GB UK Used', price: 405000 },
    ]
  },
  {
    id: 43, name: 'iPhone 11 Pro Max', category: 'phones', subcategory: 'iphone',
    specs: '64GB • UK Used • Midnight Green',
    price: 425000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-1.jpg',
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
    specs: '64GB • UK Used • Blue',
    price: 330000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-1.jpg',
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
    specs: '128GB • UK Used • Pacific Blue',
    price: 465000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-1.jpg',
    description: 'iPhone 12 Pro with ProRAW, LiDAR Scanner and MagSafe.',
    features: ['LiDAR Scanner', 'ProRAW', 'MagSafe'],
    variants: [
      { label: '128GB UK Used', price: 465000 },
      { label: '256GB UK Used', price: 495000 },
    ]
  },
  {
    id: 46, name: 'iPhone 12 Pro Max', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Gold',
    price: 540000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-1.jpg',
    description: 'iPhone 12 Pro Max with 6.7" display and largest camera system on iPhone.',
    features: ['6.7" Super Retina XDR', 'Sensor-shift OIS', 'ProRAW + LiDAR'],
    variants: [
      { label: '128GB UK Used', price: 540000 },
      { label: '256GB UK Used', price: 580000 },
    ]
  },
  {
    id: 47, name: 'iPhone 13', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Midnight',
    price: 470000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-1.jpg',
    description: 'iPhone 13 with Cinematic mode and A15 Bionic chip.',
    features: ['Cinematic Mode', 'A15 Bionic', 'Super Retina XDR'],
    variants: [
      { label: '128GB UK Used', price: 470000 },
      { label: '256GB UK Used', price: 535000 },
    ]
  },
  {
    id: 48, name: 'iPhone 13 Pro', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Sierra Blue',
    price: 600000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-1.jpg',
    description: 'iPhone 13 Pro with ProMotion 120Hz display and macro photography.',
    features: ['120Hz ProMotion', 'Macro Photography', 'A15 Bionic'],
    variants: [
      { label: '128GB UK Used', price: 600000 },
      { label: '512GB UK Used', price: 660000 },
    ]
  },
  {
    id: 49, name: 'iPhone 14', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Blue',
    price: 550000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-1.jpg',
    description: 'iPhone 14 with Crash Detection, Emergency SOS via satellite.',
    features: ['Crash Detection', 'Emergency SOS Satellite', 'A15 Bionic'],
    variants: [
      { label: '128GB eSIM Only', price: 550000 },
      { label: '128GB pSIM + eSIM', price: 580000 },
      { label: '256GB pSIM + eSIM', price: 620000 },
    ]
  },
  {
    id: 50, name: 'iPhone 14 Plus', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Starlight',
    price: 645000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus-1.jpg',
    description: 'iPhone 14 Plus with huge 6.7" display and all-day battery life.',
    features: ['6.7" Super Retina XDR', 'All-day battery', 'Crash Detection'],
    variants: [
      { label: '128GB pSIM + eSIM', price: 645000 },
      { label: '256GB pSIM + eSIM', price: 705000 },
    ]
  },
  {
    id: 51, name: 'iPhone 14 Pro', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Deep Purple',
    price: 680000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-1.jpg',
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
    specs: '128GB • UK Used • Space Black',
    price: 980000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-1.jpg',
    description: 'iPhone 14 Pro Max with Dynamic Island, largest Pro display and best battery.',
    features: ['Dynamic Island', '6.7" Always-On ProMotion', '48MP Quad Camera'],
    variants: [
      { label: '128GB pSIM + eSIM', price: 980000 },
      { label: '256GB pSIM + eSIM', price: 1040000 },
    ]
  },
  {
    id: 53, name: 'iPhone 15', category: 'phones', subcategory: 'iphone',
    specs: '128GB • UK Used • Pink',
    price: 760000, badge: 'UK Used', badgeType: 'default',
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
    specs: '128GB • UK Used • Yellow',
    price: 850000, badge: 'UK Used', badgeType: 'default',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus.jpg',
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
    specs: '128GB • UK Used • Natural Titanium',
    price: 1050000, badge: 'Premium', badgeType: 'premium',
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
    specs: '256GB • UK Used • Black Titanium',
    price: 1200000, badge: 'Premium', badgeType: 'premium',
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
    specs: '128GB • UK Used • Ultramarine',
    price: 1000000, badge: 'New', badgeType: 'new',
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
    specs: '128GB • UK Used • White',
    price: 1270000, badge: 'New', badgeType: 'new',
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
    specs: '256GB • UK Used • Desert Titanium',
    price: 1520000, badge: 'Premium', badgeType: 'premium',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg',
    description: 'iPhone 16 Pro Max with A18 Pro, 4K 120fps video and titanium design.',
    features: ['A18 Pro chip', '4K 120fps Video', 'Apple Intelligence'],
    variants: [
      { label: '256GB pSIM + eSIM', price: 1520000 },
      { label: '512GB pSIM + eSIM', price: 1600000 },
    ]
  },
  {
    id: 60, name: 'iPhone 17 Pro', category: 'phones', subcategory: 'iphone',
    specs: '1TB • eSIM • Brand New',
    price: 2270000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17-pro.jpg',
    description: 'The latest iPhone 17 Pro — cutting-edge performance and camera.',
    features: ['Latest A-series chip', 'Advanced camera system', 'Apple Intelligence 2.0'],
    variants: [{ label: '1TB eSIM', price: 2270000 }]
  },

  // ─────────────────────────────────────────────
  // iPADS
  // ─────────────────────────────────────────────
  {
    id: 61, name: 'iPad 10th Gen', category: 'tablets', subcategory: 'ipad',
    specs: '64GB • Brand New • Blue • Wi-Fi',
    price: 560000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-10.9-2022.jpg',
    description: 'iPad 10th Gen with redesigned all-screen design and USB-C.',
    features: ['All-screen Design', 'USB-C', 'A14 Bionic chip'],
    variants: [{ label: '64GB Brand New Wi-Fi', price: 560000 }]
  },
  {
    id: 62, name: 'iPad (11th Gen A16)', category: 'tablets', subcategory: 'ipad',
    specs: '128GB • Brand New • Wi-Fi',
    price: 600000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-10.9-2022.jpg',
    description: 'iPad 11th Gen with A16 chip — the most powerful standard iPad.',
    features: ['A16 Bionic', 'Wi-Fi 6E', 'Apple Pencil Pro support'],
    variants: [
      { label: '128GB Blue Brand New', price: 600000 },
      { label: '128GB Pink Brand New', price: 650000 },
    ]
  },
  {
    id: 63, name: 'iPad Pro M4 13"', category: 'tablets', subcategory: 'ipad',
    specs: '2TB • Brand New • Wi-Fi',
    price: 2170000, badge: 'Premium', badgeType: 'premium',
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
    specs: 'Brand New • IP67 Waterproof',
    price: 240000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/jbl-flip-7.jpg',
    description: 'JBL Flip 7 portable Bluetooth speaker with IP67 waterproofing.',
    features: ['IP67 Waterproof', 'JBL Bass Radiator', 'PartyBoost'],
    variants: [{ label: 'Brand New', price: 240000 }]
  },
  {
    id: 65, name: 'JBL Charge 6', category: 'speakers', subcategory: 'jbl',
    specs: 'Brand New • IP67 • Power Bank',
    price: 280000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/jbl-charge-6.jpg',
    description: 'JBL Charge 6 with built-in power bank and powerful bass.',
    features: ['Built-in Power Bank', 'IP67 Waterproof', 'PartyBoost'],
    variants: [{ label: 'Brand New', price: 280000 }]
  },
  {
    id: 66, name: 'Harman Kardon Onyx Studio 9', category: 'speakers', subcategory: 'speakers',
    specs: 'Brand New • Bluetooth 5.3',
    price: 370000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/harman-kardon-onyx-studio-9.jpg',
    description: 'Harman Kardon Onyx Studio 9 — premium home audio experience.',
    features: ['360° Sound', 'Bluetooth 5.3', 'Elegant design'],
    variants: [{ label: 'Brand New', price: 370000 }]
  },

  // ─────────────────────────────────────────────
  // PLAYSTATION
  // ─────────────────────────────────────────────
  {
    id: 67, name: 'PlayStation 5 Slim', category: 'gaming', subcategory: 'playstation',
    specs: 'Brand New • Disc Version',
    price: 900000, badge: 'New', badgeType: 'new',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/sony-playstation-5-slim.jpg',
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
    specs: '1080p • Night Vision • 1TB HDD',
    price: 185000, badge: 'Popular', badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=600&h=600&fit=crop',
    description: 'Complete 4-camera HD security system with 1TB storage and night vision.',
    features: ['4x 1080p Cameras', 'Night Vision', '1TB HDD Storage'],
    variants: [{ label: '4-Camera 1080p Kit', price: 185000 }]
  },
  {
    id: 69, name: '8-Camera CCTV Kit', category: 'security', subcategory: 'cctv',
    specs: '4K • Night Vision • 2TB HDD',
    price: 350000, badge: 'Pro', badgeType: 'premium',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop',
    description: 'Professional 8-camera 4K security system with 2TB storage.',
    features: ['8x 4K Cameras', 'Night Vision', '2TB HDD'],
    variants: [{ label: '8-Camera 4K Kit', price: 350000 }]
  },
  {
    id: 70, name: 'Wireless IP Camera', category: 'security', subcategory: 'cctv',
    specs: '1080p • Wi-Fi • Motion Detection',
    price: 45000, badge: 'New', badgeType: 'default',
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
    specs: 'Laser • Wi-Fi • Duplex',
    price: 185000, badge: 'Office', badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&fit=crop',
    description: 'Reliable office laser printer with wireless and duplex printing.',
    features: ['Duplex Printing', 'Wi-Fi', 'Fast Laser Print'],
    variants: [{ label: 'HP LaserJet Pro', price: 185000 }]
  },
  {
    id: 72, name: 'Epson EcoTank', category: 'printers', subcategory: 'printers',
    specs: 'Inkjet • Refillable Tank',
    price: 145000, badge: 'Eco', badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&fit=crop',
    description: 'Epson EcoTank with refillable ink for ultra-low running costs.',
    features: ['Refillable Ink Tanks', 'High Page Yield', 'Photo Printing'],
    variants: [{ label: 'Epson EcoTank', price: 145000 }]
  },
  {
    id: 73, name: 'Canon PIXMA', category: 'printers', subcategory: 'printers',
    specs: 'All-in-One • Photo Print',
    price: 95000, badge: 'Home', badgeType: 'default',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&h=600&fit=crop',
    description: 'Canon PIXMA all-in-one photo printer for home use.',
    features: ['Photo Printing', 'Scan & Copy', 'Compact Design'],
    variants: [{ label: 'Canon PIXMA', price: 95000 }]
  },
]

export default allProducts