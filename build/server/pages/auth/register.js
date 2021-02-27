module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sXjR");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2WPw":
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3zrx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInput = (initialValue = "") => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

/* harmony default export */ __webpack_exports__["a"] = (useInput);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "U36g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("so/r");
/* harmony import */ var _common_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("etci");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);







const Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content;
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(Content).withConfig({
  displayName: "AuthLayout__ContentWrapper",
  componentId: "rhkyh-0"
})(["margin:0 auto;margin-top:65px;", ""], props => props.type === "register" ? Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["width:600px;@media (max-width:768px){width:80%;}"]) : Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["width:400px;"]));

const AuthLayout = ({
  children,
  type
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ContentWrapper, {
      type: type,
      children: children
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_common_Footer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {})]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (AuthLayout);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "c3c4":
/***/ (function(module, exports) {

module.exports = require("form-data");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "etci":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);









const AntFooter = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Footer;
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(AntFooter).withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "flhtiq-0"
})(["padding:30px 50px;background:#16172b;color:#fff;"]);
const PartialStyle = {
  margin: "0 auto 24px",
  fontWeight: "bold" //font-weight :bold

};
const FooterAnchor = {
  color: "#D6D7D9"
};

const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(FooterWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 0,
          lg: {
            span: 6,
            offset: 2
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            style: PartialStyle,
            children: "\uC18C\uAC1C"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
            style: {
              width: 250
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
                style: {
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "5px"
                },
                children: "CodePlat"
              }), "\uC740 \uD559\uC0DD, \uC9C1\uC7A5\uC778, \uD504\uB9AC\uB79C\uC11C, \uB514\uC790\uC774\uB108 \uB4F1\uC5D0\uAC8C \uD504\uB85C\uC81D\uD2B8 \uD639\uC740 \uC2A4\uD130\uB514 \uBC0F \uCEE4\uBBA4\uB2C8\uD2F0 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4"]
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 12,
          lg: {
            span: 6,
            offset: 2
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            style: PartialStyle,
            children: "\uACE0\uAC1D\uC13C\uD130"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              style: FooterAnchor,
              children: "\uC774\uC6A9\uC57D\uAD00"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              style: FooterAnchor,
              children: "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uCDE8\uAE09\uBC29\uCE68"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              style: FooterAnchor,
              children: "\uCFE0\uD0A4\uD658\uACBD\uC124\uC815"
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: 12,
          lg: {
            span: 6,
            offset: 2
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            style: PartialStyle,
            children: "\uBC14\uB85C\uAC00\uAE30"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/articles/project",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              style: FooterAnchor,
              children: "\uD504\uB85C\uC81D\uD2B8"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/articles/study",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              style: FooterAnchor,
              children: "\uC2A4\uD130\uB514"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: "/articles/forum",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              style: FooterAnchor,
              children: "\uD3EC\uB7FC"
            })
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        border: "0.5px solid gray",
        margin: "20px"
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      style: {
        textAlign: "center"
      },
      children: "@2021 Copyright all reserved"
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "rp57":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_constant_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zAG/");








const SocialLoginWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SocialTemplate__SocialLoginWrapper",
  componentId: "sc-1iw1r4e-0"
})(["display:flex;margin-bottom:3px;font-weight:300;.login-google{flex:1;}.login-naver{margin-left:3px;flex:1;}.login-github{flex:1;}.login-kakao{margin-left:3px;flex:1;}"]);
const SocialLoginButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Button"]).withConfig({
  displayName: "SocialTemplate__SocialLoginButton",
  componentId: "sc-1iw1r4e-1"
})(["width:100%;color:#fff;font-size:12px;&:hover{color:#fff;border:1px solid #fff;}"]);

const SocialTemplate = () => {
  // const onClickSocialLogin = useCallback(() => {
  //   console.log("fuck");
  // }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(SocialLoginWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "login-google",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: `${_lib_constant_constant__WEBPACK_IMPORTED_MODULE_5__[/* SERVER_URL */ "c"]}/api/google`,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SocialLoginButton, {
              style: {
                background: "#dd4b39"
              } // onClick={onClickSocialLogin}
              ,
              children: "Google"
            })
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "login-naver",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: `${_lib_constant_constant__WEBPACK_IMPORTED_MODULE_5__[/* SERVER_URL */ "c"]}/api/naver`,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SocialLoginButton, {
              style: {
                background: "#00c300"
              },
              children: "Naver"
            })
          })
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(SocialLoginWrapper, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "login-github",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: `${_lib_constant_constant__WEBPACK_IMPORTED_MODULE_5__[/* SERVER_URL */ "c"]}/api/github`,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SocialLoginButton, {
              style: {
                background: "#333"
              },
              children: "Github"
            })
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "login-kakao",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: `${_lib_constant_constant__WEBPACK_IMPORTED_MODULE_5__[/* SERVER_URL */ "c"]}/api/kakao`,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SocialLoginButton, {
              style: {
                background: "#fee500",
                color: "black"
              },
              children: "Kakao"
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (SocialTemplate);

/***/ }),

/***/ "sXjR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/layout/AuthLayout.jsx
var AuthLayout = __webpack_require__("U36g");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/common/auth/SocialTemplate.jsx
var SocialTemplate = __webpack_require__("rp57");

// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__("3zrx");

