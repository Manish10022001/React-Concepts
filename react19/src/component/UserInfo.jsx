export function UserInfo({name,age,city,email}){
    return(
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>City: {city}</p>
            <p>Email: {email}</p>
        </div>
    )
}

export function UserCard(props){
    return(
        <div>
            <h2>User Details</h2>
            <UserInfo {...props}/>
        </div>
    )
}