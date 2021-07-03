import React from 'react' 
import CommentsContainer from '../../containers/CommentsContainer'
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'

export default function Post({id, body, toggleOpen}){

    return(
        <div>
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <Card.Text>{body}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div onClick={() => toggleOpen(!!toggleOpen)}>view comments</div>
                    <Collapse in={!toggleOpen}>
                        <div>
                            <p>Content when the button is clicked</p>
                        </div>
                    </Collapse>
                </Card.Footer>
            </Card>
            <br />
        </div>
    )
}