// EXTERNAL MODULE: ./components/common/contents/SkillFilterForm.jsx
var SkillFilterForm = __webpack_require__("w9p+");

// EXTERNAL MODULE: ./lib/constant/constant.js
var constant = __webpack_require__("zAG/");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: external "form-data"
var external_form_data_ = __webpack_require__("c3c4");
var external_form_data_default = /*#__PURE__*/__webpack_require__.n(external_form_data_);

// EXTERNAL MODULE: ./firebase.js
var firebase = __webpack_require__("Ktyj");

// EXTERNAL MODULE: external "shortid"
var external_shortid_ = __webpack_require__("2WPw");

// CONCATENATED MODULE: ./components/auth/RegisterInputForm.jsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const {
  Option
} = external_antd_["Select"];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const RegisterFormWrapper = external_styled_components_default()(external_antd_["Form"]).withConfig({
  displayName: "RegisterInputForm__RegisterFormWrapper",
  componentId: "sn3xer-0"
})([".register-btn{margin:20px 0;text-align:center;}.ant-divider{font-size:12px;margin:50px 0;}"]);
const RegisterInputItemWrapper = external_styled_components_default()(external_antd_["Form"].Item).withConfig({
  displayName: "RegisterInputForm__RegisterInputItemWrapper",
  componentId: "sn3xer-1"
})([".ant-form-item-label{text-align:left;}.email-code{width:200px;}.ant-form-item-control{}"]);
const PushBackButton = external_styled_components_default.a.span.withConfig({
  displayName: "RegisterInputForm__PushBackButton",
  componentId: "sn3xer-2"
})(["color:#888;font-size:12px;text-decoration:underline;cursor:pointer;"]);
const StyledDivider = external_styled_components_default()(external_antd_["Divider"]).withConfig({
  displayName: "RegisterInputForm__StyledDivider",
  componentId: "sn3xer-3"
})([""]);
const formData = new external_form_data_default.a();

