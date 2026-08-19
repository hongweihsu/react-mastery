/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - Empty dependency array 讓 interval callback 保留初次 render 的 count。
 * - 這是 JavaScript closure 加上 React snapshots，不是 timer 自己快取。
 * - 先指出 captured value，再比較不同同步策略的成本。
 */
import { useEffect, useState } from "react";
export default function Lab(){const[count,setCount]=useState(0);useEffect(()=>{const id=setInterval(()=>console.log("captured count",count),1000);return()=>clearInterval(id)},[]);return <section><h2>{count}</h2><button onClick={()=>setCount(c=>c+1)}>Increment</button><p>Observe Console for 4 seconds.</p></section>}
