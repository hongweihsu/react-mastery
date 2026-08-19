import { useState } from "react";
function Profile(){const[user,setUser]=useState("Ada");return <label>User <input value={user} onChange={e=>setUser(e.target.value)}/></label>}function Search(){const[q,setQ]=useState("");return <label>Search <input value={q} onChange={e=>setQ(e.target.value)}/></label>}function Theme(){const[t,setT]=useState("light");return <button onClick={()=>setT(x=>x==="light"?"dark":"light")}>{t}</button>}
export default function Lab(){return <section><h2>Colocated feature state</h2><Profile/><Search/><Theme/><p>Lift only when coordination is required.</p></section>}
