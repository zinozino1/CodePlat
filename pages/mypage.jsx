import React from "react";
import { Divider, Row, Col, Button, Form } from "antd";
import MypageLayout from "../components/layout/MypageLayout";
import EditProfileForm from "../components/mypage/EditProfileForm";
import MyActivityTemplate from "../components/mypage/MyActivityTemplate";
import SkillFilterForm from "../components/common/contents/SkillFilterForm";
import styled from "styled-components";

const contentStyle = {
  //  background :"#fff",
  margin: "40px 40px 20px 40px",
};

const ProfileReviseFormWrapper = styled.div`
  display: flex;
  .edit-profile-form {
    flex: 2;
    border: 1px solid black;
    padding: 20px;
  }
  .skill-filter-form {
    flex: 3;
    border: 1px solid black;
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
          padding: "20px",
          border: "1px solid red",
        }}
      >
        <Button type="primary">Primary Button</Button>
      </div>
      {/* 여기서부터 /components/mypage/MyActivityTemplate 사용 */}
    </MypageLayout>
  );
};

export default mypage;