const RegisterInputForm = ({
  router
}) => {
  const {
    skill
  } = Object(external_react_redux_["useSelector"])(state => state.skill);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const [form] = external_antd_["Form"].useForm();
  const {
    0: userId,
    1: setUserId
  } = Object(external_react_["useState"])(null);
  const {
    0: registerType,
    1: setRegisterType
  } = Object(external_react_["useState"])(null);
  const {
    0: progress,
    1: setProgress
  } = Object(external_react_["useState"])(0);
  const {
    0: socialType,
    1: setSocialType
  } = Object(external_react_["useState"])("");
  const {
    0: formError,
    1: setFormError
  } = Object(external_react_["useState"])(true);
  const {
    0: nicknameExistError,
    1: setNicknameExistError
  } = Object(external_react_["useState"])(false);
  const {
    0: emailExistError,
    1: setEmailExistError
  } = Object(external_react_["useState"])(false);
  const {
    0: noneEmailUser,
    1: setNoneEmailUser
  } = Object(external_react_["useState"])(false);
  const {
    0: firebaseLoading,
    1: setFirebaseLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: imageFile,
    1: setImageFile
  } = Object(external_react_["useState"])(null);
  const {
    0: nickname,
    1: setNickname
  } = Object(external_react_["useState"])("");
  const onChangeNickname = Object(external_react_["useCallback"])(e => {
    setNickname(e.target.value);
    setNicknameExistError(false);
  }, []);
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])("");
  const onChangeEmail = Object(external_react_["useCallback"])(e => {
    setEmail(e.target.value);
    setEmailExistError(false);
  }, []);
  const [confirmEmail, onChangeConfirmEmail] = Object(useInput["a" /* default */])("");
  const [password, onChangePassword] = Object(useInput["a" /* default */])("");
  const [confirmPassword, onChangeConfirmPassword] = Object(useInput["a" /* default */])("");
  const [githubUrl, onChangeGithubUrl] = Object(useInput["a" /* default */])("");
  const onClickEmailVerify = Object(external_react_["useCallback"])(() => {
    setProgress(2);
    const config = {
      headers: {
        Accept: "application/json",
        enctype: "multipart/form-data"
      }
    }; // formData.append(
    //   "data",
    //   JSON.stringify({
    //     type: "local",
    //     id: userId,
    //     techStack: skill,
    //     githubUrl,
    //     //avatar: imageFile,
    //   }),
    // );

    formData.append("type", "local");
    formData.append("id", userId);
    formData.append("techStack", JSON.stringify(skill));
    formData.append("githubUrl", githubUrl);
    external_axios_default.a.post("/api/join/optionForm", formData, config);
  }, [userId, skill, githubUrl]); // 로컬 회원가입

  const onClickLocalButton = Object(external_react_["useCallback"])(async () => {
    if (formError) return;
    await external_axios_default.a.post("/api/join", {
      email,
      nickname,
      password
    }).then(async res => {
      //console.log(res);
      setUserId(res.data.userId);
      setEmailExistError(false);
      setNicknameExistError(false);
      setRegisterType("local");
      setProgress(1); // firebase 유저 저장 of local회원가입

      setFirebaseLoading(true);
      let createdUser = await firebase["a" /* default */].auth().createUserWithEmailAndPassword(email, email); //console.log("createdUser", createdUser);

      await createdUser.user.updateProfile({
        displayName: nickname
      });
      await firebase["a" /* default */].database().ref("users").child(createdUser.user.uid).set({
        nickname: createdUser.user.displayName,
        email: createdUser.user.email,
        type: "local",
        isInMypage: false
      }); // 회원가입 시 자동 로그인 -> 로컬은 자동로그인 안됨
      // let SignedInUser = await firebase
      //   .auth() // auth 서비스에 접근
      //   .signInWithEmailAndPassword(email, email);
      // //console.log("SignedInUser", SignedInUser);
      // setFirebaseLoading(false);
    }).catch(err => {
      if (err.response.data.error.name === "UserExistsError") {
        setEmailExistError(true);
      } else {
        setNicknameExistError(true);
      }
    });
  }, [formError, email, nickname, password]); // const onClickSocialButton = useCallback((e) => {
  //   switch (e.target.innerText) {
  //     case "Naver":
  //       setSocialType("naver");
  //       break;
  //     case "Google":
  //       setSocialType("google");
  //       //axios.get(`/api/google`);
  //       break;
  //     case "Github":
  //       setSocialType("github");
  //       //axios.get(`/api/github`);
  //       break;
  //     case "Kakao":
  //       setSocialType("kakao");
  //       //axios.get(`/api/kakao`);
  //       break;
  //     default:
  //       break;
  //   }
  //   setRegisterType("social");
  //   // setProgress(1);
  // }, []);

  const onPushBack = Object(external_react_["useCallback"])(() => {
    setRegisterType(null);
    setProgress(0);
  }, []);

  const normFile = e => {
    //console.log("norm file : ", e);
    //console.log(e.fileList[0].originFileObj);
    if (e.file.status === "done") {
      formData.append("avatar", e.fileList[0].originFileObj); // console.log(e.fileList[0].originFileObj);
      // setImageFile(formData);
      // console.log("done");
    } else if (e.file.status === "removed") {
      formData.delete("avatar"); // console.log("removed");
    }

    let fileList = e.fileList;
    fileList = fileList.slice(-1);

    if (Array.isArray(e)) {
      return e;
    }

    return e && fileList;
  }; // social 회원가입 중복처리 필요


  const onSocialRegisterSubmit = Object(external_react_["useCallback"])(e => {
    if (nickname === "") {
      alert("닉네임을 입력해주세요.");
      return;
    }

    if (noneEmailUser && email === "") {
      console.log(noneEmailUser, email);
      alert("이메일을 입력해주세요.");
      return;
    }

    const config = {
      headers: {
        Accept: "application/json",
        enctype: "multipart/form-data" // withCredentials: true,

      }
    }; // formData.append(
    //   "data",
    //   JSON.stringify({
    //     type: "local",
    //     id: userId,
    //     techStack: skill,
    //     githubUrl,
    //     //avatar: imageFile,
    //   }),
    // );

    if (noneEmailUser) {
      // github, kakao
      formData.append("type", "email");
      formData.append("nickname", nickname);
      formData.append("techStack", JSON.stringify(skill));
      formData.append("githubUrl", githubUrl);
      formData.append("email", email);
      external_axios_default.a.post("/api/join/optionForm", formData, config).then(async res => {
        if (res.data.message === "email is reduplication") {
          setEmailExistError(true);
          formData.delete("type");
          formData.delete("nickname");
          formData.delete("techStack");
          formData.delete("githubUrl");
          formData.delete("email");
          return;
        } else if (res.data.message === "nickname is reduplication") {
          setNicknameExistError(true);
          formData.delete("type");
          formData.delete("nickname");
          formData.delete("techStack");
          formData.delete("githubUrl");
          formData.delete("email");
          return;
        } //dispatch(setUserRequestAction());


        setNicknameExistError(false);
        setEmailExistError(false);
        setProgress(2);
        let createdUser = await firebase["a" /* default */].auth().createUserWithEmailAndPassword(email, email); //console.log("createdUser", createdUser);

        await createdUser.user.updateProfile({
          displayName: nickname
        });
        await firebase["a" /* default */].database().ref("users").child(createdUser.user.uid).set({
          nickname: createdUser.user.displayName,
          type: "social",
          isInMypage: false
        }); // 임마도 자동로그인 x
        // let SignedInUser = await firebase
        //   .auth() // auth 서비스에 접근
        //   .signInWithEmailAndPassword(email, anonymousPassword);
        // //console.log("SignedInUser", SignedInUser);
        // setFirebaseLoading(false);
      }).catch(error => {
        console.log(error);
        alert("에러 발생."); // if (error.response.data.message === "email is reduplication") {
        //   setEmailExistError(true);
        // } else {
        //   setNicknameExistError(true);
        // }

        formData.delete("type");
        formData.delete("nickname");
        formData.delete("techStack");
        formData.delete("githubUrl");
        formData.delete("email");
      });
    } else {
      // google, naver
      console.log(nickname, skill, githubUrl);
      formData.append("type", "sns");
      formData.append("nickname", nickname);
      formData.append("techStack", JSON.stringify(skill));
      formData.append("githubUrl", githubUrl);
      external_axios_default.a.post("/api/join/optionForm", formData, config).then(async res => {
        if (res.data.message === "nickname is reduplication") {
          setNicknameExistError(true);
          formData.delete("type");
          formData.delete("nickname");
          formData.delete("techStack");
          formData.delete("githubUrl");
          return;
        } //dispatch(setUserRequestAction());
        //console.log(res.data);


        setNicknameExistError(false);
        setFirebaseLoading(true); // let anonymousPassword = shortid.generate();

        let createdUser = await firebase["a" /* default */].auth().createUserWithEmailAndPassword(res.data.user.email, res.data.user.email); //console.log("createdUser", createdUser);

        await createdUser.user.updateProfile({
          displayName: nickname
        }); // db 저장

        await firebase["a" /* default */].database().ref("users").child(createdUser.user.uid).set({
          email: createdUser.user.email,
          nickname: createdUser.user.displayName,
          type: "social",
          isInMypage: false
        }); // 파이어베이스 로그인

        let SignedInUser = await firebase["a" /* default */].auth() // auth 서비스에 접근
        .signInWithEmailAndPassword(res.data.user.email, res.data.user.email); //console.log("SignedInUser", SignedInUser);

        setFirebaseLoading(false);
        router.push("/");
      }).catch(error => {
        alert("에러 발생.");
        console.log(error);
        formData.delete("type");
        formData.delete("nickname");
        formData.delete("techStack");
        formData.delete("githubUrl");
      });
    }
  }, [nickname, skill, githubUrl]);
  Object(external_react_["useEffect"])(() => {
    if (nickname.length !== 0 && email.length !== 0 && confirmEmail.length !== 0 && password.length !== 0 && password.length >= 8 && confirmPassword.length !== 0 && password === confirmPassword && email === confirmEmail && email.match(constant["a" /* EmailRegex */])) {
      setFormError(false);
    } else {
      setFormError(true);
    }
  }, [nickname, email, confirmEmail, password, confirmPassword]);
  Object(external_react_["useEffect"])(() => {
    if (router.query.type === "sns") {
      setProgress(1);
      setRegisterType("social");
    } else if (router.query.type === "email") {
      setProgress(1);
      setRegisterType("social");
      setNoneEmailUser(true); //setEmail("");
    }
  }, [router]);
  Object(external_react_["useEffect"])(() => {
    console.log(email);
  }, [email]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(RegisterFormWrapper, _objectSpread(_objectSpread({}, formItemLayout), {}, {
    form: form,
    name: "register",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "40px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          style: {
            color: "#16172b",
            fontWeight: "300"
          },
          children: "CodePlat"
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_antd_["Steps"], {
      current: progress,
      onChange: setProgress,
      style: {
        marginBottom: "70px"
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Steps"].Step, {
        title: "\uD68C\uC6D0\uAC00\uC785",
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["UserOutlined"], {}),
        disabled: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Steps"].Step, {
        title: "\uCD94\uAC00\uC815\uBCF4",
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["SolutionOutlined"], {}),
        disabled: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Steps"].Step, {
        title: "\uC644\uB8CC",
        icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["SmileOutlined"], {}),
        disabled: true
      })]
    }), progress == 0 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [nicknameExistError ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "nickname",
        label: "\uB2C9\uB124\uC784",
        validateStatus: "error",
        help: "\uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uB2C9\uB124\uC784\uC785\uB2C8\uB2E4.",
        rules: [{
          required: true,
          message: "닉네임을 입력해주세요.",
          whitespace: true
        }],
        onChange: onChangeNickname,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
          placeholder: "nickname"
        })
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "nickname",
        label: "\uB2C9\uB124\uC784",
        rules: [{
          required: true,
          message: "닉네임을 입력해주세요.",
          whitespace: true
        }],
        onChange: onChangeNickname,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
          placeholder: "nickname"
        })
      }), emailExistError ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "email",
        label: "\uC774\uBA54\uC77C",
        validateStatus: "error",
        help: "\uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uC774\uBA54\uC77C\uC785\uB2C8\uB2E4.",
        rules: [{
          type: "email",
          message: "이메일 형식으로 입력해 주세요."
        }, {
          required: true,
          message: "이메일을 입력해주세요."
        }],
        onChange: onChangeEmail,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
          placeholder: "email"
        })
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "email",
        label: "\uC774\uBA54\uC77C",
        rules: [{
          type: "email",
          message: "이메일 형식으로 입력해 주세요."
        }, {
          required: true,
          message: "이메일을 입력해주세요."
        } // ({ getFieldValue }) => ({
        //   validator(_, value) {
        //     if (!emailExistError) {
        //       return Promise.resolve();
        //     } else {
        //       return Promise.reject("이미 존재하는 이메일입니다.");
        //     }
        //   },
        // }),
        ],
        onChange: onChangeEmail,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
          placeholder: "email"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "confirmEmail",
        label: "\uC774\uBA54\uC77C \uD655\uC778",
        rules: [// {
        // type: 'email',
        // message :''
        //},
        {
          required: true,
          message: "이메일 확인을 입력해주세요."
        }, ({
          getFieldValue
        }) => ({
          validator(_, value) {
            if (!value || getFieldValue("email") === value) {
              return Promise.resolve();
            }

            return Promise.reject("이메일이 일치하지 않습니다.");
          }

        })],
        onChange: onChangeConfirmEmail,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
          placeholder: "confirm email"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "password",
        label: "\uBE44\uBC00\uBC88\uD638",
        rules: [{
          required: true,
          message: "비밀번호를 입력해주세요."
        }, {
          min: 8,
          message: "8자리 이상 비밀번호를 입력해주세요."
        }],
        hasFeedback: true,
        onChange: onChangePassword,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"].Password, {
          placeholder: "password"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "confirmpassword",
        label: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
        dependencies: ["password"],
        hasFeedback: true,
        rules: [{
          required: true,
          message: "비밀번호를 입력해주세요."
        }, ({
          getFieldValue
        }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }

            return Promise.reject("비밀번호가 일치하지 않습니다.");
          }

        })],
        onChange: onChangeConfirmPassword,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"].Password, {
          placeholder: "confirm password"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "register-btn",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
          type: "primary",
          htmlType: "submit",
          onClick: onClickLocalButton,
          style: {
            background: "#313355",
            color: "#fff",
            border: "1px solid #313355"
          },
          children: "\uD655\uC778"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledDivider, {
        children: "\uC18C\uC15C \uD68C\uC6D0\uAC00\uC785"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialTemplate["a" /* default */], {})]
    }), progress == 1 && registerType == "local" && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledDivider, {
        children: "\uC120\uD0DD \uC785\uB825 \uC0AC\uD56D"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SkillFilterForm["a" /* default */], {
        type: "register"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "github",
        label: "Github",
        hasFeedback: true,
        onChange: onChangeGithubUrl,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
          placeholder: "github \uB2C9\uB124\uC784"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "avatar",
        label: "\uC0AC\uC6A9\uC790 \uC774\uBBF8\uC9C0 \uC124\uC815",
        valuePropName: "fileList",
        getValueFromEvent: normFile //onRemove={console.log("fuck")}
        //onChange={onChangeImageFile}
        ,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Upload"], {
          name: "logo",
          listType: "picture",
          accept: "image/*",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
            style: {
              background: "#313355",
              color: "#fff",
              border: "1px solid #313355"
            },
            icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["UploadOutlined"], {}),
            children: "\uD30C\uC77C \uC5C5\uB85C\uB4DC"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledDivider, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "email-btn",
        style: {
          textAlign: "center"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
          type: "primary" // htmlType="submit"
          ,
          onClick: onClickEmailVerify,
          style: {
            background: "#313355",
            color: "#fff",
            border: "1px solid #313355"
          },
          children: "\uC774\uBA54\uC77C \uC778\uC99D"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PushBackButton, {
        onClick: onPushBack,
        children: "\uB4A4\uB85C\uAC00\uAE30"
      })]
    }), progress == 1 && registerType == "social" && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [nicknameExistError ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
          name: "nickname",
          label: "\uB2C9\uB124\uC784",
          validateStatus: "error",
          help: "\uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uB2C9\uB124\uC784\uC785\uB2C8\uB2E4.",
          hasFeedback: true,
          rules: [{
            required: true,
            message: "닉네임을 입력해주세요.",
            whitespace: true
          }],
          onChange: onChangeNickname,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
            placeholder: "nickname"
          })
        })
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
          name: "nickname",
          label: "\uB2C9\uB124\uC784",
          hasFeedback: true,
          rules: [{
            required: true,
            message: "닉네임을 입력해주세요.",
            whitespace: true
          }],
          onChange: onChangeNickname,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
            placeholder: "nickname"
          })
        })
      }), noneEmailUser && /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: emailExistError ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
          name: "email",
          label: "\uC774\uBA54\uC77C",
          validateStatus: "error",
          help: "\uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uC774\uBA54\uC77C\uC785\uB2C8\uB2E4.",
          hasFeedback: true,
          rules: [{
            required: true,
            message: "이메일을 입력해주세요.",
            whitespace: true
          }],
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
            placeholder: "email",
            onChange: onChangeEmail
          })
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
          name: "email",
          label: "\uC774\uBA54\uC77C",
          hasFeedback: true,
          rules: [{
            required: true,
            message: "이메일을 입력해주세요.",
            whitespace: true
          }],
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
            placeholder: "email",
            onChange: onChangeEmail
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledDivider, {
        children: "\uC120\uD0DD \uC785\uB825 \uC0AC\uD56D"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SkillFilterForm["a" /* default */], {
        type: "register"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "github",
        label: "Github",
        hasFeedback: true,
        onChange: onChangeGithubUrl,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Input"], {
          placeholder: "github \uB2C9\uB124\uC784"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterInputItemWrapper, {
        name: "avatar",
        label: "\uC0AC\uC6A9\uC790 \uC774\uBBF8\uC9C0 \uC124\uC815",
        valuePropName: "fileList",
        getValueFromEvent: normFile //onChange={onChangeImageFile}
        ,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Upload"], {
          name: "logo",
          listType: "picture",
          accept: "image/*",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
            icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["UploadOutlined"], {}),
            children: "\uD30C\uC77C \uC5C5\uB85C\uB4DC"
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledDivider, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "email-btn",
        style: {
          textAlign: "center"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
          type: "primary" // htmlType="submit"
          ,
          onClick: onSocialRegisterSubmit,
          style: {
            background: "#313355",
            color: "#fff",
            border: "1px solid #313355"
          },
          children: "\uAC00\uC785\uD558\uAE30"
        })
      }), firebaseLoading && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          textAlign: "center"
        },
        children: "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694..."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PushBackButton, {
        onClick: onPushBack,
        children: "\uB4A4\uB85C\uAC00\uAE30"
      })]
    }), progress == 2 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Result"], {
          status: "success",
          title: `${email} 으로 인증 요청
              메일을 보냈습니다. ` //subTitle="해당 이메일을 확인 하시고, 인증 확인 링크를 눌러 주시기 바랍니다."
          // extra={[
          //   <Button type="primary" key="console">
          //     Go Console
          //   </Button>,
          //   <Button key="buy">Buy Again</Button>,
          // ]}

        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          fontSize: "16px",
          textAlign: "center"
        },
        children: ["\uD574\uB2F9 \uC774\uBA54\uC77C\uC744 \uD655\uC778 \uD558\uC2DC\uACE0, \uC778\uC99D \uD655\uC778 \uB9C1\uD06C\uB97C \uB20C\uB7EC \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.", " "]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        style: {
          fontSize: "13px",
          textAlign: "center",
          margin: "20px 0",
          color: "#888"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          style: {
            color: "red"
          },
          children: "*"
        }), "\uC774\uBA54\uC77C \uC778\uC99D\uC774 \uC644\uB8CC \uB418\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uC0AC\uC774\uD2B8 \uC774\uC6A9\uC5D0 \uC81C\uD55C\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          style: {
            color: "red"
          },
          children: "*"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        style: {
          fontSize: "13px",
          textAlign: "center",
          margin: "20px 0",
          textDecoration: "underline"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/auth/login",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            style: {
              color: "#888"
            },
            children: "\uB85C\uADF8\uC778"
          })
        })
      })]
    })]
  }));
};

