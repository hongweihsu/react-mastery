/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - Event handler 讀到的是建立該 handler 的那次 render snapshot。
 * - setter 排入下一次更新，不會修改目前 count binding。
 * - 先預測 console 與畫面各顯示什麼。
 */
import { useState } from "react";
export default function Lab(){const [count,setCount]=useState(0);function handle(){setCount(current=>current+1);console.log("this handler still sees",count)}return <section><h2>Snapshot: {count}</h2><button onClick={handle}>Queue next state</button><p>The next render receives the new snapshot.</p></section>}
