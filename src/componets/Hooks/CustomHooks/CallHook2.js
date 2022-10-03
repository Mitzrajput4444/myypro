import React from "react";
import MyHook from "./MyHook";
export default function Callhook2(){
    const sum = MyHook(45,36)
    return(
        <>
        <h1>Sum Is : {sum}</h1>
        </>
    )
}