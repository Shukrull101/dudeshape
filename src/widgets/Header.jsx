import { useEffect, useState } from 'react'
import { Menu, ShoppingCart, UserRound, X } from 'lucide-react'
import { useCart } from '../features/cart/CartContext.jsx'

const links = [['Home', '#home'], ['Products', '#products'], ['About Us', '#about'], ['Contact Us', '#contact']]

export default function Header({ onOpenCart }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count } = useCart()
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <header className={`sticky top-0 z-50 h-[76px] md:h-[84px] transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-[0_5px_24px_rgba(48,37,27,0.07)] backdrop-blur-md' : 'bg-[#faf7f5]'}`}>
    <div className="mx-auto grid h-full w-[calc(100%-36px)] max-w-[1110px] grid-cols-[1fr_auto] items-center md:w-[calc(100%-80px)] md:grid-cols-[1fr_2fr_1fr]">
      <a className="w-max text-[19px] font-bold italic tracking-[-0.7px] underline decoration-[1px] underline-offset-4 md:text-xl" href="#home">Dudeshape</a>
      <nav className={`${menuOpen ? 'absolute left-0 right-0 top-[76px] flex flex-col bg-white px-[18px] pb-5 shadow-xl md:static md:flex-row md:justify-center md:gap-[38px] md:bg-transparent md:p-0 md:shadow-none' : 'hidden md:flex md:justify-center md:gap-[38px]'} z-50`} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="border-b border-[#f1ece8] py-3 text-[13px] text-[#393330] transition-colors hover:text-[#9a725e] md:border-0 md:py-2">{label}</a>)}
      </nav>
      <div className="flex items-center justify-end gap-3 md:gap-[18px]">
        <button className="hidden p-1 text-[#28211f] transition-opacity hover:opacity-60 sm:inline-flex" aria-label="Account"><UserRound size={18}/></button>
        <button className="relative inline-flex p-1 text-[#28211f] transition-opacity hover:opacity-60" aria-label={`Open cart, ${count} items`} onClick={onOpenCart}>
          <ShoppingCart size={18}/>{count > 0 && <span className="absolute -right-1.5 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#3b2d29] px-1 text-[9px] text-white">{count}</span>}
        </button>
        <button className="inline-flex p-1 text-[#28211f] md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>
    </div>
  </header>
}
