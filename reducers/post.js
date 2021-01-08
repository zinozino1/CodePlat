import { handleActions } from "redux-actions";

// initial state

const initialState = {
    studyPosts: [
        {
            id: 1,
            title: "React Study 모집합니다.",
            content: "content1",
            filePath: "/usr/bin",
            writer: {
                id: 124123,
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
            },
            createAt: new Date(),
            views: 100,
            techStack: ["React", "Node.js"],
            area: "수원",
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
        {
            id: 2,
            title: "자바 스터디원 구합니다.",
            content: "content1222",
            filePath: "/usr/bin",
            writer: {
                id: 222,
                nickname: "zxcvzxcv",
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
            },
            createAt: new Date(),
            views: 101230,
            techStack: ["React", "Node.js", "Mongo", "Java"],
            area: "서울",
            recruitment: 10,
            type: "study",
            isOnGoing: false,
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
