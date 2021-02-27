module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNMu");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "1stS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mainLoadPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return writePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loadPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return loadPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loadForumPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return postScrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return postUnScrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteCommentWithChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return upLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return unLike; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6vkq");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 예시
 // import qs from "qs";
// export const writePost = ({ title, body, tags }) =>
//   client.post("/api/posts", { title, body, tags });
// export const getPost = (id) => client.get(`/api/posts/${id}`);
// export const getPosts = ({ page, username, tag }) => {
//   const query = qs.stringify({ page, username, tag });
//   return client.get(`/api/posts?${query}`);
// };

const mainLoadPosts = () => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(`/api/posts`);
const writePost = data => {
  const config = {
    headers: {
      Accept: "application/json",
      enctype: "multipart/form-data"
    }
  };
  return _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/api/posts`, data, config);
}; // export const editPost = (data) => client.put(`api/post/update`, { ...data });

const loadPost = postId => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(`/api/posts/${postId}`);
const loadPosts = data => {
  const filteredTechStack = data.techStack.map((v, i) => {
    if (v === "C++") {
      return "C%2B%2B";
    }

    if (v === "C#") {
      return "C%23";
    } else {
      return v;
    }
  });
  return _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(`/api/posts/getPosts?type=${data.type}&techStack=${filteredTechStack.toString()}&skip=${data.skip}&term=${data.term}&location=${data.location}`);
};
const loadForumPosts = data => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(`/api/posts/getForum?type=${data.type}&term=${data.term}&skip=${data.skip}&field=${data.field}`);
const postScrap = data => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/api/scraps`, _objectSpread({}, data));
const postUnScrap = data => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].delete(`/api/scraps/${data.id}`); // -> deprecated

const addComment = data => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/api/comments`, _objectSpread({}, data));
const deletePost = postId => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].delete(`/api/posts/${postId}`); // -> deprecated

const deleteCommentWithChildren = commentId => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].put(`/api/comments/parentDelete`, {
  id: commentId
}); // -> deprecated

const deleteComment = commentId => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].delete(`/api/comments/${commentId}`);
const upLike = data => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post(`/api/likes`, {
  type: data.type,
  id: data.id
});
const unLike = data => _client__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].delete(`/api/likes/${data.id}`); // export const profileEdit = (data) => {
//   return client.patch(`/api/users`, { ...data });
// };
// export const searchPosts = (data) =>
//   client.post(`/api/post/filter`, { ...data });
// export const filterSearch = (data) =>
//   client.post(`/api/post/filter`, { ...data });

/***/ }),

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "6vkq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "http://localhost:4000"; // 서버 URL 정의

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true; // 클라에서 서버로 쿠키 전달
//axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
/* harmony default export */ __webpack_exports__["a"] = (client);

/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var reducers_post = __webpack_require__("p+NB");

// EXTERNAL MODULE: ./reducers/skill.js
var skill = __webpack_require__("uoZI");

// EXTERNAL MODULE: ./reducers/chat.js
var chat = __webpack_require__("DEwa");

// CONCATENATED MODULE: ./reducers/index.js





 // const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         return action.payload;
//       default:
//         return state;
//     }
//   },
//   user,
//   post,
//   skill,
// });

const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      return action.payload;

    default:
      {
        const combineReducer = Object(external_redux_["combineReducers"])({
          user: user["m" /* default */],
          post: reducers_post["R" /* default */],
          skill: skill["a" /* default */],
          chat: chat["a" /* default */]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./lib/api/client.js
var client = __webpack_require__("6vkq");

// CONCATENATED MODULE: ./lib/api/user.js

const register = ({
  useremail,
  confirmUseremail,
  password,
  confirmpassword,
  usernickname,
  userSkill,
  userGithub
  /*이미지*/

}) => client["a" /* default */].post("/api/join", {
  useremail,
  confirmUseremail,
  password,
  confirmpassword,
  usernickname,
  userSkill,
  userGithub //이미지

});
const setUser = () => client["a" /* default */].get(`/api/setUser`);
const login = ({
  email,
  password
}) => client["a" /* default */].post("/api/login", {
  email,
  password
});
const socialLogin = type => client["a" /* default */].get(`/api/auth/${type}`); // export const check = () => client.get("/api/auth/check");

const logout = id => client["a" /* default */].get(`/api/logout`);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/user.js



 // saga

function* setUserSaga(action) {
  try {
    const res = yield Object(effects_["call"])(setUser);

    if (!res.data.user) {
      yield Object(effects_["put"])({
        type: user["l" /* SET_USER_SUCCESS */],
        user: null
      });
    } else {
      yield Object(effects_["put"])({
        type: user["l" /* SET_USER_SUCCESS */],
        user: res.data.user
      });
    } //yield put({ type: SET_USER_SUCCESS, user: res.data.user });

  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: user["j" /* SET_USER_FAILURE */]
    });
  }
}

function* loginSaga(action) {
  try {
    const res = yield Object(effects_["call"])(login, action.payload);
    yield Object(effects_["put"])({
      type: user["c" /* LOG_IN_SUCCESS */],
      user: res.data.user
    });
  } catch (error) {
    console.log(error);
    alert("이메일 인증을 완료해주세요.");
    external_axios_default.a.post(`/api/mailAuth`, {
      email: action.payload.email
    }).then(res => {
      alert("인증 링크가 포함된 이메일을 다시 보내드렸습니다. 확인해주세요!");
    }).catch(err => {
      console.log(err);
    });
    yield Object(effects_["put"])({
      type: user["a" /* LOG_IN_FAILURE */],
      error: error.response.data
    });
  }
}

function* logoutSaga(action) {
  try {
    yield Object(effects_["call"])(logout);
    yield Object(effects_["put"])({
      type: user["f" /* LOG_OUT_SUCCESS */]
    });
    window.location.href = `http://localhost:3000`;
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: user["d" /* LOG_OUT_FAILURE */],
      error: error.response.data
    });
  }
}

