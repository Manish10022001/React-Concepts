import React, {useMemo} from 'react';
function expensiveCalculations(num){
    console.log("running expensive calculation");
    for(let i = 0; i<1000000; i++){};
    return num*2;
}
export default function ExpensiveCalculationComponent({num}){
    const memoizedValue = useMemo(()=>{
        return expensiveCalculations(num)
    },[num])
    return(
        <div>
            <h2>Number : {num}</h2>
            <h2>Memoized Result: {memoizedValue}</h2>
        </div>
    )
}