/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - 測試 user 能找到的 role/name 與 visible result。
 * - data-testid/class name 容易綁住 implementation。
 * - 用 userEvent 模擬 interaction，async result 用 findBy/waitFor。
 */
import { useState } from "react";
export default function Lab(){const[saved,setSaved]=useState(false);return <section><input data-testid="name-input"/><button onClick={()=>setSaved(true)}>Save</button>{saved&&<div className="green-message">Saved</div>}</section>}
