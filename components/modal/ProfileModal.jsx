import React, { useCallback } from "react";
import styled from "styled-components";
import { Rate, Button, Tag } from "antd";
import { useSelector } from "react-redux";

const ProfileWrapper = styled.div`
  margin: 0;
  border: 1px solid #ddd;
  padding: 5px;
  .btn-wrapper {
    padding: 5px;
    text-align: center;
  }
`;

const RowWrapper = styled.div`
  padding: 5px;

  .tag-partial {
    width: 55px;
    text-align: center;
  }
`;

const ProfileModal = ({ writer }) => {
  const { me } = useSelector((state) => state.user);
  // console.log(me.id);
  // console.log(writer.id);

  const onSendLetter = useCallback(() => {
    // if (!me) {
    //   alert("로그인이 필요한 서비스입니다.");
    // }
  }, []);

  return (
    <ProfileWrapper>
      <RowWrapper>
        <span>
          <Tag className="tag-partial" color="#ccc">
            관심기술
          </Tag>
        </span>
        {writer.techStack.map((v, i) => {
          if (i < 3) {
            return (
              <Tag color="blue" key={v}>
                {v}
              </Tag>
            );
          }
        })}
      </RowWrapper>
      <RowWrapper>
        <span>
          <Tag className="tag-partial" color="#ccc">
            가입일
          </Tag>
        </span>
        <span>{`${new Date(writer.createdAt).getFullYear()}.${
          new Date(writer.createdAt).getMonth() + 1
        }.${new Date(writer.createdAt).getDate()}`}</span>
      </RowWrapper>
      <RowWrapper>
        <span>
          <Tag className="tag-partial" color="#ccc">
            Github
          </Tag>
        </span>
        <span>{writer.githubUrl}</span>
      </RowWrapper>
      <RowWrapper>
        <span>
          <Tag className="tag-partial" color="#ccc">
            평점
          </Tag>
        </span>
        <span>
          <Rate allowHalf disabled defaultValue={(writer.rating = 0)} />
        </span>
      </RowWrapper>
      <RowWrapper className="btn-wrapper">
        {me && me.id !== writer.id && (
          <Button type="primary" className="note-btn" onClick={onSendLetter}>
            쪽지 보내기
          </Button>
        )}
      </RowWrapper>
    </ProfileWrapper>
  );
};

export default ProfileModal;
