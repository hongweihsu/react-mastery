# 16｜Interview Deep Dive

## Why this matters

強答案：定義 → mechanism → prediction → experiment/debug → boundary → trade-off。

## Learning objectives

- 能在執行前預測哪些 components execute、是否 commit、DOM 是否 mutation。
- 以 rendering、state、Effects、identity、Context、memoization、testing、architecture 組織追問。
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

前往 [Lab 14-broken-memo](../labs/14-broken-memo/README.md)。依 README 先執行 starter，記錄 prediction 與 observation，再比較 solution。

## Observation protocol

- Console：component execution / Effect setup-cleanup 的 trace。
- React DevTools Components/Profiler：render 與 commit evidence。
- Elements：實際 DOM 結構。
- Performance/Network：browser work 與 request timing。

不要用其中一項 evidence 代替其他層。

## Common trap

### Common Misconception

> Senior answer 等於塞入最多術語。

這個說法忽略 render、reconciliation、commit 或 JavaScript semantics 之間的界線。用 lab 的最小反例證明。

## Debugging checklist

1. Reproduce：固定操作步驟與 development/production mode。
2. Predict：寫出 tree position、snapshot、dependencies、references。
3. Observe：Profiler 與 browser evidence。
4. Change one assumption：一次只改 key、dependency、ownership 或 reference 其中一項。
5. Explain：修法改變了哪個 mechanism？

## Senior Engineering Note

先回答核心因果，再主動標 Strict Mode、framework、production measurement 等前提。

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
## Interview question map

1. What causes React to re-render? Does that imply DOM mutation?
2. How does React model state, snapshots, batching, and updater queues?
3. What is reconciliation? How do position, type, and key preserve/reset state?
4. Why can index keys produce visible bugs?
5. What external-system problem does useEffect solve? When should it be removed?
6. How do stale closures, infinite Effects, and request races arise?
7. useState vs useRef；useState vs useReducer。
8. Context 的 update surface 與 composition alternatives。
9. React.memo、useMemo、useCallback 與 referential equality。
10. Controlled vs uncontrolled、state colocation、custom Hook API。
11. 如何用 Profiler 找 bottleneck，而不是猜？
12. Component API 與 architecture 的 trade-offs。

每題用下列 rubric 自評：

### Weak Junior Answer

只給定義或口號，沒有 mechanism 與可觀察預測。

### Solid Mid-Level Answer

能描述 render/commit、closure/reference 等機制，給最小 reproduction 與合理修法。

### Strong Senior-Level Answer

能標示 React vs JavaScript vs browser/framework 前提，討論 alternative、measurement、ownership 與 maintenance cost。

### Likely Follow-Up

改變一個條件：Strict Mode、key、reference、async completion order、provider boundary。重新預測。

### Common Misconception

把 API rule 當成原因；或把 re-render、commit、DOM mutation、browser paint 混為一談。

