import {useRef} from 'react';
export default function UncontrolledComponent(){
    const inputRef = useRef(null);
    function handleSubmit(e){
        alert('name is '+ inputRef.current.value)
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label> Name : 
                <input type='text' ref = {inputRef}/>
            </label>
            <input type="submit" value="submit"/>
        </form>
    )
}