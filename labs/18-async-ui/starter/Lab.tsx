import { useState } from "react";
const items=Array.from({length:3000},(_,i)=>"Item "+i);export default function Lab(){const[q,setQ]=useState("");const visible=items.filter(x=>x.includes(q));return <section><label>Urgent input <input value={q} onChange={e=>setQ(e.target.value)}/></label><p>{visible.length} results</p></section>}
