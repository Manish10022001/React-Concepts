type personName = {
    name:{
        first:string,
        last:string,
    }
}
export default function Person(props:personName){
    return(
        <h2>{props.name.first} {props.name.last}</h2>
    )
}