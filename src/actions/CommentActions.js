const url = "http://localhost:3001/comments"

export const loadComments = (comments) => ({type: 'LOAD_COMMENTS', payload: comments})

export const fetchComments = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            const data = resp.data
            const commentArr = []
            
            data.map(d => {
                return commentArr.push({...d.attributes, id: d.id})
            })
    
            dispatch(loadComments(commentArr))
        })
    }
}