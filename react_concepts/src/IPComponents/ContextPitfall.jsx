import React,{useState} from 'react';
const myContext = React.createContext();

export default function ParentComponent(){
    const [value, setValue] = useState(0);
    return(
        <myContext.Provider value={{value}}>
            <ChildComponent/>
        </myContext.Provider>
    )
}

function ChildComponent(){
    const {value} = React.useContext(myContext)
    console.log("components re-rendered");
    return(
        <div>
            {value}
        </div>
    )
}