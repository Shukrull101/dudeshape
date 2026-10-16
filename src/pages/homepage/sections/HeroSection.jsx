import ProductSearch from '../../../features/search/ProductSearch.jsx'
import HeroSlider from '../../../features/hero-slider/HeroSlider.jsx'
export default function HeroSection() {
  return <section id="home" className="overflow-hidden bg-[#faf7f5]">
    <div className="mx-auto grid min-h-[485px] w-[calc(100%-36px)] max-w-[1110px] grid-cols-1 items-center gap-0 pt-0 md:w-[calc(100%-80px)] md:grid-cols-[.94fr_1.06fr] md:gap-8">
      <div className="relative z-10 py-10 md:py-[52px]">
        <span className="mb-3 block text-[8px] font-semibold tracking-[2px] text-[#9b8d83] md:mb-[14px] md:text-[9px]">THE EVERYDAY BEAUTY RITUAL</span>
        <h1 className="mb-4 max-w-[590px] text-[38px] font-medium leading-[1.1] tracking-[-1.4px] text-[#211d1b] sm:text-[44px] md:mb-[19px] md:text-[clamp(36px,4vw,52px)] md:leading-[1.12] md:tracking-[-1.8px]">Get Your Best Cosmetic Products Here</h1>
        <p className="mb-5 max-w-[540px] text-xs leading-[1.8] text-[#706966] md:mb-6 md:max-w-[390px] md:text-[13px]">Discover thoughtful beauty essentials to make your everyday routine feel a little more special.</p>
        <ProductSearch />
        <a className="mt-4 inline-flex min-h-[42px] w-full items-center justify-center gap-2 border border-[#3b2d29] bg-[#3b2d29] px-5 text-[11px] font-medium text-white transition-colors hover:bg-[#5b443c] sm:w-auto md:mt-6" href="#products">Shop Now <span aria-hidden="true">↗</span></a>
      </div>
      <HeroSlider />
    </div>
  </section>
}
