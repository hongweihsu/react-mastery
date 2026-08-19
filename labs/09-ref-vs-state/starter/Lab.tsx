/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - Ref mutation 不會要求 React render。
 * - 畫面需要更新的資料通常是 state；不影響畫面的 metadata 可用 ref。
 * - 不要把 ref.current 當 declarative render source。
 */
import { useRef } from "react";
/* eslint-disable react-hooks/refs -- intentional demonstration of why refs are not render data */
export default function Lab(){const clicks=useRef(0);return <section><h2>Displayed clicks: {clicks.current}</h2><button onClick={()=>{clicks.current++;console.log(clicks.current)}}>Mutate ref</button></section>}
