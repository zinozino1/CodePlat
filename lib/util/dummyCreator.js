import shortId from "shortid";
import faker from "faker";

export const dummyPostCreator = (type) => {
    if (type == "study" || type == "project")
        return {
            id: shortId.generate(),
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            filePath: faker.image.image(),
            writer: {
                id: shortId.generate(),
                nickname: faker.name.findName(),
                email: faker.random.word(),
                password: faker.random.word(),
                techStack: Array(3)
                    .fill()
                    .map((v, i) => faker.lorem.word()),
                githubUrl: faker.random.word(),
                filePath: faker.image.image(),
                posts: Array(3)
                    .fill()
                    .map((v, i) => {
                        dummy: i;
                    }),
                rating: 4,
                registerDate: faker.date.recent(),
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
                    writer: "John",
                    content: "안녕하세요",
                    postId: 1,
                    createAt: new Date(),
                    commentTo: null, // 대댓글이 아님
                    secret: false,
                    likes: 30,
                })),
        };
    else
        return {
            id: shortId.generate(),
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            filePath: faker.image.image(),
            writer: {
                id: shortId.generate(),
                nickname: faker.name.findName(),
                email: faker.random.word(),
                password: faker.random.word(),
                techStack: Array(3)
                    .fill()
                    .map((v, i) => faker.lorem.word()),
                githubUrl: faker.random.word(),
                filePath: faker.image.image(),
                posts: Array(3)
                    .fill()
                    .map((v, i) => {
                        dummy: i;
                    }),
                rating: 4,
                registerDate: faker.date.recent(),
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
                    writer: "Harry",
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
        };
};

export const dummyPostsCreator = (type, number) => {
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
                    email: faker.random.word(),
                    password: faker.random.word(),
                    techStack: Array(3)
                        .fill()
                        .map((v, i) => faker.lorem.word()),
                    githubUrl: faker.random.word(),
                    filePath: faker.image.image(),
                    posts: Array(3)
                        .fill()
                        .map((v, i) => {
                            dummy: i;
                        }),
                    rating: 4,
                    registerDate: faker.date.recent(),
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
                    email: faker.random.word(),
                    password: faker.random.word(),
                    techStack: Array(3)
                        .fill()
                        .map((v, i) => faker.lorem.word()),
                    githubUrl: faker.random.word(),
                    filePath: faker.image.image(),
                    posts: Array(3)
                        .fill()
                        .map((v, i) => {
                            dummy: i;
                        }),
                    rating: 4,
                    registerDate: faker.date.recent(),
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
