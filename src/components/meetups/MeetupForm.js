import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class MeetupForm extends React.Component{

    state = {
        show: false
    }

    setShow(type){
        this.setState({
            show: type
        })
    }

    handleClose = () => this.setShow(false)
    handleShow = () => this.setShow(true)

    render(){

        return(
            <>
                <Button variant="outline-primary" onClick={this.handleShow}>Add Meetup</Button>
  
                <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Meetup</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
				            <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Form.Label>Meetup Title</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">Please use the following format: "January 1st, 2000"</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicTime">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="integer" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">Ex: "Times Square, New York, New York"</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Please enter a brief description" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">Submit</Button>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default MeetupForm