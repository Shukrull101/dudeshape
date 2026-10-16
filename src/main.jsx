import React from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/homepage/HomePage.jsx'
import { CartProvider } from './features/cart/CartContext.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <HomePage />
    </CartProvider>
  </React.StrictMode>
)