import { memo, useCallback, useState } from "react";
const stableUser={name:"Dennis"};const Child=memo(function Child({user,onSave}:{user:{name:string};onSave:()=>void}){console.log("Child renders");return <button onClick={onSave}>{user.name}</button>});
export default function Lab(){const[n,setN]=useState(0);const onSave=useCallback(()=>console.log("save",stableUser),[]);return <section><button onClick={()=>setN(x=>x+1)}>Parent {n}</button><Child user={stableUser} onSave={onSave}/><p>Measure whether this complexity is justified.</p></section>}
