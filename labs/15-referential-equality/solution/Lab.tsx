import { useEffect, useState } from "react";
export default function Lab(){const[n,setN]=useState(0);useEffect(()=>{const options={room:"alpha"};console.log("synchronize using",options)},[]);return <section><button onClick={()=>setN(x=>x+1)}>Unrelated render {n}</button><p>No memo needed when construction moves inside Effect.</p></section>}
