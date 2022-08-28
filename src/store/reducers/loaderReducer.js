import { INITIAL_STATE } from "../initialState";
import * as types from "../types";

export const loaderReducer = (state = INITIAL_STATE.loader, action) => {
  switch (action.type) {
    case types.SET_LOADER:
      return {
        ...state,
        loader: action.payload,
      };

    default:
      return state;
  }
};
