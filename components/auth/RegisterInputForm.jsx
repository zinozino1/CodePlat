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
import { withRouter } from "next/router";
import { setUserRequestAction } from "../../reducers/user";
import FormData from "form-data";
import firebase from "../../firebase";
import shortid from "shortid";

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

const formData = new FormData();
const RegisterInputForm = ({ router }) => {
  const { skill } = useSelector((state) => state.skill);

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [userId, setUserId] = useState(null);
  const [registerType, setRegisterType] = useState(null);
  const [progress, setProgress] = useState(0);
  const [socialType, setSocialType] = useState("");
  const [formError, setFormError] = useState(true);
  const [nicknameExistError, setNicknameExistError] = useState(false);
  const [emailExistError, setEmailExistError] = useState(false);
  const [noneEmailUser, setNoneEmailUser] = useState(false);

  const [firebaseLoading, setFirebaseLoading] = useState(false);

  const [imageFile, setImageFile] = useState(null);

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
    const config = {
      headers: {
        Accept: "application/json",
        enctype: "multipart/form-data",
      },
    };
    // formData.append(
    //   "data",
    //   JSON.stringify({
    //     type: "local",
    //     id: userId,
    //     techStack: skill,
    //     githubUrl,
    //     //avatar: imageFile,
    //   }),
    // );
    formData.append("type", "local");
    formData.append("id", userId);
    formData.append("techStack", JSON.stringify(skill));
    formData.append("githubUrl", githubUrl);
    axios.post("/api/join/optionForm", formData, config);
  }, [userId, skill, githubUrl]);

  // 로컬 회원가입
  const onClickLocalButton = useCallback(async () => {
    if (formError) return;
    await axios
      .post("/api/join", { email, nickname, password })
      .then(async (res) => {
        //console.log(res);
        setUserId(res.data.userId);
        setEmailExistError(false);
        setNicknameExistError(false);
        setRegisterType("local");
        setProgress(1);

        // firebase 유저 저장 of local회원가입
        setFirebaseLoading(true);
        let createdUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, email);
        //console.log("createdUser", createdUser);
        await createdUser.user.updateProfile({
          displayName: nickname,
        });
        await firebase.database().ref("users").child(createdUser.user.uid).set({
          nickname: createdUser.user.displayName,
          email: createdUser.user.email,
          type: "local",
        });
        // 회원가입 시 자동 로그인 -> 로컬은 자동로그인 안됨
        // let SignedInUser = await firebase
        //   .auth() // auth 서비스에 접근
        //   .signInWithEmailAndPassword(email, email);
        // //console.log("SignedInUser", SignedInUser);
        // setFirebaseLoading(false);
      })
      .catch((err) => {
        if (err.response.data.error.name === "UserExistsError") {
          setEmailExistError(true);
        } else {
          setNicknameExistError(true);
        }
      });
  }, [formError, email, nickname, password]);

  // const onClickSocialButton = useCallback((e) => {
  //   switch (e.target.innerText) {
  //     case "Naver":
  //       setSocialType("naver");
  //       break;
  //     case "Google":
  //       setSocialType("google");
  //       //axios.get(`/api/google`);
  //       break;
  //     case "Github":
  //       setSocialType("github");
  //       //axios.get(`/api/github`);
  //       break;
  //     case "Kakao":
  //       setSocialType("kakao");
  //       //axios.get(`/api/kakao`);
  //       break;
  //     default:
  //       break;
  //   }
  //   setRegisterType("social");
  //   // setProgress(1);
  // }, []);

  const onPushBack = useCallback(() => {
    setRegisterType(null);
    setProgress(0);
  }, []);

  const normFile = (e) => {
    //console.log("norm file : ", e);
    //console.log(e.fileList[0].originFileObj);
    if (e.file.status === "done") {
      formData.append("avatar", e.fileList[0].originFileObj);

      // console.log(e.fileList[0].originFileObj);
      // setImageFile(formData);
      // console.log("done");
    } else if (e.file.status === "removed") {
      formData.delete("avatar");
      // console.log("removed");
    }

    let fileList = e.fileList;
    fileList = fileList.slice(-1);

    if (Array.isArray(e)) {
      return e;
    }
    return e && fileList;
  };

  // social 회원가입 중복처리 필요
  const onSocialRegisterSubmit = useCallback(
    (e) => {
      if (nickname === "") {
        alert("닉네임을 입력해주세요.");
        return;
      }
      if (noneEmailUser && email === "") {
        alert("이메일을 입력해주세요.");
        return;
      }
      const config = {
        headers: {
          Accept: "application/json",
          enctype: "multipart/form-data",
          // withCredentials: true,
        },
      };
      // formData.append(
      //   "data",
      //   JSON.stringify({
      //     type: "local",
      //     id: userId,
      //     techStack: skill,
      //     githubUrl,
      //     //avatar: imageFile,
      //   }),
      // );
      if (noneEmailUser) {
        // github, kakao
        formData.append("type", "email");
        formData.append("nickname", nickname);
        formData.append("techStack", JSON.stringify(skill));
        formData.append("githubUrl", githubUrl);
        formData.append("email", email);
        axios
          .post("/api/join/optionForm", formData, config)
          .then(async (res) => {
            if (res.data.message === "email is reduplication") {
              setEmailExistError(true);
              formData.delete("type");
              formData.delete("nickname");
              formData.delete("techStack");
              formData.delete("githubUrl");
              formData.delete("email");
              return;
            } else if (res.data.message === "nickname is reduplication") {
              setNicknameExistError(true);
              formData.delete("type");
              formData.delete("nickname");
              formData.delete("techStack");
              formData.delete("githubUrl");
              formData.delete("email");
              return;
            }
            //dispatch(setUserRequestAction());
            setNicknameExistError(false);
            setEmailExistError(false);
            setProgress(2);

            let createdUser = await firebase
              .auth()
              .createUserWithEmailAndPassword(email, email);
            //console.log("createdUser", createdUser);
            await createdUser.user.updateProfile({
              displayName: nickname,
            });
            await firebase
              .database()
              .ref("users")
              .child(createdUser.user.uid)
              .set({
                nickname: createdUser.user.displayName,
                type: "social",
              });
            // 임마도 자동로그인 x
            // let SignedInUser = await firebase
            //   .auth() // auth 서비스에 접근
            //   .signInWithEmailAndPassword(email, anonymousPassword);
            // //console.log("SignedInUser", SignedInUser);
            // setFirebaseLoading(false);
          })

          .catch((error) => {
            alert("에러 발생.");
            // if (error.response.data.message === "email is reduplication") {
            //   setEmailExistError(true);
            // } else {
            //   setNicknameExistError(true);
            // }
            formData.delete("type");
            formData.delete("nickname");
            formData.delete("techStack");
            formData.delete("githubUrl");
            formData.delete("email");
          });
      } else {
        // google, naver
        console.log(nickname, skill, githubUrl);
        formData.append("type", "sns");
        formData.append("nickname", nickname);
        formData.append("techStack", JSON.stringify(skill));
        formData.append("githubUrl", githubUrl);
        axios
          .post("/api/join/optionForm", formData, config)
          .then(async (res) => {
            //dispatch(setUserRequestAction());
            //console.log(res.data);
            setNicknameExistError(false);

            setFirebaseLoading(true);

            // let anonymousPassword = shortid.generate();
            let createdUser = await firebase
              .auth()
              .createUserWithEmailAndPassword(
                res.data.user.email,
                res.data.user.email,
              );
            //console.log("createdUser", createdUser);
            await createdUser.user.updateProfile({
              displayName: nickname,
            });
            // db 저장
            await firebase
              .database()
              .ref("users")
              .child(createdUser.user.uid)
              .set({
                email: createdUser.user.email,
                nickname: createdUser.user.displayName,
                type: "social",
              });
            // 파이어베이스 로그인
            let SignedInUser = await firebase
              .auth() // auth 서비스에 접근
              .signInWithEmailAndPassword(
                res.data.user.email,
                res.data.user.email,
              );
            //console.log("SignedInUser", SignedInUser);
            setFirebaseLoading(false);
            router.push("/");
          })
          .catch((error) => {
            console.log(error);
            setNicknameExistError(true);
            formData.delete("type");
            formData.delete("nickname");
            formData.delete("techStack");
            formData.delete("githubUrl");
          });
      }
    },

    [nickname, skill, githubUrl],
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

  useEffect(() => {
    if (router.query.type === "sns") {
      setProgress(1);
      setRegisterType("social");
    } else if (router.query.type === "email") {
      setProgress(1);
      setRegisterType("social");
      setNoneEmailUser(true);
      //setEmail("");
    }
  }, [router]);

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
          <SocialTemplate />
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
            //onRemove={console.log("fuck")}
            //onChange={onChangeImageFile}
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
          {nicknameExistError ? (
            <>
              <RegisterInputItemWrapper
                name="nickname"
                label="닉네임"
                validateStatus="error"
                help="이미 존재하는 닉네임입니다."
                hasFeedback
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
            </>
          ) : (
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
                onChange={onChangeNickname}
              >
                <Input placeholder="nickname" />
              </RegisterInputItemWrapper>
            </>
          )}
          {noneEmailUser && (
            <>
              {emailExistError ? (
                <RegisterInputItemWrapper
                  name="email"
                  label="이메일"
                  validateStatus="error"
                  help="이미 존재하는 이메일입니다."
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "이메일을 입력해주세요.",
                      whitespace: true,
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
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "이메일을 입력해주세요.",
                      whitespace: true,
                    },
                  ]}
                  onChange={onChangeEmail}
                >
                  <Input placeholder="email" />
                </RegisterInputItemWrapper>
              )}
            </>
          )}

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
            //onChange={onChangeImageFile}
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
          {firebaseLoading && (
            <div style={{ textAlign: "center" }}>잠시만 기다려주세요...</div>
          )}
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

export default withRouter(RegisterInputForm);