function* registerSaga(action) {
  // 제거예정
  try {
    yield Object(effects_["call"])(register, action.data);
    yield Object(effects_["put"])({
      type: user["i" /* REGISTER_SUCCESS */]
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["g" /* REGISTER_FAILURE */],
      error: error.response.data
    });
  }
} // watcher


function* watchUser() {
  yield Object(effects_["takeLatest"])(user["k" /* SET_USER_REQUEST */], setUserSaga);
  yield Object(effects_["takeLatest"])(user["b" /* LOG_IN_REQUEST */], loginSaga);
  yield Object(effects_["takeLatest"])(user["e" /* LOG_OUT_REQUEST */], logoutSaga);
  yield Object(effects_["takeLatest"])(user["h" /* REGISTER_REQUEST */], registerSaga);
}
// EXTERNAL MODULE: ./lib/util/dummyCreator.js
var dummyCreator = __webpack_require__("zRVR");

// EXTERNAL MODULE: ./lib/api/post.js
var api_post = __webpack_require__("1stS");

// CONCATENATED MODULE: ./sagas/post.js



 // saga

function* loadPostSaga(action) {
  try {
    const {
      postId
    } = action.payload;
    const res = yield Object(effects_["call"])(api_post["f" /* loadPost */], postId); //console.log(res);

    yield Object(effects_["put"])({
      type: reducers_post["x" /* LOAD_POST_SUCCESS */],
      post: res.data.post
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["v" /* LOAD_POST_FAILURE */],
      error: error.response.data
    });
  }
}

function* loadPostsSaga(action) {
  try {
    const res = yield Object(effects_["call"])(api_post["g" /* loadPosts */], action.payload);
    console.log(res);
    yield Object(effects_["put"])({
      type: reducers_post["u" /* LOAD_POSTS_SUCCESS */],
      contentType: action.payload.type,
      data: res.data.posts,
      temporalPostsLength: res.data.postSize
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["s" /* LOAD_POSTS_FAILURE */],
      contentType: action.payload //error: error.response,

    });
  }
}

function* mainLoadPostsSaga(action) {
  try {
    const res = yield Object(effects_["call"])(api_post["h" /* mainLoadPosts */]); //console.log(res);

    const {
      study,
      project,
      forum
    } = res.data.posts;
    yield Object(effects_["put"])({
      type: reducers_post["A" /* MAIN_LOAD_POSTS_SUCCESS */],
      study,
      project,
      forum
    }); //yield put({ type: MAIN_LOAD_POSTS_SUCCESS });
    //yield delay(1000);
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["y" /* MAIN_LOAD_POSTS_FAILURE */],
      error: error.response.data
    });
  }
}

function* writePostSaga(action) {
  try {
    // yield delay(1000);
    const res = yield Object(effects_["call"])(api_post["m" /* writePost */], action.payload); // console.log(res);

    yield Object(effects_["put"])({
      type: reducers_post["P" /* WRITE_POST_SUCCESS */]
    });
    const post = res.data.post;
    window.location.href = `http://localhost:3000/articles/${post.type}/${post._id}`;
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["N" /* WRITE_POST_FAILURE */],
      error: error.response.data
    });
  }
}

function* postScrapSaga(action) {
  try {
    //console.log(action.payload);
    const res = yield Object(effects_["call"])(api_post["i" /* postScrap */], action.payload); //yield delay(1000);
    //console.log(action.payload);

    yield Object(effects_["put"])({
      type: reducers_post["D" /* POST_SCRAP_SUCCESS */],
      scrap: res.data.scrap
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["B" /* POST_SCRAP_FAILURE */],
      error: error.response.data
    });
  }
}

function* postUnScrapSaga(action) {
  try {
    //console.log(action.payload);
    yield Object(effects_["call"])(api_post["j" /* postUnScrap */], action.payload); //yield delay(1000);
    //console.log(action.payload);

    yield Object(effects_["put"])({
      type: reducers_post["G" /* POST_UNSCRAP_SUCCESS */],
      scrapId: action.payload.id
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["E" /* POST_UNSCRAP_FAILURE */],
      error: error.response.data
    });
  }
}

function* addCommentSaga(action) {
  try {
    // action.payload = postID
    //console.log(action.payload);
    const res = yield Object(effects_["call"])(api_post["a" /* addComment */], action.payload); // console.log(res);

    yield Object(effects_["put"])({
      type: reducers_post["c" /* ADD_COMMENT_SUCCESS */] //post: res.data.post,

    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["a" /* ADD_COMMENT_FAILURE */] //error: error.response.data,

    });
  }
}

function* loadForumPostsSaga(action) {
  try {
    const res = yield Object(effects_["call"])(api_post["e" /* loadForumPosts */], action.payload);
    console.log(res);
    yield Object(effects_["put"])({
      type: reducers_post["r" /* LOAD_FORUM_POSTS_SUCCESS */],
      forumPosts: res.data.posts,
      temporalPostsLength: res.data.postSize
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["p" /* LOAD_FORUM_POSTS_FAILURE */],
      error: error.response
    });
  }
}

function* deletePostSaga(action) {
  try {
    yield Object(effects_["call"])(api_post["d" /* deletePost */], action.payload);
    yield Object(effects_["put"])({
      type: reducers_post["i" /* DELETE_POST_SUCCESS */]
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["g" /* DELETE_POST_FAILURE */]
    });
  }
}

function* deleteCommentSaga(action) {
  try {
    console.log(action.payload);

    if (action.payload.type === "children") {
      yield Object(effects_["call"])(api_post["c" /* deleteCommentWithChildren */], action.payload.id);
    } else {
      yield Object(effects_["call"])(api_post["b" /* deleteComment */], action.payload.id);
    }

    yield Object(effects_["put"])({
      type: reducers_post["f" /* DELETE_COMMENT_SUCCESS */]
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["d" /* DELETE_COMMENT_FAILURE */]
    });
  }
}

function* upLikePostSaga(action) {
  try {
    const res = yield Object(effects_["call"])(api_post["l" /* upLike */], action.payload);
    yield Object(effects_["put"])({
      type: reducers_post["o" /* LIKE_POST_SUCCESS */],
      user: action.payload.user,
      postId: action.payload.id,
      like: res.data.like
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["m" /* LIKE_POST_FAILURE */]
    });
  }
}

