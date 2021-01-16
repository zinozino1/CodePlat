import React from "react";
import styled from "styled-components";
import { Rate, Button, Tag } from "antd";

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
  return (
    <ProfileWrapper>
      <RowWrapper>
        <span>
          <Tag className="tag-partial" color="#ccc">
            관심기술
          </Tag>
        </span>
        {writer.techStack.map((v, i) => (
          <Tag color="blue" key={v}>
            {v}
          </Tag>
        ))}
      </RowWrapper>
      <RowWrapper>
        <span>
          <Tag className="tag-partial" color="#ccc">
            가입일
          </Tag>
        </span>
        <span>{writer.registerDate.getFullYear()}</span>
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
          <Rate allowHalf disabled defaultValue={writer.rating} />
        </span>
      </RowWrapper>
      <RowWrapper className="btn-wrapper">
        <Button type="primary" className="note-btn">
          쪽지 보내기
        </Button>
      </RowWrapper>
    </ProfileWrapper>
  );
};

export default ProfileModal;
