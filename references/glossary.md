# Glossary

| 繁體中文 | English | 說明 |
|---|---|---|
| 重新渲染 | Re-render | React 再次執行 component 以取得 element tree。 |
| 協調 | Reconciliation | 比較前後 element tree 並決定保留/更新內容。 |
| 提交 | Commit | React 套用必要 host changes 並處理相關 lifecycle。 |
| 狀態快照 | State Snapshot | 某次 render 看到的固定 state 值。 |
| 批次更新 | Batching | 聚合更新後進行較少 render/commit。 |
| 衍生狀態 | Derived State | 可由目前 props/state 計算的值。 |
| 參照相等性 | Referential Equality | object/function 是否為同一 identity。 |
| 受控元件 | Controlled Component | 重要 value 由 parent/props 擁有。 |
| 非受控元件 | Uncontrolled Component | value 主要由元件或 DOM 本地擁有。 |
| 副作用 | Effect | 與 React 外部系統同步的程序。 |
| 清理 | Cleanup | 撤銷前次 Effect setup 的函式。 |
| 過期閉包 | Stale Closure | callback 捕捉舊 render snapshot。 |
| 協調鍵 | Key | sibling element 的 domain identity 提示。 |
| 狀態共置 | State Colocation | 將 state 放在真正使用它的最近 owner。 |
| 轉場 | Transition | 標記 non-urgent update 以維持 urgent interaction。 |
| 記憶化 | Memoization | 以 dependency/reference 重用計算或 component result 的 optimization。 |
