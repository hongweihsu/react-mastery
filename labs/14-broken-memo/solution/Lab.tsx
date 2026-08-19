/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - React.memo 做 shallow prop comparison。
 * - 每次 render 建立的新 object/function reference 會比較為不同。
 * - 先量測 Child 成本，再決定穩定 reference 是否值得。
 */
import { memo, useCallback, useState } from "react";
const stableUser={name:"Dennis"};const Child=memo(function Child({user,onSave}:{user:{name:string};onSave:()=>void}){console.log("Child renders");return <button onClick={onSave}>{user.name}</button>});
export default function Lab(){const[n,setN]=useState(0);const onSave=useCallback(()=>console.log("save",stableUser),[]);return <section><button onClick={()=>setN(x=>x+1)}>Parent {n}</button><Child user={stableUser} onSave={onSave}/><p>Measure whether this complexity is justified.</p></section>}
