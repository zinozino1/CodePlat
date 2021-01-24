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
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  SET_USER_FAILURE,
} from "../reducers/user";
import { register, login, setUser, logout } from "../lib/api/user";

// saga

function* setUserSaga(action) {
  try {
    const res = yield call(setUser);
    console.log(res);
    yield put({ type: SET_USER_SUCCESS, user: res.data.user });
  } catch (error) {
    console.log(error);
    yield put({ type: SET_USER_FAILURE });
  }
}

function* loginSaga(action) {
  try {
    const res = yield call(login, action.payload);
    yield put({ type: LOG_IN_SUCCESS, user: res.data.user });
  } catch (error) {
    yield put({ type: LOG_IN_FAILURE, error: error.response.data });
  }
}

function* logoutSaga(action) {
  try {
    yield call(logout);
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
  yield takeLatest(SET_USER_REQUEST, setUserSaga);
  yield takeLatest(LOG_IN_REQUEST, loginSaga);
  yield takeLatest(LOG_OUT_REQUEST, logoutSaga);
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}
