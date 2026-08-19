import { memo, useState } from "react";
const Child=memo(function Child({user,onSave}:{user:{name:string};onSave:()=>void}){console.log("Child renders");return <button onClick={onSave}>{user.name}</button>});
export default function Lab(){const[n,setN]=useState(0);const user={name:"Dennis"};return <section><button onClick={()=>setN(x=>x+1)}>Parent {n}</button><Child user={user} onSave={()=>console.log("save",user)}/></section>}
