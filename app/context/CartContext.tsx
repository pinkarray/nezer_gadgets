'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface CartItem {
  id: number
  name: string
  specs: string
  price: number
  quantity: number
  image: string
  category?: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartCount: () => number
  getWhatsAppLink: () => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const WHATSAPP_NUMBER = '2348138074357' // Client's WhatsApp number

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('nezerr-cart')
      if (savedCart) {
        setCartItems(JSON.parse(savedCart))
      }
    } catch (error) {
      console.error('Error loading cart:', error)
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('nezerr-cart', JSON.stringify(cartItems))
      } catch (error) {
        console.error('Error saving cart:', error)
      }
    }
  }, [cartItems, isLoaded])

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id)
      if (existingItem) {
        // Update quantity if item already exists
        return prev.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        )
      }
      // Add new item
      return [...prev, { ...item, quantity: item.quantity || 1 }]
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id)
      return
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  const formatPrice = (price: number) => `₦${price.toLocaleString()}`

  const getWhatsAppLink = () => {
    if (cartItems.length === 0) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your products.`
    }

    const itemsList = cartItems.map(item => 
      `• ${item.name} (${item.specs}) x${item.quantity} - ${formatPrice(item.price * item.quantity)}`
    ).join('%0A')

    const total = getCartTotal()
    const message = `Hi, I'd like to order the following items:%0A%0A${itemsList}%0A%0A*Total: ${formatPrice(total)}*%0A%0APlease confirm availability and delivery details. Thank you!`

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      getWhatsAppLink,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
