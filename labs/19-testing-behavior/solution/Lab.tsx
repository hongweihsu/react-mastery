import { useState } from "react";
export default function Lab(){const[name,setName]=useState("");const[saved,setSaved]=useState(false);return <form onSubmit={e=>{e.preventDefault();setSaved(true)}}><label>Name <input value={name} onChange={e=>setName(e.target.value)}/></label><button type="submit">Save profile</button><p role="status">{saved?"Saved "+name:"Not saved"}</p></form>}