/* harmony default export */ var auth_RegisterInputForm = (Object(router_["withRouter"])(RegisterInputForm));
// CONCATENATED MODULE: ./components/auth/RegisterTemplate.jsx




const RegisterTemplateWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "RegisterTemplate__RegisterTemplateWrapper",
  componentId: "sc-1qcexl0-0"
})(["background:#fff;border-radius:5px;padding:40px;margin-top:40px;margin-bottom:180px;"]);

const RegisterTemplate = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(RegisterTemplateWrapper, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(auth_RegisterInputForm, {})
  });
};

/* harmony default export */ var auth_RegisterTemplate = (RegisterTemplate);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/auth/register.jsx








const register = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "\uD68C\uC6D0\uAC00\uC785"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AuthLayout["a" /* default */], {
      type: "register",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(auth_RegisterTemplate, {})
    })]
  });
};

/* harmony default export */ var auth_register = __webpack_exports__["default"] = (register);

/***/ }),

/***/ "so/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("LAVF");
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Ktyj");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const AntHeader = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"].Header;
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(AntHeader).withConfig({
  displayName: "Header__HeaderWrapper",
  componentId: "sc-1jkvt1g-0"
})(["position:fixed;z-index:10;width:100%;background:#16172b;"]);
const InnerHeader = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Header__InnerHeader",
  componentId: "sc-1jkvt1g-1"
})(["width:1300px;margin:0 auto;display:flex;.ant-menu-horizontal{border:none;}@media (max-width:1368px){width:100%;}@media (max-width:950px){justify-content:space-between;}"]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Header__LogoWrapper",
  componentId: "sc-1jkvt1g-2"
})(["float:left;cursor:pointer;color:#fff;text-align:center;font-weight:bold;font-size:20px;width:100px;"]);
const MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"]).withConfig({
  displayName: "Header__MenuWrapper",
  componentId: "sc-1jkvt1g-3"
})(["background:#16172b;font-size:18px;margin:0 auto;height:64px;.ant-menu-item-active{a:hover{color:#188fffad;}border-bottom:2px solid transparent !important;}.ant-menu-submenu-title > span{color:white;}.ant-menu-item{a{color:white;font-weight:bold;margin:0 40px;}}.ant-menu-item-selected{border-bottom:2px solid transparent !important;a{color:#1890ff;}}@media (max-width:950px){display:none;}"]);
const MenuItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item).withConfig({
  displayName: "Header__MenuItemWrapper",
  componentId: "sc-1jkvt1g-4"
})([""]);
const ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Header__ButtonGroup",
  componentId: "sc-1jkvt1g-5"
})([".btn-register{margin-left:10px;background:#313355;border:1px solid #313355;&:hover{border:1px solid #16172b;}}.btn-logout{margin-left:10px;background:#313355;border:1px solid #313355;&:hover{border:1px solid #16172b;}}.btn-login{&:hover{color:#313355;border:1px solid #313355;}}.btn-mypage{&:hover{color:#313355;border:1px solid #313355;}}@media (max-width:768px){.btn-logout{display:none;}}"]);
const BadgeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "Header__BadgeWrapper",
  componentId: "sc-1jkvt1g-6"
})(["margin-right:60px;"]);
const MobileMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"]).withConfig({
  displayName: "Header__MobileMenuWrapper",
  componentId: "sc-1jkvt1g-7"
})(["position:fixed;top:64px;left:0;right:0;width:100%;margin:0;background:#16172bcc;z-index:10;display:flex;justify-content:center;.ant-menu-item-active{a:hover{color:#188fffad;}}.ant-menu-item{a{color:white;font-weight:bold;}}.ant-menu-item-selected{a{color:#1890ff;}}@media (min-width:950px){display:none;}"]);

