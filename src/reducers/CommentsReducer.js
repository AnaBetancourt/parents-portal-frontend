export default function CommentsReducer(state={comments: []}, action){
    switch(action.type){
        case 'LOAD_COMMENTS':
            return {...state, comments: action.payload}
        case 'ADD_COMMENT':
            return {comments: [...state.comments, action.payload]}
        default: 
            return state
    }
}