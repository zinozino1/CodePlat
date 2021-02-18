import {
  takeLatest,
  call,
  put,
  delay,
  throttle,
  takeEvery,
} from "redux-saga/effects";
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
  LOAD_FORUM_POSTS_REQUEST,
  LOAD_FORUM_POSTS_SUCCESS,
  LOAD_FORUM_POSTS_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
  LIKE_COMMENT_REQUEST,
  LIKE_COMMENT_SUCCESS,
  LIKE_COMMENT_FAILURE,
  UNLIKE_COMMENT_REQUEST,
  UNLIKE_COMMENT_SUCCESS,
  UNLIKE_COMMENT_FAILURE,
  POST_UNSCRAP_SUCCESS,
  POST_UNSCRAP_FAILURE,
  POST_UNSCRAP_REQUEST,
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
  loadForumPosts,
  addComment,
  deletePost,
  deleteComment,
  deleteCommentWithChildren,
  upLike,
  unLike,
  postScrap,
  postUnScrap,
  // searchPosts,
  // filterSearch,
} from "../lib/api/post";

// saga

function* loadPostSaga(action) {
  try {
    const { postId } = action.payload;

    const res = yield call(loadPost, postId);
    //console.log(res);
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
  try {
    const res = yield call(loadPosts, action.payload);
    console.log(res);
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
    // yield delay(1000);
    const res = yield call(writePost, action.payload);
    // console.log(res);
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
    //console.log(action.payload);
    const res = yield call(postScrap, action.payload);
    //yield delay(1000);
    //console.log(action.payload);
    yield put({ type: POST_SCRAP_SUCCESS, scrap: res.data.scrap });
  } catch (error) {
    console.log(error);
    yield put({
      type: POST_SCRAP_FAILURE,
      error: error.response.data,
    });
  }
}

function* postUnScrapSaga(action) {
  try {
    //console.log(action.payload);
    yield call(postUnScrap, action.payload);
    //yield delay(1000);
    //console.log(action.payload);
    yield put({ type: POST_UNSCRAP_SUCCESS, scrapId: action.payload.id });
  } catch (error) {
    console.log(error);
    yield put({
      type: POST_UNSCRAP_FAILURE,
      error: error.response.data,
    });
  }
}

function* addCommentSaga(action) {
  try {
    // action.payload = postID

    //console.log(action.payload);
    const res = yield call(addComment, action.payload);
    // console.log(res);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      //post: res.data.post,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: ADD_COMMENT_FAILURE,
      //error: error.response.data,
    });
  }
}

function* loadForumPostsSaga(action) {
  try {
    const res = yield call(loadForumPosts, action.payload);

    yield put({
      type: LOAD_FORUM_POSTS_SUCCESS,
      forumPosts: res.data.posts,
      temporalPostsLength: res.data.postSize,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_FORUM_POSTS_FAILURE,
      //error: error.response.data,
    });
  }
}

function* deletePostSaga(action) {
  try {
    yield call(deletePost, action.payload);
    yield put({ type: DELETE_POST_SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({ type: DELETE_POST_FAILURE });
  }
}

function* deleteCommentSaga(action) {
  try {
    console.log(action.payload);
    if (action.payload.type === "children") {
      yield call(deleteCommentWithChildren, action.payload.id);
    } else {
      yield call(deleteComment, action.payload.id);
    }
    yield put({ type: DELETE_COMMENT_SUCCESS });
  } catch (error) {
    console.log(error);
    yield put({ type: DELETE_COMMENT_FAILURE });
  }
}

function* upLikePostSaga(action) {
  try {
    const res = yield call(upLike, action.payload);
    yield put({
      type: LIKE_POST_SUCCESS,
      user: action.payload.user,
      postId: action.payload.id,
      like: res.data.like,
    });
  } catch (error) {
    console.log(error);
    yield put({ type: LIKE_POST_FAILURE });
  }
}

function* unLikePostSaga(action) {
  try {
    yield call(unLike, action.payload);
    yield put({
      type: UNLIKE_POST_SUCCESS,
      user: action.payload.user,
      likeId: action.payload.id,
      postId: action.payload.id,
    });
  } catch (error) {
    console.log(error);
    yield put({ type: UNLIKE_POST_FAILURE });
  }
}

function* upLikeCommentSaga(action) {
  try {
    const res = yield call(upLike, action.payload);
    yield put({
      type: LIKE_COMMENT_SUCCESS,
      user: action.payload.user,
      commentId: action.payload.id,
      like: res.data.like,
    });
  } catch (error) {
    console.log(error);
    yield put({ type: LIKE_COMMENT_FAILURE });
  }
}

function* unLikeCommentSaga(action) {
  try {
    yield call(unLike, action.payload);
    yield put({
      type: UNLIKE_COMMENT_SUCCESS,
      user: action.payload.user,
      likeId: action.payload.id,
      commentId: action.payload.commentId,
    });
  } catch (error) {
    console.log(error);
    yield put({ type: UNLIKE_COMMENT_FAILURE });
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
  yield throttle(2000, WRITE_POST_REQUEST, writePostSaga);
  yield takeLatest(POST_SCRAP_REQUEST, postScrapSaga);
  yield takeLatest(POST_UNSCRAP_REQUEST, postUnScrapSaga);
  yield throttle(2000, ADD_COMMENT_REQUEST, addCommentSaga);
  yield takeLatest(LOAD_FORUM_POSTS_REQUEST, loadForumPostsSaga);
  yield takeLatest(DELETE_POST_REQUEST, deletePostSaga);
  yield takeEvery(DELETE_COMMENT_REQUEST, deleteCommentSaga);
  yield takeLatest(LIKE_POST_REQUEST, upLikePostSaga);
  yield takeLatest(UNLIKE_POST_REQUEST, unLikePostSaga);
  yield takeLatest(LIKE_COMMENT_REQUEST, upLikeCommentSaga);
  yield takeLatest(UNLIKE_COMMENT_REQUEST, unLikeCommentSaga);
  //yield takeLatest(SEARCH_POSTS_REQUEST, searchPostsSaga);
  // yield takeLatest(FILTER_SEARCH_REQUEST, filterSearchSaga);
}
