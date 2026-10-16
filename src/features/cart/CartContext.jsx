import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const addItem = product => setItems(current => {
    const existing = current.find(item => item.id === product.id)
    return existing
      ? current.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      : [...current, { ...product, qty: 1 }]
  })
  const changeQuantity = (id, delta) => setItems(current => current
    .map(item => item.id === id ? { ...item, qty: item.qty + delta } : item)
    .filter(item => item.qty > 0))
  const removeItem = id => setItems(current => current.filter(item => item.id !== id))
  const clearCart = () => setItems([])
  const count = items.reduce((total, item) => total + item.qty, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const value = useMemo(() => ({ items, count, total, addItem, changeQuantity, removeItem, clearCart }), [items, count, total])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart должен использоваться внутри CartProvider')
  return context
}