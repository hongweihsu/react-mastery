/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - Empty dependency array 讓 interval callback 保留初次 render 的 count。
 * - 這是 JavaScript closure 加上 React snapshots，不是 timer 自己快取。
 * - 先指出 captured value，再比較不同同步策略的成本。
 */
import { useEffect, useState } from "react";
export default function Lab(){const[count,setCount]=useState(0);useEffect(()=>{const id=setInterval(()=>console.log("current synchronized count",count),1000);return()=>clearInterval(id)},[count]);return <section><h2>{count}</h2><button onClick={()=>setCount(c=>c+1)}>Increment</button><p>The synchronization now follows count; discuss timer reset cost and ref/useEffectEvent alternatives.</p></section>}
