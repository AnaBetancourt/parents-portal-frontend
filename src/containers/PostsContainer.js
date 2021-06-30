import React from 'react' 
import Post from '../components/posts/Post'
import PostForm from '../components/posts/PostForm'

class PostsContainer extends React.Component{
    render(){
        return(
            <div>
                <PostForm />
                <Post />
            </div>
        )
    }
}

export default PostsContainer