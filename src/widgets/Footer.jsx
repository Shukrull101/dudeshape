import { ArrowUpRight, Facebook, Instagram, Twitter } from 'lucide-react'
import { assetImages } from '../shared/assets/assetImages.js'

const quickLinks = [
  ['Home', '#home'],
  ['Products', '#products'],
  ['About Us', '#about'],
  ['Testimonials', '#reviews'],
]

function SocialIcon({ src, fallback: FallbackIcon, label }) {
  return (
    <a
      className="grid h-[30px] w-[30px] place-items-center rounded-full border border-[#e8e2dd] transition-colors hover:bg-[#3b2d29] hover:text-white"
      href="#contact"
      aria-label={label}
    >
      {src ? (
        <img className="h-4 w-4 object-contain" src={src} alt="" />
      ) : (
        <FallbackIcon size={16} />
      )}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid w-[calc(100%-36px)] max-w-[1110px] grid-cols-2 gap-x-5 gap-y-8 py-10 md:w-[calc(100%-80px)] md:grid-cols-[1.4fr_.8fr_1fr] md:gap-[70px] md:py-[60px]">
        <div className="col-span-2 md:col-span-1">
          <a className="w-max text-[21px] font-bold italic tracking-[-0.7px] underline decoration-[1px] underline-offset-4" href="#home">
            Dudeshape
          </a>
          <p className="my-4 max-w-[260px] text-xs leading-[1.8] text-[#77716d] md:my-5">
            Beauty essentials for the little rituals that make every day feel special.
          </p>
          <div className="flex gap-2">
            <SocialIcon src={assetImages.facebook} fallback={Facebook} label="Facebook" />
            <SocialIcon src={assetImages.twitter} fallback={Twitter} label="Twitter" />
            <SocialIcon src={assetImages.instagram} fallback={Instagram} label="Instagram" />
          </div>
        </div>

        <div>
          <h3 className="mb-4 mt-1 text-sm font-semibold md:mb-5">Quick Link</h3>
          <div className="flex flex-col items-start gap-3">
            {quickLinks.map(([label, href]) => (
              <a key={label} className="text-[11px] text-[#6f6762] underline-offset-4 hover:underline" href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="mb-0 mt-1 text-sm font-semibold md:mb-2">Contact Us</h3>
          <a className="text-[11px] text-[#6f6762] hover:underline" href="mailto:hello@dudeshape.com">hello@dudeshape.com</a>
          <a className="text-[11px] text-[#6f6762] hover:underline" href="tel:+123456789">+123456789</a>
          <p className="mt-0.5 text-[11px] text-[#77716d]">Follow along for everyday inspiration.</p>
          <a className="inline-flex items-center gap-1 text-[11px] underline underline-offset-4" href="#contact">
            Get in touch <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="mx-auto flex w-[calc(100%-36px)] max-w-[1110px] flex-col items-start gap-3 border-t border-[#eee9e5] py-4 text-[9px] text-[#a29a94] sm:flex-row sm:items-center sm:justify-between md:w-[calc(100%-80px)] md:text-[10px]">
        <span>© {new Date().getFullYear()} Dudeshape. All rights reserved.</span>
        <div className="flex gap-4 md:gap-[22px]">
          <a className="hover:text-[#28211f]" href="#contact">Privacy Policy</a>
          <a className="hover:text-[#28211f]" href="#contact">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  )
}
