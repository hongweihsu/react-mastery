import { useEffect, useState } from "react";
function useEverything(url:string,enabled:boolean,interval:number){const[data,setData]=useState("");useEffect(()=>{if(!enabled)return;const id=setInterval(()=>setData(url+Date.now()),interval);return()=>clearInterval(id)},[url,enabled,interval]);return data}
export default function Lab(){return <section><h2>Poor generic hook</h2><p>{useEverything("status:",true,1000)}</p><p>Which concerns are coupled?</p></section>}
