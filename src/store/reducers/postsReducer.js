import { INITIAL_STATE } from "../initialState";
import * as types from "../types";

export const postsReducer = (state = INITIAL_STATE.posts, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return [...state, ...action.payload];

    case types.DELETE_POST_REQUEST:
      return state.filter((post) => post.id !== action.payload);

    case types.EDIT_POST_REQUEST:
      return state.map((post) => (post.id === action.payload.id ? action.payload : post));

    default:
      return state;
  }
};
