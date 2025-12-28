type greetType= {
    name:string,
    messageCount?:number, //for optional props we add ? after variable, 
    isLoggedIn:boolean,
}
export default function Greet(props:greetType){
    const {messageCount = 0 } = props;
    return(
        <div>
            <h2>
                {props.isLoggedIn 
                    ? `Welcome ${props.name}, you have ${messageCount} unread messages`
                    :`Welcome Guest`}
            </h2>
        </div>
    )
}