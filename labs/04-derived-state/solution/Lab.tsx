import { useState } from "react";
export default function Lab(){const[first,setFirst]=useState("Ada");const[last,setLast]=useState("Lovelace");const full=first+" "+last;return <section><label>First <input value={first} onChange={e=>setFirst(e.target.value)}/></label><label>Last <input value={last} onChange={e=>setLast(e.target.value)}/></label><p>{full}</p></section>}
