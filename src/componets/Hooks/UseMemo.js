import React, { useMemo, useState } from "react";
export default function UseMemo() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const Iseven = useMemo(() => {
        console.log("render...");
        for (var i = 0; i < 1000000000; i++) { 
            if(num1 % 2 === 0){
                return 'Even'
            }
        }
        // return num1 % 2 === 0
        

    }, [num1])
    return (
        <>
            <div>UseMemo</div>
            <button onClick={() => setNum1(num1 + 1)}>Odd : {num1}</button>
            {Iseven ? 'even' : 'odd'}
            <button onClick={() => setNum2(num2 + 1)}>Even : {num2}</button>
        </>
    )
}