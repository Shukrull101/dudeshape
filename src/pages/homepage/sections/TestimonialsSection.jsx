import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { assetImages } from "../../../shared/assets/assetImages.js";
const reviews = [
  {
    title: "Amazing Cosmetic",
    name: "Rusmin Islam",
    role: "Designer",
    quote:
      "I love how simple and thoughtful the products feel. The quality is lovely, and the whole experience makes my daily routine feel special.",
  },
  {
    title: "A New Daily Favourite",
    name: "Maya Roberts",
    role: "Content Creator",
    quote:
      "Beautiful packaging, lovely textures and a really easy shopping experience. I have already found a few new favourites.",
  },
];
export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const review = reviews[active];
  const change = (d) =>
    setActive((i) => (i + d + reviews.length) % reviews.length);
  return (
    <section
      id="reviews"
      className="mx-auto grid w-[calc(100%-36px)] max-w-[1110px] grid-cols-1 items-center gap-6 pb-[55px] pt-2 md:w-[calc(100%-80px)] md:grid-cols-[1fr_.94fr] md:gap-[72px] md:pb-[100px]"
    >
      <div className="relative h-[280px] overflow-hidden bg-[#e8e9e8] md:h-[320px]">
        <img
          className="h-full w-full object-cover object-[center_35%]"
          src={assetImages.customer}
          alt="Cosmetic products from the Dudeshape collection"
        />
        <span className="absolute bottom-3 left-4 text-[8px] tracking-[1.6px] text-white [text-shadow:0_1px_6px_#0005]">
          A CUSTOMER FAVOURITE
        </span>
      </div>
      <div key={active} className="max-w-[440px] py-2.5">
        <span className="mb-2.5 block text-[8px] font-semibold tracking-[2px] text-[#9b8d83] md:text-[9px]">
          KIND WORDS
        </span>
        <h2 className="mb-2.5 text-2xl font-medium tracking-[-1px] md:text-[25px]">
          {review.title}
        </h2>
        <div
          className="mb-4 flex items-center gap-1 text-[15px] tracking-wide text-[#d89c3e]"
          aria-label="4.5 out of 5 stars"
        >
          ★ ★ ★ ★ <span className="opacity-60">★</span>
          <small className="ml-2 text-[10px] tracking-normal text-[#9c928b]">
            4.5/5
          </small>
        </div>
        <blockquote className="mb-[22px] max-w-[400px] text-xs leading-[1.9] text-[#766f6b]">
          “{review.quote}”
        </blockquote>
        <div className="grid gap-1">
          <strong className="text-[13px] font-semibold">{review.name}</strong>
          <span className="text-[10px] text-[#a39a94]">{review.role}</span>
        </div>
        <div className="mt-[22px] flex items-center gap-2">
          <button
            className="grid h-[31px] w-[31px] place-items-center rounded-full border border-[#e4ded9] bg-white text-[#9c918a] transition hover:bg-[#f8f4f0]"
            aria-label="Previous review"
            onClick={() => change(-1)}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            className="grid h-[31px] w-[31px] place-items-center rounded-full border border-[#9bb6a0] bg-white text-[#537e5d] transition hover:bg-[#eff5ef]"
            aria-label="Next review"
            onClick={() => change(1)}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
