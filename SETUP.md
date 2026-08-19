# Setup

## Requirements

- Node.js 22 LTS 或更新的 active LTS（本 repository 設定 >=22）
- npm 10+
- 現代 Chromium/Firefox/Safari
- React Developer Tools browser extension

## Install and run

```bash
npm install
npm run dev
```

開啟 Vite 顯示的 localhost URL。Selector 可切換 lab 與 starter/solution；正常學習不要先看 solution。

## Quality commands

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## DevTools workflow

1. React DevTools Components：檢查 props/hooks/tree。
2. Profiler：錄製 interaction 與 commits，先 measure。
3. Browser Console：看 execution/effect trace。
4. Elements：確認 DOM 是否真的 mutation。
5. Network/Performance：看 request ordering 與 browser work。

## Strict Mode

Development 中 React 可能額外呼叫 render calculation，並對 Effects 執行 setup → cleanup → setup probe。先確認 observation 是否來自 development Strict Mode，不要為了讓 console 看起來簡單而關閉它。

## Troubleshooting

- Port occupied：npm run dev -- --port 5174。
- Wrong Node：確認 node --version 至少 22。
- Stale Vite cache：停止 dev server 後重開；不要隨意刪 source。
- Test DOM error：tests 使用 jsdom，不等同完整 browser layout/paint。
- React DevTools 無 tree：確認頁面使用 development build 且 extension 已啟用。
