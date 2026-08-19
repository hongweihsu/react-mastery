/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - Controlled value 的 owner 必須同時提供 onChange path。
 * - Uncontrolled input 由 DOM/local state 擁有，整合較少但協調能力不同。
 * - 選擇依 validation、reset、跨元件 coordination，而非口號。
 */
import { useState } from "react";
function Field({value}:{value:string}){return <label>Name <input value={value}/></label>}
export default function Lab(){const[name]=useState("Ada");return <section><Field value={name}/><p>Try typing. Who owns updates?</p></section>}
