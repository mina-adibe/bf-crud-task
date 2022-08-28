import { put, call } from "redux-saga/effects";
import { getData, deletePost, updatePost, getPostDeatils } from "../../network/apis";
import { getPosts, notificationSucceed } from "../actions";

export function* getPostsSaga() {
  try {
    const response = yield call(getData);
    yield put(getPosts(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* getPostDeatilsSaga() {
  try {
    const response = yield call(getPostDeatils);
    yield put(getPosts(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* deletePostSaga({ payload }) {
  try {
    yield call(deletePost, payload);
  } catch (error) {
    console.log(error);
  }
}

export function* updatePostSaga({ payload }) {
  try {
    yield call(updatePost, payload?.id);
  } catch (error) {
    console.log(error);
  }
}
