/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - Index 描述位置，不描述 domain item identity。
 * - 刪除第一項後，後面的 component state 可能被配給不同 item。
 * - 先在某一 row 輸入，再 reorder/delete 才能看見 bug。
 */
import { useState } from "react";
const initial=[{id:"a",name:"Ada"},{id:"g",name:"Grace"},{id:"l",name:"Lin"}];
function Row({name}:{name:string}){const[note,setNote]=useState("");return <li>{name} <input aria-label={"note for "+name} value={note} onChange={e=>setNote(e.target.value)}/></li>}
export default function Lab(){const[items,setItems]=useState(initial);return <section><button onClick={()=>setItems(xs=>xs.slice(1))}>Delete first</button><ul>{items.map(x=><Row key={x.id} name={x.name}/>)}</ul></section>}
