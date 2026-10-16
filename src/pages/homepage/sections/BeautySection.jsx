import { ArrowUpRight } from "lucide-react";
import { assetImages } from "../../../shared/assets/assetImages.js";
export default function BeautySection() {
  return (
    <section
      id="about"
      className="mx-auto grid w-[calc(100%-36px)] max-w-[1110px] grid-cols-1 items-center gap-6 py-[54px] md:w-[calc(100%-80px)] md:grid-cols-[.95fr_1.05fr] md:gap-[70px] md:py-[96px]"
    >
      <div className="max-w-[440px]">
        <span className="mb-3 block text-[8px] font-semibold tracking-[2px] text-[#9b8d83] md:text-[9px]">
          BEAUTY, YOUR WAY
        </span>
        <h2 className="mb-5 text-[35px] font-medium leading-[1.16] tracking-[-1.2px] sm:text-[40px] md:text-[45px]">
          The Perfect Beauty
          <br className="hidden sm:block" /> Of You
        </h2>
        <p className="mb-3.5 text-xs leading-[1.9] text-[#77716d]">
          Beauty is not about changing who you are. It is about finding the
          little rituals that help you feel like your best self.
        </p>
        <p className="mb-3.5 text-xs leading-[1.9] text-[#77716d]">
          Explore carefully selected essentials, made to bring ease, comfort and
          a touch of everyday luxury to your routine.
        </p>
        <a
          className="mt-2.5 inline-flex min-h-[42px] w-full items-center justify-center gap-2 border border-[#3b2d29] bg-[#3b2d29] px-5 text-[11px] font-medium text-white transition-colors hover:bg-[#5b443c] sm:w-auto"
          href="#products"
        >
          Shop Now <ArrowUpRight size={14} />
        </a>
      </div>
      
      <div className="relative h-[280px] overflow-hidden bg-[#eae7e1] md:h-[340px]">
        <img
          className="h-full w-full object-cover mix-blend-multiply"
          src={assetImages.beauty}
          alt="Cosmetic lotion product"
        />
        <span className="absolute bottom-3 right-4 text-[8px] tracking-[1.6px] text-[#82766e]">
          A MOMENT JUST FOR YOU
        </span>
      </div>
    </section>
  );
}
