import { ActionButton } from "./ActionButton";

export function Newsletter(){
    function handleSubscribe(){
        alert("Thanks for subscribing");
    }
    return(
        <div>
            <h3>Subscrib to Newsletteerr</h3>
            <ActionButton text="Newsletteer" onClick={handleSubscribe}/>
        </div>
    )
}