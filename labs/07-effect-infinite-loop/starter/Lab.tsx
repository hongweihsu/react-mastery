import { useEffect, useState } from "react";
/* eslint-disable react-hooks/set-state-in-effect -- intentional bounded Effect-loop teaching bug */
export default function Lab(){const[runs,setRuns]=useState(0);const options={mode:"active"};useEffect(()=>{console.log("effect",runs,options);if(runs<5)setRuns(r=>r+1)},[options,runs]);return <section><h2>Effect loop (bounded): {runs}</h2><p>Draw the render → new object → effect → state update cycle.</p></section>}
