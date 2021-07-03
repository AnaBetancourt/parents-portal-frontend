import React from 'react' 
import CommentsContainer from '../../containers/CommentsContainer'
import CommentForm from '../comments/CommentForm'
import Card from 'react-bootstrap/Card'

export default function Post({id, body}){
    return(
        <div>
            <Card border="info" style={{ width: '50rem' }}>
                <Card.Header>Posting</Card.Header>
                <Card.Body>{body}</Card.Body>
                <CommentForm />
                <Card.Header>Comments</Card.Header>
                <CommentsContainer posting={id} />
            </Card>
        </div>
    )
}