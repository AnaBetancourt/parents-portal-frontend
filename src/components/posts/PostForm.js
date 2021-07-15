import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {connect} from 'react-redux'
import {createPost} from '../../actions/PostActions'

class PostForm extends React.Component{

    state = {
        body: "",
        show: false
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
        const input = e.target.value

        this.setState({
            body: input
        })
    }

    handleSubmit = () => {
        this.props.createPost(this.state)

        this.setState({
            show: false,
            body: ""
        })
    }

    render(){

        return(
            <>
                <Button variant="outline-primary" onClick={this.handleShow}>Add Post</Button>
                <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicBody">
                                <Form.Label>What would you like to say?</Form.Label>
                                <Form.Control onChange={this.handleChange} as="textarea" rows={3} placeholder="Enter your text here." name="body" />
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

export default connect (null, {createPost})(PostForm)