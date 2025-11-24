import React,{useState,useEffect,useRef} from 'react';

export default function ReferenceValueUseRef(){
    const prevCountRef = useRef();
    const [count,setCount] = useState(0)

    useEffect(()=>{
        prevCountRef.current = count;
    },[count])
    return(
        <div>
            <h1>Now : {count}</h1>
            <h2>Before : {prevCountRef.current}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}