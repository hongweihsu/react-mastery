/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - 先找每份 state 的真正 readers/writers。
 * - 只有需要 coordination 才 lift state。
 * - 拆 component 是為了 ownership/change boundary，不是追求檔案數。
 */
import { useState } from "react";
function Profile(){const[user,setUser]=useState("Ada");return <label>User <input value={user} onChange={e=>setUser(e.target.value)}/></label>}function Search(){const[q,setQ]=useState("");return <label>Search <input value={q} onChange={e=>setQ(e.target.value)}/></label>}function Theme(){const[t,setT]=useState("light");return <button onClick={()=>setT(x=>x==="light"?"dark":"light")}>{t}</button>}
export default function Lab(){return <section><h2>Colocated feature state</h2><Profile/><Search/><Theme/><p>Lift only when coordination is required.</p></section>}
