/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - 慢不是由 re-render 次數單獨決定。
 * - 先錄 Profiler baseline，再找實際 expensive work。
 * - Optimization 後必須用同一 interaction 再測一次。
 */
import { useMemo, useState } from "react";
function SlowList({query}:{query:string}){const result=useMemo(()=>{console.time("filter");let total=0;for(let i=0;i<2_000_000;i++)if(String(i).includes(query))total++;console.timeEnd("filter");return total},[query]);return <p>{result} matches</p>}
export default function Lab(){const[q,setQ]=useState("1");const[theme,setTheme]=useState(false);return <section className={theme?"dark":""}><label>Query <input value={q} onChange={e=>setQ(e.target.value)}/></label><button onClick={()=>setTheme(t=>!t)}>Theme</button><SlowList query={q}/><p>Compare Profiler before/after; do not infer from code alone.</p></section>}
