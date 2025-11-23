import React,{useState} from 'react';

const myContext = React.createContext();
export default function ParentComponent(){
    const [value, setValue] = useState(0);

    return(
        <myContext.Provider value={{value,setValue}}>
            <ChildComponent />
        </myContext.Provider>
    )
}
function ChildComponent(){
    const {value, setValue} = React.useContext(myContext);
    console.log('component rerender')
    return(
        <div>
            <p>{value}</p>
            <button onClick={()=>setValue(value + 1)}>Increment</button>
        </div>
    )
}