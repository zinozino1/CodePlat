import { handleActions, createAction } from "redux-actions";
import shortId from "shortid";
import faker from "faker";

// initial state

const initialState = {
    studyPosts: [],
    projectPosts: [],
    forumPosts: [],
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    mainLoadPostsLoading: false,
    mainLoadPostsDone: false,
    mainLoadPostsError: null,
};

const dummyPostCreator = (type, number) => {
    if (type == "study" || type == "project")
        return Array(number)
            .fill()
            .map((v, i) => ({
                id: shortId.generate(),
                title: faker.lorem.sentence(),
                content: faker.lorem.paragraph(),
                filePath: faker.image.image(),
                writer: {
                    id: shortId.generate(),
                    nickname: faker.name.findName(),
                    email: faker.lorem.sentence(),
                    password: faker.random.word(),
                    techStack: Array(3)
                        .fill()
                        .map((v, i) => faker.lorem.word()),
                    githubUrl: faker.lorem.sentence(),
                    filePath: faker.image.image(),
                    posts: Array(3)
                        .fill()
                        .map((v, i) => {
                            dummy: i;
                        }),
                },
                createAt: faker.date.recent(),
                techStack: Array(3)
                    .fill()
                    .map((v, i) => faker.lorem.word()),
                views: parseInt(faker.random.number() / 100),
                area: "서울",
                recruitment: 4,
                type: type === "study" ? "study" : "project",
                isOnGoing: faker.random.boolean(),
                likes: parseInt(faker.random.number() / 100),
                scraped: parseInt(faker.random.number() / 100),
                comments: Array(3)
                    .fill()
                    .map((v, i) => ({
                        id: shortId.generate(),
                        writer: 2,
                        content: "안녕하세요",
                        postId: 1,
                        createAt: new Date(),
                        commentTo: null, // 대댓글이 아님
                        secret: false,
                        likes: 30,
                    })),
            }));
    else
        return Array(number)
            .fill()
            .map((v, i) => ({
                id: shortId.generate(),
                title: faker.lorem.sentence(),
                content: faker.lorem.paragraph(),
                filePath: faker.image.image(),
                writer: {
                    id: shortId.generate(),
                    nickname: faker.name.findName(),
                    email: faker.lorem.sentence(),
                    password: faker.random.word(),
                    techStack: Array(3)
                        .fill()
                        .map((v, i) => faker.lorem.word()),
                    githubUrl: faker.lorem.sentence(),
                    filePath: faker.image.image(),
                    posts: Array(3)
                        .fill()
                        .map((v, i) => {
                            dummy: i;
                        }),
                },
                createAt: faker.date.recent(),
                techStack: Array(3)
                    .fill()
                    .map((v, i) => faker.lorem.word()),
                views: parseInt(faker.random.number() / 100),
                area: "서울",
                type: "forum",
                likes: parseInt(faker.random.number() / 100),
                scraped: parseInt(faker.random.number() / 100),
                comments: Array(3)
                    .fill()
                    .map((v, i) => ({
                        id: shortId.generate(),
                        writer: 2,
                        content: "안녕하세요",
                        postId: 1,
                        createAt: new Date(),
                        commentTo: null, // 대댓글이 아님
                        secret: false,
                        likes: 30,
                    })),
                filter: "QnA",
                tags: Array(3)
                    .fill()
                    .map((v, i) => faker.random.word()),
            }));
};

// action type

export const INITIALIZE_POSTS = "post/INITIALIZE_POSTS";

export const LOAD_POSTS_REQUEST = "post/LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "post/LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "post/LOAD_POSTS_FAILURE";

export const MAIN_LOAD_POSTS_REQUEST = "post/MAIN_LOAD_POSTS_REQUEST";
export const MAIN_LOAD_POSTS_SUCCESS = "post/MAIN_LOAD_POSTS_SUCCESS";
export const MAIN_LOAD_POSTS_FAILURE = "post/MAIN_LOAD_POSTS_FAILURE";

// action creator

export const loadPostsReqeustAction = createAction(
    LOAD_POSTS_REQUEST,
    (data) => data,
);

export const mainLoadPostsReqeustAction = createAction(MAIN_LOAD_POSTS_REQUEST);

export const initializePostsAction = createAction(INITIALIZE_POSTS);

// reducer

const postReducer = handleActions(
    {
        [INITIALIZE_POSTS]: (state, action) => ({
            ...state,
            studyPosts: [],
            projectPosts: [],
            forumPosts: [],
        }),
        [LOAD_POSTS_REQUEST]: (state, action) => ({
            ...state,
            loadPostsLoading: true,
            loadPostsDone: false,
            loadPostsError: null,
        }),
        [LOAD_POSTS_SUCCESS]: (state, action) => ({
            ...state,
            loadPostsLoading: false,
            loadPostsDone: true,
            loadPostsError: null,
        }),
        [LOAD_POSTS_FAILURE]: (state, action) => ({
            ...state,
            loadPostsLoading: false,
            loadPostsDone: false,
            loadPostsError: null,
        }),
        [MAIN_LOAD_POSTS_REQUEST]: (state, action) => ({
            ...state,
            mainLoadPostsLoading: true,
            mainLoadPostsDone: false,
            mainLoadPostsError: null,
        }),
        [MAIN_LOAD_POSTS_SUCCESS]: (state, action) => ({
            ...state,
            mainLoadPostsLoading: false,
            mainLoadPostsDone: true,
            mainLoadPostsError: null,
            studyPosts: [...dummyPostCreator("study", 5), ...state.studyPosts],
            projectPosts: [
                ...dummyPostCreator("project", 5),
                ...state.projectPosts,
            ],
            forumPosts: [...dummyPostCreator("forum", 8), ...state.forumPosts],
        }),
        [MAIN_LOAD_POSTS_FAILURE]: (state, action) => ({
            ...state,
            mainLoadPostsLoading: false,
            mainLoadPostsDone: false,
            mainLoadPostsError: null,
        }),
    },
    initialState,
);

export default postReducer;
