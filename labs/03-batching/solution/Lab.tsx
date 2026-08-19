/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - 三個 value updates 都使用同一份 count snapshot。
 * - Updater functions 會依序接收 queue 中的前一個結果。
 * - 把每次 update 寫成 queue table，不要只背 1 和 3。
 */
import { useState } from "react";
export default function Lab(){const [count,setCount]=useState(0);return <section><h2>{count}</h2><button onClick={()=>{setCount(c=>c+1);setCount(c=>c+1);setCount(c=>c+1)}}>+3 via queue</button></section>}
