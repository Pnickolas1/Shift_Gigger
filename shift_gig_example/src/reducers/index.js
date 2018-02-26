import {combineReducers} from 'redux'
import posts from "./sub_reducers/posts";
import categories from "./sub_reducers/categories";
import comments from "./sub_reducers/comments";


export default combineReducers({
  posts,
  categories,
  comments
})