/* <!-- junior-detail-v1 --> */
/*
 * 這是 starter。先閱讀 README、寫 prediction，再執行。刻意的問題應從 React/JavaScript mental model 解釋，不要只消除 lint warning。
 * Lab focus:
 * - 先發生 render/commit，之後 Effect setup。
 * - dependency 改變時先 cleanup 舊同步，再 setup 新同步。
 * - Strict Mode development 會 probe cleanup 是否完整。
 */
import { useEffect, useState } from "react";
export default function Lab(){const[room,setRoom]=useState("alpha");useEffect(()=>{console.log("connect",room);const id=setInterval(()=>console.log("ping",room),2000);return()=>{console.log("disconnect",room);clearInterval(id)}},[room]);return <section><h2>Room {room}</h2><button onClick={()=>setRoom(r=>r==="alpha"?"beta":"alpha")}>Switch room</button></section>}
