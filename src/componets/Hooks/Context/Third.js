import React, { useContext } from "react";
import { Fname } from "./First";
export default function Third(){
    const fname = useContext(Fname)
    return(
        <h1>hi....{fname}</h1>
    )
}