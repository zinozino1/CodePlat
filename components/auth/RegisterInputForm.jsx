import React, { useCallback, useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Divider,
  Upload,
  Steps,
  Result,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  UploadOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import SocialTemplate from "../common/auth/SocialTemplate";
import useInput from "../../hooks/useInput";
import SkillFilterForm from "../common/contents/SkillFilterForm";
import { EmailRegex } from "../../lib/constant/constant";
import axios from "axios";

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
  .email-code {
    width: 200px;
  }
  .ant-form-item-control {
  }
`;

const PushBackButton = styled.span`
  color: #888;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledDivider = styled(Divider)``;

const RegisterInputForm = () => {
  const { skill } = useSelector((state) => state.skill);
  const [form] = Form.useForm();

  const [userId, setUserId] = useState(null);

  const [registerType, setRegisterType] = useState(null);
  const [progress, setProgress] = useState(0);
  const [socialType, setSocialType] = useState("");
  const [formError, setFormError] = useState(true);
  const [nicknameExistError, setNicknameExistError] = useState(false);
  const [emailExistError, setEmailExistError] = useState(false);

  const [nickname, setNickname] = useState("");
  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
    setNicknameExistError(false);
  }, []);

  const [email, setEmail] = useState("");
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
    setEmailExistError(false);
  }, []);

  const [confirmEmail, onChangeConfirmEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [confirmPassword, onChangeConfirmPassword] = useInput("");
  const [githubUrl, onChangeGithubUrl] = useInput("");

  const onClickEmailVerify = useCallback(() => {
    setProgress(2);
    axios.post("/api/join/optionForm", {
      type: "local",
      id: userId,
      techStack: skill,
      githubUrl,
      avatarUrl: "",
    });
  }, [userId, skill]);

  const onClickLocalButton = useCallback(() => {
    if (formError) return;
    axios
      .post("/api/join", { email, nickname, password })
      .then((res) => {
        setUserId(res.data.userId);
        setEmailExistError(false);
        setNicknameExistError(false);
        setRegisterType("local");
        setProgress(1);
      })
      .catch((err) => {
        if (err.response.data.error.name === "UserExistsError") {
          setEmailExistError(true);
        } else {
          setNicknameExistError(true);
        }
      });
  }, [formError, email, nickname, password]);

  const onClickSocialButton = useCallback((e) => {
    switch (e.target.innerText) {
      case "Naver":
        setSocialType("naver");
        axios.get(`/api/naver`);
        break;
      case "Google":
        setSocialType("google");
        axios.get(`/api/google`);
        break;
      case "Github":
        setSocialType("github");
        axios.get(`/api/github`);
        break;
      case "Kakao":
        setSocialType("kakao");
        axios.get(`/api/kakao`);
        break;
      default:
        break;
    }
    // setRegisterType("social");
    // setProgress(1);
  }, []);

  const onPushBack = useCallback(() => {
    setRegisterType(null);
    setProgress(0);
  }, []);

  const normFile = (e) => {
    console.log("Upload event:", e);
  };

  const onSocialRegisterSubmit = useCallback(
    (e) => {
      axios.get(`/api/${socialType}`);
    },
    [socialType],
  );

  useEffect(() => {
    if (
      nickname.length !== 0 &&
      email.length !== 0 &&
      confirmEmail.length !== 0 &&
      password.length !== 0 &&
      password.length >= 8 &&
      confirmPassword.length !== 0 &&
      password === confirmPassword &&
      email === confirmEmail &&
      email.match(EmailRegex)
    ) {
      setFormError(false);
    } else {
      setFormError(true);
    }
  }, [nickname, email, confirmEmail, password, confirmPassword]);

  return (
    <RegisterFormWrapper {...formItemLayout} form={form} name="register">
      <div
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
      <Steps
        current={progress}
        onChange={setProgress}
        style={{ marginBottom: "70px" }}
      >
        <Steps.Step title="회원가입" icon={<UserOutlined />} disabled />
        <Steps.Step title="추가정보" icon={<SolutionOutlined />} disabled />
        <Steps.Step title="완료" icon={<SmileOutlined />} disabled />
      </Steps>
      {progress == 0 && (
        <>
          {nicknameExistError ? (
            <RegisterInputItemWrapper
              name="nickname"
              label="닉네임"
              validateStatus="error"
              help="이미 존재하는 닉네임입니다."
              rules={[
                {
                  required: true,
                  message: "닉네임을 입력해주세요.",
                  whitespace: true,
                },
              ]}
              onChange={onChangeNickname}
            >
              <Input placeholder="nickname" />
            </RegisterInputItemWrapper>
          ) : (
            <RegisterInputItemWrapper
              name="nickname"
              label="닉네임"
              rules={[
                {
                  required: true,
                  message: "닉네임을 입력해주세요.",
                  whitespace: true,
                },
              ]}
              onChange={onChangeNickname}
            >
              <Input placeholder="nickname" />
            </RegisterInputItemWrapper>
          )}

          {emailExistError ? (
            <RegisterInputItemWrapper
              name="email"
              label="이메일"
              validateStatus="error"
              help="이미 존재하는 이메일입니다."
              rules={[
                {
                  type: "email",
                  message: "이메일 형식으로 입력해 주세요.",
                },
                {
                  required: true,
                  message: "이메일을 입력해주세요.",
                },
              ]}
              onChange={onChangeEmail}
            >
              <Input placeholder="email" />
            </RegisterInputItemWrapper>
          ) : (
            <RegisterInputItemWrapper
              name="email"
              label="이메일"
              rules={[
                {
                  type: "email",
                  message: "이메일 형식으로 입력해 주세요.",
                },
                {
                  required: true,
                  message: "이메일을 입력해주세요.",
                },
                // ({ getFieldValue }) => ({
                //   validator(_, value) {
                //     if (!emailExistError) {
                //       return Promise.resolve();
                //     } else {
                //       return Promise.reject("이미 존재하는 이메일입니다.");
                //     }
                //   },
                // }),
              ]}
              onChange={onChangeEmail}
            >
              <Input placeholder="email" />
            </RegisterInputItemWrapper>
          )}
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
                message: "이메일 확인을 입력해주세요.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("email") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject("이메일이 일치하지 않습니다.");
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
                message: "비밀번호를 입력해주세요.",
              },
              {
                min: 8,
                message: "8자리 이상 비밀번호를 입력해주세요.",
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
                message: "비밀번호를 입력해주세요.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject("비밀번호가 일치하지 않습니다.");
                },
              }),
            ]}
            onChange={onChangeConfirmPassword}
          >
            <Input.Password placeholder="confirm password" />
          </RegisterInputItemWrapper>

          <div className="register-btn">
            <Button
              type="primary"
              htmlType="submit"
              onClick={onClickLocalButton}
            >
              확인
            </Button>
          </div>

          <StyledDivider>소셜 회원가입</StyledDivider>
          <SocialTemplate onClickSocialButton={onClickSocialButton} />
        </>
      )}
      {progress == 1 && registerType == "local" && (
        <>
          <StyledDivider>선택 입력 사항</StyledDivider>
          <SkillFilterForm type="register" />
          <RegisterInputItemWrapper
            name="github"
            label="Github"
            hasFeedback
            onChange={onChangeGithubUrl}
          >
            <Input placeholder="github 닉네임" />
          </RegisterInputItemWrapper>
          <RegisterInputItemWrapper
            name="avatar"
            label="사용자 이미지 설정"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            //onChange={onChangePassword}
          >
            {/* action="/upload.do" */}
            {/* beforeUpload 함수 사용해야함  */}
            <Upload name="logo" listType="picture">
              <Button icon={<UploadOutlined />}>파일 업로드</Button>
            </Upload>
          </RegisterInputItemWrapper>
          <StyledDivider />
          <div className="email-btn" style={{ textAlign: "center" }}>
            <Button
              type="primary"
              // htmlType="submit"
              onClick={onClickEmailVerify}
            >
              이메일 인증
            </Button>
          </div>
          <PushBackButton onClick={onPushBack}>뒤로가기</PushBackButton>
        </>
      )}
      {progress == 1 && registerType == "social" && (
        <>
          <RegisterInputItemWrapper
            name="nickname"
            label="닉네임"
            hasFeedback
            rules={[
              {
                required: true,
                message: "닉네임을 입력해주세요.",
                whitespace: true,
              },
            ]}
            //onChange={onChangePassword}
          >
            <Input placeholder="nickname" />
          </RegisterInputItemWrapper>
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
          <div className="email-btn" style={{ textAlign: "center" }}>
            <Button
              type="primary"
              // htmlType="submit"
              onClick={onSocialRegisterSubmit}
            >
              가입하기
            </Button>
          </div>

          <PushBackButton onClick={onPushBack}>뒤로가기</PushBackButton>
        </>
      )}
      {progress == 2 && (
        <div>
          <div>
            <Result
              status="success"
              title={`${email} 으로 인증 요청
              메일을 보냈습니다. `}
              //subTitle="해당 이메일을 확인 하시고, 인증 확인 링크를 눌러 주시기 바랍니다."
              // extra={[
              //   <Button type="primary" key="console">
              //     Go Console
              //   </Button>,
              //   <Button key="buy">Buy Again</Button>,
              // ]}
            />
          </div>
          <div style={{ fontSize: "16px", textAlign: "center" }}>
            해당 이메일을 확인 하시고, 인증 확인 링크를 눌러 주시기 바랍니다.{" "}
          </div>
          <div
            style={{
              fontSize: "13px",
              textAlign: "center",
              margin: "20px 0",
              color: "#888",
            }}
          >
            <span style={{ color: "red" }}>*</span>
            이메일 인증이 완료 되지 않을 경우 사이트 이용에 제한이 있을 수
            있습니다.
            <span style={{ color: "red" }}>*</span>
          </div>

          <div
            style={{
              fontSize: "13px",
              textAlign: "center",
              margin: "20px 0",
              textDecoration: "underline",
            }}
          >
            <Link href="/auth/login">
              <a style={{ color: "#888" }}>로그인</a>
            </Link>
          </div>
        </div>
      )}
    </RegisterFormWrapper>
  );
};

export default RegisterInputForm;
