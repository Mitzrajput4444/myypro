import React, { useState } from "react";
export default function UseState(){
    const [num,SetNum] = useState(1)
function UpdateChang(){
    SetNum(num + 1)
}
return(
    <>
    <h1>Num:{num}</h1>
    <button onClick={UpdateChang}>Increment</button>
    <button onClick={()=>SetNum(num-1)}>Decrement</button>
    <button onClick={()=>SetNum(0)}>Reset</button>
    </>
)
}