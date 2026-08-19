import { useState } from "react";
function Child({ label }: { label: string }) { console.log("Child executes", label); return <p data-testid="stable-dom">Stable DOM: {label}</p>; }
export default function Lab() { const [ticks, setTicks] = useState(0); console.log("Parent executes", ticks); return <section><h2>Execution ≠ DOM mutation</h2><button onClick={() => setTicks(t => t + 1)}>Parent render {ticks}</button><Child label="same prop" /></section>; }
