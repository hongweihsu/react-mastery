import { useRef, useState } from "react";
export default function Lab(){const[clicks,setClicks]=useState(0);const lastClickedAt=useRef<number|null>(null);return <section><h2>Displayed clicks: {clicks}</h2><button onClick={()=>{lastClickedAt.current=Date.now();setClicks(c=>c+1)}}>Visible state + invisible metadata ref</button></section>}
