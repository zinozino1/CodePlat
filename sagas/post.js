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
  WRITE_POST_REQUEST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
  POST_SCRAP_REQUEST,
  POST_SCRAP_SUCCESS,
  POST_SCRAP_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  // SEARCH_POSTS_REQUEST,
  // SEARCH_POSTS_SUCCESS,
  // SEARCH_POSTS_FAILURE,
  // FILTER_SEARCH_REQUEST,
  // FILTER_SEARCH_SUCCESS,
  // FILTER_SEARCH_FAILURE,
} from "../reducers/post";
import { dummyPostCreator } from "../lib/util/dummyCreator";
import {
  mainLoadPosts,
  writePost,
  loadPost,
  loadPosts,
  // searchPosts,
  // filterSearch,
} from "../lib/api/post";

// saga

function* loadPostSaga(action) {
  try {
    const { postId } = action.payload;

    const res = yield call(loadPost, postId);
    yield put({
      type: LOAD_POST_SUCCESS,
      post: res.data.post,
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
  // 쿼리값에 따라 요청
  try {
    // yield delay(1000);
    // 수정 필요
    // action.payload.contentType, action.payload.query가 필요
    // term도 필요
    // forum일 경우 sortingBy 쿼리 필요 -> study, project와 분기 필요
    const res = yield call(loadPosts, action.payload);
    //console.log(res);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      contentType: action.payload.type,
      data: res.data.posts,
      temporalPostsLength: res.data.postSize,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_POSTS_FAILURE,
      contentType: action.payload,
      error: error.response.data,
    });
  }
}

function* mainLoadPostsSaga(action) {
  try {
    const res = yield call(mainLoadPosts);
    //console.log(res);
    const { study, project, forum } = res.data.posts;
    yield put({
      type: MAIN_LOAD_POSTS_SUCCESS,
      study,
      project,
      forum,
    });
    //yield put({ type: MAIN_LOAD_POSTS_SUCCESS });
    //yield delay(1000);
  } catch (error) {
    console.log(error);
    yield put({
      type: MAIN_LOAD_POSTS_FAILURE,
      error: error.response.data,
    });
  }
}

function* writePostSaga(action) {
  try {
    //yield delay(1000);
    const res = yield call(writePost, action.payload);
    //console.log(res);
    yield put({ type: WRITE_POST_SUCCESS });
    const post = res.data.post;
    window.location.href = `http://localhost:3000/articles/${post.type}/${post._id}`;
  } catch (error) {
    console.log(error);
    yield put({
      type: WRITE_POST_FAILURE,
      error: error.response.data,
    });
  }
}

function* postScrapSaga(action) {
  try {
    console.log(action.payload);
    yield delay(1000);
    yield put({ type: POST_SCRAP_SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({
      type: POST_SCRAP_FAILURE,
      error: error.response.data,
    });
  }
}

function* addCommentSaga(action) {
  try {
    // action.payload = postID

    //console.log(action.payload);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      content: action.payload.content,
      postId: action.payload.post.id,
      writer: action.payload.writer,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: ADD_COMMENT_FAILURE,
      //error: error.response.data,
    });
  }
}

// function* searchPostsSaga(action) {
//   try {
//     // action.payload = postID

//     const res = yield call(searchPosts, action.payload);
//     yield put({
//       type: SEARCH_POSTS_SUCCESS,
//       contentType: action.payload.type,
//       posts: res.data.posts,
//     });
//   } catch (error) {
//     console.log(error);
//     yield put({
//       type: SEARCH_POSTS_FAILURE,
//       //error: error.response.data,
//     });
//   }
// }

// function* filterSearchSaga(action) {
//   try {
//     // action.payload = postID

//     const res = yield call(filterSearch, action.payload);
//     yield put({
//       type: FILTER_SEARCH_SUCCESS,
//       contentType: action.payload.type,
//       posts: res.data.posts,
//     });
//   } catch (error) {
//     console.log(error);
//     yield put({
//       type: FILTER_SEARCH_FAILURE,
//       //error: error.response.data,
//     });
//   }
// }

// watcher

export function* watchPost() {
  yield takeLatest(MAIN_LOAD_POSTS_REQUEST, mainLoadPostsSaga);
  yield takeLatest(LOAD_POSTS_REQUEST, loadPostsSaga);
  yield takeLatest(LOAD_POST_REQUEST, loadPostSaga);
  yield takeLatest(WRITE_POST_REQUEST, writePostSaga);
  yield takeLatest(POST_SCRAP_REQUEST, postScrapSaga);
  yield takeLatest(ADD_COMMENT_REQUEST, addCommentSaga);
  //yield takeLatest(SEARCH_POSTS_REQUEST, searchPostsSaga);
  // yield takeLatest(FILTER_SEARCH_REQUEST, filterSearchSaga);
}
