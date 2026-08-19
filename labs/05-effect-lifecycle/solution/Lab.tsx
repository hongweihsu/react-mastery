/* <!-- junior-detail-v1 --> */
/*
 * 這是 reference solution。比較時逐項回答：state owner 是否改變、Effect 是否被移除/修正、identity/reference 是否穩定，以及這個修法新增了什麼成本。
 * Lab focus:
 * - 先發生 render/commit，之後 Effect setup。
 * - dependency 改變時先 cleanup 舊同步，再 setup 新同步。
 * - Strict Mode development 會 probe cleanup 是否完整。
 */
import { useEffect, useState } from "react";
function useRoomConnection(room:string){useEffect(()=>{console.log("setup",room);const id=setInterval(()=>console.log("ping",room),2000);return()=>{clearInterval(id);console.log("cleanup",room)}},[room])}
export default function Lab(){const[room,setRoom]=useState("alpha");useRoomConnection(room);return <section><h2>Room {room}</h2><button onClick={()=>setRoom(r=>r==="alpha"?"beta":"alpha")}>Switch room</button><p>Strict Mode probes setup → cleanup → setup in development.</p></section>}
