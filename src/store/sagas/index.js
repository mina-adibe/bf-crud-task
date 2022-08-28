import { takeEvery } from "redux-saga/effects";
import * as types from "../types";
import { getPostsSaga, deletePostSaga, getPostDeatilsSaga, updatePostSaga } from "./SagaExample";

export function* watchAll() {
  yield takeEvery(types.FETCH_POSTS_REQUEST, getPostsSaga);
  yield takeEvery(types.DELETE_POST_REQUEST, deletePostSaga);
  yield takeEvery(types.FETCH_POST_REQUEST, getPostDeatilsSaga);
  yield takeEvery(types.EDIT_POST_REQUEST, updatePostSaga);
}
