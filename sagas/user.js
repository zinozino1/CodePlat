import { takeLatest, call, put, delay, throttle } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
} from "../reducers/user";

// saga

function* loginSaga(action) {
  try {
    yield delay(1000);
    yield put({ type: LOG_IN_SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({ type: LOG_IN_FAILURE, error: error.response.data });
  }
}

function* logoutSaga(action) {
  try {
    localStorage.removeItem("user");
    yield delay(1000);
    yield put({ type: LOG_OUT_SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({ type: LOG_OUT_FAILURE, error: error.response.data });
  }
}

// watcher

export function* watchUser() {
  yield takeLatest(LOG_IN_REQUEST, loginSaga);
  yield takeLatest(LOG_OUT_REQUEST, logoutSaga);
}
