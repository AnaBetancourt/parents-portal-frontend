const url = "http://localhost:3001/posts"

export const loadPosts = (posts) => ({type: 'LOAD_POSTS', payload: posts})
export const addPost= (post) => ({type: 'ADD_POST', payload: post})

export const fetchPosts = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            const data = resp.data
            const postArr = []
            

            data.map(d => {
                return postArr.push({...d.attributes, id: d.id})
            })
    
            dispatch(loadPosts(postArr))
        })
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(post)
        }

        fetch(url, configObj)
        .then(resp => resp.json())
        .then(resp => {
            const newPost = {id: parseInt(resp.data.id), ...resp.data.attributes}
            dispatch(addPost(newPost))
        })
    }
}