import React, { useCallback, useState } from "react";
import { Form, Input, Select, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

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
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const SocialLoginWrapper = styled.div`
    display: flex;
    margin-bottom: 3px;
    font-weight: 300;
    .login-google {
        background: #dd4b39;
    }
    .login-naver {
        background: #00c300;
        margin-left: 3px;
    }
    .login-github {
        background: #333;
    }
    .login-facebook {
        background: #3b5999;
        margin-left: 3px;
    }
`;

const SocialLoginButton = styled(Button)`
    flex: 1;
    color: #fff;
    font-size: 12px;
    &:hover {
        color: #fff;
    }
`;
const RegisterInputForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onChangeNickname = useCallback((e) => {
        setNickname(e.target.value);
    }, []);
    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    }, []);
    const onChangeConfirmEmail = useCallback((e) => {
        setConfirmEmail(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    const onChangeConfirmPassword = useCallback((e) => {
        setConfirmPassword(e.target.value);
    }, []);
    //const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    //onSubmitHandler 구현하기

    return (
        <Form
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
                LOGO
            </div>
            <Divider style={{ fontSize: "12px", color: "#242120" }}>
                소셜 로그인
            </Divider>
            <SocialLoginWrapper>
                <SocialLoginButton
                    className="login-google"
                    style={{ flex: "1" }}
                >
                    Google
                </SocialLoginButton>
                <SocialLoginButton
                    className="login-naver"
                    style={{ flex: "1", marginLeft: "3px" }}
                >
                    Naver
                </SocialLoginButton>
            </SocialLoginWrapper>
            <SocialLoginWrapper>
                <SocialLoginButton
                    className="login-github"
                    style={{ flex: "1" }}
                >
                    Github
                </SocialLoginButton>
                <SocialLoginButton
                    className="login-facebook"
                    style={{ flex: "1", marginLeft: "3px" }}
                >
                    Facebook
                </SocialLoginButton>
            </SocialLoginWrapper>
            <Divider style={{ fontSize: "12px", color: "#242120" }}>OR</Divider>
            <Form.Item
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
                <Input />
            </Form.Item>
            <Form.Item
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
                <Input />
            </Form.Item>
            <Form.Item
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

                            return Promise.reject(
                                "이메일이 일치하지 않습니다!",
                            );
                        },
                    }),
                ]}
                onChange={onChangeConfirmEmail}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="비밀번호"
                rules={[
                    {
                        required: true,
                        message: "비밀번호를 입력해주세요!",
                    },
                ]}
                hasFeedback
                onChangeEmail={onChangePassword}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
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

                            return Promise.reject(
                                "비밀번호가 일치하지 않습니다!",
                            );
                        },
                    }),
                ]}
                onChangeEmail={onChangeConfirmPassword}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterInputForm;
