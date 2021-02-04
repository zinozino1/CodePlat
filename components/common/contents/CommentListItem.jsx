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
  Input,
  Image,
} from "antd";
import ProfileModal from "../../modal/ProfileModal";
import { UserOutlined } from "@ant-design/icons";
import CommentForm from "./CommentForm";
import { useSelector, useDispatch } from "react-redux";
import useToggle from "../../../hooks/useToggle";
import { SERVER_URL } from "../../../lib/constant/constant";
import shortid from "shortid";
import {
  addCommentRequestAction,
  deleteCommentRequestAction,
} from "../../../reducers/post";
import useInput from "../../../hooks/useInput";
import Router from "next/router";

const ReApplyFormWrapper = styled.div`
  width: 600px;
  display: flex;
  @media (max-width: 768px) {
    width: 200px;
    display: block;
  }
`;

const ReApplyInput = styled(Input.TextArea)`
  flex: 7;
`;

const ButtonWrapper = styled.div`
  line-height: 30px;
  flex: 1;
  .cancel-btn {
    cursor: pointer;
    margin-left: 5px;
  }
  .submit-btn {
    cursor: pointer;
    color: #208fff;
    margin-left: 10px;
  }
`;

const CommentListItem = ({ item, post }) => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //console.log(item);
  const [reComment, onChangeReComment] = useInput("");

  const onReCommentSubmit = useCallback(() => {
    dispatch(
      addCommentRequestAction({
        postId: post._id,
        type: post.type,
        content: reComment,
        commentTo: item._id,
        //writer: me,
      }),
    );
    Router.push(`http://localhost:3000/articles/${post.type}/${post._id}`);
  }, [post, item, reComment]);

  const onDeleteComment = useCallback(
    (id) => {
      //console.log(id);
      dispatch(deleteCommentRequestAction(id));
      Router.push(`http://localhost:3000/articles/${post.type}/${post._id}`);
    },
    [item, post],
  );

  const [applyToggle, onChangeApplyToggle] = useToggle(false);

  return (
    <li>
      <Comment
        actions={
          me &&
          (!applyToggle
            ? [
                <span
                  key="comment-list-reply-to-0"
                  onClick={onChangeApplyToggle}
                >
                  대댓글 쓰기
                </span>,
                <span>{me._id === item.writer._id && <span>|</span>}</span>,
                <span>
                  {me._id === item.writer._id && (
                    <span
                      key="comment-list-reply-to-0"
                      onClick={() => {
                        onDeleteComment(item._id);
                      }}
                    >
                      삭제
                    </span>
                  )}
                </span>,
                ,
              ]
            : [
                <>
                  <ReApplyFormWrapper>
                    <ReApplyInput rows={1} onChange={onChangeReComment} />
                    <ButtonWrapper>
                      <span
                        className="submit-btn"
                        key="comment-list-reply-to-0"
                        onClick={onReCommentSubmit}
                      >
                        등록
                      </span>
                      <span
                        className="cancel-btn"
                        key="comment-list-reply-to-1"
                        onClick={onChangeApplyToggle}
                      >
                        취소
                      </span>
                    </ButtonWrapper>
                  </ReApplyFormWrapper>
                </>,
              ])
        }
        author={item.writer.nickname}
        avatar={
          <Popover
            content={
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ProfileModal writer={item.writer}></ProfileModal>
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
                item.writer.avatarUrl && (
                  <Image src={`${SERVER_URL}/${item.writer.avatarUrl}`} />
                )
              }
            />{" "}
          </Popover>
        }
        content={item.content}
        datetime={`${new Date(item.createAt).getFullYear()}.${
          new Date(item.createAt).getMonth() + 1
        }.${new Date(item.createAt).getDay()}`}
      >
        {post.comments.map((v, i) => {
          if (v.commentTo === item._id) {
            return (
              <div key={v._id + shortid.generate()}>
                <Comment
                  author={v.writer.nickname}
                  actions={[
                    <span>
                      {me._id === item.writer._id && (
                        <span
                          key="comment-list-reply-to-0"
                          onClick={() => {
                            onDeleteComment(v._id);
                          }}
                        >
                          삭제
                        </span>
                      )}
                    </span>,
                  ]}
                  avatar={
                    <Popover
                      content={
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <ProfileModal writer={v.writer}></ProfileModal>
                        </div>
                      }
                    >
                      <Avatar
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        style={{
                          cursor: "pointer",
                        }}
                        size={24}
                        icon={<UserOutlined />}
                        src={
                          item.writer.avatarUrl && (
                            <Image
                              src={`${SERVER_URL}/${item.writer.avatarUrl}`}
                            />
                          )
                        }
                      />
                    </Popover>
                  }
                  content={v.content}
                  datetime={`${new Date(v.createAt).getFullYear()}.${
                    new Date(v.createAt).getMonth() + 1
                  }.${new Date(v.createAt).getDay()}`}
                />
              </div>
            );
          }
        })}
      </Comment>
    </li>
  );
};

export default CommentListItem;
