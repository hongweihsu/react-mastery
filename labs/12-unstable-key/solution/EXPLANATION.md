# Solution explanation｜12-unstable-key

> 這是 reference explanation。正常 tutoring 中，只有在學習者明確要求 solution 時才閱讀或揭露。

## Root-cause checklist

- Index 描述位置，不描述 domain item identity。
- 刪除第一項後，後面的 component state 可能被配給不同 item。
- 先在某一 row 輸入，再 reorder/delete 才能看見 bug。

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
05 │  * - Index 描述位置，不描述 domain item identity。
06 │  * - 刪除第一項後，後面的 component state 可能被配給不同 item。
07 │  * - 先在某一 row 輸入，再 reorder/delete 才能看見 bug。
08 │  */
09 │ import { useState } from "react";
10 │ const initial=[{id:"a",name:"Ada"},{id:"g",name:"Grace"},{id:"l",name:"Lin"}];
11 │ function Row({name}:{name:string}){const[note,setNote]=useState("");return <li>{name} <input aria-label={"note for "+name} value={note} onChange={e=>setNote(e.target.value)}/></li>}
12 │ export default function Lab(){const[items,setItems]=useState(initial);return <section><button onClick={()=>setItems(xs=>xs.slice(1))}>Delete first</button><ul>{items.map(x=><Row key={x.id} name={x.name}/>)}</ul></section>}
13 │ 
```

閱讀順序：

- 先找 imports：solution 使用了哪些 React mechanisms？
- 再找 state owners：每份 state 的 reader/writer 是誰？
- 再找 callbacks：它們捕捉哪次 render 的 values？
- 再找 JSX position/key：state identity 如何保存？
- 最後找 Effect/memo：是否真的有 external system 或 measured bottleneck？

## Why it works

Index 描述位置，不描述 domain item identity。 刪除第一項後，後面的 component state 可能被配給不同 item。 先在某一 row 輸入，再 reorder/delete 才能看見 bug。

Solution 的價值不是某個 API 名稱，而是它改變了造成問題的 mechanism。請回到 starter，只做相同的最小改變，確認 behaviour 跟著改變。

## Trade-offs

- Correctness fix 與 performance optimization 要分開評估。
- 增加 memoization、Context、Effect 或 abstraction 都會提高 dependency 與閱讀成本。
- 若移除 duplicated state/Effect 就能解決，通常比新增同步規則更容易維護。
- Reference solution 不是唯一答案；能維持 invariant、可測試且容易讓 caller 理解更重要。
