/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - Event handler 讀到的是建立該 handler 的那次 render snapshot。
 * - setter 排入下一次更新，不會修改目前 count binding。
 * - 先預測 console 與畫面各顯示什麼。
 */
import { useState } from "react";
export default function Lab(){const [count,setCount]=useState(0);function handle(){setCount(count+1);console.log("snapshot after setter",count)}return <section><h2>Snapshot: {count}</h2><button onClick={handle}>Increment and log</button></section>}
