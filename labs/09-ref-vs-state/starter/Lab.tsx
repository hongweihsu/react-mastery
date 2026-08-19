import { useRef } from "react";
/* eslint-disable react-hooks/refs -- intentional demonstration of why refs are not render data */
export default function Lab(){const clicks=useRef(0);return <section><h2>Displayed clicks: {clicks.current}</h2><button onClick={()=>{clicks.current++;console.log(clicks.current)}}>Mutate ref</button></section>}
