import React, { useCallback, useState } from "react";
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
import {
  postScrapRequestAction,
  deletePostRequestAction,
} from "../../../reducers/post";
import { useDispatch, useSelector } from "react-redux";
import { SERVER_URL } from "../../../lib/constant/constant";
import Router from "next/router";
import useToggle from "../../../hooks/useToggle";
import WriteForm from "./WriteForm";

const PostViewerHeaderWrapper = styled.div`
  /* display: flex; */
  justify-content: space-between;
  font-size: 18px;
  font-weight: 300;
  background: #fff;
  padding: 20px 40px;

  .user-profile {
    flex: 1;
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

    line-height: 30px;
    display: flex;
    .post-summary {
    }
    .post-btns {
      text-align: right;

      flex: 1;
    }
    .create-date {
      margin-right: 10px;
    }
    .create-time {
      margin-right: 10px;
    }
    .post-views,
    .post-comments,
    .post-forum-likes,
    .post-forum-scraps {
      margin: 0 7px;
    }
    /* .post-comments {
      margin: 0 7px;
    }
    .post-forum-likes {
      margin: 0 7px;
    }
    .post-forum-scraps {
      margin: 0 7px;
    } */
    .scrap-btn,
    .delete-btn,
    .like-btn,
    .revise-btn {
      padding: 5px;
      margin: 0 5px;
      border: none;
      text-align: center;
    }
    /* .delete-btn {
      padding: 5px;
      margin-left: 10px;
      border: none;
      text-align: center;
    }
    .like-btn {
      padding: 5px;
      margin-left: 10px;
      border: none;
      text-align: center;
    } */
  }
`;

const PostViewerHeader = ({ post, contentType }) => {
  const dispatch = useDispatch();

  const { me } = useSelector((state) => state.user);

  const onScrap = useCallback((id) => {
    dispatch(postScrapRequestAction(id));
  }, []);

  const onPostDelete = useCallback(
    (deleteType) => {
      let confirmDelete =
        deleteType === "recruitDone"
          ? confirm("게시글이 삭제됩니다 정말로 모집완료 처리하시겠습니까?")
          : confirm("정말로 삭제하시겠습니까?");
      if (confirmDelete) {
        dispatch(deletePostRequestAction(post._id));
        Router.push(`http://localhost:3000/articles/${contentType}`);
      } else {
        return;
      }
    },
    [post],
  );

  const onPostRevise = useCallback(() => {
    let confirmRevise = confirm("글을 수정하시겠습니까?");
    if (confirmRevise) {
      Router.push(`http://localhost:3000/articles/edit/${post._id}`);
    } else {
    }
  }, [post]);

  return (
    <>
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
                  <Image
                    src={`${SERVER_URL}/${post.writer.avatarUrl}`}
                    width={100}
                  />
                )
              }
            />{" "}
          </Popover>
          <span className="user-nickname">{post.writer.nickname}</span>
        </div>
        <div className="post-desc">
          <div className="post-header-summary">
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
            {contentType === "forum" && (
              <>
                <LikeOutlined />
                <span className="post-forum-likes">{post.likes.length}</span>
                <TagsOutlined />
                <span className="post-forum-scraps">{post.scraps.length}</span>
              </>
            )}
          </div>
          <div className="post-btns">
            {me && contentType == "forum" && (
              <>
                <Button
                  className="scrap-btn"
                  onClick={() => {
                    onScrap(post.id);
                  }}
                >
                  <TagsOutlined />
                </Button>
              </>
            )}
            {me && contentType == "forum" && (
              <Button
                type="ghost"
                className="like-btn"
                onClick={() => {
                  //onPostDelete();
                }}
              >
                <LikeOutlined />
              </Button>
            )}
            {me &&
              (contentType === "study" || contentType === "project") &&
              me._id === post.writer._id && (
                <>
                  <Button
                    type="ghost"
                    className="revise-btn"
                    onClick={() => {
                      onPostDelete("recruitDone");
                    }}
                  >
                    모집완료
                    {/* <Tag color="green">모집완료</Tag> */}
                  </Button>
                  <span>/</span>
                </>
              )}

            {me && me._id === post.writer._id && (
              <>
                <Button
                  type="ghost"
                  className="revise-btn"
                  onClick={() => {
                    onPostRevise();
                  }}
                >
                  수정
                </Button>
              </>
            )}

            {me && me._id === post.writer._id && contentType === "forum" && (
              <Button
                type="ghost"
                style={{ color: "tomato" }}
                className="delete-btn"
                onClick={() => {
                  onPostDelete("deletePost");
                }}
              >
                삭제
              </Button>
            )}
          </div>
        </div>
      </PostViewerHeaderWrapper>
    </>
  );
};

export default PostViewerHeader;
