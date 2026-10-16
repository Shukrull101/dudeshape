import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { assetImages } from '../../shared/assets/assetImages.js'
const slides = [
 { image: assetImages.hero, alt: 'Cosmetics arranged on podiums', label: 'EVERYDAY ESSENTIALS' },
 { image: assetImages.heroTwo, alt: 'Cosmetics in a minimal studio', label: 'SOFT. SIMPLE. YOU.' },
 { image: assetImages.heroThree, alt: 'Skincare products', label: 'YOUR BEAUTY EDIT' },
]
export default function HeroSlider() {
 const [active,setActive]=useState(0)
 useEffect(()=>{const timer=window.setInterval(()=>setActive(v=>(v+1)%slides.length),6000);return()=>window.clearInterval(timer)},[])
 const change=d=>setActive(v=>(v+d+slides.length)%slides.length)
 return <div className="relative flex min-h-[260px] min-w-0 flex-col justify-end pt-0 md:min-h-full md:pt-5">
   <div key={active} className="hero-arch relative flex h-[245px] items-center justify-center overflow-hidden sm:h-[300px] md:h-[390px]"><img className="relative z-[1] h-full w-full animate-[fadeIn_.5s_ease] object-contain object-bottom mix-blend-multiply" src={slides[active].image} alt={slides[active].alt}/><span className="absolute bottom-5 left-0 z-10 text-[8px] tracking-[1.8px] text-[#a19389]">{slides[active].label}</span></div>
   <div className="flex items-center justify-between pb-[13px] pr-1 md:pb-[22px]"><div className="flex items-center gap-2.5 text-[10px] text-[#a79a91]"><span className="text-[#28211f]">0{active+1}</span><i className="h-px w-9 bg-[#d8ccc4]"/><span>0{slides.length}</span></div><div className="flex gap-1.5 md:gap-[13px]"><button className="grid h-[30px] w-[30px] place-items-center border border-transparent text-[#28211f] transition hover:border-[#d7cbc3] md:h-[34px] md:w-[34px]" aria-label="Previous slide" onClick={()=>change(-1)}><ArrowLeft size={19}/></button><button className="grid h-[30px] w-[30px] place-items-center border border-transparent text-[#28211f] transition hover:border-[#d7cbc3] md:h-[34px] md:w-[34px]" aria-label="Next slide" onClick={()=>change(1)}><ArrowRight size={19}/></button></div></div>
   <div className="absolute bottom-[21px] left-1/2 z-10 flex -translate-x-1/2 gap-[5px] md:bottom-[31px]">{slides.map((item,index)=><button key={item.label} className={`h-[5px] rounded-full transition-all ${index===active?'w-5 bg-[#3b2d29]':'w-[5px] bg-[#cfc2b9]'}`} aria-label={`Go to slide ${index+1}`} onClick={()=>setActive(index)}/>)}</div>
 </div>
}
