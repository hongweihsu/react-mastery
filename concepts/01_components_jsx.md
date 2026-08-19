# 01｜Components、JSX 與邊界

## Why this matters

JSX 是描述 UI 的 expression；component 是 React 可再次呼叫的 function。

## Learning objectives

- 能在執行前預測哪些 components execute、是否 commit、DOM 是否 mutation。
- 由 props、children、conditional/list rendering 建立清楚 component boundary。
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

> JSX 是 HTML template。

這個說法忽略 render、reconciliation、commit 或 JavaScript semantics 之間的界線。用 lab 的最小反例證明。

## Debugging checklist

1. Reproduce：固定操作步驟與 development/production mode。
2. Predict：寫出 tree position、snapshot、dependencies、references。
3. Observe：Profiler 與 browser evidence。
4. Change one assumption：一次只改 key、dependency、ownership 或 reference 其中一項。
5. Explain：修法改變了哪個 mechanism？

## Senior Engineering Note

比較 data props API 與 compositional children API；依變化軸與 caller control 選擇。

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
