import { handleActions, createAction } from "redux-actions";

// initial state

const initialState = {
    me: null,
    loginLoading: false,
    loginDone: false,
    loginError: null,
    logoutLoading: false,
    logoutDone: false,
    logoutError: null,
};

const dummyMeCreator = () => {
    return {
        nickname: "zinozino",
        email: "gogod23@naver.com",
        password: "safmimf3i2@#k9aci",
        techStack: [],
        githubUrl: "http://github.com/zinozino1",
        filePath: "",
        posts: [
            {
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
                comments: [
                    {
                        id: 1,
                        writer: 2,
                        content: "안녕하세요",
                        postId: 1,
                        createAt: new Date(),
                        commentTo: null, // 대댓글이 아님
                        secret: false,
                        likes: 30,
                    },
                ],
            },
        ],
    };
};

// action type

export const LOG_IN_REQUEST = "user/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "user/LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "user/LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "user/LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "user/LOG_OUT_FAILURE";

// action creator

export const loginRequestAction = createAction(LOG_IN_REQUEST, (data) => data);
export const logoutRequestAction = createAction(LOG_OUT_REQUEST);

// reducer

const userReducer = handleActions(
    {
        [LOG_IN_REQUEST]: (state, action) => ({
            ...state,
            loginLoading: true,
            loginDone: false,
            loginError: null,
        }),
        [LOG_IN_SUCCESS]: (state, action) => ({
            ...state,
            loginLoading: false,
            loginDone: true,
            loginError: null,
            me: dummyMeCreator(),
        }),
        [LOG_IN_FAILURE]: (state, action) => ({
            ...state,
            loginLoading: false,
            loginDone: false,
            loginError: action.error,
        }),
        [LOG_OUT_REQUEST]: (state, action) => ({
            ...state,
            logoutLoading: true,
            logoutDone: false,
            logoutError: null,
        }),
        [LOG_OUT_SUCCESS]: (state, action) => ({
            ...state,
            logoutLoading: false,
            logoutDone: true,
            logoutError: null,
            me: null,
        }),
        [LOG_OUT_FAILURE]: (state, action) => ({
            ...state,
            logoutLoading: false,
            logoutDone: false,
            logoutError: action.error,
        }),
    },
    initialState,
);

export default userReducer;
