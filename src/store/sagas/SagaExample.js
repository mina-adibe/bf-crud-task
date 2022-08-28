import { put, call } from "redux-saga/effects";
import { getData, deletePost, updatePost, getPostDeatils } from "../../network/apis";
import { getPosts, notificationFail, notificationSucceed, toggleSnackbarOpen } from "../actions";

export function* getPostsSaga() {
  try {
    const response = yield call(getData);
    yield put(getPosts(response.data));
  } catch (error) {
    console.log(error);
    yield put(notificationFail(`error: ${error.message}`));
  }
}

export function* getPostDeatilsSaga() {
  try {
    const response = yield call(getPostDeatils);
    yield put(getPosts(response.data));
  } catch (error) {
    console.log(error);
    yield put(notificationFail(`error: ${error.message}`));
  }
}

export function* deletePostSaga({ payload }) {
  try {
    yield call(deletePost, payload);
    yield put(notificationSucceed("one recorde deleted "));
  } catch (error) {
    console.log(error);
    yield put(notificationFail(`error: ${error.message}`));
  }
}

export function* updatePostSaga({ payload }) {
  try {
    yield call(updatePost, payload?.id);
    yield put(notificationSucceed("one recorde updated "));
  } catch (error) {
    console.log(error);
    yield put(notificationFail(`error: ${error.message}`));
  }
}
