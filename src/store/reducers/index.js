import { combineReducers } from "redux";
import { loaderReducer } from "./loaderReducer";
import { notificationReducer } from "./notificationReducer";
import { postsReducer } from "./postsReducer";

export default combineReducers({
  posts: postsReducer,
  notification: notificationReducer,
  loader: loaderReducer,
});
