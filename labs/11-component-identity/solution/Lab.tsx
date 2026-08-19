import { useState } from "react";
function Counter({name}:{name:string}){const[n,setN]=useState(0);return <button onClick={()=>setN(x=>x+1)}>{name}: {n}</button>}
export default function Lab(){const[swapped,setSwapped]=useState(false);const names=swapped?["B","A"]:["A","B"];return <section><button onClick={()=>setSwapped(s=>!s)}>Swap keyed identities</button>{names.map(name=><Counter key={name} name={name}/>)}</section>}
