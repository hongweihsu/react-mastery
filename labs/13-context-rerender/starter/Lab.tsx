/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - Provider value 是新的 object 時，consumers 會接收新的 context value。
 * - Context 解決傳遞，不自動縮小 update surface。
 * - 用 Profiler 比較拆分前後，而不是只看 console 次數。
 */
import { createContext, useContext, useState } from "react";
const AppContext=createContext({theme:"light",count:0,inc:()=>{}});function Theme(){const v=useContext(AppContext);console.log("Theme consumer",v.count);return <p>Theme {v.theme}</p>}function Counter(){const v=useContext(AppContext);return <button onClick={v.inc}>Count {v.count}</button>}
export default function Lab(){const[count,setCount]=useState(0);return <AppContext value={{theme:"light",count,inc:()=>setCount(c=>c+1)}}><Theme/><Counter/></AppContext>}
