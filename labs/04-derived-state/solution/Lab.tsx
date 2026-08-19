/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - firstName 與 lastName 已是 sources of truth。
 * - fullName 若另存 state，就需要同步並可能短暫不一致。
 * - 先問能否在 render 直接計算，再問是否需要 Effect。
 */
import { useState } from "react";
export default function Lab(){const[first,setFirst]=useState("Ada");const[last,setLast]=useState("Lovelace");const full=first+" "+last;return <section><label>First <input value={first} onChange={e=>setFirst(e.target.value)}/></label><label>Last <input value={last} onChange={e=>setLast(e.target.value)}/></label><p>{full}</p></section>}
