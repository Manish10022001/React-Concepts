import React, {useEffect, useRef, useLayoutEffect} from 'react';

export default function UseEffectVsUseLayoutEffect(){
    const ref = useRef();
    useEffect(()=>{
        console.log("useEffect: runs after DOM paints");
    })

    useLayoutEffect(()=>{
        console.log("useLayoutEffect: runs before DOM paints");
        console.log("Element Width",ref.current.offsetWidth)
    })
    return <div ref={ref}>Hello</div>
}