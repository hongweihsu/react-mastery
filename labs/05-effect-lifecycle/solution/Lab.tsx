import { useEffect, useState } from "react";
function useRoomConnection(room:string){useEffect(()=>{console.log("setup",room);const id=setInterval(()=>console.log("ping",room),2000);return()=>{clearInterval(id);console.log("cleanup",room)}},[room])}
export default function Lab(){const[room,setRoom]=useState("alpha");useRoomConnection(room);return <section><h2>Room {room}</h2><button onClick={()=>setRoom(r=>r==="alpha"?"beta":"alpha")}>Switch room</button><p>Strict Mode probes setup → cleanup → setup in development.</p></section>}
