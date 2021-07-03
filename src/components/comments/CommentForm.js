import React from 'react' 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class CommentForm extends React.Component{

    state = {
        body: ""
    }

    render(){
        return(
            <>
                <Form>
                    <Form.Group controlId="formBasicBody">
                        <Form.Control as="textarea" rows={2} />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}