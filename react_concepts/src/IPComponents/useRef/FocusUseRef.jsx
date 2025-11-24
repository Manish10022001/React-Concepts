import React,{useRef, useEffect} from 'react';

export default function FocusUseRef(){
    const inputEl = useRef(null);

    useEffect(()=>{
        inputEl.current.focus();
    },[]);
    return <input ref={inputEl} type="text"/>
}