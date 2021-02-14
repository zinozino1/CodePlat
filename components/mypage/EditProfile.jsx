import React from "react";
import styled from "styled-components";
import EditProfileForm from "./EditProfileForm";
import SkillFilterForm from "../common/contents/SkillFilterForm";
import { Button } from "antd";

const ProfileReviseFormWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  .edit-profile-form {
    flex: 1;
    border: 1px solid black;
    padding: 20px;
  }
  .skill-filter-form {
    flex: 2;
    border: 1px solid black;
    padding: 20px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const EditProfile = () => {
  return (
    <>
      <ProfileReviseFormWrapper>
        <div className="edit-profile-form">
          <EditProfileForm />
        </div>
        <div className="skill-filter-form">
          <SkillFilterForm type="mypage" />
        </div>
      </ProfileReviseFormWrapper>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Button type="primary">저장하기</Button>
      </div>
    </>
  );
};

export default EditProfile;
