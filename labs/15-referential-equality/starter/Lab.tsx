/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - 內容相同的兩個 object 仍是不同 identity。
 * - Dependency comparison 使用 Object.is。
 * - 很多情況把 object 建在 Effect 內，比 useMemo 更直接。
 */
import { useEffect, useState } from "react";
export default function Lab(){const[n,setN]=useState(0);const options={room:"alpha"};useEffect(()=>console.log("effect because options reference changed"),[options]);return <section><button onClick={()=>setN(x=>x+1)}>Unrelated render {n}</button></section>}
