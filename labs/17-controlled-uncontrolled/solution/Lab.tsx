import { useState } from "react";
function Controlled({value,onChange}:{value:string;onChange:(v:string)=>void}){return <label>Controlled <input value={value} onChange={e=>onChange(e.target.value)}/></label>}
function Uncontrolled(){return <label>Uncontrolled <input defaultValue="Local"/></label>}
export default function Lab(){const[name,setName]=useState("Ada");return <section><Controlled value={name} onChange={setName}/><Uncontrolled/><p>Choose ownership based on coordination and reset/validation needs.</p></section>}
