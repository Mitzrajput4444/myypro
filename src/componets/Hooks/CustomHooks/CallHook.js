import React from "react";
import MyHook from "./MyHook";
 export default function CallHook(){
    const sum = MyHook(10,20)
    return(
        <>
        <h1>CallHook</h1>
        <h1>{sum}</h1>
        </>
    )
 }