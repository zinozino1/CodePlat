import React, { useCallback, useState } from "react";
import { Form, Input, Select, Button, Divider, Upload } from "antd";
import { UserOutlined, LockOutlined, UploadOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import SocialTemplate from "../common/auth/SocialTemplate";
import useInput from "../../hooks/useInput";
import SkillFilterForm from "../common/contents/SkillFilterForm";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const RegisterFormWrapper = styled(Form)`
  .register-btn {
    margin: 20px 0;
    text-align: center;
  }
  .ant-divider {
    font-size: 12px;
    margin: 50px 0;
  }
`;

const RegisterInputItemWrapper = styled(Form.Item)`
  .ant-form-item-label {
    text-align: left;
  }
  .ant-form-item-control {
  }
`;

const StyledDivider = styled(Divider)``;

const RegisterInputForm = () => {
  const [form] = Form.useForm();

  const [nickname, onChangeNickname] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [confirmEmail, onChangeConfirmEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [confirmPassword, onChangeConfirmPassword] = useInput("");

  const normFile = (e) => {
    console.log("Upload event:", e);

    // if (Array.isArray(e)) {
    //     return e;
    // }

    // return e && e.fileList;
  };

  const onRegisterSubmit = useCallback((values) => {
    console.log("Received values of form: ", values);
  }, []);

  //onSubmitHandler 구현하기

  return (
    <RegisterFormWrapper
      {...formItemLayout}
      form={form}
      name="register"
      // onSubmit ={onSubmitHandler}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>

      <StyledDivider>회원가입</StyledDivider>
      <RegisterInputItemWrapper
        name="nickname"
        label={<span>닉네임&nbsp;</span>}
        rules={[
          {
            required: true,
            message: "닉네임을 입력해주세요!",
            whitespace: true,
          },
        ]}
        onChange={onChangeNickname}
      >
        <Input placeholder="nickname" />
      </RegisterInputItemWrapper>
      <RegisterInputItemWrapper
        name="email"
        label="이메일"
        rules={[
          {
            type: "email",
            message: "이메일 형식으로 입력해 주세요!",
          },
          {
            required: true,
            message: "이메일을 입력해주세요!",
          },
        ]}
        onChange={onChangeEmail}
      >
        <Input placeholder="email" />
      </RegisterInputItemWrapper>
      <RegisterInputItemWrapper
        name="confirmEmail"
        label="이메일 확인"
        rules={[
          // {
          // type: 'email',
          // message :''
          //},
          {
            required: true,
            message: "이메일을 입력해주세요!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("email") === value) {
                return Promise.resolve();
              }

              return Promise.reject("이메일이 일치하지 않습니다!");
            },
          }),
        ]}
        onChange={onChangeConfirmEmail}
      >
        <Input placeholder="confirm email" />
      </RegisterInputItemWrapper>
      <RegisterInputItemWrapper
        name="password"
        label="비밀번호"
        rules={[
          {
            required: true,
            message: "비밀번호를 입력해주세요!",
          },
        ]}
        hasFeedback
        onChange={onChangePassword}
      >
        <Input.Password placeholder="password" />
      </RegisterInputItemWrapper>

      <RegisterInputItemWrapper
        name="confirmpassword"
        label="비밀번호 확인"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "비밀번호를 입력해주세요!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject("비밀번호가 일치하지 않습니다!");
            },
          }),
        ]}
        onChange={onChangeConfirmPassword}
      >
        <Input.Password placeholder="confirm password" />
      </RegisterInputItemWrapper>
      <StyledDivider>소셜 회원가입</StyledDivider>
      <SocialTemplate />
      <StyledDivider>선택 입력 사항</StyledDivider>
      <SkillFilterForm type="register" />
      <RegisterInputItemWrapper
        name="github"
        label="Github"
        hasFeedback
        onChange={onChangePassword}
      >
        <Input placeholder="github 닉네임" />
      </RegisterInputItemWrapper>
      <RegisterInputItemWrapper
        name="avatar"
        label="사용자 이미지 설정"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        onChange={onChangePassword}
      >
        {/* action="/upload.do" */}
        {/* beforeUpload 함수 사용해야함  */}
        <Upload name="logo" listType="picture">
          <Button icon={<UploadOutlined />}>파일 업로드</Button>
        </Upload>
      </RegisterInputItemWrapper>
      <StyledDivider />
      <div className="register-btn">
        <Button type="primary" htmlType="submit">
          가입하기
        </Button>
      </div>
    </RegisterFormWrapper>
  );
};

export default RegisterInputForm;
