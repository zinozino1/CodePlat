import React, { useCallback, useState, useEffect } from "react";
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
import {
  UserOutlined,
  LockOutlined,
  LikeOutlined,
  LikeFilled,
} from "@ant-design/icons";
import CommentForm from "./CommentForm";
import { useSelector, useDispatch } from "react-redux";
import useToggle from "../../../hooks/useToggle";
import { SERVER_URL } from "../../../lib/constant/constant";
import shortid from "shortid";
import {
  addCommentRequestAction,
  deleteCommentRequestAction,
  likeCommentRequestAction,
  unLikeCommentRequestAction,
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

const CommentActivityWrapper = styled.div`
  font-size: 11px;
  padding: 0 3px;
  cursor: pointer;
  /* border: 1px solid black; */
`;

const ReCommentListItem = ({ reComment, post, me, onDeleteComment }) => {
  const dispatch = useDispatch();

  const [editReCommentText, setEditReCommentText] = useState("");
  const onChangeEditReCommentText = useCallback((e) => {
    setEditReCommentText(e.target.value);
  }, []);
  const [isEditReComment, onToggleIsEditReComment] = useToggle(false);
  const [isReEditSecret, setIsReEditSecret] = useState(false);

  const onToggleIsReEditSecret = useCallback(() => {
    setIsReEditSecret(!isReEditSecret);
  }, [isReEditSecret]);

  // const [isEditReComment, onToggleIsEditReComment] = useToggle(false);
  const [currentReComment, setCurrentReComment] = useState(null);

  const onUpdateReComment = useCallback(
    (reComment) => {
      if (editReCommentText === "") {
        alert("내용을 입력해주세요.");
        return;
      }
      let updateConfirm = confirm("수정하시겠습니까?");
      if (updateConfirm) {
        axios
          .patch(`/api/comments`, {
            commentId: reComment._id,
            content: editReCommentText,
            secretComment: isReEditSecret,
          })
          .then((res) => {
            Router.push(
              `http://localhost:3000/articles/${post.type}/${post._id}`,
            );
          })
          .catch((error) => {
            alert("댓글수정 실패");
          });
      } else {
        return;
      }

      // console.log("id", reComment._id);
      // console.log("editCommentText", editReCommentText);
      // console.log("isReEditSecret", isReEditSecret);
    },
    [editReCommentText, isReEditSecret],
  );

  const [like, setLike] = useState(
    reComment.likes.some((v, i) => {
      if (me && v.userId === me._id) {
        return true;
      }
    })
      ? true
      : false,
  );

  const onToggleLike = useCallback(() => {
    setLike(!like);
    if (like) {
      dispatch(
        unLikeCommentRequestAction({
          user: me,
          id: reComment.likes.find((v, i) => {
            if (v.userId === me._id) {
              return true;
            }
          })._id,
          type: "comment",
          commentId: reComment._id,
        }),
      );
    } else {
      dispatch(
        likeCommentRequestAction({
          user: me,
          id: reComment._id,
          type: "comment",
        }),
      );
    }
  }, [like, me, reComment]);

  useEffect(() => {
    setEditReCommentText(reComment.content);
    setIsReEditSecret(reComment.secretComment);
  }, [reComment]);

  const onCancelEdit = useCallback(() => {
    setEditReCommentText(reComment.content);
    setIsReEditSecret(reComment.secretComment);
    onToggleIsEditReComment();
  }, [reComment, isEditReComment]);

  const onChangeCurrentReComment = useCallback((reComment) => {
    // 현재 수정버튼이 눌러진 자식 댓글 표시
    setCurrentReComment(reComment);
  }, []);

  return (
    <div key={reComment._id}>
      <Comment
        author={
          !reComment.isDelete &&
          reComment.writer &&
          (reComment.writer._id === post.writer._id ? (
            <span style={{ color: "#1a91fe" }}>글쓴이</span>
          ) : (
            reComment.writer.nickname
          ))
        }
        actions={
          me //&& me._id === reComment.writer._id
            ? isEditReComment && // 수정중이니
              currentReComment && // 현재 수정중인 대댓글
              currentReComment._id === reComment._id
              ? [
                  // 자녀댓글에서 수정을 눌렀을 떄
                  <>
                    <ReApplyFormWrapper>
                      {/* {editReCommentText === "" ? (
                        <ReApplyInput
                          rows={1}
                          onChange={onChangeEditReCommentText}
                          defaultValue={reComment.content}
                        />
                      ) : (
                        <ReApplyInput
                          rows={1}
                          onChange={onChangeEditReCommentText}
                        />
                      )} */}
                      {/* <ReApplyInput
                        rows={1}
                        onChange={onChangeEditReCommentText}
                      /> */}
                      <ReApplyInput
                        rows={1}
                        onChange={onChangeEditReCommentText}
                        defaultValue={reComment.content}
                      />

                      <ButtonWrapper>
                        <span
                          className="submit-btn"
                          key="comment-list-reply-to-0"
                          onClick={() => {
                            onUpdateReComment(reComment);
                          }}
                        >
                          수정
                        </span>
                        <span
                          className="cancel-btn"
                          key="comment-list-reply-to-1"
                          onClick={onCancelEdit}
                        >
                          취소
                        </span>
                        <span
                          className="secret-btn"
                          key="comment-list-reply-to-2"
                        >
                          <Checkbox
                            onChange={onToggleIsReEditSecret}
                            //value={isSecret}
                            style={{ color: "#999" }}
                            defaultChecked={reComment.secretComment}
                          >
                            비밀 댓글
                          </Checkbox>
                        </span>
                      </ButtonWrapper>
                    </ReApplyFormWrapper>
                  </>,
                ]
              : [
                  // 자녀댓글 기본상태
                  <CommentActivityWrapper>
                    {me && (
                      <span
                        //key="comment-list-reply-to-0"
                        //onClick={onToggleIsEdit}
                        onClick={onToggleLike}
                        style={{ marginRight: "10px" }}
                      >
                        {like ? (
                          <LikeFilled
                            style={{ marginRight: "3px", color: "#1a91fe" }}
                          />
                        ) : (
                          <LikeOutlined style={{ marginRight: "3px" }} />
                        )}

                        {reComment.likes.length}
                      </span>
                    )}
                  </CommentActivityWrapper>,
                  <CommentActivityWrapper>
                    {me && me._id === reComment.writer._id && (
                      <span
                        key="comment-list-reply-to-0"
                        onClick={() => {
                          onDeleteComment(reComment._id);
                        }}
                      >
                        삭제
                      </span>
                    )}
                  </CommentActivityWrapper>,
                  <CommentActivityWrapper>
                    {reComment.writer && me._id === reComment.writer._id && (
                      <span>|</span>
                    )}
                  </CommentActivityWrapper>,
                  <CommentActivityWrapper>
                    {reComment.writer && me._id === reComment.writer._id && (
                      <span
                        key="comment-list-reply-to-0"
                        //onClick={onToggleIsEditReComment}
                        onClick={() => {
                          onToggleIsEditReComment();
                          onChangeCurrentReComment(reComment);
                        }}
                      >
                        수정
                      </span>
                    )}
                  </CommentActivityWrapper>,
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
                {reComment.writer.constructor == Object && (
                  <ProfileModal writer={reComment.writer}></ProfileModal>
                )}
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
                reComment.writer.avatarUrl && (
                  <Image
                    src={`${SERVER_URL}/${reComment.writer.avatarUrl}`}
                    width={100}
                  />
                )
              }
            />
          </Popover>
        }
        content={
          reComment.writer.constructor == Object ? (
            reComment.secretComment ? (
              // 비밀댓글일 경우
              me &&
              // 내가쓴 대댓글이거나 or 루트댓글이 내가 쓴거고 대댓글이 비밀댓글일 경우
              (reComment.writer._id === me._id ||
                post.comments.find((v, i) => {
                  if (v._id === reComment.commentTo) {
                    // console.log("루트댓글작성자의 id", v.writer._id);
                    // console.log("object", me._id);
                    return true;
                  }
                }).writer._id === me._id) ? (
                <>
                  <span>{reComment.content}</span>
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
              reComment.content
            )
          ) : (
            "탈퇴한 회원입니다."
          )
        }
        datetime={`${new Date(reComment.createdAt).getMonth() + 1}/${new Date(
          reComment.createdAt,
        ).getDate()}  ${new Date(reComment.createdAt).getHours()}:${
          new Date(reComment.createdAt).getMinutes() < 10
            ? "0" + new Date(reComment.createdAt).getMinutes()
            : new Date(reComment.createdAt).getMinutes()
        }:${
          new Date(reComment.createdAt).getSeconds() < 10
            ? "0" + new Date(reComment.createdAt).getSeconds()
            : new Date(reComment.createdAt).getSeconds()
        }`}
      />
    </div>
  );
};

export default ReCommentListItem;
