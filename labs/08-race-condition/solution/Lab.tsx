import { useEffect, useState } from "react";
const load=(id:string)=>new Promise<string>(r=>setTimeout(()=>r("Profile "+id),id==="A"?1200:300));
export default function Lab(){const[id,setId]=useState("A");const[data,setData]=useState("Loading");useEffect(()=>{let ignore=false;load(id).then(value=>{if(!ignore)setData(value)});return()=>{ignore=true}},[id]);return <section><button onClick={()=>setId("A")}>A slow</button><button onClick={()=>setId("B")}>B fast</button><p>Selected {id}: {data}</p><p>Real fetch should prefer AbortController when cancellation is supported.</p></section>}
