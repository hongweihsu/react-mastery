/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - State 由 tree position/type/key 對應，不是藏在 function 內。
 * - 交換 labels 不一定交換 state identity。
 * - 畫出 before/after sibling positions 再操作。
 */
import { useState } from "react";
function Counter({name}:{name:string}){const[n,setN]=useState(0);return <button onClick={()=>setN(x=>x+1)}>{name}: {n}</button>}
export default function Lab(){const[swapped,setSwapped]=useState(false);return <section><button onClick={()=>setSwapped(s=>!s)}>Swap labels at same positions</button>{swapped?<><Counter name="B"/><Counter name="A"/></>:<><Counter name="A"/><Counter name="B"/></>}</section>}
