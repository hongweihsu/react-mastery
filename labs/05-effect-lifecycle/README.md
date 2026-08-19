# Lab 05｜Effect setup and cleanup

🟡 Intermediate

對應概念：[06_effects](../../concepts/06_effects.md)

## Scenario

此 lab 用最小 React tree 隔離一個 mental model。Starter 可用來比較 prediction 與 browser evidence。

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

在 lab selector 選 **05-effect-lifecycle / starter**。

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

