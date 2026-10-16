import { ArrowUpRight } from 'lucide-react'
import { products } from '../../../shared/products.js'
import { useCart } from '../../../features/cart/CartContext.jsx'
import { assetImages } from '../../../shared/assets/assetImages.js'
export default function ProductsSection({ onOpenCart }) {
  const { addItem } = useCart()
  return <section id="products" className="mx-auto w-[calc(100%-36px)] max-w-[1110px] pb-12 pt-5 md:w-[calc(100%-80px)] md:pb-[92px] md:pt-[26px]">
    <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end md:mb-7">
      <div><span className="mb-2 block text-[8px] font-semibold tracking-[2px] text-[#9b8d83] md:text-[9px]">OUR SELECTION</span><h2 className="mb-3 text-[31px] font-medium leading-[1.16] tracking-[-1.2px] sm:text-[34px] md:text-[38px]">Our Popular Product</h2><p className="text-[11px] leading-[1.7] text-[#77716d] md:text-xs">Thoughtfully selected essentials for your everyday beauty ritual.<br className="hidden sm:block"/> Find the products your skin will love.</p></div>
      <a className="flex w-max items-center gap-1.5 text-xs underline underline-offset-4 hover:text-[#8d6c59]" href="#products">Discover Our Products <ArrowUpRight size={16}/></a>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      {products.slice(0, 2).map(product => <article key={product.id} className="group min-w-0 border border-[#eae5e1] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(51,35,27,0.07)]">
        <div className={`relative h-[245px] overflow-hidden ${product.tone === 'sage' ? 'bg-[#e8e6dc]' : 'bg-[#f8eee8]'} sm:h-[250px] md:h-[245px]`}><img className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-[1.045]" src={assetImages[product.image]} alt={product.name}/><span className="absolute left-3.5 top-3.5 bg-white/60 px-2 py-1.5 text-[9px] uppercase tracking-[.8px] text-[#73665e]">{product.category}</span></div>
        <div className="p-4 md:p-[18px]"><div className="flex items-center justify-between gap-2"><h3 className="mb-2 text-[19px] font-medium tracking-[-.4px] md:text-xl">{product.name}</h3><span className="text-[13px] md:hidden">${product.price}</span></div><p className="mb-4 max-w-[390px] text-[11px] leading-[1.75] text-[#77716d]">{product.description}</p>
          <div className="flex items-center justify-between gap-2"><div className="flex w-full gap-2 sm:w-auto"><button className="inline-flex min-h-9 flex-1 items-center justify-center border border-[#3b2d29] bg-[#3b2d29] px-3.5 text-[10px] font-medium text-white transition-colors hover:bg-[#5b443c] sm:flex-none" onClick={() => { addItem(product); onOpenCart() }}>Buy Now</button><button className="inline-flex min-h-9 flex-1 items-center justify-center border border-[#dcd5d0] bg-white px-3.5 text-[10px] font-medium transition-colors hover:border-[#3b2d29] hover:bg-[#3b2d29] hover:text-white sm:flex-none" onClick={() => addItem(product)}>Add To Cart</button></div><span className="hidden whitespace-nowrap text-sm md:block">${product.price}</span></div>
        </div>
      </article>)}
    </div>
  </section>
}
