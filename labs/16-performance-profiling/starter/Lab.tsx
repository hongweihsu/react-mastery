import { useState } from "react";
function SlowList({query}:{query:string}){console.time("filter");let result=0;for(let i=0;i<2_000_000;i++)if(String(i).includes(query))result++;console.timeEnd("filter");return <p>{result} matches</p>}
export default function Lab(){const[q,setQ]=useState("1");const[theme,setTheme]=useState(false);return <section className={theme?"dark":""}><label>Query <input value={q} onChange={e=>setQ(e.target.value)}/></label><button onClick={()=>setTheme(t=>!t)}>Theme</button><SlowList query={q}/></section>}
