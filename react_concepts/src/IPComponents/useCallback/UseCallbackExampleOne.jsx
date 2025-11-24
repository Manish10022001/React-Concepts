import React,{useState,useCallback,} from 'react';

export default function UseCallbackExampleOne(){
    const [count,setCount] = useState(0);
    const handleClick = useCallback(()=>{
        setCount(count+1);
    },[count])
    return(
        <div>
            <p>Count : {count}</p>
            <ChildComponent onClick={handleClick}/>
        </div>
    )
}

const ChildComponent = React.memo(({onClick})=>{
    console.log("Child Component rendered");
    return <button onClick={onClick}>Click me</button>
})