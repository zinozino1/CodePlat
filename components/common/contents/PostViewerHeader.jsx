import React from "react";
import styled from "styled-components";
import {
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
  EyeOutlined,
  CommentOutlined,
  UserOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { List, Avatar, Space, Tag, Popover, Skeleton, Button } from "antd";
import ProfileModal from "../../modal/ProfileModal";

const PostViewerHeaderWrapper = styled.div`
  /* display: flex; */
  justify-content: space-between;
  font-size: 18px;
  font-weight: 300;
  background: #fff;
  padding: 20px 40px;

  .user-profile {
    flex: 1;
    /* border: 1px solid black; */
    padding: 5px 0;
    .user-nickname {
      margin: 0 5px;
    }
  }
  .post-desc {
    font-size: 12px;
    color: #888;
    flex: 1;
    text-align: left;
    /* border: 1px solid black; */
    line-height: 30px;
    .create-date {
      margin-right: 10px;
    }
    .post-views {
      margin: 0 5px;
      margin-right: 10px;
    }
    .post-comments {
      margin: 0 5px;
    }
    .scrap-btn {
      margin-left: 10px;

      text-align: center;
    }
  }
`;

const PostViewerHeader = ({ post, contentType }) => {
  return (
    <PostViewerHeaderWrapper>
      <div className="user-profile">
        <Popover
          content={
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ProfileModal writer={post.writer}></ProfileModal>
            </div>
          }
        >
          <Avatar
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{ cursor: "pointer" }}
            size={24}
            icon={<UserOutlined />}
          />{" "}
        </Popover>
        <span className="user-nickname">{post.writer.nickname}</span>
      </div>
      <div className="post-desc">
        <span className="create-date">{`${post.createAt.getFullYear()}.${
          post.createAt.getMonth() + 1
        }.${post.createAt.getDay()}`}</span>
        <EyeOutlined />
        <span className="post-views">{post.views}</span>
        <MessageOutlined />
        <span className="post-comments">{post.comments.length}</span>
        {contentType == "forum" && (
          <Button className="scrap-btn">
            <TagsOutlined />
          </Button>
        )}
      </div>
    </PostViewerHeaderWrapper>
  );
};

export default PostViewerHeader;
