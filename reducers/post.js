import { handleActions } from "redux-actions";

// initial state

const initialState = {
    studyPosts: [
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
                {
                    id: 2,
                    writer: 3,
                    content: "반갑습니다. ",
                    postId: 1,
                    createAt: new Date(),
                    commentTo: null, // 대댓글이 아님
                    secret: false,
                    likes: 15,
                },
            ],
        },
    ],
    projectPosts: [
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
                {
                    id: 2,
                    writer: 3,
                    content: "반갑습니다. ",
                    postId: 1,
                    createAt: new Date(),
                    commentTo: null, // 대댓글이 아님
                    secret: false,
                    likes: 15,
                },
            ],
        },
    ],
    communityPosts: [
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
            type: "qna",
            isOnGoing: true,
            likes: 40,
            scraped: 10,
            tags: ["가입인사", "사는얘기"],
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

const dummyPostCreator = (type, number) => {};

// action type

// action creator

// reducer

const postReducer = handleActions({}, initialState);

export default postReducer;
