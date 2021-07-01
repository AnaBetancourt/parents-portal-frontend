import { combineReducers } from "redux"
import CommentsReducer from "./CommentsReducer"
import MeetupsReducer from "./MeetupsReducer"
import PostsReducer from "./PostsReducer"

const rootReducer = combineReducers({
    meetups: MeetupsReducer,
    posts: PostsReducer,
    comments: CommentsReducer
})

export default rootReducer