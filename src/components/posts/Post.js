import React from 'react' 
// import CommentsContainer from '../../containers/CommentsContainer'

export default function Post({id, body}){
    return(
        <div>
            <h5>Forum Post</h5>
            <p>{body}</p>
            {/* <CommentsContainer /> */}
            <br />
        </div>
    )
}