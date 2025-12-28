export default function HocLogger(HocUse){
    return function withLogger(props){
        console.log("Logging ...")
        return <HocUse {...props}/>;
    }
}
