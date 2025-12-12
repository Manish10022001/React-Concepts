//we want one buton but performing different tasks 
//so we want parent component to controll the behavior
//for child to parent communication, use props but this time we pass event handlers as props
//parent components: Contact and Newsletteer

export function ActionButton({text, onClick}){
    return <button onClick={onClick}>{text}</button>
}