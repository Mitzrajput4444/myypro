import React, { createContext, useState } from "react";
import Second from "./Second";
import Third from "./Third";


 const Fname = createContext();
 
export default function First() {


    return (
        <>
          
            <Fname.Provider value="mitu">
               <Second/>
               
            </Fname.Provider>
        
        </>
    )
}
export { Fname }