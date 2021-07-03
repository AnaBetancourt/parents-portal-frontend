import React from 'react' 
import CommentsContainer from '../../containers/CommentsContainer'
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'

export default function Post({id, body, open, toggleOpen}){

    return(
        <div>
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <Card.Text>{body}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>
                        <Button className="btn" onClick={() => toggleOpen(open)}>
                            Collapse Div
                        </Button>
                        {/* <Collapse in={open}>
                            <div>
                                <p>Content when the button is clicked</p>
                            </div>
                        </Collapse> */}
                    </small>
                </Card.Footer>
            </Card>
            <br />
        </div>
    )
}