import { useEffect, useState } from "react";
export default function Lab(){const[count,setCount]=useState(0);useEffect(()=>{const id=setInterval(()=>console.log("captured count",count),1000);return()=>clearInterval(id)},[]);return <section><h2>{count}</h2><button onClick={()=>setCount(c=>c+1)}>Increment</button><p>Observe Console for 4 seconds.</p></section>}
