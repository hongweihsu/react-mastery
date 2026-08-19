import { useState } from "react";
export default function Lab(){const [count,setCount]=useState(0);function handle(){setCount(current=>current+1);console.log("this handler still sees",count)}return <section><h2>Snapshot: {count}</h2><button onClick={handle}>Queue next state</button><p>The next render receives the new snapshot.</p></section>}
