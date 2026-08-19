/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - Custom Hook 抽取 behaviour，不共享同一份 state。
 * - 先辨識 hook 的單一責任與 caller 需要的 API。
 * - Options 太多常表示 abstraction 同時做了太多事。
 */
import { useEffect, useState } from "react";
function useEverything(url:string,enabled:boolean,interval:number){const[data,setData]=useState("");useEffect(()=>{if(!enabled)return;const id=setInterval(()=>setData(url+Date.now()),interval);return()=>clearInterval(id)},[url,enabled,interval]);return data}
export default function Lab(){return <section><h2>Poor generic hook</h2><p>{useEverything("status:",true,1000)}</p><p>Which concerns are coupled?</p></section>}
