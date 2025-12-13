//use state with boolean values
import {useState} from 'react';
export function LoginCard(){
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [message, setMessage] = useState("");

    function handleLogIn(){
        setIsLoggedIn(!isLoggedIn);
    }
    function handleChange(event){
        setMessage(event.target.value);
    }

    return(
        <>
            <button onClick={handleLogIn}>{isLoggedIn ? "Logout": "Login"}</button>
            <div>
                <input type="text" placeholder="type message" value={message} onChange={handleChange}/>
                <p>{message}</p>
            </div>
        </>
    )
}