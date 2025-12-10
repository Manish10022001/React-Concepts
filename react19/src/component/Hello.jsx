//component with jsx and without jsx
import React from "react"
//with jsx
export function Hello(){
    return(
        <div id="container">
            <h1>
                Hello Manish
            </h1>
        </div>
    )
}

export function HelloWithoutJsx(){
    return React.createElement("div",{id:"container"},
        React.createElement("h1",null,"Hello Manish")
    )
}