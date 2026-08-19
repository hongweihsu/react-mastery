import { useState } from "react";
function Counter({name}:{name:string}){const[n,setN]=useState(0);return <button onClick={()=>setN(x=>x+1)}>{name}: {n}</button>}
export default function Lab(){const[swapped,setSwapped]=useState(false);return <section><button onClick={()=>setSwapped(s=>!s)}>Swap labels at same positions</button>{swapped?<><Counter name="B"/><Counter name="A"/></>:<><Counter name="A"/><Counter name="B"/></>}</section>}
