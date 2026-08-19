/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - State 由 tree position/type/key 對應，不是藏在 function 內。
 * - 交換 labels 不一定交換 state identity。
 * - 畫出 before/after sibling positions 再操作。
 */
import { useState } from "react";
function Counter({name}:{name:string}){const[n,setN]=useState(0);return <button onClick={()=>setN(x=>x+1)}>{name}: {n}</button>}
export default function Lab(){const[swapped,setSwapped]=useState(false);const names=swapped?["B","A"]:["A","B"];return <section><button onClick={()=>setSwapped(s=>!s)}>Swap keyed identities</button>{names.map(name=><Counter key={name} name={name}/>)}</section>}
