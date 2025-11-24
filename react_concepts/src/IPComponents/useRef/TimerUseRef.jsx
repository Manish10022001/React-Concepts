import React,{useRef} from 'react';

export default function TimerUseRef(){
    const count = useRef(0);
    
    function Count(){
        count.current+=1;
        console.log(count.current);
    }
    return <button onClick={Count}>
        Increment
    </button>
}