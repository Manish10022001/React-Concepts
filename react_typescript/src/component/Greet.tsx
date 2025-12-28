type greetType= {
    name:string,
    messageCount:number,
    isLoggedIn:boolean,
}
export default function Greet(props:greetType){
    return(
        <div>
            <h2>
                {props.isLoggedIn ? `Welcome ${props.name}, you have ${props.messageCount} unread messages`:`Welcome Guest`}
            </h2>
        </div>
    )
}