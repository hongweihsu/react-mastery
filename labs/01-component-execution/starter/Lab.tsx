/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - Parent state 改變後，Parent function 會再次執行。
 * - Child function 是否執行，要和 DOM 是否改變分開觀察。
 * - Console 看 execution；Elements 看 DOM；Profiler 看 commit。
 */
import { useState } from "react";
function Child({ label }: { label: string }) { console.log("Child executes", label); return <p data-testid="stable-dom">Stable DOM: {label}</p>; }
export default function Lab() { const [ticks, setTicks] = useState(0); console.log("Parent executes", ticks); return <section><h2>Execution ≠ DOM mutation</h2><button onClick={() => setTicks(t => t + 1)}>Parent render {ticks}</button><Child label="same prop" /></section>; }
