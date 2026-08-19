import { useState } from "react";
export default function Lab(){const [count,setCount]=useState(0);return <section><h2>{count}</h2><button onClick={()=>{setCount(c=>c+1);setCount(c=>c+1);setCount(c=>c+1)}}>+3 via queue</button></section>}
