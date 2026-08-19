import { useEffect, useState } from "react";
export default function Lab(){const[n,setN]=useState(0);const options={room:"alpha"};useEffect(()=>console.log("effect because options reference changed"),[options]);return <section><button onClick={()=>setN(x=>x+1)}>Unrelated render {n}</button></section>}
