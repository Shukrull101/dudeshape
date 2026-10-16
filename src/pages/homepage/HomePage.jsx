import { useState } from 'react'
import Header from '../../widgets/Header.jsx'
import Footer from '../../widgets/Footer.jsx'
import HeroSection from './sections/HeroSection.jsx'
import PartnersSection from './sections/PartnersSection.jsx'
import ProductsSection from './sections/ProductsSection.jsx'
import StatsSection from './sections/StatsSection.jsx'
import BeautySection from './sections/BeautySection.jsx'
import TestimonialsSection from './sections/TestimonialsSection.jsx'
import NewsletterSection from './sections/NewsletterSection.jsx'
import CartDrawer from '../../features/cart/CartDrawer.jsx'

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false)
  return <>
    <Header onOpenCart={() => setCartOpen(true)} />
    <main>
      <HeroSection />
      <PartnersSection />
      <ProductsSection onOpenCart={() => setCartOpen(true)} />
      <StatsSection />
      <BeautySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
    <Footer />
    <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
  </>
}