function* unLikePostSaga(action) {
  try {
    yield Object(effects_["call"])(api_post["k" /* unLike */], action.payload);
    yield Object(effects_["put"])({
      type: reducers_post["M" /* UNLIKE_POST_SUCCESS */],
      user: action.payload.user,
      likeId: action.payload.id,
      postId: action.payload.id
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["K" /* UNLIKE_POST_FAILURE */]
    });
  }
}

function* upLikeCommentSaga(action) {
  try {
    const res = yield Object(effects_["call"])(api_post["l" /* upLike */], action.payload);
    yield Object(effects_["put"])({
      type: reducers_post["l" /* LIKE_COMMENT_SUCCESS */],
      user: action.payload.user,
      commentId: action.payload.id,
      like: res.data.like
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["j" /* LIKE_COMMENT_FAILURE */]
    });
  }
}

function* unLikeCommentSaga(action) {
  try {
    yield Object(effects_["call"])(api_post["k" /* unLike */], action.payload);
    yield Object(effects_["put"])({
      type: reducers_post["J" /* UNLIKE_COMMENT_SUCCESS */],
      user: action.payload.user,
      likeId: action.payload.id,
      commentId: action.payload.commentId
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: reducers_post["H" /* UNLIKE_COMMENT_FAILURE */]
    });
  }
} // function* searchPostsSaga(action) {
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


function* watchPost() {
  yield Object(effects_["takeLatest"])(reducers_post["z" /* MAIN_LOAD_POSTS_REQUEST */], mainLoadPostsSaga);
  yield Object(effects_["takeLatest"])(reducers_post["t" /* LOAD_POSTS_REQUEST */], loadPostsSaga);
  yield Object(effects_["takeLatest"])(reducers_post["w" /* LOAD_POST_REQUEST */], loadPostSaga);
  yield Object(effects_["throttle"])(2000, reducers_post["O" /* WRITE_POST_REQUEST */], writePostSaga);
  yield Object(effects_["takeLatest"])(reducers_post["C" /* POST_SCRAP_REQUEST */], postScrapSaga);
  yield Object(effects_["takeLatest"])(reducers_post["F" /* POST_UNSCRAP_REQUEST */], postUnScrapSaga);
  yield Object(effects_["throttle"])(2000, reducers_post["b" /* ADD_COMMENT_REQUEST */], addCommentSaga);
  yield Object(effects_["takeLatest"])(reducers_post["q" /* LOAD_FORUM_POSTS_REQUEST */], loadForumPostsSaga);
  yield Object(effects_["takeLatest"])(reducers_post["h" /* DELETE_POST_REQUEST */], deletePostSaga);
  yield Object(effects_["takeEvery"])(reducers_post["e" /* DELETE_COMMENT_REQUEST */], deleteCommentSaga);
  yield Object(effects_["takeLatest"])(reducers_post["n" /* LIKE_POST_REQUEST */], upLikePostSaga);
  yield Object(effects_["takeLatest"])(reducers_post["L" /* UNLIKE_POST_REQUEST */], unLikePostSaga);
  yield Object(effects_["takeLatest"])(reducers_post["k" /* LIKE_COMMENT_REQUEST */], upLikeCommentSaga);
  yield Object(effects_["takeLatest"])(reducers_post["I" /* UNLIKE_COMMENT_REQUEST */], unLikeCommentSaga); //yield takeLatest(SEARCH_POSTS_REQUEST, searchPostsSaga);
  // yield takeLatest(FILTER_SEARCH_REQUEST, filterSearchSaga);
}
// CONCATENATED MODULE: ./sagas/index.js




function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchUser), Object(effects_["fork"])(watchPost)]);
}

/* harmony default export */ var sagas = (rootSaga);
// CONCATENATED MODULE: ./store/configureStore.js







const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(sagas);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "DEwa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SET_CURRENT_CHAT_ROOM */
/* unused harmony export INITIALIZE_CHAT_ROOM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCurrentChatRoomAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initializeChatRoomAction; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // initial state

const initialState = {
  currentChatRoom: null
}; // action type

const SET_CURRENT_CHAT_ROOM = "chat/SET_CURRENT_CHAT_ROOM";
const INITIALIZE_CHAT_ROOM = "chat/INITIALIZE_CHAT_ROOM"; // action creator

const setCurrentChatRoomAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_CURRENT_CHAT_ROOM, data => data);
const initializeChatRoomAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(INITIALIZE_CHAT_ROOM); // reducer

const chatReducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [SET_CURRENT_CHAT_ROOM]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    currentChatRoom: action.payload
  }),
  [INITIALIZE_CHAT_ROOM]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    currentChatRoom: null
  })
}, initialState);
/* harmony default export */ __webpack_exports__["a"] = (chatReducer);

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Ktyj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Mn+7");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ha8t");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);




var firebaseConfig = {
  apiKey: "AIzaSyCXSgDJHxhc7C7i5xxUghDhP4dwkNvdvHU",
  authDomain: "project-for-developer.firebaseapp.com",
  databaseURL: "https://project-for-developer-default-rtdb.firebaseio.com",
  projectId: "project-for-developer",
  storageBucket: "project-for-developer.appspot.com",
  messagingSenderId: "779772457500",
  appId: "1:779772457500:web:7c2e6be322d9dac1c4a5d9",
  measurementId: "G-MJ3SQW1H2S"
}; // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
} else {
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(); // if already initialized, use that one
} // firebase.analytics();


/* harmony default export */ __webpack_exports__["a"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getMe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SET_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SET_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REGISTER_FAILURE; });
/* unused harmony export SET_CURRENT_OPPONENT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return setUserRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return logoutRequestAction; });
/* unused harmony export registerRequestAction */
/* unused harmony export setCurrentOpponentRequestAction */
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_util_dummyCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zRVR");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // initial state

