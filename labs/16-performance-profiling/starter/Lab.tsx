/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - 慢不是由 re-render 次數單獨決定。
 * - 先錄 Profiler baseline，再找實際 expensive work。
 * - Optimization 後必須用同一 interaction 再測一次。
 */
import { useState } from "react";
function SlowList({query}:{query:string}){console.time("filter");let result=0;for(let i=0;i<2_000_000;i++)if(String(i).includes(query))result++;console.timeEnd("filter");return <p>{result} matches</p>}
export default function Lab(){const[q,setQ]=useState("1");const[theme,setTheme]=useState(false);return <section className={theme?"dark":""}><label>Query <input value={q} onChange={e=>setQ(e.target.value)}/></label><button onClick={()=>setTheme(t=>!t)}>Theme</button><SlowList query={q}/></section>}
