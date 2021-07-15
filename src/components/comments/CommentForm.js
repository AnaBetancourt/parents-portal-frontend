import React from 'react' 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {createComment} from '../../actions/CommentActions'

class CommentForm extends React.Component{

    state = {
        body: "",
        post_id: this.props.post_id
    }

    handleChange = (e) => {
        const input = e.target.value

        this.setState({
            body: input
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.createComment(this.state)

        this.setState({
            body: "",
            post_id: ""
        })
    }

    render(){
        return(
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicBody">
                        <Form.Control onChange={this.handleChange} as="textarea" rows={3} placeholder="Enter comment." name="body" value={this.state.body} />
                    </Form.Group>
                    <Button variant="outline-primary" type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

export default connect (null, {createComment})(CommentForm)