type headingProps= {
    children:string
}
export default function Heading(props:headingProps){
    return <h2>{props.children}</h2>
}