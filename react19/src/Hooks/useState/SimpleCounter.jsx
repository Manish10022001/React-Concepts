import {useState} from 'react';
export function SimpleCounter(){
    const [count, setCount] = useState(0)
    console.log("Rendering phase: component rendering with count = ",count)

    function handleClick(){
        setCount(count+1);
        console.log("After setCount(count+1), count is ",count);
        setCount(count+5);
        console.log("After setCount(count+5), count is ",count);
        setCount(count+10);
        console.log("After setCount(count+10), count is ",count);
    }
    return(
        <div>
            <h2>Count : {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}