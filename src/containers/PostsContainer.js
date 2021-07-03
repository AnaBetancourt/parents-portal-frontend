import React from 'react' 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Post from '../components/posts/Post'
import PostForm from '../components/posts/PostForm'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/PostActions'

class PostsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchPosts()
    }

    renderPosts(){
        return this.props.posts.map(p => {
            return <Row key={p.id}><Post
                key={p.id}
                id={p.id}
                body={p.body}
            /></Row>
        })
    }


    render(){
        return(
            <>
                <Container>
                    <Row>
                        <Col>
                            <PostForm />
                        </Col>
                    </Row>
                    {this.renderPosts()}
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

export default connect (mapStateToProps, {fetchPosts})(PostsContainer)