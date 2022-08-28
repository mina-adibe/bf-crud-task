import * as types from "../types";

// get posts
export const getPostsRequest = () => ({
  type: types.FETCH_POSTS_REQUEST,
});

export const getPosts = (data) => ({
  type: types.FETCH_POSTS,
  payload: data,
});

// get post details
export const getPostRequest = () => ({
  type: types.FETCH_POST_REQUEST,
});

export const getPost = (data) => ({
  type: types.FETCH_POST,
  payload: data,
});

// delete post
export const deletePostRequest = (data) => ({
  type: types.DELETE_POST_REQUEST,
  payload: data,
});

//update post
export const editPostRequest = (data) => ({
  type: types.EDIT_POST_REQUEST,
  payload: data,
});

export const notificationSucceed = (message) => ({
  type: types.NOTIFICATION_REQUEST_SUCCEED,
  message,
});

export const notificationFail = () => ({
  type: types.NOTIFICATION_REQUEST_FAIL,
});

export const setLoader = (payload) => ({
  type: types.SET_LOADER,
  payload,
});
