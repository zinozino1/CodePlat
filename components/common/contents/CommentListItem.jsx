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
  Checkbox,
} from "antd";
import ProfileModal from "../../modal/ProfileModal";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
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
import axios from "axios";

const ReApplyFormWrapper = styled.div`
  /* border: 1px solid black; */
  width: 800px;
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
  .secret-btn {
    margin-left: 10px;
  }
`;

const CommentListItem = ({ item, post }) => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //console.log(item);
  const [reComment, onChangeReComment] = useInput("");
  const [isSecret, onToggleIsSecret] = useToggle(false);

  const onReCommentSubmit = useCallback(() => {
    dispatch(
      addCommentRequestAction({
        postId: post._id,
        type: post.type,
        content: reComment,
        commentTo: item._id,
        secretComment: isSecret,
      }),
    );
    Router.push(`http://localhost:3000/articles/${post.type}/${post._id}`);
  }, [post, item, reComment, isSecret]);

  const onDeleteComment = useCallback(
    (id) => {
      let confirmDelete = confirm("정말로 삭제하시겠습니까?");
      if (confirmDelete) {
        let flag = false;

        let parentId = null;
        post.comments.forEach((v, i) => {
          if (id === v.commentTo) {
            flag = true;
          }
        });
        if (flag) {
          dispatch(deleteCommentRequestAction({ type: "children", id }));
        } else {
          let child;
          let parent;
          let childInParentLength = 0;
          post.comments.forEach((v, i) => {
            if (id === v._id) {
              child = v;
            }
          });
          post.comments.forEach((v, i) => {
            if (child.commentTo === v._id) {
              parent = v;
            }
          });
          post.comments.forEach((v, i) => {
            if (parent && parent._id === v.commentTo) {
              childInParentLength++;
            }
          });

          if (parent && parent.isDelete && childInParentLength === 1) {
            parentId = parent._id;

            axios.delete(`/api/comment/${parentId}/delete`).then(() => {
              axios.delete(`/api/comment/${id}/delete`).then(() => {
                Router.push(
                  `http://localhost:3000/articles/${post.type}/${post._id}`,
                );
                return;
              });
            });
          } else {
            dispatch(deleteCommentRequestAction({ type: "none", id }));
          }
        }

        Router.push(`http://localhost:3000/articles/${post.type}/${post._id}`);
      } else {
        return;
      }
    },
    [item, post],
  );

  const [applyToggle, onChangeApplyToggle] = useToggle(false);

  return (
    <li>
      <Comment
        actions={
          me &&
          !item.isDelete &&
          (!applyToggle
            ? [
                <span
                  key="comment-list-reply-to-0"
                  onClick={onChangeApplyToggle}
                >
                  대댓글 쓰기
                </span>,
                <span>
                  {item.writer && me._id === item.writer._id && <span>|</span>}
                </span>,
                <span>
                  {item.writer && me._id === item.writer._id && (
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
                      <span
                        className="secret-btn"
                        key="comment-list-reply-to-2"
                      >
                        <Checkbox
                          onChange={onToggleIsSecret}
                          style={{ color: "#999" }}
                        >
                          비밀 댓글
                        </Checkbox>
                      </span>
                    </ButtonWrapper>
                  </ReApplyFormWrapper>
                </>,
              ])
        }
        author={
          !item.isDelete &&
          item.writer &&
          (item.writer._id === post.writer._id ? (
            <span style={{ color: "#1a91fe" }}>글쓴이</span>
          ) : (
            item.writer.nickname
          ))
        }
        avatar={
          <Popover
            content={
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {!item.isDelete && (
                  <ProfileModal
                    writer={item.writer && item.writer}
                  ></ProfileModal>
                )}
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
                item.writer &&
                item.writer.avatarUrl && (
                  <Image
                    src={`${SERVER_URL}/${item.writer.avatarUrl}`}
                    width={100}
                  />
                )
              }
            />{" "}
          </Popover>
        }
        content={
          // item._id ===
          //   post.deletedComments.map((v, i) => {
          //     if (v._id === item._id) {
          //       return v._id;
          //     }
          //   }) &&
          item.secretComment ? (
            // 비밀댓글일 경우
            me && (me._id === post.writer._id || item.writer._id === me._id) ? (
              <>
                <span>{item.content}</span>
                <span style={{ color: "#999", fontSize: "12px" }}>
                  <LockOutlined style={{ margin: "0 5px", color: "#999" }} />
                  비밀 댓글
                </span>
              </>
            ) : (
              <>
                <LockOutlined style={{ margin: "0 5px", color: "#999" }} />
                <span style={{ color: "#999" }}>비밀 댓글입니다.</span>
              </>
            )
          ) : (
            // 공개댓글일 경우
            item.content
          )
        }
        datetime={`${new Date(item.createAt).getFullYear()}.${
          new Date(item.createAt).getMonth() + 1
        }.${new Date(item.createAt).getDay()}`}
      >
        {post.comments.map((v, i) => {
          if (v.commentTo === item._id) {
            return (
              <div key={v._id + shortid.generate()}>
                <Comment
                  author={
                    !v.isDelete &&
                    v.writer &&
                    (v.writer._id === post.writer._id ? (
                      <span style={{ color: "#1a91fe" }}>글쓴이</span>
                    ) : (
                      v.writer.nickname
                    ))
                  }
                  actions={
                    me && me._id === v.writer._id
                      ? [
                          <span>
                            {me && me._id === v.writer._id && (
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
                        ]
                      : []
                  }
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
                          v.writer.avatarUrl && (
                            <Image
                              src={`${SERVER_URL}/${v.writer.avatarUrl}`}
                              width={100}
                            />
                          )
                        }
                      />
                    </Popover>
                  }
                  content={
                    v.secretComment ? (
                      // 비밀댓글일 경우
                      me &&
                      (me._id === post.writer._id ||
                        v.writer._id === me._id) ? (
                        <>
                          <span>{v.content}</span>
                          <span style={{ color: "#999", fontSize: "12px" }}>
                            <LockOutlined
                              style={{ margin: "0 5px", color: "#999" }}
                            />
                            비밀 댓글
                          </span>
                        </>
                      ) : (
                        <>
                          <LockOutlined
                            style={{ margin: "0 5px", color: "#999" }}
                          />
                          <span style={{ color: "#999" }}>
                            비밀 댓글입니다.
                          </span>
                        </>
                      )
                    ) : (
                      // 공개댓글일 경우
                      v.content
                    )
                  }
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
