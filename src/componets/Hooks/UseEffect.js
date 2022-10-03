import React, { useEffect, useState } from "react";
export default function UseEffect() {
    const [name, SetName] = useState("Mitu")
    const [name1, SetName1] = useState("Gohil")
    // useEffect(() =>
    //     console.log("No Depency Render......")
    // )
    // useEffect(() =>
    //     console.log("An Empty Array..."), []
    // )
    useEffect(() =>
        console.log("With Specefic componet run When run"), [name1]
        )
    return(
        <>
        <h1>Name:{name}</h1>
        <h1>Name1:{name1}</h1>
        <button onClick={()=>SetName("Mittal")}>Change</button>
        <button onClick={()=>SetName1("Rajput")}>Change Surname</button>
        </>
    )

}