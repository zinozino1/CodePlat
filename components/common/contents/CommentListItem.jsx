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
} from "antd";
import ProfileModal from "../../modal/ProfileModal";
import { UserOutlined } from "@ant-design/icons";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import useToggle from "../../../hooks/useToggle";
import { SERVER_URL } from "../../../lib/constant/constant";

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
  console.log(item);

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
              ]
            : [
                <>
                  <ReApplyFormWrapper>
                    <ReApplyInput rows={1} />
                    <ButtonWrapper>
                      <span
                        className="submit-btn"
                        key="comment-list-reply-to-0"
                        //onClick={onChangeApplyToggle}
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
        datetime={`${item.createAt.getFullYear()}.${
          item.createAt.getMonth() + 1
        }.${item.createAt.getDay()}`}
      >
        {post.comments.map((v, i) => {
          if (v.commentTo === item.id) {
            return (
              <div key={v.id}>
                <Comment
                  author={v.writer.nickname}
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
                      />
                    </Popover>
                  }
                  content={v.content}
                  datetime={`${v.createAt.getFullYear()}.${
                    v.createAt.getMonth() + 1
                  }.${v.createAt.getDay()}`}
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
