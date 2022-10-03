
import React,{ useRef } from "react";
export default function UseRef(){
    const elements = useRef()
    const Demo = () =>{
        elements.current.style.color = "red"
        elements.current.style.backgroundColor = "yellow"
        elements.current.className = "my"
    }

    return(
        <>
        <div>USeRef</div>
        <input ref={elements} type="text"/>
        <button onClick={Demo}>Click..!</button>
        
        </>
    )
}