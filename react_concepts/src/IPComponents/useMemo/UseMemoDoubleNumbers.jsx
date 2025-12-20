import React, { useMemo, useState } from "react"
export function UseMemoDoubleNumbers(){
    const [number, setNumber] = useState([1,2,3]);
    const [count, setCount] = useState(0);
    //useMemo to double number only when number changes
    const doubleNumber = useMemo(()=>{
        console.log("Doubling numbers...");
        return number.map(num=>num*2);
    },[number])
    return(
        <div>
            <h2>Double Numbers : {doubleNumber.join(',')}</h2>
            <button onClick={()=>setCount(count+1)}>Increment count({count}) </button>
        </div>
    )
}