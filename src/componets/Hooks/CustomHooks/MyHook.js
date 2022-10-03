import React, {useEffect, useState} from "react";
export default function MyHook(x,y){
    const [sum,setSum] = useState()
    useEffect(()=> {
        setSum(x + y)
    })
    return sum
}
