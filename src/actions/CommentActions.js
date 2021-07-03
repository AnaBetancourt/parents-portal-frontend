const url = "http://localhost:3001/comments"

export const loadComments = (comments) => ({type: 'LOAD_COMMENTS', payload: comments})
export const addComment= (comment) => ({type: 'ADD_COMMENT', payload: comment})

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

export const createComment = (comment) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(comment)
        }

        fetch(url, configObj)
        .then(resp => resp.json())
        .then(resp => {
            const newComment = {id: parseInt(resp.data.id), ...resp.data.attributes}
            dispatch(addComment(newComment))
        })
    }
}