import {useState} from 'react';
export function Counter(){
    const [count, setCount] = useState(0)
    function handleCount(){
        setCount(count+1);
    }
    return <button onClick={handleCount}>Count:{count}</button>
}