const initialState = {
  me: null,
  setUserLoading: false,
  setUserDone: false,
  setUserFalse: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  registerLoading: false,
  registerSuccess: false,
  registerFailure: null
}; // export me

const getMe = () => {
  if (!initialState.me) {
    return null;
  } else {
    console.log(_objectSpread({}, initialState.me));
    return _objectSpread({}, initialState.me);
  }
}; // action type

const SET_USER_REQUEST = "user/SET_USER_REQUEST";
const SET_USER_SUCCESS = "user/SET_USER_SUCCESS";
const SET_USER_FAILURE = "user/SET_USER_FAILURE";
const LOG_IN_REQUEST = "user/LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "user/LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "user/LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "user/LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "user/LOG_OUT_FAILURE";
const REGISTER_REQUEST = "user/REGISTER_REQUEST"; // 제거예정

const REGISTER_SUCCESS = "user/REGISTER_SUCCESS";
const REGISTER_FAILURE = "user/REGISTER_FAILURE";
const SET_CURRENT_OPPONENT = "user/SET_CURRENT_OPPONENT"; // action creator

const setUserRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_USER_REQUEST, data => data);
const loginRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOG_IN_REQUEST, data => data);
const logoutRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOG_OUT_REQUEST);
const registerRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(REGISTER_REQUEST, data => data);
const setCurrentOpponentRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_CURRENT_OPPONENT, data => data); // reducer

const userReducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [SET_USER_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    setUserLoading: true,
    setUserDone: false,
    setUserFalse: null
  }),
  [SET_USER_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    setUserLoading: false,
    setUserDone: true,
    setUserFalse: null,
    me: action.user
  }),
  [SET_USER_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    setUserLoading: false,
    setUserDone: false,
    setUserFalse: null
  }),
  [LOG_IN_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loginLoading: true,
    loginDone: false,
    loginError: null
  }),
  [LOG_IN_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loginLoading: false,
    loginDone: true,
    loginError: null,
    me: action.user
  }),
  [LOG_IN_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loginLoading: false,
    loginDone: false,
    loginError: action.error
  }),
  [LOG_OUT_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    logoutLoading: true,
    logoutDone: false,
    logoutError: null
  }),
  [LOG_OUT_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    logoutLoading: false,
    logoutDone: true,
    logoutError: null,
    me: null
  }),
  [LOG_OUT_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    logoutLoading: false,
    logoutDone: false,
    logoutError: action.error
  }),
  [REGISTER_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    registerLoading: true,
    registerSuccess: false,
    registerFailure: null
  }),
  [REGISTER_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    registerLoading: false,
    registerSuccess: true,
    registerFailure: null
  }),
  [REGISTER_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    registerLoading: false,
    registerSuccess: false,
    registerFailure: null
  }),
  [SET_CURRENT_OPPONENT]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    me: _objectSpread(_objectSpread({}, state.me), {}, {
      opponent: action.payload.users.filter((v, i) => {
        if (v.nickname !== state.me.nickname) {
          return v;
        }
      })[0].nickname
    })
  })
}, initialState);
/* harmony default export */ __webpack_exports__["m"] = (userReducer);

/***/ }),

/***/ "MCK1":
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "Mn+7":
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "YNMu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AQn3");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pEZS");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("LAVF");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("1fKG");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Ktyj");














