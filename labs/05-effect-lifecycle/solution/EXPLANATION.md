# Solution explanation｜05-effect-lifecycle

> 這是 reference explanation。正常 tutoring 中，只有在學習者明確要求 solution 時才閱讀或揭露。

## Root-cause checklist

- 先發生 render/commit，之後 Effect setup。
- dependency 改變時先 cleanup 舊同步，再 setup 新同步。
- Strict Mode development 會 probe cleanup 是否完整。

## 先比較行為，不要先複製 code

1. Starter 的 observable bug/behaviour 是什麼？
2. 哪一個 JavaScript 或 React mechanism 造成它？
3. Solution 改變的是 state ownership、Effect lifecycle、tree identity、reference identity，還是 update priority？
4. 哪些部分沒有改？這能幫你確認真正 cause。

## Annotated source map

```tsx
01 │ /* <!-- junior-detail-v1 --> */
02 │ /*
03 │  * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
04 │  * Lab focus:
05 │  * - 先發生 render/commit，之後 Effect setup。
06 │  * - dependency 改變時先 cleanup 舊同步，再 setup 新同步。
07 │  * - Strict Mode development 會 probe cleanup 是否完整。
08 │  */
09 │ import { useEffect, useState } from "react";
10 │ function useRoomConnection(room:string){useEffect(()=>{console.log("setup",room);const id=setInterval(()=>console.log("ping",room),2000);return()=>{clearInterval(id);console.log("cleanup",room)}},[room])}
11 │ export default function Lab(){const[room,setRoom]=useState("alpha");useRoomConnection(room);return <section><h2>Room {room}</h2><button onClick={()=>setRoom(r=>r==="alpha"?"beta":"alpha")}>Switch room</button><p>Strict Mode probes setup → cleanup → setup in development.</p></section>}
12 │ 
```

閱讀順序：

- 先找 imports：solution 使用了哪些 React mechanisms？
- 再找 state owners：每份 state 的 reader/writer 是誰？
- 再找 callbacks：它們捕捉哪次 render 的 values？
- 再找 JSX position/key：state identity 如何保存？
- 最後找 Effect/memo：是否真的有 external system 或 measured bottleneck？

## Why it works

先發生 render/commit，之後 Effect setup。 dependency 改變時先 cleanup 舊同步，再 setup 新同步。 Strict Mode development 會 probe cleanup 是否完整。

Solution 的價值不是某個 API 名稱，而是它改變了造成問題的 mechanism。請回到 starter，只做相同的最小改變，確認 behaviour 跟著改變。

## Trade-offs

- Correctness fix 與 performance optimization 要分開評估。
- 增加 memoization、Context、Effect 或 abstraction 都會提高 dependency 與閱讀成本。
- 若移除 duplicated state/Effect 就能解決，通常比新增同步規則更容易維護。
- Reference solution 不是唯一答案；能維持 invariant、可測試且容易讓 caller 理解更重要。
