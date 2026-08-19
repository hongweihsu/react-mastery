# Lab 08｜Async request race

<!-- junior-detail-v1 -->
## Junior 實驗導航

### 這個 lab 真正要學什麼

1. Request 完成順序不必等於開始順序。
2. A 的舊 response 可在 B 後完成並覆蓋畫面。
3. 用 timeline 畫 request start、response、cleanup 與 state update。

### 不要直接找修法：先建立 observation table

| 時間點 | Component execution | State/props snapshot | Effect/async | DOM text/input |
|---|---|---|---|---|
| 初次載入 | 先填寫 | 先填寫 | 先填寫 | 先填寫 |
| 第一次操作後 | 先填寫 | 先填寫 | 先填寫 | 先填寫 |
| bug 出現時 | 先填寫 | 先填寫 | 先填寫 | 先填寫 |

### 操作時只看一件事

第一次跑 starter，只確認 bug/behaviour 能否重現。第二次才開 Console。第三次才錄 Profiler。一次開太多訊號，junior 很容易把 execution log、commit 與 DOM change 混在一起。

### 如何描述 root cause

不要只寫「dependency/key/memo 寫錯」。使用完整句型：

> 當我做＿＿＿時，React 因為＿＿＿再次執行／保留 identity；JavaScript value/reference 是＿＿＿；所以 observable result 變成＿＿＿。

在能填完這句以前，先不要看 solution。


🔴 Advanced · Intentionally broken starter

對應概念：[06_effects](../../concepts/06_effects.md)

## Scenario

此 lab 用最小 React tree 隔離一個 mental model。Starter 包含刻意設計的行為問題；它應能 compile，錯誤在 React/JavaScript interaction，而非無關 syntax。

## Before running

不要先看 solution/。先記錄：

1. 哪些 components 會 execute？
2. 哪些 state/props snapshot 或 references 被讀？
3. 是否會 commit？DOM 是否 mutation？
4. Strict Mode development 可能多觀察到什麼？
5. 你預期 Console、React Profiler、Elements 各看到什麼？

## Run

從 repository root：

```bash
npm run dev
```

在 lab selector 選 **08-race-condition / starter**。

## Reproduce and observe

1. 固定操作步驟，重現行為。
2. 開 React DevTools Profiler 錄製；不要先 optimize。
3. 用 Browser Elements/Console/Network（適用時）收集 evidence。
4. 寫下 actual result，指出 prediction 哪個 assumption 錯。

## Debugging task

一次只改一個 assumption。畫出 render → reconciliation → commit；若有 Effect，再加 setup/cleanup 與 async completion。解釋 root cause 後才修改 starter。

## Trade-off questions

- 修法增加了哪些 state、Effect、memoization 或 API complexity？
- 能否刪除 Effect/duplicated state，而非增加 dependency workaround？
- 這是 correctness 問題，還是需要 measurement 的 performance 問題？

## Solution policy

Reference implementation 位於 solution/，但請完成 prediction、reproduction 與 root-cause explanation 後才比較。Tutoring 時除非你明確要求完整 solution，Codex 不應讀取或揭露它。

