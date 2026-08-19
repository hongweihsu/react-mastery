import { useState } from "react";
function Field({value}:{value:string}){return <label>Name <input value={value}/></label>}
export default function Lab(){const[name]=useState("Ada");return <section><Field value={name}/><p>Try typing. Who owns updates?</p></section>}
