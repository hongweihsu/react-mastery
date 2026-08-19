import { useState } from "react";
export default function Lab(){const[saved,setSaved]=useState(false);return <section><input data-testid="name-input"/><button onClick={()=>setSaved(true)}>Save</button>{saved&&<div className="green-message">Saved</div>}</section>}
