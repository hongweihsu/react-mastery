/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - 三個 value updates 都使用同一份 count snapshot。
 * - Updater functions 會依序接收 queue 中的前一個結果。
 * - 把每次 update 寫成 queue table，不要只背 1 和 3。
 */
import { useState } from "react";
export default function Lab(){const [count,setCount]=useState(0);return <section><h2>{count}</h2><button onClick={()=>{setCount(count+1);setCount(count+1);setCount(count+1)}}>+3?</button></section>}
