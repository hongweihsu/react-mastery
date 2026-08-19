import { useState } from "react";
export default function Lab(){const [count,setCount]=useState(0);function handle(){setCount(count+1);console.log("snapshot after setter",count)}return <section><h2>Snapshot: {count}</h2><button onClick={handle}>Increment and log</button></section>}
