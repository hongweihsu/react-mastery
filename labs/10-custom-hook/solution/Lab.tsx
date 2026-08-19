/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - Custom Hook 抽取 behaviour，不共享同一份 state。
 * - 先辨識 hook 的單一責任與 caller 需要的 API。
 * - Options 太多常表示 abstraction 同時做了太多事。
 */
import { useEffect, useState } from "react";
function useClock(periodMs=1000){const[now,setNow]=useState(()=>new Date());useEffect(()=>{const id=setInterval(()=>setNow(new Date()),periodMs);return()=>clearInterval(id)},[periodMs]);return now}
export default function Lab(){const now=useClock();return <section><h2>Domain-focused Hook</h2><time>{now.toLocaleTimeString()}</time></section>}
