import { useEffect, useState } from "react";
function useClock(periodMs=1000){const[now,setNow]=useState(()=>new Date());useEffect(()=>{const id=setInterval(()=>setNow(new Date()),periodMs);return()=>clearInterval(id)},[periodMs]);return now}
export default function Lab(){const now=useClock();return <section><h2>Domain-focused Hook</h2><time>{now.toLocaleTimeString()}</time></section>}
