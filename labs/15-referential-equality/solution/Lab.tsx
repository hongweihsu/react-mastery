/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - 內容相同的兩個 object 仍是不同 identity。
 * - Dependency comparison 使用 Object.is。
 * - 很多情況把 object 建在 Effect 內，比 useMemo 更直接。
 */
import { useEffect, useState } from "react";
export default function Lab(){const[n,setN]=useState(0);useEffect(()=>{const options={room:"alpha"};console.log("synchronize using",options)},[]);return <section><button onClick={()=>setN(x=>x+1)}>Unrelated render {n}</button><p>No memo needed when construction moves inside Effect.</p></section>}
