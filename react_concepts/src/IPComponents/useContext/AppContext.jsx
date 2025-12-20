import React, { createContext, useContext } from "react";

const UserContext = createContext();
export default function AppContext(){
    const user ={
        name:"Manish",
        email:"manish@gmail.com"
    }
    return(
        <UserContext.Provider value={user}>
            <Parent />
        </UserContext.Provider>
    )
}

function Parent(){
    return(
        <div>
            <h2>Parent Component</h2>
            <Child />
        </div>
    )
}
function Child(){
    return(
        <div>
            <h2>Child Component</h2>
            <GrandChild />
        </div>
    )
}
function GrandChild(){
    const user = useContext(UserContext)
    return(
        <div>
            <h2>Grand Child</h2>
            <p>UserName: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}
