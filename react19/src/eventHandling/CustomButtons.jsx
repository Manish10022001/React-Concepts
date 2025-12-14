export function CustomButtons({text}){
    const name="Manish";
    function handleClick(){
        // alert('thanks for liking!')
        console.log(`Hey! ${name}, you clicked ${text}`)
    }
    return(
        <button onClick={handleClick}>{text}</button>
    )
}