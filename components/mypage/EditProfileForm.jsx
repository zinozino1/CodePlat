import React from "react";
import { Card, Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const EditProfileFormWrapper = styled(Form)`
  @media (max-width: 900px) {
    width: 100%;
    .profile-card {
      margin: 0 auto;
    }
  }
`;

const RegisterInputItemWrapper = styled(Form.Item)`
  .ant-form-item-label {
    text-align: left;
  }
  .email-code {
    width: 200px;
  }
  .ant-form-item-control {
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EditProfileForm = () => {
  return (
    <EditProfileFormWrapper>
      <div className="site-card-border-less-wrapper">
        <Card
          title="프로필 수정"
          bordered={true}
          style={{ width: 300 }}
          className="profile-card"
        >
          <RegisterInputItemWrapper
            name="nickname"
            label="닉네임"
            hasFeedback
            //   onChange={onChangePassword}
          >
            <Input placeholder="닉네임" />
          </RegisterInputItemWrapper>
          <RegisterInputItemWrapper
            name="github"
            label="Github"
            hasFeedback
            //   onChange={onChangePassword}
          >
            <Input placeholder="깃허브" />
          </RegisterInputItemWrapper>
          {/* <RegisterInputItemWrapper
            name="avatar"
            label="사용자 이미지 설정"
            valuePropName="fileList"
           // getValueFromEvent={normFile}
          //  onChange={onChangePassword}
          ></RegisterInputItemWrapper> */}
          <Button block>비밀번호 변경</Button>
        </Card>
      </div>
    </EditProfileFormWrapper>
  );
};

export default EditProfileForm;
