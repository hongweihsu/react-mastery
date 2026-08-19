import { memo, useState } from "react";
const Child = memo(function Child({ label }: { label: string }) { console.log("Memo Child executes", label); return <p>Stable DOM: {label}</p>; });
export default function Lab() { const [ticks, setTicks] = useState(0); console.log("Parent executes", ticks); return <section><h2>Measure execution and commit separately</h2><button onClick={() => setTicks(t => t + 1)}>Parent render {ticks}</button><Child label="same prop" /></section>; }
