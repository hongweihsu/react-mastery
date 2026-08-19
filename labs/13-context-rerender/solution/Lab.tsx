/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - Provider value 是新的 object 時，consumers 會接收新的 context value。
 * - Context 解決傳遞，不自動縮小 update surface。
 * - 用 Profiler 比較拆分前後，而不是只看 console 次數。
 */
import { createContext, useContext, useState } from "react";
const ThemeContext=createContext("light");const CountContext=createContext<{count:number;inc:()=>void}|null>(null);function Theme(){const theme=useContext(ThemeContext);console.log("Theme consumer");return <p>Theme {theme}</p>}function Counter(){const v=useContext(CountContext)!;return <button onClick={v.inc}>Count {v.count}</button>}
export default function Lab(){const[count,setCount]=useState(0);return <ThemeContext value="light"><CountContext value={{count,inc:()=>setCount(c=>c+1)}}><Theme/><Counter/></CountContext></ThemeContext>}
