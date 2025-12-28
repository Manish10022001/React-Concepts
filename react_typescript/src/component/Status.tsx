type statusProps= {
    //status: string // when given status as string, then if given any string it does not give error flag so we 
    //so we use union of string literals as the status type
    status: 'loading'|'success'|'error'
}
export default function Status(props : statusProps){
    let message;
    if(props.status === 'loading'){
        message = "Loading..."
    } else if(props.status === 'success'){
        message = 'Data Fetched Successfully'
    } else if(props.status === 'error'){
        message = 'Error Fetching Data';
    }
    return(
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}