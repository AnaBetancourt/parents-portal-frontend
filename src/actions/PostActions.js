const url = "http://localhost:3001/posts"

export const loadPosts = (posts) => ({type: 'LOAD_POSTS', payload: posts})

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