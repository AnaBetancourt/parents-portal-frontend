import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Comment from '../components/comments/Comment'
import {connect} from 'react-redux'
import {fetchComments} from '../actions/CommentActions'

class CommentsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchComments()
    }

    renderComments(){
        return this.props.comments.map(c => {
            if(c.post_id === parseInt(this.props.posting)){
                return <Row key={c.id}>
                    <Col key={c.id}>
                        <Comment
                            key={c.id}
                            id={c.id}
                            body={c.body}
                        />
                    </Col>
                </Row>
            }
        })
    }


    render(){
        return(
            <>
                <Container>
                    <Row>
                        <h6>Comments:</h6>
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