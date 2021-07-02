import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Comment from '../components/comments/Comment'
import CommentForm from '../components/comments/CommentForm'
import {connect} from 'react-redux'
import {fetchComments} from '../actions/CommentActions'

class CommentsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchComments()
    }

    renderComments(){
        return this.props.comments.map(c => {
            return <Comment
                key={c.id}
                id={c.id}
                body={c.body}
            />
        })
    }


    render(){
        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <CommentForm />
                        </Col>
                    </Row>
                    <Row>
                        {this.renderComments()}
                    </Row>
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    }
}

export default connect (mapStateToProps, {fetchComments})(CommentsContainer)