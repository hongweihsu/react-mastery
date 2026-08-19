/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - Controlled value 的 owner 必須同時提供 onChange path。
 * - Uncontrolled input 由 DOM/local state 擁有，整合較少但協調能力不同。
 * - 選擇依 validation、reset、跨元件 coordination，而非口號。
 */
import { useState } from "react";
function Controlled({value,onChange}:{value:string;onChange:(v:string)=>void}){return <label>Controlled <input value={value} onChange={e=>onChange(e.target.value)}/></label>}
function Uncontrolled(){return <label>Uncontrolled <input defaultValue="Local"/></label>}
export default function Lab(){const[name,setName]=useState("Ada");return <section><Controlled value={name} onChange={setName}/><Uncontrolled/><p>Choose ownership based on coordination and reset/validation needs.</p></section>}
