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

function* loadPostsSaga(action) {
    try {
        yield delay(1000);
        yield put({ type: LOAD_POSTS_SUCCESS, contentType: action.payload });
    } catch (error) {
        console.log(error);
        yield put({
            type: LOAD_POSTS_FAILURE,
            contentType: action.payload,
            error: error.response.data,
        });
    }
}

function* mainLoadPostsSaga() {
    try {
        yield delay(1000);
        yield put({ type: MAIN_LOAD_POSTS_SUCCESS });
    } catch (error) {
        console.log(error);
        yield put({
            type: MAIN_LOAD_POSTS_FAILURE,
            error: error.response.data,
        });
    }
}

// watcher

export function* watchPost() {
    yield takeLatest(MAIN_LOAD_POSTS_REQUEST, mainLoadPostsSaga);
    yield takeLatest(LOAD_POSTS_REQUEST, loadPostsSaga);
}
