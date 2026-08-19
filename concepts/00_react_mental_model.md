# 00｜React Mental Model

<!-- junior-detail-v1 -->
## Junior 起點：第一次閱讀只需要做到這些

本章仍會帶你走到 senior / interview reasoning，但第一次閱讀不必一次吸收全部內容。你的最低完成目標是：

> 能分開說明 component execution、reconciliation、commit 與 DOM mutation。

### 先把四個層次分開

| 層次 | 你要問的問題 | 常見 observation |
|---|---|---|
| JavaScript | closure、object reference、function call 發生什麼？ | Console / debugger |
| React render | 哪個 component function 被執行？讀到哪份 props/state snapshot？ | Console / React DevTools |
| React commit | React 決定套用哪些 host changes？Effect 何時 setup/cleanup？ | Profiler / Effect trace |
| Browser | DOM、layout、paint、network 實際做了什麼？ | Elements / Performance / Network |

Component function 再執行，不代表四層全部都發生變化。每個實驗都先指出你正在觀察哪一層。

### 白話版 mental model

把 component 想成「React 在需要新 UI description 時會再次呼叫的函式」。它每次呼叫都拿到當次 props/state，回傳一棵 element description。React 接著比較新舊 description，最後只把必要的差異 commit 到 DOM。

因此請避免直接跳成：

- state 改了 → DOM 整頁重畫
- parent render → child DOM 一定變
- Effect 執行 → component 才 render

這些說法把不同階段混在一起。

### 讀 code example 的固定步驟

1. 圈出所有 state owners：誰呼叫 useState/useReducer？
2. 畫出 component tree：誰 render 誰？
3. 標出 event/Effect/async callbacks 各自捕捉哪次 render snapshot。
4. 找出每次 render 新建的 object/function references。
5. 寫 prediction：execution、commit、DOM、console 分開寫。
6. 才打開 browser，用至少兩種 DevTools evidence 驗證。

### Prediction 寫不出來時

先回答最小問題：「按一次按鈕後，哪個 setter 被呼叫？」接著只追蹤這個 setter 造成的下一次 render。不要一開始就試圖解釋整個 app。

### 常見錯誤如何分類

- **Syntax mistake**：程式無法 parse/typecheck，例如漏掉 bracket。
- **JavaScript misunderstanding**：誤判 closure 或 reference identity。
- **React mental-model misunderstanding**：把 snapshot、identity、Effect lifecycle 或 reconciliation 想錯。
- **Runtime/tooling assumption**：把 Strict Mode development probe 當成 production 次數。

先分類，才知道下一個最小實驗該改什麼。


## Why this matters

State / Props → Component execution → React element tree → Reconciliation → Commit → DOM mutation（若有必要）

## Learning objectives

- 能在執行前預測哪些 components execute、是否 commit、DOM 是否 mutation。
- Component execution 不等於 DOM mutation；state 屬於 rendered tree 的位置。
- 能建立最小 browser experiment，並用 React DevTools / Browser DevTools 驗證。
- 能說明 production trade-off 與 interview follow-up。

## Mental model

```text
Input / external event
        ↓
Component execution
        ↓
React element tree
        ↓
Reconciliation
        ↓
Commit (DOM mutation only if needed)
```

React stale behaviour 經常是 React render snapshot 與 JavaScript lexical closure / referential equality 的交互作用。先指出是哪一層，不要把所有問題都稱為 Hook 問題。

## Predict before running

不要先開 app。先回答：

1. 哪些 component functions 會執行？
2. 哪些 state/props snapshot 被讀取？
3. React 是否需要 commit？DOM 是否真的改變？
4. Console 與 Profiler 各會顯示什麼？
5. Strict Mode development 是否可能增加觀察次數？

## Browser experiment

前往 [Lab 01-component-execution](../labs/01-component-execution/README.md)。依 README 先執行 starter，記錄 prediction 與 observation，再比較 solution。

## Observation protocol

- Console：component execution / Effect setup-cleanup 的 trace。
- React DevTools Components/Profiler：render 與 commit evidence。
- Elements：實際 DOM 結構。
- Performance/Network：browser work 與 request timing。

不要用其中一項 evidence 代替其他層。

## Common trap

### Common Misconception

> 重新渲染（Re-render）一定會改 DOM。

這個說法忽略 render、reconciliation、commit 或 JavaScript semantics 之間的界線。用 lab 的最小反例證明。

## Debugging checklist

1. Reproduce：固定操作步驟與 development/production mode。
2. Predict：寫出 tree position、snapshot、dependencies、references。
3. Observe：Profiler 與 browser evidence。
4. Change one assumption：一次只改 key、dependency、ownership 或 reference 其中一項。
5. Explain：修法改變了哪個 mechanism？

## Senior Engineering Note

比較 Console、React DevTools Profiler 與 Elements mutation，各自回答不同問題。

## Interview connection

### Weak Junior Answer

只說 API 規則，例如「React.memo 會阻止 render」。

### Solid Mid-Level Answer

描述 mechanism、給 counterexample，並能用 DevTools 驗證。

### Strong Senior-Level Answer

區分 component execution、commit、DOM/browser work；標明 Strict Mode / framework 前提；討論 ownership、complexity 與 measurement。

### Likely Follow-Up

若把 stable primitive 改為每次新建 object/function，或改變 key/tree position，你的預測如何改變？

## Exercises

- 🟢 用一句話區分 re-render 與 DOM mutation。
- 🟡 畫出本章 lab 的 render/commit 時序。
- 🔴 故意破壞一個 assumption，重現 bug 並提出兩種修法。
- 🟣 選擇一種修法，寫 Architecture Decision Note：evidence、benefit、cost、rejected alternative。

## Review

能不看本文回答 Why，並以 browser evidence 反駁常見誤解，才算完成。
