import React, { useCallback, useState } from "react";
import styled from "styled-components";
import {
  List,
  Avatar,
  Space,
  Tag,
  Popover,
  Skeleton,
  Button,
  Comment,
  Divider,
} from "antd";
import ProfileModal from "../../modal/ProfileModal";
import { UserOutlined } from "@ant-design/icons";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import useToggle from "../../../hooks/useToggle";
import CommentListItem from "./CommentListItem";
import { SERVER_URL } from "../../../lib/constant/constant";

const PostViewerContentWrapper = styled.div`
  background: #fff;
  padding: 20px 40px;
  /* border: 1px solid red; */
  .post-title {
    /* border: 1px solid black; */
  }
  .post-summary {
    /* border: 1px solid black; */
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
    /* border: 1px solid black; */
    font-weight: 300;
    padding: 20px 0;
  }

  .comment-list-wrapper {
    /* border: 1px solid black; */
  }
  .comment-form {
    /* border: 1px solid black; */
    padding: 15px 0;
  }
`;

const PostViewerContent = ({ post, contentType }) => {
  const { me } = useSelector((state) => state.user);

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
              <span>모집 인원</span>
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

      <div className="comment-list-wrapper">
        {post && (
          <List
            className="comment-list"
            header={`${post.comments.length}개의 댓글이 있습니다.`}
            itemLayout="horizontal"
            dataSource={post.comments}
            renderItem={(item) =>
              !item.commentTo && <CommentListItem item={item} post={post} />
            }
          />
        )}
        {me && (
          <div className="comment-form">
            <Divider />
            <Comment
              post={post}
              avatar={
                <Popover
                  content={
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <ProfileModal writer={me}></ProfileModal>
                    </div>
                  }
                >
                  <Avatar
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    style={{ cursor: "pointer" }}
                    icon={<UserOutlined />}
                    src={
                      me.avatarUrl && (
                        <img src={`${SERVER_URL}/${me.avatarUrl}`} />
                      )
                    }
                  />{" "}
                </Popover>
              }
              content={<CommentForm post={post} />}
            />
          </div>
        )}
      </div>
    </PostViewerContentWrapper>
  );
};

export default PostViewerContent;
