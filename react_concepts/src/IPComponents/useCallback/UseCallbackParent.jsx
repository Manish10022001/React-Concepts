import React, { useCallback, useState } from "react";
export default function UseCallbackParent(){
    const [count,setCount] = useState(0)
    //without useCallback: this works as well
    // function handleIncrement(){
    //     setCount(count+1);
    // }

    const handleIncrement = useCallback(()=>{
        setCount(count+1)
    },[count])
    return(
        <div>
            <p>Count:{count}</p>
            <UseCallbackChild onIncrement={handleIncrement}/>
        </div>
    )
}

function UseCallbackChild({onIncrement}){
    return(
        <div>
            <button onClick={onIncrement}>Increment</button>
        </div>
    )
}