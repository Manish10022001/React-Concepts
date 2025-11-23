import React,{useState} from 'react';

export default function ControlledComponent(){
    const [value,setValue] =useState('');
    function handleChange(e){
        setValue(e.target.value);
    }
    function handleSubmit(e){
        alert('Name is '+value);
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label> Name : 
                <input type='text' value={value} onChange={handleChange}/>
            </label>
            <input type="submit" value="submit"/>
        </form>
    )
}