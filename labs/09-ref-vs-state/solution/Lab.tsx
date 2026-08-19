/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - Ref mutation 不會要求 React render。
 * - 畫面需要更新的資料通常是 state；不影響畫面的 metadata 可用 ref。
 * - 不要把 ref.current 當 declarative render source。
 */
import { useRef, useState } from "react";
export default function Lab(){const[clicks,setClicks]=useState(0);const lastClickedAt=useRef<number|null>(null);return <section><h2>Displayed clicks: {clicks}</h2><button onClick={()=>{lastClickedAt.current=Date.now();setClicks(c=>c+1)}}>Visible state + invisible metadata ref</button></section>}
