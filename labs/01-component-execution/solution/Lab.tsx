/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - Parent state 改變後，Parent function 會再次執行。
 * - Child function 是否執行，要和 DOM 是否改變分開觀察。
 * - Console 看 execution；Elements 看 DOM；Profiler 看 commit。
 */
import { memo, useState } from "react";
const Child = memo(function Child({ label }: { label: string }) { console.log("Memo Child executes", label); return <p>Stable DOM: {label}</p>; });
export default function Lab() { const [ticks, setTicks] = useState(0); console.log("Parent executes", ticks); return <section><h2>Measure execution and commit separately</h2><button onClick={() => setTicks(t => t + 1)}>Parent render {ticks}</button><Child label="same prop" /></section>; }
