/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - 每次 render 建立新的 options object reference。
 * - dependency changed → Effect → state update → render 形成 feedback loop。
 * - 正確問題是 Effect 是否必要，而非如何欺騙 dependency array。
 */
import { useEffect, useState } from "react";
/* eslint-disable react-hooks/set-state-in-effect -- intentional bounded Effect-loop teaching bug */
export default function Lab(){const[runs,setRuns]=useState(0);const options={mode:"active"};useEffect(()=>{console.log("effect",runs,options);if(runs<5)setRuns(r=>r+1)},[options,runs]);return <section><h2>Effect loop (bounded): {runs}</h2><p>Draw the render → new object → effect → state update cycle.</p></section>}
