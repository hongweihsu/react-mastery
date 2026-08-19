/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - Request 完成順序不必等於開始順序。
 * - A 的舊 response 可在 B 後完成並覆蓋畫面。
 * - 用 timeline 畫 request start、response、cleanup 與 state update。
 */
import { useEffect, useState } from "react";
const load=(id:string)=>new Promise<string>(r=>setTimeout(()=>r("Profile "+id),id==="A"?1200:300));
export default function Lab(){const[id,setId]=useState("A");const[data,setData]=useState("Loading");useEffect(()=>{let ignore=false;load(id).then(value=>{if(!ignore)setData(value)});return()=>{ignore=true}},[id]);return <section><button onClick={()=>setId("A")}>A slow</button><button onClick={()=>setId("B")}>B fast</button><p>Selected {id}: {data}</p><p>Real fetch should prefer AbortController when cancellation is supported.</p></section>}
