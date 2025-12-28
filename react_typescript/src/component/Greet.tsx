type greetType= {
    name:string
}
export default function Greet({name}:greetType){
    return(
        <div>
            <h2>Welcome {name}, you have 10 unread messages</h2>
        </div>
    )
}