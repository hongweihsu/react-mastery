/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - Input update 是 urgent；大量結果更新可標為 transition。
 * - Transition 不取消 request，也不是 debounce。
 * - 觀察 typing responsiveness 與 pending indicator。
 */
import { useState, useTransition } from "react";
const items=Array.from({length:3000},(_,i)=>"Item "+i);export default function Lab(){const[input,setInput]=useState("");const[q,setQ]=useState("");const[pending,startTransition]=useTransition();const visible=items.filter(x=>x.includes(q));return <section><label>Urgent input <input value={input} onChange={e=>{setInput(e.target.value);startTransition(()=>setQ(e.target.value))}}/></label><p aria-live="polite">{pending?"Updating…":visible.length+" results"}</p><p>Transition prioritizes responsiveness; it is not request cancellation.</p></section>}
