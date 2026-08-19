# React Mastery

以繁體中文教授現代 React 19.2 的互動式課程：

```text
Mental Model → Prediction → Browser Experiment → Observation
             → Debugging → Explanation → Engineering Trade-off
             → Interview Reasoning
```

這不是 Todo/capstone、Next.js、Redux 或 CSS 課程。目標是能預測 rendering、state snapshots、Effects、identity、reconciliation、Context、memoization、testing 與 architecture。

## Roadmap

```text
React Mental Model → Components & Composition → State & Rendering
→ Effects & Synchronization → Identity & Reconciliation
→ Hooks & State Architecture → Performance → Testing
→ Architecture → Senior / Interview Reasoning
```

## Learning surfaces

- concepts/：WHY、mental models、trade-offs、interview reasoning。
- labs/：20 個 browser experiments，每個包含 starter/ 與 solution/。
- .learning/：本機私人 prediction/progress/mistakes；已忽略且不公開。

## Start

閱讀 concepts/00_react_mental_model.md，再進入 labs/01-component-execution/README.md。執行前先 prediction。

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
```

React Strict Mode 保持啟用。Development 可能刻意額外執行 render 或 Effect setup/cleanup probe；請把它當觀察 purity 與 cleanup 的工具，而非 production 次數保證。

參考 [SETUP.md](SETUP.md) 完成 React DevTools 與 troubleshooting。
