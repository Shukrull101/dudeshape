import { useEffect, useRef, useState } from 'react'
const stats = [{ value: '100%', label: 'Organic Products' }, { value: '2M+', label: 'Yearly Sales' }, { value: '1.9M+', label: 'Happy Customer' }]
export default function StatsSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } }, { threshold: 0.3 })
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  return <section id="achievements" ref={sectionRef} className="bg-[#f7f1ed] py-[30px] md:py-[47px]"><div className="mx-auto grid w-[calc(100%-36px)] max-w-[900px] grid-cols-3 gap-1 md:w-[calc(100%-80px)]">
    {stats.map(stat => <div key={stat.label} className="flex flex-col items-center text-center"><span className="text-[25px] font-medium leading-tight tracking-[-1px] md:text-4xl">{visible ? stat.value : '—'}</span><i className="my-2.5 h-px w-[25px] bg-[#bca99c] md:my-[13px] md:w-[38px]"/><p className="text-[9px] text-[#776c65] md:text-xs">{stat.label}</p></div>)}
  </div></section>
}