const Header = ({
  router
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const {
    me,
    logoutLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.user);
  const {
    0: currentMenu,
    1: setCurrentMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: globalCount,
    1: setGlobalCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: chatRoomsRef,
    1: setChatRoomsRef
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_firebase__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].database().ref("chatRooms"));
  const onLogout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(async () => {
    let user = _firebase__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].auth().currentUser;

    if (user) {
      await _firebase__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].auth().signOut().then(() => {
        console.log("firebase logout 성공");
      });
      let firebaseMe = null;
      await _firebase__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].database().ref("users").child(user.uid).once("value", function (data) {
        firebaseMe = data.val();
      });
      await _firebase__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].database().ref("users").child(user.uid).update(_objectSpread(_objectSpread({}, firebaseMe), {}, {
        isInMypage: false
      }));
    }

    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_8__[/* logoutRequestAction */ "o"])());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    setTimeout(() => {
      let globalCount = 0;
      let tmpChatRoomInfo = [];
      me && chatRoomsRef.on("child_changed", DataSnapshot => {
        if (DataSnapshot.val()[me.nickname]) {
          //console.log(DataSnapshot.val());
          //console.log(DataSnapshot.val()[me.nickname].count);
          //globalCount += DataSnapshot.val()[me.nickname].count;
          globalCount++;
          setGlobalCount(globalCount);
        } else {
          //console.log("제거된 객체", DataSnapshot.val());
          // 여기서 datasnapshot.val()의 채팅방 id랑 tmpchatroominfo배열 원소 중 같은 것의 count를 뺴내어 globalcount에서 뺴준다
          tmpChatRoomInfo.forEach((v, i) => {
            if (v.chatRoomId === DataSnapshot.val().id) {
              globalCount -= v.count;
            }
          });
          setGlobalCount(globalCount);
        } //globalCount = 0;

      });
      me && chatRoomsRef.on("child_added", DataSnapshot => {
        // 초기
        //console.log(DataSnapshot.val());
        if (DataSnapshot.val()[me.nickname]) {
          //  globalCount += DataSnapshot.val()[me.nickname].count;
          //console.log(DataSnapshot.val());
          globalCount += DataSnapshot.val()[me.nickname].count;
          tmpChatRoomInfo.push(DataSnapshot.val()[me.nickname]);
          setGlobalCount(globalCount);
        } //console.log(tmpChatRoomInfo);
        // globalCount = 0;

      });
      me && chatRoomsRef.on("child_removed", DataSnapshot => {
        console.log("removed", DataSnapshot);
      });
    }, 700);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const route = router.route.split("/");
    setCurrentMenu(`/${route[1]}/${route[2]}`);
  }, [router]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    return () => chatRoomsRef.off();
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(HeaderWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(InnerHeader, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(LogoWrapper, {
            children: "CodePlat"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(MenuWrapper, {
        mode: "horizontal",
        selectedKeys: [currentMenu],
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(MenuItemWrapper, {
          className: "menu-study",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/articles/study",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              children: "\uC2A4\uD130\uB514"
            })
          })
        }, "/articles/study"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(MenuItemWrapper, {
          className: "menu-project",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/articles/project",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              children: "\uD504\uB85C\uC81D\uD2B8"
            })
          })
        }, "/articles/project"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(MenuItemWrapper, {
          className: "menu-forum",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/articles/forum",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              children: "\uD3EC\uB7FC"
            })
          })
        }, "/articles/forum")]
      }), me && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(BadgeWrapper, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
          count: globalCount,
          offset: [20, 0],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/mypage",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
              className: "head-example",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["BellOutlined"], {
                style: {
                  color: "#fff"
                }
              })
            })
          })
        })
      }), !me ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ButtonGroup, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/auth/login",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              className: "btn-login",
              children: "\uB85C\uADF8\uC778"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/auth/register",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              className: "btn-register",
              type: "primary",
              children: "\uD68C\uC6D0\uAC00\uC785"
            })
          })
        })]
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(ButtonGroup, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/mypage",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              className: "btn-mypage",
              children: "\uB9C8\uC774\uD398\uC774\uC9C0"
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          className: "btn-logout",
          type: "primary",
          onClick: onLogout,
          loading: logoutLoading,
          children: "\uB85C\uADF8\uC544\uC6C3"
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(MobileMenuWrapper, {
      selectedKeys: [currentMenu],
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(MenuItemWrapper, {
        className: "menu-study",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/articles/study",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "\uC2A4\uD130\uB514"
          })
        })
      }, "/articles/study"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(MenuItemWrapper, {
        className: "menu-project",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/articles/project",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "\uD504\uB85C\uC81D\uD2B8"
          })
        })
      }, "/articles/project"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(MenuItemWrapper, {
        className: "menu-forum",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/articles/forum",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            children: "\uD3EC\uB7FC"
          })
        })
      }, "/articles/forum")]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Header));

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