const App = ({
  Component
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.user); // useEffect(() => {
  //   dispatch(setUserRequestAction());
  // }, []);
  // useEffect(async () => {
  //   if (me) {
  //     await firebase.auth().signInWithEmailAndPassword(me.email, me.email);
  //     console.log("firebase 로그인 성공");
  //   }
  //   // firebase.auth().onAuthStateChanged((user) => {
  //   //   console.log("firebase 새로 생성된 사용자 : ", user);
  //   // });
  //   let user = await firebase.auth().currentUser;
  //   console.log("firebase 로그인된 user : ", user);
  // }, [me]);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "CodePlat"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, {})]
  });
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   async (context) => {
//     const cookie = context.req ? context.req.headers.cookie : "";
//     axios.defaults.headers.Cookie = "";
//     if (context.req && cookie) {
//       axios.defaults.headers.Cookie = cookie;
//     }
//     context.store.dispatch(setUserRequestAction());
//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise();
//   },
// );
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(App)));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INITIALIZE_POST */
/* unused harmony export INITIALIZE_POSTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return MAIN_LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return MAIN_LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return MAIN_LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return WRITE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return WRITE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return WRITE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return POST_SCRAP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return POST_SCRAP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return POST_SCRAP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return POST_UNSCRAP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return POST_UNSCRAP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return POST_UNSCRAP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DELETE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DELETE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DELETE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_FORUM_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_FORUM_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_FORUM_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DELETE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DELETE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LIKE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LIKE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LIKE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UNLIKE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UNLIKE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNLIKE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return initializePostAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return initializePostsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return loadPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return loadPostsReqeustAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return mainLoadPostsReqeustAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return writePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return postScrapRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return postUnScrapRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return addCommentRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return deleteCommentRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return loadForumPostsRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return deletePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return likePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return unLikePostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return likeCommentRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return unLikeCommentRequestAction; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_util_dummyCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zRVR");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2WPw");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("LAVF");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // initial state

const initialState = {
  post: null,
  temporalPostsLength: 0,
  studyPosts: [],
  projectPosts: [],
  forumPosts: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  mainLoadPostsLoading: false,
  mainLoadPostsDone: false,
  mainLoadPostsError: null,
  writePostLoading: false,
  writePostDone: false,
  writePostError: null,
  postScrapLoading: false,
  postScrapDone: false,
  postScrapError: null,
  postUnScrapLoading: false,
  postUnScrapDone: false,
  postUnScrapError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  deleteCommentLoading: false,
  deleteCommentDone: false,
  deleteCommentError: null,
  loadForumPostsLoading: false,
  loadForumPostsDone: false,
  loadForumPostsError: null,
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
  likeCommentLoading: false,
  likeCommentDone: false,
  likeCommentError: null,
  unLikeCommentLoading: false,
  unLikeCommentDone: false,
  unLikeCommentError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unLikePostLoading: false,
  unLikePostDone: false,
  unLikePostError: null // editPostLoading: false,
  // editPostDone: false,
  // editPostError: null,
  // searchPostsLoading: false,
  // searchPostsDone: false,
  // searchPostsError: null,
  // filterSearchLoading: false,
  // filterSearchDone: false,
  // filterSearchError: null,

}; // action type

const INITIALIZE_POST = "post/INITIALIZE_POST";
const INITIALIZE_POSTS = "post/INITIALIZE_POSTS";
const LOAD_POST_REQUEST = "post/LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "post/LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "post/LOAD_POST_FAILURE";
const LOAD_POSTS_REQUEST = "post/LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "post/LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "post/LOAD_POSTS_FAILURE";
const MAIN_LOAD_POSTS_REQUEST = "post/MAIN_LOAD_POSTS_REQUEST";
const MAIN_LOAD_POSTS_SUCCESS = "post/MAIN_LOAD_POSTS_SUCCESS";
const MAIN_LOAD_POSTS_FAILURE = "post/MAIN_LOAD_POSTS_FAILURE";
const WRITE_POST_REQUEST = "post/WRITE_POST_REQUEST";
const WRITE_POST_SUCCESS = "post/WRITE_POST_SUCCESS";
const WRITE_POST_FAILURE = "post/WRITE_POST_FAILURE";
const POST_SCRAP_REQUEST = "post/POST_SCRAP_REQUEST";
const POST_SCRAP_SUCCESS = "post/POST_SCRAP_SUCCESS";
const POST_SCRAP_FAILURE = "post/POST_SCRAP_FAILURE";
const POST_UNSCRAP_REQUEST = "post/POST_UNSCRAP_REQUEST";
const POST_UNSCRAP_SUCCESS = "post/POST_UNSCRAP_SUCCESS";
const POST_UNSCRAP_FAILURE = "post/POST_UNSCRAP_FAILURE";
const ADD_COMMENT_REQUEST = "post/ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "post/ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "post/ADD_COMMENT_FAILURE";
const DELETE_COMMENT_REQUEST = "post/DELETE_COMMENT_REQUEST";
const DELETE_COMMENT_SUCCESS = "post/DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_FAILURE = "post/DELETE_COMMENT_FAILURE";
const LOAD_FORUM_POSTS_REQUEST = "post/LOAD_FORUM_POSTS_REQUEST";
const LOAD_FORUM_POSTS_SUCCESS = "post/LOAD_FORUM_POSTS_SUCCESS";
const LOAD_FORUM_POSTS_FAILURE = "post/LOAD_FORUM_POSTS_FAILURE";
const DELETE_POST_REQUEST = "post/DELETE_POST_REQUEST";
const DELETE_POST_SUCCESS = "post/DELETE_POST_SUCCESS";
const DELETE_POST_FAILURE = "post/DELETE_POST_FAILURE";
const LIKE_POST_REQUEST = "post/LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "post/LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "post/LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "post/UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "post/UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "post/UNLIKE_POST_FAILURE";
const LIKE_COMMENT_REQUEST = "post/LIKE_COMMENT_REQUEST";
const LIKE_COMMENT_SUCCESS = "post/LIKE_COMMENT_SUCCESS";
const LIKE_COMMENT_FAILURE = "post/LIKE_COMMENT_FAILURE";
const UNLIKE_COMMENT_REQUEST = "post/UNLIKE_COMMENT_REQUEST";
const UNLIKE_COMMENT_SUCCESS = "post/UNLIKE_COMMENT_SUCCESS";
const UNLIKE_COMMENT_FAILURE = "post/UNLIKE_COMMENT_FAILURE"; // export const EDIT_POST_REQUEST = "post/EDIT_POST_REQUEST";
// export const EDIT_POST_SUCCESS = "post/EDIT_POST_SUCCESS";
// export const EDIT_POST_FAILURE = "post/EDIT_POST_FAILURE";
// export const SEARCH_POSTS_REQUEST = "post/SEARCH_POSTS_REQUEST";
// export const SEARCH_POSTS_SUCCESS = "post/SEARCH_POSTS_SUCCESS";
// export const SEARCH_POSTS_FAILURE = "post/SEARCH_POSTS_FAILURE";
// export const FILTER_SEARCH_REQUEST = "post/FILTER_SEARCH_REQUEST";
// export const FILTER_SEARCH_SUCCESS = "post/FILTER_SEARCH_SUCCESS";
// export const FILTER_SEARCH_FAILURE = "post/FILTER_SEARCH_FAILURE";
// action creator

const initializePostAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(INITIALIZE_POST);
const initializePostsAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(INITIALIZE_POSTS);
const loadPostRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_POST_REQUEST, data => data // type, id를 포함한 객체
);
const loadPostsReqeustAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_POSTS_REQUEST, data => data);
const mainLoadPostsReqeustAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MAIN_LOAD_POSTS_REQUEST);
const writePostRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(WRITE_POST_REQUEST, data => data // saga에서 타입에 따라 분기해야함
);
const postScrapRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(POST_SCRAP_REQUEST, data => data);
const postUnScrapRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(POST_UNSCRAP_REQUEST, data => data);
const addCommentRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_COMMENT_REQUEST, data => data);
const deleteCommentRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_COMMENT_REQUEST, data => data);
const loadForumPostsRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_FORUM_POSTS_REQUEST, data => data);
const deletePostRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_POST_REQUEST, data => data);
const likePostRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LIKE_POST_REQUEST, data => data);
const unLikePostRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UNLIKE_POST_REQUEST, data => data);
const likeCommentRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LIKE_COMMENT_REQUEST, data => data);
const unLikeCommentRequestAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UNLIKE_COMMENT_REQUEST, data => data); // export const editPostReqeustAction = createAction(
//   EDIT_POST_REQUEST,
//   (data) => data,
// );
// export const searchPostsRequestAction = createAction(
//   SEARCH_POSTS_REQUEST,
//   (data) => data,
// );
// export const filterSearchRequestAction = createAction(
//   FILTER_SEARCH_REQUEST,
//   (data) => data,
// );
// reducer

const postReducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [INITIALIZE_POSTS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    studyPosts: [],
    projectPosts: [],
    forumPosts: []
  }),
  [INITIALIZE_POST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    post: null
  }),
  [LOAD_POST_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loadPostLoading: true,
    loadPostDone: false,
    loadPostError: null
  }),
  [LOAD_POST_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loadPostLoading: false,
    loadPostDone: true,
    loadPostError: null,
    post: action.post
  }),
  [LOAD_POST_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: action.error
  }),
  [LOAD_POSTS_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loadPostsLoading: true,
    loadPostsDone: false,
    loadPostsError: null
  }),
  [LOAD_POSTS_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loadPostsLoading: false,
    loadPostsDone: true,
    loadPostsError: null,
    temporalPostsLength: action.temporalPostsLength,
    [action.contentType + "Posts"]: state[action.contentType + "Posts"].concat(action.data)
  }),
  [LOAD_POSTS_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loadPostsLoading: false,
    loadPostsDone: false //loadPostsError: action.error,

  }),
  [MAIN_LOAD_POSTS_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    mainLoadPostsLoading: true,
    mainLoadPostsDone: false,
    mainLoadPostsError: null
  }),
  [MAIN_LOAD_POSTS_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    mainLoadPostsLoading: false,
    mainLoadPostsDone: true,
    mainLoadPostsError: null,
    studyPosts: action.study,
    projectPosts: action.project,
    forumPosts: action.forum // studyPosts: [...dummyPostsCreator("study", 5), ...state.studyPosts],
    // projectPosts: [...dummyPostsCreator("project", 5), ...state.projectPosts],
    // forumPosts: [...dummyPostsCreator("forum", 8), ...state.forumPosts],

  }),
  [MAIN_LOAD_POSTS_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    mainLoadPostsLoading: false,
    mainLoadPostsDone: false,
    mainLoadPostsError: action.error
  }),
  [WRITE_POST_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    writePostLoading: true,
    writePostDone: false,
    writePostError: null
  }),
  [WRITE_POST_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    writePostLoading: false,
    writePostDone: true,
    writePostError: null
  }),
  [WRITE_POST_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    writePostLoading: false,
    writePostDone: false,
    writePostError: action.error
  }),
  [POST_SCRAP_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    postScrapLoading: true,
    postScrapDone: false,
    postScrapError: null
  }),
  [POST_SCRAP_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    postScrapLoading: false,
    postScrapDone: true,
    postScrapError: null,
    post: _objectSpread(_objectSpread({}, state.post), {}, {
      scraps: [...state.post.scraps].concat(action.scrap)
    })
  }),
  [POST_SCRAP_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    postScrapLoading: false,
    postScrapDone: false,
    postScrapError: action.error
  }),
  [POST_UNSCRAP_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    postUnScrapLoading: true,
    postUnScrapDone: false,
    postUnScrapError: null
  }),
  [POST_UNSCRAP_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    postUnScrapLoading: false,
    postUnScrapDone: true,
    postUnScrapError: null,
    post: _objectSpread(_objectSpread({}, state.post), {}, {
      scraps: [...state.post.scraps].filter((v, i) => {
        if (v._id !== action.scrapId) {
          return _objectSpread({}, v);
        }
      })
    })
  }),
  [POST_UNSCRAP_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    postUnScrapLoading: false,
    postUnScrapDone: false,
    postUnScrapError: action.error
  }),
  [ADD_COMMENT_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    addCommentLoading: true,
    addCommentDone: false,
    addCommentError: null
  }),
  [ADD_COMMENT_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    addCommentLoading: false,
    addCommentDone: true,
    addCommentError: null,
    post: action.post
  }),
  [ADD_COMMENT_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: action.error
  }),
  [DELETE_COMMENT_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    deleteCommentLoading: true,
    deleteCommentDone: false,
    deleteCommentError: null
  }),
  [DELETE_COMMENT_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    deleteCommentLoading: false,
    deleteCommentDone: true,
    deleteCommentError: null
  }),
  [DELETE_COMMENT_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    deleteCommentLoading: false,
    deleteCommentDone: false,
    deleteCommentError: action.error
  }),
  [LOAD_FORUM_POSTS_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loadForumPostsLoading: true,
    loadForumPostsDone: false,
    loadForumPostsError: null
  }),
  [LOAD_FORUM_POSTS_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loadForumPostsLoading: false,
    loadForumPostsDone: true,
    loadForumPostsError: null,
    temporalPostsLength: action.temporalPostsLength,
    forumPosts: state.forumPosts.concat(action.forumPosts)
  }),
  [LOAD_FORUM_POSTS_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    loadForumPostsLoading: false,
    loadForumPostsDone: false,
    loadForumPostsError: action.error
  }),
  [DELETE_POST_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    deletePostLoading: true,
    deletePostDone: false,
    deletePostError: null
  }),
  [DELETE_POST_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    deletePostLoading: false,
    deletePostDone: true,
    deletePostError: null
  }),
  [DELETE_POST_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    deletePostLoading: false,
    deletePostDone: false,
    deletePostError: action.error
  }),
  [LIKE_POST_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    likePostLoading: true,
    likePostDone: false,
    likePostError: null
  }),
  [LIKE_POST_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    likePostLoading: false,
    likePostDone: true,
    likePostError: null,
    post: _objectSpread(_objectSpread({}, state.post), {}, {
      likes: [...state.post.likes].concat(action.like)
    }) // todo

  }),
  [LIKE_POST_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    likePostLoading: false,
    likePostDone: false,
    likePostError: action.error
  }),
  [UNLIKE_POST_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    unLikePostLoading: true,
    unLikePostDone: false,
    unLikePostError: null
  }),
  [UNLIKE_POST_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    unLikePostLoading: false,
    unLikePostDone: true,
    unLikePostError: null,
    post: _objectSpread(_objectSpread({}, state.post), {}, {
      likes: [...state.post.likes].filter((v, i) => {
        if (v._id !== action.likeId) {
          return _objectSpread({}, v);
        }
      })
    }) //todo

  }),
  [UNLIKE_POST_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    unLikePostLoading: false,
    unLikePostDone: false,
    unLikePostError: action.error
  }),
  [LIKE_COMMENT_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    likeCommentLoading: true,
    likeCommentDone: false,
    likeCommentError: null
  }),
  [LIKE_COMMENT_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    likeCommentLoading: false,
    likeCommentDone: true,
    likeCommentError: null,
    post: _objectSpread(_objectSpread({}, state.post), {}, {
      comments: [...state.post.comments].map((v, i) => {
        return v._id === action.commentId ? _objectSpread(_objectSpread({}, v), {}, {
          likes: [...v.likes].concat(action.like)
        }) : _objectSpread({}, v);
      })
    })
  }),
  [LIKE_COMMENT_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    likeCommentLoading: false,
    likeCommentDone: false,
    likeCommentError: action.error
  }),
  [UNLIKE_COMMENT_REQUEST]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    unLikeCommentLoading: true,
    unLikeCommentDone: false,
    unLikeCommentError: null
  }),
  [UNLIKE_COMMENT_SUCCESS]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    unLikeCommentLoading: false,
    unLikeCommentDone: true,
    unLikeCommentError: null,
    post: _objectSpread(_objectSpread({}, state.post), {}, {
      comments: [...state.post.comments].map((v, i) => {
        return v._id === action.commentId ? _objectSpread(_objectSpread({}, v), {}, {
          likes: [...v.likes].filter((v, i) => {
            if (v._id !== action.likeId) {
              return _objectSpread({}, v);
            }
          })
        }) : _objectSpread({}, v);
      })
    })
  }),
  [UNLIKE_COMMENT_FAILURE]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    unLikeCommentLoading: false,
    unLikeCommentDone: false,
    unLikeCommentError: action.error
  }) // [EDIT_POST_REQUEST]: (state, action) => ({
  //   ...state,
  //   editPostLoading: true,
  //   editPostDone: false,
  //   editPostError: null,
  // }),
  // [EDIT_POST_SUCCESS]: (state, action) => ({
  //   ...state,
  //   editPostLoading: false,
  //   editPostDone: true,
  //   editPostError: null,
  // }),
  // [EDIT_POST_FAILURE]: (state, action) => ({
  //   ...state,
  //   unLikeCommentLoading: false,
  //   unLikeCommentDone: false,
  //   unLikeCommentError: action.error,
  // }),
  // [SEARCH_POSTS_REQUEST]: (state, action) => ({
  //   ...state,
  //   searchPostsLoading: true,
  //   searchPostsDone: false,
  //   searchPostsError: null,
  // }),
  // [SEARCH_POSTS_SUCCESS]: (state, action) => ({
  //   ...state,
  //   searchPostsLoading: false,
  //   searchPostsDone: true,
  //   searchPostsError: null,
  //   [action.contentType + "Posts"]: action.posts,
  // }),
  // [SEARCH_POSTS_FAILURE]: (state, action) => ({
  //   ...state,
  //   searchPostsLoading: false,
  //   searchPostsDone: false,
  //   searchPostsError: null,
  // }),
  // [FILTER_SEARCH_REQUEST]: (state, action) => ({
  //   ...state,
  //   filterSearchLoading: true,
  //   filterSearchDone: false,
  //   filterSearchError: null,
  // }),
  // [FILTER_SEARCH_SUCCESS]: (state, action) => ({
  //   ...state,
  //   filterSearchLoading: false,
  //   filterSearchDone: true,
  //   filterSearchError: null,
  //   [action.contentType + "Posts"]: action.posts,
  // }),
  // [FILTER_SEARCH_FAILURE]: (state, action) => ({
  //   ...state,
  //   filterSearchLoading: false,
  //   filterSearchDone: false,
  //   filterSearchError: null,
  // }),

}, initialState);
/* harmony default export */ __webpack_exports__["R"] = (postReducer);

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "uoZI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INITIALIZE_SKILL */
/* unused harmony export CHANGE_SKILL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initializeSkillAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return skillChangeAction; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // initial state

const initialState = {
  skill: []
}; // action type

const INITIALIZE_SKILL = "skill/INITIALIZE_SKILL";
const CHANGE_SKILL = "skill/CHANGE_SKILL"; // action creator

const initializeSkillAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(INITIALIZE_SKILL);
const skillChangeAction = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CHANGE_SKILL, data => data); // reducer

const skillReducer = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["handleActions"])({
  [INITIALIZE_SKILL]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    skill: []
  }),
  [CHANGE_SKILL]: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
    skill: action.payload
  })
}, initialState);
/* harmony default export */ __webpack_exports__["a"] = (skillReducer);

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wfgH":
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zRVR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dummyMeCreator */
/* unused harmony export dummyPostCreator */
/* unused harmony export dummyPostsCreator */
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2WPw");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MCK1");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);


