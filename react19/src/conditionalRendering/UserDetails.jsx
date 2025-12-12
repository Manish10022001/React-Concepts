export function UserDetails({name, isOnline, hideOffline}){
    //if user is offline we do not want to show it on screen
    if(hideOffline && !isOnline){
        return null;
    }

    //ifStatement
    // if(isOnline){
    //     return(
    //         <div>
    //             <h3>{name}</h3>
    //             <span>🟢 Online</span>
    //             <p>Available for chat</p>
    //             <button>Send Message</button>
    //         </div>
    //     )
    // }

    // return(
    //     <div>
    //         <h3>{name}</h3>
    //         <span>🔴 Offline</span>
    //         <p>Not Available for Chat</p>
    //         <small>Come back later</small>
    //     </div>
    // )

    //Ternary Operator
    return(
        <div>
            <h3>{name}</h3>
            <span>{isOnline ? "🟢 Online":"🔴 Offline" }</span>
            <p>{isOnline? "Avaialble to chat" : "Not available to chat"}</p>
            {isOnline ? (
                <button>Send Message</button>
            ):(
                <small>Come back later</small>
            )}
        </div>
    )
}