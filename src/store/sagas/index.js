import { takeEvery } from "redux-saga/effects";
import * as types from "../types";
import { getPostsSaga, deletePostSaga, getPostDeatilsSaga, updatePostSaga } from "./SagaExample";

export function* watchAll() {
  yield takeEvery(types.FETCH_POSTS_REQUEST, getPostsSaga);
  yield takeEvery(types.DELETE_POST_REQUEST, deletePostSaga);
  yield takeEvery(types.FETCH_POST_REQUEST, getPostDeatilsSaga);
  yield takeEvery(types.EDIT_POST_REQUEST, updatePostSaga);
}

// export const GET_SUBSCRIBER = 'GET_SUBSCRIBER';
// export const SUBSCRIBER_RECEIVED = 'SUBSCRIBER_RECEIVED';
// export const SUBSCRIBER_REQUEST_FAILED = 'SUBSCRIBER_REQUEST_FAILED';

// export const UPDATE_SUBSCRIBER = 'UPDATE_SUBSCRIBER';
// export const UPDATE_SUBSCRIBER_SUCCESS = 'UPDATE_SUBSCRIBER_SUCCESS';
// export const UPDATE_SUBSCRIBER_FAILED = 'UPDATE_SUBSCRIBER_FAILED';

// export const CREATE_SUBSCRIBER = 'CREATE_SUBSCRIBER';
// export const CREATE_SUBSCRIBER_SUCCESS = 'CREATE_SUBSCRIBER_SUCCESS';
// export const CREATE_SUBSCRIBER_FAILED = 'CREATE_SUBSCRIBER_FAILED';

// } catch (error) {
//   yield put({ type: types.CREATE_SUBSCRIBER_FAILED, error });
// }
