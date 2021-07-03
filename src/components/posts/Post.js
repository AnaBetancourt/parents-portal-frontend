import React from 'react' 
import CommentsContainer from '../../containers/CommentsContainer'
import CommentForm from '../comments/CommentForm'

export default function Post({id, body}){
    return(
        <div>
            <hr />
            <h6><strong>Posting</strong></h6>
            <p>{body}</p>
            <CommentForm />
            <br /><br />
            <CommentsContainer posting={id} />
        </div>
    )
}