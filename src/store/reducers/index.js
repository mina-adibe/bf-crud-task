import { combineReducers } from "redux";
import { loaderReducer } from "./loaderReducer";
import { postsReducer } from "./postsReducer";

export default combineReducers({
  posts: postsReducer,
  loader: loaderReducer,
});