const dummyMeCreator = () => {
  return {
    id: 111,
    nickname: "zinozino",
    email: "gogod23@naver.com",
    password: "safmimf3i2@#k9aci",
    techStack: ["React", "JavaScript", "Vue"],
    githubUrl: "http://github.com/zinozino1",
    filePath: "",
    comments: [],
    likes: [],
    scraps: [],
    email_verified: false,
    key_for_verify: "123",
    registerDate: new Date(),
    rating: 4,
    posts: [{
      id: 1,
      title: "포스트1",
      content: "content1",
      filePath: "/usr/bin",
      writer: 1,
      createAt: new Date(),
      views: 100,
      techStack: [],
      area: "",
      recruitment: 10,
      type: "study",
      isOnGoing: true,
      likes: 40,
      scraped: 10,
      comments: [{
        id: 1,
        writer: 2,
        content: "안녕하세요",
        postId: 1,
        createAt: new Date(),
        commentTo: null,
        // 대댓글이 아님
        secret: false,
        likes: 30
      }]
    }]
  };
};
const dummyPostCreator = type => {
  if (type == "study" || type == "project") return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    title: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.sentence(),
    content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.paragraph(),
    filePath: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image(),
    writer: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName(),
      email: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      password: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      techStack: Array(3).fill().map((v, i) => faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.word()),
      githubUrl: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      filePath: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image(),
      posts: Array(3).fill().map((v, i) => {
        dummy: i;
      }),
      rating: 4,
      createdAt: faker__WEBPACK_IMPORTED_MODULE_1___default.a.date.recent()
    },
    createdAt: faker__WEBPACK_IMPORTED_MODULE_1___default.a.date.recent(),
    techStack: Array(3).fill().map((v, i) => faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.word()),
    views: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    area: "서울",
    recruitment: 4,
    type: type === "study" ? "study" : "project",
    isOnGoing: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.boolean(),
    likes: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    scraped: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    comments: [{
      id: 1,
      writer: dummyMeCreator(),
      content: "1번 댓글",
      postId: 1,
      createAt: new Date(),
      commentTo: null,
      secretComment: false,
      likes: 10
    }, {
      id: 2,
      writer: dummyMeCreator(),
      content: "2번 댓글",
      postId: 1,
      createAt: new Date(),
      commentTo: null,
      secretComment: true,
      likes: 20
    }, {
      id: 3,
      writer: dummyMeCreator(),
      content: "3번 댓글",
      postId: 1,
      createAt: new Date(),
      commentTo: 1,
      secretComment: false,
      likes: 340
    }, {
      id: 4,
      writer: dummyMeCreator(),
      content: "4번 댓글",
      postId: 1,
      createAt: new Date(),
      commentTo: null,
      // 대댓글이 아님
      secretComment: true,
      likes: 12
    }, {
      id: 5,
      writer: dummyMeCreator(),
      content: "5번 댓글",
      postId: 1,
      createAt: new Date(),
      commentTo: 1,
      // 대댓글이 아님
      secretComment: true,
      likes: 12
    }]
  };else return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    title: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.sentence(),
    content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.paragraph(),
    filePath: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image(),
    writer: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName(),
      email: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      password: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      techStack: Array(3).fill().map((v, i) => faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.word()),
      githubUrl: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      filePath: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image(),
      posts: Array(3).fill().map((v, i) => {
        dummy: i;
      }),
      rating: 4,
      createdAt: faker__WEBPACK_IMPORTED_MODULE_1___default.a.date.recent()
    },
    createdAt: faker__WEBPACK_IMPORTED_MODULE_1___default.a.date.recent(),
    techStack: Array(3).fill().map((v, i) => faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.word()),
    views: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    area: "서울",
    type: "forum",
    likes: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    scraped: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    comments: [{
      id: 1,
      writer: dummyMeCreator(),
      content: "반가워요",
      postId: 1,
      createAt: new Date(),
      commentTo: null,
      secretComment: false,
      likes: 10
    }, {
      id: 2,
      writer: dummyMeCreator(),
      content: "ㅋㅇㅌㄹㅋㅇㄹ",
      postId: 1,
      createAt: new Date(),
      commentTo: 1,
      secretComment: true,
      likes: 20
    }, {
      id: 3,
      writer: dummyMeCreator(),
      content: "ㅋㅋ",
      postId: 1,
      createAt: new Date(),
      commentTo: 1,
      secretComment: false,
      likes: 340
    }, {
      id: 4,
      writer: dummyMeCreator(),
      content: "ㄴㄴ",
      postId: 1,
      createAt: new Date(),
      commentTo: null,
      // 대댓글이 아님
      secretComment: true,
      likes: 12
    }],
    filter: "QnA",
    tags: Array(3).fill().map((v, i) => faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word())
  };
};
const dummyPostsCreator = (type, number) => {
  if (type == "study" || type == "project") return Array(number).fill().map((v, i) => ({
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    title: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.sentence(),
    content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.paragraph(),
    filePath: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image(),
    writer: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName(),
      email: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      password: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      techStack: Array(3).fill().map((v, i) => faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.word()),
      githubUrl: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      filePath: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image(),
      posts: Array(3).fill().map((v, i) => {
        dummy: i;
      }),
      rating: 4,
      registerDate: faker__WEBPACK_IMPORTED_MODULE_1___default.a.date.recent()
    },
    createAt: faker__WEBPACK_IMPORTED_MODULE_1___default.a.date.recent(),
    techStack: Array(3).fill().map((v, i) => faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.word()),
    views: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    area: "서울",
    recruitment: 4,
    type: type === "study" ? "study" : "project",
    isOnGoing: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.boolean(),
    likes: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    scraped: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    comments: Array(3).fill().map((v, i) => ({
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      writer: dummyMeCreator(),
      content: "안녕하세요",
      postId: 1,
      createAt: new Date(),
      commentTo: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      // 대댓글이 아님
      secret: false,
      likes: 30
    }))
  }));else return Array(number).fill().map((v, i) => ({
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    title: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.sentence(),
    content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.paragraph(),
    filePath: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image(),
    writer: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName(),
      email: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      password: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      techStack: Array(3).fill().map((v, i) => faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.word()),
      githubUrl: faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word(),
      filePath: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image(),
      posts: Array(3).fill().map((v, i) => {
        dummy: i;
      }),
      rating: 4,
      registerDate: faker__WEBPACK_IMPORTED_MODULE_1___default.a.date.recent()
    },
    createAt: faker__WEBPACK_IMPORTED_MODULE_1___default.a.date.recent(),
    techStack: Array(3).fill().map((v, i) => faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.word()),
    views: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    area: "서울",
    type: "forum",
    likes: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    scraped: parseInt(faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.number() / 100),
    comments: Array(3).fill().map((v, i) => ({
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      writer: dummyMeCreator(),
      content: "안녕하세요",
      postId: 1,
      createAt: new Date(),
      commentTo: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      // 대댓글이 아님
      secret: false,
      likes: 30
    })),
    filter: "QnA",
    tags: Array(3).fill().map((v, i) => faker__WEBPACK_IMPORTED_MODULE_1___default.a.random.word())
  }));
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });