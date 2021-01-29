import React from "react";
import { Divider, Row, Col, Button, Form } from "antd";
import MypageLayout from "../components/layout/MypageLayout";
import EditProfileForm from "../components/mypage/EditProfileForm";
import MyActivityTemplate from "../components/mypage/MyActivityTemplate";
import SkillFilterForm from "../components/common/contents/SkillFilterForm";
import styled from "styled-components";

const ProfileReviseFormWrapper = styled.div`
  display: flex;
  .edit-profile-form {
    flex: 2;
    /* border: 1px solid black; */
    padding: 20px;
  }
  .skill-filter-form {
    flex: 3;
    /* //  border: 1px solid black; */
    padding: 20px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const mypage = () => {
  return (
    <MypageLayout>
      <ProfileReviseFormWrapper>
        <div className="edit-profile-form">
          <EditProfileForm />
        </div>
        <div className="skill-filter-form">
          <SkillFilterForm />
        </div>
      </ProfileReviseFormWrapper>
      <div
        style={{
          textAlign: "center",
          //padding: "10px",
          // border: "1px solid red",
        }}
      >
        <Button type="primary">저장하기</Button>
      </div>
      <div style={{ border: "0.2px solid white", margin: "10px" }}></div>
      <MyActivityTemplate></MyActivityTemplate>
    </MypageLayout>
  );
};

export default mypage;
