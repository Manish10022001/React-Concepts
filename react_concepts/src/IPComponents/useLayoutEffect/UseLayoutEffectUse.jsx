import React, { useEffect, useState } from "react";
export default function UseLayoutEffectUse(){
    const [data,setDatat] = useState();
    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            const result = await response.json();

            setDatat(result);
            //update style based on the fetch data
            const element = document.getElementById('myElement');
            if(element && result && result.title){
                element.style.fontWeight="Bold";
            }
        };
        fetchData();
    },[])
    return(
        <div>
            <p id="myElement">
                Update this element to Bold after data fetch
            </p>
            {
                data && <p>{data.title}</p>
            }
        </div>
    )
}