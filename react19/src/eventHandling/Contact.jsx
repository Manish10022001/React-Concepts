import { ActionButton } from "./ActionButton";

export function Contact(){
    function handleSendMessage(){
        alert("Sending your message")
    }
    return(
        <div>
            <h3>Contact Us</h3>
            <ActionButton text="Send Message" onClick={handleSendMessage}/>
        </div>
    )
}