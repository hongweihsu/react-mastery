import { useState } from "react";
const initial=[{id:"a",name:"Ada"},{id:"g",name:"Grace"},{id:"l",name:"Lin"}];
function Row({name}:{name:string}){const[note,setNote]=useState("");return <li>{name} <input aria-label={"note for "+name} value={note} onChange={e=>setNote(e.target.value)}/></li>}
export default function Lab(){const[items,setItems]=useState(initial);return <section><button onClick={()=>setItems(xs=>xs.slice(1))}>Delete first</button><ul>{items.map(x=><Row key={x.id} name={x.name}/>)}</ul></section>}
