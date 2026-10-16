const partners = ['airbnb', 'HubSpot', 'Google', 'Microsoft', 'Walmart', 'FedEx']
export default function PartnersSection() {
  return <section className="mx-auto w-[calc(100%-36px)] max-w-[1110px] py-7 md:w-[calc(100%-80px)] md:pb-[50px] md:pt-[38px]" aria-label="Our partners">
    <p className="mb-4 text-center text-[7px] tracking-[2px] text-[#c1b8b2] md:mb-[22px] md:text-[8px]">TRUSTED BY THE BRANDS YOU KNOW</p>
    <div className="grid min-h-[105px] grid-cols-3 items-center gap-x-2 gap-y-4 border-y border-[#f0ece9] py-4 sm:min-h-[72px] md:grid-cols-6 md:gap-4 md:py-0">
      {partners.map((name, index) => <div key={name} className={`flex items-center justify-center gap-1 whitespace-nowrap font-semibold tracking-[-.7px] text-[#686361] grayscale transition duration-300 hover:grayscale-0 ${index === 5 ? 'text-base md:text-[19px]' : index === 4 || index === 3 ? 'text-[13px] md:text-sm' : 'text-[13px] md:text-[15px]'}`}>
        {name === 'Microsoft' && <span className="grid grid-cols-2 gap-[2px]"><i className="h-[5px] w-[5px] bg-[#777] md:h-[7px] md:w-[7px]"/><i className="h-[5px] w-[5px] bg-[#777] md:h-[7px] md:w-[7px]"/><i className="h-[5px] w-[5px] bg-[#777] md:h-[7px] md:w-[7px]"/><i className="h-[5px] w-[5px] bg-[#777] md:h-[7px] md:w-[7px]"/></span>}
        {name}
      </div>)}
    </div>
  </section>
}
