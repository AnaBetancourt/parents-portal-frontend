import React from 'react' 
// import CommentsContainer from '../../containers/CommentsContainer'

export default function Post({id, body}){
    return(
        <div>
            <p>{body}</p>
            {/* <CommentsContainer /> */}
            <br />
        </div>
    )
}