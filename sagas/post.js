import { takeLatest, call, put, delay, throttle } from "redux-saga/effects";
import {
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
    MAIN_LOAD_POSTS_REQUEST,
    MAIN_LOAD_POSTS_SUCCESS,
    MAIN_LOAD_POSTS_FAILURE,
    LOAD_POST_REQUEST,
    LOAD_POST_SUCCESS,
    LOAD_POST_FAILURE,
} from "../reducers/post";
import { dummyPostCreator } from "../lib/util/dummyCreator";

// saga

function* loadPostSaga(action) {
    try {
        // 서버에서 post하나 받아오면 post에 데이터 바로 넣기
        const { id, contentType } = action.payload;
        // yield call({id,...})
        yield delay(1000);
        yield put({
            type: LOAD_POST_SUCCESS,
            post: dummyPostCreator(contentType),
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: LOAD_POST_FAILURE,
            error: error.response.data,
        });
    }
}

function* loadPostsSaga(action) {
    try {
        yield delay(1000);
        // 수정 필요
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
    yield takeLatest(LOAD_POST_REQUEST, loadPostSaga);
}
