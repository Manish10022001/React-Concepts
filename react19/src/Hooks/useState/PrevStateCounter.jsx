import {useState} from 'react';
export function PrevStateCounter(){
    const [count, setCount] = useState(0)
    console.log("Rendering phase: component rendering with count = ",count)

    function handleClick(){
        setCount((prev)=>{
            console.log("1st updated fn, prev count",prev);
            return prev+1;
        })
        setCount((prev)=>{
            console.log("2nd updated fn, prev count ",prev);
            return prev+5;
        });
        setCount((prev)=>{
            console.log("3rd updated fn, prev count ",prev);
            return prev+10;
        });
    }
    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}