/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - 測試 user 能找到的 role/name 與 visible result。
 * - data-testid/class name 容易綁住 implementation。
 * - 用 userEvent 模擬 interaction，async result 用 findBy/waitFor。
 */
import { useState } from "react";
export default function Lab(){const[name,setName]=useState("");const[saved,setSaved]=useState(false);return <form onSubmit={e=>{e.preventDefault();setSaved(true)}}><label>Name <input value={name} onChange={e=>setName(e.target.value)}/></label><button type="submit">Save profile</button><p role="status">{saved?"Saved "+name:"Not saved"}</p></form>}
