import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {connect} from 'react-redux'
import {createMeetup} from '../../actions/MeetupActions'

class MeetupForm extends React.Component{

    state = {
        show: false,
        title: "",
        date: "",
        time: "",
        location: "",
        description: ""
    }

    setShow(type){
        this.setState({
            ...this.state,
            show: type
        })
    }

    handleClose = () => this.setShow(false)
    handleShow = () => this.setShow(true)

    handleChange = (e) => {
        const type = e.target.name
        const input = e.target.value

        this.setState({
            [type]: input
        })
    }

    handleSubmit = () => {
        const formData = {title: this.state.title, date: this.state.date, time: this.state.time, location: this.state.location, description: this.state.description}
        this.props.createMeetup(formData)

        this.setState({
            show: false,
            title: "",
            date: "",
            time: "",
            location: "",
            description: ""
        })
    }

    render(){

        return(
            <>
                <Button variant="outline-primary" onClick={this.handleShow}>Add Meetup</Button>
                <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Meetup</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
				            <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Form.Label>Meetup Title:</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" name="title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>Date:</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" name="date" />
                                <Form.Text className="text-muted">Ex: "January 1st, 2000"</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicTime">
                                <Form.Label>Time:</Form.Label>
                                <Form.Control onChange={this.handleChange} type="integer" name="time" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLocation">
                                <Form.Label>Location:</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" name="location" />
                                <Form.Text className="text-muted">Ex: "Times Square, New York, New York"</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Description:</Form.Label>
                                <Form.Control onChange={this.handleChange} as="textarea" rows={3} placeholder="Please enter a brief description." name="description" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default connect (null, {createMeetup})(MeetupForm)