/***/ "w9p+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_constant_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zAG/");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_skill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uoZI");








const SkillFilterFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "SkillFilterForm__SkillFilterFormWrapper",
  componentId: "t2e762-0"
})(["margin:0 auto;width:900px;", " @media (max-width:1268px){width:100%;}"], props => (props.type === "register" || props.type === "write" || props.type === "mypage") && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["width:100%;"]));
const RadioWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "SkillFilterForm__RadioWrapper",
  componentId: "t2e762-1"
})([".ant-radio-group{display:flex;justify-content:space-between;.ant-radio-button-wrapper{flex:1;z-index:1;&:hover{color:#313355;}}.ant-radio-button-wrapper-checked{color:#fff;border:none;background:#313355;&::selection{border:none;}&::after{background:#313355 !important;}&::before{background:none;}&:hover{color:#fff;}}@media (max-width:768px){flex-direction:column;}}"]);
const CheckBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "SkillFilterForm__CheckBoxWrapper",
  componentId: "t2e762-2"
})(["padding:20px;background:#fff;.ant-checkbox-wrapper{color:#777;font-weight:400;}"]);
const SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "SkillFilterForm__SelectWrapper",
  componentId: "t2e762-3"
})(["padding:20px 0;.ant-select-selection-item-remove{display:none;}.ant-select{width:100%;}"]);

