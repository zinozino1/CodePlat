import { takeLatest, call, put, delay, throttle } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../reducers/user";
import { register } from "../lib/api/user";

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

function* registerSaga(action) {
  // 제거예정
  try {
    yield call(register, action.data);
    yield put({ type: REGISTER_SUCCESS });
  } catch (error) {
    yield put({ type: REGISTER_FAILURE, error: error.response.data });
  }
}

// watcher

export function* watchUser() {
  yield takeLatest(LOG_IN_REQUEST, loginSaga);
  yield takeLatest(LOG_OUT_REQUEST, logoutSaga);
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}
