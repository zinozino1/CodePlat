import React from "react";
import styled from "styled-components";
import { Tag, Button, List, Comment } from "antd";

const PostViewerContentWrapper = styled.div`
    background: #fff;
    padding: 20px;
    border: 1px solid red;
    .post-title {
        border: 1px solid black;
    }
    .post-summary {
        border: 1px solid black;
        padding: 20px 0;
        .label {
            color: #888;
            flex: 1;
        }
        .content {
            flex: 10;
        }

        .summary-row {
            display: flex;
            padding: 5px 0;
        }
        @media (max-width: 768px) {
            .label {
                flex: 1;
            }
            .content {
                flex: 3;
            }
        }
    }
    .post-content {
        border: 1px solid black;
        font-weight: 300;
        padding: 20px 0;
    }
    .comment-btn {
        text-align: right;
        border: 1px solid black;
    }
    .comment-form {
        border: 1px solid black;
    }
`;

const PostViewerContent = ({ post, contentType }) => {
    return (
        <PostViewerContentWrapper>
            <div className="post-title">
                <h2>{post.title}</h2>
            </div>
            {contentType == "forum" && (
                <div className="post-summary">
                    <div className="summary-row">
                        <div className="label">
                            <span>태그</span>
                        </div>
                        <div className="content">
                            {post.tags.map((v, i) => (
                                <Tag color="magenta" key={v}>
                                    {v}
                                </Tag>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {(contentType == "study" || contentType === "project") && (
                <div className="post-summary">
                    <div className="summary-row">
                        <div className="label">
                            <span>활용 기술</span>
                        </div>
                        <div className="content">
                            {post.techStack.map((v, i) => (
                                <Tag color="magenta" key={v}>
                                    {v}
                                </Tag>
                            ))}
                        </div>
                    </div>
                    <div className="summary-row">
                        <div className="label">
                            <span>지역</span>
                        </div>
                        <div className="content">
                            <Tag color="geekblue">{post.area}</Tag>
                        </div>
                    </div>
                    <div className="summary-row">
                        <div className="label">
                            <span>모집인원</span>
                        </div>
                        <div className="content">
                            <Tag color="gold">{post.recruitment}</Tag>
                        </div>
                    </div>
                    <div className="summary-row">
                        <div className="label">
                            <span>진행 여부</span>
                        </div>
                        <div className="content">
                            {post.isOnGoing ? (
                                <Tag color="volcano">모집중</Tag>
                            ) : (
                                <Tag color="green">모집완료</Tag>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className="post-content">
                <p>{post.content}</p>
            </div>
            <div className="comment-btn">
                <Button>댓글 쓰기</Button>
            </div>
            <div className="comment-form">
                <List
                    className="comment-list"
                    header={`${post.comments.length}개의 댓글이 있습니다.`}
                    itemLayout="horizontal"
                    dataSource={post.comments}
                    renderItem={(item) => (
                        <li>
                            <Comment
                                //actions={item.actions}
                                author={item.writer}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.createAt.getFullYear()}
                            />
                        </li>
                    )}
                />
            </div>
        </PostViewerContentWrapper>
    );
};

export default PostViewerContent;
