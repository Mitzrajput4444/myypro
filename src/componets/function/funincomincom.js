import React from "react";
function ComponetFun(props){
    return(<h1>name:{props.name}</h1>)
}
export function MainFunction(props){
    return(<div>
        <ComponetFun name={props.name}/>
    </div>)
}