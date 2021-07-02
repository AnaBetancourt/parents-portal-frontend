import React from 'react' 

export default function Comment({id, body}){
    return(
        <div>
            <p>{body}</p>
            <br />
        </div>
    )
}