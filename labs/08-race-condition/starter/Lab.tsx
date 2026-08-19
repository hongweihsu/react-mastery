/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - Request 完成順序不必等於開始順序。
 * - A 的舊 response 可在 B 後完成並覆蓋畫面。
 * - 用 timeline 畫 request start、response、cleanup 與 state update。
 */
import { useEffect, useState } from "react";
const load=(id:string)=>new Promise<string>(r=>setTimeout(()=>r("Profile "+id),id==="A"?1200:300));
export default function Lab(){const[id,setId]=useState("A");const[data,setData]=useState("Loading");useEffect(()=>{load(id).then(setData)},[id]);return <section><button onClick={()=>setId("A")}>A slow</button><button onClick={()=>setId("B")}>B fast</button><p>Selected {id}: {data}</p></section>}
