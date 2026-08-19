import { useEffect, useState } from "react";
const load=(id:string)=>new Promise<string>(r=>setTimeout(()=>r("Profile "+id),id==="A"?1200:300));
export default function Lab(){const[id,setId]=useState("A");const[data,setData]=useState("Loading");useEffect(()=>{load(id).then(setData)},[id]);return <section><button onClick={()=>setId("A")}>A slow</button><button onClick={()=>setId("B")}>B fast</button><p>Selected {id}: {data}</p></section>}
