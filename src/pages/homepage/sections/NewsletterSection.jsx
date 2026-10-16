import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { isValidEmail } from '../../../features/newsletter/validation.js'
export default function NewsletterSection() {
 const [email,setEmail]=useState(''); const [message,setMessage]=useState(''); const [success,setSuccess]=useState(false)
 const submit=e=>{e.preventDefault();if(!isValidEmail(email)){setSuccess(false);setMessage('Введите корректный адрес электронной почты.');return}setSuccess(true);setMessage('Спасибо за подписку! Вы добавлены в список.');setEmail('')}
 return <section id="contact" className="bg-[#f7f1ed] py-[38px] md:py-[51px]"><div className="mx-auto flex w-[calc(100%-36px)] max-w-[1110px] flex-col gap-6 md:w-[calc(100%-80px)] md:flex-row md:items-center md:justify-between md:gap-[50px]">
   <div><span className="mb-2.5 block text-[8px] font-semibold tracking-[2px] text-[#9b8d83] md:text-[9px]">A NOTE FROM US</span><h2 className="mb-2 text-[30px] font-medium leading-[1.16] tracking-[-1.2px] md:text-[31px]">Subscribe to Get Our<br className="hidden sm:block"/> Latest News</h2><p className="text-[11px] text-[#77716d]">New arrivals, beauty notes and a little something special.</p></div>
   <form className="w-full md:w-[48%] md:max-w-[460px] md:shrink-0" onSubmit={submit} noValidate><div className="flex flex-col gap-2 md:flex-row md:gap-1 md:border md:border-[#ebe4df] md:bg-white md:p-[5px]"><input className="h-[47px] min-w-0 flex-1 border border-[#ebe4df] bg-white px-[13px] text-[11px] outline-none focus:border-[#bca99c] md:h-auto md:border-0" type="email" value={email} onChange={e=>{setEmail(e.target.value);setMessage('')}} placeholder="Enter email" aria-label="Email address"/><button className="inline-flex min-h-[47px] items-center justify-center gap-2 border border-[#3b2d29] bg-[#3b2d29] px-5 text-[11px] font-medium text-white transition-colors hover:bg-[#5b443c] md:min-h-[43px]" type="submit">Subscribe <ArrowUpRight size={14}/></button></div>{message&&<p className={`mt-2.5 flex items-center gap-1 text-[11px] ${success?'text-[#497b56]':'text-[#a34b3e]'}`} role="status">{success&&<Check size={14}/>} {message}</p>}</form>
 </div></section>
}
