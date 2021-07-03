import React from 'react' 
import CommentsContainer from '../../containers/CommentsContainer'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

export default function Post({id, body, toggleOpen, open}){

    return(
        <div>
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <Card.Text><strong>{body}</strong></Card.Text>
                </Card.Body>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">Comments</Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body><CommentsContainer posting={id} /></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Card>
        </div>
    )
}

