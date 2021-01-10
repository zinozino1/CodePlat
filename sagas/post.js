import { takeLatest, call, put, delay, throttle } from "redux-saga/effects";
import {
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
    MAIN_LOAD_POSTS_REQUEST,
    MAIN_LOAD_POSTS_SUCCESS,
    MAIN_LOAD_POSTS_FAILURE,
} from "../reducers/post";
// saga

function* loadPostsSaga() {}

function* mainLoadPostsSaga() {
    try {
        yield delay(1000);
        yield put({ type: MAIN_LOAD_POSTS_SUCCESS });
    } catch (error) {
        console.log(error);
        yield put({ type: MAIN_LOAD_POSTS_FAILURE });
    }
}

// watcher

export function* watchPost() {
    yield takeLatest(MAIN_LOAD_POSTS_REQUEST, mainLoadPostsSaga);
}
