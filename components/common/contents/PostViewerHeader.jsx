import React, { useCallback } from "react";
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
import {
  List,
  Avatar,
  Space,
  Tag,
  Popover,
  Skeleton,
  Button,
  Image,
} from "antd";
import ProfileModal from "../../modal/ProfileModal";
import { postScrapRequestAction } from "../../../reducers/post";
import { useDispatch } from "react-redux";
import { SERVER_URL } from "../../../lib/constant/constant";

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
    .create-time {
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
  const dispatch = useDispatch();

  const onScrap = useCallback((id) => {
    dispatch(postScrapRequestAction(id));
  }, []);

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
            src={
              post.writer.avatarUrl && (
                <Image src={`${SERVER_URL}/${post.writer.avatarUrl}`} />
              )
            }
          />{" "}
        </Popover>
        <span className="user-nickname">{post.writer.nickname}</span>
      </div>
      <div className="post-desc">
        <span className="create-date">
          {`${new Date(post.writer.createdAt).getFullYear()}.${
            new Date(post.writer.createdAt).getMonth() + 1
          }.${new Date(post.writer.createdAt).getDate()}`}
        </span>
        <span className="create-time">
          {`${new Date(post.writer.createdAt).getHours()}:${new Date(
            post.writer.createdAt,
          ).getMinutes()}:${new Date(post.writer.createdAt).getSeconds()}`}
        </span>
        <EyeOutlined />
        <span className="post-views">{post.views}</span>
        <MessageOutlined />
        <span className="post-comments">{post.comments.length}</span>
        {contentType == "forum" && (
          <Button
            className="scrap-btn"
            onClick={() => {
              onScrap(post.id);
            }}
          >
            <TagsOutlined />
          </Button>
        )}
      </div>
    </PostViewerHeaderWrapper>
  );
};

export default PostViewerHeader;
