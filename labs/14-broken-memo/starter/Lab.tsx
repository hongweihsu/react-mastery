/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - React.memo 做 shallow prop comparison。
 * - 每次 render 建立的新 object/function reference 會比較為不同。
 * - 先量測 Child 成本，再決定穩定 reference 是否值得。
 */
import { memo, useState } from "react";
const Child=memo(function Child({user,onSave}:{user:{name:string};onSave:()=>void}){console.log("Child renders");return <button onClick={onSave}>{user.name}</button>});
export default function Lab(){const[n,setN]=useState(0);const user={name:"Dennis"};return <section><button onClick={()=>setN(x=>x+1)}>Parent {n}</button><Child user={user} onSave={()=>console.log("save",user)}/></section>}