const SkillFilterForm = ({
  type,
  isEdit,
  values
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    0: radioValue,
    1: setRadioValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("language");
  const {
    0: checkList,
    1: setCheckList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_lib_constant_constant__WEBPACK_IMPORTED_MODULE_4__[/* StackList */ "d"].language);
  const [checkedValues, setCheckedValues] = isEdit ? Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(values) : Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const onClickRadio = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setRadioValue(e.target.value);
    setCheckList(_lib_constant_constant__WEBPACK_IMPORTED_MODULE_4__[/* StackList */ "d"][e.target.value]);
  }, []);
  const onClickCheckBox = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    if (checkedValues.includes(e.target.value)) {
      setCheckedValues(checkedValues.filter((v, i) => {
        return v !== e.target.value;
      }));
    } else {
      if (!e.target.value) return;
      setCheckedValues(checkedValues.concat(e.target.value));
    }
  }, [checkedValues, values]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch(Object(_reducers_skill__WEBPACK_IMPORTED_MODULE_6__[/* skillChangeAction */ "c"])(checkedValues));
  }, [checkedValues]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    return () => {
      dispatch(Object(_reducers_skill__WEBPACK_IMPORTED_MODULE_6__[/* initializeSkillAction */ "b"])());
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(SkillFilterFormWrapper, {
    type: type,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(RadioWrapper, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
        defaultValue: "language",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
          value: "language",
          onClick: onClickRadio,
          children: "\uC5B8\uC5B4"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
          value: "framework",
          onClick: onClickRadio,
          children: "\uD504\uB808\uC784\uC6CC\uD06C"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
          value: "database",
          onClick: onClickRadio,
          children: "\uB370\uC774\uD130\uBCA0\uC774\uC2A4"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
          value: "cloudos",
          onClick: onClickRadio,
          children: "\uD074\uB77C\uC6B0\uB4DC/OS"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
          value: "mldl",
          onClick: onClickRadio,
          children: "ML/DL"
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CheckBoxWrapper, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"].Group, {
        options: checkList,
        defaultValue: isEdit ? values : [],
        onClick: onClickCheckBox
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SelectWrapper, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
        mode: "tags",
        placeholder: type === "register" ? "관심 기술을 선택해주세요." : "기술을 선택해주세요",
        value: checkedValues
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(SkillFilterForm));

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "wfgH":
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zAG/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SERVER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Locations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StackList; });
const SERVER_URL = "http://localhost:4000";
const EmailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const Locations = [{
  key: "전체",
  value: "전체"
}, {
  key: "서울",
  value: "서울"
}, {
  key: "경기",
  value: "경기"
}, {
  key: "인천",
  value: "인천"
}, {
  key: "강원",
  value: "강원"
}, {
  key: "충남",
  value: "충남"
}, {
  key: "대전",
  value: "대전"
}, {
  key: "충북",
  value: "충북"
}, {
  key: "부산",
  value: "부산"
}, {
  key: "울산",
  value: "울산"
}, {
  key: "대구",
  value: "대구"
}, {
  key: "경북",
  value: "경북"
}, {
  key: "경남",
  value: "경남"
}, {
  key: "전남",
  value: "전남"
}, {
  key: "광주",
  value: "광주"
}, {
  key: "전북",
  value: "전북"
}, {
  key: "제주",
  value: "제주"
}];
const StackList = {
  language: ["JavaScript", "HTML/CSS", "SQL", "Python", "Java", "Bash/Shell", "C#", "PHP", "TypeScript", "C++", "C", "Go", "Kotlin", "Ruby", "VBA", "Swift", "R", "Rust", "Objective-C", "Dart", "Scala", "Perl", "Haskell", "julia"],
  framework: ["JQuery", "React.js", "Angular.js", "ASP.NET", "Express", "Vue.js", "Spring", "Django", "Flask", "Laravel", "Ruby on Rails", "Gatsby", "Node.js", ".NET", "React Native", "Unity 3D", "Android", "Flutter", "Cordorva", "Xamarin", "Unreal Engine"],
  database: ["MySQL", "PostgreSQL", "Microsoft SQL", "SQLite", "MongoDB", "Redis", "MariaDB", "Oracle", "Firebase", "Elasticsearch", "DynamoDB", "Cassandra", "IBM DB2"],
  cloudos: ["Linux", "Docker", "AWS", "Raspberry Pi", "Azure", "WordPress", "Kubernetes", "Heroku", "Arduino"],
  mldl: ["Pandas", "TensorFlow", "Keras", "Torch/PyThoch", "Hadoop", "Spark"]
};

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