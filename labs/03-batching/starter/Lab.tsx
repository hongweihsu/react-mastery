import { useState } from "react";
export default function Lab(){const [count,setCount]=useState(0);return <section><h2>{count}</h2><button onClick={()=>{setCount(count+1);setCount(count+1);setCount(count+1)}}>+3?</button></section>}
