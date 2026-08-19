/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - Input update 是 urgent；大量結果更新可標為 transition。
 * - Transition 不取消 request，也不是 debounce。
 * - 觀察 typing responsiveness 與 pending indicator。
 */
import { useState } from "react";
const items=Array.from({length:3000},(_,i)=>"Item "+i);export default function Lab(){const[q,setQ]=useState("");const visible=items.filter(x=>x.includes(q));return <section><label>Urgent input <input value={q} onChange={e=>setQ(e.target.value)}/></label><p>{visible.length} results</p></section>}
