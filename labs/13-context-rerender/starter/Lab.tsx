import { createContext, useContext, useState } from "react";
const AppContext=createContext({theme:"light",count:0,inc:()=>{}});function Theme(){const v=useContext(AppContext);console.log("Theme consumer",v.count);return <p>Theme {v.theme}</p>}function Counter(){const v=useContext(AppContext);return <button onClick={v.inc}>Count {v.count}</button>}
export default function Lab(){const[count,setCount]=useState(0);return <AppContext value={{theme:"light",count,inc:()=>setCount(c=>c+1)}}><Theme/><Counter/></AppContext>}
