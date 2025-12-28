type oscarsProps = { 
    children: React.ReactNode  //type React.ReactNode is used for Children props
}
export default function Oscars(props:oscarsProps){
    return <div>{props.children}</div>
}