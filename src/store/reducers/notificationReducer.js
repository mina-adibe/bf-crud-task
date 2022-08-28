import { INITIAL_STATE } from "../initialState";
import * as types from "../types";

export const notificationReducer = (state = INITIAL_STATE.notification, action) => {
  switch (action.type) {
    case types.NOTIFICATION_REQUEST_SUCCEED: {
      return {
        ...state,
        issucceed: true,
        message: action.message,
      };
    }

    case types.NOTIFICATION_REQUEST_FAIL: {
      return {
        ...state,
        issucceed: false,
        message: action.message,
      };
    }

    default: {
      return state;
    }
  }
};
