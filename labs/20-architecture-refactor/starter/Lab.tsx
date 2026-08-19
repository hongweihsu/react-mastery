/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - 先找每份 state 的真正 readers/writers。
 * - 只有需要 coordination 才 lift state。
 * - 拆 component 是為了 ownership/change boundary，不是追求檔案數。
 */
import { useState } from "react";
export default function Lab(){const[user,setUser]=useState("Ada");const[query,setQuery]=useState("");const[theme,setTheme]=useState("light");return <section><h2>Giant dashboard</h2><input aria-label="user" value={user} onChange={e=>setUser(e.target.value)}/><input aria-label="search" value={query} onChange={e=>setQuery(e.target.value)}/><button onClick={()=>setTheme(t=>t==="light"?"dark":"light")}>{theme}</button><p>{user} searches {query}</p></section>}
