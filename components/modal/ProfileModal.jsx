import React from "react";
import styled from "styled-components";
import { Rate, Button, Tag } from "antd";

const ProfileWrapper = styled.div`
    .btn-wrapper {
        padding: 5px;
        text-align: center;
    }
`;

const RowWrapper = styled.div`
    padding: 5px;
`;

const ProfileModal = ({ writer }) => {
    return (
        <ProfileWrapper>
            <RowWrapper>
                {writer.techStack.map((v, i) => (
                    <Tag color="blue">{v}</Tag>
                ))}
            </RowWrapper>
            <RowWrapper>
                <span>가입일 : </span>
                <span>{writer.registerDate.getFullYear()}</span>
            </RowWrapper>
            <RowWrapper>
                <span>Github : </span>
                <span>{writer.githubUrl}</span>
            </RowWrapper>
            <RowWrapper>
                <span>평점 : </span>
                <span>
                    <Rate allowHalf defaultValue={writer.rating} />
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
